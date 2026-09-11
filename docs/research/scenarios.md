# Scenarios

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.

**Status.** Both of the site's scenarios have an official simulation behind them, and
each also has a British Columbia government planning scenario of its own. The
Geological Survey of Canada's National Earthquake Scenario Catalogue carries a
deterministic run for each; the province's own Earthquake Immediate Response Strategy
supplies the crustal M7.0, and its Disaster and Climate Risk and Resilience Assessment
supplies the Cascadia M9.0. The two-scenario framing is not the site's invention — it
is the official framing, and the federal hazard agency states in its own words that the
offshore fault is not the greatest hazard to west coast cities. What the site must not
do is generalise from these scenarios: every duration, recurrence and probability below
belongs to a named scenario or a named margin, and several of them disagree with each
other.

---

## Findings

### Why the site carries two scenarios, and why the nearer one is not the lesser

On its page on the 1700 earthquake, the federal hazard agency writes: [NRCAN-1700] **[A]**

> "However, because the fault is offshore, it is **not the greatest earthquake hazard
> faced by major west coast cities**. … Because these inland earthquakes can be much
> closer to our urban areas and occur more frequently, **they represent the greatest
> earthquake hazard**."

The site's structure — two scenarios, with the nearer crustal event given equal weight to
the offshore megathrust — is therefore not an editorial choice needing defence. It is
what the federal agency says, and PEIRS's selection of a crustal M7.0 as the province's
primary planning scenario is the same judgement made operationally. [PEIRS] **[A]**

**A third voice, from the scenario-selection side.** GSC Open File 8853 explains why all
three of its scenarios are shallow: "All three earthquake scenarios occur on shallow
faults in the Earth's crust, rather than at depth in, for instance, the Cascadia
Subduction Zone. **Shallow earthquakes can be particularly devastating as the shaking
source is closer to the built environment, despite having smaller maximum magnitudes than
their subduction zone counterparts.**" [GSC-OF-8853] **[A]**

**And a fourth, from fire.** Scawthorn's ICLR study of fire following earthquake in the
Vancouver region reaches the same conclusion by a different route: "the largest number of
fires in the Lower Mainland is not likely to be caused by a large CSZ event, but rather
by closer shallower crustal events". [SCAWTHORN-2020] **[A]** Its modelled fire loss is
$162 million for the M9.0 Cascadia against $10.7 billion for an M7.3 Georgia Strait
crustal event; the loss table and its caveats belong to `buildings.md`.

Three independent statements now agree from three directions — shaking (NRCan's 1700
page), scenario selection (Open File 8853) and fire (Scawthorn). They are not, however,
three independent *models*: the one-lineage caution below still applies to any number taken
from them.

### The two catalogue runs

The Geological Survey of Canada's **National Earthquake Scenario Catalogue** contains
deterministic OpenQuake runs for both site scenarios, produced with identical
methodology. Both were verified verbatim against the catalogue. [NRCAN-SCEN] **[A]**

| Site scenario | Catalogue scenario | Catalogue description, verbatim |
| --- | --- | --- |
| Cascadia M9 megathrust | **M9.0 Cascadia Full Rupture Subduction Earthquake (BC)** | "Full rupture of the Cascadia interface fault, the fault defining the boundary between the North American and Pacific Ocean plates. This magnitude 9.0 event, often referred to as 'The Big One', affects most communities in southwestern British Columbia." |
| Shallow crustal M7 | **M7.0 Georgia Strait (BC)** | "In 1997, a magnitude 4.6 earthquake occurred 3 to 4 km beneath the Strait of Georgia. This scenario visualizes the effects of that event if it had a magnitude of 7.0, and represents a strong ground shaking event that could strike Metro Vancouver." |

Each run ships four GeoPackage datasets — Aggregated Buildings, Census Subdivision,
Settlement Area, ShakeMap — plus an Excel data dictionary, under the **Open Government
Licence – Canada**, with citation of GSC Open File 8806 required. [NRCAN-SCEN]
[GSC-OF-8806] **[A]** Licence position and attribution string: `../licensing.md`.

The two deep links were verified byte-identical to the ones the catalogue's own map
page generates (`?scenario=SIM9p0_CascadiaInterfaceBestFault` and
`?scenario=ACM7p0_GeorgiaStraitFault`). A plain fetch of either returns "Unable to load
scenario" because the map data loads by JavaScript; that is not a broken link, but
check it in a browser before shipping an embed. [NRCAN-SCEN] **[A]**

The catalogue states its own resolution limit: "The information is provided at the
approximate scale of Census dissemination areas." [NRCAN-SCEN] **[A]**

**The exclusion, verbatim — and the wording is temporary, not permanent:** "It considers
only damage to buildings, and their inhabitants, from earthquake shaking, and therefore
does not include damage to critical infrastructure or vehicles. Losses from secondary
hazards, such as aftershocks, liquefaction, landslides, or fire following are also **not
currently included**." [NRCAN-SCEN] **[A]** The word *currently* is load-bearing. The
site must not state the exclusion as permanent, and the wording is a refresh trigger: if
a catalogue release adds secondary hazards, the method page changes.

