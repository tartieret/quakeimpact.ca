# QuakeImpact — Lower Mainland Earthquake Impact

*Project overview. v0.3 — corrections from `research/` applied 10 September 2026.*

---

## 1. Purpose

A public website that shows what a major earthquake actually does to the Lower Mainland — not the minute of shaking, but the months that follow.

The misconception this exists to correct: people picture a violent event with a clear end, followed by a recovery that arrives from outside. The reality is a long degradation of every system they depend on, with no outside help for a significant period because the entire coast is calling for it at once.

**Audience:** general public in the region, written so that an emergency planner or engineer reading it finds nothing to object to. That second constraint sets the standard for sourcing, not the tone.

**Not a modelling project.** Every claim is compiled from published work or documented analogue events. The contribution is synthesis, legibility and narrative — not new analysis.

---

## 2. Principles

1. **Restoration time is the spine.** "Bridges may be damaged" changes nobody's behaviour. "Sewer service: weeks to months, and here is why" does.
2. **Every claim carries a source.** One wrong number and the emergency-management community writes off the whole site.
3. **No doom without a lever.** Every section ends with an action the reader can take.
4. **Coupling over inventory.** The failure of any one system is not the story. The story is that they depend on each other.
5. **Analogues illustrate, they never generate numbers.** Christchurch tells us what life was like. It does not tell us Vancouver's restoration times.
6. **Assumptions are research tasks, not content.** Anything held as "I believe X is the case" enters this document as a verification item and does not reach the site until a source confirms or contradicts it. A contradicted assumption is a good outcome — it is usually more interesting than the assumption was.

---

## 3. Scenarios

Two, held firmly. The contrast between them is itself a teaching point, because most people conflate them.

| | **Cascadia M9 megathrust** | **Shallow crustal M7** |
|---|---|---|
| Source | Offshore subduction interface | Strait of Georgia shallow crust, 3–4 km deep |
| Official simulation | M9.0 Cascadia Full Rupture, GSC scenario catalogue | M7.0 Georgia Strait, same catalogue — and the province's own primary planning scenario |
| Shaking in Metro Vancouver | Moderate intensity, long duration — three minutes in the province's scenario; the deep Georgia Basin prolongs and amplifies | High intensity, short duration — 10–20 seconds of violent shaking in the province's scenario. Durations are scenario parameters, not general facts |
| Geographic extent | Northern California to BC — regional catastrophe | Concentrated, local |
| Tsunami | Outer coast; limited effect inside Burrard Inlet | Not the primary concern |
| Mutual aid | Late rather than absent — the province states the US will be unable to help if it is also overwhelmed | Available — BC's plan assumes agencies outside the impact area are unaffected. That is a planning assumption, and the crustal case is where it holds |
| Recurrence | Sources disagree: NRCan gives 500–600 years on average, BC's own documents 400–500, with intervals from about 200 to 800. Last event 1700 | Roughly once every 1,500 years in the region, per the province's scenario. Rarer near the city, more destructive to it |

The single most important contrast: the crustal event is worse *for Vancouver*, the Cascadia event is worse *for Vancouver's ability to be helped*.

---

## 4. Impact bands

Impacts are expressed as **low / medium / high** per system per scenario, not as figures. This matches the sources — most published work assesses one design event, and inventing intermediate numbers would be modelling by another name.

The rubric is published on its own page and linked from every impact cell. It is deliberately system-agnostic so that "high" for sanitation and "high" for transport mean comparable things.

| Band | Duration | Extent | Dependency |
|---|---|---|---|
| **Low** | Hours to a few days | Localised | Restores on its own |
| **Medium** | Days to weeks | Patchy; worst on poor ground | Waits on one other system |
| **High** | Weeks to months, sometimes longer | Regional | Blocked by cascading failures and by competition for scarce crews, fuel and materials across the whole coast |

A fourth state, **not yet assessed**, is rendered hatched rather than coloured. It is a first-class band, not a gap to be hidden.

**Presentation rule:** a coloured cell alone reads as assertion. Every cell is band → one sentence of mechanism → source link.

---

## 5. Structure

### Part 1 — The shaking

The event itself. Heavy on maps.

