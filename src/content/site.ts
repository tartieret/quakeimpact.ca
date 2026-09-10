import { loremLine } from "./lorem";
import type { Band, Phase, Scenario, ScenarioId, SystemEntry } from "./types";

export const SITE = {
  /** Working title. Domain and name are deferred until the MVP content exists. */
  name: "After the Shaking",
  tagline:
    "What a major earthquake does to the Lower Mainland — and for how long",
  status: "Draft — structure only. All body text is placeholder.",
};

/* ------------------------------------------------------------------ */
/* Scenarios                                                           */
/* ------------------------------------------------------------------ */

export const SCENARIOS: Record<ScenarioId, Scenario> = {
  cascadia: {
    id: "cascadia",
    short: "Cascadia M9",
    name: "Cascadia M9 megathrust",
    strapline: "Worse for Vancouver's ability to be helped",
    source: "Offshore subduction interface",
    shaking: "Moderate intensity, very long duration — minutes",
    extent: "Northern California to BC — a regional catastrophe",
    tsunami: "Outer coast; limited effect inside Burrard Inlet",
    mutualAid: "Unavailable — the whole coast is asking at once",
    recurrence: "Known interval; last event 1700",
  },
  crustal: {
    id: "crustal",
    short: "Crustal M7",
    name: "Shallow crustal M7",
    strapline: "Worse for Vancouver itself",
    source: "Strait of Georgia / near-region shallow crust",
    shaking: "High intensity, short duration",
    extent: "Concentrated and local",
    tsunami: "Not the primary concern",
    mutualAid: "Available — the rest of the country responds",
    recurrence: "Rarer near the city, far more destructive to it",
  },
};

export const SCENARIO_ORDER: ScenarioId[] = ["cascadia", "crustal"];

/* ------------------------------------------------------------------ */
/* Impact bands                                                        */
/* ------------------------------------------------------------------ */

export const BANDS: Record<
  Band,
  { label: string; duration: string; extent: string; dependency: string }
> = {
  low: {
    label: "Low",
    duration: "Hours to a few days",
    extent: "Localised",
    dependency: "Restores on its own",
  },
  medium: {
    label: "Medium",
    duration: "Days to weeks",
    extent: "Patchy; worst on poor ground",
    dependency: "Waits on one other system",
  },
  high: {
    label: "High",
    duration: "Weeks to months, sometimes longer",
    extent: "Regional",
    dependency:
      "Blocked by cascading failures and by competition for scarce crews, fuel and materials",
  },
  unknown: {
    label: "Not yet assessed",
    duration: "—",
    extent: "—",
    dependency: "Awaiting a source",
  },
};

export const PHASES: { id: Phase; label: string; window: string }[] = [
  { id: "hours", label: "Hours", window: "0–24 h" },
  { id: "days", label: "Days", window: "1–7 days" },
  { id: "weeks", label: "Weeks", window: "1–8 weeks" },
  { id: "months", label: "Months", window: "2 months +" },
];

/* ------------------------------------------------------------------ */
/* Part 2 — systems                                                    */
/* ------------------------------------------------------------------ */

const sys = (
  slug: string,
  name: string,
  bitesAt: Phase,
  tier: 1 | 2 | 3,
  bands: [Band, Band],
  dependsOn: string[] = [],
  seed = 1,
): SystemEntry => ({
  slug,
  name,
  hook: loremLine(seed),
  bitesAt,
  tier,
  dependsOn,
  impacts: {
    cascadia: { band: bands[0], mechanism: loremLine(seed + 1), source: "TBD" },
    crustal: { band: bands[1], mechanism: loremLine(seed + 2), source: "TBD" },
  },
});

export const SYSTEMS: SystemEntry[] = [
  sys(
    "communications",
    "Communications",
    "hours",
    2,
    ["high", "high"],
    ["electricity"],
    1,
  ),
  sys(
    "electricity",
    "Electricity",
    "days",
    1,
    ["high", "high"],
    ["transportation", "food-and-fuel"],
    2,
  ),
  sys(
    "water",
    "Water",
    "days",
    1,
    ["high", "high"],
    ["electricity", "transportation"],
    3,
  ),
  sys(
    "sanitation",
    "Sanitation",
    "weeks",
    2,
    ["high", "high"],
    ["water", "electricity"],
    4,
  ),
  sys(
    "transportation",
    "Transportation",
    "days",
    1,
    ["high", "medium"],
    ["food-and-fuel"],
    5,
  ),
  sys(
    "large-infrastructure",
    "Port, airport and ferry terminals",
    "weeks",
    3,
    ["unknown", "unknown"],
    ["transportation", "electricity"],
    6,
  ),
  sys(
    "food-and-fuel",
    "Food and fuel",
    "days",
    2,
    ["high", "medium"],
    ["transportation", "electricity"],
    7,
  ),
  sys(
    "dams-and-reservoirs",
    "Dams and reservoirs",
    "hours",
    3,
    ["unknown", "unknown"],
    [],
    8,
  ),
  sys(
    "housing",
    "Housing",
    "weeks",
    2,
    ["high", "high"],
    ["water", "sanitation", "electricity"],
    9,
  ),
  sys(
    "health-care",
    "Health care",
    "hours",
    3,
    ["high", "high"],
    ["food-and-fuel", "electricity", "water"],
    10,
  ),
  sys(
    "weather",
    "Weather",
    "weeks",
    3,
    ["medium", "medium"],
    ["housing", "electricity"],
    11,
  ),
  sys(
    "outside-help",
    "The absence of outside help",
    "days",
    3,
    ["high", "low"],
    ["transportation", "large-infrastructure"],
    12,
  ),
];

export const systemBySlug = (slug: string) =>
  SYSTEMS.find((s) => s.slug === slug);

/* ------------------------------------------------------------------ */
/* Part 1 — the shaking                                                */
/* ------------------------------------------------------------------ */

export const SHAKING_PAGES = [
  { slug: "ground", name: "Ground conditions", hook: loremLine(21) },
  { slug: "buildings", name: "Buildings", hook: loremLine(22) },
  { slug: "casualties", name: "Casualties", hook: loremLine(23) },
  { slug: "fire-following", name: "Fire following", hook: loremLine(24) },
  { slug: "secondary-hazards", name: "Secondary hazards", hook: loremLine(25) },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const NAV = [
  { href: "/scenarios/", label: "Two scenarios" },
  { href: "/shaking/", label: "The shaking" },
  { href: "/after/", label: "Life afterwards" },
  { href: "/leaving/", label: "Getting out" },
  { href: "/prepare/", label: "Preparing" },
];

export const UTILITY_NAV = [
  { href: "/dependencies/", label: "Dependency graph" },
  { href: "/method/", label: "Method & bands" },
  { href: "/sources/", label: "Sources" },
  { href: "/about/", label: "About" },
];
