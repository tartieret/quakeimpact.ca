# A map of the region's crossings, and what is published about each

**Date:** 12 September 2026
**Branch:** `figures/bridge-map`
**Replaces:** the `LandConnections` schematic on `/getting-around/`

---

## What this is

A map of the Lower Mainland's road, rail and transit crossings, drawn on the
coastline and river geometry the site already vendors. Each crossing is marked
with one of three states describing **what has been published about the
earthquake it was designed or assessed against**, and nothing else.

It appears on two pages with two captions, and the same crossing list feeds the
table `/after/transportation/` already carries.

## Why the obvious version is not the version

The request was a map colour-coded by each bridge's ability to resist an
earthquake, with planned upgrades and emergency routes drawn on it. Three parts
of that cannot be built honestly, and the reasons are already recorded in this
repository.

**Resistance is not a published per-bridge quantity.** `/after/transportation/`
exists to say so: crossings here have mostly been assessed, most assessments are
not public, and each figure that is public belongs to one event at one place on
one structure. Queensborough's 150 mm is a 475-year figure at two approach bents
after soil treatment. Golden Ears' 0.3 m is a 2,475-year figure at the main
piers after densification. Putting those on one ramp would assert a
comparability every source on that page denies. So the map encodes what the
sources actually give, which is whether a figure exists at all.

That turns out to be the stronger graphic. A table of ten crossings reads as a
documentation gap. A map shows the blank markers clustered on the city
bridges — Burrard, Granville, Cambie, Knight, Arthur Laing — which is to say on
exactly the crossings a person in Vancouver would use. That is the section's
finding, and it is currently invisible.

**Emergency routes are not drawn.** `docs/style-guide.md` §110: never present
emergency-responder infrastructure as public infrastructure, naming Disaster
Response Routes as the live example. `docs/licensing.md` §197: the City's
regional DRR map is link-only, do not reproduce. And since June 2018 the routes
are not designated pre-event at all, so any fixed network would be stale as well
as misleading. The `/getting-around/` section on this is titled "Disaster
Response Route signs mean stay off, not evacuate this way"; a map of them would
undo the page.

**Planned upgrades are carried as a per-crossing note, not a colour.** Two are
public and specific: the Massey replacement opens September 2031, and the
Pattullo replacement is already open. Neither is a property the other seventeen
crossings have, so it is a fact on a crossing rather than a second encoding.

## Data

Nineteen crossings from three sources, each cleared, each stated on its own
record rather than inferred.

| Source | Licence | Crossings |
|---|---|---|
| `WHSE_IMAGERY_AND_BASE_MAPS.MOT_ROAD_STRUCTURE_SP` (already vendored) | Open Government Licence – British Columbia | Lions Gate, Ironworkers Memorial Second Narrows, Oak Street, Queensborough, Alex Fraser, Port Mann, Pitt River, George Massey Tunnel, Canoe Pass |
| City of Vancouver `public-streets` | Open Government Licence – Vancouver | Burrard, Granville, Cambie |
| Wikidata `P625` | CC0 1.0 | Knight Street, Arthur Laing, Pattullo, Golden Ears, Dinsmore, No. 2 Road, North Arm (Canada Line) |

**Why a third source was needed.** The provincial layer is highway structures
only. Its `AGGREGATE MAJOR BRIDGE` roll-up does not contain Knight Street,
Pattullo, Golden Ears or the North Arm Bridge, all four of which the
transportation table discusses. A map missing them would contradict the table
printed beside it. `src/data/sources.ts` already warns that this layer "must not
be drawn as" the region's crossings; this spec is that warning being obeyed
rather than worked around.

**Why Wikidata clears.** Its own API states its terms, which is the standard
`docs/licensing.md` requires: "All structured data from the main and property
namespace is available under the Creative Commons CC0 License." Coordinates are
structured data in the main namespace. CC0 carries no attribution obligation and
no share-alike, so it adds nothing to `/licences/`. A new entry goes in
`docs/licensing.md` under "Cleared for use now" recording the check and its date.

**Corroboration.** The provincial layer holds two Pattullos: a live record 23 km
away near the international boundary, and a correctly placed 837 m geometry
filed under a name flagged "TO BE DELETED FROM BMIS". Wikidata's point falls on
the second, 31 m from its nearest vertex. So the third source independently
resolves which of the province's own two positions is the bridge, which is the
check worth recording in `docs/research/maps.md`.

**What is omitted, and said so.** The Moray Channel Bridge has no Wikidata item
and appears in no cleared layer. It is left off and the caption says which
crossing is missing. A hand-placed coordinate would be a number the site
invented, which `src/components/figures/README.md` rules out.

**Not drawn:** the 1,845 features the provincial layer actually returns in this
window are mostly sign gantries, retaining walls and highway overpasses. The
existing `AGGREGATE MAJOR BRIDGE` filter stays.

