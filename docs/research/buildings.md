# Buildings

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.
> **Changed in that pass.** The Conference Board's $127.5B is **AIR 2013 scaled, not an independent estimate**, and an insured-versus-economic assertion drops to [?]. Review those two first.

**Status.** Well sourced, and rewritten in September 2026 against two City of Vancouver
council reports that did not exist when the first draft was written. The City now publishes
building counts, damage counts, per-building-type displacement rates, neighbourhood
concentration and the tenure and income composition of the highest-risk areas, across three
named scenarios. Two claims the draft carried have been withdrawn: the "8,000 vulnerable
buildings / 1,100 studied" framing, and the downtown-as-glass-city hazard. Both have better
replacements. The loss and insurance section has been rebuilt twice: first because its
central comparison was arithmetically wrong, and again in September 2026 because the AIR
Worldwide study behind the 2013 figures was recovered in full and read. Its real breakdown
reconciles exactly, the Conference Board figures are now correctly attributed, the
insurance-capacity figure turns out to be a band rather than a point, and the previously
unidentified "2019 study" is named. Fire following has been rebuilt again in September 2026: the
Scawthorn ICLR study has been retrieved in full, so the section is now [A] from the primary
document rather than [B] via City reporting, it carries five modelled scenarios rather than
three, and it carries two contradictions the report makes against itself. GSC Open File 8853 has
also been retrieved, which puts the M7.0 scenario's debris, construction-type and insurance
arithmetic on the record in NRCan's own voice. A September 2026 pass over the City's
resident-facing material adds one thing this file could not previously say: the City itself
tells residents to expect extended inaccessibility of whole neighbourhoods, and names building
assessment and trade capacity as the constraint. That material is the plain-language register of
[COV-RISK-2024], not a second source, and it is marked as such wherever it appears below.

---

## Findings

### The stock

- Vancouver has about **90,000 buildings**. Nearly **70% were built before 1990**, when early
  modern seismic standards arrived, and about **half before 1973**, before any seismic
  standards. [COV-RISK-2024] **[A]**
- **Five privately-owned building types drive nearly 80% of citywide seismic risk** while
  making up roughly 10% of the buildings: concrete mid- and high-rise residential, wood-frame
  apartments, unreinforced masonry (URM) residential, low-rise concrete commercial, and
  downtown office towers. [COV-RISK-2024] **[A]**
- **Six neighbourhoods carry 65% of citywide risk:** West End, Downtown Eastside (including
  Chinatown and Strathcona), Downtown, Kitsilano, Fairview, Mount Pleasant.
  [COV-RISK-2024] **[A]**

**Correction to the draft.** The old framing — "approximately 8,000 older seismically
vulnerable buildings, of which about 1,100 has been studied" — should not be used. The
~1,150-building inventory is the **1995 Delcan study**, and the City now says so itself; the
~8,000 figure comes from a 2000 council report. [COV-URM-2000] **[B]** Both are superseded by
the 2024 assessment, which counts the whole stock rather than a subset. Replacing a 25-year-old
subset with a current census of 90,000 buildings is a straight upgrade, not a softening.

### Retrofit policy

- **Correction.** The Vancouver Building By-law requires upgrade to **either 50% or 75% of
  current code design levels**, depending on the case — *not* "at least 75%" as the draft
  stated. The trigger moved from permit cost to scope of work in 2007.
  [COV-RISK-2024] **[A]**
- **Part 11 of the by-law is Vancouver's real falling-hazard rule and has no BC Building Code
  or National Building Code equivalent.** Upgrade level S3 requires that "falling hazards that
  may impact adjacent properties and over public ways must be addressed", with acceptable
  solutions naming cantilevered walls, parapets, exterior ornaments, towers, chimneys and
  appendages. Levels N1–N4 escalate "safety from overhead falling hazards" across cladding,
  veneer, cornices, parapets, canopies, awnings and ornaments. [VBBL-2025] **[A]**
- **But Part 11 is trigger-based.** It bites only on renovation, addition, reconstruction or
  change of use. **There is no standalone mandatory parapet-bracing or façade-retrofit
  ordinance in Vancouver.** [VBBL-2025] **[A]** The only parapet money is voluntary and
  heritage-scoped: the Heritage Façade Rehabilitation Program (up to $50,000, requires the
  building be "constructed primarily of unreinforced masonry") and the Heritage Incentive
  Program (up to $4M per building). [COV-HERITAGE] **[A]**
- **New construction** is governed by Division B Art. **4.1.8.18**, which requires seismic
  design of non-structural components and their connections; cantilever parapets,
  ornamentations, chimneys and masonry veneer connections are all in Table 4.1.8.18. Façade
  connections above the first level above grade must develop 2.0× nominal yield resistance
  (Cl. 4.1.8.18.(7)(g)); gravity friction may not be relied on. Glazing fallout displacement
  must be at least max(1.25·I_E·D_p, 13 mm) under Sentences (14)–(15), and **Vancouver cannot
  use the low-seismicity exemption** — normal buildings are Seismic Category SC4, so the
  fallout rule binds. [VBBL-2025] **[A]**
- **There is no public inventory of at-risk buildings.** The Buildings Seismic Risk Reduction
  Action Plan (report 5 May 2026, council agenda 2 June 2026) makes seismic screening the
  second of seven actions in a five-year plan, modelled on Seattle, Everett, Tacoma, San
  Francisco and New Zealand, costed at **$3,000–$10,000 per building**, with **no publication
  date** and the publication method explicitly unsettled. [COV-PLAN-2026] **[A]**
  [SEA-URM] **[C]** for the Seattle model. Landlords and lenders objected to building-level
  publication in the engagement appendices. [COV-PLAN-2026] **[A]**

### The three-scenario ladder — City of Vancouver only

Modelled in OpenQuake for the City of Vancouver, November 2024. **These are city figures, not
regional ones, and the three scenarios are not interchangeable.** [COV-RISK-2024] **[A]**

| Scenario | Buildings completely or extensively damaged | Casualties day / night | Displaced >90 days day / night | Direct losses |
| --- | ---: | ---: | ---: | ---: |
| M7.2 Georgia Strait (5% in 50 yr at City Hall) | 6,080 | 1,370 / 620 | 365,340 / 230,520 | $17B |
| M9.0 Cascadia megathrust (~30% in 50 yr) | 1,440 | 400 / 170 | 140,000 / 115,850 | $3.8B |
| M7.0 intraslab (~30% in 50 yr) | 720 | 190 / 70 | 25,420 / 15,230 | $3.1B |

**The ladder inverts the intuition, and that is the finding.** For the City of Vancouver the
rarer crustal M7.2 is far worse than the M9 Cascadia — about four times the damaged buildings
and roughly four and a half times the direct loss — and the City states the reason: shaking at
City Hall comparable to the design forces used for new buildings. [COV-RISK-2024] **[A]**
Method behind the assessment is published peer-reviewed. [HILT-2022] **[A]**

### Per building type

All figures City of Vancouver, M7.2 Georgia Strait, displacement measured at **more than 90
days**. [COV-RISK-2024] **[A]**

- **Concrete mid- and high-rise residential** (West End, Downtown; 124,900 residents): 28%
  extensively or completely damaged; **70% of their residents displaced >90 days**; 37% of
  nighttime casualties.
