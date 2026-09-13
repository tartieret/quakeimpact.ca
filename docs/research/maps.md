# Maps

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 11 September 2026.

**Status.** The base-layer rule holds and is well supported: the ground, not the
municipality. The microzonation layers are not openly licensed, so ground
conditions ships with an outbound link, and the first map the site draws itself
is the Dedicated Fire Protection System. Its data is now acquired, and so are
the two scenario ShakeMaps and the region's coastline; see *What can be built
today*. See `../licensing.md` for the per-dataset position; this file records
what each layer can support, and what it cannot.

Note that `../licensing.md` and `build-order.md` both call that graphic the
"coverage boundary". The dataset turns out not to be a boundary, and the reason
that matters is under *The fire protection layer is not a boundary* below.

---

## The base-layer rule, and why the evidence supports it

Municipal choropleth would actively mislead. Richmond is uniformly poor ground;
Vancouver is split between bedrock on the downtown peninsula and the North Shore
uplands, and fill elsewhere. A map coloured by municipality draws a boundary that
the ground does not have, and hides the one it does. [MVSMMP] [CJES-2024] **[A]**

The province agrees, in its own assessment's limitations: the DCRRA's hazard
exposure analysis "does not incorporate existing seismic microzonation work that
has been completed at a detailed level, such as for the city of Metro Vancouver",
and its own seismic working group flagged that damage correlation with PGA is
poor for many structures. [DCRRA-APPC] **[A]** Those are the province's reasons
to prefer neighbourhood-scale microzonation over its own provincial layer for any
Metro Vancouver claim — which is also the site's reason.

---

## What can be built today

| Layer | Source | Licence | What it supports |
| --- | --- | --- | --- |
| Dedicated Fire Protection System mains | City of Vancouver Open Data | Open Government Licence – Vancouver **[A]** | The extent of the network, drawn rather than described. **Acquired 11 September 2026**, slug `dedicated-fire-protection-systems-dfps-water-mains`. |
| Vancouver city boundary | City of Vancouver Open Data | Open Government Licence – Vancouver **[A]** | Reference outline, so "outside the system" has an edge to be outside of. **Acquired 11 September 2026.** |
| Cascadia M9.0 ShakeMap | GSC scenario catalogue | Open Government Licence – Canada **[A]** | Scenario shaking, at dissemination-area resolution. **Acquired 11 September 2026** as `SIM9p0_CascadiaInterfaceBestFault`. |
| Georgia Strait M7.0 ShakeMap | GSC scenario catalogue | Open Government Licence – Canada **[A]** | The same, for the crustal scenario. **Acquired 11 September 2026** as `ACM7p0_GeorgiaStraitFault`. |
| Freshwater Atlas coastlines and rivers | GeoBC, BC Data Catalogue | Open Government Licence – BC **[A]** | Shoreline and river water for the getting-around map. **Acquired 11 September 2026**, licence confirmed on each record. |
| MOT road structures | BC Data Catalogue | Open Government Licence – BC **[A]** | Major provincial crossings, with the caveats below. **Acquired 11 September 2026.** |
| BC transmission lines | GeoBC, BC Data Catalogue | Open Government Licence – BC **[A]** | Corridor position only — **voltage attributes are withheld by agreement with BC Hydro**, so no map built from it may imply voltage or criticality. Not acquired. |

Everything acquired lives in `src/data`, is produced from the original by a
script in `scripts/data`, and has its licence, attribution string, source URL
and date of access recorded in `src/data/sources.ts`. `npm run data` rebuilds
all of it. The originals are cached outside the repository and are not
committed: what ships is the reduction, and the script is what makes the
reduction auditable.

### The fire protection layer is not a boundary

This file said the DFPS layer was "a single closed shape". It is not. The
dataset is 245 line segments of main — the network itself, with diameter and
material, not a service area. Its extent is the downtown peninsula, the West End
and False Creek, roughly `-123.168, 49.261` to `-123.112, 49.290`.

That changes what the flagship graphic is. **Drawing the mains is honest;
drawing a coverage boundary around them is not**, because any such boundary
would be a hull or a buffer the project invented, presented in the City's name.
The graphic to build is the network on the city outline, and the argument is
carried by how little of the city it reaches — which is stronger as fact than as
a line somebody drew.

### The ShakeMaps are point clouds, not rasters

The catalogue's ShakeMap is an irregular set of model sites, dense where people
live and sparse where they do not — 6,763 of them inside a Lower Mainland
window, out of 110,436 nationally for the Cascadia run. It cannot be drawn as a
smooth surface without interpolating, which would invent detail the model does
not have.

What is vendored is those sites averaged into cells of about 730 m by 665 m,
with each cell recording how many sites it holds so a thin cell can be drawn as
the thin evidence it is. That cell size is close to the catalogue's own stated
resolution, so it neither smooths away real structure nor implies more than the
model offers.

