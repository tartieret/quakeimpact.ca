# Health care

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.

**Status.** Partly sourced, and the hole in the middle is now named more precisely than it was.
What is established: how the existing hospital stock is expected to perform as a portfolio, what
the new hospitals are built to, how many casualties the province plans for, and — new as of
10 September 2026 — a peer-reviewed regional comparison of that load against Metro Vancouver's
acute-care bed stock and road network. What is **not** established is any *official* version of
that comparison, and any published ICU or operating-room count at all. **Proposed band: Medium
holds**, with the surviving surge-capacity gap shipped as a visible `VerificationNote`. Medium
rather than High because the strongest regional evidence is an academic accessibility model whose
own authors say it overstates how well hospitals would work; Medium rather than Low because the
province states in its own voice that medical facilities would be overwhelmed. The counter-argument
is recorded under "What is not established".

---

## Findings

### The portfolio finding: about 65% of one health authority's buildings

DCRRA Appendix C, Case Study 4, "Seismic resilience of B.C.'s hospital infrastructure" (Kaur and
Molina Hutt, UBC; Orr, Vancouver Coastal Health; White, Bush Bohlman & Partners). All
[DCRRA-APPC] **[A]**.

Of Vancouver Coastal Health's **127 buildings**:

| Construction era | Category | Buildings |
| --- | --- | ---: |
| Pre-1970 | Pre-code | 32 |
| 1970–1991 | Low-code | 51 |
| 1992–2005 | Moderate-code | 27 |
| Post-2006 | High-code | 17 |

- "**Around 65% of VCH buildings (pre-code and low-code buildings) are likely to experience
  complete damage due to shaking corresponding to the design ground motion currently used in
  the 2020 National Building Code of Canada.** If VCH buildings were to experience current design
  ground motion intensities, **the majority of buildings would experience damage that would
  compromise hospital functionality**."
- By hazard level, complete damage is expected for **66%, 57% and 51%** of buildings at 2%, 5%
  and 10% probability of exceedance in 50 years.

**The caveats are the DCRRA's own and must travel with the figure**, every time:

- Only **Vancouver Coastal Health** data was used. It is one health authority, not the region.
- Applicability to other health authorities is **asserted, not computed**.
- **Construction year is a proxy** for seismic performance, not a measurement of it.
- "More reliable … results can be obtained by means of detailed engineering assessments on a
  building-by-building basis." That is the study telling the reader what it is not.

Note the shape of the claim carefully. It is a statement about a *portfolio* at a *design ground
motion*, not a forecast of what happens to a named hospital in either site scenario. It must never
be written as "65% of hospitals would collapse".

### The regional capacity comparison exists, and it is academic

Kaur, Molina Hutt and Kim, "Assessing Post-Earthquake Emergency Healthcare Accessibility
Considering Damage to Hospital Buildings and Transportation Infrastructure", *Earthquake Spectra*
42(2) e70024, published **2 April 2026**, open access, all three authors UBC Civil Engineering.
[KAUR-2026] **[A]**, read in full.

This is a **Metro Vancouver regional study under an M9.0 Cascadia scenario**, and it supplies the
denominators this page previously recorded as unpublished.

**Assumed acute care bed capacities**, the paper's Table 2 — 16 hospitals with emergency
departments, anonymised A–P, city given, name withheld:

| Hospital | City | Acute care beds |
| --- | --- | ---: |
| A | Vancouver | 955 |
| B | Vancouver | 332 |
| C | Vancouver | 112 |
| D | Vancouver | 200 |
| E | Vancouver | 500 |
| F | Vancouver | 95 |
| G | North Vancouver | 268 |
| H | Richmond | 246 |
| I | Burnaby | 259 |
| J | New Westminster | 439 |
| K | Port Moody | 168 |
| L | Maple Ridge | 172 |
| M | Surrey | 624 |
| N | White Rock | 171 |
| O | Langley | 180 |
| P | Delta | 58 |

**Total 4,779 beds** — *our addition of the paper's column; the paper prints no total.* If the
figure ships it must be labelled as our sum. [KAUR-2026] **[A]** for the rows.

**Guards, all of them the paper's own, and all mandatory:**

- The table's own title says "**Assumed**". These are researcher-compiled figures from publicly
  available health-authority web pages, not an official bed inventory.
- They are **acute care beds — not ICU beds and not emergency department beds**. The paper's
  reason: "The number of acute care beds is used instead of the number of emergency department
  beds because it is assumed that hospitals are resourceful and will use any means available to
  treat patients in an emergency scenario."
