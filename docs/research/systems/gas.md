# Natural gas

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.
> **Changed in that pass.** A customer count from FortisBC's own filing; the City's 55% still uncorroborated.

**Status — a new system the site does not currently carry. Proposed band: High,
both scenarios, on the restoration mechanism and not on any damage estimate.**
FortisBC has assessed the seismic hazard to its gas system quantitatively, filed
that assessment with its regulator, and published most of it: the 2024 Gas System
Resiliency Plan. What that record shows is an unfinished programme — a named
earthquake mechanism driving the second-largest risk in the portfolio, a 1969 LNG
tank at Tilbury de-rated to 58 percent of capacity because it cannot be brought up
to current seismic standards, and autonomous seismic shutoff still in "preliminary
stages". Alongside it stands the shape of restoration: gas is the one utility that
cannot be restored remotely or in bulk. It comes back only when a technician has
physically entered every affected building and relit every appliance. FortisBC's
own arithmetic puts the ceiling at 8,716 relights a day, and that ceiling already
assumes mutual aid crews and every available private contractor in the Lower
Mainland.

---

## Correction recorded — the "does not address earthquake at all" framing is withdrawn

Earlier drafts of this entry rested on an inference, and the inference was wrong.
It is recorded here rather than deleted, because it is a clean worked example of
the failure mode this folder exists to catch.

**What was inferred.** That FortisBC does not address earthquake hazard at all.

**From what.** A single verified fact: full-text extraction of the FEI **2026 Long
Term Gas Resource Plan** returns **zero occurrences of "seismic" or "earthquake"**
across ~23,000 lines. [FEI-LTGRP-26] **[A]** From that silence the entry inferred a
silence about the system, and framed an asymmetry against Metro Vancouver and
BC Hydro on that basis.

**What the retrieved document shows.** The **2024 Gas System Resiliency Plan** —
Exhibit B-61 in the Tilbury CPCN proceeding, previously unread because the BCUC
repository returned HTTP 403 to automated fetch, now retrieved and read in full —
is a quantitative seismic risk assessment. It contains 129 occurrences of
"seismic", 511 of "earthquake" and 122 of "liquefaction", and it models six
earthquake damage mechanisms per asset using FEMA fragility relationships and
published hazard curves. [FEI-RESILIENCY-24] **[A]**

**Status of the withdrawn claim.** Withdrawn entirely. It must not appear in any
draft of the page, in the band argument, or in the scoping list. The LTGRP keyword
count survives only as the narrower fact stated below. An argument from silence
about one document was treated as evidence about an organisation; it was not.

---

## Findings

### What the LTGRP silence does and does not mean

The verified fact stands. FEI's **2026 Long Term Gas Resource Plan**, its public
investment roadmap to 2050 filed with the BCUC in March 2026, contains zero
occurrences of "seismic" or "earthquake", while returning 134 hits for "resilien",
40 for "Tilbury" and 27 for "T-South", and carrying a dedicated §7.4 "System
Resiliency". [FEI-LTGRP-26] **[A]** on the absence. It is not an extraction
failure.

The accurate reading is narrow: FEI's **public-facing 2050 investment roadmap
frames resilience around winter supply interruption and peak demand**, while its
**regulatory filing assesses seismic hazard extensively**. [FEI-LTGRP-26] **[A]**
[FEI-RESILIENCY-24] **[A]**

There is a documented reason for the split, and it removes the sting. The LTGRP's
resiliency case rests on the Resiliency Plan, which it cites, and the project the
LTGRP justifies — Tilbury storage against a T-South interruption — is driven by a
*non-seismic* hazard. For the largest assessed vulnerability, "non-earthquake
induced landslide is the hazard that contributes the most to the cumulative risk",
and its annual rate of winter-only failure from non-earthquake external hazards is
more than six times the rate from earthquake hazards at the upper bound.
[FEI-RESILIENCY-24] **[A]**

**State the contrast; do not make it an accusation.** The seismic analysis is in
the Resiliency Plan, not in the resource plan. That is a fact about where two
documents put their emphasis, and nothing more.

### The 2024 Gas System Resiliency Plan — what it assesses

Filed 24 October 2024, cover letter from Sarah Walsh, Director Regulatory Affairs,
FortisBC, in the Tilbury LNG Storage Expansion CPCN proceeding.
[FEI-RESILIENCY-24] **[A]**