## The three states

Each crossing carries one, and each is a statement about the public record, not
about the structure.

| Mark | Meaning | Crossings |
|---|---|---|
| Solid | A quantitative figure is published | Massey Tunnel, Oak Street, Knight Street, Queensborough, Golden Ears, North Arm |
| Hatched | Published, but qualitative only | Alex Fraser, Pattullo replacement |
| Open outline | Nothing found in the public record | the remaining eleven |

The grammar is the site's existing one from `figures/README.md` — solid is a
figure a source published, hatch is a range or an open end — so it reads in
greyscale and needs no new token in `globals.css`. A tunnel takes its own shape,
because the Massey is not a bridge.

**Where the public record holds a paper nobody can read.** The Port Mann is the
case: three papers on its seismic design exist and all three are paywalled. It
takes the open outline, because the marks describe what a reader can actually
obtain, and a figure behind a paywall is not published for this purpose. The
table beside the map already draws the finer distinction in words, which is the
right place for it; a fourth mark would split the legend to carry one crossing.

**The third state's wording is load-bearing.** It says nothing has been found in
the public record, never that nothing exists. The table's own preamble is that
these crossings have mostly been assessed and the assessments are not public. A
`VerificationNote` carries the distinction and the date the search was made.

## Placement

**Both pages, one component, one list.**

`/after/transportation/` — the map goes directly above the existing `DataTable`
in "What has been assessed, and what has been published, are different lists".
Map locates, table details, one heading, one argument. This is where the
per-crossing detail already lives, fully cited; no new page and no link-out is
needed for it.

`/getting-around/` — the map replaces the `LandConnections` schematic in "The
land connections are fewer than the map suggests". The "Where the water is"
callout stays verbatim, and the section keeps its existing handoff sentence to
transportation. The schematic goes: a connections diagram on one page and a real
map of the same crossings on another invites reading the schematic as geography,
which is the misreading its own caption was written to prevent.

**How the duplication is kept safe.** The crossings are one typed array in
`src/content/`. The map markers read from it and so do the transportation table
rows. Adding a crossing is one array entry that appears in the table and in both
maps — the pattern CLAUDE.md already uses for systems. Only the two captions and
two alt texts differ, and those live in their page modules, where
`figures/README.md` says captions belong.

## Build

- **`scripts/data/build-region-geography.mjs`** — the getting-around window
  stops at −122.70 and Golden Ears is at −122.666, so a crossings window is
  added at roughly −123.40,49.00,−122.60,49.40. Two fetches are added: the City
  streets layer filtered to the three named bridge blocks, and a Wikidata entity
  call for seven QIDs. Each output crossing records which source it came from.
- **`src/data/region-crossings.json`** — rebuilt with all nineteen, each
  carrying `source`. The file's `scope` note is rewritten: it currently exists to
  say the data must not be drawn, and that is no longer the situation.
- **`src/data/sources.ts`** — the Wikidata and City-streets entries added; the
  provincial entry's disclaimer updated to say what the other two now cover.
- **`src/content/crossings.ts`** — the typed list: name, kind, position, state,
  the published note, and any replacement fact.
- **`src/components/figures/crossings-map.tsx`** — a Server Component drawing
  into the existing `MapViewer`. Legend in HTML outside the pane.
- **`src/content/pages/transportation.tsx`** — the map above the table; table
  rows read from the shared list.
- **`src/content/pages/getting-around.tsx`** — schematic swapped for the map,
  new caption and alt text.
- **`src/components/figures/getting-around.tsx`** — `LandConnections` removed.
  Its doc comment explaining why there is no DRR map is kept and moved, because
  that reasoning still holds and is worth not relearning.
- **`docs/licensing.md`**, **`docs/research/maps.md`**, **`docs/knowledge.md`** —
  the Wikidata clearance, the coordinate cross-check, and the finding that the
  provincial layer cannot carry this map alone.

## Accessibility

- Three states are shape and fill, never hue alone, per CLAUDE.md.
- Alt text states the finding: that the crossings with nothing published are
  concentrated on the city bridges. It carries the guard too, per
  `figures/README.md` — that a blank marker means nothing was found, not that a
  crossing is unassessed.
- Legend is HTML outside the pane, so it reflows and stays one physical size.
- `MapViewer` already supplies keyboard pan and zoom with visible focus, and
  renders the whole window legibly with JavaScript off.
- Checked at 390 px and at the 672 px measure, in both themes.

## Out of scope

- Any per-bridge severity, ranking or resilience score.
- Disaster Response Routes or any responder network.
- The overlapping PEIRS quotations in `/getting-around/` §1 and
  `/after/transportation/` §7. They are different quotations serving different
  arguments; trimming them is a copy decision, not this change.
