# Impact bands

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.

**Status.** Twelve systems assessed, plus one new system the site does not yet
carry and one entry that should stop being a system at all. Six of twelve rows
were *not yet assessed* when this research began. **One and a half remain**: dams
in both scenarios, and large infrastructure in the crustal column only. That
change is the single largest result of the pass, and it happened because
documents were found — the province's operational plans, a utility's regulatory
filings, and a study recovered from a web archive after its publisher's copy went
dead — not because the standard of evidence was relaxed.

The rubric itself stands as written in `../site-overview.md` §4. What follows is
the band assignment per system per scenario, with the mechanism sentence and the
source that `ImpactCell` requires, and a reconciliation against what
`src/content/site.ts` currently asserts.

---

## The assignment

| System | Cascadia M9 | Crustal M7 | Mechanism | Source |
| --- | --- | --- | --- | --- |
| Communications | Medium | Medium | Nothing requires a cell site to hold any backup power at all; the regulator opened a proceeding to decide what the requirement should be and has not decided. | [CRTC-2025-226] **[A]** |
| Electricity | High | High | BC Hydro's own filing states that a large seismic event could leave up to two-thirds of downtown customers without power for several weeks, and the system years from complete restoration. | [BCH-WESTEND-25] **[A]** |
| Water | High | High | An M9 is modelled to cause 267 main failures region-wide, with roughly 60 breaks concentrated on the 71 water crossings — the repairs that take longest. | [MV-WATER-22] **[B]** |
| Sanitation | High | High | The province states that disruption to water and wastewater systems is expected for many months; Metro Vancouver has built individual plants to post-disaster standard, which is not the same as making the network survive. | [PEIRS] **[A]** |
| Transportation | High | High | The province designates routes that must stay open after a major earthquake, and states that it is not retrofitting the bridges on them to stay open. | [MOTI-SRDC-05] **[A]** |
| Large infrastructure | **Medium** | Not yet assessed | Modelling for an M9 puts one to two weeks of service disruption at some Vancouver-area ports, road access to the airport cut in the first critical days because every bridge to it is damaged, and moderate liquefaction damage at the delta terminals. | [AIR-2013] **[A]** |
| Food and fuel | High | High | Fuel is the resource every other distribution depends on, and the province expects supply chains to be inoperable and the consumer-goods network to take weeks or months to recover. | [PEIRS] **[A]** |
| Natural gas | High | High | Gas is the one utility that cannot be restored in bulk: service returns only when a technician has entered every affected building and relit every appliance. | [BCUC-C-6-25] **[B]** |
| Dams and reservoirs | Not yet assessed | Not yet assessed | Both dams were reviewed by an engineer in 2024, as the law requires every seven years for the top consequence class, and both were found safe — but neither published conclusion mentions earthquakes, and the seismic upgrade has not started. **Assessed, but not for this.** | [MV-DSP-2025] [MV-CAPITAL-2027] **[A]** |
| Housing | High | High | Displacement is counted in the tens of thousands of households, there is no published shelter capacity to receive them, and cordoning removes people from homes that survived. | [PEIRS] [COV-RISK-2024] **[A]** |
| Health care | Medium | Medium | About 65% of one health authority's buildings would likely be completely damaged at the ground motion the current code designs for, and no published document compares the casualty load to regional bed capacity. | [DCRRA-APPC] **[A]** |
| Absence of outside help | High | Low | BC's plan assumes agencies outside the impact area are unaffected and stages resources there; in a Cascadia event the province states the US will be unable to deliver mutual aid. | [PEIRS] **[A]** |

**Weather is not in the table, and no longer should be.** Decided 10 September 2026:
it is a scenario condition, not a system, and it is rendered on the timeline. See
`../site-overview.md` §9. The grid keeps twelve systems — gas takes the row weather
vacates, which is a better trade than it looks, because gas fails in a way nothing
else on the grid does and weather never failed at all.

---

## Reconciliation against `src/content/site.ts`

The code currently carries scaffolding, not findings. Seven of twelve rows
disagree, and **in every disagreement the code is more confident than the
evidence**.

