import crossingsFile from "@/data/region-crossings.json";

/**
 * The region's crossings: where they are and what water they cross.
 *
 * One list, read by the map in `components/figures/crossings-map.tsx`, which
 * sits on `/after/transportation/` and `/getting-around/`. Adding a crossing is
 * one entry here.
 *
 * Geometry comes from `src/data/region-crossings.json`, which three cleared
 * sources produce; see `scripts/data/build-region-geography.mjs` for why it
 * takes three. What this module adds is the water each crossing belongs to and,
 * where the owner has published one, a replacement or upgrade under way.
 *
 * **It carries no design earthquake.** An earlier version graded each crossing
 * by the return period in its design paper. A bridge engineer's review
 * (September 2026) was that those figures, read without the current assessment
 * of each structure, say little about how it would perform, and most current
 * assessments are not public. The rule is in `docs/knowledge/research.md`.
 */

export interface Crossing {
  id: string;
  name: string;
  kind: "bridge" | "tunnel";
  /** Longitude and latitude. */
  at: [number, number];
  /**
   * The water it crosses, which is how the key beside the map is grouped. A
   * map fact: it claims nothing about earthquakes.
   */
  crosses: string;
  /**
   * A replacement or a seismic upgrade the owner has published as funded and
   * under way, or just finished. It is a fact about the works, not a grade of
   * the crossing, and the map draws it in words rather than as a mark.
   */
  works?: string;
}

/** The reading, by crossing id. */
const READING: Record<
  string,
  { name?: string; crosses: string; works?: string }
> = {
  // Burrard Inlet
  "lions-gate": { crosses: "Burrard Inlet" },
  "ironworkers-memorial-second-narrows": { crosses: "Burrard Inlet" },

  // False Creek, all three City of Vancouver bridges
  burrard: { crosses: "False Creek" },
  granville: { crosses: "False Creek" },
  cambie: { crosses: "False Creek", works: "seismic upgrade under way" },

  // North Arm of the Fraser
  "arthur-laing": { crosses: "North Arm of the Fraser" },
  "oak-street": { crosses: "North Arm of the Fraser" },
  "knight-street": { crosses: "North Arm of the Fraser" },
  "north-arm": {
    name: "North Arm (Canada Line)",
    crosses: "North Arm of the Fraser",
  },
  queensborough: { crosses: "North Arm of the Fraser" },

  // Middle Arm of the Fraser. The Moray Channel Bridge belongs here and is
  // absent from the data: no cleared source holds it.
  dinsmore: { crosses: "Middle Arm of the Fraser" },
  "no-2-road": { crosses: "Middle Arm of the Fraser" },

  // The Fraser itself
  "alex-fraser": { crosses: "Fraser River" },
  "george-massey-tunnel": {
    crosses: "Fraser River",
    works: "replacement due in 2031",
  },
  pattullo: {
    name: "stal̕əw̓asəm",
    crosses: "Fraser River",
    works: "replaced the Pattullo in 2026",
  },
  "port-mann": { crosses: "Fraser River" },
  "golden-ears": { crosses: "Fraser River" },
  "canoe-pass": { name: "Westham Island", crosses: "Fraser River" },

  // Pitt River
  "pitt-river": { crosses: "Pitt River" },
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
        "map would draw a crossing the key cannot place.",
    );
  }
  return {
    id: record.id,
    name: reading.name ?? record.name,
    kind: record.kind === "tunnel" ? "tunnel" : "bridge",
    at: [record.at[0], record.at[1]],
    crosses: reading.crosses,
    works: reading.works,
  };
});

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

/** Counted, never written down twice: the captions and the alt text state it. */
export const CROSSINGS_FACTS = {
  total: CROSSINGS.length,
} as const;