Both scenarios use the same site model, so the two maps share a cell grid and
are directly comparable. Peak ground acceleration is the measure both publish.
**The catalogue publishes a converted Modified Mercalli file for the Georgia
Strait scenario but not for Cascadia**, so MMI is carried for one scenario only.
Deriving MMI for the other would mean applying a ground-motion-to-intensity
equation ourselves — a research task with a citable answer, not a download.
Recorded as a verification item, not done. [?]

### The ShakeMaps are drawn on the Freshwater Atlas, and it stops at the border

**12 September 2026.** The scenario ShakeMaps now carry shoreline and river
water under the marks. Without it the cells float on paper and a reader has
nothing to locate the dark patch against, which is the one thing a map is for.

The water is the same two Freshwater Atlas layers as the getting-around map,
cut for a different window and at a different tolerance. `region-water.json` is
51 km across at 60 m; `region-coast.json` is the whole 160 km scenario window at
150 m, which is still well under a pixel at the width the figure is drawn, and
cutting it at 60 m would have shipped four times the vertices to draw the same
line. A reduction is only honest at the size it was cut for, so the script now
holds a window list rather than one bounding box.

**The layer is British Columbia's and has no geometry south of the
international boundary.** The catalogue's window reaches 48.956, so a strip
about 5 km deep along the bottom of both maps has model cells and no shoreline.
Fifteen of 3,910 cells sit in it. Nothing false is drawn — the coastline simply
stops — and the caption says the layer is provincial. An openly licensed
shoreline covering Point Roberts and Whatcom County was not looked for. [?]

**What the base layer confirmed.** No cell in either file falls in the open
Strait of Georgia, and with the shoreline drawn that is visible rather than
asserted. The grid is registered where the catalogue says it is.

### The crossings layer is incomplete, and that matters

`MOT_ROAD_STRUCTURE_SP` covers provincial highway structures. It yields nine
correctly placed major crossings in the window: Lions Gate, Ironworkers Memorial
Second Narrows, Oak Street, Queensborough, Alex Fraser, Port Mann, Pitt River,
Canoe Pass, and the George Massey Tunnel.

It does **not** contain the City of Vancouver and TransLink crossings — Burrard,
Granville, Cambie, Arthur Laing, Knight Street, Moray, Dinsmore, No. 2 Road. No
openly licensed layer holding them was found; the City's own `public-streets`
dataset has no structure attribute. [?] Searched: City of Vancouver Open Data
(198 datasets, none for bridges), BC Data Catalogue.

It also gets the Pattullo wrong. The layer's `PATTULLO` major-bridge record is a
100 m stub near the international boundary, about 20 km from the bridge; the
only correctly placed Pattullo geometry in the layer is filed under a name
flagged for deletion. It is excluded by name, and the exclusion is in the script
with its reason.

**So the crossings must never be drawn as "the crossings".** A map showing only
the provincial set would overstate how isolated Richmond and the peninsula are,
which is the opposite of the error this site can afford. Either label them as
what they are, or leave them off and let the water carry the argument.

---

## What is held

| Layer | Source | Position |
| --- | --- | --- |
| Liquefaction susceptibility, site class, amplification, slope instability | MVSMMP | **Link only.** Custom ICLR terms: map sheets unalterable, data layers share-alike, commercial and electronic publication of the maps, data or conclusions about them reserved to prior written approval. [MVSMMP-LIC] |
| Provincial microzonation portal | EMCR / GeoBC | **Link only.** Republishes MVSMMP; republication by a government hub does not launder ICLR's terms. |
| Six-hazard provincial exposure | BC Hazard Insights Tool (DCRRA) | **Link only.** ArcGIS Hub, no per-layer licence stated. Scoped by the province to provincial and regional analysis, not community or property-level decisions. [UBCM-DCRRA] **[A]** |
| Disaster Response Routes, regional | City of Vancouver | **Link only.** Static PDF, no stated licence. |

Two constraints would have survived approval, which is part of why it was not pursued.
The published map sheets are
unalterable, so the intended design — ground conditions as a base layer in the
site's own palette — has to be built from the data layers, not the sheets. And
building from the data layers makes the derived layer share-alike, so any
liquefaction layer the site generates would itself have to be published under
MVSMMP's terms with the citation and regional-use disclaimer attached.

---

## The overlay

Critical infrastructure drawn over liquefaction susceptibility remains the
strongest single graphic the site could carry, and it is held, because its base
layer is held.

The point locations are ready for a subset: fuel terminals, Iona and Annacis, the
crossings, and the reservoirs. Substation locations were not established under an
open licence [?].

**Standing position on substations: the site does not map them, and would not
even if an open source appeared.** Plotting the points at which a region loses
power, on a page about what breaks the region, is a different act from
describing the dependency in words. The argument the section needs is that the
grid has few substitutable nodes, and that survives without a map of where they
are.

---

## Drawing it without a mapping library

The site is a static export with no runtime network dependency, which rules out
tile servers, CDN basemaps and anybody else's embedded viewer. Every map here is
hand-authored SVG over vendored geometry, so size is a design constraint rather
than an afterthought.

