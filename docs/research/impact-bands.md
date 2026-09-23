# Impact bands

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.

**Status.** Fourteen systems assessed, and `src/content/site.ts` now carries the
assignment. Natural gas, which the site did not carry, is in the grid; weather, which
was never a system, is out of it and renders on the timeline instead. **One and a half rows
carry no published assessment**: dams in both scenarios, and large infrastructure
in the crustal column only. **One row carries no band at all**: safety and conflict,
which has no restoration time to assess.

The rubric itself stands as written in `../site-overview.md` §4. What follows is
the band assignment per system per scenario, with the mechanism sentence and the
source that `ImpactCell` requires, and a reconciliation against what
`src/content/site.ts` currently asserts.

---

## The assignment

| System | Cascadia M9 | Crustal M7 | Mechanism | Source |
| --- | --- | --- | --- | --- |
| Communications | Medium | Medium | The province expects disruption to communications for days to weeks, with surviving capacity prioritised for emergency personnel and a prolonged lack of access for the general population; it names satellite phones and amateur radio as the expected fallbacks. The duration statement is the megathrust assessment's; nothing published states one for the crustal earthquake, and no rule requires a cell site to hold any backup power at all. | [DCRRA-2025] **[A]**, with [PEIRS] [CRTC-2025-226] |
| Electricity | High | High | BC Hydro's own filing states that a large seismic event could leave up to two-thirds of downtown customers without power for several weeks, and the system years from complete restoration. | [BCH-WESTEND-25] **[A]** |
| Water | High | High | An M9 is modelled to cause 267 main failures region-wide, with roughly 60 breaks concentrated on the 71 water crossings — the repairs that take longest. | [MV-WATER-22] **[B]** |
| Sanitation | High | High | The province states that disruption to water and wastewater systems is expected for many months; Metro Vancouver has built individual plants to post-disaster standard, which is not the same as making the network survive. | [PEIRS] **[A]** |
| Transportation | High | High | The province designates routes that must stay open after a major earthquake, and states that it is not retrofitting the bridges on them to stay open. | [MOTI-SRDC-05] **[A]** |
| Large infrastructure | **Medium** | Not yet assessed | Modelling for an M9 puts one to two weeks of service disruption at some Vancouver-area ports, road access to the airport cut in the first critical days because every bridge to it is damaged, and moderate liquefaction damage at the delta terminals. | [AIR-2013] **[A]** |
| Fuel | High | High | Fuel is the resource every other distribution depends on, and the province expects supply chains to be inoperable. | [PEIRS] **[A]** |
| Food | High | High | The province expects the network that delivers meat, fruit and vegetables, dairy, baked goods, toiletries and cleaning products to take weeks or months to recover; the problem is moving the goods rather than having them. | [PEIRS] **[A]** |
| Natural gas | High | High | Gas is the one utility that cannot be restored in bulk: service returns only when a technician has entered every affected building and relit every appliance. | [BCUC-C-6-25] **[B]** |
| Dams and reservoirs | Not yet assessed | Not yet assessed | Both dams were reviewed by an engineer in 2024, as the law requires every seven years for the top consequence class, and neither review identified an unsafe or unacceptable condition, but neither published conclusion mentions earthquakes. **Assessed, but not for this.** The capital status, Cleveland not started and scheduled 2028 to 2034, is a separate document and is not in the mechanism sentence. | [MV-DSP-2026], with [MV-CAPEX-2026] for the capital status **[A]** |
| Housing | High | High | Displacement is counted in the tens of thousands of households, there is no published shelter capacity to receive them, and cordoning removes people from homes that survived. | [PEIRS] [COV-RISK-2024] **[A]** |
| Health care | Medium | Medium | About 65% of one health authority's buildings would likely be completely damaged at the ground motion the current code designs for, and no government or health authority has compared the casualty load to regional bed capacity. Peer-reviewed engineering work has. | [DCRRA-APPC] **[A]** |
| Safety and conflict | No band | No band | Most people respond to a disaster by helping one another; theft and violence do happen, but as isolated cases the coverage tends to magnify. **Unbanded, not hatched**: see the decision below. One sentence stands for both earthquakes in `SystemEntry.summary`. | [KATRINA-MYTHS-08] **[A]** |
| Where help comes from | High | Low | Two mechanisms, one per column, plus a guard on the Low. The Cascadia cell: the province's plan assumes agencies outside the impact area are unaffected and stages resources with them, and for a megathrust the same plan states the United States will be unable to deliver mutual aid. The crustal cell: the same assumption, and a local crustal earthquake is the case where it holds, with `Impact.evidence` recording that this is a planning assumption the province states rather than a measured finding. See `src/content/site.ts` for both. | [PEIRS] **[A]** |

**Weather is not in the table, and should not be.** It is a scenario condition, not
a system. It is now carried on `Scenario.conditions` and rendered by `TimelineStrip`
for whichever scenario is selected, with the two conditions shown side by side on
`/scenarios/`. See `../site-overview.md` §9. Gas takes the row weather vacates,
which is a better trade than it looks, because gas fails in a way nothing else on
the grid does and weather never failed at all.

---

## Reconciliation against `src/content/site.ts`

**Closed 11 September 2026, with one exception noted below.** `SYSTEMS` matches this
file row for row on bands and source keys. It does not match on shape: `Impact` carries
one mechanism per column plus an optional `evidence` guard, and this table has a single
mechanism column, so the asymmetric rows (where help comes from, port and airport) are
summarised here and written out in the code. The
table below is the state after the change, kept so the assignment can be checked
against the code without reading both.

