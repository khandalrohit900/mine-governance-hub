# Mine Governance Hub

MINEGUARD AI — COMPLETE WEBSITE BUILD PROMPT

ROLE AND OBJECTIVE

You are an expert full-stack product designer and software engineer. Build a complete, polished, functional web application prototype called:

MINEGUARD AI

Project Context

Team: Syntax 404
Institution: JECRC University
Hackathon: Smart India Hackathon 2026
Theme: Smart Automation

MINEGUARD AI is a government-oriented, software-based governance and compliance monitoring platform for coal mines.

The primary user is:

Government Inspector / Government Authority

Other future users include:

Mine Manager

Safety Officer

Administrator

The application must demonstrate a complete and connected governance workflow.

CORE PRODUCT WORKFLOW

The most important workflow in the application is:

LOGIN / DEMO ACCESS
↓
GOVERNMENT INSPECTOR DASHBOARD
↓
SELECT MINE
↓
CREATE INSPECTION
↓
COMPLETE INSPECTION CHECKLIST
↓
RECORD FIELD OBSERVATION
↓
ADD EVIDENCE
↓
CAPTURE GEOLOCATION
↓
RECORD TIMESTAMP
↓
AI-SUGGESTED REGULATORY MAPPING
↓
INSPECTOR REVIEWS SUGGESTION
↓
INSPECTOR CONFIRMS / REJECTS / MARKS FOR REVIEW
↓
CREATE CORRECTIVE ACTION
↓
ASSIGN RESPONSIBLE PERSON
↓
SET DEADLINE
↓
TRACK RESOLUTION
↓
SUBMIT RESOLUTION EVIDENCE
↓
INSPECTOR VERIFICATION
↓
CLOSE
↓
COMPLETE AUDIT TRAIL

This workflow is the highest priority.

Do not build disconnected screens. Every major module should connect logically to this workflow.

CRITICAL PRODUCT RULES

AI IS DECISION SUPPORT ONLY

AI must NEVER:

autonomously confirm a legal violation

make a final legal decision

certify regulatory compliance

legally approve an action

AI output must always be clearly labeled:

AI Suggested

Potential Match

AI Recommendation

Requires Verification

Only a human inspector can produce states such as:

Inspector Verified

Confirmed

Rejected

Closed

The system should visually make the distinction between:

AI SUGGESTION

and

HUMAN DECISION

very clear.

IMPORTANT SCOPE LIMITATIONS

DO NOT ADD:

CCTV monitoring

camera-based PPE detection

computer vision safety detection

worker detection through cameras

IoT dust sensors

IoT gas sensors

IoT temperature sensors

IoT humidity sensors

real-time hardware monitoring

hardware dependencies

MineGuard AI is currently a:

SOFTWARE-FIRST GOVERNANCE PLATFORM

Do not add unnecessary hardware features.

REGULATORY INFORMATION RULE

Do not fabricate:

laws

regulations

section numbers

government citations

regulatory deadlines

legal requirements

Until official regulatory documents are integrated, all regulatory content must be clearly marked:

Sample / Demo Regulatory Data

Do not pretend sample information is legally verified.

The application should be architected so verified regulatory sources can later be connected.

APPLICATION TYPE

Build a responsive, professional web application.

Primary target:

Desktop

Laptop

Also support:

Tablet

Smaller screens

The interface should feel like a serious:

Government platform

Enterprise compliance platform

Governance dashboard

Avoid:

gaming aesthetics

neon colors

excessive gradients

excessive glassmorphism

excessive animations

decorative clutter

fake AI visual effects

meaningless charts

Use a clean, professional, modern interface.

DESIGN SYSTEM

Create a consistent visual system.

Use:

restrained professional colors

strong typography hierarchy

accessible contrast

clean cards

readable tables

subtle borders

consistent spacing

clear status badges

meaningful icons

visible keyboard focus states

The UI should communicate:

Trust + Governance + Transparency + Safety + Accountability

Do not use real government logos.

Use a text-based brand identity:

MINEGUARD AI

Subtitle:

Digital Mine Governance & Compliance Platform

Display a clear indicator somewhere in the application:

DEMO MODE • SYNTHETIC DATA

This is essential.

GLOBAL APPLICATION LAYOUT

Create a persistent application shell:

┌──────────────┬─────────────────────────────────────────┐
│              │ TOP HEADER                              │
│              │ Page Title + Breadcrumb + User          │
│   LEFT       ├─────────────────────────────────────────┤
│   SIDEBAR    │                                         │
│              │                                         │
│   NAVIGATION │              MAIN CONTENT               │
│              │                                         │
│              │                                         │
│              │                                         │
└──────────────┴─────────────────────────────────────────┘

