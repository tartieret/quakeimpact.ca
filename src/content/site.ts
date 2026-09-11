import { loremLine } from "./lorem";
import type { Band, Phase, Scenario, ScenarioId, SystemEntry } from "./types";

export const SITE = {
  name: "QuakeImpact",
  domain: "quakeimpact.ca",
  url: "https://quakeimpact.ca",
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
    simulation:
      "M9.0 Cascadia Full Rupture, Geological Survey of Canada scenario catalogue",
    source: "Offshore subduction interface",
    shaking:
      "Moderate intensity, long duration — three minutes in the province's scenario",
    extent: "Northern California to BC — a regional catastrophe",
    tsunami: "Outer coast; limited effect inside Burrard Inlet",
    mutualAid:
      "Late rather than absent — the province states the US will be unable to help if it is also overwhelmed",
    recurrence:
      "Sources disagree: 500–600 years on average per NRCan, 400–500 in BC's own documents. Last event 1700",
    conditions:
      "The province sets this one in an August heatwave with wildfire smoke, which makes water and shade the urgent needs",
  },
  crustal: {
    id: "crustal",
    short: "Crustal M7",
    name: "Shallow crustal M7",
    strapline: "Worse for Vancouver itself",
    simulation:
      "M7.0 Georgia Strait, same catalogue — and the province's own primary planning scenario",
    source: "Strait of Georgia shallow crust, 3–4 km deep",
    shaking:
      "High intensity, short duration — 10–20 seconds of violent shaking in the province's scenario",
    extent: "Concentrated and local",
    tsunami: "Not the primary concern",
    mutualAid:
      "Available — BC's plan assumes agencies outside the impact area are unaffected. That is a planning assumption, and this is the case where it holds",
    recurrence:
      "Roughly once every 1,500 years in the region, per the province's scenario. Rarer near the city, more destructive to it",
    conditions:
      "The province sets this one on a January afternoon after an atmospheric river, which makes heat, dry shelter and slope stability the urgent needs",
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
    dependency:
      "No published assessment this rubric can read — a statement about the public record, not about the infrastructure",
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

/**
 * Thirteen systems. Bands are assigned from `docs/research/impact-bands.md` and
 * the per-system files under `docs/research/systems/`; the prose around them —
 * `hook`, `mechanism`, `source` — is still placeholder and must not be read as
 * sourced. Weather is deliberately absent: it does not fail, so it cannot carry
 * a band. It is a condition of each scenario and renders on the timeline.
 */
export const SYSTEMS: SystemEntry[] = [
  // Medium, not High: no source establishes how the network would perform, and
  // the absence of any binding backup-power requirement is itself the finding.
  sys(
    "communications",
    "Communications",
    "hours",
    2,
    ["medium", "medium"],
    ["electricity"],
    1,
  ),
  sys(
    "electricity",
    "Electricity",
    "days",
    1,
    ["high", "high"],
    ["transportation", "fuel"],
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
  // Restoration is rate-limited by sending a qualified person into every
  // affected building, which no other system on the grid is.
  sys(
    "gas",
    "Natural gas",
    "weeks",
    2,
    ["high", "high"],
    ["transportation", "fuel"],
    14,
  ),
  sys(
    "transportation",
    "Transportation",
    "days",
    1,
    ["high", "high"],
    ["fuel"],
    5,
  ),
  // Medium for Cascadia and unassessed for the crustal M7 — not because the
  // crustal event is milder, but because the only study models Cascadia alone.
  sys(
    "large-infrastructure",
    "Port, airport and ferry terminals",
    "weeks",
    3,
    ["medium", "unknown"],
    ["transportation", "electricity"],
    6,
  ),
  sys(
    "fuel",
    "Fuel",
    "days",
    2,
    ["high", "high"],
    ["transportation", "electricity", "large-infrastructure"],
    7,
  ),
  sys(
    "food",
    "Food",
    "days",
    2,
    ["high", "high"],
    ["transportation", "fuel", "large-infrastructure"],
    13,
  ),
  // Both dams were reviewed in 2024 under legal compulsion and neither
  // published conclusion mentions earthquakes. Assessed, but not for this.
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
    2,
    ["medium", "medium"],
    ["fuel", "electricity", "water"],
    10,
  ),
  sys(
    "outside-help",
    "Where help comes from",
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
  { href: "/getting-around/", label: "Getting around" },
  { href: "/prepare/", label: "Preparing" },
];

export const UTILITY_NAV = [
  { href: "/dependencies/", label: "Dependency graph" },
  { href: "/method/", label: "Method & bands" },
  { href: "/sources/", label: "Sources" },
  { href: "/contribute/", label: "Contribute" },
  { href: "/about/", label: "About" },
];
