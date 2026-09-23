# Figures

How a graphic gets made on this site. Read `docs/style-guide.md` §8 and §9
first: the visual rules are decisions, not preferences, and everything below is
those rules made buildable.

The worked examples are the two on `/after/water/`: read `water.tsx` next to this file alongside the rules. There are more elsewhere, on `/after/electricity/`, `/shaking/ground/`, `/scenarios/`, `/shaking/fire-following/`, `/method/` and `/getting-around/`.
Read `water.tsx` next to this file alongside the rules.

---

## The four rules a figure has to satisfy

1. **No new dependencies.** There is no charting library, no D3, no SVG
   toolchain, and none is coming. A figure is inline SVG written by hand in a
   Server Component.
2. **Nothing is fetched at runtime.** No external image, no tile server, no
   font beyond the two the site already loads.
3. **Colour is reserved for meaning**, and meaning never rests on hue alone.
4. **A figure is not exempt from WCAG AA** because it is a graphic. Text inside
   an SVG is text, and the finding must be available without the picture.

**A video is not a figure either, and it is the one place rule 2 gives way.**
Since 17 September 2026 `/shaking/` carries two, embedded from YouTube by
`components/video.tsx`. A photograph can be hosted; footage of a real earthquake
cannot, because the site has no licence to serve a copy, and `docs/licensing.md`
answers an unconfirmed licence by linking out. The embed is that link. What the
component holds instead of rule 2 — the no-cookie host, no autoplay, a named
frame — is in `docs/media.md` §"Video", and nothing in this file's kit is
involved.

**A photograph is not a figure and nothing here applies to it.** Since 12
September 2026 the site carries two, on `/shaking/ground/`, under the test in
`docs/style-guide.md` §8: a photograph shows a mechanism the page has described
and a reader has never seen. They are not drawn, they say nothing the prose has
not already said and sourced, and they may not produce a number.
`Photograph` in `components/photograph.tsx` renders them from the register in
`src/content/media.ts`; `docs/media.md` is the rule and the licence position. A
photograph does not go through this file's kit, and rule 2 still holds for it in
the only sense that matters: the file is hosted under `public/media/` and nothing
is fetched from another host.

---

## How a figure is authored

### No `viewBox`

This is the decision everything else follows from, and it is the opposite of
what most SVG advice says.

A `viewBox` scales the whole drawing uniformly, text included. Set the type to
read on a 390 px phone and it is oversized on a laptop; set it for the laptop
and the phone gets 8 px labels that fail AA and fail common sense. There is no
size that works at both ends.

So a figure has no `viewBox`. Instead:

- the `<svg>` is `width="100%"` with a **fixed pixel `height`**;
- **horizontal** positions and widths are **percentages** of the drawing width;
- **vertical** positions, and **every type size**, are **pixels**.

Text is then the same physical size at every width, the vertical layout never
reflows, and the drawing simply stretches into whatever column it is given.
`pct(value, domain)` in `figure-kit.tsx` is the whole of the scale maths.

The escape hatch, for the rare shape that cannot be expressed as a percentage
rectangle, is `At`: a nested `<svg>` takes the percentage anchor, and its
children are drawn in pixels relative to it. The arrowhead on the water clocks
figure is the only current use.

### The skeleton

```tsx
import {
  FigureCanvas, FigHeading, FigValue, FigText, FigRule,
  TrackBase, Bar, Axis, hatchId, FIG_COLOR, FIG_TYPE,
} from "./figure-kit";

const ID = "sewer-outage";        // unique on the page; namespaces pattern ids
const DOMAIN = 12;                // the figure's own units, stated once
const HEIGHT = 180;               // fixed pixels

export function SewerOutage() {
  const hatch = `url(#${hatchId(ID)})`;
  return (
    <FigureCanvas id={ID} height={HEIGHT}>
      <FigHeading y={14}>What the panel is about</FigHeading>
      <FigValue y={41}>The finding, in words</FigValue>

      <TrackBase y={74} height={16} />
      <Bar to={8} domain={DOMAIN} y={74} height={16} />
      <Bar from={8} to={12} domain={DOMAIN} y={74} height={16} fill={hatch} />
      <Axis y={90} domain={DOMAIN} values={[0, 4, 8, 12]} labelY={108} />
      <FigText y={128}>Weeks after the earthquake</FigText>
    </FigureCanvas>
  );
}
```

And in the page module, beside the prose it illustrates:

```tsx
<Figure
  alt="Sewer service in the worst affected areas is out for two to three months."
  caption={<>What the drawing shows, and where it came from. <Cite id="…" /></>}
>
  <SewerOutage />
