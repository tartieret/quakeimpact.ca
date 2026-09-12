import { SYSTEMS } from "@/content/site";
import {
  FIG_COLOR,
  FIG_TYPE,
  FigHeading,
  FigText,
  FigValue,
  FigureCanvas,
  TickGrid,
  hatchId,
} from "./figure-kit";

/**
 * The drawing on `/dependencies/` and on the home page.
 *
 * A drawn graph asserts every edge it draws, and that is the problem this
 * figure exists to solve rather than to ignore. The `dependsOn` entries in
 * `src/content/site.ts` are what each system's own page names as the systems it
 * waits on. They are the content model. They are not evidence, and the copy on
 * `/dependencies/` says so in as many words: three of those connections are
 * shipped as visible gaps, the most important being that nothing published says
 * how much of the region's water distribution depends on powered pumping.
 *
 * So the figure never draws a line between two systems. Lines are what make a
 * diagram assert. It counts instead, and it counts in two colours of one mark:
 * a solid mark is a link a published document names, a hatched mark is a link
 * nobody has established. That is the site's existing grammar, unchanged: solid
 * is what a source published, hatch is what is open. It survives in greyscale,
 * because the two marks differ in texture rather than in hue, and the finding
 * it carries is written out in words above it for a reader who cannot resolve
 * either.
 *
 * The counts come from `SYSTEMS`, so adding a system or an edge moves the
 * drawing. The one thing hand written here is `DOCUMENTED`, which is the list
 * of links a document names and carries the document beside each one.
 */

/* ------------------------------------------------------------------ */
/* Which links a document stands behind                                */
/* ------------------------------------------------------------------ */

/**
 * The links on the list that a published document names, written as
 * `waiter>waited-on` to match the direction of `dependsOn`.
 *
 * The test for entry is narrow on purpose: `/dependencies/` has to cite a
 * document for that specific pair. A link that is obvious, or that this site
 * asserts in its own voice, does not qualify. Six of the twenty nine links pass,
 * and the figure's whole job is to show that the other twenty do not.
 */
const DOCUMENTED = new Set<string>([
  // 267 modelled main failures, about 60 of them at river and inlet crossings,
  // and a crew has to reach each one in the published clearing order.
  // MV-WATER-22 with MV-DEBRIS-17.
  "water>transportation",
  // Road access to the airport cut for the first few days because every bridge
  // onto Sea Island is damaged; and loss of road access to Roberts Bank
  // Terminal 2 through failure of the causeway. AIR-2013, RBT2-PANEL-20.
  "large-infrastructure>transportation",
  // Help from outside arrives along the same damaged routes, and the province
  // states the isolation in its own planning assumptions. PEIRS, DCRRA-2025.
  "outside-help>transportation",
  // Fuel is required for "the distribution of all other supplies, first
  // responder activities", which is what clearing and repairing a road is.
  // PEIRS.
  "transportation>fuel",
  // And fuel moves by road, under supply chains the same document expects to be
  // inoperable. PEIRS.
  "fuel>transportation",
  // Documented as an absence, which still documents the link: nothing in Canada
  // requires a mobile phone site to hold any backup power, and the regulator
  // opened a proceeding in September 2025 to decide what it should be.
  // CRTC-2025-226.
  "communications>electricity",
]);

const isDocumented = (waiter: string, waitedOn: string) =>
  DOCUMENTED.has(`${waiter}>${waitedOn}`);

/** A system other systems wait on, and how much of that is established. */
interface Hub {
  slug: string;
  name: string;
  /** Systems whose own page names this one. */
  total: number;
  /** How many of those links a document names. */
  documented: number;
}

const HUBS: Hub[] = SYSTEMS.map((target) => {
  const waiting = SYSTEMS.filter((s) => s.dependsOn.includes(target.slug));
  return {
    slug: target.slug,
    name: target.name,
    total: waiting.length,
    documented: waiting.filter((s) => isDocumented(s.slug, target.slug)).length,
  };
})
  .filter((hub) => hub.total > 0)
  .sort(
    (a, b) =>
      b.total - a.total ||
      b.documented - a.documented ||
      a.name.localeCompare(b.name),
  );

const TOTAL_LINKS = SYSTEMS.reduce((n, s) => n + s.dependsOn.length, 0);

const DOCUMENTED_LINKS = SYSTEMS.reduce(
  (n, s) => n + s.dependsOn.filter((dep) => isDocumented(s.slug, dep)).length,
  0,
);

