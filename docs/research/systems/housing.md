# Housing

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.

**Status.** No longer *not yet assessed*. Displacement is now published by four independent
bodies, red- and yellow-tag counts exist for both scenarios, and the province states in its own
voice that interim housing plans are still to be written. **Proposed band: High**, in both
scenarios — set by the size of the displaced population, by the absence of any published shelter
capacity to put it in, and by cordoning, which keeps people out of undamaged homes. The
per-scenario ordering is counter-intuitive and must survive to the page: for the City of Vancouver
the rarer crustal M7.2 is far worse than the M9.0 Cascadia. [COV-RISK-2024] **[A]**

---

## Findings

### Four displacement estimates. They measure different things.

They are not alternative values of one quantity, and they must never be merged into a single
column without the "quantity measured" label travelling with them.

| Source | Geography | Scenario | Quantity measured | Figure |
| --- | --- | --- | --- | ---: |
| [PEIRS] **[A]** | Greater Vancouver | M7.0 Georgia Basin crustal | Households displaced | **70,000** |
| [COV-RISK-2024] **[A]** | City of Vancouver only | M7.2 Georgia Strait | Occupants disrupted or displaced >90 days, night | 230,520 |
| [COV-RISK-2024] **[A]** | City of Vancouver only | M7.2 Georgia Strait | Same, daytime (includes workers) | 365,340 |
| [COV-RISK-2024] **[A]** | City of Vancouver only | M9.0 Cascadia | Same, night / day | 115,850 / 140,000 |
| [NRCAN-SCEN] **[A]** | BC-wide, all affected communities | M9.0 Cascadia Interface Best Fault | People displaced | 577,039 |
| [NRCAN-SCEN] **[A]** | BC-wide | M7.0 Georgia Strait | People displaced | 345,774 |

Three different units sit in that table — households, occupants disrupted *or* displaced for more
than 90 days, and people displaced — across three different geographies. A reader who sees
70,000 next to 577,039 without the labels will read the first as a correction of the second.

**Recommended primary regional figure: 70,000 households, Greater Vancouver, M7.0**
[PEIRS] **[A]**. It is provincial, current to August 2026, modelled by Natural Resources Canada,
and — the deciding reason — it is a *regional* figure rather than a provincial total presented as
one. The OpenDRR headline counts are BC-wide; using either as a Metro Vancouver number would
overstate the region by an unknown margin. A Metro Vancouver subtotal is derivable from the
catalogue's Census Subdivision datasets and is a data task, not a research task.

**Carry the City of Vancouver figure alongside it as the city-scale number** [COV-RISK-2024]
**[A]**. It is the only source that separates day from night, that runs three scenarios on the same
model, and that reports displacement by building type — which is what turns a total into an
explanation.

### Red and yellow tags

- M9.0 Cascadia: **18,375 buildings red-tagged, BC-wide.** [NRCAN-SCEN] **[A]**
- M7.0 Georgia Strait: **10,262 red-tagged, BC-wide.** [NRCAN-SCEN] **[A]**
- M7.0, Greater Vancouver: **10,000 red-tagged (uninhabitable) and 6,100 yellow-tagged
  (conditionally inhabitable).** [PEIRS] **[A]**

PEIRS is the only source found that publishes a **yellow-tag** count. That matters more than it
looks. A yellow tag is the condition most readers would actually be in: the building stands, entry
is restricted, and nobody has said for how long.

### The province's own scale statement

In the M9.0 Cascadia scenario, damage assessment teams are overwhelmed and buildings are
tagged red, yellow or green, "leaving about **two million people in need of alternate housing**."
[DCRRA-2025] **[A]** The context has to travel with the number: it is province-wide, it is a
narrative scenario statement rather than a model output, and the same chapter's building damage
figures are the province adopting the federal scenario catalogue rather than estimating
independently.

### Cordoning — the mechanism the site was missing

Areas with high concentrations of damage may be closed off "**for weeks, months, or even
years**", with the **West End** and the **Downtown Eastside** named as the neighbourhoods most
at risk of it. [COV-RISK-2024] **[A]**

This is the bridge between two things a reader already believes and cannot connect: *my building
came through it* and *I still cannot go home*. Cordoning is not about the building. It is about the
block. It explains why displacement counts run so far above red-tag counts, and it is the single
most useful sentence on this page.

The neighbourhood concentration behind it is published: six neighbourhoods carry 65% of citywide
seismic risk — West End, Downtown Eastside (including Chinatown and Strathcona), Downtown,
Kitsilano, Fairview, Mount Pleasant. [COV-RISK-2024] **[A]** Per-building-type displacement
rates, and the tenure and income composition of those neighbourhoods, live in `../buildings.md`;
they are not restated here.

### There is no post-disaster housing plan, and the province says so itself

PEIRS lists "**Interim housing plans developed**" as a *transition condition for recovery* — that is,
as work still to be done — while stating: "Large numbers of people may require interim housing
for months to years. Commercially available shelter space, such as hotels, may be unavailable due
to demand, damage, and reduced staffing capacity." [PEIRS] **[A]**

PEIRS also states, as a planning assumption, that local capacity will not be there. The strategy is
written "based on the assumption that First Nations and local authorities are unable to stand up
standard emergency response functions, such as emergency support services (ESS), search and
rescue (SAR), damage assessment, and shelter for evacuees." [PEIRS] **[A]**

That is a government-voice statement of the gap. It is stronger than anything we could infer, and
it is quotable.

### What is published at the municipal end: 25 hubs, no capacity