It is written against the **thirteen** rows the code carries, not the twelve this
file originally assessed: food and fuel are separate entries in `SYSTEMS`, and the
band is High in both scenarios for each. The split does not change the assignment —
PEIRS states the mechanism for both — but it does mean this file's "food and fuel"
row resolves to two.

| System | Cascadia | Crustal | Was, before 11 September |
| --- | --- | --- | --- |
| Communications | Medium | Medium | high / high — asserted where nothing was assessed |
| Electricity | High | High | high / high |
| Water | High | High | high / high |
| Sanitation | High | High | high / high |
| Natural gas | High | High | *absent from the grid* |
| Transportation | High | High | high / **medium** |
| Large infrastructure | Medium | Not yet assessed | unknown / unknown — the code was *less* confident than the evidence |
| Fuel | High | High | high / **medium** |
| Food | High | High | high / **medium** |
| Dams and reservoirs | Not yet assessed | Not yet assessed | unknown / unknown |
| Housing | High | High | high / high |
| Health care | Medium | Medium | **high / high** |
| Safety and conflict | No band | No band | *absent from the grid* |
| Where help comes from | High | Low | high / low, under the name "The absence of outside help" |
| Weather | *not a system* | | medium / medium — **removed from `SYSTEMS`** |

The four rows that already agreed — electricity, water, sanitation, housing — were
replaced along with the rest. A right answer arrived at by scaffolding is still a
defect, because the next scaffolded value will not be lucky.

**Build tiers moved with the bands.** Health care went from tier 3 to tier 2 and gas
entered at tier 2, following the "Then" list in `build-order.md`. Where help comes
from stays at tier 3 although its file is among the better-sourced in the folder;
`build-order.md` does not place it, and that is a gap in the build order rather than
a judgement about the evidence.

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

**Safety and conflict is a system with no band — decided 15 September 2026.** A
band measures how long a system takes to come back, and how people treat each other
after a disaster has no restoration time. Three options were weighed. *Not yet
assessed* says an assessment could be published and has not been; none could, so the
hatch would put a gap in the record that is not there. *Low* would be past disasters
elsewhere setting a band, which the rubric does not allow, and it would understate
violence in Japan's shelters months on and domestic violence in Christchurch. So the
row keeps its page, nav entry and card, and carries one sentence and a source for
both earthquakes, with no band, no phase and no scenario split. This is not a fifth
`Band` value, the option rejected for weather: the rubric is unchanged, and the row
simply does not sit on it. *Where help comes from* stays banded, because the province's
plan states a different assumption for each earthquake.

**Natural gas becomes a system — decided.** It was absent, and its mechanism is unlike
any other on the grid: restoration is rate-limited not by repair but by sending a
qualified person into every affected building. The grid keeps thirteen systems —
weather having left it, and food and fuel standing as separate rows in the code.

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

- **Whether the fourth band should be one state, two or three.** The grid's
  hatched cell currently means "nobody has assessed this". Dams are not that:
  both were assessed in 2024 under legal compulsion, and the published conclusion
  is silent on earthquakes.
  **Assessed and not published, assessed for something else, and never assessed
  are three different facts wearing one hatch.** A reader who sees the dams cell
  and concludes nobody has looked has been misled by the grid, not by the
  evidence. That is the strongest argument for splitting the fourth band, and it
  is a design question the method page cannot answer alone.
- **Whether the grid can carry an asymmetric row for a reason other than the
  hazard.** Large infrastructure is Medium for Cascadia and unassessed for the
  crustal M7 — not because the crustal event is milder, but because **the only
  study that exists modelled the Cascadia scenario and nothing else.** Outside
  help is also asymmetric, but there the asymmetry is a finding about the world.
  Here it is a gap in the literature wearing the same shape. A reader cannot tell
  those apart from the cell alone, and the method page has to.
- **Whether Medium means the same thing across systems.** Health care is Medium
  because the damage state is known and the capacity comparison is not.
  Communications used to be Medium because requirements are absent, which was not
  a reason at all: an absent rule says nothing about how long the network is down.
  It is now Medium on the province's own duration statement. The general question
  stands — Medium is carrying more than one kind of uncertainty — but it is no
  longer carrying a cell with no duration evidence behind it.

**What sets a band.** The duration, wherever a document states one; extent
describes the band rather than choosing it. Where no duration is published, extent
cannot supply one: that cell is **not yet assessed**. The rubric used to carry a
third column for dependency. Communications is the case that removed it: the
province's megathrust assessment puts disruption at days to weeks, Medium's
duration row [DCRRA-2025] **[A]**, while waiting on electricity and fuel, both High,
pointed at High on the dependency column. Letting that column decide would have
meant **our inference from a dependency overruling the province's own published
duration**. It was dropped on 23 September 2026 with `/dependencies/`; see
`../site-overview.md` §9.

A consequence worth stating plainly, because it looks like an inconsistency and
is not: **a system can be banded below something it depends on.** Electricity is
High and communications is Medium. A cell site comes back when a generator gets
fuel or the local feeder returns; a distribution network comes back one pole at a
time, tens of thousands of times. Waiting on a system is not the same as sharing
its restoration curve.

---

## For the page

The method page has to explain that a band tracks the evidence rather than the
subject, and that a cell left hatched is a statement about the public record.

State plainly that bands are assigned from published assessments, that two
systems have none, that one system has no restoration time and so no band, and that a band can move when a document surfaces. A reader
who understands that the grid is a reading of the public record, rather than a
verdict on the infrastructure, has understood the site.
