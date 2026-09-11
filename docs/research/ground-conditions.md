# Ground conditions

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.
> **Changed in that pass.** Richmond's dike claim is **resolved against the published engineering**, which qualifies it. Review §7 first.

**Status.** The ground under Metro Vancouver varies more than the buildings on it do,
and the evidence base for that is unusually strong: peer-reviewed, local, and in one
case quantified to a specific street address. Liquefaction in Richmond and Delta has a
published return period shorter than the interval since the last Cascadia earthquake,
and the deep Georgia Basin amplifies long-period shaking by factors the province's own
assessment states and Canada's building code does not yet account for. The constraint is
licensing, not evidence: the best map set is not open, so this subject ships as prose and
outbound links until the Institute for Catastrophic Loss Reduction says otherwise.

---

## Findings

### 1. Liquefaction return periods in Richmond and Delta

**The headline number.** "The liquefaction return period varies from 100 to over 500
years. In Richmond and Delta regions, it is expected that soil liquefaction could occur
every **100 to 250 years**. These short return periods of liquefaction are linked to the
combination of thick liquefiable layers, shallow groundwater conditions, and high seismic
hazard of the study region." [JAVANBAKHT-24] **[A]**

**What it is a return period *of*, which the site must state precisely.** It is the
return period of **liquefaction triggering, defined as a factor of safety against
liquefaction of 1**, computed per cone penetration test site from a performance-based
hazard curve and interpolated across the region. It is not the return period of surface
damage, not of an earthquake, and not of a scenario. [JAVANBAKHT-24] **[A]**

**The sourcing, corrected.** The 100-to-250-year figure rests on **787 CPT profiles, 616
of them in Richmond and Delta** and 171 outside — the factor-of-safety analysis published
as the *Soil Dynamics and Earthquake Engineering* 2024 paper, which is chapter 5 of
Javanbakht Samani's Western University thesis. [JAVANBAKHT-24] **[A]** The figures of
808 CPTs and of 900 profiles are both real but belong to other chapters: 808 CPTs
verified the geology-based susceptibility ratings and cumulative liquefiable thickness,
and 808 CPTs plus 92 shear-wave profiles — 900 in total — underlie the separate
liquefaction potential index hazard maps at 475 and 2,475 years. [JAVANBAKHT-24] **[A]**
Do not present 808 or 900 as the dataset behind the 100–250 year figure. That was the
error in the earlier draft.

**Supporting ground detail from the same work**, stronger than what the draft carried:
75% of CPT profiles in Richmond and Delta have a cumulative liquefiable thickness greater
than **9.6 m**, with a mean of 11.8 m and a median of 12.9 m; the groundwater table sits
under 3 m and in places under 1 m. [JAVANBAKHT-24] **[A]**

"Liquefaction manifestations are expected in Richmond and Delta" is verbatim from this
work, not from the microzonation project as the earlier draft implied. [JAVANBAKHT-24]
**[A]**

### 2. Triggering probability in a Cascadia event

Cascadia interface earthquakes with **Mw greater than 8.9 give a 31–57% probability of
liquefaction triggering** in the region. Verified against the thesis abstract; published
in *Earthquake Spectra*. [JAVANBAKHT-23] **[A]**

Two supporting details the earlier draft carried alongside that figure — **back-analysis
of 12 paleo-liquefaction sites**, and **median magnitudes of 8.8–9.0** — could not be
confirmed in any retrieved text and drop to **[?]** pending direct access to the
*Earthquake Spectra* paper, whose publisher page returns 403 to automated fetching. The
31–57% figure does not depend on them and may still be used; the two details may not.

### 3. Georgia Basin long-period amplification

Metro Vancouver sits above the **Georgia Sedimentary Basin**, and sedimentary basins
amplify shaking "particularly at long periods, impacting tall buildings and other
long-period structures". This is the province's own assessment, in a signed case study
by Kakoty and Molina Hutt of UBC with peer-reviewed underpinnings. [DCRRA-APPC] **[A]**

Quantified, and Metro Vancouver-specific: [DCRRA-APPC] **[A]**

| Measure | Value |
| --- | --- |
| Average basin amplification factor at a 2-second period, basin depth (Z2.5) 1–2 km | **1.7** |
| Same, basin depth 3–4 km | **2.63** |
| Uniform Hazard Spectrum at a City of Vancouver site (49.24, −123.11), corrected for basin effects, at a 2-second period | **24% higher** |

**The gap statement, which is publishable in its own right.** "The United States
Geological Survey included basin effects in the 2018 version of the US National Seismic
Hazard Model and, as a result, basin effects are now included in US building codes. While
progress has been made in the US, **Canada's 6th Generation Seismic Hazard Model and the
National Building Code of Canada (2020) do not explicitly account for these effects.**"
[DCRRA-APPC] **[A]**