SIDEBAR NAVIGATION

Create working navigation for:

Dashboard

Mines

Inspections

Safety Observations

Compliance

Corrective Actions

Regulatory Intelligence

Worker Shifts

Reports

Audit Trail

At the bottom:

MINEGUARD AI
SIH 2026

Every navigation item must work.

Do not create dead links.

TOP HEADER

Include:

Current page title

Breadcrumb where appropriate

Notification indicator

Current user

Current role

Profile/menu button

Primary demo user:

Government Inspector

Role:

Government Authority

No real authentication is required for the prototype unless simple demo authentication is already supported.

Do not require backend credentials.

DASHBOARD

Create a professional Government Inspector dashboard.

SUMMARY CARDS

Show:

Total Mines

High / Critical Risk Mines

Open Violations

Pending Corrective Actions

Cards should use data dynamically.

MINE RISK OVERVIEW

Display mines ranked by risk.

Each row/card should show:

Mine Name

Mine ID

Location

Risk Score

Risk Category

Compliance Status

Open Violations

Risk categories:

LOW

MEDIUM

HIGH

CRITICAL

Allow the user to click a mine.

PRIORITY MINES

Show mines requiring immediate attention.

Explain why they are prioritized.

Example factors:

high risk score

multiple open violations

overdue corrective actions

low compliance score

Do not generate priorities randomly.

Use deterministic demo logic.

RECENT EVENTS

Display events such as:

Inspection created

Observation recorded

Evidence added

Location captured

AI regulatory suggestion generated

Inspector confirmed mapping

Corrective action created

Action assigned

Resolution submitted

Resolution verified

Violation closed

GOVERNANCE WORKFLOW VISUALIZATION

Display:

Record
→
Verify
→
Prioritize
→
Assign
→
Resolve
→
Close

Do NOT use:

"AI Detection"

The workflow must emphasize governance rather than autonomous AI detection.

MINES PAGE

Create a searchable and filterable mine list.

Use realistic but completely synthetic data.

Include approximately 8–12 mines.

Clearly mark all data as:

SYNTHETIC DEMO DATA

Fields:

Mine ID

Mine Name

Operator

State

District

Risk Score

Risk Level

Compliance Score

Open Violations

Last Inspection

Status

Features:

Search by mine name or ID

Filter by risk level

Filter by state

Sort by risk score

Sort by compliance score

Sort by last inspection

View Mine Details button

Empty search results should display a proper empty state.

MINE DETAILS PAGE

When a mine is selected, display:

MINE OVERVIEW

Mine Name

Mine ID

Operator

Location

State

District

Status

RISK SUMMARY

Display:

Overall Risk Score

Risk Level

Safety Component

Compliance Component

Corrective Action Component

Historical Component

Explain the deterministic calculation.

Use:

Safety = 40%
Compliance = 30%
Corrective Actions = 20%
Historical Risk = 10%

INSPECTION HISTORY

Display:

Date

Inspector

Status

Number of observations

Result

COMPLIANCE STATUS

Possible values:

Compliant

Partially Compliant

Non-Compliant

Under Review

OPEN VIOLATIONS

Display linked observations.

PENDING CORRECTIVE ACTIONS

Display:

Action ID

Priority

Assignee

Due Date

Status

RECENT ACTIVITY

Display mine-specific audit events.

INSPECTIONS MODULE

Create a working inspection workflow.

STEP 1

Select Mine.

STEP 2

Create Inspection.

Generate a demo inspection ID.

STEP 3

Display:

Inspection ID

Mine

Inspector

Date

Status

STEP 4

Display a checklist.

SAFETY

Roof support inspection

Travelway condition

Safety signage

Worker safety practices

Emergency preparedness

COMPLIANCE

Required inspection completed

Required report submitted

Regulatory deadline status

Documentation availability

ENVIRONMENTAL

Dust-control observation

Topsoil management record

Mine closure/progressive reclamation record

Display a clear disclaimer:

These are Sample / Demo Checklist Items and are not presented as a complete legal checklist.

The user should be able to:

Mark items

Save inspection state

Complete inspection

Create an observation from the inspection

SAFETY OBSERVATIONS

Create a fully working observation form.

Fields:

Observation ID

Mine

Inspection

Category

Description

Severity

Date/Time

Location

Evidence

Regulatory Mapping Status

Inspector Notes

Categories:

Safety

Compliance

Environmental

Documentation

Worker Shift

Other

Severity:

LOW

MEDIUM

HIGH

CRITICAL