- **Ground conditions.** The variable that decides your outcome is what you are standing on. Bedrock on the downtown peninsula and North Shore behaves nothing like the Fraser delta, Richmond, Delta, or the False Creek and Grandview fill. Liquefaction susceptibility, soil classification, shaking amplification.
- **What the two scenarios feel like.** Duration versus intensity, in plain language.
- **Buildings.** Structural performance by era and type, and — more importantly for injuries — non-structural failure: glazing, cladding, parapets. Downtown Vancouver is a glass city. Unreinforced masonry in Gastown, Chinatown, Strathcona.
- **Casualties.** Present the published range and the drivers of the range (time of day, scenario). A single headline number invites dismissal.
- **Fire following.** The classic post-earthquake killer — 1906 San Francisco, Kobe 1995. Broken gas mains ignite, water mains break so there is no pressure, and debris blocks the streets the trucks need. Cover Vancouver's **Dedicated Fire Protection System**: independent high-pressure mains drawn from seawater, with portable pumping. Almost nobody knows it exists. Establish its current extent, and name the areas it does *not* cover. Fire hall seismic upgrades: check the capital plan, do not assume.
- **Secondary hazards.** The earthquake stops; the geology does not. Landslides, dike performance, dam behaviour. Grouped here because they share a pattern — the damage arrives after the shaking, and it arrives where the ground was already marginal.

### Part 2 — Life afterwards

The core of the site. Organised as a timeline: hours → days → weeks → months.

| System | What people underestimate |
|---|---|
| Communications | Networks saturate immediately, then fail as tower backup power runs out |
| Electricity | Not one failure but ten thousand. Substations on delta soil are a handful of large repairs; distribution poles and lines are tens of thousands of small ones, each needing a crew, a truck, fuel and road access. That asymmetry is why the core returns in days and the periphery waits weeks. Beneath both sits a third category: large power transformers are custom-built with lead times in many months and are not stockpiled in quantity, so a substation that loses its transformer bank is not a repair but an order — and in the Cascadia case, an order placed alongside every other utility on the coast |
| Water | Distribution mains on liquefiable ground; restoration measured in weeks to months in the worst areas |
| Sanitation | The one nobody thinks about. Christchurch: thousands of homes on chemical toilets for months |
| Transportation | Crossings, the port, YVR on Sea Island delta ground, the highway network |
| Large infrastructure | Port terminals and cranes, YVR on Sea Island, the BC Ferries terminals at Tsawwassen and Horseshoe Bay. **Assessments required before writing anything.** Assume nothing here — see note below |
| Fuel | The master dependency, and it is upstream of almost everything else on this list. Generators, repair crews, trucks, hospitals and pumps all run on diesel arriving by road from a small number of terminals, most on the Burrard Inlet shoreline or the delta. Two points to land: a service station with full tanks and no power dispenses nothing, and the region holds only a limited number of days of supply. **Find that days-of-supply figure** — it may be the single most quotable number on the site |
| Food | Feeding a metro region with the port down and crossings restricted. The problem is not stock, it is logistics: distribution centres, refrigeration, and a resupply cycle measured in days. Held separately from fuel because the failure is different — food is a demand the region cannot store its way out of, while fuel is the input every other system's repair depends on. Food waits on fuel; nothing waits on food except people |
| Natural gas | The one utility that cannot be restored in bulk. Water and electricity come back when the network is repaired; gas comes back when a technician has entered every affected building and relit every appliance. That is a per-premises operation across hundreds of thousands of premises, and it is why a supply interruption with no earthquake damage at all is measured in weeks. Also carries a counter-intuitive safety message: FortisBC's advice is **not** to shut off your own gas |
| Dams and reservoirs | Cleveland, Seymour Falls, Coquitlam. Dual-purpose content — they are the water supply and they are a downstream hazard. Metro Vancouver publishes dam safety material |
| Housing | Tens of thousands displaced from standing but tagged buildings, into a region with no rental slack. Arguably the most underestimated consequence of all |
| Health care | Surge demand against damaged facilities running on trucked diesel |
| Absence of outside help | The Cascadia planning assumption: mutual aid unavailable because the whole coast needs it simultaneously |

**Assumption discipline.** The temptation on port, airport and ferry terminals is to write "these would not survive." Do not. YVR has done substantial ground improvement on Sea Island and is better studied than intuition suggests; pile-supported wharves on treated ground do not behave the way a lay reader expects. Port cranes and wharves are a genuine Kobe-style vulnerability, but that has to come from an assessment, not from expectation. If the documents confirm the fear, the claim becomes powerful. If they do not, that is itself worth telling readers — and it protects the credibility of everything else on the site.

**Centrepiece: the dependency graph.** Water restoration needs power for pumps and road access for crews. Roads need debris clearing, which needs fuel. Fuel terminals sit on liquefiable delta ground. Hospitals run on diesel that arrives by truck. Nobody has rendered this legibly for a general audience in this region. If the site has one original contribution, this is it.

### Part 2b — Who can actually leave

If the answer to a broken region is "people leave," this section asks whether they physically can. It pairs with the food-supply arithmetic and the housing page.

This is also the site's worked example of the citation convention — see section 7.

**Vancouver is a peninsula, not an island.** Bounded north by Burrard Inlet and south by the North Arm of the Fraser, but connected by land eastward through Burnaby and New Westminster. That land route is the city's real lifeline, and it is worth saying plainly because the intuition is wrong.