- **Wood-frame apartments** (Fairview, Kitsilano, Mount Pleasant, West End; 160,900 residents;
  40% of the city's purpose-built rental): **64% of residents displaced >90 days** — the
  largest single driver of residential displacement, 45% of the total, 103,900 people.
- **URM residential** (581 buildings, 24,700 residents, Gastown, Downtown Eastside, Chinatown):
  35% extensively or completely damaged, and **over 97% of residents in those buildings
  displaced >90 days**; 29% of nighttime casualties.
- **Downtown office towers:** 29% extensively or completely damaged; **nearly half of occupants
  displaced >90 days**.

**Keep single-family houses and wood apartments sharply distinct.** The "wood frame performs
acceptably" line applies to houses. The Ausenco archetype analysis behind the 2026 action plan
flags wood-frame apartment buildings for lack of wall stiffness and strength, likely
uninhabitability after a design-level event, and **soft-storey collapse risk where the ground
floor is open for tuck-under parking**. [COV-PLAN-2026] **[A]** Merging the two is the single
easiest way to get this page wrong.

### Cordoning

Areas with high damage concentrations can be closed **"for weeks, months, or even years"**,
with the West End and the Downtown Eastside named. [COV-RISK-2024] **[A]** This is the bridge
between "your building survived" and "you still cannot go home", and nothing else on the site
supplies it.

**The City says this to residents in its own voice, and uses Christchurch to say it.** Under
"What can happen during an earthquake", both the Hazard & Risk Explorer and the printed 2024
hazard fact sheet carry, in this order:

> "Prolonged and challenging building repair due to heavy demand for building assessment and
> trade services, even for buildings that only have minor damage."

> "Extended inaccessibility of large sections of neighbourhoods. For example, in Christchurch,
> New Zealand, cordoning lasted well over a year for many sections of downtown."

[COV-EXPLORER-25] [COV-FACTSHEET-24] **[A]**

**Two claims sit in that pair and they must not be merged.** That the City tells its own
residents to expect extended inaccessibility, and names assessment and trade capacity as the
constraint that produces it, is **[A]** — a Vancouver authority describing Vancouver, in
material written for residents. The **Christchurch duration remains [C]**, and the City's use
of it does not promote it: an out-of-region figure quoted by a local body is still an
out-of-region figure. The site may now attribute the cordoning *mechanism* to the City of
Vancouver rather than only to the analogue. It may not attribute "well over a year" to
Vancouver in any form.

**The assessment-capacity sentence is the more useful of the two**, because it names the
scarce resource rather than the outcome: the constraint is the number of people qualified to
assess and repair, and it binds "even for buildings that only have minor damage".
[COV-EXPLORER-25] [COV-FACTSHEET-24] **[A]** It is the same shape as the gas relight ceiling
and the bridge-inspection delay — restoration rate-limited by qualified people, one building at
a time. See `systems/gas.md` and `systems/transportation.md`; do not restate them here.

**What the City does not do is turn any of it into an action.** No City preparedness material
located in the September 2026 pass converts extended inaccessibility into advice — about
documents, medication, insurance, or planning against being locked out of a home that is still
standing. The naming is there; the lever is not. See `preparedness.md`.

### Who lives in the highest-risk buildings

Highest-risk census tracts average roughly **70–75% renters**, of whom about **20–30% are low
income**; **more than 10% seniors**; **30–40% visible minorities**; **4–10% Indigenous**. Many
single-room-occupancy units sit in URM buildings in the Downtown Eastside.
[COV-RISK-2024] **[A]**

### The same assessment, in the City's resident-facing words

The Hazard & Risk Explorer is the plain-language register of the November 2024 risk assessment,
not a second study. **Nothing in this subsection corroborates anything above it** — one source
in two registers is not two sources, and the project has been caught by that lineage error
before. What the Explorer is worth is that it is written to be read, and that it is the version
a Vancouver resident is actually handed.

- **The buildings named most at risk, in the City's words to residents:** "Concrete mid-rise
  and high-rise concrete residential buildings, Unreinforced masonry (older brick) buildings,
  Older wood apartment buildings." [COV-EXPLORER-25] **[A]** These are the three residential
  types out of the five in the assessment above; the two commercial types — low-rise concrete
  commercial and downtown office towers — are not named to residents at all.
- **The neighbourhoods, from the modelled M7.2 Georgia Strait run:** "Darker orange areas …
  include **West End, Downtown, Downtown Eastside, Strathcona, Fairview, Mount Pleasant, and
  Marpole. Downtown, the Gastown area specifically, and the Downtown Eastside have the highest
  risk in the city.**" [COV-EXPLORER-25] **[A]**
- **The two neighbourhood lists are not identical, and the difference is worth recording rather
  than smoothing.** The council report's six-neighbourhood list — the one carrying **65% of
  citywide risk** — names **Kitsilano**, and folds Chinatown and Strathcona into the Downtown
  Eastside. [COV-RISK-2024] **[A]** The Explorer's list drops Kitsilano, names Strathcona
  separately, and adds **Marpole**. Neither document presents itself as correcting the other,
  and no reconciliation was found. **[?]** on why they differ. **Use the council report's list
  wherever the 65% travels**, because the percentage belongs to that list and not to the
  Explorer's.
- **What the Explorer states that the council report does not is a ranking.** The report names
  the six neighbourhoods; the Explorer says which of them is worst and points inside the
  Downtown Eastside to Gastown specifically. [COV-EXPLORER-25] **[A]** That is consistent with
  the URM concentration recorded above, and it is still the same assessment speaking — an added
  detail within one lineage, not a second finding.

### Falling debris — a withdrawn claim and its replacement

**The glass-city framing is dead.** Two independent negatives close it:

1. The City of Vancouver stated on the record that **no such analysis exists**. FOI file
   04-1000-20-2021-060, response dated 17 February 2021: a request for "any reports that
   project or predict damage or casualties from falling glass in downtown Vancouver during a
   large earthquake" returned **no responsive records**, confirmed by both the Vancouver
   Emergency Management Agency and Planning, Urban Design & Sustainability.
   [COV-FOI-GLASS] **[A]**
2. The City's own city-wide seismic risk assessment **never uses the words**. A full-text
   search of the November 2024 report for `glaz|glass|curtain wall|cladding|window` returns
   zero hits. [COV-RISK-2024] **[A]**

A deliberate, dated, documented "no records" answer is a stronger fact than an unanswered
question mark, and it is why this claim is withdrawn rather than left open.

**But separate the two things, because a reader will not.** What is absent is *hazard
quantification* — nobody has estimated how much falling glass there would be, or who it
would hurt. What is emphatically present is *design regulation*. The Vancouver Building
By-law has required, for years, that cladding, cantilever parapets, ornamentations and
masonry veneer connections be designed for a specified lateral earthquake force, and that
glazing accommodate a fallout displacement of at least 13 mm. The code's own commentary to
Table 4.1.8.18 says why: "The failure or detachment of non-structural components and
equipment during an earthquake can present a major threat to life safety." [VBBL-2025]
**[A]**

**All of that governs new construction.** The honest sentence is therefore neither "Vancouver
has nothing to say about falling glass" nor "the glass is fine": it is that the hazard has
been regulated for decades and never measured in the stock that predates the regulation. That
is the same shape as every other finding on this page.

The code's commentary points to **CSA S832**, *Seismic risk reduction of operational and
functional components (OFCs) of buildings*, third edition 2014. The clauses stay paywalled
and unread — but **CSA Group publishes the Preface, Introduction and the whole of Clause 1
free and without a login**, which is substantial primary text and enough that this file no
longer has to describe the standard as an unknown. [CSA-S832-14] **[A]** for CSA's own
published statement of its own standard.

- **CSA's framing of the hazard, which corroborates the by-law note above from an
  independent voice:** "The main cause of casualties and property damage in the event of an
  earthquake is **often the failure of these OFCs**", and "in many cases, losses associated
  with damage to these components are **considerably greater than damage to the structural
  system**."
- **It applies to new *and existing* buildings, including renovations**, across occupancy
  Groups A to F plus post-disaster buildings. It is not a new-construction instrument —
  which matters to this file's central point that the hazard has been regulated for decades
  and never measured in the stock predating the regulation.
- **It deliberately avoids the term "non-structural"**, "to acknowledge the interaction that
  exists between the seismic behaviour of a building's structural system and the seismic
  performance of all other building components." Worth respecting in the site's vocabulary.
- **It excludes** lifeline systems feeding the building from outside or underground, and
  structural integrity, and flags hospitals, water supply, wastewater and telecommunications
  as needing considerations beyond its scope. That exclusion is a real boundary for the
  dependency material.
- **The by-law's commentary points at it as guidance. Nothing in the public text makes it
  mandatory, and the site must not imply that it is.**

**The replacement claim is sourced, local, and better.** The City places the street-level
falling-debris hazard on older masonry commercial stock:

> "Commercial high streets and arterials throughout the city, containing many older URM, wood,
> and low-rise concrete commercial buildings, are also at high risk. As a result, these
> streets, particularly those within the Downtown Eastside and Downtown, have an additional
> risk of on-street injuries and fatalities from falling building debris. Along many arterials,
> such as Hastings Street, Kingsway, and others, on-street debris is likely to cause emergency
> response and transportation blockages."

> "Many of these buildings have parapets and gable end walls that are very prone to collapse
> onto exterior areas immediately adjacent to the building."

[COV-RISK-2024] **[A]**

The hazard is Hastings Street and Kingsway, not the West Georgia curtain wall. Christchurch
supports the masonry version specifically: of the 42 deaths from building failures other than
the CTV and PGC buildings, **35 resulted from URM façades or walls collapsing, 26 of them onto
pedestrians or people in vehicles** — nearly 70% of those deaths were of people outside the
buildings. [NZ-RC-V4] **[C]** See `analogues.md`; it illustrates the mechanism and sets no
local number.

### Casualties and losses

**Rebuilt.** The draft presented "three independent estimates". They are not independent, and
the section's headline conclusion was arithmetically wrong.

| Estimate | Scenario | Total economic | Insured | Actually attributable to |
| --- | --- | ---: | ---: | --- |
| IBC / AIR Worldwide, 2013 | M9.0 western Cascadia, ~300 km from Vancouver | **$74.7B** (direct $62.0B + indirect $12.7B) | **$20.4B** | AIR Worldwide for IBC, primary document now in hand [AIR-2013] **[A]** |
| IBC, 2025 | M9 | ~$96–100B | **$26B** | IBC, no underlying study located [IBC-2025] **[B]** |
| DCRRA, 2025 | M9.0 Cascadia | ~$128B | not given | **Conference Board of Canada 2016**, restated by the province [DCRRA-2025] **[A]** / [CBOC-2016-PR] **[A]** |

**The AIR breakdown, corrected.** The study's own summary table for the western scenario,
all figures including demand surge: **total direct loss $62.0B**, of which **property
$58.6B, infrastructure $1.9B and public assets $1.5B**; **indirect impact $12.7B**;
**total direct and indirect loss $74.7B**; **total insured loss $20.4B**.
[AIR-2013] **[A]**

**The earlier "does not sum" caution is withdrawn.** The study's table reconciles to the
cent in both columns. It did not sum on this page because this page carried the wrong
numbers: the "$59–60B direct" was the **property row** ($58.6B) written into the
**direct-loss row** ($62.0B). The arithmetic complaint was correct; the diagnosis was not.

**The real uncertainty is the resilience range, and the study states it.** The $12.7B
indirect figure is the **midpoint** of a range running from **$4.1B with resilience to
$21.4B without it**. The headline $74.7B therefore sits inside a band of roughly
**$66B–$83B** depending on that assumption, and the band is the caveat that must travel
with the number. [AIR-2013] **[A]**

Two further cautions travel with the table:

- **$20.4B insured is not a fourth column of the same ledger.** It is the insured subset of
  the **$62.0B direct loss** — **32.9% of direct loss, 27.3% of total economic loss**.
  Never print it in a comma-series with the direct, indirect and total figures. Wherever
  the site imputes an insured share from a total, the sentence must say which base the
  share was computed against. [AIR-2013] **[A]**
- The DCRRA's **$128B is not an independent estimate** — it is the province restating
  Conference Board of Canada 2016, and it restates **two** of that report's figures, not
  four. See the Conference Board paragraph below. [DCRRA-2025] **[A]**
- The DCRRA's casualty and building figures — **about 18,000 buildings completely damaged, more
  than 10,000 injuries, 3,400 fatalities** — are outputs of NRCan RiskProfiler scenario
  `SIM9p0_CascadiaInterfaceBestFault`, the same catalogue run the site already cites.
  [DCRRA-2025] **[A]** / [NRCAN-SCEN] **[A]** The DCRRA's own footnote must travel with them:
  the estimates "include only direct mainshock damage without account of secondary hazards like
  landslides, liquefaction, tsunami, fires and more." [DCRRA-2025] **[A]**

**The Conference Board of Canada 2016 figures, correctly attributed — and the report has
now been read.** Retrieved in full from a web archive on 10 September 2026, after the
live path died at the network layer. Full citation: **McIntyre, Jane, and Marc Desormeaux,
*Canada's Earthquake Risk: Macroeconomic Impacts and Systemic Financial Risk*, Ottawa: The
Conference Board of Canada, 2016.** [CBOC-2016] **[A]**, upgraded from **[?]**.

**Two facts about the document that change how it is described.** It was **free** —
published 22 November 2016 at a price of CAD $0.00, and its own last page reads "PRICE:
Complimentary", so this file's note that access could not be determined is retired. And
**funding for the research was provided by the Insurance Bureau of Canada**, with IBC staff
thanked for insights and feedback and a former insurance executive as outside reviewer.
That belongs in every attribution.

> **The $127.5 billion is not an independent estimate. It is AIR 2013, scaled.**
> This is the most important thing in the report and it was invisible from the press
> release. The Board starts from AIR Worldwide's 2013 study — a 1-in-500-year event, at
> least M9.0, $75B total of which $20.4B insured — and then: "it was decided that the
> earthquake scenario contemplated here is one that generates insured losses of **$42
> billion**", chosen "**in consultation with the Insurance Bureau of Canada**" to sit just
> above industry capitalisation. Then: "it was assumed after discussions with AIR that …
> total economic losses would grow in line with insured losses. As a result, starting from
> AIR's original loss estimates in 2013, the current direct cost of the damage was revised
> to an estimated **$127.5 billion**." [CBOC-2016] **[A]**
>
> So **$42B is a chosen stress-test input, not a modelled output**, and **$127.5B is a
> linear scaling of AIR's 2013 number**. This confirms this file's own instinct that the
> only genuinely independent pair is IBC/AIR 2013 and IBC 2025 — and it means **the
> Conference Board and AIR must never be set beside each other as two estimates.** They are
> one estimate and a multiplier. See `../knowledge.md` on Canada's single modelling lineage.

> **The 15,000 deaths is an input assumption, not a finding.** "An assumption was made that
> this earthquake would result in approximately 15,000 deaths", reasoned up from the
> province's own plan (~10,000 for an M7.3 at Vancouver, 1,500 at Victoria) on the ground
> that an offshore M9 with a tsunami would be worse. The Canadian population was then
> reduced by 15,000 **in the macroeconomic model**. [CBOC-2016] **[A]** **[A]** is right for
> *what the Board says*; the sentence must say it is an assumption fed into a model, never
> an estimate the model produced.

**Two figures gain precision over the press release.** Cumulative real GDP loss is
**$96.6 billion** over ten years, not "$100 billion" — the executive summary rounds to
"almost $100 billion". The peak decline is "nearly $38 billion, **or 1.8 per cent**, in
Year 3", and that percentage is what distinguishes it from the DCRRA's unrelated $38B
below. Employment: 173,000 fewer jobs in Year 1, 288,000 by Year 3, 437,000 person-years.
Consumer spending falls $133B. [CBOC-2016] **[A]**

**A fourth "30" exists in this material and it is a percentage.** The contagion model
assumes "that **30 per cent of insurance companies fail** — an assumption informed by
earthquake stress-tests for P&C insurers undertaken by OSFI in the recent past".
[CBOC-2016] **[A]** It does **not** support the "26 of 30" figure reported elsewhere in
this file and must never be used to gloss it.

**Licensing.** The report carries "All rights reserved | Agreement No. 40063028" and was
distributed free. Quotation with attribution is fine; see `../licensing.md`.

The figures below come from the Board's own press release, reproduced in full and
attributed, and they belong to the **Conference Board**, not to the province.
[CBOC-2016-PR] **[A]**

- **$127.5 billion in total economic losses.** The DCRRA's "about $128 billion" is its
  rounding of this figure. Say $127.5B when attributing to the Board; say about $128B only
  when attributing to the DCRRA. [CBOC-2016-PR] **[A]** / [DCRRA-2025] **[A]**
- **Approximately 15,000 deaths.** [CBOC-2016-PR] **[A]**
- **A cumulative $100 billion reduction in real GDP** — the report itself gives
  **$96.6 billion**; prefer the report's figure and treat "$100 billion" as the press
  release's rounding — and **437,000 person-years of
  employment lost — equivalent to 43,700 jobs over the ten-year period**. Print the
  person-years, or the words "equivalent to"; 43,700 jobs is a derived figure and standing
  alone it misstates what was measured. [CBOC-2016-PR] **[A]**
- **$122 billion in net new public debt**, against a **$63 billion** counterfactual — the
  borrowing that would be needed if Canada had a mechanism to avoid financial contagion.
  [CBOC-2016-PR] **[A]**
- **Insured losses exceeding $42 billion would surpass the level at which the industry is
  currently capitalised.** This is an **insured-loss** threshold and belongs on the insured
  side of every comparison. [CBOC-2016-PR] **[A]**

**A full-text read of the DCRRA finds it carries only two of these** — the ~$128B total and
the 43,700 jobs. It does **not** contain the $122B debt figure or the $42B threshold. The
earlier wording on this page, that the province "restates" all four, is withdrawn.
[DCRRA-2025] **[A]**

> **Warning — two different $38 billion figures, and they must never touch.**
> The **Conference Board's $38B** is **peak annual real GDP loss in the third year after
> the earthquake**. [CBOC-2016-PR] **[A]**
> The **DCRRA's $38B** is **direct economic loss from damage to buildings due to mainshock
> ground shaking**, an NRCan RiskProfiler output. [DCRRA-2025-ES] **[A]**
> Same number, unrelated quantities, different units of account, different years, different
> methods. They are the most dangerous collision in this file's whole set of figures. If
> both ever appear on one page, each must carry its full description in the same sentence,
> and neither may be written as "the $38 billion figure".

So the only genuinely independent pair is IBC/AIR 2013 and IBC 2025 — and the real disagreement
is between the insurance industry and the federal hazard model, which is a more interesting
sentence than "three estimates disagree".

**Provincial casualty figures for the crustal scenario**, which the City table does not cover:
PEIRS gives, for a M7.0 Georgia Basin event affecting Greater Vancouver, **2,000 dead, 1,000
critical injuries, 6,500 non-critical hospital injuries, 21,000 first aid**, with 10,000
red-tagged and 6,100 yellow-tagged buildings and 70,000 households displaced.
[PEIRS] **[A]** These are regional, not city, and must not be merged with the City's table.

**Those figures now have their own document behind them.** The PEIRS impact table originates in
**GSC Open File 8853** — Hobbs, T.E. (2022), *A selection of earthquake scenarios for government
planning purposes in 2021*, 9 pp, DOI 10.4095/329397 — requested from NRCan by Emergency
Management BC and the Government Operations Centre. It carries material PEIRS does not.
[GSC-OF-8853] **[A]**

- **Debris.** The M7.0 Vancouver scenario "generates **13 million tonnes of mixed debris**", and
  the operational consequence is stated in the same breath: debris "is likely to litter the
  streets and obstruct response operations", and emergency vehicles, "if they are not damaged or
  trapped in damaged garages, may need the ability to navigate disrupted roadways or clear debris
  from their routes". [GSC-OF-8853] **[A]** Cross-reference `systems/transportation.md`.
- **Complete damage by construction type: wood 26%, concrete 22%, steel 19%**, "especially in
  older buildings that predate rigorous seismic codes". [GSC-OF-8853] **[A]**
- **NRCan's own denominator caution travels with that breakdown**, verbatim: "Wood is a
  predominant building material in this region, so despite having the highest proportion of
  completely damaged buildings, wood actually performs quite well seismically."
  [GSC-OF-8853] **[A]** *Guard: this is a statement about a share computed against a very large
  denominator, at the level of the regional stock. It does not license "wood performs well" as a
  standalone line, and it does not touch the single-family / wood-frame-apartment distinction
  above, which is a separate finding from a separate source and still governs.*
- **NRCan calls its own figures a floor.** The estimates include "only the impacts of earthquake
  shaking as it affects buildings and their inhabitants"; aftershocks, tsunami, landslides,
  liquefaction "and fire following are not considered", nor is damage to vehicles, infrastructure
  or business disruption — "therefore, the estimates herein are likely to represent a minimum
  estimate on impacts." [GSC-OF-8853] **[A]** The fire loss below is precisely one of the excluded
  items, which is why the two must never be netted or casually added.

**The insurance-capacity comparison — corrected twice.** The draft concluded that "every
published Cascadia loss figure exceeds the industry's capacity by a factor of two to four."
**It does not.** Capacity is stated **in claims**, that is, insured loss; the figures
compared against it were **total economic loss**. And the capacity figure itself was wrong:
the site has been printing **$30 billion** as a point when the source gives a **band**.

**Le Pan gives a $30–35 billion band, not a $30 billion ceiling.** Nicholas Le Pan, *Fault
Lines: Earthquakes, Insurance, and Systemic Financial Risk*, C.D. Howe Institute Commentary
No. 454, **August 2016**: "Current industry capacity is in the $30-$35 billion range, which
appears manageable for a range of events", and his proposed federal backstop trigger uses
the same band, "currently approximately $30 billion to $35 billion". [LEPAN-2016] **[A]**

**His three tiers each say something different, and collapsing them loses the finding.**
All three are presented by Le Pan as findings of PACICC's scenario modelling, and all three
are **insured-loss** thresholds. [LEPAN-2016] **[A]**

| Insured loss | What Le Pan says happens |
| --- | --- |
| **$15B** | Insurers can fully meet claims obligations **with no impact on the solvency of well-run, financially healthy companies**. |
| **$25–30B** | The industry overall **appears to have sufficient capacity to respond**, but **several smaller, otherwise healthy companies would likely fail**. PACICC has never dealt with multiple members in difficulty at once. |
| **beyond $30B** | Losses **exceed the existing capacity of Canada's insurance industry** and PACICC's ability to meet claims. **One or more national insurers would fail**, and assessments on the survivors would push their capital below regulatory minimums. |

**And the capacity has moved.** PACICC's own modelling puts the tipping point at about
**$30B in 2013**, rising to **$35 billion by the 2020 edition**, restated in its 2026
update. [PACICC-2026] **[A]**

**Set the comparison up like against like, and date the capacity.** Published insured-loss
estimates against a capacity band that is itself a moving figure:

| Insured-loss figure | Amount | Source |
| --- | ---: | --- |
| AIR Worldwide for IBC, 2013, M9.0 western Cascadia | **$20.4B** | [AIR-2013] **[A]** |
| IBC, 2025, M9 | **$26B** | [IBC-2025] **[B]** |
| Conference Board 2016 industry-capitalisation threshold | **$42B** | [CBOC-2016-PR] **[A]** |
| Industry capacity, Le Pan / PACICC 2013 | **$30–35B** | [LEPAN-2016] **[A]** |
| PACICC tipping point, 2020 edition | **~$35B** | [PACICC-2026] **[A]** |

Both published insured-loss estimates sit **below** the capacity band on either dating. The
$42B threshold is a **different quantity again** — it is the Board's estimate of where
insured losses would surpass the industry's capitalisation, and it is comparable to the
capacity band, not to any total-economic-loss figure. **Do not print a multiplier in either
direction.**

**PACICC's own free modelling is the better citation for "how much can the industry take".**
*How Big is Too Big? The Tipping Point for Systemic Failure* (Grant Kelly, PACICC, 2021,
using 2019 industry data), for a **British Columbia** event: below $20B, no insurer severely
distressed. At **$30B**, 41 insurers exhaust their reinsurance, 25 fall below a 150% MCT,
8 below 100%, and **one fails**. At **$35B**, **six fail directly plus seven more at group
level**. At **$40B**, **16 failures**, an assessment of $14.9B, and — the paper's own words
— the systemic collapse of Canada's P&C insurance industry. [PACICC-2021] **[A]**

**The insurer-failure claim, split off and named.** The previously unidentified "2019 study"
is **Mary Kelly, Anne Kleffner and Grant Kelly, "An examination of catastrophes, insurance
guaranty funds and contagion risk", *The Geneva Papers on Risk and Insurance — Issues and
Practice*, 45(2), 256–280**, published online 8 August 2019, print April 2020, DOI
`10.1057/s41288-019-00141-x`. [KELLY-2019] **[B]** Grant Kelly is PACICC's chief economist;
this is the peer-reviewed publication of the PACICC systemic-risk work, by a separate
route from PACICC's own papers.

- **The paper is paywalled**, confirmed by Springer's own metadata, OpenAlex and Semantic
  Scholar. The figures — at a **$30 billion** event, **26 of 30 insurance companies
  distressed and up to 11 failing** — were **not verified inside it**. They reach us only
  through Stefan Labbé's reporting for Business in Vancouver. [BIV-DCRRA-25] **[B]** Any
  sentence on the site that prints them must name the paper and say the figures come via
  Business in Vancouver.
- **Whether the $30B there is insured or economic loss — downgraded to [?] on
  10 September 2026.** This file asserted it was an insured figure, reasoning that the
  comparison only makes sense against insurer capacity as claims. That reasoning is sound
  and the source pushes the other way: the reporting says "$30 billion in **damages** … as
  simulated by the Geological Survey of Canada", which reads as a total-loss scenario
  figure. **Our reading is an inference and the wording is against it.** It stays **[?]**
  until the paper is read, and no sentence on the site may label that $30B as either.
- **"30" cannot be an industry-wide count.** PACICC has well over 100 member insurers, and
  its own published model reports against that full membership. What the 30 denotes is
  **unknown** and the site cannot say. **[?]**
- **This is not a provincial finding and must never be presented as one.** The DCRRA
  contains no insurer-failure counts, and the word "distressed" does not appear in it.
  [DCRRA-2025] **[A]**

**Beside the capacity material, and not as corroboration of it: the fire study's reinsurer
warning.** Scawthorn states that the modelled fire loss "would be virtually fully insured", and
that "a leading global reinsurer has stated that losses of this magnitude would likely result in
failure of some insurers", would entail secondary and contingent losses, and "could conceivably
lead to financial contagion". [SCAWTHORN-2020] **[B]** as an insurance claim — it is reported
speech about an **unnamed** reinsurer — though **[A]** as a statement Scawthorn makes. It says
the same thing as Le Pan, PACICC and the Conference Board, and it is **not an independent fourth
voice**: it is one author relaying one unidentified firm. Place it alongside the tiers above,
never inside the table.

**Household-level, and currently unused: earthquake-insurance penetration.** Some **60 to 65
per cent of southwest BC homeowners** carry earthquake coverage, with about **70 per cent
in Victoria** and **55 per cent in Vancouver**. **Coverage among renters is much less.**
[LEPAN-2016] **[A]** This is the one figure in the insurance section a reader can act on
about their own household.

**A government document doing the insurance-gap arithmetic in its own voice — but for
Victoria.** OF 8853's M7.3 Leech River scenario gives a total loss of **$20 billion**, of which
"the residential component of this is about **$11.5 billion**". With "a country-leading
residential insurance penetration rate of **70%** and deductibles of **8%** in Victoria area",
that "equates to residential insurance claims totalling approximately **$7.4 billion** with the
remainder (**over $4.1 billion**) being paid by homeowners". [GSC-OF-8853] **[A]**

- **Geography guard: this is Victoria, not Vancouver.** The arithmetic is not transferable — it
  runs on the highest penetration rate in the province. It must never be presented as a Lower
  Mainland number.
- **The east–west comparison is the more portable finding.** Quebec residential earthquake
  penetration is "somewhere around **2–5%**" against BC's "**40–70%**", so a large eastern
  Canadian earthquake "would put proportionately far more demand on government assistance
  programs than the equivalent event in the West". [GSC-OF-8853] **[A]**
- *The two penetration ranges are stated on different bases.* Le Pan gives 60–65% for southwest
  BC, about 70% Victoria, 55% Vancouver; OF 8853 gives 40–70% for BC as a whole. They are
  compatible, but they are not the same measurement and must not be quoted as one.

- An independent corroboration worth keeping: **the two insured-to-total ratios agree
  closely** — 20.4/74.7 = 27.3% and 26/98 = 26.5%. [AIR-2013] **[A]** / [IBC-2025] **[B]**
- Canada is the only G7 nation with significant earthquake risk that lacks a government-backed
  insurance safety net; Budget 2025 states Ottawa intends to consult insurers on guaranteeing
  system stability after a major earthquake. [IBC-2025] **[B]**

**Exposure — corrected, and method-bound.** The DCRRA gives **92% of BC's population
(4,400,000), 90% of businesses, and 76% of critical facilities (13,000)** — **not 78%** as the
draft recorded. [DCRRA-EXP] **[A]** The draft's "roughly 150,000 of 170,000" businesses is not
the DCRRA's wording; drop it.

**These are hazard-zone exposure figures, not scenario outcomes.** They are computed against
**2,475-year return-period ground motions (2% in 50 years) from CanadaSHM6**, with thresholds
of PGA > 0.09 g for buildings, population, critical facilities and businesses and PGA > 0.28 g
for surface infrastructure. [DCRRA-EXP] **[A]** **The site must never write "92% of people
would be affected by the M9."** That sentence would be false and would be the first thing an
expert reader caught.

### Fire following

**Rebuilt in September 2026 from the primary study, retrieved in full.** Scawthorn, C. (2020),
*Fire following earthquake in the Vancouver region*, ICLR Research Paper Series no. 67, 74 pp,
SPA Risk LLC for the Institute for Catastrophic Loss Reduction, November 2020. Everything below
comes from the report itself rather than from City of Vancouver reporting of it.
[SCAWTHORN-2020] **[A]** A separately published executive summary carries the same tables.
[SCAWTHORN-2020-ES] **[A]**

*Key change: this file previously keyed the same paper `ICLR-FIRE`. `SCAWTHORN-2020` is the key
from here on, and one figure moves with it — the draft's "$170M" for Cascadia is the report's
**$162 million**.*

**Five scenarios, not three.** All figures are Canadian dollars, and all are median or mean
estimates: "These are median estimates — there are significant probabilities of greater or less
damage." [SCAWTHORN-2020] **[A]**

| Scenario | Ignitions | Loss, $B CAD |
| --- | ---: | ---: |
| EQ1 — M9.0 Cascadia subduction | 16 | **$0.16** |
| EQ2 — M6.8 Juan de Fuca in-slab | 106 | **$7.4** |
| EQ3 — M7.3 Leech River–Devil's Mountain | 4 | $0.01 |
| EQ4 — M7.3 Georgia Strait | **216** | **$10.7** |
| EQ5 — M6.5 New Westminster | 93 | $7.2 **[?]** |

The abstract's own framing of the set is "losses from nil to $10 billion".
[SCAWTHORN-2020] **[A]**

**Two internal inconsistencies in the report itself. Both must travel with any use of these
numbers.**

- **EQ5 is contradicted by its own report.** The narrative for the M6.5 New Westminster event
  gives **$10.9 billion**; both summary tables give **$7.2 billion**. The report does not
  reconcile them. If EQ5 is used at all, quote the **table** figure and say the narrative
  disagrees. **[?]** on EQ5 specifically; [SCAWTHORN-2020] **[A]** for the existence of the
  conflict.
- **The trial count is stated two ways.** "100 trials" and "100 realizations" appear in the
  method; "1,000 realizations" appears through the results and figure captions. Never state a
  trial count without saying the source gives two. [SCAWTHORN-2020] **[A]**

**The counter-intuitive ordering is confirmed, and the study explains it. The explanation is the
finding.** Cascadia is the **lowest of the five** — **$162 million against $10.7 billion** for
the near crustal event, a factor of **66**. Scawthorn states the mechanism directly:

> "the largest number of fires in the Lower Mainland is not likely to be caused by a large CSZ
> event, but rather by closer shallower crustal events that occur during the build-up of crustal
> stresses prior to the main subduction zone event."

[SCAWTHORN-2020] **[A]** The cause is **distance, not magnitude**. The ground motions for the
Cascadia event are "relatively modest" in Metro Vancouver because the rupture is offshore, while
the Georgia Strait event has "an epicentre very close to downtown Vancouver" and delivers "very
strong" motion — and ignition counts scale with local shaking, not with the magnitude in the
headline. [SCAWTHORN-2020] **[A]**

**This is the same conclusion NRCan reaches about shaking, arrived at independently on fire.**
See `scenarios.md`. That argument runs on ground motion; this one runs on ignitions; they land
in the same place. Two separate literatures, one answer — cross-reference it, do not restate it.

**The $10 billion in PEIRS has a name now.** PEIRS states that fires following an earthquake in
Vancouver "could cause an additional $10 billion in damage" and attributes it only to "studies
indicate". [PEIRS] **[A]** The DCRRA gives the same range and names the author: losses "can range
from upwards of $150 million from an M9 Cascadia Subduction Zone earthquake to more than $10
billion if an M7.3 shallow crustal earthquake happens in the Georgia Strait", endnoted to
"Scawthorn, C., 'Fire following earthquake in the Vancouver region,' Institute for Catastrophic
Loss Reduction, 2020". [DCRRA-2025] **[A]** The pair maps onto Scawthorn's $162M / $10.7B.

- **Say plainly that this is one paper quoted by two government documents, not two independent
  estimates.** The discipline this file applies to the casualty and loss figures above applies
  here unchanged: PEIRS and the DCRRA share a single lineage, and printing them side by side as
  corroboration would be the same error twice.

**The high-rise secondary water supply gap — the strongest single actionable finding here.**
California's building code has for decades required an on-site **secondary water supply** for
high-rise buildings in high-seismicity zones, "typically about 60,000 litres". Scawthorn's
finding, verbatim: "**Vancouver and the Provincial Building By-laws lack a similar provision.**"
He costs it at "significantly less than 1% of the value of the building — perhaps on the order
of the cost to renovate the building lobby", occupying "the equivalent of perhaps two parking
spaces". [SCAWTHORN-2020] **[A]** Concrete, local, priced, and identified by name in a published
study — this is a lever with an address.

**Confirmed against the current by-law, 10 September 2026, and the gap is real.** The
**Vancouver Building By-law 2025** (consolidated to 5 May 2026) was retrieved in full and
text-extracted — Divisions A, B and C, Parts 1 to 13. The phrase "secondary water supply"
occurs **exactly once**, and it is not this: it sits in the plumbing provisions for
*alternate water source systems*, meaning non-potable rainwater harvesting and reuse, under
continuity of supply and backflow prevention. **There is no seismic on-site firefighting
water reserve requirement anywhere in the by-law.** [VBBL-2025] **[A]** on the absence.
Scawthorn's 2020 statement was six years old; it is now current.

**And the mechanism already exists in Vancouver practice — as a fire-engineering
alternative solution, never tied to earthquake.** Three named buildings in the City's own
development records: **Oakridge Centre**, whose fire-engineering minutes carry a dedicated
"Secondary Water Supply" item designing one "to provide a 2-hour design duration", driven
by the City's assumption of three simultaneous fires and **not** by seismic risk;
**1489 West Broadway**, where a building comment raises "possibly the provision of
secondary water supply (i.e. water tank)"; and **600 Robson Street**, whose drawings label
a "SECONDARY WATER SUPPLY ROOM" at P2. [COV-OAKRIDGE-FE] [COV-1489WB] [COV-600ROBSON]
**[A]**

**That makes the lever much stronger than "no such rule exists".** The honest sentence is:
*Vancouver already builds on-site secondary water supplies into large buildings when fire
engineering calls for one, and sizes them in hours of duration — it has simply never
required one, or connected one to earthquake.* A demonstrated local precedent is a far
easier argument than a novel proposal.

**Two clean nulls from the City's own full-text index, same date.** `"fire following
earthquake"` returns **zero results** and `Scawthorn` returns **zero results** on
`vancouver.ca`. The City has published nothing referencing the study that names this gap.
**[A]** on those absences, control queries passed.

**What is still open: whether it was ever *considered*.** That needs Vancouver Building
By-law amendment reports on `council.vancouver.ca`, a separate host the City's site search
does not index, and the National Research Council code-change public reviews, which were not
searched. Provincially, the freely-available BC Building Code 2018 index carries "Water
supply for firefighting" and **zero occurrences of "secondary water"** — supporting but
index-only, and superseded by BCBC 2024, which is not freely retrievable. **[?]**

**And the mechanism behind it: the sprinkler dependency.** New construction in Vancouver must be
sprinklered — "however, sprinklers rely on underground water mains for supply, which are likely
to fail in a major earthquake." [SCAWTHORN-2020] **[A]** The protection people assume they have
is downstream of the system that breaks.

**Water is the pivot for the whole model.** Median estimates run to as many as **15,000 buried
pipe repairs** across the study area, "the precise number and location depending on the
scenario", and "the general rule is about 20% of repairs are full breaks". The loss in EQ2, EQ4
and EQ5 is driven "primarily due to lack of water for firefighting"; in EQ4 the report adds "as
well as there being simply too few firefighters and apparatus". [SCAWTHORN-2020] **[A]**
Cross-reference `systems/water.md`.

**The firefighting resource, counted.** **98 fire halls** in the study area, and "approximately
**200 fire engines** available for immediate firefighting". [SCAWTHORN-2020] **[A]**

**Mutual aid will be largely ineffective in the immediate period**, for three stated reasons:
departments will be husbanding their own resources; help from further afield in the Lower
Mainland is several hours' travel; and "**The Fraser and other rivers are all barriers if bridges
are impassable, which they will be at least initially due to the need to inspect for damage.**"
[SCAWTHORN-2020] **[A]** Cross-reference `systems/transportation.md` — the bridge-inspection
delay is the same fact, reaching fire response.

**An interoperability defect worth having by name.** Burnaby's engines "are typical of most
engines in the study area in that they carry 4 inch rather than 5 inch LDH (as opposed to VFRS),
and lack adapters, which is an obstacle to effective mutual aid." [SCAWTHORN-2020] **[A]**

**911 saturation delays the fire reports.** Telephone systems "will sustain some damage but not
enough to reduce functionality"; the problem is load — "saturation, especially of the 911 system,
will reduce functionality to a great degree, for several hours or more". [SCAWTHORN-2020] **[A]**
Cross-reference `systems/communications.md`.

**Where the ignitions come from**, taken from Northridge 1994 and carried into the model: about
**half electrical**, about **a quarter gas-related**; about half in single-family dwellings and
another 26% in multi-family, so "**about 70% of all ignitions occur in residential
occupancies**". [SCAWTHORN-2020] **[A]** *Guard: the cause split is Northridge experience applied
to a Lower Mainland model, not a Lower Mainland observation.*

**Historical anchor.** The Great Vancouver Fire of 1886 "killed 21 and destroyed 600~1,000
buildings". [SCAWTHORN-2020] **[A]** (citing Matthews 1960)

**Nearly 50% of earthquake-induced fire ignitions in BC occur in Metro Vancouver**, with
concentration in the central business district; the DCRRA also notes the seawater firefighting
advantage of a coastal city. [DCRRA-2025] **[A]**

**Method, in outline, for the method page.**

- **The scenarios are NRCan's, not Scawthorn's.** "NRCan has recently selected five scenario
  events for damage and loss studies (Journeay 2020) … This study employs these same five
  earthquake scenarios", so that authorities "would then have estimates of fire following
  earthquake losses on the same basis as those for the NRCan studies of building damage".
  **But**: "the NRCan estimates of ground motion were not available for this study; therefore,
  this study performed its own estimates of ground motion." [SCAWTHORN-2020] **[A]** The fire
  numbers are therefore **aligned with** the NRCan lineage, not identical to it. That nuance must
  survive every restatement — it is what stops the site claiming a single integrated federal
  model.
- **The author's own humility is worth quoting.** Fire following earthquake "is a highly
  non-linear process, modelling of which does not have great precision and is such that in many
  cases the only clear result is differentiation between situations of a few small fires, versus
  major conflagration." [SCAWTHORN-2020] **[A]**
- **What the study excludes:** gas and liquid-fuel **transmission** line breaks; the
  vulnerability of energy facilities; winter storm effects on response; and the whole of
  non-fire earthquake damage. [SCAWTHORN-2020] **[A]**

**The Dedicated Fire Protection System (DFPS)**, and how narrow it is:

- A **$52 million** system of **two saltwater pumping stations** and a dedicated
  earthquake-resistant pipeline, supplying **the downtown peninsula — the downtown core and the
  West End — plus Fairview Slopes and Kitsilano**. First pump station at False Creek September
  1995; second at Coal Harbour February 1997; pipeline completed **2003**. [COV-PREPARES] **[A]**
  *(New key: the City's current "How Vancouver prepares for emergencies" page,
  `https://vancouver.ca/home-property-development/how-vancouver-prepares-for-emergencies.aspx`.
  It replaces the draft's bundled `COV-DFPS` council-records key and lifts this from [B] to
  [A].)*
- Length is given as a **10 km** secondary fire suppression system in City council reporting.
  **[B]** — the specific council report is not pinned; see below.
- **Nothing beyond those areas.** The intended build-out was exactly this; the last hydrants
  went in in Kitsilano in 2003, and the City's current page describes 2003 as the end state.
  [COV-PREPARES] **[A]** Naming the areas it does *not* cover is the point of the section.
- The Fairview Slopes extension was justified partly "to protect Vancouver Hospital, the
  primary emergency care facility for the province". [COV-DFPS-2001] **[B]**
- **Correction: the seawater draw has never been used.** The draft said "used in anger only
  once"; the cited source says the opposite. [VIA-HYDRANTS] **[B]**
- **Do not publish the pump capacity figure as drafted.** "Two pump stations, each capable of
  roughly 10,000 imperial gallons per minute" misstates the source. Council material gives
  **20,000 igpm downtown and 10,000 igpm in Kitsilano/Fairview** — asymmetric, and stated as a
  post-seismic **requirement**, not a per-station capacity. [COV-DFPS-2001] **[?]** The
  conversion arithmetic is fine (10,000 imp gal/min = 45,461 L/min, and the imperial reading is
  the only one consistent with "about 45,000 L/min"); the figure it converts is not.
- **Map layer cleared.** The DFPS water mains dataset is published on the City of Vancouver Open
  Data Portal under the Open Government Licence – Vancouver. [COV-DFPS-DATA] **[A]** The
  coverage boundary can be drawn rather than described.
- **The resident-facing description.** The Hazard & Risk Explorer describes the system at length
  under "City actions": designed to withstand a "maximum credible earthquake" for the region,
  able to draw either fresh **or salt** water, hardened watermains, "hydrants (the big, blue
  ones)", two high-capacity pump stations, and built on the lesson of the San Francisco fire of
  1906. [COV-EXPLORER-25] **[A]**
