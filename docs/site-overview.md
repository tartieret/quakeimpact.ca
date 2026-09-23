# QuakeImpact — Lower Mainland Earthquake Impact

*Project overview. v0.4, 14 September 2026.*

---

## 1. Purpose

A public website that shows what a major earthquake actually does to the Lower Mainland — not the minute of shaking, but the months that follow.

The misconception this exists to correct: people picture a violent event with a clear end, followed by a recovery that arrives from outside. The reality is a long degradation of every system they depend on, with no outside help for a significant period because the entire coast is calling for it at once.

**Audience:** general public in the region, written so that an emergency planner or engineer reading it finds nothing to object to. That second constraint sets the standard for being right, not the tone and not the precision.

**General information, not a bibliography.** The site gives a representative picture of the consequences, compiled from published work and documented analogue events. The contribution is synthesis, legibility and narrative, not new analysis. How that shapes the writing is in `style-guide.md` §1, §5 and §6.

---

## 2. Principles

1. **Restoration time is the spine.** "Bridges may be damaged" changes nobody's behaviour. "Sewer service: weeks to months, and here is why" does.
2. **Every claim rests on a source.** One wrong number and the emergency-management community writes off the whole site. Right means the right order of magnitude, not every qualifier the source carries.
3. **No doom without a lever.** Every section ends with an action the reader can take.
4. **Coupling over inventory.** The failure of any one system is not the story. The story is that they depend on each other.
5. **Analogues convey the lived experience.** Christchurch tells us what life was like; it does not tell us Vancouver's restoration times. There is no need to keep stressing the differences.
6. **Assumptions are research tasks, not content.** An obvious consequence of a cited fact is writing, not assuming (`style-guide.md` §6). Anything held as "I believe X is the case" enters `research/open-questions.md` and does not reach the site until a source confirms or contradicts it. A contradicted assumption is a good outcome; it is usually more interesting than the assumption was.

---

## 3. Scenarios

Two, held firmly. The contrast between them is itself a teaching point, because most people conflate them.

| | **Cascadia M9 megathrust** | **Shallow crustal M7** |
| --- | --- | --- |
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

The rubric is published on `/method/` and linked from every impact cell. It is deliberately system-agnostic so that "high" for sanitation and "high" for transport mean comparable things.

| Band | Duration | Extent |
| --- | --- | --- |
| **Low** | Hours to a few days | Localised |
| **Medium** | Days to weeks | Patchy, worst on poor ground |
| **High** | Weeks to months, sometimes longer | Regional |

A fourth state, **not yet assessed**, is rendered hatched rather than coloured. It is a first-class band, not a gap to be hidden.

**Presentation rule:** a coloured cell alone reads as assertion. Every cell is band → one sentence of mechanism → source link.

---

## 5. Structure

### Part 1 — The shaking

The event itself.

- **Ground conditions.** The variable that decides your outcome is what you are standing on. Bedrock on the downtown peninsula and North Shore behaves nothing like the Fraser delta, Richmond, Delta, or the False Creek and Grandview fill. Liquefaction susceptibility, soil classification, shaking amplification. A text page with an outbound link to the microzonation maps (§9).
- **What the two scenarios feel like.** Duration versus intensity, in plain language.
- **Buildings.** Structural performance by era and type, and — more importantly for injuries — non-structural failure: glazing, cladding, parapets. Downtown Vancouver is a glass city. Unreinforced masonry in Gastown, Chinatown, Strathcona.
- **Casualties.** Present the published range and the drivers of the range (time of day, scenario). A single headline number invites dismissal.
- **Fire following.** The classic post-earthquake killer — 1906 San Francisco, Kobe 1995. Broken gas mains ignite, water mains break so there is no pressure, and debris blocks the streets the trucks need. Cover Vancouver's **Dedicated Fire Protection System**: independent high-pressure mains drawn from seawater, with portable pumping. Almost nobody knows it exists. Its map is the site's flagship graphic, and its point is how little of the city the mains reach.
- **Landslides.** The province's own planning scenario has them cutting the transportation routes, and two of the roads help would arrive on run through mountains. The published landslide mapping for those corridors was built for rain, and says so.
- **Dikes.** An earth embankment holding the river and the sea off land that lies lower, built on the delta sand that liquefies. The engineering published on named sections is Richmond's, and it sits on ground conditions.
- **Dams.** Two owners and two records that do not mix: Metro Vancouver publishes a yearly safety summary whose conclusions do not mention an earthquake, BC Hydro tells its regulator which part of each dam it expects one to break. The water-supply side of the same dams is Part 2.

