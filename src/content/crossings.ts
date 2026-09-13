import crossingsFile from "@/data/region-crossings.json";

/**
 * The region's crossings, and what the public record holds about each.
 *
 * One list, read by the map in `components/figures/crossings-map.tsx` and by
 * the table on `/after/transportation/`. That is the point of it: a map and a
 * table that disagreed about which crossings have published figures would be
 * worse than either alone, and adding a crossing is one entry here rather than
 * three edits in two files.
 *
 * Geometry comes from `src/data/region-crossings.json`, which three cleared
 * sources produce; see `scripts/data/build-region-geography.mjs` for why it
 * takes three. What this module adds is the reading: which of the three states
 * below each crossing is in, and which have a dated replacement.
 *
 * **Every state is a statement about the public record, not about a
 * structure.** `none` says nothing was found, never that nothing exists or that
 * a crossing is unassessed. The page's own finding is that these crossings have
 * mostly been assessed and that most assessments are not public, so a mark that
 * implied otherwise would contradict the sentence above the table it sits in.
 */

/** What a reader can actually obtain about the earthquake a crossing faces. */
export type PublishedState =
  /** A return period, a displacement or a capacity is published. */
  | "quantitative"
  /** Published, but in words only: no return period, no figure. */
  | "qualitative"
  /** Nothing found in the public record. Not a claim that nothing exists. */
  | "none";

export interface Crossing {
  id: string;
  name: string;
  kind: "bridge" | "tunnel";
  /** Longitude and latitude. */
  at: [number, number];
  /**
   * The water it crosses, which is how the key beside the map is grouped. A
   * map fact, in the same class as the three the `/getting-around/` callout
   * states without a source: it claims nothing about earthquakes.
   */
  crosses: string;
  state: PublishedState;
  /** A replacement that is open or funded and dated. Two crossings have one. */
  replacement?: string;
}

/**
 * The reading, by crossing id.
 *
 * Every `quantitative` and `qualitative` entry here is a row of the table on
 * `/after/transportation/`, and the figure behind it is cited there. Nothing in
 * this file is a new claim: it is the table's own column, in a form a drawing
 * can use.
 */
const READING: Record<
  string,
  { crosses: string; state: PublishedState; replacement?: string }
> = {
  // Burrard Inlet
  "lions-gate": { crosses: "Burrard Inlet", state: "none" },
  "ironworkers-memorial-second-narrows": {
    crosses: "Burrard Inlet",
    state: "none",
  },

  // False Creek, all three City of Vancouver bridges
  burrard: { crosses: "False Creek", state: "none" },
  granville: { crosses: "False Creek", state: "none" },
  cambie: { crosses: "False Creek", state: "none" },

  // North Arm of the Fraser
  "arthur-laing": { crosses: "North Arm of the Fraser", state: "none" },
  "oak-street": { crosses: "North Arm of the Fraser", state: "quantitative" },
  "knight-street": { crosses: "North Arm of the Fraser", state: "quantitative" },
  "north-arm": { crosses: "North Arm of the Fraser", state: "quantitative" },
  queensborough: {
    crosses: "North Arm of the Fraser",
    state: "quantitative",
  },

  // Middle Arm of the Fraser. The Moray Channel Bridge belongs here and is
  // absent from the data: no cleared source holds it.
  dinsmore: { crosses: "Middle Arm of the Fraser", state: "none" },
  "no-2-road": { crosses: "Middle Arm of the Fraser", state: "none" },

  // The Fraser itself
  "alex-fraser": { crosses: "Fraser River", state: "qualitative" },
  "george-massey-tunnel": {
    crosses: "Fraser River",
    state: "quantitative",
    replacement: "Replacement opens September 2031",
  },
  pattullo: {
    crosses: "Fraser River",
    state: "qualitative",
    replacement: "Replacement open",
  },
  "port-mann": { crosses: "Fraser River", state: "none" },
  "golden-ears": { crosses: "Fraser River", state: "quantitative" },
  "canoe-pass": { crosses: "Fraser River", state: "none" },

  // Pitt River
  "pitt-river": { crosses: "Pitt River", state: "none" },
};

interface CrossingRecord {
  id: string;
  name: string;
  kind: string;
  at: number[];
}

interface CrossingsFile {
  crossings: CrossingRecord[];
  scope: string;
}

const FILE: CrossingsFile = crossingsFile;

/**
 * The merge, done once at module scope so a missing reading is a build error
 * rather than a marker silently drawn in the wrong state. The data build
 * already fails when a source stops supplying a crossing; this is the same
 * guard from the other end.
 */
export const CROSSINGS: Crossing[] = FILE.crossings.map((record) => {
  const reading = READING[record.id];
  if (!reading) {
    throw new Error(
      `No published-record reading for the "${record.id}" crossing. ` +
        "Every crossing in src/data/region-crossings.json needs one, or the " +
        "map would draw a mark that claims nothing.",
    );
  }
  return {
    id: record.id,
    name: record.name,
    kind: record.kind === "tunnel" ? "tunnel" : "bridge",
    at: [record.at[0], record.at[1]],
    ...reading,
  };
});

/** One crossing by id, so a page naming it cannot name one that is not drawn. */
export function crossing(id: string): Crossing {
  const found = CROSSINGS.find((c) => c.id === id);
  if (!found) throw new Error(`No crossing recorded with the id "${id}"`);
  return found;
}

/** What the data file says it covers and leaves out. The caption states it. */
export const CROSSINGS_SCOPE = FILE.scope;

/**
 * The order the key beside the map runs in: north to south, which is the order
 * a reader coming off the peninsula meets them.
 */
const WATER_ORDER = [
  "Burrard Inlet",
  "False Creek",
  "North Arm of the Fraser",
  "Middle Arm of the Fraser",
  "Fraser River",
  "Pitt River",
];

/** The crossings grouped by the water they cross, for the key. */
export const CROSSINGS_BY_WATER = WATER_ORDER.map((water) => ({
  water,
  crossings: CROSSINGS.filter((crossing) => crossing.crosses === water).sort(
    (a, b) => a.at[0] - b.at[0],
  ),
}));

/** Counted, never written down twice: the caption and the alt text state these. */
export const CROSSINGS_FACTS = {
  total: CROSSINGS.length,
  quantitative: CROSSINGS.filter((c) => c.state === "quantitative").length,
  qualitative: CROSSINGS.filter((c) => c.state === "qualitative").length,
  none: CROSSINGS.filter((c) => c.state === "none").length,
} as const;