- Hospitals are **anonymised**. **Do not de-anonymise them.** The paper does not say which
  Vancouver hospital has 955 beds, and neither may we.
- **Only hospitals with emergency departments** are counted. This is not the region's bed stock.
- Hospitals just outside Metro Vancouver are excluded, which the paper says "may underestimate
  regional healthcare capacity around the study area's boundaries."

**What it finds.** Functionality is derived from structural damage state mapped through WHO
Hospital Safety Index categories assigned **by construction year**, then applied as a functional
rate to the bed counts. Of the 16 hospitals, one is pre-1970, eight are 1970–1991, three are
1992–2005 and four are post-2006. [KAUR-2026] **[A]**

- "For a sample M9 CSZ earthquake scenario #1, the average accessibility A_i for Vancouver is
  reduced from around **0.9** in the baseline condition to **0.3** in the combined damage
  condition, primarily due to hospital damage." [KAUR-2026] **[A]**
- "An example of a large decrease in accessibility is observed in the City of Vancouver where
  expected heavy damage to almost all hospitals in the city means people must travel longer
  distances to reach functional hospitals." [KAUR-2026] **[A]**
- Upgrading Vancouver, Burnaby and Richmond hospitals from low-code to moderate-code yields "a
  77%, 40%, and 78% increase in average accessibility" in those three municipalities.
  [KAUR-2026] **[A]**

**Lead with the authors' own caveat.** They state that their model is optimistic, and they name
exactly the mechanism this page is built on:

> "Here we note that our study, in excluding explicit nonstructural damage, utility, and staff
> disruptions, is **likely overestimating post-earthquake hospital functionality** and
> underestimating accessibility loss." [KAUR-2026] **[A]**

Two further caveats travel with every figure above: **major river crossings are assumed to remain
fully functional** — "If these critical links were damaged or inaccessible, we would expect a
substantial increase in isolated populations, particularly in municipalities like Richmond or North
Vancouver" — and travel is modelled as **free-flow, private vehicle only**, which "likely
overestimates pre- and post-earthquake accessibility." [KAUR-2026] **[A]**

**The isolation finding is a health finding with a transportation mechanism.** "For earthquake
scenario CSZ #1, due to disruptions on the road network from inaccessible bridges, **54,339 people
are entirely isolated** from accessing any hospitals, on the roads we consider." A simulated bridge
retrofit reduces that "from over 54,000 to under 27,000." [KAUR-2026] **[A]** The bridge evidence
itself lives in `transportation.md` and `../mobility.md`; this page cites the health consequence
and points there for the mechanism rather than restating it.

### The single-hospital study, abstract only

Palomino Romani, Blowes and Molina Hutt, "Evaluating post-earthquake functionality and surge
capacity of hospital emergency departments using discrete event simulation", *Earthquake Spectra*
39(1) 402–433, February 2023. UBC Civil Engineering. **Paywalled; the abstract was read via
Crossref and the body was not retrieved.** [PALOMINO-2023] **[A]** for what the abstract states.

The abstract states that earthquake-induced patient arrivals were calculated for the hospital's
catchment area and "the surge in patients (demand) was then compared to the ability of the hospital
to treat patients (capacity)", for "a hospital in the City of Vancouver subjected to an Mw9.0
Cascadia Subduction Zone scenario earthquake". It reports that emergency rooms were the bottleneck,
that "the mean ER WT exceeded its limit of 2 h and reached up to **17 h in the most unfavorable
simulation**", and that mean length of stay "nearly doubled from 6.5 to 12 h".

**Guards.** One **unnamed** hospital, not the region. **M9.0 Cascadia**, not the site's M7.0
scenario. The 17-hour figure is **the worst simulation, not a central estimate**. It is a
methodology demonstration — the 2026 regional paper describes this class of work as "not be[ing]
suitable for regional studies due to the data requirements". And every number above is **what the
abstract says**; we have not read the paper.

### The province names one hospital

"**St. Paul's Hospital in downtown Vancouver is an older building with masonry elements and may
be significantly impacted** by a large seismic event. Other hospitals in this region, including
Vancouver General, UBC Hospital, and Lion's Gate Hospital, are likely to see increased demand as
a result." [PEIRS] **[A]**

Two BC Gov News releases state that further existing facilities predate current seismic standards:
Richmond Hospital [BCGOV-RICH-2016] **[A]** and Lions Gate Hospital [BCGOV-LGH-2018]
**[A]**. Richmond's redevelopment is funded and under way in phases. [BCGOV-RICH-2024]
**[A]**

