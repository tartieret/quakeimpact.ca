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
 * takes three. What this module adds is the reading: the earthquake each
 * crossing has a published figure for, whether that figure is an intent or an
 * assessment, what it bought, and which crossings have works under way.
 *
 * **A return period here is a design intent, not a prediction.** `/method/` says
 * so in prose and `/after/transportation/` quotes the Ministry saying it is not
 * retrofitting these bridges to remain in service, only to not collapse. Every
 * event below therefore carries what it bought, and the figure prints that
 * under its ramp rather than burying it in a caption.
 *
 * **A null event means no return period was found, never that nothing exists.**
 * Most of these crossings have been assessed and most assessments are not
 * public, so a mark implying otherwise would contradict the sentence above the
 * table it sits in.
 */

/**
 * The earthquake a crossing has a published figure for, as a class on the
 * map's ramp. Four classes, because four is what the sources give.
 */
export type EventBand = "150-240" | "475" | "1000" | "2475";

/**
 * Whether a figure is what somebody aimed at or what somebody later measured.
 * `/method/` draws this distinction explicitly: "a design intent is not a
 * prediction". Only the George Massey Tunnel is an assessment, and it is the
 * reason the distinction is carried at all - the tunnel now assesses below the
 * earthquake its retrofit was designed for, so drawing it at that intent would
 * be drawing the wrong number.
 */
export type EventKind = "intent" | "assessed";

export interface CrossingEvent {
  band: EventBand;
  /** The figure as the source states it. */
  label: string;
  kind: EventKind;
  /**
   * What that earthquake bought, in the source's own terms, including where
   * the source does not establish what service remains afterwards.
   */
  bought: string;
}

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
  /** Null where no return period was found in the sources read. */
  event: CrossingEvent | null;
  /**
   * A replacement or an upgrade that is funded and under way, where one is
   * published. It is deliberately not a mark on the ramp: work that is not
   * finished has not changed what a crossing now meets, and the Cambie is the
   * case that makes the distinction matter.
   */
  works?: string;
}

/**
 * The reading, by crossing id.
 *
 * Every entry with an event is a row of the table on
 * `/after/transportation/`, and the figure behind it is cited there. Nothing in
 * this file is a new claim: it is the table's own numbers, in a form a drawing
 * can use.
 *
 * **A null event means no return period was found, never that a crossing is
 * unassessed.** Most of these have been assessed and most assessments are not
 * public. Alex Fraser's design paper remains unread behind a paywall,
 * and Granville's upgrade names an objective
 * but no event; the table says which is which, because a map cannot.
 */
const READING: Record<
  string,
  { name?: string; crosses: string; event?: CrossingEvent; works?: string }
> = {
  // Burrard Inlet
  "lions-gate": { crosses: "Burrard Inlet" },
  "ironworkers-memorial-second-narrows": {
    crosses: "Burrard Inlet",
    event: {
      band: "475",
      label: "475 years",
      kind: "intent",
      bought:
        "Collapse prevention. The 1995 foundation design paper proposes ground improvement; it does not record its construction.",
    },
  },

  // False Creek, all three City of Vancouver bridges
  burrard: { crosses: "False Creek" },
  granville: { crosses: "False Creek" },
  cambie: {
    crosses: "False Creek",
    works: "Seismic upgrade under way, aimed at a 1 in 2,475 standard",
  },

  // North Arm of the Fraser
  "arthur-laing": { crosses: "North Arm of the Fraser" },
  "oak-street": {
    crosses: "North Arm of the Fraser",
    event: {
      band: "475",
      label: "475 years",
      kind: "intent",
      bought:
        "Prevent structural collapse. Reassessed in 2021 and 2022 against higher loads, and further retrofits identified; those figures are not public.",
    },
  },
  "knight-street": {
    crosses: "North Arm of the Fraser",
    event: {
      band: "1000",
      label: "1,000 years",
      kind: "intent",
      bought:
        "Survive without collapse, but need not be passable afterwards. The bridge was to stay usable by some traffic only after a 475-year event.",
    },
  },
  "north-arm": {
    crosses: "North Arm of the Fraser",
    event: {
      band: "475",
      label: "475 years",
      kind: "intent",
      bought:
        "Repairable damage. The designer's paper names no other design event than this and a 100-year one.",
    },
  },
  queensborough: {
    crosses: "North Arm of the Fraser",
    event: {
      band: "475",
      label: "475 years",
      kind: "intent",
      bought: "Prevent collapse. May or may not be functional afterwards.",
    },
  },

  // Middle Arm of the Fraser. The Moray Channel Bridge belongs here and is
  // absent from the data: no cleared source holds it.
  dinsmore: { crosses: "Middle Arm of the Fraser" },
  "no-2-road": { crosses: "Middle Arm of the Fraser" },

  // The Fraser itself
  "alex-fraser": { crosses: "Fraser River" },
  "george-massey-tunnel": {
    crosses: "Fraser River",
    event: {
      band: "150-240",
      label: "150 to 240 years",
      kind: "assessed",
      bought:
        "Its 2001 retrofit aimed at 475 years. The ground-improvement stage was cancelled, and it now meets its criteria for this range instead.",
    },
    works: "Replacement due for completion September 2031",
  },
  pattullo: {
    name: "Pattullo replacement",
    crosses: "Fraser River",
    event: {
      band: "2475",
      label: "2,475 years",
      kind: "intent",
      bought:
        "Lifeline performance under CSA S6 and the BC Supplement. The agreement names the class; the code's performance criteria have not been read.",
    },
    works: "Replacement open",
  },
  "port-mann": {
    crosses: "Fraser River",
    event: {
      band: "2475",
      label: "1 in 2,500 years",
      kind: "intent",
      bought:
        "The largest of four demand levels, described as an ultimate earthquake. Which performance the project required of this bridge, as against the other structures on it, is not published.",
    },
  },
  "golden-ears": {
    crosses: "Fraser River",
    event: {
      band: "2475",
      label: "2,475 years",
      kind: "intent",
      bought:
        "Must not collapse. It was to be repairable after a 1,000-year event and fully functional after a 475-year one.",
    },
  },
  "canoe-pass": { name: "Westham Island", crosses: "Fraser River" },

  // Pitt River
  "pitt-river": {
    crosses: "Pitt River",
    event: {
      band: "2475",
      label: "2,475 years",
      kind: "intent",
      bought:
        "Named a lifeline structure, built to accommodate this event. The release does not state what service must remain afterwards.",
    },
  },
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
    name: reading.name ?? record.name,
    kind: record.kind === "tunnel" ? "tunnel" : "bridge",
    at: [record.at[0], record.at[1]],
    crosses: reading.crosses,
    event: reading.event ?? null,
    works: reading.works,
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
  published: CROSSINGS.filter((c) => c.event).length,
  unpublished: CROSSINGS.filter((c) => !c.event).length,
  /** Crossings with a published figure in the 475-year class. */
  at475: CROSSINGS.filter((c) => c.event?.band === "475").length,
} as const;