Landslides, dikes and dams have a page each rather than a shared *Secondary hazards* page: a reader looking for the dike behind their house should not have to read about a power tunnel first.

### Part 2 — Life afterwards

The core of the site. Organised as a timeline: hours → days → weeks → months.

| System | What people underestimate |
| --- | --- |
| Communications | Networks saturate immediately, then fail as tower backup power runs out |
| Electricity | Not one failure but ten thousand. Substations on delta soil are a handful of large repairs; distribution poles and lines are tens of thousands of small ones, each needing a crew, a truck, fuel and road access. That asymmetry is why the core returns in days and the periphery waits weeks. Beneath both sits a third category: large power transformers are custom-built with lead times in many months and are not stockpiled in quantity, so a substation that loses its transformer bank is not a repair but an order — and in the Cascadia case, an order placed alongside every other utility on the coast |
| Water | Distribution mains on liquefiable ground; restoration measured in weeks to months in the worst areas |
| Sanitation | The one nobody thinks about. Christchurch: thousands of homes on chemical toilets for months |
| Transportation | Crossings, the port, YVR on Sea Island delta ground, the highway network |
| Large infrastructure | Port terminals and cranes, YVR on Sea Island, the BC Ferries terminals at Tsawwassen and Horseshoe Bay. Nothing here is written from expectation — see note below |
| Fuel | The master dependency, upstream of almost everything else on this list. Generators, repair crews, trucks, hospitals and pumps all run on diesel arriving by road from a small number of terminals, most on the Burrard Inlet shoreline or the delta. A service station with full tanks and no power dispenses nothing. No Lower Mainland days-of-supply figure holds up — the only one traces to a single phone interview during the 2021 flood — so the page leads with the province's own statement of the mechanism |
| Food | Feeding a metro region with the port down and crossings restricted. The problem is not stock, it is logistics: distribution centres, refrigeration, and a resupply cycle measured in days. Held separately from fuel because the failure is different — food is a demand the region cannot store its way out of, while fuel is the input every other system's repair depends on. Food waits on fuel; nothing waits on food except people |
| Natural gas | The one utility that cannot be restored in bulk. Gas comes back when a technician has entered every affected building and relit every appliance, a per-premises operation across hundreds of thousands of premises, which is why even an interruption with no earthquake damage is measured in weeks. Also carries a counter-intuitive safety message: FortisBC's advice is **not** to shut off your own gas |
| Dams and reservoirs | Cleveland, Seymour Falls, Coquitlam. Dual-purpose content — they are the water supply and they are a downstream hazard |
| Housing | Tens of thousands displaced from standing but tagged buildings, into a region with no rental slack. Arguably the most underestimated consequence of all |
| Health care | Surge demand against damaged facilities running on trucked diesel |
| Safety and conflict | That neighbours are the threat. Most people help each other; theft, fights over supplies and violence at home still happen, and the worst documented case, Chile 2010, came with days without power, water and communications. No band and no scenario split, because nothing about it has a restoration time |
| Where help comes from | Who arrives, from where, and when. Alberta maintains an Earthquake Response Plan for British Columbia and does not publish it; EMBC's own schedule of applicable agreements lists a 2007 BC-Alberta memorandum and no earthquake plan. In the Cascadia case the province states the US will be unable to deliver mutual aid |

**Assumption discipline on port, airport and ferry terminals.** The temptation is to write "these would not survive." Do not. YVR has done substantial ground improvement on Sea Island and is better studied than intuition suggests; pile-supported wharves on treated ground do not behave the way a lay reader expects. Port cranes and wharves are a genuine Kobe-style vulnerability, but that has to come from an assessment. If the documents confirm the fear, the claim becomes powerful. If they do not, that is itself worth telling readers.