### The seismic rating work exists; it is simply not public

A province-wide **British Columbia Health Seismic Database (BCHSD)** exists, developed and
maintained by **Bush, Bohlman & Partners** — the firm also credited in DCRRA Appendix C Case
Study 4. It is the source of the hospital inventory attributes in the 2026 regional study, used
under data-sharing arrangements with Vancouver Coastal Health and Fraser Health.
[KAUR-2026] **[A]** for its existence, name and custodian.

**It is not published.** The paper's citation carries a URL on a UBC anthropology domain that is
plainly a citation error; **do not publish that URL**. The publishable statement is narrower and
sharper than the one this page used to make: the rating work has been done and is held privately,
rather than never having been done. That is **deliberate non-publication, not absence**.

### The new-build standard is high, and it is in the contracts

Three current major projects are specified to **post-disaster importance category**:

- The **new Surrey hospital and BC Cancer Centre**. [NSH-SPEC] **[A]**
- **The new St. Paul's**, to the Vancouver Building By-law post-disaster requirement.
  [NSP-SPEC] **[A]**
- **Royal Columbian Hospital Phase 2** — with a nuance worth publishing: the **acute care tower is
  post-disaster** while the **support building is deliberately specified as "Normal" importance
  category**. [RCH-SPEC] **[A]**

That last line is the most instructive detail on the page. Post-disaster status is applied where care
is delivered, not across a whole site. A hospital is not one building, and a reader who pictures a
campus as a single rated object has the wrong model.

### Backup power: a code minimum, a contract, and an unread standard

Three tiers, and the page must keep them apart.