Three further BC runs sit close enough to be useful as context, none of which should
displace the two primaries: **M5.0 Mystery Lake**, about 15 km north-northeast of
Burnaby City Hall on a fault not known to be active; **M5.2 and M4.9 Vedder Fault**,
about 18 km east of Abbotsford City Hall, likewise not known to be active; and **M5.0
and M4.9 Georgia Strait**, the more probable versions of the 1997 event. [NRCAN-SCEN]
**[A]** The catalogue's own text on the smaller Georgia Strait entries does the site's
framing work for it: "A magnitude 7.0 Georgia Strait scenario is also provided, and
represents a less likely but more consequential case for comparison." [NRCAN-SCEN]
**[A]**

### The crustal M7.0 — the province's planning scenario

The **Provincial Earthquake Immediate Response Strategy** (EMCR; v1.0 August 2022, v1.1
administrative updates August 2026, 135 pp) is a component of the province's
Comprehensive Emergency Management Plan, and its primary planning scenario is a shallow
crustal M7.0 near Greater Vancouver. [PEIRS] **[A]**

The fault is modelled on the 1997 Georgia Strait event. It lies beneath the Georgia
Basin. It is smaller than the believed regional maximum of **M7.5**. It produces severe
shaking in Vancouver, West Vancouver, Nanaimo, Gibsons and Gabriola Island. **"An event
of this size or larger occurs in this broad region roughly once every 1,500 years."**
Despite the event rupturing beneath water, **"a significant tsunami is not expected"**.
Modelled from GSC Open File 8853; likelihood from the sixth-generation Canadian Seismic
Hazard Model, 2020. [PEIRS] **[A]**

**The fault geometry is not PEIRS's — it is NRCan's.** The dip of **47 degrees**, the
depth of **13 km** and the extent "from near Nanaimo to downtown Vancouver" are absent
from GSC Open File 8853. They come from the **OpenQuake rupture file** for the scenario
`ACM7p0_GeorgiaStraitFault`, published by NRCan's OpenDRR programme in its National
Earthquake Scenario Catalogue: a single planar surface, `dip="47.0"`, `strike="262.0"`,
top edge at 0 km and bottom edge at 13.308 km, hypocentre 49.2428 N, 123.6266 W at 3 km.
[OPENDRR-GSF-22] **[A]**

**The 13 km is not a depth in the sense a reader would assume.** It is the down-dip
**bottom edge** of the rupture plane. The hypocentre is at **3 km**. The
Nanaimo-to-Vancouver extent is the plane's along-strike footprint, not a description of
where damage occurs.

**That this file is the run behind PEIRS is checkable rather than inferred.** The
catalogue gives recurrence 1,501 years against PEIRS's "roughly once every 1,500";
$30,308,218,563 against "$30 billion"; 10,262 red-tagged against 10,000; 1,984 deaths
against 2,000; 990 critical injuries and entrapments against 1,000. The epicentre matches
Open File 8853. **One metric does not match and must never be merged**: the catalogue
reports 345,774 people displaced, where PEIRS reports 70,000 households. Those count
different things.

The catalogue states its own provenance: the scenarios use "the 1997 Georgia Strait
earthquake hypocentre and fault plane geometry from Cassidy, Rogers, & Waldhauser (2000,
BSSA)", on a mapped crustal marine fault, at magnitudes larger than any observed there.
[OPENDRR-GSF-22] **[A]** for what the catalogue says; the Cassidy paper itself is unread,
so the attribution of the 47 degrees to it is **[B]** for that step and the paper is a
lead. [CASSIDY-00] **[?]** Attribute the geometry to NRCan, not to PEIRS and not to
Cassidy.

It is a compound scenario, not a bare M7. It is set on a January afternoon immediately
after an atmospheric river — 180–300 mm of rain over three days plus roughly 30 mm of
snowmelt runoff — so its landslide, liquefaction and dike-failure impacts are
conditioned on saturated ground. Say so wherever those impacts are quoted. [PEIRS]
**[A]**

Impacts, "figures developed by Natural Resources Canada based on core modelling", from
building damage alone: [PEIRS] **[A]**

| Indicator | M7.0 Greater Vancouver | M7.3 Greater Victoria |
| --- | --- | --- |
| Red-tagged (uninhabitable) buildings | 10,000 | 7,000 |
| Yellow-tagged (conditionally inhabitable) | 6,100 | 4,200 |
| People facing damage to their homes | ~1.7 million | ~1 million |
| Fatalities | 2,000 | 1,000 |
| Critically injured | 1,000 | 500 |
| Non-critical hospital care | 6,500 | 3,200 |
| Paramedic or first-aid treatment | 21,000 | 10,000 |
| Households displaced | 70,000 | 43,000 |
| Direct property losses | $30 billion | $20 billion |
| Buildings severely damaged | 3% in Vancouver and Richmond, 6% in Nanaimo | 5% Greater Victoria, 8% Victoria, 4% Saanich |

