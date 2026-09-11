export type ScenarioId = "cascadia" | "crustal";

export type Band = "low" | "medium" | "high" | "unknown";

export type Phase = "hours" | "days" | "weeks" | "months";

export interface Scenario {
  id: ScenarioId;
  /** Short label for toggles and table headers. */
  short: string;
  /** Full name used in prose. */
  name: string;
  strapline: string;
  /** The official simulation this scenario is built on, named. */
  simulation: string;
  source: string;
  shaking: string;
  extent: string;
  tsunami: string;
  mutualAid: string;
  recurrence: string;
  /**
   * Weather is a condition of the scenario, not a system that fails, so it has
   * no band. Both official scenarios set one, and the two pull in opposite
   * directions — see `docs/research/scenarios.md`.
   */
  conditions: string;
}

export interface Impact {
  band: Band;
  /**
   * One sentence of mechanism. A coloured cell on its own reads as assertion.
   *
   * The published work assesses one design earthquake per system, so the same
   * sentence usually stands in both scenarios. Where it does, `evidence` says
   * which earthquake it was measured on.
   */
  mechanism: string;
  /** Source key from the source register. The key the mechanism sentence rests on. */
  source: string;
  /**
   * Which earthquake the evidence behind this cell actually models, in the
   * reader's terms. Present wherever the mechanism sentence was measured on a
   * different scenario from the column it sits in, so that a reader on the
   * crustal toggle is not shown a megathrust figure without being told.
   */
  evidence?: string;
}

export interface SystemEntry {
  slug: string;
  name: string;
  /** The "what people underestimate" line. */
  hook: string;
  /** Where in the timeline this system is felt worst. */
  bitesAt: Phase;
  impacts: Record<ScenarioId, Impact>;
  /** Slugs of systems this one waits on. Feeds the dependency graph. */
  dependsOn: string[];
  /** Build-order tier from the project plan. */
  tier: 1 | 2 | 3;
}

/**
 * A citable document. Everything on the site that states a fact points at one
 * of these — see `src/content/references.ts` for the register.
 */
export type ReferenceKind = "report" | "dataset" | "analogue" | "page";

/**
 * How the claim was reached. A confidence marker certifies a route, so the
 * route is a property of the citation rather than a note about our method.
 * See `docs/research/sources.md`.
 */
export type ReferenceRoute = "direct" | "media" | "vendor" | "landing" | "archive";

export interface Reference {
  id: string;
  kind: ReferenceKind;
  /** Title as it should be cited. */
  title: string;
  /** Author or issuing body. Omitted for internal pages. */
  publisher?: string;
  year?: number;
  /**
   * The document's own date, as the register states it — including "undated"
   * and "accessed 10 Sep 2026". A year alone cannot carry those.
   */
  date?: string;
  /** Document URL, or an internal path when `kind` is "page". */
  href: string;
  /** What this source is being used for. One line, shown in the popover. */
  note?: string;
  route?: ReferenceRoute;
  /**
   * The per-dataset licence position, where one is recorded. Absent means
   * ordinary citation: the facts are free to state and the expression is not.
   */
  licence?: string;
  /** A stand-in link. Rendered as a warning; never silently hidden. */
  placeholder?: boolean;
}

/**
 * What a page module exports alongside its prose. Route templates read this
 * and hold no content of their own.
 */
export interface PageMeta {
  route: string;
  title: string;
  /** Label in navigation and on cards. */
  nav: string;
  /** Kicker above the title, where the page belongs to a part of the site. */
  kicker?: string;
  /** The standfirst under the title. */
  standfirst: string;
  /**
   * Reference ids in the order they are first cited on the page. Marker
   * numbering is this array's order, so it is the page's citation contract.
   */
  references: string[];
}