</Figure>
```

### Where the words live

- **Short labels bound to the geometry** live in the figure component. SVG text
  does not wrap, so a label is a few words and never a sentence.
- **The caption, the alt text and the citation markers** live in the page
  module under `src/content/pages/`, beside the prose. They are copy, they
  reflow, and they belong with the words they sit next to.

Both are reader-facing, so both obey `docs/style-guide.md`, including §5: no em
dashes or en dashes in the site's own voice, Canadian spelling, ranges rather
than point estimates.

---

## Maps are the exception, and `map-viewer.tsx` is where the exception lives

A map is a measurement of ground rather than a chart of a domain, and that one
difference breaks two of the rules above. Both exceptions are contained in
`MapViewer`; a map component itself is still a Server Component drawing inline
SVG, and hands its geometry to the pane as children.

- **A map pane has a `viewBox`.** The no-viewBox rule exists to stop a viewBox
  scaling type. A map pane holds no type: the heading, the finding, the scale
  bar and the legend all sit outside it in HTML. The rule's reason does not
  reach inside the pane, and a viewBox is what makes a zoom possible.
- **A map pane is a Client Component**, because panning and zooming is
  interaction. The geometry is still built on the server and passed in as
  `children`, so the vendored data and the path building never reach the
  browser bundle.

What a map component supplies: `width` and `height` in its own coordinate
space, which set the pane's aspect ratio, and `kmWide`, the ground distance the
full width covers, from which the pane derives its scale bar at every zoom.
Correct the ground aspect once, on the outer group, and leave the path data in
whatever integer lattice the drawing uses.

Two things to get right, both of which have already been got wrong here:

- **A mark is three sides and a `z`.** `h5v5z` closes a right triangle, not a
  square. When the ShakeMap cells were 1.4 px nobody could see that half the
  area was missing, and area was the drawing's whole measure.
- **The scale bar's width is a percentage, never a pixel count**, so it is
  recomputed from the zoom and needs nothing measured. A percentage resolves
  against the nearest box that has a width of its own, so the bar's parent has
  to be full width rather than shrink-to-fit, or the scale silently stops being
  true.

`Figure` takes `interactive` for a graphic with controls of its own. It drops
the `role="img"` on the frame, which would otherwise make the graphic's own
buttons presentational and unreachable, and puts the finding in a screen-reader
paragraph instead.

### A symbol map has two more problems, and `fire-following.tsx` is the worked one

The ShakeMaps draw ground: a cell is a real area and magnifying it is the point.
A map of points is different in two ways that bite.

- **A symbol drawn in map units shrinks with the column.** A mark sized on a
  laptop is a little over half that diameter on a 390 px phone. Size a symbol at
  phone width and check it at the wider one, never the other way round, and
  prefer a solid mark: a ring fine enough to look right wide disappears narrow.
- **A symbol scales with the zoom, and there is nothing more to see once the
  marks have separated.** `MapViewer` takes `maxZoom` for that, and the number
  belongs to the map rather than to the pane, exactly as the default sixteen
  belongs to the ShakeMap grid. The fire hall map asks for four.

A third, which is not about maps at all: **paper on paper is a mark at 1:1
against its own ground**, so a donut filled with paper or a disc given a paper
halo both fail the QA pass's mark check, and both deserve to. Use `fill="none"`
and let the marks stand apart on their own.

---

## Legibility at phone width

The drawing area on a 390 px phone is roughly 318 px after the page gutter and
the figure's own padding. Everything below is sized for that:

- The smallest type is `FIG_TYPE.tick`, 12 px. Nothing goes under it.
- A label has to fit 318 px. As a rough check, 13 px type runs about 6 px per
  character, so roughly 48 characters. Count before you write it.
- Stack panels vertically. Two panels side by side collapse at phone width and
  SVG has no wrapping.
- `TickGrid` marks are percentage widths, so they thin down on a phone and
  square up on a laptop instead of colliding.
- Test at 390 px and again at the 672 px reading measure. Those are the two
  ends.

---

## Dark mode

Name colours through `FIG_COLOR`, which points at the custom properties in
`src/app/globals.css`. `globals.css` redefines them under
`prefers-color-scheme: dark`, so a figure follows for free. A hex value in a
figure is a bug: near-black strokes disappear on the dark ground and a baked-in
white panel glows.

The hatch pattern fills its own background with `--color-paper-raised` rather
than leaving it transparent, so it reads against a track in both themes.

---

## Encoding meaning without hue

Meaning never rests on hue alone: shape, count, position and written labels
carry it, so a figure survives greyscale.

The grammar, used consistently so it is learnable:

| Mark | Means |
|---|---|
| Solid fill | A figure a source published |
| Hatched fill | A range, or an open end |
| An axis | A domain a source gives. No source, no axis |
| One tick in a `TickGrid` | One counted thing |
| A rule between panels | Two things that must not be read as one |

Colour is used only when a figure encodes an ordinal classification, and then
it is the ramp from `FIG_COLOR` paired with the written label. Nothing is coloured to draw the
eye. Both water figures use no colour at all, which is the expected default:
they work identically in greyscale, and the only thing they lose in dark mode
is the paper behind the hatch.

**`FIG_COLOR.water` is the one colour that is not a value on a scale**, and it
is for water on a map and nothing else. See `docs/style-guide.md` §8. It is
held to the same 3:1 as `mark`, because a shoreline is load-bearing.

**A classification may take the ramp, and then the hue has to be
redundant.** The fire hall map is the worked case: three classes, carried by
three shapes, three sizes and three written labels with their counts, with the
ramp laid on top. Take every hue out and the drawing says exactly what it said
before, which is the test. Two discs of different diameters are not enough on
their own, which is why the third mark is a square: shape survives greyscale, a
colour-blind reader and a 390 px phone better than size does. And do not reach
for a fourth palette. A site with one accent and one ramp starts looking like a
dashboard the moment it acquires a second set of hues, and `bandUnknown` is
already the site's colour for a gap.

Every panel also writes its finding out in words, at `FigValue` size. A reader
who cannot resolve the geometry still has the number.

### The grammar does not reach a pictogram

Every mark in the table above encodes a quantity, so none of them applies to a
drawing that has none. `shaking.tsx` is the case: three bodies showing where to
put yours in the first seconds. It carries no axis, no fill grammar and no
scale, because there is nothing in it to measure. If a pictogram ever seems to
need an axis, it is the wrong drawing and the number belongs in a figure of its
own.

It also has no `FigHeading` and no `FigValue`. The rule that every panel writes
its finding out in words exists so that a reader who cannot resolve the
geometry still has the number. A pictogram has no number, and its finding is
the two or three words already sitting under each panel, so a heading above the
drawing only says them again. Where a pictogram's own labels are the finding,
they are the whole of the words it owes.

Two things it still owes. A pictogram is line work, and line work at the size a
body gets is heavier than `FIG_STROKE`: the rule that figures look like one
hand means the limb weights are named once at the top of the file and used
everywhere, not that a body is drawn at the weight of a hairline. And the thumb
test decides its greys like any other figure's. In `shaking.tsx` the person and
the table are `mark`, because covering either leaves nothing; the floor is
`track`, because the pose reads without it.

---

## Alt text

`Figure` puts `role="img"` and `aria-label={alt}` on the frame, and the `<svg>`
inside is `aria-hidden`, so a screen reader gets one sentence rather than forty
tick marks. That sentence is the whole of what a non-sighted reader receives,
so:

- **State the finding, not the file.** "Bulk water distribution is hard for
  four to five days; the network takes months", never "diagram of water
  restoration".
- Carry the numbers that are in the drawing.
- Carry the guard the drawing is built around. Both water figures exist to stop
  a specific misreading, and the alt text says so.
- One or two sentences. No dashes.

---

## Licence and attribution

`Figure` takes a `licence` slot that renders under the caption, because an
attribution has to travel with the graphic rather than sit on a separate page.

- **Numbers taken from a document we cite**: no `licence`. Put `<Cite>` markers
  in the caption. Both water figures are this case; the counts come through
  reporting on a freedom-of-information release and through provincial
  assessments, all cited on the page.
- **A graphic built from someone's dataset**: `licence` carries the exact
  attribution string from `docs/licensing.md`, verbatim, with its link to the
  licence. Open Government Licence strings keep their en dash, which §5 allows
  because a licence name is a proper name.
- **Not cleared**: do not build the figure. The rule in `docs/licensing.md` is
  that an unconfirmed licence means link out rather than reproduce. MVSMMP is
  the standing example: link only, and no derived layer.
- Where the licence also requires a statement about what the data covers, as
  OGL–Canada does for the scenario catalogue, that statement goes in the
  caption, not in a footnote elsewhere.

---

## Do not invent a number

If a figure needs a value the copy does not give, the figure is wrong, not the
copy. The water clocks figure is the case in point: the second panel has no
axis and no tick labels, because nobody has published how long restoration
takes, and an axis would have invited a reader to measure one off it.

A placeholder is still the honest answer for a graphic that cannot be built
yet. `MapPlaceholder` in `page-parts.tsx` names its dataset and says it is not
built. Nothing on this site should look more finished than it is.

---

## The parts list

`figure-kit.tsx`, with its doc comments:

| Export | What it is for |
|---|---|
| `FigureCanvas({ id, height })` | The padded frame and the `<svg>`. Every figure starts here |
| `pct(value, domain)` | The scale helper |
| `hatchId(id)` | The figure's own hatch pattern id |
| `FigText`, `FigHeading`, `FigValue` | The three type roles, at fixed pixel sizes |
| `FigRule({ y })` | A full-width hairline between panels |
| `TrackBase`, `Bar` | A bar and the track it sits in |
| `Axis({ domain, values })` | Ticks and their labels, with the end ticks nudged off the edge |
| `TickGrid`, `tickGridHeight` | A unit chart, one mark per counted thing |
| `At({ x })` | Pixel drawing anchored at a percentage |
| `FIG_COLOR`, `FIG_TYPE`, `FIG_STROKE` | Colours, the four type sizes, the one stroke weight |

Add to the kit when a second figure needs the same thing. A helper with one
caller belongs in that figure.