That is a provincial government document stating that the national hazard model and the
national building code omit an effect it has just quantified at up to 2.63 for the ground
under Metro Vancouver. The DCRRA itself points at the Metro Vancouver Seismic
Microzonation Mapping Project as the work that will refine it. [DCRRA-APPC] **[A]**

This is the physical basis for the long-period, tall-building half of the scenario
contrast in `scenarios.md`.

Related, and consistent: Holocene delta deposits beneath Richmond range from under 20 m
to over 200 m thick, so amplification there is probable. [CJES-2024] **[A]** BC Hydro's
2014 probabilistic seismic hazard assessment found hazard roughly unchanged for the Lower
Mainland but higher for Vancouver Island and the Bridge River area, with longer shaking
duration in some cases — a 2014 finding, and it must be dated in the sentence.
[BCH-PSHA-14] **[A]**

### 4. The province's own reasons to prefer the microzonation maps for Metro Vancouver

Two methodological limitations, both stated by the DCRRA about itself: [DCRRA-APPC]
**[A]**

> "The hazard exposure analysis **does not incorporate existing seismic microzonation
> work that has been completed at a detailed level, such as for the city of Metro
> Vancouver**."

> "The DCRRA Seismic Working Group … has flagged that **damage correlation with PGA for
> many structures is poor**, recommending other metrics such as various spectral
> accelerations periods."

Read with the licensing position below, this is an awkward but honest place to be: the
province says its own regional layer is the wrong tool for Metro Vancouver ground, and
points at a map set the site cannot yet reproduce.

It matters for how DCRRA exposure figures are read as well. The DCRRA's exposure numbers
are computed against **2,475-year return period ground motions (2% in 50 years) from
Canada's sixth-generation seismic hazard model**, with thresholds of **PGA above 0.09 g**
(roughly MMI VI) for buildings, population, critical facilities and businesses, and
**PGA above 0.28 g** (roughly MMI VII) for surface infrastructure. These are hazard-zone
exposure figures at the code design level, **not a scenario result**. [DCRRA-EXP] **[A]**

### 5. The microzonation map set, and why it cannot be drawn

The **Metro Vancouver Seismic Microzonation Mapping Project** — Western University and
the Institute for Catastrophic Loss Reduction, with support from the BC Ministry of
Emergency Management and Climate Readiness — published 29 Phase 1 maps for the western
Metro Vancouver communities, covering amplification, basin effects, site class, site
period, liquefaction susceptibility and slope instability at neighbourhood scale.
[MVSMMP] **[A]** Phase II, covering Pitt Meadows, Maple Ridge and Langley, runs to
**late 2026**; a project event was held in Pitt Meadows on 4 June 2026. [MVSMMP] **[A]**
Expect publication within months. It is a refresh trigger for this file and for the maps
page.

**The licence is not open, and it blocks the map.** The Borealis archive record for
Map 03 (Liquefaction Susceptibility, 25 November 2024) states **Custom Dataset Terms**,
not an open licence: reproduction for personal, non-commercial, academic and research use
with prescribed credit; PDF map sheets shareable only unaltered; GIS layers adaptable
only on a share-alike basis; **commercial use, including electronic publication, requires
prior written approval from ICLR**, and the reservation extends to statements and
conclusions regarding the maps. A prescribed citation string is required per map, and a
disclaimer must accompany any use. [MVSMMP-LIC] **[A]**

The consequences, set out in full in `../licensing.md`:

- The intended design — ground conditions as the base layer in the site's own palette —
  cannot be built from the map sheets, which are unalterable.
- Building from the data layers would make our derived layer share-alike, publishable
  only under MVSMMP's terms.
- Republication of MVSMMP material by the provincial microzonation portal does not change
  ICLR's terms.
- **Until ICLR replies: link to `metrovanmicromap.ca` and to the individual Borealis
  DOIs, describe findings in our own words with normal citation, and host, reproduce,
  restyle or derive nothing.** [MVSMMP-LIC] **[A]**

This is why the ground-conditions page ships as prose. The evidence is not the
constraint; the licence is.

### 6. Municipal regulation already reflects the ground

Richmond requires a geotechnical special study for construction on liquefiable ground.
[RICHMOND-PL1] **[A]** This is a useful, undramatic way to show that the finding is
already operational in local policy rather than a novel claim by this site.

### 7. Secondary hazards — slope instability and dikes

**Slope instability** is mapped in the MVSMMP Phase 1 set, at neighbourhood scale, for
the western Metro Vancouver communities. [MVSMMP] **[A]** The same licence position
applies: link, do not reproduce.

**Dike vulnerability on the Fraser delta** is framed in the peer-reviewed delta review
alongside subsidence, flooding, liquefaction and tsunami — that is, the hazards are
treated as one interacting set rather than as separate risks. [CJES-2024] **[A]**