**How systems affect each other is written, not drawn.** Water restoration needs power for pumps and road access for crews; roads need debris clearing, which needs fuel. A system page says what it waits on in its copy, where a source says so, and lists related systems as navigation; the home page carries the coupling as one paragraph. There is no dependency graph: most of its links were our own inference, and a diagram of obvious links reads as analysis the site did not do. See the decision below.

### Part 2b — Moving after the shaking

Route `/getting-around/`. If the answer to a broken region is "people leave," this section asks by what route, and what the province is actually planning for. It pairs with the food and housing pages.

**The province plans on people staying, and that is a sourced finding rather than our inference.** PEIRS states that spontaneous mass evacuation out of the impact area will not take place and that messaging will emphasise sheltering within the region; the DCRRA says the same for its Cascadia scenario. The page states what the plan assumes without asserting that nobody leaves: visitors, separated households and people whose home is on the other side of the water all have a reason to move.

**Vancouver is a peninsula.** It is bounded north by Burrard Inlet and south by the North Arm of the Fraser, with a land connection running eastward through Burnaby and New Westminster. That land route is the city's real lifeline.

**Richmond is the genuine island.** Lulu Island and Sea Island hold on the order of a quarter-million people, sitting on the region's worst ground, reached only by bridges and a tunnel whose approaches cross the same liquefiable delta on both banks. Delta is on the same ground and shares the crossings, but it is not cut off by land: it runs east into Surrey. Dike performance is a separate question on top.

**The North Shore is close behind.** Two vehicle crossings, a passenger ferry, mountains behind. Whether North and West Vancouver are cut off comes from the seismic assessments of both crossings, not from assumption.

**Highway 1 through the Fraser Valley is the regional spine.** Its condition determines whether aid comes in and people go out. Route 99 south to the border requires crossing the Fraser regardless.

**Approaches, not spans.** The most important and least understood point in this section. A seismically retrofitted bridge can survive intact while its approach embankment on soft fill settles or spreads laterally. A standing bridge with a step at the abutment carries nobody. Kobe and Christchurch both demonstrated this. Retrofit announcements almost never distinguish the two.

**Departure is not day one.** Nobody drives out immediately — no fuel, blocked roads, everyone at once. People leave over weeks and months, ground out by cold, absent sewer, closed schools and no work. Christchurch lost population that way. This is the honest version and it is more unsettling than an image of gridlock. The real levers are restoring surface corridors and reducing demand, which is why displacement belongs on the housing page too.

**Disaster Response Routes are for responders.** Metro Vancouver has a designated, signposted network, and some crossings on it have been prioritised for seismic upgrade. The public is expected to stay off them, so the site never presents them as evacuation routes (`style-guide.md` §6), and explaining what the signs mean is itself a preparedness item.

**Landslides close the corridors that matter most.** Sea to Sky, and the Highway 1 approach through the canyon near Hope. They are how aid arrives, and slope failure there decouples the region from the rest of the province independently of any bridge damage.

### Part 3 — Preparing

Not siloed. Every system page in Part 2 ends with its own action; `/prepare/` aggregates them into a coherent plan.

**This is the page a reader arrives at wanting to be told what to do, so it is guidance rather than an audit of the guidance.** It follows PreparedBC's Earthquake and Tsunami Preparedness Guide, which says "at least two weeks", and covers what that guide covers beyond supplies: the written plan, the meeting place and the out-of-area contact, the alerts and the seconds they buy, water, food and the grab-and-go bag, securing the room, the gas valves, the people in the household who need more help, the neighbours, staying put if the building is safe, the response routes nobody should drive on, and how to build a kit on no money.

**The divergence between published durations is not this page's subject.** Six official answers exist and "72 hours" is what most people remember. The page gives the City of Vancouver's lower figure once, in the City's own words, as a detail and not as an argument. The comparison is in `research/preparedness.md`.

---

## 6. Maps

