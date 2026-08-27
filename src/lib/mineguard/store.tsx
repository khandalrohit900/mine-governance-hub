import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { CURRENT_USER, newChecklist, seedState } from "./seed";
import type {
  AppState,
  ActionStatus,
  ChecklistItem,
  CorrectiveAction,
  Inspection,
  Observation,
  RegulatorySuggestion,
} from "./types";

const STORAGE_KEY = "mineguard-demo-state-v1";

interface StoreValue {
  state: AppState;
  hydrated: boolean;
  storageError: string | null;
  logEvent: (e: { action: string; entity: string; entityId: string; description: string }) => void;
  createInspection: (mineId: string) => Inspection;
  updateChecklistItem: (inspectionId: string, itemId: string, value: ChecklistItem["state"]) => void;
  setInspectionStatus: (inspectionId: string, status: Inspection["status"]) => void;
  addObservation: (o: Omit<Observation, "id" | "serverTimestamp" | "mappingStatus" | "suggestion" | "open">) => Observation;
  attachSuggestion: (observationId: string, s: RegulatorySuggestion) => void;
  setMappingStatus: (observationId: string, status: Observation["mappingStatus"]) => void;
  createAction: (a: Omit<CorrectiveAction, "id" | "createdDate" | "verificationStatus">) => CorrectiveAction;
  updateAction: (id: string, patch: Partial<CorrectiveAction>, note: string) => void;
  resetDemo: () => void;
}

const StoreContext = createContext<StoreValue | null>(null);

let counter = 0;
const uid = (prefix: string) => {
  counter += 1;
  return `${prefix}-${Date.now().toString(36).slice(-5).toUpperCase()}${counter}`;
};