- **And the absence inside it: that description names no coverage area at all.** The coverage
  sentence exists, but on a different page — "How Vancouver prepares for emergencies", filed
  under what the City has built rather than under what a resident can do. [COV-PREPARES] **[A]**
  **So the City never tells a resident which side of the line they are on.** No map, address
  lookup or "check your neighbourhood" prompt was found on vancouver.ca, searched 10 September
  2026. The blue-hydrant identifier is the only part of the description a reader can act on, and
  it reaches them without the geography beside it.

### The fire halls themselves

A water supply that survives is worth less if the halls do not. There is no published count
of how many of Vancouver's fire halls are rated post-disaster, but there is enough on the
record to say something specific.

- Vancouver has **19 fire halls** and five specialty fire facilities, with a replacement value
  of roughly **$642 million**, about **58% in good or fair condition**, and an average age of
  **30 years**. [COV-CAP-2730] **[A]**
- The City concedes the general case in its own capital plan: "There is also a need to
  increase the resilience of these facilities to ensure that most, if not all, will remain
  operational after a major event such as an earthquake." [COV-CAP-2730] **[A]**
- **The sharpest published deficiency statement** is older. Fire Hall #12 in Kitsilano was
  selected for seismic upgrade because it sits in "a relatively large geographic area (west of
  Arbutus Street) where **no fire hall meets current seismic standards**." The same document
  records that the Metro Core "has five fire halls, all of which were built in the 1970s or
  earlier." [COV-CAP-1922] **[A]**