The province's own crustal scenario makes the compound case concretely, and it is the
strongest available statement on saturated-ground failure in Metro Vancouver: the PEIRS
M7.0 is set immediately after an atmospheric river, and it states that "liquefaction of
roadways in Richmond and Delta may make driving difficult", compounding impacts to
Vancouver International Airport and the Tsawwassen ferry terminal. [PEIRS] **[A]** The
Cascadia scenario names liquefaction, landslides, floods and seiches among its cascading
events. [DCRRA-2025] **[A]** Neither is a dike assessment. Neither models secondary
hazards quantitatively — both say so of themselves. See `scenarios.md`.

**Richmond publishes a seismic performance claim about its own dikes, and it deserves
verification rather than quiet acceptance.** Richmond Fire-Rescue states: "Computer
soil models predict that dikes will sustain some damage during an earthquake; however,
the dikes will remain an intact barrier to flooding." [RICH-EQ] **[A]** for the City
saying it.

**Resolved 11 September 2026. The models are named, dated, authored and published — in
the City's own documents — and what they say is not what the public page says.**

They are **Thurber Engineering Ltd.'s seismic deformation analyses**, published as
appendices to Richmond's Dike Master Plans and linked from `richmond.ca`. The clearest is
Attachment 5 to the **Lulu Island Dike Master Plan Phase 2: *Seismic Deformation
Analysis*, 12 September 2016**. It names the software and the constitutive model — "the
software program **PLAXIS 2D** … incorporated complex cyclic soil behaviour using the
**UBCSand** soil model" — scales Lions Gate time-histories to NRCan peak ground
accelerations for the 1-in-475 and 1-in-2,475-year events, and assesses three sections
against the province's *Seismic Design Guidelines for Dikes* (2nd ed., 2014).
[RICH-THURBER-16] **[A]**

**What it concludes at the 1-in-2,475-year event**: No. 1 Road 500 mm horizontal /
**600 mm vertical**; Bath Slough 450 / **1,000 mm**; No. 4 Road 300 / 500 mm. **Vertical
displacement exceeds the Guidelines' 500 mm criterion at two of the three sections** —
and "these deformations do not include post-liquefaction reconsolidation settlements …
vertical reconsolidation settlements could be in the order of 0.3 m." Horizontal criteria
were met at all three. And the sentence bearing most directly on "intact barrier":

> "Flow slides could potentially occur where there is extensive liquefaction and a steeper
> riverbank and river channel bottom. With flow slides, **large uncontrolled deformations
> of several metres or more** could be anticipated."

The later phases are blunter. Dike Master Plan Phases 3, 4 and 5 each summarise a Thurber
analysis in identical terms: "Proposed dike cross-sections **will not meet the performance
requirements** of the BC Seismic Design Guidelines for Dikes based on numerical deformation
analysis, **without ground improvement** or alternative approaches", with liquefaction
hazard "insignificant" at the 100-year event and "moderate and high for the 475 and
2,475-year return period events respectively. The resulting deformations would be large."
Densification is costed at **$9,000 to $18,000 per lineal metre**. [RICH-DMP3-19]
[RICH-DMP4-21] [RICH-DMP5-19] **[A]**

**Four guards, because this is a contradiction and the page must be fair to the City.**

1. **Only eleven sections across four phases were analysed**, and the 2016 report says its
   results "are only applicable at the sections analysed" and "cannot be assumed to be
   consistent for any other locations."
2. **The "will not meet" statements describe proposed upgraded cross-sections without
   ground improvement.** That is a design-stage finding about a specification, **not a
   condition survey of the dikes as they stand.**
3. **Mitigation is being designed, and is costed.** Overbuilding for post-earthquake
   freeboard, setbacks, densification. "Will not meet without ground improvement" is a
   problem the City is working, not a prediction of failure.
4. **The return periods are 1-in-475 and 1-in-2,475** and do not travel to a building-code
   or a dam figure without saying what each measures. See `CONVENTIONS.md`.

**The honest sentence, and it is the finding.** Richmond tells residents the dikes will
remain an intact barrier to flooding. The computer soil models behind that phrase are
published in the City's own plans, and at the 1-in-2,475-year event they find vertical
deformations exceeding the provincial dike guidelines at two of three tested sections
before reconsolidation settlement is added, and flow slides of several metres or more where
liquefaction is extensive and the riverbank steep. **Attribute both, date both, and do not
resolve them in our own voice.** The public page is a summary for residents and the reports
are engineering; the finding is the distance between them, and that distance is the reason
this site exists.

---

## What is not established

- **"12 paleo-liquefaction sites" and "median magnitudes 8.8–9.0".** Both appear in the
  earlier draft attached to the 31–57% figure. Neither could be confirmed in retrieved
  text; the *Earthquake Spectra* publisher page returns 403 to automated fetching and the
  thesis abstract, which carries the 31–57% figure, does not carry these. Searched
  September 2026. Obtain the paper directly. **[?]**
