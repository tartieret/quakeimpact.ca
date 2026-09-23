import type { ReactNode } from "react";

/**
 * The shared pieces every figure on this site is drawn from.
 *
 * There is no charting library and none is coming, so a figure is inline SVG
 * written by hand in a Server Component. `README.md` beside this file is the
 * convention; this file is the parts list. Read the README first.
 *
 * The one structural decision everything else follows from: a figure has **no
 * `viewBox`**. A viewBox scales its text along with its geometry, which means
 * a label sized to read on a phone is oversized on a laptop and a label sized
 * for a laptop is illegible on a phone. Instead the `<svg>` is `width="100%"`
 * with a fixed pixel `height`, horizontal positions are percentages of the
 * drawing width, and vertical positions and every type size are pixels. Text
 * is then the same physical size at 390 px and at 672 px, which is what lets a
 * figure meet the same contrast and legibility bar as the prose around it.
 */

/* ------------------------------------------------------------------ */
/* Tokens                                                              */
/* ------------------------------------------------------------------ */

/**
 * Figures name colours through the same custom properties as the rest of the
 * site, never as hex. That is what makes dark mode work: `globals.css`
 * redefines these under `prefers-color-scheme`, and a figure that referenced
 * `#14161a` would stay near-black on a near-black ground.
 *
 * The ramp (low, medium, high, unknown) is here for a figure that encodes an
 * ordinal classification. Nothing else is coloured: colour on this site carries meaning, and "this is the important
 * bar" is not one of the meanings. A figure that needs to separate two things
 * separates them with a label, a position, a shape or a hatch.
 *
 * Two greys, and the difference between them is the whole of the contrast
 * rule for figures. `mark` is a mark a reader has to see in order to read the
 * drawing: an axis, a scale line, a spine, a node outline, the rule between
 * two scales, the unfilled segment of a meter. Take it away and the figure
 * stops saying something it has no other way of saying, so it is held to the
 * 3:1 WCAG asks of a graphical object. `track` is the quiet ground such a
 * mark is read over: the empty run beside a bar, a gridline dropped from an
 * axis that already states the domain, the frame around a map. Take it away
 * and nothing is lost, so it stays furniture and stays quiet.
 *
 * There is no third grey. A mark that feels too heavy as `mark` is usually a
 * mark that was furniture all along.
 */
export const FIG_COLOR = {
  ink: "var(--color-ink)",
  muted: "var(--color-ink-muted)",
  faint: "var(--color-ink-faint)",
  /** Load-bearing line work. 3:1 on every ground a figure paints it on. */
  mark: "var(--color-mark)",
  /** The quiet ground a mark is read over. Deliberately under 3:1. */
  track: "var(--color-rule-strong)",
  /**
   * Water on a map, and nowhere else on the site. It is an identity rather
   * than a value: the sea is not a quantity, a severity or an emphasis, and a
   * shoreline drawn in the same grey as an axis makes a reader work out which
   * side of the line the land is on. Load-bearing, so it clears 3:1.
   */
  water: "var(--color-water)",
  paper: "var(--color-paper-raised)",
  bandLow: "var(--color-band-low)",
  bandMedium: "var(--color-band-medium)",
  bandHigh: "var(--color-band-high)",
  bandUnknown: "var(--color-band-unknown)",
} as const;

/**
 * Four type sizes, in pixels, and no others. They are deliberately close to
 * the prose scale: the smallest is the size of a caption, not the size of a
 * chart axis in a spreadsheet. Anything smaller than `tick` fails at arm's
 * length on a phone.
 */
export const FIG_TYPE = {
  /** What this panel is about. */
  heading: 14,
  /** The number or duration the panel exists to state. */
  value: 19,
  /** An annotation on the drawing. */
  label: 13,
  /** An axis label. The floor. */
  tick: 12,
} as const;

/** One stroke weight for rules and outlines, so figures look like one hand. */
export const FIG_STROKE = 1.5;

/* ------------------------------------------------------------------ */
/* Scale                                                               */
/* ------------------------------------------------------------------ */

/**
 * The scale helper. A value in a figure's own units becomes a percentage of
 * the drawing width, which is the only horizontal unit a figure uses.
 *
 *   pct(4, 5) === "80%"
 *
 * Every figure states its domain explicitly at the call site rather than
 * inferring it from the data, because a domain that moves with the data is a
 * domain the reader cannot check against the caption.
 */
export function pct(value: number, domain: number): string {
  return `${(value / domain) * 100}%`;
}

/* ------------------------------------------------------------------ */
/* The canvas                                                          */
/* ------------------------------------------------------------------ */