**Tier 1 — code minimum, for getting people out of a building.** The Vancouver Building By-law
2025 (Book I, consolidated to 5 May 2026, convenience copy, marked "**THESE MATERIALS ARE NOT AN
OFFICIAL VERSION**") sets emergency-power run times: [VBBL-2025] **[A]**

- Article **3.2.7.9.(1)** — "An emergency power supply capable of operating under a full load for
  **not less than 2 h**" for elevators in buildings over 36 m, equipment supplying water for fire
  suppression, air-quality and venting fans, and smoke-control fans.
- Article **3.2.7.4.(1)** — emergency power for lighting: **2 h** for a high building, **1 h** for a
  Group B major occupancy that is not a high building, **30 min** for other occupancies.
- Article **3.2.7.8.(3)** — fire alarm systems: 24 h supervisory power, then 2 h / 1 h / 30 min /
  5 min under full load by building class.

**These hours are for life safety during evacuation — lights, an elevator, a fire pump, a fire
alarm. They are not a figure for keeping a hospital running.**

**Tier 2 — the hospital pathway, unread.** Article **3.2.7.6** routes treatment occupancies — the
by-law defines a treatment occupancy (Group B, Division 2) as a building providing treatment with
overnight accommodation, which is a hospital — to **CSA Z32**, "Electrical safety and essential
electrical systems in health care facilities". [VBBL-2025] **[A]** CSA Z32 is sold rather than
published and **was not read**. Its duration requirement is unknown.

**Two corrections to this page's earlier note.** The by-law's referenced-documents table cites
**CSA C282-15**, not the C282-19 edition previously named here. And Article 3.2.7.5 applies C282
"except as required by Articles 3.2.7.6. and 3.2.7.7." — that is, **the by-law points hospitals away
from C282**, so C282 was never the right standard to chase for a hospital figure.
[VBBL-2025] **[A]**

**Tier 3 — contractual, 72 hours.** Both the new Surrey hospital and the new St. Paul's specify
**72 hours of self-sufficiency for fuel, water and sanitary holding**, in identical terms, in two
independent project agreements. [NSH-SPEC] [NSP-SPEC] **[A]** for what the contracts require.

**Say it as a contractual requirement in two named projects — a de facto procurement norm — not
as a standard, a rule, or a figure that applies to any existing hospital.** No published source
extends it to existing facilities, and none was found.

**The three tiers are a code minimum, a contractual requirement and a design intent, and the
distinction matters more now that a code number is publishable, not less.** A reader who hears
"two hours" and a reader who hears "72 hours" must both be told which kind of number they have.

### The only published numeric downtime target for a Lower Mainland hospital

The new St. Paul's specification sets **FEMA P-58 downtime targets: median repair time of 30 days
or less at the 2%-in-50-year ground motion level.** [NSP-SPEC] **[A]**

It is the only published numeric post-earthquake downtime target found for any Lower Mainland
hospital. It is a **design intent** in a contract for a building not yet in service, and it says
nothing about existing facilities — but as the single point where a number attaches to "how long
would a hospital be out", it belongs on the page with those limits attached.

### The casualty load the province plans for

For the **M7.0 Greater Vancouver** scenario, from building damage alone: **1,000 critically injured;
6,500 requiring non-critical hospital care; 21,000 needing paramedic or first-aid treatment**,
alongside 2,000 fatalities. [PEIRS] **[A]** PEIRS states in its own voice that **first responders
and medical facilities would be overwhelmed**. [PEIRS] **[A]**

PEIRS's own caveat travels with those numbers: casualty estimates are based on structural and
non-structural building damage and **exclude** casualties from secondary hazards and complicating
factors — underlying medical conditions, vehicle accidents, falls, explosions, fires, landslides,
washouts, tsunamis, psychological impacts. [PEIRS] **[A]**

For the **M9.0 Cascadia** scenario, the DCRRA describes an already stressed health system meeting
staff shortages, damaged hospitals, power outages, too few beds and difficult commutes. Two
statements are directly quotable: "**Patient triage stations are overwhelmed and are much slower
than usual, adding to the initial death toll**," and hospitals are further hindered by "thousands of
uninjured, distraught people … looking for loved ones and seeking shelter." [DCRRA-2025] **[A]**

That second sentence is the mechanism a reader can act on, and it is the only place on this site
where an individual decision measurably changes hospital capacity.

---

## What is not established

**No government or health authority has published a comparison of the casualty load against
regional care capacity, and no ICU or operating-room count is published anywhere. [?] This is the
page's honest centre, and it is narrower than it used to be.**

*Withdrawn:* this page previously said that **no document** pairs the expected casualty load
against regional bed, ICU and operating-room capacity. **That is now wrong and is withdrawn.**
Peer-reviewed UBC work does it twice — once for a single Vancouver emergency department
[PALOMINO-2023] and once for all 16 Metro Vancouver hospitals with emergency departments
[KAUR-2026]. What survives is a different and more interesting claim: **the province states the
casualty load and states that medical facilities would be overwhelmed, and does not put those two
things in the same document.** The surviving gap is a gap in official planning, not a gap in
knowledge.

The second half of the old gap survives intact: **neither paper, nor anything else reached,
publishes an ICU count or an operating-room count for the region. [?]**

The **Mass Casualty Incident Framework for British Columbia Hospitals** (HEMBC/PHSA, January 2026)
is the right official document and it does not do this. [HEMBC-MCI] **[A]** for what the framework
contains: it is a standardising framework; it contains **zero occurrences of earthquake, seismic,
Cascadia or post-disaster**; and its only quantified surge figure — "as much as 10-20% of hospital
total bed capacity could be immediately made available with efficient decanting" — is explicitly
**literature-derived, not a measurement of BC hospitals**. It now reads as the official-side half
of the pair.

**Band counter-argument, recorded rather than resolved.** A reader could argue for **High** on the
strength of [KAUR-2026]: a peer-reviewed regional model showing emergency-care accessibility in the
City of Vancouver falling by roughly two-thirds, 54,339 people isolated from any hospital, and the
authors themselves saying the model overstates hospital functionality. Medium is kept because
accessibility is a modelled travel-and-functionality index rather than a measured loss of care
delivered, because the scenario is M9.0 Cascadia rather than the site's M7.0, and because the same
model assumes the major river crossings survive. If a government or health-authority capacity
comparison is ever published, or if the paper's supporting data yields per-municipality figures,
the band should be re-run.

**No published seismic rating for named Lower Mainland hospital buildings. [?]** Searched
10 September 2026: the full Fraser Health sitemap with every `capital-projects/*` page fetched and
grepped; the full Vancouver Coastal Health sitemap; the Providence Health Care sitemap; all
Infrastructure BC project pages and their linked PDFs; eight BC Gov News searches; and the
complete Office of the Auditor General of BC post sitemap, checked for every report title
containing earthquake, seismic, disaster, emergency or health. Crossref queries for `seismic
hospital British Columbia`, `seismic vulnerability hospital Vancouver` and `healthcare facility
seismic risk Canada` returned nothing in region. **There is no OAG audit of hospital seismic
status**: the OAG's 2014 *Catastrophic Earthquake Preparedness* report mentions hospitals zero
times, and its only seismic-buildings audit is *Planning for School Seismic Safety* (2008). Note
the correction above: the rating work exists in the non-public BCHSD, so this is a **publication
absence, not a knowledge absence**.

**No published generator, fuel or water capacity for any existing Lower Mainland hospital. [?]**
None found for Vancouver General, Surrey Memorial, Burnaby, Lions Gate, Richmond or St. Paul's
on Burrard. The best remaining lead is now closed — see below — and nothing replaced it. Recorded
through the weaker channel described under "Method caveat" and **not retested**.

**VCH's "Owner's Project Requirements for facilities" page offers no document. [?] Closed as a
dated negative.** Fetched with a scripted browser, JavaScript executed, 10 September 2026. The page
states that "The OPR provides owner-specific minimum baseline requirements above and beyond codes
and standards" and instructs the reader to "download the latest version" — and **there is no
download link.** Not hidden behind JavaScript: absent from the fully rendered DOM, which contains
no `.pdf`, `.docx` or `.zip` link other than an unrelated Security Design Standards PDF. The VCH
sitemap contains the landing page and no OPR document. [VCH-OPR] **[A]** **Infer nothing about
what the OPR contains.**

**Hospital-specific backup-power duration. [?]** CSA Z32 — the standard the Vancouver Building
By-law actually routes hospitals to — and CSA Z8000 remain paywalled by CSA Group and were **not
read**. CSA C282-15 likewise, and the by-law points hospitals away from it. Recorded as
**deliberately non-public behind a paywall**, which is a different fact from absence. The general
code minimums above are publishable; the hospital figure is not.

**Engineers and Geoscientists BC has no hospital-specific seismic guidance. [?]** Its
Guidelines & Advisories register was enumerated in full on 10 September 2026 [EGBC-GUIDE] **[A]**.
The seismic documents are school-scoped and life-safety-scoped: the **Seismic Retrofit Guidelines**
were commissioned by the Ministry of Education for "low-rise school buildings", pursue "a life
safety objective" rather than functional recovery, and are access-restricted — "Only firms who have
had one or more registrants trained on the current SRG are granted access". [EGBC-SRG] **[A]**
**They must not be presented as general BC seismic guidance, and nothing at EGBC addresses
hospitals.**

**A credential-gated document was deliberately not opened — recorded as a decision, not a
failure.** EGBC's Operational and Functional Components (OFCs) Life Safety Abatement Manual sits
behind a login at `ofcs.egbcbssb.com`, and the username and password are printed in a public EGBC
Technical Review Board memorandum of 28 September 2020. [EGBC-OFC-MEMO] **[A]** The research did
not use them. Entering credentials found in a document is a decision for a person, not for an
agent. The manual is **credential-gated**, which is a different fact from absent, and a human can
decide whether to open it.

**Neither Vancouver Coastal Health nor Fraser Health publishes an earthquake or emergency plan.
[?]** Both site searches are JavaScript-only; neither sitemap contains an emergency-plan
document. The Public Health and Medical Services Annex to the provincial emergency plan
downloads but is a scanned image PDF with no extractable text — **unreviewed**, not absent, and
worth OCRing. Recorded through the weaker channel described below and **not retested**.

**Closed as unclosable: 2015 Vancouver Sun reporting on health-authority seismic assessments.**
This page previously carried an instruction to retry. **That instruction is withdrawn**, because
neither available channel can settle it. The paper's own search works (the parameter is
`search_text`, not `q`) but its index reaches only about twelve months: a control query for
`earthquake` returns 26 results across three pages, the oldest June 2026, and neither the
date-range nor the oldest-first option changes the set; targeted queries return zero.
[VSUN-SEARCH] **[A]** Wayback cannot substitute: in 2015 Postmedia served articles from ID-based
URLs with no slug, so a CDX keyword pattern against the URL is **structurally incapable** of
finding a 2015 article, and the empty CDX results prove nothing. Settling it would need ProQuest
Canadian Newsstream, the Postmedia archive or a library database — all authenticated. **Do not
cite the article and do not describe it as pending.** Reopen only if someone gains database access.