The reductions are all the same three moves, in `scripts/data/lib/geo.mjs`:
Douglas–Peucker in metres, then coordinate rounding, then dropping the
duplicate vertices rounding leaves behind. No simplification library — the
algorithm is thirty lines and the project takes no new dependencies.

| File | Size | Reduced from | What was dropped |
| --- | --- | --- | --- |
| `fire-protection-mains.json` | 14.6 kB | 95.4 kB, 245 features, 932 vertices | Every attribute but diameter; 1 m tolerance; 5 decimal places, about 0.7 m. Four runs vanish: they are sub-metre stubs of 0.1 to 0.6 m that 5-decimal rounding collapses to a point. |
| `vancouver-boundary.json` | 1.9 kB | 19.5 kB, 494 vertices | 25 m tolerance, 4 decimal places. Reference outline only. |
| `shakemap-cascadia-m9.json` | 55.7 kB | 14.0 MB, 110,436 sites | Everything outside the Lower Mainland window and every spectral acceleration period; 6,763 sites averaged into 3,910 cells. |
| `shakemap-georgia-strait-m7.json` | 71.8 kB | 5.0 MB + 6.1 MB, 39,613 sites | The same, plus the catalogue's own MMI carried alongside PGA. |
| `region-coast.json` | 73.7 kB | 1.6 MB + 4.6 MB, 147,276 vertices | 150 m tolerance, 4 decimal places; river polygons under 20 hectares. 3,727 vertices remain. The whole scenario window, cut for the ShakeMap figure. |
| `region-water.json` | 42.0 kB | 612 kB + 958 kB, 44,904 vertices | 60 m tolerance, 4 decimal places; river polygons under 20 hectares. 2,132 vertices remain and the worst deviation from the survey geometry is 63 m. |
| `region-crossings.json` | 1.6 kB | 1.4 MB, 1,747 structures | Everything but the province's own major-bridge roll-up, plus the Massey Tunnel. |

**What 60 m means at the size these are drawn.** A figure about 700 px wide
across the 51 km getting-around window is roughly 73 m per pixel, so the worst
shoreline deviation is under a pixel. The fire protection figure is far tighter
— 4 km across the same 700 px, about 6 m per pixel — which is why the mains keep
metre precision and the coastline they sit on does not claim to.

The coastline is vendored as open lines rather than closed land polygons. The
Freshwater Atlas layer is linear, and the mainland runs off every edge of the
window, so there is no honest ring to close without inventing one along the
frame. Line art is what the geometry supports: shorelines stroked, river
polygons filled, land left as ground.

---

## What is not established

- **Modified Mercalli intensity for the Cascadia scenario.** The catalogue
  publishes a converted MMI file for `ACM7p0_GeorgiaStraitFault` and not for
  `SIM9p0_CascadiaInterfaceBestFault`. Converting it ourselves needs a cited
  ground-motion-to-intensity equation. [?]
- **Any openly licensed layer of the City of Vancouver and TransLink bridges.**
  Searched: City of Vancouver Open Data, BC Data Catalogue. [?]
- **The human-readable Open Government Licence – Vancouver text.** The licence
  is stated on the dataset record and returned by the portal API with its URL,
  which is the confirmation that matters. The prose at
  `vancouver.ca/your-government/open-data-licence.aspx` could not be read from
  here — Cloudflare returns 403 to non-browser clients — so the wording relied
  on is `../licensing.md`'s summary of 10 September 2026, not a fresh reading. [?]
- **Per-asset licence notices on the GSC release files.** `docs/licensing.md`
  asks for confirmation on each asset rather than at catalogue level. The
  repository states the licence in its own terms of use and attribution section;
  the individual CSVs carry no notice, because they are CSVs. That is as far as
  per-asset confirmation goes, and it is recorded as that rather than as more. [?]
- **DCRRA licence terms.** No rights statement was found in the front matter of
  the chapters read. BC government publications are normally OGL–BC, but that
  must be confirmed before any figure or map is reproduced rather than linked.
  [?] Searched: the chapter PDFs' front matter.
- **Substation and transmission corridor point locations** under an open licence.
  Searched: BC Data Catalogue, ArcGIS Hub, BC Hydro technical data pages. The one
  ArcGIS Hub candidate returns HTTP 404. BC Hydro distributes weekly mapping
  updates through the Integrated Cadastral Information Society, a membership
  body, not open data. [?]
- **The 2026 Vancouver Official Development Plan seismic hazard map**, which the
  City is integrating into building records. Possible new layer; not yet
  examined. [?]

---

## For the page

Say what the map is and is not. The catalogue layers carry a resolution caveat in
the catalogue's own words — the information is provided at approximately the
scale of Census dissemination areas — and a scope caveat, since the modelling
covers damage to buildings and their inhabitants from shaking and excludes
infrastructure, vehicles, aftershocks, liquefaction, landslides and fire
following. Both belong beside the map, not in a footnote.

Where a layer is linked rather than drawn, the honest line is that it is somebody
else's map and here is where it lives. A map the site cannot draw is not a gap in
the evidence, and the page should not imply that it is.