**Richmond and Delta are the genuine islands.** Lulu Island and Sea Island hold on the order of a quarter-million people, sitting on the region's worst ground, reached only by bridges and a tunnel whose approaches cross the same liquefiable delta on both banks. Dike performance is a separate question on top.

**The North Shore is close behind.** Two vehicle crossings, a passenger ferry, mountains behind. Any narrative about North and West Vancouver being cut off should be checked against the actual seismic assessments of both crossings rather than assumed.

**Highway 1 through the Fraser Valley is the regional spine.** Its condition determines whether aid comes in and people go out. Route 99 south to the border requires crossing the Fraser regardless.

**Approaches, not spans.** The most important and least understood point in this section. A seismically retrofitted bridge can survive intact while its approach embankment on soft fill settles or spreads laterally. A standing bridge with a step at the abutment carries nobody. Kobe and Christchurch both demonstrated this. Retrofit announcements almost never distinguish the two.

**Departure is not day one.** Nobody drives out immediately — no fuel, blocked roads, everyone at once. People leave over weeks and months, ground out by cold, absent sewer, closed schools and no work. Christchurch lost population that way. This is the honest version and it is more unsettling than an image of gridlock.

**Disaster Response Routes — and the nuance that matters.** Metro Vancouver has a designated, signposted Disaster Response Route network, and some crossings on it have been prioritised for seismic upgrade. But these routes are for emergency responders, and the public is expected to stay off them. Presenting them as evacuation routes would teach exactly the wrong behaviour. Explaining what the signs actually mean is itself a good preparedness item.

**Landslides close the corridors that matter most.** Sea to Sky, and the Highway 1 approach through the canyon near Hope. These are not just exits — they are how aid arrives. Slope failure there decouples the region from the rest of the province independently of any bridge damage. Slides into steep-walled inlets can also generate local waves; check whether Howe Sound has published work on this.

*To verify:* crossing-by-crossing seismic assessments, which crossings are on the Disaster Response Route network and which have been upgraded, Massey Tunnel status and replacement timeline, published route-recovery planning, provincial landslide susceptibility mapping for the two corridors.

### Part 3 — Preparing

Not siloed. Every system page in Part 2 ends with its own action; this section aggregates them into a coherent plan.

**The guidance has been checked, and the hook is not the one we expected.** PreparedBC's Earthquake and Tsunami Preparedness Guide says "at least two weeks", three times over. Its general emergency-kit page says a minimum of three days to one week. Its earthquake hazard page says a minimum of three days. Washington State says two weeks everywhere, under one named campaign.

So the gap is not across the border. It is inside British Columbia's own advice — while "72 hours" is what most people still remember, and what the province's own emergency support services are built to provide. State all of it, cite all of it, and let the comparison do the work.

---

## 6. Maps

Decided per dataset, based on what is actually available. Embed official viewers where they exist and permit it; static images with captions where they do not.

**Base layer is the ground, not the municipality.** A choropleth by city misleads — Richmond is uniformly poor ground, Vancouver is half bedrock and half fill. Municipal outlines sit on top as reference only.

**The persuasive overlay:** fixed critical infrastructure — crossings, substations, transmission corridors, major water mains, Iona and Annacis treatment plants, fuel terminals — drawn on top of liquefaction susceptibility. The reader sees for themselves which assets sit on the worst ground. That overlay does more work than any paragraph.

---

## 7. Sources

**How sources appear on a page.** A register nobody reads is not sourcing. Every source has a key in the register; running text cites the key and renders a numbered marker that opens the entry in place — title, publisher, year, what it is being used for, and the link. The same entries are listed again at the foot of the page. A marker may also point at another page on this site, so a claim can defer to the page that carries the reasoning instead of repeating it. `/leaving/` is the worked example.

**Contributions.** `/contribute/` states what the project can use — a published document, a correction with a source behind it, a pointer to a report, a read from someone who does this work — and what it cannot: unsourced assertion, new modelling, analogues used to generate numbers. It is linked from the source register and from the reference navigation on every page.

**Primary — reports.** NRCan seismic hazard model, Metro Vancouver and City of Vancouver seismic and infrastructure studies, published regional loss estimates, BC Hydro, Emergency Management BC / PreparedBC, seismic assessments of individual crossings.

**Secondary — analogue events, for illustration only.**

- **Christchurch 2011** — the closest analogue for aftermath. Liquefaction on comparable ground, sewer out for months in the east, a Western city with functioning institutions, and it still took years.
- **Kobe 1995** — a port city of similar scale losing its port.
- **Tōhoku 2011** — fuel logistics. The mechanism is that the fuel existed and the terminals and trucks to move it did not, which is the shape of the Lower Mainland argument. Sourced from the Japanese government's own briefing; lead with BC's documents and use this only to show what it looked like.

