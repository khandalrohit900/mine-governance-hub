import type { RegulatorySuggestion } from "./types";

/**
 * Deterministic, keyword-based DEMO suggestion generator.
 * This is NOT a legal determination engine and is not backed by an AI model or
 * verified regulatory corpus. Output is clearly labelled sample/demo content.
 */
const TOPICS: { keywords: string[]; match: string; requirement: string; explanation: string }[] = [
  {
    keywords: ["roof", "support", "collapse", "strata", "side"],
    match: "Demo Topic — Roof & Side Support Management",
    requirement: "Sample requirement: support systems in underground workings should be inspected and recorded on a defined cycle.",
    explanation: "The description mentions roof/side support conditions, which typically map to support-management record keeping topics.",
  },
  {
    keywords: ["dust", "air", "emission", "spray", "particulate"],
    match: "Demo Topic — Dust Suppression & Air Quality Records",
    requirement: "Sample requirement: dust-control measures and their operation should be documented for active working areas.",
    explanation: "Wording refers to dust or airborne particulate conditions, which usually map to dust-control documentation topics.",
  },
  {
    keywords: ["shift", "hours", "overtime", "rest", "roster"],
    match: "Demo Topic — Working Hours & Shift Records",
    requirement: "Sample requirement: shift registers should evidence hours worked and rest intervals for each worker.",
    explanation: "The observation refers to shift or working-hour patterns, which map to attendance/shift register topics.",
  },
  {
    keywords: ["signage", "sign", "warning", "marking", "notice"],
    match: "Demo Topic — Statutory Signage & Warning Notices",
    requirement: "Sample requirement: hazard and direction signage should be legible and maintained at designated locations.",
    explanation: "Signage or notice conditions were described, mapping to workplace signage documentation topics.",
  },
  {
    keywords: ["report", "record", "register", "document", "filing", "submission"],
    match: "Demo Topic — Statutory Reporting & Record Keeping",
    requirement: "Sample requirement: prescribed returns and registers should be maintained and submitted within stated timelines.",
    explanation: "Documentation or reporting gaps were described, mapping to record-keeping topics.",
  },
  {
    keywords: ["water", "spoil", "topsoil", "reclamation", "closure", "environment"],
    match: "Demo Topic — Progressive Reclamation & Environmental Records",
    requirement: "Sample requirement: reclamation progress and topsoil handling should be recorded against the approved plan.",
    explanation: "Environmental or land-management wording maps to reclamation record topics.",
  },
];

const FALLBACK = {
  match: "Demo Topic — General Mine Safety Management",
  requirement: "Sample requirement: identified hazards should be recorded, risk-assessed and tracked to closure.",
  explanation: "No specific demo topic keyword matched, so a general safety-management topic is suggested for inspector review.",
};

export function generateSuggestion(text: string, severity = "MEDIUM"): RegulatorySuggestion {
  const lower = text.toLowerCase();
  let best = FALLBACK;
  let hits = 0;
  for (const topic of TOPICS) {
    const count = topic.keywords.filter((k) => lower.includes(k)).length;
    if (count > hits) {
      hits = count;
      best = { match: topic.match, requirement: topic.requirement, explanation: topic.explanation };
    }
  }
  const confidence: RegulatorySuggestion["confidence"] =
    hits >= 2 ? "High" : hits === 1 ? "Medium" : "Low";

  return {
    potentialMatch: best.match,
    potentialRequirement: best.requirement,
    explanation: `${best.explanation} Recorded severity: ${severity}. Confidence reflects keyword overlap only and does not indicate legal certainty.`,
    source: "Sample / Demo Regulatory Data — requires authoritative source verification",
    confidence,
    generatedAt: new Date().toISOString(),
  };
}