When submitted:

Generate observation ID.

Associate it with the selected mine.

Associate it with an inspection if selected.

Store category.

Store severity.

Store description.

Store client timestamp.

Store geolocation if captured.

Store evidence metadata.

Update relevant dashboard counters.

Recalculate deterministic risk score.

Create an audit event.

Make the observation visible in relevant mine details.

GEOLOCATION

Implement browser geolocation.

Create a button:

Capture Location

When clicked:

Attempt to retrieve:

Latitude

Longitude

Accuracy

Show loading state while location is being retrieved.

If successful:

Display captured location data clearly.

If permission is denied:

Show:

Location permission was denied. No location evidence was captured.

If unsupported:

Show:

Geolocation is not supported by this browser/device.

Do NOT fake real GPS coordinates.

If demo coordinates are included for demonstration, clearly label:

DEMO / SYNTHETIC LOCATION DATA

Do not represent synthetic coordinates as real field evidence.

TIMESTAMP MODEL

Every observation should include:

clientTimestamp
serverTimestamp

For this frontend/demo prototype:

clientTimestamp = current browser/device timestamp

serverTimestamp = null or "Awaiting backend timestamp"

Display a clear explanation that:

The client timestamp is not the authoritative server timestamp.

EVIDENCE MANAGEMENT

Create evidence selection UI.

Allow selection of:

Images

PDFs

Documents

For each selected file display:

File Name

File Type

File Size

Upload Status

Since this is a frontend/demo prototype:

Do not pretend that files are permanently stored on a server.

Use wording such as:

Selected for demo submission

or:

Local demo file metadata captured

Prepare the data model for future multipart upload integration.

Do not create fake permanent URLs.

COMPLIANCE PAGE

Create a Compliance Register.

Fields:

Mine

Regulation / Reference

Requirement

Compliance Status

Last Checked

Due Date

Evidence Status

Responsible Party

Statuses:

COMPLIANT

PARTIALLY COMPLIANT

NON-COMPLIANT

UNDER REVIEW

NOT APPLICABLE

Provide filters for:

Mine

Status

Due Date

Evidence Status

Regulatory content must be clearly labeled:

Sample / Demo Regulatory Data

unless backed by verified source material.

REGULATORY INTELLIGENCE

Create an AI regulatory intelligence interface.

This is currently:

DEMO / SAMPLE AI OUTPUT

Do not claim a real AI model is making legal determinations.

Create an input:

What regulation or requirement may apply to this observation?

Allow users to select an existing observation or enter a description.

Show a structured sample response:

AI Suggested Regulatory Mapping

Potential Match

Sample/demo regulatory topic.

Potential Requirement

Clearly labeled demo content.

Explanation

Explain why the topic may be relevant.

Source

Sample / Demo Regulatory Data — requires authoritative source verification

Confidence

Low

Medium

High

Confidence does NOT mean legal certainty.

Verification Status

Awaiting Inspector Verification

Provide working buttons:

Confirm Mapping

Reject

Mark for Review

These buttons must change application state.

When confirmed:

Status:

Inspector Verified

When rejected:

Status:

Inspector Rejected

When review is selected:

Status:

Requires Further Review

Create corresponding audit events.

Never display:

AI Certified

AI Legally Approved

AI Confirmed Legal Violation

CORRECTIVE ACTIONS

Create a working Corrective Actions module.

Each action must contain:

Action ID

Related Observation

Mine

Assigned Person

Priority

Due Date

Status

Created Date

Resolution Evidence

Verification Status

Statuses:

OPEN

ASSIGNED

IN PROGRESS

SUBMITTED FOR VERIFICATION

VERIFIED

CLOSED

OVERDUE

Allow working interactions:

Create Action

Assign Person

Change Status

Mark Submitted

Verify Resolution

Close Action

State changes should follow a logical workflow.

Example:

OPEN
→
ASSIGNED
→
IN PROGRESS
→
SUBMITTED FOR VERIFICATION
→
VERIFIED
→
CLOSED

Create audit events for major changes.

Closed actions should no longer appear as pending actions.

WORKER SHIFT COMPLIANCE

Create a Worker Shift Monitoring page.

Display:

Worker ID

Worker Name

Mine

Shift

Start Time

End Time

Previous Shift

Total Hours

Rule Status

Show warnings for suspicious scheduling patterns.

Use:

Potential Shift-Rule Conflict

Do NOT automatically say:

Legal Violation

Do not claim a specific legal working-hours limit unless verified through official sources.

Clearly explain:

Demo advisory logic only. Formal rule evaluation requires verified regulatory mapping.