Decided per dataset, based on what is licensed (`licensing.md`). Embed official viewers where they exist and permit it; link out where they do not. The ground, not the municipality, is the base layer wherever the site draws one (`style-guide.md` §8).

The critical-infrastructure-over-liquefaction overlay is not built: the liquefaction layer is link-only (§9). The flagship map is the Dedicated Fire Protection System mains, which are open data.

---

## 7. Sources

**How sources appear on a page.** Every source has a key in the register; running text cites the key and renders a numbered marker that opens the entry in place: title, publisher, year, what it is used for, and the link. The same entries are listed again at the foot of the page. A marker may also point at another page on this site, so a claim can defer to the page that carries the reasoning. `/getting-around/` is the worked example.

**What `/sources/` lists.** The documents the site cites, not the register behind it. The register in `research/sources.md` holds everything the project has read, including documents behind findings whose page is not written yet; `/sources/` is derived from what the pages and the band grid actually cite.

**Contributions.** `/contribute/` states what the project can use — a published document, a correction with a source behind it, a pointer to a report, a read from someone who does this work — and what it cannot: unsourced assertion, new modelling, analogues used to generate numbers.

**Primary — reports.** NRCan seismic hazard model, Metro Vancouver and City of Vancouver seismic and infrastructure studies, published regional loss estimates, BC Hydro, Emergency Management BC / PreparedBC, seismic assessments of individual crossings.

**Secondary — analogue events, for the lived experience.**

- **Christchurch 2011** — the closest analogue for aftermath. Liquefaction on comparable ground, sewer out for months in the east, a Western city with functioning institutions, and it still took years.
- **Kobe 1995** — a port city of similar scale losing its port.
- **Tōhoku 2011** — fuel logistics: the fuel existed and the terminals and trucks to move it did not, which is the shape of the Lower Mainland argument. Lead with BC's documents and use this to show what it looked like.