Three caveats PEIRS states itself, all of which must travel with the numbers. Casualty
estimates rest on structural and non-structural building damage and "do not include
casualties from other secondary hazards or complicating factors", including underlying
medical conditions, vehicle accidents, falls, explosions, fires, landslides, washouts,
tsunamis or psychological impacts. "This strategy will not consider the effect of an
earthquake early warning system." And the data is "for planning purposes only and may
not match the outcome of real events." [PEIRS] **[A]**

The summary table on PEIRS p. 19 is column-scrambled in the PDF's text layer; the
figures above are read from the unambiguous narrative bullets on pp. 20–23.

**The source model is identified and retrieved.** GSC Open File 8853 is Hobbs, T.E.,
2022, *A selection of earthquake scenarios for government planning purposes in 2021*,
Geological Survey of Canada, 9 pp, DOI `10.4095/329397`, sole author, issued 6 January
2022, Open Government Licence – Canada in the repository record. It describes three
scenarios: an **Mw 7.0 in the Strait of Georgia near Vancouver**, an **Mw 7.3 on the
Leech River Fault near Victoria**, and an **Mw 7.5 near Val-des-Bois, Quebec**. Every
PEIRS impact figure in the table above appears here first, and the site can cite it
directly rather than through PEIRS. [GSC-OF-8853] **[A]**

**Who asked for it, and why that matters.** The scenarios "were requested from Natural
Resources Canada … by **Emergency Management British Columbia and the Government
Operations Centre in Ottawa**". [GSC-OF-8853] **[A]** The province did not merely adopt a
federal product it happened to find; it commissioned the product it then built PEIRS on.
That **sharpens** the one-lineage finding below rather than weakening it — the two
documents are not two estimates but a commission and its use.

**NRCan calls its own numbers a floor**, and this is the wording to use wherever the
PEIRS figures are quoted: [GSC-OF-8853] **[A]**

> "It should be noted that estimates herein include only the impacts of earthquake
> shaking as it affects buildings and their inhabitants. Secondary hazards, such as
> aftershocks, tsunami, landslides, liquefaction, and fire following are not considered.
> Non-building impacts such as damage to vehicles, infrastructure, or business disruption
> costs are not considered either. **Therefore, the estimates herein are likely to
> represent a minimum estimate on impacts.**"

That is stronger and more useful than the catalogue's neutral "not currently included" in
*The two catalogue runs*, and it is the sentence to place beside any excluded-hazard
loss — fire following earthquake among them; see `buildings.md`.

**Scenario detail PEIRS does not carry**, all [GSC-OF-8853] **[A]**:

- **Epicentre 49.24°N, 123.63°W**, geometry based on the local magnitude 4.6 event of
  1997 in the Strait of Georgia, "along what is believed to be an active fault".
- **Peak shaking 10–60% g**, **MMI V–VIII** in the Lower Mainland and Nanaimo,
  "amplified in areas with thick soil deposits **like the Georgia Basin**". Strongest in
  Downtown Vancouver, West Vancouver, Nanaimo, Gibsons, and on Gabriola and Bowen
  Islands. The amplification mechanism is in `ground-conditions.md`.
- **The scenario is set during daytime hours, 9am–5pm**, "when most people are at school
  or work". Every casualty figure above belongs to that time of day and must be quoted
  with it.
- **Leech River Fault recurrence**, for the M7.3 Victoria scenario: "According to recent
  paleoseismic studies of this fault, it has hosted an earthquake **on average every 3500
  years since the last ice age**." That is a per-fault recurrence, and it sits beside the
  M7.0 Georgia Strait's "about every 1500 years" for the broad region — two different
  quantities, and neither may be restated as the other.

#### What the first minutes are like, in the province's own words

PEIRS carries a narrative passage describing the first minutes of its crustal M7.0. It is
quoted here in full because every attempt to paraphrase it produces something worse: it is
concrete, it is sequenced the way a person would experience it, and it is the province's
own voice rather than ours. [PEIRS] **[A]**

> For many, the earthquake is heard before it is felt. The low, rumbling sound is similar
> to that of a freight train, immediately followed by 10-20 seconds of violent shaking
> that knocks people located closest to the epicentre from their feet — except for those
> who remember to "drop, cover, and hold on". Taller buildings sway with the high
> intensity shaking. Unsecured objects fall or fly through the air. Roads crack and the
> ground ruptures in some areas. Buildings on softer, saturated soils lose support through
> liquefaction — a process in which the ground temporarily behaves like a liquid while
> being shaken.
>
> Landslides and rock falls are generated in many areas, cutting off transportation
> routes. Flooding is increased by the recent wet weather event with some dikes failing.
> Several fires start throughout the impact area from damaged electrical power and
> ruptured gas lines. A small number of buildings collapse, many shift and crack, and
> others are destroyed by fire.
>
> Windows break and glass scatters across the pavement. Debris is strewn throughout
> roadways, cutting off access to areas and blocking vehicle passage. Entire walls from
> unreinforced masonry buildings fall into the streets. Many of those who try to run
> outside suffer extreme injury or death from falling and flying objects and thousands are
> trapped or injured.