RISK SCORING ENGINE

Risk scoring must be:

DETERMINISTIC AND TRANSPARENT

Do not use AI or random numbers to generate risk scores.

Use configurable demo weights:

Safety Violations = 40%
Compliance Gaps = 30%
Corrective Actions = 20%
Historical Risk = 10%

Display:

Overall Risk Score

Safety Component

Compliance Component

Corrective Action Component

Historical Component

Risk levels:

0–24   = LOW
25–49  = MEDIUM
50–74  = HIGH
75–100 = CRITICAL

Clearly label these values:

Demo Risk Configuration

The risk score should update logically when observations and corrective actions change.

Do not hide the logic.

REPORTS

Create a Reports page.

Report types:

Mine Compliance Report

Inspection Report

Violation Report

Corrective Action Report

Risk Summary

Regulatory Change Summary

Provide:

View

Generate

Export

These must not silently do nothing.

For the prototype:

View

Should display a working preview.

Generate

Should generate/update the preview using current application data.

Export

If actual export is not implemented, display:

Export is planned for the backend/reporting phase.

Do not create deceptive buttons.

AUDIT TRAIL

Create a working Audit Trail.

Display events chronologically.

Fields:

Timestamp

User

Role

Action

Entity

Entity ID

Description

Example events:

Inspection created

Observation recorded

Evidence added

Location captured

AI regulatory suggestion generated

Inspector confirmed mapping

Corrective action created

Action assigned

Resolution submitted

Resolution verified

Violation closed

Whenever a major action occurs, automatically add an audit event.

The audit trail is essential to the governance concept.

NOTIFICATIONS

Create a notification/toast system.

Use it for:

Successful inspection creation

Observation saved

Location captured

File selected

Regulatory mapping updated

Corrective action created

Status changed

Validation errors

Geolocation errors

Do not use browser alert() repeatedly.

APPLICATION STATE

The prototype should maintain a centralized application state.

Conceptually:

appState = {
  currentUser: {},
  currentPage: "",
  mines: [],
  inspections: [],
  observations: [],
  correctiveActions: [],
  complianceRecords: [],
  auditEvents: [],
  notifications: []
}

Use localStorage for demo persistence.

The following should survive refresh where practical:

Created inspections

Observations

Corrective actions

Status updates

Audit events

Clearly keep demo data separate from future authoritative backend data.

DATA

Create approximately 8–12 completely synthetic mines.

Example fields:

{
  "id": "MG-DEMO-001",
  "name": "Synthetic Demo Coal Mine",
  "operator": "Demo Mining Corporation",
  "state": "Demo State",
  "district": "Demo District",
  "status": "Operational",
  "riskScore": 68,
  "complianceScore": 72,
  "openViolations": 3,
  "pendingActions": 2,
  "lastInspection": "2026-08-15",
  "inspections": [],
  "observations": [],
  "correctiveActions": []
}

All data must be clearly synthetic.

Do not imply that these are real government records.

ACCESSIBILITY

Implement:

Semantic HTML

Proper form labels

Keyboard-accessible controls

Visible focus states

Sufficient contrast

ARIA labels where useful

Status text in addition to color

Meaningful button names

Do not rely only on color.

RESPONSIVENESS

Desktop is the primary target.

Also support:

Laptop

Tablet

Smaller screens

The sidebar may collapse on smaller screens.

Tables should remain usable through responsive layouts.

Avoid unnecessary horizontal scrolling where possible.

ERROR HANDLING

Handle:

Missing data

Empty search results

Invalid form input

Geolocation permission denied

Unsupported geolocation

Geolocation timeout/error

Invalid file selection

Unsupported files

Local storage issues

Never silently fail.

Display helpful messages.

DEMO DATA AND DEMO MODE

The application must clearly indicate:

DEMO MODE • SYNTHETIC DATA

Do not make users think the prototype is connected to real government systems.

Add a small information section explaining:

This prototype uses synthetic data for Smart India Hackathon demonstration purposes. Regulatory information shown in demo mode must be verified against authoritative sources before operational use.

FUTURE ARCHITECTURE COMPATIBILITY

Structure the application so it can later integrate with:

Frontend
HTML / CSS / JavaScript
        ↓
REST API
        ↓
FastAPI
        ↓
PostgreSQL
        ↓
AI Service
        ↓
Gemini
        ↓
Regulatory Knowledge Base / RAG

The future backend will own:

Authentication

Authorization

Database state

Authoritative timestamps

Validation

Risk calculation

Audit records

Compliance decisions

Evidence storage

AI orchestration

The frontend must NOT be treated as authoritative.

