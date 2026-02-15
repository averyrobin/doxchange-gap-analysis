# DocXchange Capability Gap Board — Data for Lucid Template

**Goal:** Establish a DocXchange capability that increases the value proposition of nCino's platform and digital experiences

**Legend:**
- Gap: Low (blue) / Medium (teal) / High (orange)
- Performance Value: 1 (low) – 5 (high) — impact on banker/client workflow efficiency
- Business Value: 1 (low) – 5 (high) — impact on FI revenue, cost savings, or competitive positioning
- Risk: 1 (low) – 5 (high) — risk to nCino if we don't solve this
- Type: Parity (catching up to legacy portal) / Innovation (new capability neither portal had)

---

## P0 — Access (Make DocXchange Available)

| Capability | Gap | Perf Value | Biz Value | Risk | Type | Notes |
|---|---|---|---|---|---|---|
| Solution-agnostic API (decouple from Business DE) | High | 5 | 5 | 5 | Innovation | Blocks entire Commercial Onboarding installed base on Consumer DE. Q2 2026 committed customer. No legacy portal equivalent — this is a new architectural requirement. |
| Eliminate Salesforce user licensing burden | High | 4 | 5 | 4 | Innovation | Each API requires separate SF users. Cost outside nCino's control. Blocks FIs where Business DE isn't cost-justified. |
| Product packaging confirmation | Medium | 2 | 4 | 4 | Innovation | Entitlement must work without Business DE purchase. Product Ops alignment needed. |

---

## P1 — Experience (Make DocXchange Excellent)

### Client Experience

| Capability | Gap | Perf Value | Biz Value | Risk | Type | Notes |
|---|---|---|---|---|---|---|
| Consolidated document task view | High | 5 | 5 | 5 | Innovation | Client sees all docs across relationship, loan, collateral in one place. Legacy portal didn't have this either — but clients expect it. PDI-00021166, PDI-00017705, PDI-00021943. |
| Dashboard navigation fix (direct URL / bookmark access) | High | 4 | 4 | 5 | Parity | Legacy portal had working direct access. DocXchange requires email link every time. Josh Forrester: "FI wouldn't go live." BLOCKER. |
| Rejection reasons visible to client with re-upload prompt | High | 5 | 4 | 3 | Innovation | Legacy portal showed status change only. DocXchange should show the banker's specific reason. PDI-00020980. |
| External placeholder names (client-friendly labels) | Medium | 3 | 3 | 2 | Innovation | Internal DocMan names (LLC_BI__Articles) surface to clients. No legacy portal equivalent needed this because naming was simpler. PDI-00020979. |
| Year/period metadata on placeholders | Medium | 4 | 4 | 2 | Innovation | "Business Tax Return — 2024" instead of just "Business Tax Return." Reduces wrong-year uploads. Neither portal had this. |
| Client can view/download FI-uploaded documents | Medium | 3 | 3 | 3 | Parity | Legacy portal supported bidirectional doc sharing. DocXchange is upload-only today. PDI-00020982. |
| Client can review/preview uploaded documents | Medium | 3 | 2 | 2 | Parity | After upload, task moves to Done but client can't see what they submitted. OMNI-2123. |
| Channel-specific document visibility | Medium | 3 | 3 | 3 | Innovation | FIs control which docs show digitally vs. in-branch only. Five Star Bank requirement. Neither portal had this. |
| Ad-hoc portal-enabled docs display correctly | High | 3 | 3 | 4 | Parity | Workaround required: uncheck/recheck Portal Enabled. BLOCKER. PDI-00017705. |

### Banker Experience

| Capability | Gap | Perf Value | Biz Value | Risk | Type | Notes |
|---|---|---|---|---|---|---|
| Banker nudge/reminder with deadline and urgency | High | 5 | 5 | 2 | Innovation | Select outstanding docs, mark urgent, set deadline, write message. Neither portal had this. Transforms follow-up from phone/email to structured workflow. |
| Client login activity visible to banker | High | 4 | 3 | 2 | Innovation | Has client seen the request? When? What did they upload? Neither portal had this. PDI-00020981. |
| Banker can view/reject/re-request uploads | Medium | 4 | 3 | 3 | Parity | Full review workflow in DocMan. OMNI-2122, 2123, 2124. Legacy portal had basic version. |
| Custom message in document request | Medium | 4 | 3 | 2 | Innovation | Banker adds context to the request email. OMNI-2121. Legacy portal had no custom messaging. |
| Consolidated requests across DocMan levels | Medium | 3 | 3 | 2 | Innovation | One request spanning Relationship + Loan DocMans, one email to client. PDI-00022226. |
| Copy/share invite link | Low | 2 | 2 | 1 | Innovation | Banker can copy link for out-of-band delivery (text, Slack). OMNI-2120. |
| Collateral DocMan support | High | 4 | 4 | 4 | Parity | Requests only work from Relationship and Loan DocMans today. Collateral docs (appraisals, title, insurance) can't be requested. GCD-456. |
| Filtered recipient list by context | Medium | 3 | 2 | 2 | Parity | Loan DocMan shows ALL business connections, not just borrowing structure entities. New discovery. |