**Why this passage earns its place, when the site's default is against vivid writing.**
`../style-guide.md` records the evidence on fear appeals, and this is the case the rule
was written to permit rather than forbid. Every image in it is a **mechanism the rest of
this folder documents independently** — liquefaction on saturated soils, dike failure
under the atmospheric-river condition, fire from ruptured gas, unreinforced masonry
failing into the street. None of it is atmosphere. And it contains its own lever, twice:
"except for those who remember to drop, cover, and hold on", and the specific,
counter-intuitive instruction underneath "many of those who try to run outside suffer
extreme injury or death". A reader who takes one thing from this site could do worse than
those two sentences.

**It is the crustal M7.0 and nothing else.** "The recent wet weather event" is PEIRS's
January atmospheric-river condition; the passage is not transferable to the Cascadia M9,
which is set in an August heatwave, lasts three minutes rather than twenty seconds, and
would be described differently in every clause. **Label it by scenario wherever it
appears, or do not use it.**

**Guards on three specifics.** It says "a **small number** of buildings collapse" — the
counter-intuitive part of the finding, consistent with `buildings.md`, and it must not be
quietly dropped to make the passage more alarming. "Thousands are trapped or injured"
attaches to PEIRS's own casualty figures, which belong to a **weekday-afternoon** timing
and travel with it. And the "10-20 seconds" is PEIRS timing *violent shaking*, which is
not the same measurement as the Exercise Coastal Response 2023 duration — see
*Shaking duration, and the physical contrast underneath it*.

**Licensing.** The Province's all-rights-reserved default governs *reproduction* of
datasets and figures, not quotation — which fair dealing covers. **Publish it, with
attribution, a link and the page number.** A permission request to EMCR is worth sending
in parallel, and is not a gate. See `../licensing.md`.

### The Cascadia M9.0 — the province's planning scenario

The **Disaster and Climate Risk and Resilience Assessment: Provincial Report** (EMCR and
the Ministry of Energy and Climate Solutions, **October 2025**, released 4 November 2025;
news release 30 October 2025) models an M9.0 rupture extending about **1,000 km** from
mid-Vancouver Island to northern California, with the mainshock at 10 am on a day in
August during a 30–40 °C heatwave with wildfire smoke. [DCRRA-2025] **[A]**

- **Mainshock shaking duration: three minutes.** [DCRRA-2025] **[A]**
- Heaviest damage on Vancouver Island and in a roughly **20 km band along the mainland
  coast** from the US border to the Sunshine Coast; most severe impact area roughly
  **45,000 km²**. The report's own footnote defines the 20 km band as the 20 %g contour
  in NRCan RiskProfiler. [DCRRA-2025] **[A]**
- Cascading events named: tsunami, urban fires, liquefaction, landslides, floods and
  seiches, aftershocks, and about **1 m of subsidence** on the west coast of Vancouver
  Island. [DCRRA-2025] **[A]**
- A modelled aftershock: a 60 km deep **M7.1 under Sidney** about a month later, at
  11 pm, during an atmospheric river, **20-second** duration. [DCRRA-2025] **[A]**
- Headline impacts, verbatim: "The shaking is expected to cause complete damage of
  approximately **18,000 buildings**, more than **10,000 injuries** (noncritical and
  critical hospital injuries) and **3,400 fatalities**." The footnote on the same page is
  load-bearing: "These estimates include only direct mainshock damage without account of
  secondary hazards like landslides, liquefaction, tsunami, fires and more. These
  estimates are informed by NRCan RiskProfiler." [DCRRA-2025] **[A]**

Loss estimates and building-stock detail live in `buildings.md`; ground effects in
`ground-conditions.md`; response capacity in `preparedness.md`.

### The City of Vancouver's own crustal magnitudes

Worth recording so nobody merges them. The City's Hazard and Risk Explorer publishes
its risk map from a modelled **M7.2 Georgia Strait**; its 2019 Resilient Neighbourhoods
exercise module uses an **M7.3 Georgia Strait**. Same publisher, same fault, ten years
apart, two magnitudes. [COV-EXPLORER-25] [COV-RNTOOLKIT-19] **[A]**

Set beside the province's **M7.0** and the federal catalogue's **M7.0**, the region now
has at least three crustal magnitudes in circulation from three levels of government.
They are not competing estimates of one event — each is a scenario chosen for a
purpose, and the differences are choices rather than disagreements. Say which
scenario a figure belongs to, every time. A casualty count from an M7.2 does not sit
in a sentence about the province's M7.0, and the site does not average them.