Vancouver publishes **25 disaster support hubs** — outdoor-capable gathering sites where group
lodging and shelter "may" be provided depending on impacts. **No capacity figure is published for
them.** [COV-HUBS] **[A]**

The honest publishable pairing is therefore: **70,000 displaced households against 25 hubs of
unstated capacity.** Both halves are sourced; the second half is a searched absence, not a guess.

### Discrepancy on the record

PEIRS's summary table and its narrative both say "70,000 **households**". A logistics footnote at
p. 118 says "70,000 displaced **persons**". [PEIRS] **[A]** for both statements as statements.
The table and the narrative agree with each other and are preferred. The discrepancy is recorded
here and in `../../knowledge.md`; it is not resolved.

### Caution: GREGORIAN-2010 is not a regional number

Gregorian (UBC, 2010) reports 144,507 households displaced and 84,004 seeking public shelter for
a M7.3 Strait of Georgia scenario across the Metro Vancouver CMA. [GREGORIAN-2010] **[B]** —
and it should not be used as a displacement figure at all. UBC's own metadata marks it
**Unreviewed**; it is a 2010 master's graduating project; and its casualty model returns roughly
24 deaths for all of Metro Vancouver, two orders of magnitude below the PEIRS M7.0 figure of
2,000 fatalities. Its author's stated caveat is that results are highly sensitive to assumed water and
power outage durations. **Use it only as a dated illustration of method. Never as an authoritative
regional number, and never on the site as a figure.**

---

## What is not established

**No regional or sub-provincial displacement or shelter-demand estimate.** IPREM publishes annual
reports but no displacement or shelter-demand estimate; Metro Vancouver publishes none.
Searched 10 September 2026. **[?]** Surrey, Richmond and North Vancouver were not searched
individually — absence there is untested rather than established.

**No published ESS reception-centre or group-lodging capacity.** Provincial ESS program pages
exist; no capacity figure is published, and no capacity planning is benchmarked against a
catastrophic-earthquake caseload. The 2016 ESS factsheet says only that opening group lodging
"depends on many factors including the size of the emergency." Searched 10 September 2026.
**[?]** This is the number that would sharpen the 25-hubs pairing, and nobody has published it.

**Burnaby's B-SAFER strategy is in progress, not published** — draft summer 2026, final expected
**fall 2026**, studying M7.0 Georgia Strait and M9.0 Cascadia scenarios. [BBY-BSAFER] **[A]** for
the project's existence and schedule. **This is a live refresh trigger**: it is the most likely source
of a sub-provincial displacement estimate to appear within the next twelve months, and this page
should be re-run against it when it lands.

**A Metro Vancouver subtotal from the OpenDRR catalogue.** Derivable from the Census Subdivision
datasets, not yet done. A data task, not a research task.

**Method caveat, which travels with every absence above.** General web search was unavailable for
most of the session that produced this evidence. The material was obtained by direct fetching of
government, health-authority and regulator endpoints, sitemaps, site-native search APIs, the
Crossref API and the NRCan repository API. These negatives are **"not found through these
channels"**, not proofs of universal absence.

---

## For the page

**Mechanism sentence.** Displacement is not the same as collapse. Most people who cannot go
home would have homes still standing — yellow-tagged, without water or power, or inside a block
that has been closed off. Lead with that; the numbers follow it, not the other way round.

**Cordoning is the centrepiece.** It is the one idea on this page a reader will not already have, and
it is sourced in the City's own words: areas of concentrated damage closed for weeks, months or
even years. Give it a heading of its own. It also does the work of explaining why displacement
figures run so far above red-tag counts, which is otherwise the first thing an expert will query.

**Guards that must travel with the numbers.**

- Every displacement figure carries its geography, its scenario and its unit in the same sentence.
  Never a bare "577,039 displaced".
- 70,000 is *households*, Greater Vancouver, M7.0. If a layout forces one number onto a card, it is
  that one, with all three labels.
- The City of Vancouver figures are the **City only** — not Metro Vancouver, not the region.
- The two-million figure is province-wide and comes from a narrative scenario, not a model run.
- No analogue generates a displacement number here. Christchurch illustrates what months of
  displacement were like; it does not forecast Richmond.

**The pairing to publish.** 70,000 displaced households; 25 disaster support hubs; no published
capacity for them; and the province's own line that interim housing plans are still to be
developed. Stated flatly, in that order, it needs no adjectives and should not be given any.

**Through-line, shared with `health-care.md` and `communications.md`: the new buildings are
excellent and the existing ones are the problem.** The new St. Paul's, the new Surrey hospital,
Royal Columbian's acute care tower, E-Comm's Lower Mainland centre and three new Vancouver
fire halls are built to post-disaster standard. Existing St. Paul's, Richmond Hospital, most of
Vancouver's fire halls, 265 outstanding school seismic projects province-wide and every cell site in
the region are not. Housing's version of that sentence: nearly 70% of Vancouver's roughly 90,000
buildings were built before 1990, and half before 1973. [COV-RISK-2024] **[A]** Factual, sourced,
non-alarmist — and it is the same sentence on all three pages.

**Lever.** The honest one here is not "have a kit". It is: find out before the event whether you
would be displaced — building age and type, and whether the neighbourhood is one of the six —
and know that the plan for where people go next has not been written yet, so an arrangement
with someone outside the region is worth more than a shelter place nobody has confirmed exists.

**Do not write.** No "mass exodus", no "tent city", no imagined scenes inside a hub. No
second-person outcome framing — not "your building will be tagged". Severity is allowed; dread is
not.