/** Systems nothing on the list waits on. They have no row, so the figure says so. */
const OFF_CHART = SYSTEMS.length - HUBS.length;

/**
 * One mark is one system. Every row is drawn in the same number of columns as
 * the longest row, so the rows are comparable by length rather than each one
 * stretching to fill the width.
 */
const COLUMNS = Math.max(...HUBS.map((hub) => hub.total));

/* ------------------------------------------------------------------ */
/* Geometry                                                            */
/* ------------------------------------------------------------------ */

const ID = "dependency-hubs";

const HEADING_Y = 14;
const VALUE_Y = 41;

const SWATCH_W = 22;
const SWATCH_H = 12;
const LEGEND_A_Y = 58;
const LEGEND_B_Y = 76;
/** The swatch and its label share a line; the label sits on this baseline. */
const legendTextY = (top: number) => top + SWATCH_H - 2;

const ROWS_Y = 108;
const ROW_PITCH = 52;
const MARKS_OFFSET = 8;
const COUNT_OFFSET = 36;
const MARK_H = 12;

const lastRow = ROWS_Y + (HUBS.length - 1) * ROW_PITCH;
const FOOTER_A_Y = lastRow + COUNT_OFFSET + 26;
const FOOTER_B_Y = FOOTER_A_Y + 22;
const HEIGHT = FOOTER_B_Y + 10;

const plural = (n: number, one: string, many: string) =>
  `${n} ${n === 1 ? one : many}`;

/**
 * Where the coupling concentrates, and how little of it is established.
 *
 * Six systems have anything waiting on them at all, and three of those six
 * carry twenty two of the twenty nine links. That is the shape of the argument
 * the copy makes in prose: fuel, then roads, then everything that waits on
 * roads.
 *
 * There is no axis. An axis is a domain a source gives, and nobody has
 * published this list; the marks are counted things, which is the one thing a
 * reader may fairly read off the drawing.
 */
export function DependencyHubs() {
  const hatch = `url(#${hatchId(ID)})`;

  return (
    <FigureCanvas id={ID} height={HEIGHT}>
      <FigHeading y={HEADING_Y}>Systems that other systems wait on</FigHeading>
      <FigValue y={VALUE_Y}>
        {DOCUMENTED_LINKS} of {TOTAL_LINKS} links documented
      </FigValue>

      {/* The key. Two marks, one above the other, so neither label has to fit
          beside the other at phone width. */}
      <rect
        x="0"
        y={LEGEND_A_Y}
        width={SWATCH_W}
        height={SWATCH_H}
        fill={FIG_COLOR.muted}
      />
      <FigText
        x={SWATCH_W + 8}
        y={legendTextY(LEGEND_A_Y)}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        A published document names this link
      </FigText>

      <rect
        x="0"
        y={LEGEND_B_Y}
        width={SWATCH_W}
        height={SWATCH_H}
        fill={hatch}
      />
      <FigText
        x={SWATCH_W + 8}
        y={legendTextY(LEGEND_B_Y)}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        No document names it
      </FigText>

      {HUBS.map((hub, i) => {
        const top = ROWS_Y + i * ROW_PITCH;
        return (
          <g key={hub.slug}>
            <FigText
              y={top}
              size={FIG_TYPE.label}
              weight={600}
              fill={FIG_COLOR.ink}
            >
              {hub.name}
            </FigText>
            {/* Every mark hatched, then the documented ones painted over the
                same positions. Solid wins where a document exists. */}
            <TickGrid
              count={hub.total}
              columns={COLUMNS}
              y={top + MARKS_OFFSET}
              markHeight={MARK_H}
              duty={0.6}
              fill={hatch}
            />
            <TickGrid
              count={hub.documented}
              columns={COLUMNS}
              y={top + MARKS_OFFSET}
              markHeight={MARK_H}
              duty={0.6}
              fill={FIG_COLOR.muted}
            />
            <FigText
              y={top + COUNT_OFFSET}
              size={FIG_TYPE.tick}
              fill={FIG_COLOR.faint}
            >
              {plural(hub.total, "system waits", "systems wait")} on it,{" "}
              {plural(hub.documented, "link", "links")} documented
            </FigText>
          </g>
        );
      })}

      <FigText y={FOOTER_A_Y}>One mark is one waiting system.</FigText>
      <FigText y={FOOTER_B_Y} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        {OFF_CHART} systems have nothing on the list waiting on them.
      </FigText>
    </FigureCanvas>
  );
}