### One modelling lineage, not several

This is the most consequential finding on this page for how the site presents
corroboration.

The DCRRA's endnotes attribute the 18,000-building, 10,000-injury and 3,400-fatality
figures to **NRCan RiskProfiler, scenario `SIM9p0_CascadiaInterfaceBestFault`** — the
same catalogue run the site already cites. [DCRRA-2025] [NRCAN-SCEN] **[A]** The PEIRS
M7.0 figures are likewise "developed by Natural Resources Canada based on core
modelling". [PEIRS] **[A]**

The commissioning fact under *The crustal M7.0* closes the loop: EMBC and the Government
Operations Centre **asked NRCan for** the scenarios that became GSC Open File 8853, and
PEIRS then quotes them. [GSC-OF-8853] **[A]**

So the province is not independently confirming the federal catalogue; it is adopting
it. Two government documents agreeing here is one model quoted twice. The site must not
present them as separate estimates. The only genuinely independent loss numbers in
Canadian earthquake work come from the insurance side, and they are handled in
`buildings.md`.

### Shaking duration, and the physical contrast underneath it

**PEIRS, M7.0 Greater Vancouver:** "The low, rumbling sound is similar to that of a
freight train, immediately followed by **10–20 seconds of violent shaking** that knocks
people located closest to the epicentre from their feet." [PEIRS] **[A]**

**DCRRA, M9.0 Cascadia:** mainshock shaking duration **three minutes**. [DCRRA-2025]
**[A]** Corroborated by BC's own 2016 exercise scenario, "strong shaking lasting several
minutes". [ECR-2016] **[A]**

**The complication, which must be handled rather than hidden.** The **Exercise Coastal
Response 2023** scenario — an M6.8 12 km northwest of Tsawwassen, designed by Natural
Resources Canada — states "**The duration of the earthquake lasted over one minute** but
it did not generate a tsunami." [ECR-2023] **[A]** That is a *smaller* crustal event
with a *longer* stated duration than the PEIRS M7.0. The two are not strictly
contradictory — PEIRS is timing "violent shaking", CR23 is timing "the earthquake" — but
the site must never write that a crustal earthquake lasts twenty seconds as a general
claim. **Durations are scenario-attributed, always, by name.**

**The physical contrast is the better story, and it does not depend on seconds at all.**

- PEIRS: "**The near-surface earthquake results in high frequency shaking that is most
  hazardous to short buildings.** Unreinforced masonry and unreinforced concrete
  buildings may suffer the greatest damage, including complete collapse and
  inhabitability." [PEIRS] **[A]**
- The DCRRA, the converse: "urban areas with tall buildings on deep, soft sediments (for
  example, parts of Richmond) that resonate with the **long-period** seismic waves
  generated by the subduction interface earthquake also suffer significant damage."
  [DCRRA-2025] **[A]**

Two earthquakes, two different building populations at risk. That is a mechanism a
reader can hold, and it is sourced on both sides from BC government documents. The
quantified basin physics behind the long-period half is in `ground-conditions.md`.

**Why duration matters, from an engineering source rather than an intuition.** The
seismic design study for the Golden Ears Bridge states the coupling directly: at the
2,475-year event, strong shaking lasted about **30 seconds** and "near maximum
kinematic and inertial forces occurred simultaneously"; at the 475-year event, shaking
lasted about **10 seconds** and the two were "essentially uncoupled". The reason given
is that in the larger event soil liquefaction occurred early in the shaking.
[NAB-ICCHGE-08] **[A]**

That is the clearest published statement in this evidence base of what a longer
earthquake does. It is not that shaking lasts longer and is therefore worse in
proportion. It is that past a certain duration the ground fails *while* the structure
is still being shaken, and the two loads arrive together instead of one after the
other. A structure designed for them separately meets them combined.

Two guards. The figures are the design events for one bridge, not general properties of
either scenario — they are quoted here for the mechanism, not the seconds. And the
finding belongs to the transportation evidence; see `systems/transportation.md`.

### Cascadia recurrence — the sources disagree

There is no single number. Sources that all qualify as [A] give different answers, and
the honest presentation is a table of who says what.

| Source | Average or central interval | Stated range |
| --- | --- | --- |
| NRCan, *Questions and Answers on Megathrust Earthquakes*, and the Earthquakes Canada FAQ [NRCAN-QA] [NRCAN-FAQ] **[A]** | "13 megathrust events … in the last 6000 years, an average one every **500 to 600 years**" | "as close together as 200 years and … as far apart as 800 years" |
| NRCan, *Seismic zones in Western Canada* [NRCAN-WCAN] **[A]** | — | "every **300–800 years**" |
| NRCan, 1700 event page [NRCAN-1700] **[A]** | — | "repeated many times at irregular intervals of hundreds of years" |
| Mazzotti & Adams 2004, Geological Survey of Canada [MAZZOTTI-04] **[A]** | "about **600 ± 30 years**"; coastal-subsidence estimates 440–590 years | "perhaps as short as 215 years and as long as 1500 years" |
| Goldfinger et al. 2012, USGS PP 1661-F [GOLDFINGER-12] **[A]** | northern margin **~500–530 years**; southern margin ~240 years | — |
| BC DCRRA 2025 [DCRRA-2025] **[A]** | "**400–500 years on average**" | "anywhere from 200 years to 1,000 years" |
| BC PEIRS [PEIRS] **[A]** | "on average every **400–500 years**" | "between 100 and 1,100 years apart"; next event "most likely … around 2100–2200 but can occur anywhere within the period from 1800–2800" |