- Four halls are individually identifiable: **#17** (Knight Street, opened September 2023)
  built as a post-disaster communications hub; **#8** (Downtown South) and **#9** (Grandview)
  being rebuilt to post-disaster standard for completion in 2029; **#2** (Main Street, built
  1974) stated to no longer meet current seismic standards and being replaced; **#1** to be
  seismically upgraded. [COV-CAP-2730] [COV-CAP-2326] **[A]**
- **Scale marker.** The entire "climate and seismic resilience" category in the 2027–2030
  capital plan is **$24 million of a $3.5 billion plan**, of which the seismic component is
  $1 million for building risk assessments across five City buildings. [COV-CAP-2730] **[A]**
- **Burnaby** builds new halls to post-disaster standard — Fire Station 8 (Burnaby Mountain)
  and Fire Station 4 (Greystone, opened July 2024) are both explicitly so. [BBY-FS8] **[A]**
  Burnaby also published an unusually blunt admission about a different building: a 2023
  seismic assessment found City Hall "is far from a current post-disaster building standard."
  [BBY-CITYHALL] **[A]**
- **District of North Vancouver**: the Firehall No. 5 (Norgate) replacement "will be built to
  post-disaster standards". [DNV-NORGATE] **[A]** *Guard: the existing hall is described only
  as having "reached the end of its service life". That is not a seismic statement and must
  not be written as one.*