### Email & Notifications

| Capability | Gap | Perf Value | Biz Value | Risk | Type | Notes |
|---|---|---|---|---|---|---|
| Configurable sender email address | High | 3 | 4 | 4 | Parity | Hard-coded noreply@omni.ncino.com. Spam filter risk. Legacy portal used FI domain. |
| Upload notification to banker | High | 4 | 3 | 3 | Parity | No email when client uploads. Banker must manually check DocMan. PDI-00021322. |
| Rejection email to client with reason | High | 4 | 4 | 3 | Parity | Client gets no email on rejection. Must log into portal to discover status changed. PDI-00021322. |
| Email template customization | Medium | 2 | 3 | 2 | Parity | No template in SimpleNexus. FIs can't customize branding or content. |
| Bulk portal enable sends single email | Medium | 2 | 2 | 2 | Parity | Currently sends one email per placeholder when bulk enabling. Hannah Marks research. |

### Configuration & Data Flow

| Capability | Gap | Perf Value | Biz Value | Risk | Type | Notes |
|---|---|---|---|---|---|---|
| Documents flow to Documents route | High | 4 | 4 | 5 | Parity | Documents don't flow to Documents route in BOS. Breaks reporting and downstream workflows. PDI-00019154, PDI-00019649. |
| Default-enable placeholders | Medium | 3 | 3 | 2 | Innovation | Reduce per-onboarding config. Most FIs want same core set portal-enabled by default. PDI-00020983. |
| Standardize on Priority Manager | Medium | 3 | 3 | 2 | Innovation | Deprecate Smart Checklist path. Matthew Carroll confirmed parity. |
| Fix duplicate placeholder creation | Medium | 3 | 2 | 2 | Parity | Feature enablement on existing orgs creates duplicate placeholders. |
| E-Consent capture at registration | High | 4 | 5 | 3 | Innovation | 18 associated cases (PDI-00005405). Highest individual PDI demand signal. FIs handle consent outside nCino today. |
| Document name encoding fix | Low | 2 | 1 | 1 | Parity | Names show URL encoding (% signs). PDI-00021322. |
| Bulk enable button error recovery | Low | 1 | 1 | 1 | Parity | Button grays out after error. Workaround: refresh. PDI-00015924. |

---

## P2 — Intelligence (Make Document Filing Effortless)

| Capability | Gap | Perf Value | Biz Value | Risk | Type | Notes |
|---|---|---|---|---|---|---|
| Bulk upload with AI routing (Locate & File) | High | 5 | 5 | 2 | Innovation | Client drops all files at once. Banking Advisor classifies and routes to correct placeholders. Reconciliation view for client review. Primary competitive differentiator. |
| AI document validation at upload | High | 5 | 4 | 2 | Innovation | Confirm doc type, legibility, expiration, correct year at upload time. Catch wrong-document submissions before banker sees them. |
| Document-driven ownership structure | High | 5 | 5 | 2 | Innovation | Banking Advisor extracts ownership data from Operating Agreement / Org Chart uploaded via DocXchange. Proposes Related Parties tree. Banker reviews and confirms. Flips the onboarding workflow — documents become the source of truth. |
| AI data pre-fill from documents | Medium | 4 | 4 | 2 | Innovation | Extract EIN, business name, address from formation docs. Extract borrower info from tax returns. Banker confirms — never auto-commits. |
| Upload without placeholder (file staging) | Medium | 3 | 3 | 1 | Innovation | Client can upload docs with no configured placeholder. Lands in file staging for banker review or AI routing. PDI-00020990. |
| Pre-meeting doc request workflow | Medium | 4 | 4 | 1 | Innovation | Banker sends DocXchange request for formation docs before first meeting. Ownership structure ready when they sit down. Behavioral shift enabled by doc-to-data connection. |

---

## Summary Counts

| Tier | Total Capabilities | High Gap | Parity | Innovation |
|---|---|---|---|---|
| P0 — Access | 3 | 2 | 0 | 3 |
| P1 — Experience | 27 | 13 | 14 | 13 |
| P2 — Intelligence | 6 | 3 | 0 | 6 |
| **Total** | **36** | **18** | **14** | **22** |

18 of 36 capabilities have a High gap rating. 22 of 36 are innovations beyond what either portal ever offered. 14 are parity items the legacy portal had that DocXchange is missing.