The pattern is that the two provincial documents say 400–500 years and the federal
hazard agency says 500–600. **No NRCan or GSC source was found stating "400–500 years",
"246–542 years", or "about every 500 years" as a bare figure.** The 434-year mean
recurrence in the hazard model below is not such a statement: it counts a different set
of earthquakes, as the section says. If the site wants one
NRCan sentence, use the 500–600 wording with NRCan's own 200-to-800-year caveat. If it
wants the provincial framing, attribute it to the DCRRA or PEIRS and say that NRCan's
own pages give a longer average.

#### What the hazard model counts, and why it is not a fourth row

Retrieved 10 September 2026: GSC Open File 8630, the sixth-generation seismic hazard
model behind the 2020 National Building Code, with its complete OpenQuake input files.
Cascadia is a **named exception** to the model's usual treatment — "Cascadia interface
source: incremental rates were derived directly from the paleoseismic record".
[GSC-OF-8630] **[A]**

The numbers behind that sentence: three fault geometries (inboard, best, outboard), each
carrying an identical three-branch magnitude-frequency logic tree with rates from M8.4
upward. **Every branch sums to the same total, 2.3049 x 10⁻³ per year — a mean
recurrence of 434 years for a Cascadia interface earthquake of M8.4 or larger.** Every
individual rate is an integer multiple of 1.04767 x 10⁻⁴/yr, that is one per 9,545
years, and each branch distributes exactly 22 of them: 22 events in a ~9,545-year
paleoseismic record. The branches differ only in where those 22 sit on the magnitude
scale. Occurrence is Poissonian; no time-dependent model is declared. [GSC-OF-8630]
**[A]** The successor model actually used for NBCC 2020, GSC Open File 8924, carries
**byte-identical** Cascadia rates. [GSC-OF-8924] **[A]**

**This does not go in the table above.** 434 years counts every modelled interface
rupture of M8.4 or larger along the whole margin; NRCan's 500-600 and the province's
400-500 are about full-margin great earthquakes. Setting them side by side would compare
quantities that count different events, which is the failure `CONVENTIONS.md` names.
State what each counts, or do not put them near each other. Its value here is different
and better: it shows that the hazard model underneath every number on this page is
**counting turbidites, not modelling a cycle** — which is why the sources disagree at
all.

### Cascadia probability — the 37% figure is the southern margin

**This is the single most important correction on this page.** The widely quoted "about
a 37% chance in the next 50 years" is Goldfinger et al.'s **time-dependent probability
for a southern Cascadia margin rupture** — southern Oregon and northern California,
where the recurrence interval is around 240 years. Goldfinger's figure for the northern
or full margin, which is the one that applies to British Columbia, is **7–12% in 50
years**. [GOLDFINGER-12] **[A]**

Quoting 37% for Vancouver would be a straightforward factual error, and it is a common
one. Any figure taken from Goldfinger must name the margin it belongs to in the same
sentence.

The BC-relevant conditional probabilities, and they disagree with each other:

| Statement | Source | Marker |
| --- | --- | --- |
| 50-year conditional probability **0–12%, median 5%** under a unimodal ~500–600 year recurrence; under a bimodal hypothesis either 6–45% or under 1%, depending on whether the current interval is short or long | Mazzotti & Adams 2004, Geological Survey of Canada [MAZZOTTI-04] | **[A]** |
| Time-independent **7–12% in 50 years** for full or nearly full margin ruptures, about 21% for a southern-margin rupture; time-dependent about 7–12% northern margin, **37–42% southern margin** | Goldfinger et al. 2012 [GOLDFINGER-12] | **[A]** |
| **3% in 10 years, 9% in 30 years**; banded Remote (under 1%) annually, Moderate (2 to under 10%) at 10 and 30 years, **High (10–20%) at 50 years**, confidence High. Fifty years from now those become 5% and 14% | BC DCRRA 2025 [DCRRA-2025] | **[A]** |
| "an estimated probability of occurrence of 14% in the next 50 years" — but the DCRRA's own endnote attributes this to Frankel & Petersen, UCERF2 Appendix L, USGS 2008 | DCRRA Appendix C [DCRRA-APPC] | **[B]** as a Canadian number |