Avoid hard-coding backend URLs throughout the application.

Use a central API configuration concept for future integration.

NO SECRETS

Never include:

API keys

Gemini API keys

Database passwords

JWT secrets

Access tokens

Credentials

in frontend code.

REUSABLE UI COMPONENTS

Create consistent reusable patterns for:

Cards

Tables

Status badges

Buttons

Forms

Modal dialogs

Notifications

Empty states

Confirmation dialogs

Progress indicators

Detail panels

Maintain consistency throughout the application.

IMPORTANT INTERACTION RULE

DO NOT create fake buttons.

Every visible action button must:

Perform a real frontend action,

Change application state,

Navigate somewhere,

Open meaningful content,

OR clearly state that the functionality belongs to a future phase.

Do not create buttons that silently do nothing.

REQUIRED NAVIGATION

Every navigation item must display a working interface:

Dashboard

Mines

Inspections

Safety Observations

Compliance

Corrective Actions

Regulatory Intelligence

Worker Shifts

Reports

Audit Trail

REQUIRED DEMO SCENARIO

Make it possible to demonstrate this complete scenario:

Step 1

Open Government Inspector Dashboard.

Step 2

Select a high-risk mine.

Step 3

Review its risk and compliance status.

Step 4

Create an inspection.

Step 5

Complete the sample inspection checklist.

Step 6

Create a high-severity observation.

Step 7

Select evidence.

Step 8

Capture browser geolocation.

Step 9

Record the client timestamp.

Step 10

Open Regulatory Intelligence.

Step 11

Receive a clearly labeled:

AI Suggested Potential Match

Step 12

Inspector confirms or rejects the mapping.

Step 13

Create a corrective action.

Step 14

Assign a responsible person.

Step 15

Update the action through the workflow.

Step 16

Submit resolution.

Step 17

Inspector verifies the resolution.

Step 18

Close the action.

Step 19

Open Audit Trail.

Step 20

Verify that the entire workflow is recorded.

This scenario must be coherent and connected.

PRODUCT POSITIONING

Do NOT position MineGuard AI as:

"Just another AI dashboard."

Position it as:

A DIGITAL MINE GOVERNANCE WORKFLOW

The core value proposition is:

MineGuard AI converts field-level mine compliance observations into a traceable digital governance workflow, connecting evidence, regulatory intelligence, risk prioritization, corrective action, human verification, and auditable closure.

PRIORITY ORDER

When deciding what to build first, prioritize:

Inspection workflow

Observation creation

Evidence metadata

Geolocation

Timestamping

AI regulatory suggestion UI

Human verification

Corrective actions

Audit trail

Risk scoring

Worker shift advisory

Regulatory updates

Reports

Advanced AI features

A smaller, fully connected and working system is better than a large application with disconnected screens.

FINAL QUALITY CHECK

Before considering the application complete, verify:

✓ Dashboard loads immediately with synthetic data.

✓ All navigation items work.

✓ Mine search works.

✓ Mine filters work.

✓ Mine details work.

✓ Inspection creation works.

✓ Checklist works.

✓ Observation creation works.

✓ Severity and category work.

✓ Evidence metadata selection works.

✓ Geolocation works when permission is granted.

✓ Geolocation failure is handled gracefully.

✓ Regulatory Intelligence clearly distinguishes AI suggestions from human decisions.

✓ Confirm/Reject/Review actions work.

✓ Corrective actions can be created.

✓ Corrective action status changes work.

✓ Audit events are created.

✓ Risk scores are deterministic.

✓ Worker shift warnings are advisory rather than claimed legal violations.

✓ Reports preview works.

✓ Demo-created records persist across refresh where practical.

✓ No buttons silently do nothing.

✓ No fake government data is presented as real.

✓ No regulatory claims are fabricated.

✓ No API keys or secrets are exposed.

✓ The complete Golden Workflow can be demonstrated.

FINAL INSTRUCTION

Build MINEGUARD AI as a complete, connected, professional Smart India Hackathon 2026 prototype.

Optimize for:

Working functionality

Clear governance workflow

Maintainability

Professional UI

Demonstration value

Human accountability

Auditability

Transparency

Future backend compatibility

Do NOT optimize for the largest amount of code.

Do NOT overengineer.

The most important outcome is a working demonstration of:

FIELD OBSERVATION → EVIDENCE → REGULATORY INTELLIGENCE → HUMAN VERIFICATION → CORRECTIVE ACTION → RESOLUTION → VERIFIED CLOSURE → AUDIT TRAIL

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ada06290-3efd-4178-aac2-90aedf8e5e52).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
