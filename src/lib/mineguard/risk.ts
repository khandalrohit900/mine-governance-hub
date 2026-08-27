import type { AppState, Mine, RiskLevel } from "./types";

export const RISK_WEIGHTS = {
  safety: 0.4,
  compliance: 0.3,
  correctiveActions: 0.2,
  historical: 0.1,
};

const SEVERITY_POINTS: Record<string, number> = {
  LOW: 5,
  MEDIUM: 12,
  HIGH: 22,
  CRITICAL: 32,
};

export interface RiskBreakdown {
  safety: number;
  compliance: number;
  correctiveActions: number;
  historical: number;
  overall: number;
  level: RiskLevel;
  openViolations: number;
  pendingActions: number;
  overdueActions: number;
}

export function riskLevel(score: number): RiskLevel {
  if (score < 25) return "LOW";
  if (score < 50) return "MEDIUM";
  if (score < 75) return "HIGH";
  return "CRITICAL";
}

const clamp = (n: number) => Math.max(0, Math.min(100, Math.round(n)));

export function computeRisk(mine: Mine, state: AppState, now = new Date()): RiskBreakdown {
  const openObs = state.observations.filter((o) => o.mineId === mine.id && o.open);
  const safety = clamp(
    mine.baselineSafety + openObs.reduce((sum, o) => sum + (SEVERITY_POINTS[o.severity] ?? 0), 0),
  );

  const complianceRecords = state.complianceRecords.filter((c) => c.mineId === mine.id);
  const gapPoints = complianceRecords.reduce((sum, c) => {
    if (c.status === "NON-COMPLIANT") return sum + 30;
    if (c.status === "PARTIALLY COMPLIANT") return sum + 15;
    if (c.status === "UNDER REVIEW") return sum + 8;
    return sum;
  }, 0);
  const compliance = clamp((100 - mine.complianceScore) * 0.6 + gapPoints * 0.8);

  const pending = state.correctiveActions.filter(
    (a) => a.mineId === mine.id && a.status !== "CLOSED" && a.status !== "VERIFIED",
  );
  const overdue = pending.filter((a) => new Date(a.dueDate).getTime() < now.getTime());
  const correctiveActions = clamp(pending.length * 12 + overdue.length * 18);

  const historical = clamp(mine.historicalRisk);

  const overall = clamp(
    safety * RISK_WEIGHTS.safety +
      compliance * RISK_WEIGHTS.compliance +
      correctiveActions * RISK_WEIGHTS.correctiveActions +
      historical * RISK_WEIGHTS.historical,
  );

  return {
    safety,
    compliance,
    correctiveActions,
    historical,
    overall,
    level: riskLevel(overall),
    openViolations: openObs.length,
    pendingActions: pending.length,
    overdueActions: overdue.length,
  };
}

export function complianceLabel(score: number) {
  if (score >= 85) return "Compliant";
  if (score >= 65) return "Partially Compliant";
  if (score >= 45) return "Under Review";
  return "Non-Compliant";
}