Canada's own published number is the lowest of the set. The Geological Survey's 2004
paper gives a 50-year median of about 5%; the province's 2025 band is 10–20%. Both are
government or government-adjacent, they are 21 years apart, and they disagree by a
factor of two to four. Report both. Do not average them. The commonly cited "10–14% for
a full-margin M9" was not traced to any source and must not be used.

### The 1700 earthquake

From *The M9 Cascadia Megathrust Earthquake of January 26, 1700*, NRCan / Earthquakes
Canada, date modified 2019-03-01. [NRCAN-1700] **[A]**

> "At 9PM on January 26, 1700 one of the world's largest earthquakes occurred along the
> west coast of North America. The undersea Cascadia thrust fault ruptured along a 1000
> km length, from mid Vancouver Island to northern California in a great earthquake,
> producing tremendous shaking and a huge tsunami that swept across the Pacific."

> "The earthquake shaking collapsed houses of the Cowichan people on Vancouver Island and
> caused numerous landslides. The shaking was so violent that people could not stand and
> so prolonged that it made them sick. On the west coast of Vancouver Island, the tsunami
> completely destroyed the winter village of the Pachena Bay people with no survivors.
> These events are recorded in the oral traditions of the First Nations people on
> Vancouver Island."

> "It is the accurate descriptions of the tsunami and the accurate time keeping by the
> Japanese that allows us to confidently know the size and exact time of this great
> earthquake."

**Three precision cautions.** The page says "9PM" and gives no timezone, so the site must
not add one. The magnitude **M9 appears in the page title only, not in the body** —
attribute it to the title, or to the peer-reviewed chain. And the page credits Japanese
tsunami records and coastal subsidence but **does not mention red cedar tree rings**; for
the tree-ring evidence and the M9 estimate, cite the chain NRCan's own scientists use
[MAZZOTTI-04] **[A]**, or the accessible narrative primary, Atwater et al., *The Orphan
Tsunami of 1700* [ATWATER-15] **[A]**.

---

## What is not established

- **GEOSCAN record 327171 is not GSC Open File 8853.** The Open File itself is described
  under *The crustal M7.0*. [GSC-OF-8853] **[A]** Record 327171, *Scenario earthquake
  models developed for British Columbia — part of a pilot project in the application of
  Global Earthquake Model's OpenQuake…*, is a **2017 conference abstract** on OpenQuake
  adoption, with no report number and no DOI. It is excluded. **`geoscan.nrcan.gc.ca` no
  longer resolves at all** (DNS NXDOMAIN), GEOSCAN has been retired, and the old
  `starweb/geoscan/` links still printed on live NRCan pages are broken. Do not cite any
  `geoscan.nrcan.gc.ca` URL.
- **The Cassidy, Rogers & Waldhauser (2000) paper itself is unread.** The fault geometry
  comes from NRCan's own OpenQuake rupture file, a peer-reviewed relocation of the 1997
  event; see *The crustal M7.0*. [CASSIDY-00] **[?]**
- **The provenance of "246–542 years", of "400–500 years" as an *NRCan* figure, and of
  "10–14% for a full-margin M9".** Searched across the four NRCan Earthquakes Canada
  pages, Mazzotti & Adams 2004 and Goldfinger et al. 2012. None traced to a primary
  source. Do not use. **[?]**
- **The DCRRA's licence terms.** No rights statement was found in the front matter of the
  chapters read. **The licence question is settled and is no longer blocking:** BC
  government material is all rights reserved by default rather than OGL–BC, and the
  DCRRA's own host site declares its licence as "Access Only". Quotation with
  attribution is ordinary fair dealing; *reproducing* a figure or map as laid out is
  not. See `../licensing.md`. **[A]**
- **Conference Board of Canada 2016**, the origin of the DCRRA's total-loss and
  insurance-failure family of figures. Product page reached; document not retrieved.
  [CBOC-2016] **[?]** — see `buildings.md`.
- **The FEMA Cascadia Rising Exercise Scenario Document** and the **FEMA Region 10 CSZ
  Earthquake and Tsunami Plan (January 2022)**, both named in the Cascadia Rising 2022
  after-action report. Neither was reached, and on the evidence of September 2026 both
  appear **not to be public** rather than merely unfound: FEMA's own site search returns
  no results for "Cascadia Rising", the exercise landing path is a 404, and a regional
  operational plan and an exercise-control scenario document are document classes
  normally held as CUI/FOUO and distributed to participants. That is a deliberate
  non-publication, which is a different fact from an absence. **[?]**
  - **"7,000 highway bridges / 16,000 miles of roadway" — keep it out.** The pair is
    absent from every primary document in the chain the after-action reports name as
    their own foundation: the Washington and Oregon 2016 after-action reports, the
    Washington Cascadia Rising 2022 report, Exercise Coastal Response 2016 and 2023, and
    the HITRAC 2011 analytical baseline study. Zero hits for "7,000" in a bridge context,
    for "16,000 miles", for "lane miles" or for "roadway miles". Treat it as a
    journalistic construction. The real, sourced figure to use in its place is the
    Washington CR22 AAR's "**approximately 5,000 bridges within and west of the Cascade
    Mountain Range**", each of which must be inspected before it carries traffic.
    [CR22-WA] **[A]**, Washington only.
  - **"14,100 fatalities" is not a forecast.** It is in the Washington Cascadia Rising
    2016 after-action report, Appendix D, as the scenario the exercise assumed — "8
    million citizens directly impacted in Washington and Oregon; 14,100 fatalities and
    24,000 injured" — resting on the HITRAC 2011 study "**although modified to achieve
    targeted training objectives for all exercise participants**". [CR16-WA] **[A]** as a
    statement of what the 2016 exercise assumed, and unusable as an estimate of anything:
    the number was adjusted for training effect, and the document says so in the same
    sentence. HITRAC's own study gives "3,000 or more fatalities". Safest course is not
    to use it.
