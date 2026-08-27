export type RiskLevel = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type Severity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export type ComplianceStatus =
  | "COMPLIANT"
  | "PARTIALLY COMPLIANT"
  | "NON-COMPLIANT"
  | "UNDER REVIEW"
  | "NOT APPLICABLE";

export type MappingStatus =
  | "Not Mapped"
  | "AI Suggested — Awaiting Inspector Verification"
  | "Inspector Verified"
  | "Inspector Rejected"
  | "Requires Further Review";

export type ActionStatus =
  | "OPEN"
  | "ASSIGNED"
  | "IN PROGRESS"
  | "SUBMITTED FOR VERIFICATION"
  | "VERIFIED"
  | "CLOSED";

export interface Mine {
  id: string;
  name: string;
  operator: string;
  state: string;
  district: string;
  status: "Operational" | "Suspended" | "Under Review";
  complianceScore: number;
  lastInspection: string;
  baselineSafety: number;
  historicalRisk: number;
}

export interface ChecklistItem {
  id: string;
  group: "Safety" | "Compliance" | "Environmental";
  label: string;
  state: "unset" | "ok" | "issue" | "na";
}

export interface Inspection {
  id: string;
  mineId: string;
  inspector: string;
  date: string;
  status: "Draft" | "In Progress" | "Completed";
  checklist: ChecklistItem[];
}

export interface EvidenceFile {
  name: string;
  type: string;
  size: number;
  status: string;
}

export interface GeoCapture {
  latitude: number;
  longitude: number;
  accuracy: number;
  capturedAt: string;
  synthetic?: boolean;
}

export interface RegulatorySuggestion {
  potentialMatch: string;
  potentialRequirement: string;
  explanation: string;
  source: string;
  confidence: "Low" | "Medium" | "High";
  generatedAt: string;
}

export interface Observation {
  id: string;
  mineId: string;
  inspectionId: string | null;
  category: "Safety" | "Compliance" | "Environmental" | "Documentation" | "Worker Shift" | "Other";
  description: string;
  severity: Severity;
  clientTimestamp: string;
  serverTimestamp: string | null;
  location: GeoCapture | null;
  evidence: EvidenceFile[];
  mappingStatus: MappingStatus;
  suggestion: RegulatorySuggestion | null;
  inspectorNotes: string;
  open: boolean;
}

export interface CorrectiveAction {
  id: string;
  observationId: string | null;
  mineId: string;
  assignee: string;
  priority: Severity;
  dueDate: string;
  status: ActionStatus;
  createdDate: string;
  resolutionEvidence: string;
  verificationStatus: "Not Verified" | "Inspector Verified" | "Returned";
  title: string;
}

export interface ComplianceRecord {
  id: string;
  mineId: string;
  reference: string;
  requirement: string;
  status: ComplianceStatus;
  lastChecked: string;
  dueDate: string;
  evidenceStatus: "Provided" | "Partial" | "Missing" | "Not Required";
  responsible: string;
}

export interface WorkerShift {
  workerId: string;
  workerName: string;
  mineId: string;
  shift: "Morning" | "Afternoon" | "Night";
  startTime: string;
  endTime: string;
  previousShift: string;
  totalHours: number;
}

export interface AuditEvent {
  id: string;
  timestamp: string;
  user: string;
  role: string;
  action: string;
  entity: string;
  entityId: string;
  description: string;
}

export interface AppState {
  mines: Mine[];
  inspections: Inspection[];
  observations: Observation[];
  correctiveActions: CorrectiveAction[];
  complianceRecords: ComplianceRecord[];
  workerShifts: WorkerShift[];
  auditEvents: AuditEvent[];
}