**Retired, 10 September 2026 — the West Berlin 1948–49 airlift comparison.** It was
carried here as a ceiling on what rescue can be: airlift tonnage per capita set against
the humanitarian water minimum. The arithmetic held up under verification and the
comparison still does not earn its place. It needs three caveats before it can be stated
honestly — that most airlift tonnage was coal, that Berlin's water was never cut, and that
nobody plans to supply a metro region by air — and a comparison that takes three caveats
to be fair is not teaching a reader anything they can use. Removed from the overview, from
`research/analogues.md` and from the sources page.

*State the counterpoint, or an expert will.* Nobody plans to supply a metro region by air. The actual levers are restoring surface corridors and reducing demand — which means people leave. That is its own hard truth, and it belongs on the housing and displacement page.

---

## 8. Build order

A thin complete grid is worth less than a few deep pages.

**MVP:** the two scenarios first, built entirely on the openly licensed NRCan catalogue; the method page and band rubric; **water, transportation, who stays, ground conditions, power**; and the preparing page. Publish it. The ground-conditions map is held pending a licence reply, so ground conditions ships as text with an outbound link. See `research/build-order.md`.

**Then:** sanitation, fuel, food, communications, housing.

**Then:** dependency graph, casualties, the full prepare section.

---

## 9. Decisions

### Closed

- **Language: English only.** Write in plain English that would translate cleanly, in case a municipality or agency ever asks for a French or Chinese version — but do not build for it now.
- **Name and domain: QuakeImpact, quakeimpact.ca.**
- **Stack and hosting: Next.js static export on Netlify.** See `stack-and-structure.md`.
- **Electricity bands High, and the page does not generalise.** BC Hydro's own filing
  says a large earthquake could leave up to two-thirds of downtown customers without
  power, several weeks to restore service and years to restore the system. That is
  downtown, and nothing equivalent is published for the rest of the region. The band is
  High; the page leads with the specific downtown fact and states the limit. **A
  specific sourced fact is worth more to a reader than a generalised band** — someone
  who lives downtown now knows something actionable about where they live, which is
  what the site is for.
- **Weather is not a system. It is a scenario condition.** It does not fail; it makes
  every other failure worse, and the province's own scenarios build it in that way — the
  DCRRA sets its M9 in an August heatwave with wildfire smoke, PEIRS sets its M7 on a
  January afternoon after an atmospheric river. Weather leaves `SYSTEMS` and is rendered
  on the timeline. The grid loses a row it could not honestly fill.
- **Natural gas becomes a system.** It was missing, and it carries a mechanism no other
  system has: restoration is rate-limited by sending a person into every building. The
  grid keeps twelve systems.
- **Map dataset licensing: settled per dataset.** See `licensing.md`. The NRCan catalogue and City of Vancouver open data are cleared with attribution; the Metro Vancouver microzonation layers are link-only pending written approval from ICLR.

### Open

- Whether to seek review from a local emergency-management or geotechnical contact before launch. Recommended: it converts the site from one person's compilation into something the field will link to.
- **Whether "Absence of outside help" should be renamed "Where help comes from".**
  Raised 10 September 2026. The row is the only one in `SYSTEMS` named for a **negative**,
  and the name states a conclusion the evidence does not support. `research/systems/outside-help.md`
  reaches the opposite framing in its own words — *"Help is late, not absent"* — and bands
  the row **Low** for the crustal M7, where the province's staging assumption is
  geographically plausible. A reader meeting a row called "absence of outside help" banded
  Low has been told two contradictory things by the grid before reading a word.

  The positive name also carries more information, because what a reader wants to know is
  *who comes, from where, and when* — and the file answers that: Alberta maintains an
  Earthquake Response Plan for British Columbia, the formal instruments are named, and the
  strongest finding in the file is that **EMBC's own list of applicable agreements names no
  Alberta instrument while Alberta publishes a plan for us**. None of that is expressible
  under a heading about absence.

  Against the rename: "absence of outside help" is what makes the Cascadia column
  frightening in the right way, and a neutral title may bury the finding that the province
  expects US mutual aid to be unavailable. Recommended: rename, and let the Cascadia
  mechanism sentence carry the weight — it is a stronger sentence than a title.

  Touches `site-overview.md` §5, `research/impact-bands.md`, and `SYSTEMS` in
  `src/content/site.ts`. One array entry, no other code change.

- **Whether the site archives its own sources.** Several citations already point at web archives because the publisher reorganised or the host died — the AIR study, the RMS Kobe retrospective. Two federal hosts went from resolving to NXDOMAIN during this project's lifetime. A site whose whole proposition is that its sources check out should not depend on other people's links holding. Recommended: capture every cited source at the version we read, and record the capture alongside the live URL.