- **A key collision to resolve when `sources.md` is built.** The *Hazard Threat Analysis
  Main Report* is a different document from the *Provincial Report* cited throughout
  this file. This file uses `DCRRA-2025` for the Provincial Report, `DCRRA-EXP` for the
  chapter 2 exposure material and `DCRRA-APPC` for the Appendix C case studies. Both
  documents are real; the register needs separate rows, not one.

---

## For the page

**The mechanism sentence for the scenarios page.** Two different earthquakes are
possible here, and they are dangerous to different buildings. The offshore megathrust
shakes for minutes in long, slow waves that tall buildings on soft ground move with. The
nearer crustal earthquake shakes hard and fast for a shorter time, and that is the motion
that breaks short, stiff, older masonry buildings. Neither is the other's smaller
version.

**Guards that travel with the numbers.**

- Every duration figure names its scenario and its document. Never "a crustal earthquake
  lasts 10 to 20 seconds" — always "in the province's own M7.0 Greater Vancouver
  planning scenario". The CR23 M6.8 at "over one minute" is the reason the general claim
  is not available to us.
- Every casualty and building figure carries the modelling boundary it was computed
  inside: buildings and their inhabitants, shaking only, no secondary hazards.
- The PEIRS scenario sits immediately after an atmospheric river. Where its landslide,
  liquefaction or dike impacts are used, say the ground was already saturated.
- Where the catalogue's exclusions appear, use "not currently included". Stating them as
  permanent misreads the source and hides a refresh trigger.
- Where the **PEIRS** figures appear, use Open File 8853's stronger wording instead: the
  excluded-hazard list means "the estimates herein are likely to represent a minimum
  estimate on impacts". NRCan calling its own numbers a floor is a better guard than any
  sentence we could write, and it is the honest answer to a reader who asks whether the
  real number could be worse.
- Any Goldfinger probability names its margin in the same sentence.

**Weather lives here.** It is not a system in the impact grid — it does not fail, so it
cannot have a band. Both official scenarios build weather in as a *condition*, and the
two conditions pull in opposite directions: an August heatwave with wildfire smoke makes
water and shade the urgent needs and puts the vulnerable at risk indoors; a January
afternoon after an atmospheric river makes heat, dry shelter and slope stability the
urgent needs. That contrast is the reason weather belongs on the timeline rather than in
the grid — the same day of the same disaster is a different emergency in each.
[DCRRA-2025] [PEIRS] **[A]** See `impact-bands.md` for the decision and
`../site-overview.md` §9.

**The 37% guard, which is worth an explicit note in copy.** If the site states a Cascadia
probability at all, it states two: the Geological Survey of Canada's 50-year median of
about 5%, and the province's current 10–20% band, each with the year it was published.
The number the reader will have seen elsewhere is 37%, and the page should say plainly
that it belongs to the southern end of the fault, not to here. This is the kind of
correction that earns an expert reader's trust in a single sentence — and it costs
nothing with a general reader, who is better served by knowing the interval than by
knowing a percentage.

**On corroboration.** The method page must say that the province's casualty figures and
the federal catalogue's are the same model. Presenting a range as agreement would be the
most damaging kind of error available to this site: it would look like rigour and be the
opposite. The honest line is that Canada has one public earthquake loss model, that both
governments use it, and that the insurance industry's estimates are the only independent
comparison available.

**On the 1700 event.** It carries the page's certainty without any countdown framing. The
oral-history record and the Japanese tsunami record agreeing on a date is a concrete,
non-alarming way to show the hazard is known rather than speculative. Quote NRCan and
stop there — no timezone, no tree rings, and the magnitude attributed where NRCan puts
it.

**The NRCan "not the greatest earthquake hazard" quote belongs high on this page.** It
does structural work no amount of our own explanation can: the federal agency itself
saying that the nearer earthquake matters more to cities is the answer to a reader who
arrived thinking only about the offshore one.

**Lever.** The scenarios page ends by pointing at what differs between the two for the
reader personally — the age and height of the building they are in, and the ground it
stands on — which hands off to `buildings.md` and `ground-conditions.md`.