- **Whether the MVSMMP Custom Dataset Terms permit this site's use.** The site is free,
  carries no advertising and generates no revenue, which reads as non-commercial in
  ordinary usage — but ICLR's reservation explicitly covers electronic media and extends
  to statements and conclusions about the maps, which is broad enough that the judgement
  is not ours to make. **Action: written enquiry to Sheri Molnar at Western and to ICLR;
  record the reply in `../licensing.md`.** This is a blocking item for the map work.
  **[?]**
- **Earthquake-triggered landslide mapping for the Sea-to-Sky and Fraser Canyon
  corridors.** No dedicated published assessment was located. Searched September 2026
  across the MVSMMP map set (which covers Metro Vancouver municipalities and does not
  extend to either corridor), the DCRRA chapters and appendices, and PEIRS, which names
  earthquake-induced landslides as a cause of isolation without mapping them. This is a
  significant gap rather than an obscure one: both corridors are how aid reaches the
  Lower Mainland by road, and the province's own planning assumption is that resources
  are staged outside the impact area and pushed in. **[?]**
- **Howe Sound landslide-generated waves — closed elsewhere.** No longer open: a
  landslide into Howe Sound large enough to produce damaging displacement waves is
  assessed as unlikely, and federal mapping found none of the landslides that entered
  the sound were large enough to produce a significant tsunami. [BOWEN-TSU-19] **[A]**
  The finding and its caveats live in `mobility.md`; it is recorded here only so this
  list does not read as though the question is still open.
- **Cleveland and Seymour Falls dam assessments.** Independent authorities were updating
  these and the results were not public at time of research. Refresh trigger. **[?]** See
  `systems/` for the water-supply consequences.
- **The MVSMMP ArcGIS Hub portal could not be read** by automated fetching — it is
  JavaScript-rendered — so the per-layer licence statements there are unverified. The
  Borealis records are the citable route for terms. **[?]**
- **Phase II microzonation for Pitt Meadows, Maple Ridge and Langley** is due late 2026
  and will change the eastern-communities picture on this page. Not a gap in the record,
  a scheduled change to it. Recheck at publication.

---

## For the page

**The mechanism sentence.** The ground decides most of it. On the Fraser delta, shaking
turns loose, water-saturated sand into something that behaves like a liquid, so pipes
float, roads settle and foundations tilt — and on the deep basin beneath the whole
region, slow waves grow rather than fade, which is what tall buildings feel. The downtown
peninsula and the North Shore uplands sit on firmer ground and bedrock, and that
difference is larger than any difference between one building and its neighbour.

**Define liquefaction in the sentence it first appears in**, per the style guide, and use
the everyday description above rather than the engineering one.

**Guards that travel with the numbers.**

- The 100–250 year figure always says what it is a return period *of*: liquefaction
  triggering at a factor of safety of 1, in Richmond and Delta, from 787 CPT profiles.
  Never "Richmond liquefies every 100 years" unqualified, and never "the ground fails" —
  triggering is not surface damage.
- The comparison that makes it land is honest and needs no dramatising: this interval is
  shorter than the time since the last Cascadia earthquake. State it flatly. No
  "overdue", per the word list.
- The 31–57% figure names its condition: Cascadia interface events above M8.9.
- The basin amplification factors name their period (2 seconds) and their basin depth
  band. A factor without a period is meaningless and an expert will notice.
- DCRRA exposure percentages, if used, carry the 2,475-year hazard-zone method. They are
  not scenario outcomes.

**The strongest publishable finding on this page may be the code gap.** A provincial
assessment saying that Canada's national hazard model and building code do not account
for basin effects, while the US model and codes do, is a specific, checkable,
non-alarming statement about a real institutional difference. It also does the site's
work honestly: it explains why local microzonation exists and why it matters, without
implying that buildings are unsafe. Pair it with the amplification factors and stop —
do not extrapolate to what it means for any particular building.

**On the map.** The placeholder must name its dataset and say why it is a placeholder:
the layers exist, are excellent, and are not ours to redraw yet. Per the style guide,
nothing should look more finished than it is; per `../licensing.md`, the DFPS mains layer
is the first map the site can legitimately draw itself, so the flagship graphic moves
there while this one waits.

**On the corridors.** The absence of published earthquake-triggered landslide mapping for
Sea-to-Sky and the Fraser Canyon should ship visibly, and it should say what was searched.
It is a stronger sentence than a hedge: nobody has published this, and these are the roads
aid arrives on.

**Lever.** What the reader can do with this page is find out what they are standing on —
the municipal maps exist and are linked — and, if they are on the delta, treat utility
disruption as the planning case rather than building damage alone.
