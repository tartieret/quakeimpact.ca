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
