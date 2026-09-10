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
  source: string;
  shaking: string;
  extent: string;
  tsunami: string;
  mutualAid: string;
  recurrence: string;
}

export interface Impact {
  band: Band;
  /** One sentence of mechanism. A coloured cell on its own reads as assertion. */
  mechanism: string;
  /** Source key from the source register. */
  source: string;
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

export interface Reference {
  id: string;
  kind: ReferenceKind;
  /** Title as it should be cited. */
  title: string;
  /** Author or issuing body. Omitted for internal pages. */
  publisher?: string;
  year?: number;
  /** Document URL, or an internal path when `kind` is "page". */
  href: string;
  /** What this source is being used for. One line, shown in the popover. */
  note?: string;
  /** A stand-in link. Rendered as a warning; never silently hidden. */
  placeholder?: boolean;
}