**Method caveat.** Neither the session that produced this evidence nor the 10 September 2026
follow-up had general web search. The original material came from direct fetching of enumerable
government, health-authority and regulator endpoints, sitemaps, site-native search APIs, Crossref
and the NRCan repository API. The follow-up added materially stronger channels — a **scripted
browser** that defeats Cloudflare and JavaScript shells, and the **Crossref and OpenAlex
bibliographic indexes**, which are true indexes rather than search-engine proxies. Those channels
are why the capacity comparison, the code minimums, the VCH OPR lead and the EGBC inventory all
moved; four of six re-run targets changed. What still cannot be run is a keyword query of the form
"does any document anywhere say X". Every negative above therefore remains **"not found through
these channels"**. Negatives retested on the stronger channels are marked closed above; the
health-authority emergency-plan negative and the generator, fuel and water negative were recorded
through the weaker channel and have **not** been retested.

---

## For the page

**Mechanism sentence.** A hospital that survives the shaking is not the same as a hospital that
keeps working. Water, power, fuel, sanitary drainage, staff who can get to work and a building
whose ceilings and pipes stayed up are all required, and the published portfolio work says most of
the existing stock was built before the standards that protect them.

**The best external corroboration on the page is the 2026 authors' own caveat.** A peer-reviewed
team says, in its own voice, that excluding non-structural damage, utility disruption and staff
disruption means their model is "likely overestimating post-earthquake hospital functionality".
That is this page's mechanism sentence, confirmed by the people whose numbers leave it out. Put
the caveat beside the number, not in a footnote.