export function MineGuardProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(() => seedState());
  const [hydrated, setHydrated] = useState(false);
  const [storageError, setStorageError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AppState;
        const seed = seedState();
        setState({ ...seed, ...parsed, mines: seed.mines });
      }
    } catch {
      setStorageError("Saved demo data could not be read. Starting from the synthetic seed dataset.");
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      setStorageError("Local demo persistence is unavailable in this browser. Changes will be lost on refresh.");
    }
  }, [state, hydrated]);

  const logEvent = useCallback<StoreValue["logEvent"]>((e) => {
    setState((s) => ({
      ...s,
      auditEvents: [
        {
          id: uid("AUD"),
          timestamp: new Date().toISOString(),
          user: CURRENT_USER.name,
          role: CURRENT_USER.role,
          ...e,
        },
        ...s.auditEvents,
      ],
    }));
  }, []);

  const createInspection = useCallback<StoreValue["createInspection"]>(
    (mineId) => {
      const inspection: Inspection = {
        id: uid("INS"),
        mineId,
        inspector: CURRENT_USER.name,
        date: new Date().toISOString(),
        status: "In Progress",
        checklist: newChecklist(),
      };
      setState((s) => ({ ...s, inspections: [inspection, ...s.inspections] }));
      logEvent({
        action: "Inspection created",
        entity: "Inspection",
        entityId: inspection.id,
        description: `Inspection opened for mine ${mineId}.`,
      });
      return inspection;
    },
    [logEvent],
  );

  const updateChecklistItem = useCallback<StoreValue["updateChecklistItem"]>((inspectionId, itemId, value) => {
    setState((s) => ({
      ...s,
      inspections: s.inspections.map((i) =>
        i.id === inspectionId
          ? { ...i, checklist: i.checklist.map((c) => (c.id === itemId ? { ...c, state: value } : c)) }
          : i,
      ),
    }));
  }, []);

  const setInspectionStatus = useCallback<StoreValue["setInspectionStatus"]>(
    (inspectionId, status) => {
      setState((s) => ({
        ...s,
        inspections: s.inspections.map((i) => (i.id === inspectionId ? { ...i, status } : i)),
      }));
      logEvent({
        action: `Inspection ${status.toLowerCase()}`,
        entity: "Inspection",
        entityId: inspectionId,
        description: `Inspection status set to ${status} by inspector.`,
      });
    },
    [logEvent],
  );

  const addObservation = useCallback<StoreValue["addObservation"]>(
    (o) => {
      const observation: Observation = {
        ...o,
        id: uid("OBS"),
        serverTimestamp: null,
        mappingStatus: "Not Mapped",
        suggestion: null,
        open: true,
      };
      setState((s) => ({ ...s, observations: [observation, ...s.observations] }));
      logEvent({
        action: "Observation recorded",
        entity: "Observation",
        entityId: observation.id,
        description: `${observation.severity} ${observation.category} observation recorded at mine ${observation.mineId}.`,
      });
      if (observation.evidence.length) {
        logEvent({
          action: "Evidence added",
          entity: "Observation",
          entityId: observation.id,
          description: `${observation.evidence.length} evidence file(s) selected for demo submission.`,
        });
      }
      if (observation.location) {
        logEvent({
          action: "Location captured",
          entity: "Observation",
          entityId: observation.id,
          description: `Browser geolocation captured (accuracy ±${Math.round(observation.location.accuracy)} m).`,
        });
      }
      return observation;
    },
    [logEvent],
  );

  const attachSuggestion = useCallback<StoreValue["attachSuggestion"]>(
    (observationId, suggestion) => {
      setState((s) => ({
        ...s,
        observations: s.observations.map((o) =>
          o.id === observationId
            ? { ...o, suggestion, mappingStatus: "AI Suggested — Awaiting Inspector Verification" }
            : o,
        ),
      }));
      logEvent({
        action: "AI regulatory suggestion generated",
        entity: "Observation",
        entityId: observationId,
        description: `Demo AI suggested potential match: ${suggestion.potentialMatch} (confidence ${suggestion.confidence}). Awaiting inspector verification.`,
      });
    },
    [logEvent],
  );

  const setMappingStatus = useCallback<StoreValue["setMappingStatus"]>(
    (observationId, status) => {
      setState((s) => ({
        ...s,
        observations: s.observations.map((o) => (o.id === observationId ? { ...o, mappingStatus: status } : o)),
      }));
      logEvent({
        action: `Inspector decision: ${status}`,
        entity: "Observation",
        entityId: observationId,
        description: `Human inspector set regulatory mapping status to "${status}".`,
      });
    },
    [logEvent],
  );

  const createAction = useCallback<StoreValue["createAction"]>(
    (a) => {
      const action: CorrectiveAction = {
        ...a,
        id: uid("CA"),
        createdDate: new Date().toISOString(),
        verificationStatus: "Not Verified",
      };
      setState((s) => ({ ...s, correctiveActions: [action, ...s.correctiveActions] }));
      logEvent({
        action: "Corrective action created",
        entity: "Corrective Action",
        entityId: action.id,
        description: `${action.priority} priority action created for mine ${action.mineId}, due ${action.dueDate}.`,
      });
      if (action.assignee) {
        logEvent({
          action: "Action assigned",
          entity: "Corrective Action",
          entityId: action.id,
          description: `Assigned to ${action.assignee}.`,
        });
      }
      return action;
    },
    [logEvent],
  );

  const updateAction = useCallback<StoreValue["updateAction"]>(
    (id, patch, note) => {
      setState((s) => {
        const action = s.correctiveActions.find((a) => a.id === id);
        const next = s.correctiveActions.map((a) => (a.id === id ? { ...a, ...patch } : a));
        let observations = s.observations;
        if (patch.status === "CLOSED" && action?.observationId) {
          observations = s.observations.map((o) => (o.id === action.observationId ? { ...o, open: false } : o));
        }
        return { ...s, correctiveActions: next, observations };
      });
      logEvent({
        action: note,
        entity: "Corrective Action",
        entityId: id,
        description: patch.status ? `Status changed to ${patch.status}.` : note,
      });
    },
    [logEvent],
  );

  const resetDemo = useCallback(() => {
    setState(seedState());
  }, []);

  const value = useMemo<StoreValue>(
    () => ({
      state,
      hydrated,
      storageError,
      logEvent,
      createInspection,
      updateChecklistItem,
      setInspectionStatus,
      addObservation,
      attachSuggestion,
      setMappingStatus,
      createAction,
      updateAction,
      resetDemo,
    }),
    [
      state,
      hydrated,
      storageError,
      logEvent,
      createInspection,
      updateChecklistItem,
      setInspectionStatus,
      addObservation,
      attachSuggestion,
      setMappingStatus,
      createAction,
      updateAction,
      resetDemo,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useMineGuard() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useMineGuard must be used inside MineGuardProvider");
  return ctx;
}

export { CURRENT_USER, type ActionStatus };