**The pattern is the same as the hospitals and the schools.** What is built new is built to
post-disaster standard. What already stands is mostly older than the standard, and the money
directed at closing that gap is a rounding error against the capital plan it sits in.

---

## What is not established

- **How many of Vancouver's 19 fire halls are rated post-disaster.** The City's own phrase is
  "the upgrade and replacement of several fire halls". Do not convert "several" into a number.
  **[?]**
- **Fire hall seismic status outside Vancouver, Burnaby and the District of North Vancouver.**
  Surrey and New Westminster are documented negatives — full sitemaps enumerated (roughly
  16,000 and 7,521 URLs), zero hits for post-disaster, seismic or earthquake on any fire-hall
  page, including Surrey's new Fleetwood Hall 6, which is being built without any published
  statement of what standard it is built to. **Richmond and the City of North Vancouver were
  tested on 10 September 2026 and the answers differ.** **[?]** only for CNV now.

  **Richmond: all halls, stated by the fire chief — at committee-minute strength.** Community
  Safety Committee minutes of 10 March 2026 record the Chief answering members: "**all
  Richmond firehalls are rated to withstand major disasters**", that the oldest, No. 6, is
  under renovation, and that the second oldest "underwent renovations several years ago to
  bring it up to **extreme post disaster standards**". [RICH-CSC-2026-03] **[A]** Corroborated
  a decade earlier at the same venue — "all Firehalls were designed to be earthquake
  resistant" [RICH-CSC-2016-02] **[A]** — and contextualised by a 2007 Council item
  transferring seismic-upgrade funding between two halls. [RICH-CNCL-2007-03] **[A]**

  **Guard, and it is not optional.** This is an **officer's oral assurance recorded in
  minutes**, not an engineering certificate and not a per-hall rating. The written staff
  reports on Richmond's hall replacements contain **zero** occurrences of seismic, earthquake
  or post-disaster and say only "satisfy related codes"; two of them are scanned images and
  remain unread. And "rated to withstand major disasters" is **not** the same phrase as
  "post-disaster importance category" — the page must not silently upgrade it.

  **City of North Vancouver: nothing, across six channels.** CNV has one fire hall. Searched
  10 September 2026: the site-search API with controls passed and a negative control proving
  it does not index council report PDFs; the complete City-Finances series, 81 PDFs covering
  financial and capital plans 2012–2030 and annual reports 2015–2025, where seismic terms hit
  four files and none concerns the fire hall; all 21 of the 2026 council agenda packages; the
  OCP by-law; the fire department's Service Priorities Plan 2021–2024; and a web-archive sweep
  of the domain. The 2026–2030 Capital Plan does carry a **Fire Hall Assessment and Lifecycle
  Analysis** ($50,000, condition and lifespan) and a **Long Term Plan for City Fire Halls** —
  and **neither mentions seismic or post-disaster**, which is the most specific thing CNV
  says. [CNV-CAPITAL-26] **[A]**
  - **The residual gap is the same shape as the thing that worked.** CNV's **pre-2026 council
    minutes** were not opened. Richmond's statement lived in minutes and was invisible to
    every document-level channel. If a CNV statement exists, that is where it is. **[?]**