- **Structure.** 58 anonymised **Assessed Vulnerabilities** (AV-1 to AV-58),
  screened down from an initial 87. The screen: an outage affecting **10,000 or
  more customers**, and/or an outage expected to take **14 days or more** to fully
  restore. [FEI-RESILIENCY-24] **[A]**
- **Who did the work.** Exponent, Inc. performed the quantitative risk analysis;
  PwC quantified economic consequences; JANA and Guidehouse also contributed.
  [FEI-RESILIENCY-24] **[A]**
- **Method.** Performance-based engineering using FEMA **Hazus 5.1** earthquake-model
  fragility relationships, with site hazard curves from the **USGS Unified Hazard
  Tool** (latitude below 50) and the **2020 National Building Code of Canada
  Seismic Hazard Tool** (latitude above 50), and BC provincial soil mapping for
  site classes. [FEI-RESILIENCY-24] **[A]**
- **Six earthquake-related damage mechanisms are modelled as separate named
  hazards**, per asset: earthquake shaking, liquefaction, lateral spreading,
  surface-wave rupture, earthquake-induced landslide, and earthquake-induced bridge
  shaking and ground movement. Dedicated appendices cover earth-movement
  modification factors, surface-wave-induced pipeline ruptures, earthquake-induced
  landslides, earthquake-induced liquefaction, pipelines carried by bridges,
  earthquake shaking for stations, and identified fault crossings.
  [FEI-RESILIENCY-24] **[A]**

Exponent's own summary of scope: "The analysis considered several failure
mechanisms associated with earthquakes, including landslides, liquefaction,
settlement, surface waves, and shaking, as well as wildfires, non-earthquake-induced
landslides, lightning, flooding/buoyancy, and internal failures and failure
mechanisms unrelated to natural hazards." [FEI-RESILIENCY-24] **[A]**

### AV-18 — a named earthquake mechanism driving the number-two risk

FEI's **second-largest resiliency risk overall is driven by an earthquake hazard**.
Of AV-18, the plan states that "earthquake lateral spreading is the hazard that
contributes the most to the cumulative risk; and … the mean Total Outage Duration
is 61 days". Its 67-year winter-only failure probability is **27–57 percent**, and
its expected 67-year winter-only economic harm is **$1.3 billion**.
[FEI-RESILIENCY-24] **[A]**

The plan adds that where "the primary driver of the failure probability is from
seismic related hazards, possible short-term projects could consist of targeted
site-specific upgrades to reduce the probability of failure … examples might
include relocation of short segments of pipeline out of the hazard zone".
[FEI-RESILIENCY-24] **[A]**

> **Guard, non-negotiable.** **AV-18's identity and location are Restricted
> Confidential** — Appendix RP 4-18 is filed to the BCUC only. **We do not know
> where it is, and we must not imply, suggest or allow a reader to infer that it is
> in the Lower Mainland.** What the finding supports is narrower and still worth
> having: lateral spreading — liquefaction-driven ground movement, the same
> mechanism `ground-conditions.md` already explains — is the top contributor to
> FortisBC's number-two system risk, with a modelled mean outage of about two
> months.

### Bridge crossings — the review was seismic

The LTGRP's line that "Major bridge crossings were reviewed as part of the 2024
Resiliency Plan and no upgrades to these crossings are planned at this time"
[FEI-LTGRP-26] **[A]** rests on a review that was explicitly seismic. Exponent:
"The annual failure rates for bridges are calculated for two different types of
damage mechanisms, both related to earthquakes: ground shaking and ground
movement." Fragility curves come from a Hazus procedure using span, skew angle and
structure type; the intensity measure is 1-second spectral acceleration for shaking
and PGD for ground movement. Failure of a bridge was conservatively assumed to mean
failure of the pipeline segments it carries. Computed rates are bracketed against
**2.3 × 10⁻⁴ failures per year**, the annual failure rate associated with the
target reliability of bridges designed to CSA S6-14. At least 15 of the 58 Assessed
Vulnerabilities are classified as "Bridge" or "Pipeline / Bridge".
[FEI-RESILIENCY-24] **[A]**

Earlier drafts carried the caution that "the LTGRP does not say the review was
seismic, and we must not assume it was". That question is now resolved in favour of
"it was", from the Resiliency Plan itself.

**The honest counterweight travels with this.** Exponent's finding is that bridges
"typically have relatively low probabilities of failure", which is *why* no
upgrades are planned. "No upgrades planned" is a stated conclusion from a modelled
result, not neglect, and the page must not present it as neglect.
[FEI-RESILIENCY-24] **[A]**