**The page is still built around a hole, but a smaller and better-shaped one.** Lead with what is
known — the portfolio finding, the named hospitals, the new-build standard, the regional
accessibility study — then state plainly that no government or health authority has compared the
casualty load to the region's capacity, and that no ICU or operating-room count is published at
all. Do not fill it with inference, and do not let the page imply an answer by adjacency.

**Guards that must travel with the numbers.**

- The 65% figure is **Vancouver Coastal Health only**, is **complete damage at a design ground
  motion**, uses **construction year as a proxy**, and is not a scenario result. All four guards, every
  time. Never "65% of hospitals would collapse".
- The 4,779-bed total is **our sum of a table the paper labels "Assumed"**, covers **acute care
  beds only** at **16 hospitals with emergency departments**, and the hospitals are **anonymised**.
  Never attach a bed count to a named hospital.
- The 0.9-to-0.3 accessibility drop and the 54,339 isolated people are **M9.0 Cascadia, modelled**,
  assume **free-flow private-vehicle travel** and **undamaged major river crossings**, and come
  from a model its authors call optimistic.
- The 17-hour emergency-room wait is **one unnamed hospital, the worst of the simulations, and
  read from an abstract we could not get behind**.
- 72 hours is a **contractual requirement in two named new-build projects**, not a code minimum
  and not a property of any existing hospital.
- The by-law's 1–2 hours are a **code minimum for evacuation life safety**, not a hospital
  operating figure. The hospital standard, CSA Z32, was not read.
- The FEMA P-58 30-day target is a **design intent for a building not yet open**.
- PEIRS casualty figures carry the scenario (M7.0, Greater Vancouver) and PEIRS's own exclusion
  of secondary hazards.

**Cross-reference, do not restate.** The bridge damage behind the 54,339 figure belongs to
`transportation.md` and `../mobility.md`. This page carries the health consequence — people who
cannot reach any hospital — and links for the mechanism.

**Through-line, shared with `housing.md` and `communications.md`: the new buildings are excellent
and the existing ones are the problem.** The new St. Paul's, the new Surrey hospital, Royal
Columbian's acute care tower, E-Comm's Lower Mainland centre and three new Vancouver fire halls
are built to post-disaster standard. [NSP-SPEC] [NSH-SPEC] [RCH-SPEC] [ECOMM-FAC]
[COV-CAP-2730] **[A]** Existing St. Paul's on Burrard, Richmond Hospital, Lions Gate, most of
Vancouver's fire halls, 265 outstanding school seismic projects province-wide [SMP-PROGRESS]
**[A]** and every cell site in the region are not. On this page the contrast is unusually sharp,
because the same organisation is on both sides of it: Providence Health Care is building a
post-disaster hospital precisely because the one it replaces has masonry elements the province
expects to be significantly impacted.

**Lever.** The actionable finding is the DCRRA's: hospitals are hindered by large numbers of
uninjured people arriving to look for family and to shelter. Household reunification arrangements
made beforehand — an out-of-region contact, an agreed meeting point — keep people away from
emergency departments that need the room. It is one of the few levers on this site where an
individual choice changes a system-level outcome, and it should be stated that way, without
scolding.

**Do not write.** No triage scenes, no imagined emergency department. No "hospitals will be
overwhelmed" in our own voice — quote PEIRS and attribute it. Do not name a hospital as unsafe;
the sources name construction era, masonry elements and increased demand, and the page must
not outrun them. Do not de-anonymise the bed table, and do not publish the broken database URL.