- **The DFPS wet-well limit.** "Each station's wet well limits sustained outflow to roughly
  15–20 minutes" has no located source. **[?]** Searched: the four City council DFPS records
  from 1997–2001 and the City Archives finding aid, September 2026. If it is ever sourced, the
  useful framing is volume rather than time — at 45,461 L/min, 15–20 minutes is roughly
  **680–910 m³**, a buffer, not a supply.
- **The specific council report carrying the DFPS 10 km figure.** Confirmed to exist at [A] in
  a City council report during the September 2026 pass, but the report was not recorded. **[?]**
- **Whether the early-2000s DFPS expansion proposals formally did not proceed.** No source
  located; the absence of expansion since 2003 is established, the decision record is not. **[?]**
- **Any Vancouver or Lower Mainland study of glazing, cladding or façade falling-hazard risk.**
  Searched, September 2026: the NRCan Open S&T Repository API for `nonstructural seismic`,
  `glazing earthquake`, `curtain wall seismic`, `falling hazard casualties earthquake`,
  `unreinforced masonry Vancouver` — no NRCan or GSC publication on glazing, cladding, façade or
  falling-debris hazard for Vancouver or anywhere in Canada. ICLR site search: `glazing` 0
  results, `parapet` 0, `facade` 0. vancouver.ca site search across nine queries returned only
  permit records and the by-law itself. Resilient Vancouver Strategy: zero relevant hits. Plus
  the 2021 FOI negative above. OpenAlex queries `nonstructural seismic risk Vancouver
  building` and `seismic falling hazard glazing cladding parapet casualties` returned **zero**
  BC results (10 September 2026), so the absence now rests on a bibliographic index as well as
  an FOI response. **UBC cIRcle remains untested** — the Open Collections API rejects
  collection identifiers and the site search is JavaScript with no discoverable query
  parameter. **This is a searched absence, and the City's FOI response makes
  it a deliberate documented one.**