### Seismic shutoff valves — planned, not deployed

Previously recorded as unknown. It is now known, and the answer is that the work is
scoped but not built. §7.2.4, "Improved Response Capabilities to Widespread Lower
Mainland Seismic Event", is the plan's most directly Lower-Mainland-relevant
passage:

> "the intent of this initiative is to improve FEI's ability to isolate the Lower
> Mainland's CTS following a seismic event that results in widespread asset failure
> in the Lower Mainland. **Development for this initiative is in the preliminary
> stages.** At a high-level the scope, as it is currently defined, consists of
> installing additional valves, and upgrading existing valves. All valves to be
> added or upgraded will have line break capabilities that will allow them to
> **autonomously shut following a seismic event**, if required."

[FEI-RESILIENCY-24] **[A]** No commitment, no budget and no date appears in the
public version. §8 places the work in parallel with further investigation of four
other assessed vulnerabilities, after which FEI "will determine if any of these AVs
warrant resiliency driven investment". [FEI-RESILIENCY-24] **[A]**

**Cross-system.** This is an exact counterpart to Metro Vancouver's DWMP 2026
Action 2 — automatic shutoffs throughout the water transmission system, listed as
something to *increase*. Two Lower Mainland utilities, the same mechanism, the same
not-yet-done status. See `water.md`; do not restate the water side here.

### Tilbury — a named asset with a named seismic deficiency

The **1969 Tilbury Base Plant LNG storage tank**, in Delta, is the gas system's
structural analogue of the Murrin Substation finding the electricity entry rests
on: identified, quantified, filed with the regulator, and unfixed until a
replacement is built.

- "FEI states that more stringent seismic design requirements have been put in
  place since the installation of the LNG storage tank in 1969, and in order to
  ensure compliance, **FEI currently operates the tank at 58 percent capacity (or
  0.35 Bcf)**." [BCUC-C-6-25] **[A]** — a 42 percent de-rating for seismic
  compliance.
- Two independent engineering firms, CB&I and WSP, assessed refurbishing the tank
  to its 0.6 Bcf design capacity while meeting current minimum seismic
  requirements. **Both recommended replacement.** CB&I called remediation "fraught
  with significant risk". [BCUC-C-6-25] **[A]**
- WSP "concluded that even if all of the tank repairs identified by CB&I could be
  completed, it would not be cost-effective or feasible to replace the foundation
  to avoid the tank **failing due to earthquake-caused differential settlement**".
  [BCUC-C-6-25] **[A]**
- The Panel's determination: refurbishment "does not appear to be a cost-effective
  or viable option **due to seismic issues** and the age and condition of the
  assets". [BCUC-C-6-25] **[A]**

This is dated, regulator-accepted, and about a specific Lower Mainland asset. It is
the entry's anchor.

### The relight mechanism, and the arithmetic behind it

FortisBC's public earthquake guidance describes restoration as: assess the system
in the affected area, repair damage, reactivate, then **visit each home to relight
all affected appliances**. [FBC-EQ] **[A]** (page last modified 23 October 2024)

Water and electricity return when the network is repaired. Gas returns when a
technician has been inside every affected building. That is a per-premises
operation across hundreds of thousands of premises. It cannot be done remotely and
it cannot be done in bulk.

The Resiliency Plan now supplies the rate, and it is the strongest material this
entry has. §3.4.1:

> "For these outages, FEI assumes that it has used its available workforce, mutual
> aid crews have been made available to FEI and that FEI has retained all of the
> available private contractors in the Lower Mainland. **The estimated average rate
> of relights is 8,716 per day.**"
>
> "With more localized outages, it is unlikely that mutual aid resources would be
> available. In such cases, FEI has reduced the above assumed estimated average
> rate of relights as follows: mid-size outages are addressed at a rate of **2,025
> per day**, while community-sized outages are addressed at a rate of **723 per
> day**."

[FEI-RESILIENCY-24] **[A]**

Four consequences, all sourced:

- **8,716 per day is a ceiling, not a capacity.** It already assumes FortisBC's
  entire workforce, **plus** mutual aid crews from other utilities, **plus** every
  available private gas contractor in the Lower Mainland.
  [FEI-RESILIENCY-24] **[A]**
- **FortisBC's own sensitivity shows what happens when mutual aid is absent:** the
  rate falls to 2,025 or 723 per day — a factor of four to twelve.
  [FEI-RESILIENCY-24] **[A]** This is the argument the entry previously had to make
  from outside the evidence. It is now made inside it, by the utility.