/** Ids have to be unique in a document, and a page can carry several figures. */
export function hatchId(id: string): string {
  return `${id}-hatch`;
}

/**
 * The hatch. It means the same thing everywhere on the site that it already
 * means in `.hatch` and in `NotPublished`: this is a range, or an open end,
 * rather than a figure somebody published. Never decoration.
 */
function FigureDefs({ id }: { id: string }) {
  return (
    <defs>
      <pattern
        id={hatchId(id)}
        width="6"
        height="6"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <rect width="6" height="6" fill={FIG_COLOR.paper} />
        <rect width="1.5" height="6" fill={FIG_COLOR.muted} />
      </pattern>
    </defs>
  );
}

/**
 * The drawing surface: a padded frame and an `<svg>` sized to it.
 *
 * `height` is in pixels and fixed, so a figure's vertical layout is the same
 * everywhere and nothing reflows. Width is whatever the column gives, and the
 * drawing stretches horizontally into it.
 *
 * The SVG is hidden from assistive technology on purpose. `Figure` puts
 * `role="img"` and the finding in `aria-label` on the frame around it, so a
 * screen reader reads one sentence rather than spelling out forty tick marks.
 */
export function FigureCanvas({
  id,
  height,
  children,
}: {
  /** Unique on the page. Namespaces the pattern ids. */
  id: string;
  /** The drawing height in pixels. Fixed at every width. */
  height: number;
  children: ReactNode;
}) {
  return (
    <div className="px-4 py-5 sm:px-6">
      <svg
        width="100%"
        height={height}
        aria-hidden="true"
        focusable="false"
        className="block font-sans"
      >
        <FigureDefs id={id} />
        {children}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Type                                                                */
/* ------------------------------------------------------------------ */

/**
 * A line of text in a figure.
 *
 * `y` is the baseline in pixels; there is no `dominantBaseline` anywhere,
 * because browsers disagree about it and a label half a line out of place is
 * a bug nobody sees until it ships. `x` takes a percentage for a position on
 * the scale or a number for a pixel offset from the left edge.
 *
 * SVG text does not wrap. A label that needs a comma in it belongs in the
 * caption, which is real HTML and reflows.
 */
export function FigText({
  x = 0,
  y,
  size = FIG_TYPE.label,
  weight = 400,
  fill = FIG_COLOR.muted,
  anchor = "start",
  children,
}: {
  x?: string | number;
  y: number;
  size?: number;
  weight?: number;
  fill?: string;
  anchor?: "start" | "middle" | "end";
  children: ReactNode;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight={weight}
      fill={fill}
      textAnchor={anchor}
    >
      {children}
    </text>
  );
}

/** What a panel is about. Sits above the value it introduces. */
export function FigHeading({ y, children }: { y: number; children: ReactNode }) {
  return (
    <FigText y={y} size={FIG_TYPE.heading} weight={600} fill={FIG_COLOR.ink}>
      {children}
    </FigText>
  );
}

/**
 * The number or duration the panel exists to state, set large.
 *
 * Every figure on this site writes its finding out in words as well as drawing
 * it. A reader who cannot resolve the geometry, on a small screen or in
 * greyscale or with the image half loaded, still has the finding.
 */
export function FigValue({ y, children }: { y: number; children: ReactNode }) {
  return (
    <FigText y={y} size={FIG_TYPE.value} weight={700} fill={FIG_COLOR.ink}>
      {children}
    </FigText>
  );
}

/* ------------------------------------------------------------------ */
/* Marks                                                               */
/* ------------------------------------------------------------------ */

/**
 * A full-width hairline. Separates two panels that must not be read as one.
 *
 * Load-bearing by definition: a reader who cannot see it runs their eye from
 * one scale onto the next, which is the misreading the rule exists to stop.
 * So it is drawn in `mark`, not in the furniture grey the page uses between
 * sections.
 */
export function FigRule({ y }: { y: number }) {
  return <rect x="0" y={y} width="100%" height="1" fill={FIG_COLOR.mark} />;
}

/**
 * The empty track a bar sits in, so the domain stays visible when the bar is
 * short.
 *
 * `track`, not `mark`. The domain is stated by the `Axis` under it and written
 * out in words at `FigValue` size, and the bar itself carries the figure
 * against the paper. Cover the track and nothing has been lost, which is the
 * test: it is the ground a bar is read over rather than a mark read off.
 */
export function TrackBase({ y, height = 16 }: { y: number; height?: number }) {
  return (
    <rect
      x="0"
      y={y}
      width="100%"
      height={height}
      rx="2"
      fill={FIG_COLOR.track}
    />
  );
}

/**
 * A bar, positioned and sized in the figure's own units.
 *
 * The site's grammar for bars, used consistently: a **solid** fill is a figure
 * a source published, and a **hatched** fill is a range or an open end. Pass
 * the hatch as `url(#...)` built from `hatchId`. That pairing is what lets a
 * duration read correctly with no colour at all.
 */
export function Bar({
  from = 0,
  to,
  domain,
  y,
  height = 16,
  fill = FIG_COLOR.muted,
  stroke,
}: {
  from?: number;
  to: number;
  domain: number;
  y: number;
  height?: number;
  fill?: string;
  stroke?: string;
}) {
  return (
    <rect
      x={pct(from, domain)}
      y={y}
      width={pct(to - from, domain)}
      height={height}
      rx="2"
      fill={fill}
      stroke={stroke}
      strokeWidth={stroke ? FIG_STROKE : undefined}
    />
  );
}

/**
 * An axis: a tick at each named value, and its label under it.
 *
 * The first and last ticks are nudged inward by their own width and their
 * labels anchored to the ends, so neither is half clipped by the edge of the
 * drawing. An axis is only ever drawn for a domain a source actually gives. A
 * duration nobody has published gets no axis, because an axis invites the
 * reader to read a number off it.
 *
 * Which is exactly why the ticks are drawn in `mark`: an axis is the one thing
 * on a figure a reader measures against, so it has to be visible.
 */
export function Axis({
  y,
  domain,
  values,
  labelY,
  length = 5,
  format = String,
}: {
  /** Top of the tick marks, normally the bottom of the track. */
  y: number;
  domain: number;
  values: number[];
  /** Baseline of the tick labels. */
  labelY: number;
  length?: number;
  format?: (value: number) => string;
}) {
  return (
    <g>
      {values.map((value, i) => {
        const first = i === 0;
        const last = i === values.length - 1;
        return (
          <g key={value}>
            <rect
              x={pct(value, domain)}
              y={y}
              width="1"
              height={length}
              fill={FIG_COLOR.mark}
              transform={
                first
                  ? undefined
                  : last
                    ? "translate(-1,0)"
                    : "translate(-0.5,0)"
              }
            />
            <FigText
              x={pct(value, domain)}
              y={labelY}
              size={FIG_TYPE.tick}
              fill={FIG_COLOR.faint}
              anchor={first ? "start" : last ? "end" : "middle"}
            >
              {format(value)}
            </FigText>
          </g>
        );
      })}
    </g>
  );
}

/**
 * A unit chart: one mark per counted thing, in rows.
 *
 * Use it where the count is the finding and the reader should be able to see
 * the size of it rather than take a bar on trust. Two grids drawn with the
 * same `columns` and the same mark size are comparable by area, which is how
 * two counts can sit on one figure without being added together.
 *
 * Marks are laid out in percentage columns with a 45 percent duty cycle, so
 * they thin down on a phone and square up on a laptop rather than colliding.
 */
export function TickGrid({
  count,
  y,
  columns = 24,
  markHeight = 10,
  rowGap = 5,
  duty = 0.45,
  fill = FIG_COLOR.muted,
}: {
  count: number;
  y: number;
  columns?: number;
  markHeight?: number;
  rowGap?: number;
  duty?: number;
  fill?: string;
}) {
  const inset = (1 - duty) / 2;
  return (
    <g>
      {Array.from({ length: count }, (_, i) => (
        <rect
          key={i}
          x={pct((i % columns) + inset, columns)}
          y={y + Math.floor(i / columns) * (markHeight + rowGap)}
          width={pct(duty, columns)}
          height={markHeight}
          fill={fill}
        />
      ))}
    </g>
  );
}

/** How tall a `TickGrid` with these settings will be. Lay the panel out with it. */
export function tickGridHeight({
  count,
  columns = 24,
  markHeight = 10,
  rowGap = 5,
}: {
  count: number;
  columns?: number;
  markHeight?: number;
  rowGap?: number;
}): number {
  const rows = Math.ceil(count / columns);
  return rows * markHeight + Math.max(rows - 1, 0) * rowGap;
}

/**
 * Draw in pixels at a position given as a percentage.
 *
 * Percentages cover rectangles and text, which is most of what a figure needs.
 * An arrowhead, or any other fixed-size shape anchored to a point on the
 * scale, needs a path, and path data has no percentages, so it goes inside one
 * of these: the nested `<svg>` takes the percentage, and its children are
 * drawn in pixels relative to it.
 */
export function At({
  x,
  y = 0,
  children,
}: {
  x: string | number;
  y?: number;
  children: ReactNode;
}) {
  return (
    <svg x={x} y={y} width="1" height="1" overflow="visible">
      {children}
    </svg>
  );
}