- **The "26 of 30 distressed, up to 11 fail" figures, inside Kelly, Kleffner & Kelly
  (2019).** The paper is identified and correctly dated, but paywalled at Springer —
  confirmed closed by Springer's own metadata, OpenAlex and Semantic Scholar, with no
  preprint, repository or working-paper copy located. The figures are media-routed via
  Business in Vancouver, and **what the "30" denotes is unknown**. [KELLY-2019] **[B]** /
  [BIV-DCRRA-25] **[B]** The former GSC-2019-INS key described a study that does not
  exist as such and is retired.
- **Date correction on the DCRRA coverage.** This file previously dated it to **2026**.
  It is **27 December 2025** (Stefan Labbé, Business in Vancouver) and **29 December 2025**
  (the Times Colonist reprint). [BIV-DCRRA-25] **[B]** / [TC-DCRRA-25] **[B]** **Prefer the
  BIV original**: it hyperlinks the word "study" to the Springer DOI, and the Times
  Colonist reprint carries no link.
- **The IBC/AIR 2013 study PDF — resolved, with a caveat.** The study has been recovered in
  full, 264 pages, and read. [AIR-2013] **[A]** IBC's live copy is dead at the DNS/TLS
  layer and the older `ibc.ca` path returns IBC's HTML 404 page under a 200 status; the
  only working route is the Internet Archive's verbatim capture of the IBC original,
  `https://web.archive.org/web/2016id_/http://assets.ibc.ca/Documents/Disaster/IBC-Earthquake-Economic-Study-Full-Report.pdf`.
  Refresh trigger: if IBC restores the document, cite IBC. The study carries an express
  no-reproduction-without-permission notice despite years of publication on IBC's public
  asset host — see `../licensing.md` before quoting. Whether the 2025 $96B/$26B figures
  rest on new modelling or on the 2013 work remains unresolved. **[?]**