- **Mutual aid availability is scenario-dependent, so the two site scenarios
  differ.** A crustal event and a Cascadia megathrust do not present the same
  mutual-aid picture: the wider the affected region, the less likely that outside
  crews and uncommitted local contractors are available. See `outside-help.md` for
  the availability finding and do not restate it here. That the rate *assumption*
  is conditional on mutual aid is [A]; any specific rate for a Cascadia event is
  **[?]** and must not be constructed by us.
- **25 percent of customers are assumed to relight their own appliances.** That
  assumption is doing real work in the model. [FEI-RESILIENCY-24] **[A]**

### The uncontrolled-shutdown penalty

If system pressure collapses before meters can be shut, air is drawn into the
distribution system. Order C-6-25: "an uncontrolled shutdown can introduce the
possibility of air being drawn into the distribution system, which in turn presents
a potentially hazardous situation due to the explosive nature of the gas-air
mixture. From an outage perspective, FEI notes that any air within the system must
be purged prior to re-lighting customer appliances which could extend the outage
further." [BCUC-C-6-25] **[A]** [FEI-RESILIENCY-24] **[A]**

**An earthquake is the archetypal uncontrolled shutdown.** The Tilbury reserve is
sized to buy a *controlled* one: 72 hours "are considered to be enough time to
implement a controlled shutdown", and below that there is uncertainty whether one
is possible at all. [BCUC-C-6-25] **[A]**

### The supply-interruption figures — guard these every single time

**BCUC Decision and Order C-6-25, 27 October 2025** (Panel: A. K. Fung, KC (Chair),
T. A. Loski, A. C. Dennier) approved the Tilbury LNG Storage Expansion. The order
has now been read directly and is no longer reaching us through trade commentary;
the entry's citation moves from [B] via [ERQ-TILBURY-25] to [A] on the order
itself. [BCUC-C-6-25] **[A]**

**Attribution corrected — each figure to the document that actually contains it.**

- The order's words are **"hundreds of thousands of customers"**: "It is clear that
  any prolonged outage of supply from the T-South pipeline during the winter would
  put hundreds of thousands of customers at risk of losing service. FEI provided
  extensive evidence in the initial phase of the proceeding to demonstrate that a
  loss of service at this scale would take **several weeks to restore service**."
  [BCUC-C-6-25] **[A]**
- **The number 600,000 appears nowhere in Order C-6-25**, and neither does any
  six-figure customer count. Earlier drafts attributed "at least 600,000
  residential, commercial and industrial customers" to the order. **That
  attribution is withdrawn.** [BCUC-C-6-25] **[A]** on the absence.
- The ~600,000 figure traces instead to **customer rows in the Resiliency Plan's
  Exponent risk-analysis input appendix**, which pair customer counts with total
  outage durations: 600,405 customers / 57 days, 600,405 / 66 days, 640,111 / 61
  days, 640,425 / 70 days, 546,023 / 60 days. The safe statement is the aggregate
  one — **FEI's own modelling contains scenarios of roughly 600,000–640,000
  customers with total outage durations of 57 to 70 days**, which is nearer two
  months than "several weeks". [FEI-RESILIENCY-24] **[A]**
- **Row-attribution caveat.** Text extraction mis-aligns the UID label column
  against the data columns in that table. The pairings *within* a row are sound;
  which AV each row belongs to is not. **Do not attribute any of these rows to a
  named AV** without re-reading the PDF page by hand.

**The guard, which is not optional and travels with every use of these figures:**

> These figures come from a **supply interruption** scenario — a T-South no-flow
> event in winter. No earthquake. No broken pipe. No liquefaction. No damaged or
> unsafe buildings. No access problem. No competing demands on crews. And the
> relight rate that produces those durations already assumes mutual aid **and**
> every available private contractor in the Lower Mainland. Every one of those
> conditions makes restoration worse in an earthquake, not better.

So they are a **floor and an illustration of the relight mechanism**, never an
estimate of anything, and **never a Cascadia number**. What has improved is that we
can now say *why* they are a floor, in FortisBC's own arithmetic, rather than only
asserting it.

**Be scrupulous about which figure is which.** The entry now cites genuine seismic
durations as well as supply-interruption ones, and they must never be blended.

