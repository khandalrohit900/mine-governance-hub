import type {
  AppState,
  ChecklistItem,
  ComplianceRecord,
  Mine,
  WorkerShift,
} from "./types";

export const CURRENT_USER = {
  name: "A. Verma",
  role: "Government Authority",
  title: "Government Inspector",
};

export const CHECKLIST_TEMPLATE: Omit<ChecklistItem, "state">[] = [
  { id: "s1", group: "Safety", label: "Roof support inspection" },
  { id: "s2", group: "Safety", label: "Travelway condition" },
  { id: "s3", group: "Safety", label: "Safety signage" },
  { id: "s4", group: "Safety", label: "Worker safety practices" },
  { id: "s5", group: "Safety", label: "Emergency preparedness" },
  { id: "c1", group: "Compliance", label: "Required inspection completed" },
  { id: "c2", group: "Compliance", label: "Required report submitted" },
  { id: "c3", group: "Compliance", label: "Regulatory deadline status" },
  { id: "c4", group: "Compliance", label: "Documentation availability" },
  { id: "e1", group: "Environmental", label: "Dust-control observation" },
  { id: "e2", group: "Environmental", label: "Topsoil management record" },
  { id: "e3", group: "Environmental", label: "Mine closure / progressive reclamation record" },
];

export function newChecklist(): ChecklistItem[] {
  return CHECKLIST_TEMPLATE.map((i) => ({ ...i, state: "unset" as const }));
}

const mines: Mine[] = [
  ["MG-DEMO-001", "Northfield Synthetic Colliery", "Demo Mining Corporation", "Demo State A", "District Alpha", 58, "2026-08-15", 46, 62],
  ["MG-DEMO-002", "Baraghat Demo Opencast", "Sample Coalfields Ltd.", "Demo State A", "District Beta", 81, "2026-07-30", 18, 24],
  ["MG-DEMO-003", "Kanhar Valley Demo Mine", "Synthetic Resources Pvt.", "Demo State B", "District Gamma", 44, "2026-08-02", 55, 71],
  ["MG-DEMO-004", "Eastridge Demo Underground", "Demo Mining Corporation", "Demo State B", "District Delta", 69, "2026-08-19", 32, 40],
  ["MG-DEMO-005", "Sample Hill Coal Block", "Placeholder Minerals Co.", "Demo State C", "District Epsilon", 90, "2026-08-21", 12, 15],
  ["MG-DEMO-006", "Tarhi Demo Coal Project", "Sample Coalfields Ltd.", "Demo State C", "District Zeta", 51, "2026-06-28", 49, 58],
  ["MG-DEMO-007", "Westbank Synthetic Mine", "Synthetic Resources Pvt.", "Demo State A", "District Eta", 63, "2026-08-10", 36, 44],
  ["MG-DEMO-008", "Lohari Demo Opencast", "Placeholder Minerals Co.", "Demo State D", "District Theta", 38, "2026-05-16", 61, 76],
  ["MG-DEMO-009", "Chandpur Demo Colliery", "Demo Mining Corporation", "Demo State D", "District Iota", 74, "2026-08-05", 27, 33],
  ["MG-DEMO-010", "Sirsi Sample Coal Mine", "Sample Coalfields Ltd.", "Demo State B", "District Kappa", 86, "2026-08-23", 14, 20],
].map(([id, name, operator, state, district, complianceScore, lastInspection, baselineSafety, historicalRisk]) => ({
  id: id as string,
  name: name as string,
  operator: operator as string,
  state: state as string,
  district: district as string,
  status: (complianceScore as number) < 45 ? "Under Review" : "Operational",
  complianceScore: complianceScore as number,
  lastInspection: lastInspection as string,
  baselineSafety: baselineSafety as number,
  historicalRisk: historicalRisk as number,
}));

const requirements: [string, string][] = [
  ["DEMO-REG-01", "Periodic statutory mine safety inspection record maintained"],
  ["DEMO-REG-02", "Roof and side support register updated"],
  ["DEMO-REG-03", "Dust suppression measures documented"],
  ["DEMO-REG-04", "Worker shift and attendance register maintained"],
  ["DEMO-REG-05", "Progressive mine closure plan progress report filed"],
];

const statuses: ComplianceRecord["status"][] = [
  "COMPLIANT",
  "PARTIALLY COMPLIANT",
  "NON-COMPLIANT",
  "UNDER REVIEW",
  "NOT APPLICABLE",
];

const complianceRecords: ComplianceRecord[] = mines.flatMap((m, mi) =>
  requirements.map(([ref, req], ri) => ({
    id: `CR-${m.id.slice(-3)}-${ri + 1}`,
    mineId: m.id,
    reference: ref,
    requirement: req,
    status: statuses[(mi + ri * 2) % (m.complianceScore > 75 ? 2 : 5)],
    lastChecked: m.lastInspection,
    dueDate: `2026-0${((mi + ri) % 3) + 9}-${String(((mi * 3 + ri * 5) % 27) + 1).padStart(2, "0")}`,
    evidenceStatus: (["Provided", "Partial", "Missing", "Not Required"] as const)[(mi + ri) % 4],
    responsible: ["Mine Manager", "Safety Officer", "Environment Officer"][(mi + ri) % 3],
  })),
);

const workerShifts: WorkerShift[] = mines.slice(0, 6).flatMap((m, mi) =>
  Array.from({ length: 3 }).map((_, wi) => {
    const idx = mi * 3 + wi;
    const shift = (["Morning", "Afternoon", "Night"] as const)[wi];
    const hours = [8, 9, 12, 10, 8, 13, 11, 8, 9][idx % 9];
    return {
      workerId: `W-${String(1001 + idx)}`,
      workerName: `Demo Worker ${idx + 1}`,
      mineId: m.id,
      shift,
      startTime: ["06:00", "14:00", "22:00"][wi],
      endTime: ["14:00", "22:00", "06:00"][wi],
      previousShift: idx % 4 === 0 ? "Night (ended 06:00 same day)" : "Rest day",
      totalHours: hours,
    };
  }),
);

export function seedState(): AppState {
  return {
    mines,
    inspections: [],
    observations: [],
    correctiveActions: [],
    complianceRecords,
    workerShifts,
    auditEvents: [
      {
        id: "AUD-SEED-1",
        timestamp: new Date("2026-08-24T09:15:00Z").toISOString(),
        user: CURRENT_USER.name,
        role: CURRENT_USER.role,
        action: "Demo workspace initialised",
        entity: "System",
        entityId: "—",
        description: "Synthetic demonstration dataset loaded for SIH 2026 prototype.",
      },
    ],
  };
}