**Not used: the West Berlin airlift.** Retired 10 September 2026. The arithmetic held, but the comparison needs three caveats to be fair (most tonnage was coal, Berlin's water was never cut, nobody plans to supply a metro region by air), and a comparison that needs three caveats teaches a reader nothing they can use.

---

## 8. Build order

A thin complete grid is worth less than a few deep pages. Every page in the MVP and after it is now written; `research/build-order.md` records the order and reasoning.

**MVP:** the two scenarios, built on the openly licensed NRCan catalogue; the method page and band rubric; water, transportation, getting around, ground conditions (as text), power; and the preparing page.

**Then:** sanitation, fuel, food, communications, housing.

**Then:** casualties, the full prepare section.

---

## 9. Decisions

### Closed

- **Language: English only.** Plain English that would translate cleanly, but nothing built for translation now.
- **Name and domain: QuakeImpact, quakeimpact.ca.**
- **Stack and hosting: Next.js static export on Netlify.** See `stack-and-structure.md`.
- **Map dataset licensing is settled per dataset** in `licensing.md`. The NRCan catalogue and City of Vancouver open data are cleared with attribution.
- **The microzonation maps are link-only, and ICLR approval is not pursued.** Decided 10 September 2026. The MVSMMP layers carry ICLR terms whose commercial reservation covers electronic media and statements about the maps, so the judgement would not be ours to make, and approval would still leave the sheets unalterable and derived layers share-alike. The site links to the maps, describes the findings in its own words, and ships ground conditions as a text page. The cost is the infrastructure-over-liquefaction overlay.
- **Electricity bands High, and the page does not stretch the finding.** BC Hydro's filing says up to two-thirds of downtown customers could lose power, with several weeks to restore service and years to restore the system. Nothing equivalent is published for the rest of the region. The band is High; the page leads with the downtown fact and states the limit (`style-guide.md` §6, "Generalise the magnitude, not the place").
- **Weather is a scenario condition, not a system.** It does not fail; it makes every other failure worse, and the province's scenarios build it in that way: the DCRRA sets its M9 in an August heatwave with wildfire smoke, PEIRS sets its M7 on a January afternoon after an atmospheric river. It is rendered on the timeline, not in `SYSTEMS`.
- **Natural gas is a system.** Restoration is rate-limited by sending a person into every building, a mechanism no other system has. With food and fuel standing apart, and safety and conflict added, the grid has fourteen systems.
- **Safety and conflict is a system with no band.** Decided 15 September 2026. It has no restoration time, so there is nothing for a band to measure: not yet assessed would imply a missing assessment, and Low would let analogues set a band. It shows one sentence and a source for both earthquakes, with no phase and no related systems, because no document names any. See `research/impact-bands.md`. The title replaces "social disorder", which primes a fear the evidence does not support. See `research/social-disorder.md`.
- **The outside-help row is "Where help comes from".** Decided 11 September 2026. A row named for an absence and banded Low for the crustal M7 contradicted itself; the research frames help as late, not absent, and what a reader wants is who comes, from where and when.
- **Part 2b is "Moving after the shaking", navigated as "Getting around".** Decided 11 September 2026. A departure framing ("Getting out", `/leaving/`) teaches the wrong behaviour when the province plans on sheltering in place and reserves damaged routes for response. "Staying put" was rejected too: the province does not rule out later evacuation, and leaving is an individual decision.
- **The landing page leads with the four phases.** Decided 11 September 2026. The order is what the first hours, days, weeks and months are like, each phase carrying claims sourced on the system pages; then every system as a card; then the two scenarios; then where the numbers come from, with the band rubric as one sentence and a link. The home page keeps the coupling between systems as one paragraph. Cards carry no phase label, because one word needs a sentence to mean anything.
- **There is no scenario toggle. Both scenarios are always shown.** Decided 12 September 2026. Twelve of fourteen systems carry the same band and mechanism in both columns, because published work assesses one design earthquake per system, so a toggle hid the difference where there was one and changed nothing where there was not. Cards in the system grid carry no band: a band is meant to be compared, in the matrix, with both scenarios in labelled columns.
- **Part contents open at the foot of a page, in the footer and in the phone menu, not from the top bar.** Decided 13 September 2026. Three of the five parts have nothing to open, fourteen systems is a directory rather than a menu, and the site is read in order, so a jump into the middle of a part lands a reader without the bands and scenarios the part before set up. Every page lists its part's pages at its foot with the current one marked; the footer carries the whole index; the phone menu opens the reader's part. All three are built from `NAV`, so adding a system stays one array entry.

- **There is no dependency graph, and bands have no dependency column.** Decided 23 September 2026. `/dependencies/` counted links between systems and split them into the six a document names and the rest, which were our own inference. It measured the literature rather than the earthquake, told a reader nothing they could act on, and presented obvious connections as though the site had studied them. Every sourced finding on it was already on its system page. The rubric's dependency column went for the same reason, and because it contradicted the duration column whenever the two disagreed. A band is duration and extent; a system page lists related systems as navigation. Gaps the page named are in `research/open-questions.md`.

### Open

- Whether to seek review from a local emergency-management or geotechnical contact before launch. Recommended: it converts the site from one person's compilation into something the field will link to.
- **Whether the DCRRA's licence note or the quotations give way.** `DCRRA-2025` is recorded as "nothing may be reproduced", while `/after/health-care/` carries a 57-word block quotation from `DCRRA-APPC` and the "distraught people" phrase, and `/after/communications/` two short phrases. PEIRS, on the same terms, was decided the other way: fair dealing covers attributed quotation. Either the note is too broad and says what PEIRS's does, or the quotations come off, which the preference for paraphrase (`style-guide.md` §6) makes cheap.
- **Whether `CBOC-2016` is held.** `research/sources.md` records the report as not retrievable, with every figure from the press release `CBOC-2016-PR`, while `research/buildings.md` quotes the report through a web archive copy and `/shaking/buildings/` and `/after/casualties/` cite it. If the archive copy is held, the register row says so, as `AIR-2013` does; if not, the citations move to `CBOC-2016-PR`.
- **Whether the site archives its own sources.** Several citations already point at web archives because the publisher reorganised or the host died. Two federal hosts went from resolving to NXDOMAIN during this project's lifetime. Recommended: capture every cited source at the version we read, and record the capture alongside the live URL.