| Figure | Scenario | Source |
| --- | --- | --- |
| "Hundreds of thousands of customers"; "several weeks to restore service" | Supply interruption, no earthquake damage | [BCUC-C-6-25] **[A]** |
| ~600,000–640,000 customers, 57–70 day total outage durations | Supply-interruption modelling rows | [FEI-RESILIENCY-24] **[A]** |
| AV-18: mean total outage 61 days, driven by earthquake lateral spreading | Seismic — **location Restricted Confidential; not known to be the Lower Mainland** | [FEI-RESILIENCY-24] **[A]** |

The relight timeline was contested in the proceeding and survived it. RCIA
submitted "that FEI's restoration and relight plan is overly conservative" and the
CEC argued that relighting business and industrial customers earlier "could
dramatically reduce the GDP losses incurred". The Panel found FEI's assumptions
"reasonable and appropriate". [BCUC-C-6-25] **[A]**

### The Tilbury project figures, corrected

- Capital cost: the Panel accepted "**$873.358 million in 2023 dollars and
  $1,143.889 million in as spent dollars**"; the $1.14 billion figure is the
  as-spent one, over a seven-year construction period. [BCUC-C-6-25] **[A]**
- **The 2.0 Bcf is a "resiliency reserve" carved out of a 3 Bcf tank**, the other
  1 Bcf being peaking supply. Earlier drafts described "a 2.0 Bcf reserve sized to
  support winter load for three days"; the duration is temperature-dependent, not
  flat. Load support is ~**3.5 days** at the modelled average winter condition and
  **2 days 17 hours** at **−10 °C**, and at least 3 days from roughly −6.9 °C
  upward. [BCUC-C-6-25] **[A]**
- **The "three days" is a different thing**: the regulatory shutdown duration FEI
  assumed, and FEI's "Minimum Resiliency Objective" — "the ability of its system to
  withstand and recover from a 3-day no-flow event". The BCUC had previously
  *rejected* that objective as inadequately justified in its 2023 Adjournment
  Decision, which is what prompted the 2024 Resiliency Plan. [BCUC-C-6-25] **[A]**

### Do not shut off your own gas

FortisBC's public earthquake guidance: [FBC-EQ] **[A]**

- Customers are told **not** to shut off their own gas.
- FortisBC will shut off service if fire or emergency officials request it.
- If a customer shuts the gas off at the meter, they must not turn it back on. Only
  a **registered gas contractor** may restore it.

This runs against widespread public instinct and against the practice in some US
jurisdictions with earthquake valves. It is a genuine preparedness lever: an action
a reader could take wrongly, at a moment when a contractor visit is exactly the
scarce resource — and the relight arithmetic above now quantifies how scarce. It
sits squarely within the site's purpose and within PreparedBC's own messaging.

### The City of Vancouver tells residents the opposite, and Surrey does not

Two official bodies serving the same customers point in opposite directions on the
same action, and **neither mentions the other**. This is a fact about the gas system
as much as it is a preparedness lever, so it is recorded here. State both positions;
do not adjudicate between them.

- **FortisBC**, as above: do not shut off your own gas, and once it is off at the
  meter only a registered gas contractor may restore it. [FBC-EQ] **[A]**
- **The City of Vancouver** ends every list of home preparations with "**Know where
  your gas, electric, and water shut-offs are located and know how to turn them
  off.**" [COV-EXPLORER-25] [COV-FACTSHEET-24] **[A]** Its Home Hazard Hunt
  worksheet — a 2011 document still linked as a resource from the City's 2025
  flagship — goes further: "**Keep a suitable wrench close to the gas meter.**"
  [COV-HHH-2011] **[A]**
