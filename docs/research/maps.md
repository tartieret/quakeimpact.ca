# Maps

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.

**Status.** The base-layer rule holds and is well supported: the ground, not the
municipality. What has changed is that the intended flagship map cannot be built.
The microzonation layers behind it are not openly licensed, so ground conditions
ships with an outbound link and the first map the site draws itself is the fire
protection coverage boundary. See `../licensing.md` for the per-dataset position;
this file records what each layer can support, and what it cannot.

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
| Dedicated Fire Protection System mains | City of Vancouver Open Data | Open Government Licence – Vancouver **[A]** | The coverage boundary, drawn rather than described. Confirm the dataset slug on download. |
| Cascadia M9.0 ShakeMap, damage and casualty indicators | GSC scenario catalogue | Open Government Licence – Canada **[A]** | Scenario shaking, at dissemination-area resolution. |
| Georgia Strait M7.0 ShakeMap, damage and casualty indicators | GSC scenario catalogue | Open Government Licence – Canada **[A]** | The same, for the crustal scenario. |
| BC transmission lines | GeoBC, BC Data Catalogue | Open Government Licence – BC **[A]** | Corridor position only — **voltage attributes are withheld by agreement with BC Hydro**, so no map built from it may imply voltage or criticality. |

The DFPS boundary is the one to build first. It is cleared, it is a single
closed shape, and the whole point of the section is what falls outside it — which
is a map's job rather than a paragraph's.

---

## What is held

| Layer | Source | Position |
| --- | --- | --- |
| Liquefaction susceptibility, site class, amplification, slope instability | MVSMMP | **Link only.** Custom ICLR terms: map sheets unalterable, data layers share-alike, commercial and electronic publication of the maps, data or conclusions about them reserved to prior written approval. [MVSMMP-LIC] |
| Provincial microzonation portal | EMCR / GeoBC | **Link only.** Republishes MVSMMP; republication by a government hub does not launder ICLR's terms. |
| Six-hazard provincial exposure | BC Hazard Insights Tool (DCRRA) | **Link only.** ArcGIS Hub, no per-layer licence stated. Scoped by the province to provincial and regional analysis, not community or property-level decisions. [UBCM-DCRRA] **[A]** |
| Disaster Response Routes, regional | City of Vancouver | **Link only.** Static PDF, no stated licence. |

Two constraints survive even if ICLR approves. The published map sheets are
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
open licence [?], and there is a reasonable argument against mapping substations
on a public hazard site even if they were.

---

## What is not established

- **ICLR's reply** on MVSMMP reuse. Requested; terms recorded in
  `../licensing.md`. This is the blocking item for the map work.
- **The DFPS dataset slug** on the City of Vancouver portal. Confirm on download.
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