| System | Code says | Research says | |
| --- | --- | --- | --- |
| Communications | high / high | Medium / Medium | **conflict** — code asserts High where nothing was assessed |
| Electricity | high / high | High / High | agrees now, by coincidence — the code said High while the research said Medium |
| Water | high / high | High / High | agrees |
| Sanitation | high / high | High / High | agrees now, by coincidence — the code said High while the research said not assessed |
| Transportation | high / **medium** | High / **High** | **conflict**, crustal column |
| Large infrastructure | unknown / unknown | **Medium** / Not yet assessed | **conflict**, Cascadia column — the code is now *less* confident than the evidence, the only row where that is true |
| Food and fuel | high / **medium** | High / **High** | **conflict**, crustal column |
| Dams and reservoirs | unknown / unknown | Not yet assessed | agrees |
| Housing | high / high | High / High | agrees now, by coincidence |
| Health care | high / high | **Medium / Medium** | **conflict** |
| Weather | medium / medium | *removed — not a system* | **decided**: drop from `SYSTEMS`, render on the timeline |
| Absence of outside help | high / low | High / Low | agrees |
| Natural gas | *absent* | High / High | **decided**: add to `SYSTEMS`, taking the row weather vacates |

The coincidences matter as much as the conflicts. Four rows where the code and
the research now agree were, until this pass, rows where the code asserted a
band with nothing behind it and happened to land on the answer the evidence
later gave. A right answer arrived at that way is still a defect, because the
next scaffolded value will not be lucky.

`Impact.mechanism` is `loremLine()` and `Impact.source` is `"TBD"` for all
twenty-four cells. The mechanism column above is the raw material for those
fields, but it is research prose and does not ship as written — see
`CONVENTIONS.md` and the copy pass.

---

## Decisions taken, and one still open

**Weather stops being a system — decided.** It does not fail; it makes every other
failure worse. Cold makes shelter urgent, heat makes water urgent, rain makes
landslides likelier. The province's own scenarios build weather in exactly this way,
as a condition of the scenario rather than an affected system: the DCRRA sets its M9
in an August heatwave with wildfire smoke, PEIRS sets its M7 on a January afternoon
immediately after an atmospheric river.

Weather leaves `SYSTEMS` and is rendered on the timeline. **The alternative — a fifth
`Band` value meaning "modifier, not assessed on this scale" — was rejected**, because
it would have added a state to the rubric to accommodate a single row that never
belonged in the grid. Widening a classification to fit one exception is how a rubric
stops meaning anything.

**Natural gas becomes a system — decided.** It was absent, and its mechanism is unlike
any other on the grid: restoration is rate-limited not by repair but by sending a
qualified person into every affected building. The grid keeps twelve systems.

**Electricity bands High — decided, with the inference refused.** BC Hydro's statement
is specific to Murrin Substation and downtown Vancouver. The band is High because the
grid is regional and the only measured evidence points that way; Medium would rest
entirely on a 2011 press release the utility's own engineers have since contradicted.

But the page does **not** generalise. It says up to two-thirds of *downtown* customers,
several weeks to service, years to full system restoration — and that no equivalent
assessment is published for the rest of the region. **This is the pattern to reuse
wherever a band is broader than its evidence:** band the row, then write the specific
fact and name the gap. A reader downtown learns something about their own street; a
reader in Surrey learns that nobody has said. Both are more useful than a regional
average nobody measured.

---

## What is not established

- **Whether the fourth band should be one state or two — now three.** The dams
  research produced a state nobody anticipated. The grid's hatched cell currently
  means "nobody has assessed this". Dams are not that: both were assessed in 2024
  under legal compulsion, and the published conclusion is silent on earthquakes.
  **Assessed and not published, assessed for something else, and never assessed
  are three different facts wearing one hatch.** A reader who sees the dams cell
  and concludes nobody has looked has been misled by the grid, not by the
  evidence. This is now the strongest argument for splitting the fourth band, and
  it is a design question the method page cannot answer alone.
- **Whether the grid can carry an asymmetric row for a reason other than the
  hazard.** Large infrastructure is now Medium for Cascadia and unassessed for the
  crustal M7 — not because the crustal event is milder, but because **the only
  study that exists modelled the Cascadia scenario and nothing else.** Outside
  help is also asymmetric, but there the asymmetry is a finding about the world.
  Here it is a gap in the literature wearing the same shape. A reader cannot tell
  those apart from the cell alone, and the method page has to.
- **Whether Medium means the same thing across systems.** Communications is
  Medium because requirements are absent; health care is Medium because the
  damage state is known and the capacity comparison is not. Those are different
  kinds of uncertainty wearing the same label.

---

## For the page

The method page carries more weight than originally planned, and for a changed
reason. It was going to explain six hatched cells. It now has to explain that
most of the grid moved in a single research pass — which is a stronger argument
for the rubric, not a weaker one, because it shows the band tracks the evidence
rather than the subject.

State plainly that bands are assigned from published assessments, that two
systems have none, and that a band can move when a document surfaces. A reader
who understands that the grid is a reading of the public record, rather than a
verdict on the infrastructure, has understood the site.