- **The precise shape of the conflict, which matters.** No City document instructs a
  resident to shut the gas off after an earthquake. What the City does is tell every
  resident to know how, and, in a document it still links, to keep the tool at the
  meter. FortisBC tells customers not to, and says what doing it costs. The City's
  own evacuation page does carry the conditional form — "**Shut off the water supply
  (and gas supply if you're told to)**" — which is correct as far as it goes, and it
  carries no restoration consequence. [COV-EVAC] **[A]**
- **Surrey publishes the FortisBC-consistent version with the mechanism attached**,
  which is the point of quoting it: a Metro Vancouver municipality can give this
  advice plainly, and one does. "**Leave natural gas service on unless officials tell
  you to turn it off. If you go turn off the gas, the gas company has to reconnect
  it, which may take weeks after a major emergency.**" [SURREY-PREP] **[A]**

**Why Surrey's sentence is accurate rather than merely cautious.** "Which may take
weeks" is the relight mechanism seen from the customer's end. A meter shut off by
hand joins the same per-premises queue as every other affected premises, and
FortisBC's own modelling puts the ceiling on that queue at **8,716 relights a day**
— a figure that already assumes the full workforce, mutual aid crews and every
available private contractor in the Lower Mainland, and that falls to **2,025 or
723 a day** without mutual aid. [FEI-RESILIENCY-24] **[A]** The delay Surrey warns
about is not a service-standard estimate; it is a rate limit.

**The lever itself lives in `../preparedness.md`**, alongside the rest of the
jurisdictional comparison. Cross-reference it; do not restate it here.

---

## Guard block — what must NOT be claimed on current evidence

Reproduced as a block so it can be checked against any draft of this page.

- **No earthquake restoration time for the Lower Mainland gas system.** None exists
  in any source we hold. AV-18's 61 days is not one: its location is Restricted
  Confidential.
- **Not that AV-18 is in the Lower Mainland.** Not that it is not.
- **Not that FortisBC has failed to assess seismic risk.** It has, in depth. The
  withdrawn framing must not reappear in any form, including as an aside.
- **Not that gas mains are seismically vulnerable in the Lower Mainland.** The
  Resiliency Plan's per-asset results are anonymised; we cannot locate them.
- **Not that automatic seismic shutoff valves are deployed on the FEI system.** The
  accurate position is a **preliminary-stage initiative** to install and upgrade
  transmission valves with line-break capability that would autonomously shut after
  a seismic event. Scoping, not deployment.
- **Not that "no upgrades planned" to bridge crossings is neglect.** It is a stated
  conclusion from a modelled result: bridges "typically have relatively low
  probabilities of failure".
- **The ~600,000-customer, several-weeks and 57–70-day figures belong to a
  supply-interruption scenario** and are labelled as such every time they appear —
  in the same sentence as the numbers, not in a footnote. A floor and an
  illustration of the relight mechanism, not an earthquake estimate. Never a
  Cascadia number.
- **No constructed Cascadia relight rate.** That mutual aid is less likely in a
  regional event is [A] as a conditional in FEI's model; a specific post-Cascadia
  rate is in no source and must not be arithmetic of ours.
- **Not that FortisBC is negligent.** The LTGRP keyword count is a fact about one
  document's emphasis, stated as such.
- **Not that "55% of homes are heated by natural gas" — or the restaurant and school
  figures beside it — is a City of Vancouver statistic.** They are parameters of a
  community-workshop exercise scenario. See "What is not established".
- **Not that either side of the shut-off conflict is right.** The City's position and
  FortisBC's are both quoted and neither is adjudicated. Recording that two official
  sources disagree is the finding; picking a winner is not ours to publish.

---

### How many customers, and the number is FortisBC's own

Retrieved 10 September 2026 from **FortisBC Energy Inc.'s 2026 Long Term Gas Resource Plan**,
filed with the BCUC on 27 March 2026 — the same document already registered here, whose full
text contains zero occurrences of "seismic" or "earthquake". Table 3-2, base year **2024**:
**583,370 residential accounts in FEI's Lower Mainland region**, against 137,425 on Vancouver
Island and 245,673 Inland, of 996,337 province-wide. Commercial accounts in the Lower
Mainland: **61,348**. Industrial: **886 of FEI's 1,109 province-wide**. [FEI-LTGRP-26] **[A]**

**Three guards on what that counts.**

1. **An account is a meter, not a household.** A single-family house is typically one
   account; an apartment building on a central gas boiler is **one account serving many
   households**, whose residents hold none. So 583,370 is a **floor** on dwellings dependent
   on gas and a **ceiling** on households holding a gas bill. It is not a share of either,
   and it must never be written as a percentage.
2. **"Lower Mainland" here is FortisBC's service region, not Metro Vancouver.** The plan does
   not define its boundary. Write "FortisBC's Lower Mainland service region" and do not
   silently substitute Metro Vancouver.
3. **It is a forecast base year, not an audited actual.** FEI files audited counts in its
   Annual Review of Delivery Rates, where the tables are embedded as images; the same
   appendix says they are also filed as a spreadsheet. A bounded follow-up, not a dead end.

**What this does and does not do for the City's 55%.** It gives the page a sourced statement
of **scale** — FortisBC told its regulator in March 2026 that it serves 583,370 residential
gas accounts in its Lower Mainland region — which, with the resiliency plan's statement that
a winter T-South-scale event could mean "the potential loss of service to all customers in
the Lower Mainland" [FEI-RESILIENCY-24] **[A]**, is enough to carry the mechanism without the
City's figure. It does **not** corroborate "55% of homes are heated by natural gas", which
remains an **exercise parameter** until a dwelling-level source is read. The census route was
untested — `www150.statcan.gc.ca` timed out on every attempt on 10 September 2026 — so record
that half as **we could not reach it**, not as *nobody published it*.

## What is not established

- **AV-18's location, and whether it serves the Lower Mainland.** [?] Restricted
  Confidential to the BCUC (Appendix RP 4-18). Not obtainable through the public
  record. This is the most consequential unknown in the entry: it is the difference
  between a 61-day earthquake outage that concerns this region and one that does
  not.
- **Which Assessed Vulnerability each ~600,000-customer row belongs to.** [?] Text
  extraction mis-aligns the label column against the data columns; resolving it
  requires reading the PDF page by hand.
- **Any Lower Mainland estimate of post-earthquake gas outage extent or duration.**
  [?] None found anywhere. The Resiliency Plan's outputs are anonymised by asset,
  and its Lower Mainland section (§7.2.4) is qualitative.
- **A budget, commitment or date for the §7.2.4 seismic isolation valve
  initiative.** [?] None appears in the public redacted version. Searched: the
  redacted Resiliency Plan in full text and Order C-6-25 in full. Would be found,
  if anywhere, in a subsequent FEI capital filing.
- **Whether any of the 58 Assessed Vulnerabilities have been carried into funded
  projects on seismic grounds.** [?] §8 defers the determination.
- **How dependent Lower Mainland households and businesses actually are on gas.** [?]
  No published statistic has been located. **A trap to record rather than to use:**
  the City of Vancouver's Resilient Neighbourhoods Toolkit carries "55% of homes are
  heated by natural gas", "95% of all restaurants use natural gas" and "Most schools
  are heated by natural gas". [COV-RNTOOLKIT-19] **[A]** *for what they are* — and
  what they are is **parameters of a winter exercise scenario written for community
  groups, not published statistics and not a City finding**. They must never be cited
  as either, and none of them reaches the site on this source. The verification item
  is to find an independent figure — census dwelling-heating data, or a FortisBC or
  BCUC filing — and to key any published number to that instead. Until then the
  dependence is unquantified, and the entry stands on the restoration mechanism, which
  does not need it.

**Closed by this pass**, recorded so the searches are not repeated: whether the
2024 Resiliency Plan assesses seismic hazard (yes, quantitatively); whether the
bridge-crossing review was seismic (yes); whether FEI deploys automatic seismic
shutoff (no — a preliminary-stage initiative only); and confirmation of the
several-weeks figure against Order C-6-25 itself (confirmed, with the 600,000
attribution corrected).

---

## For the page

**Band recommendation: High still holds, both scenarios — on a rebuilt argument.**
The previous argument leaned on the absence of any public seismic assessment. That
leg is gone, and the band does not need it. Against the rubric:

- **Duration.** Weeks or longer, from BC regulatory evidence, under conditions
  strictly easier than an earthquake. [BCUC-C-6-25] **[A]**
- **Extent.** Regional and per-premises; FEI's own modelling runs to
  600,000–640,000 customers. [FEI-RESILIENCY-24] **[A]**
- **Dependency.** The strongest of any system here, and now quantified. Restoration
  is rate-limited by qualified people entering buildings one at a time, at a
  ceiling of 8,716 per day that already assumes mutual aid and every available
  contractor in the region — the two things a megathrust removes.
  [FEI-RESILIENCY-24] **[A]**
- **Asset condition.** A named Lower Mainland asset is de-rated 42 percent for
  seismic compliance and has been found not feasibly repairable.
  [BCUC-C-6-25] **[A]**

**The counter-argument, recorded.** A reviewer could reasonably prefer **NOT
ASSESSED**, and the case for it is now different from before. It is no longer "no
seismic assessment exists" — one does, and it is thorough. It is that the
assessment's outputs are **anonymised and geographically unattributable**: we
cannot say that any modelled outage falls in the Lower Mainland, the
region-specific section is qualitative, and the only durations quotable in full
belong to a non-seismic supply-interruption scenario. On that reading, High rests
on a mechanism plus a floor rather than on a local seismic estimate.

**Why High is still preferred.** The relight mechanism is scenario-independent,
sourced, and now carries FortisBC's own sensitivity showing it degrades by a factor
of four to twelve without mutual aid. That is a rate limit on restoration, not a
guess about damage, and it holds whatever the damage turns out to be. Tilbury adds
a dated, regulator-accepted seismic deficiency in a named local asset. If AV-18's
location is ever established as outside the region *and* nothing else Lower
Mainland-specific emerges, revisit.

**Scope it small.** A short, sharply-scoped system entry, not a full system page.
Four things: FortisBC serves the Lower Mainland's gas distribution; restoration
requires a technician at every premises to relight appliances, and the ceiling is
8,716 a day *with* outside help; a 1969 LNG tank at Tilbury runs at 58 percent
because it cannot be brought up to current seismic standards; and do not shut off
your own gas.

**The mechanism sentence.** Gas is the only utility that cannot be turned back on
from a control room — every affected building needs a technician inside it to
relight appliances before service returns.

**The relight number is the page's strongest material, and it carries its own
guard.** Something of the shape: FortisBC's own planning puts its best relight rate
at 8,716 homes a day, and that figure assumes its full workforce, crews sent from
other utilities, and every available private contractor in the Lower Mainland.
Without crews from elsewhere, its own figures fall to 2,025 or 723 a day. Then the
point the reader needs: a megathrust is the event in which outside crews are least
likely to arrive. Name the scenario dependency; do not compute a number from it.

**The supply-interruption figures, if used at all, are used with their guard in the
same sentence.** In a winter supply interruption with no earthquake damage at all,
the regulator's record puts hundreds of thousands of customers several weeks
without gas, and FortisBC's modelling of comparable events runs to 57–70 days for
around 600,000 customers, because of relighting. Then: an earthquake adds broken
pipes, unsafe buildings, purging of air from depressurised mains, and competition
for crews. If the sentence cannot carry the guard, drop the figures and keep the
mechanism.

**Tilbury is the anchor, and it is a dates-and-numbers story.** A tank installed in
1969, operated at 58 percent of capacity so that it complies with seismic
requirements that came in after it was built, which two engineering firms said
should be replaced rather than repaired, and whose foundation WSP found could not
feasibly be rebuilt to stop it failing from earthquake-caused differential
settlement. The regulator accepted that in October 2025 and approved a
$1.14 billion replacement running over seven years. Present it as dates and
figures, not as judgement — the same treatment the electricity entry gives Murrin.

**The lever is unusually clean, and it is counter-intuitive.** Do not shut off your
own gas; FortisBC will shut it off if fire or emergency officials ask. Once it is
off at the meter, only a registered gas contractor may turn it back on — which puts
the reader at the back of the 8,716-a-day queue the relight mechanism describes.
Specific, cheap, under the reader's control, with a concrete cost for getting it
wrong. Exactly the efficacy pairing the style guide requires before severity may be
stated.

**But the lever now has a complication the site has to carry honestly.** The City of
Vancouver tells every resident to know how to turn the gas off and, in a document it
still links, to keep a wrench at the meter; FortisBC tells customers not to.
[COV-EXPLORER-25] [COV-HHH-2011] [FBC-EQ] **[A]** Both are official, both are current,
and neither acknowledges the other. The site states both and adjudicates neither —
and where a plainly-worded model is needed, it quotes Surrey, which gives the
FortisBC-consistent advice with the reason attached. [SURREY-PREP] **[A]** The
jurisdictional comparison belongs in `../preparedness.md`; what belongs here is that
the reconnection delay Surrey names is this page's own relight arithmetic.

**The framing to hold, replacing the withdrawn one.** A utility that has done the
seismic analysis, filed it with its regulator and published most of it; that found
an earthquake mechanism driving its second-largest risk with a modelled two-month
outage; that is de-rating a major Lower Mainland asset by 42 percent for seismic
compliance; and whose autonomous seismic shutoff programme is still in preliminary
stages. That is a real, dated, sourced, unfinished-programme story — the same shape
as the water and electricity entries — and it needs no argument from silence.

**Verification items to open alongside this entry.** (1) AV-18's location and
whether it serves the Lower Mainland — Restricted Confidential, likely
unobtainable; record as a standing limit rather than a task. (2) Re-read the
Exponent risk-analysis input table page by hand to fix the row-to-AV attribution.
(3) Watch subsequent FEI capital filings for the §7.2.4 valve initiative acquiring
a budget or a date, which would move it from scoping to programme.