- **The Conference Board 2016 report text.** The `conferenceboard.ca` product page has an
  expired TLS certificate, the successor `conference-board.org` page returns an empty body,
  the PreventionWeb e-library identifier 404s, and the Internet Archive holds no
  earthquake-related path on the domain. Access status — free, members-only or priced —
  could not be determined. Only the Board's press-release figures are in hand.
  [CBOC-2016] **[?]** / [CBOC-2016-PR] **[A]**
- **The Ausenco report** *Supporting Analysis for Seismic Risk Reduction Planning*, cited
  throughout the 2024 council report as "(2025) [Forthcoming]", is **not published as of 10
  September 2026**. It is the likeliest future Vancouver-specific building-vulnerability source.
  Refresh trigger.
- **Whether the Buildings Seismic Risk Reduction Action Plan was formally adopted** on 2 June
  2026. It appears on the consent agenda; the minutes page was not retrievable. **[?]**
- **Internal City conflicts to resolve before quoting dates:** East Wing demolition 2015
  (RTS 16091) vs 2017 (Resilient Vancouver Strategy); screening programme start 2013 vs 2011;
  screening coverage ~170 buildings vs ~one-third of ~700. **[?]**
- **Scawthorn's EQ5 loss figure (M6.5 New Westminster).** The report contradicts itself:
  **$10.9 billion** in the narrative against **$7.2 billion** in both summary tables, unreconciled.
  This is not a retrieval gap — the primary document is in hand and says both. Do not use EQ5
  without the caveat, and preferably do not use it at all. [SCAWTHORN-2020] **[?]**
- **Scawthorn's trial count.** "100 trials", "100 realizations" and "1,000 realizations" all
  appear in the same report. Which the results rest on is not established. [SCAWTHORN-2020] **[?]**
- **Whether Vancouver or the Province has considered and rejected a high-rise secondary
  water supply requirement.** Scawthorn establishes that no such provision exists; no decision
  record for or against was looked for in this pass. Not searched — recorded so the absence is
  not mistaken for one that has been. **[?]**
- **A key conflict for `sources.md` to settle.** Two memos key the same two council reports
  differently: `COV-RISK-2024`/`COV-PLAN-2026` (used here) against
  `COV-URM-2024`/`COV-URM-2026`. Likewise `DCRRA-2025` against `DCRRA`. The
  `ICLR-FIRE` / `SCAWTHORN-2020` conflict is **settled here in favour of `SCAWTHORN-2020`**, on
  the retrieval of the paper itself; `sources.md` needs updating to match, along with the new
  `SCAWTHORN-2020-ES` and `GSC-OF-8853` keys used above. This file otherwise uses the first of
  each pair.
- **Method caveat on every absence above.** General web search was unavailable for most of the
  September 2026 pass. These are "not found through these channels" — direct fetching of
  government, regulator and repository endpoints, sitemaps, the Crossref API and the NRCan
  repository API — not proofs of universal absence.

---

## For the page

**Mechanism sentence.** Most of Vancouver was built before the rules that would have made it
safe, and the buildings that hold the most people are not the ones that hold the most risk. Five
building types, about a tenth of the stock, carry four fifths of the risk, and six
neighbourhoods carry two thirds of it.

**Guards that must travel with the numbers.**

- Every City figure is **City of Vancouver only**. PEIRS figures are **Greater Vancouver**.
  Never put them in one column.
- Displacement is always **"more than 90 days"**, and always per scenario.
- Exposure percentages are **hazard-zone figures at the 2,475-year design level**, not scenario
  outcomes. The sentence "92% of people would be affected by the M9" is forbidden.
- Loss figures are **total economic** unless the word *insured* appears. The insurance section
  fails immediately if that distinction slips. **$20.4B is 32.9% of AIR's direct loss and
  27.3% of its total economic loss**; wherever the site imputes an insured share, the
  sentence names the base.
- **Two different $38 billion figures exist** — the Conference Board's peak-year GDP loss and
  the DCRRA's mainshock building damage. Neither may ever be written as "the $38 billion
  figure", and they may not appear together without each carrying its full description.
- **Insurance capacity is a band and it is dated:** $30–35B on Le Pan's 2016 reading of
  PACICC 2013, about $35B on PACICC's 2020 modelling. Never print $30 billion as the
  capacity.
- The $74.7B AIR total carries a **resilience range**: indirect loss runs $4.1B–$21.4B, so
  the total sits in a roughly $66B–$83B band.
- Analogue casualty statistics from Christchurch illustrate the masonry mechanism and set no
  Vancouver number.
- **A local body quoting Christchurch does not make Christchurch a local number.** "Cordoning
  lasted well over a year" stays **[C]** and stays attributed to Christchurch, however
  resident-facing and however Vancouver the document repeating it. What is local, and what the
  site may say in the City's name, is that **the City tells residents to expect extended
  inaccessibility of large sections of neighbourhoods**, and names building assessment and trade
  capacity as the constraint. [COV-EXPLORER-25] [COV-FACTSHEET-24] **[A]**
- **Fire losses are a separate ledger from shaking losses.** NRCan's scenario figures exclude
  fire following and call themselves "a minimum estimate on impacts"; Scawthorn's fire figures
  exclude all non-fire damage. They are complements, not components. Never add them, and never
  present either as the total.
- **Fire scenario names are not optional.** $10.7B is the M7.3 Georgia Strait crustal event;
  $162M is the M9.0 Cascadia. Written without the scenario, either number is meaningless.
  **EQ5 (M6.5 New Westminster) does not go on the site**: the report gives two different losses
  for it.
- **PEIRS's $10 billion and the DCRRA's "$150 million to more than $10 billion" are one paper,
  quoted twice.** Never print them as two estimates agreeing.
- **The OF 8853 insurance arithmetic is Victoria's**, not Vancouver's, and the wood 26% figure
  carries NRCan's denominator caution or it does not travel at all.

**How to write the two corrections.** Both are worth showing rather than quietly fixing. The
glass one is a searched absence with a dated FOI file behind it and a better, sourced
replacement — "we looked for this, the City says it does not exist, and here is what the City
does say" is the most trust-building paragraph available on this page. The insurance one is a
like-for-like error: the honest version is smaller than the wrong version, and publishing the
smaller version is what makes the rest of the site's numbers worth believing.

**The counter-intuitive pair to lead with.** The M7.2 crustal scenario is worse for Vancouver
than the M9, and fire loss follows the same ordering. Both come from the reader's own city's
published work. Stating them together, early, is what stops the page reading as a generic
big-one narrative.

**Levers.** For a renter or owner: the building type and the neighbourhood are the two things
that predict outcome, and both are knowable today. For policy: the screening inventory is
adopted, costed and undated — that is a lever with a name attached. For the falling-hazard
section: Part 11 exists and is trigger-based, so nothing bites until someone renovates. Say it
plainly; it is the single clearest gap between what the by-law can do and what it does. **For
the insurance section the lever is coverage**: 60–65% of southwest BC homeowners carry
earthquake insurance, about 70% in Victoria and 55% in Vancouver, and much less among
renters. [LEPAN-2016] **[A]** That is a fact about the reader's own household and the only
thing in the insurance material they can act on this week.

**A second lever, with an address.** The high-rise secondary water supply gap is the most
actionable thing on this page after household coverage: California requires an on-site supply,
Vancouver and the provincial by-laws do not, and a published study prices it at well under 1% of
a building's value and two parking spaces of floor area. [SCAWTHORN-2020] **[A]** It pairs with
the sprinkler dependency — sprinklers draw on the underground mains, and the mains are what
breaks — which is the sentence that makes the gap legible to a reader who lives in a tower.

**A third lever, and the City holds every piece of it except the sentence.** The DFPS covers the
downtown peninsula, the West End, Fairview Slopes and Kitsilano and nothing else; the City
publishes that coverage on a page about its own works and omits it from the resident-facing
Explorer, which describes the system without saying where it is. [COV-PREPARES]
[COV-EXPLORER-25] **[A]** The mains are an open data layer [COV-DFPS-DATA] **[A]**, so the
boundary can be drawn. "Know which side of the line you are on" is therefore a lever the site
can offer and the City currently does not — and the blue hydrants are the City's own
identifier for it.

**Do not.** Do not soften the wood-frame distinction into "wood performs well" — NRCan's
denominator caution is about the regional stock and does not override it. Do not convert
"several fire halls" into a number. Do not publish the DFPS per-station pump capacity. Do not
print a multiplier for the insurance comparison in either direction.
