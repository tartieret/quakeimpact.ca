# Knowledge: colour, figures, maps and photographs

The measurements and reasons behind the visual rules. The rules themselves are in
`../style-guide.md` §8–9, `src/components/figures/README.md` and `../media.md`.

## Colour tokens are floors, set on the least forgiving ground

- **`--color-ink-faint`** is `#666a6e` light and `#8b8f94` dark. The binding ground is
  `--color-accent-soft`, the tint under the impact cell and a hovered card, where they
  measure 4.66:1 and 4.62:1. Tuned on paper, the earlier values failed AA there. Anything
  quieter fails.
- **Colour that is also text has to pass as text.** `BandPill` sets its label in ink and
  leaves the hue to the meter; medium `#b57a14` measured 3.37:1 as type.
- **`--color-mark`** (`#868682` light, `#6e747b` dark: 3.65:1 and 3.62:1 on raised
  paper, above 3.1:1 on the accent tint) is for any mark a reader needs, under WCAG
  1.4.11. The rule greys stay furniture: section dividers and card borders, about 1.3:1
  to 1.7:1, whose quiet is part of the site's register. The style guide's thumb test
  decides which a mark is. `FIG_COLOR` offers only `mark` and `track`, so a figure cannot
  reach for a furniture grey, and `BandMeter`'s unfilled segments are `mark` because they
  carry the denominator.
- **Sage and neutral grey have almost the same luminance** (4.70 and 4.85 against
  white), so two classes in those colours cannot be told apart by size alone. The fire
  hall map's third class is a square.

## A mark over a bar needs a ground of its own

SVG paints in document order, so a mark drawn over a bar is drawn on the bar's colour.
The `/prepare/` open-end arrowhead was muted on muted, 1:1.

- **A slot**: clear a `--color-paper-raised` rectangle, then draw into it (`SlottedRule`;
  the arrowhead went to 6.4:1). A slot is bounded by what it clears, not by its mark. It
  stops where the bar stops, one segment per bar, or it erases row labels. It stays in
  the outer drawing, because a nested `<svg>` such as `At` hides the real ground from
  anything measuring it.
- **An overhang**: run the mark past the bar so the part that carries the reading is on
  paper (`DayStop`). No single grey clears 3:1 against ink and mid-grey at once.
- **A knockout with nothing under it is a mark with no ground.** A paper fill on the
  paper frame paints nothing (`LandNode`, the `/method/` boxes), and the honest form is
  `fill="none"`. Name what a fill covers before writing it.
- A closed end is flush and stops against an upright; an open end is cut back and
  detaches across a gap of paper.

## Size one unit on screen before anything else

The scenario ShakeMaps satisfied every frame rule at 300 px, and a cell was 1.4 px. For a
drawing whose unit is a real thing, work out one unit's size on screen first; under about
3 px, the figure does not work at that size. The same smallness hid `h5v5z` drawing
right triangles, half of every cell's area: a drawing too small to read is too small to
review. `map-viewer.tsx` is the result, and its exceptions to the figure rules are in the
figures README.

## A map needs its geography before its encoding

Marks without a shoreline cannot be located, whatever the colour ramp. The Freshwater
Atlas coastlines and rivers (OGL–BC) are cut per window in
`scripts/data/build-region-geography.mjs`: the 160 km scenario window at a 150 m
tolerance, about a fifth of the 730 m model cell, because a line finer than the grid under
it is false precision at any zoom. A base layer also checks registration: no ShakeMap
cell falls in the open Strait.

**Measure the distance between duplicated strings before trusting gzip.** Two copies of
the shoreline 85 kB apart sat outside gzip's 32 kB window and cost 18 kB over the wire,
an eighth of the page, so they became one hidden `defs` and `use`. The two fire-following
maps' copies sit a few kilobytes apart and stay inline, which also keeps the two figures
independent.

## Photographs

The rules are in `../media.md` and style guide §8: a photograph shows a mechanism and
never generates a claim, open the file before writing its alt text, measure `ratio`,
prefer September 2010 to February 2011, and a photograph of here is not an analogue.
Behind them:

- **The ban on disaster photography was dropped on 12 September 2026**, on the project
  owner's call that it was bad positioning. Its one real objection was about tone stated
  as rigour, and it stopped the site showing what had happened to a real street.
- **Alt text written from a brief was wrong four times** in the first six photographs: a
  residential street called commercial, "sink holes" that were vented silt, an invented
  bus stop, boarded shops called undamaged. Every word was plausible and sourced.
- **Openly licensed Vancouver imagery is scarce.** A blue DFPS hydrant search found one
  usable file, CC BY-NC-SA, and nothing under a licence allowing commercial use.
  Christchurch material is abundant and freely licensed.
- The media register is written by hand rather than generated from `sources.md`, because
  a photograph is not a source.

## Before building a filter, count the rows it changes

The scenario toggle changed two of thirteen band pills, one paragraph and one weather
line, because most published work assesses one design earthquake per system. A filter
over a dimension the evidence does not resolve manufactures a distinction and hides the
comparison that was the finding. The decision is in `../site-overview.md` §9. Removing it
also removed the first-paint flash, which a static export cannot prevent: a stored
preference is applied only after hydration, and an inline head script cures that only
for a preference expressible as a CSS-readable attribute.
