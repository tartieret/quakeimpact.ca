import type {
  Band,
  Impact,
  NavItem,
  PageStatus,
  Phase,
  Scenario,
  ScenarioId,
  SystemEntry,
} from "./types";

export const SITE = {
  name: "QuakeImpact",
  domain: "quakeimpact.ca",
  url: "https://quakeimpact.ca",
  tagline:
    "What a major earthquake does to the Lower Mainland, and for how long",
  /**
   * The site-wide banner. It says the state and stops: a count of which pages
   * are written is about this project's progress rather than about the reader's
   * world, and a page in that state now says so for itself, with a marker and a
   * notice rather than a paragraph.
   */
  status: "Draft. Content under review.",
};

/* ------------------------------------------------------------------ */
/* Scenarios                                                           */
/* ------------------------------------------------------------------ */

export const SCENARIOS: Record<ScenarioId, Scenario> = {
  cascadia: {
    id: "cascadia",
    short: "Cascadia M9",
    name: "Cascadia M9 megathrust",
    strapline: "A coast-wide disaster, with outside help delayed",
    simulation:
      "M9.0 Cascadia Full Rupture, Geological Survey of Canada scenario catalogue",
    source: "Offshore subduction interface",
    shaking:
      "Moderate intensity, long duration. Three minutes in the province's scenario",
    extent: "Northern California to British Columbia",
    tsunami: "Outer coast; limited effect inside Burrard Inlet",
    mutualAid:
      "The province states that an overwhelmed United States will be unable to help",
    recurrence:
      "Sources disagree: 500–600 years on average per NRCan, 400–500 in BC's own documents. Last event 1700",
    conditions:
      "The province sets this one in an August heatwave with wildfire smoke, which makes water and shade the urgent needs",
  },
  crustal: {
    id: "crustal",
    short: "Crustal M7",
    name: "Shallow crustal M7",
    strapline: "More violent shaking in Metro Vancouver",
    simulation:
      "M7.0 Georgia Strait, same catalogue, and the province's own primary planning scenario",
    source: "Strait of Georgia shallow crust, 3–4 km deep",
    shaking:
      "High intensity, short duration. 10 to 20 seconds of violent shaking in the province's scenario",
    extent: "Concentrated and local",
    tsunami: "Not the primary concern",
    mutualAid:
      "BC's plan assumes agencies outside the local impact area remain available",
    recurrence:
      "Roughly once every 1,500 years in the region, according to the province's scenario",
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
  { label: string; duration: string; extent: string }
> = {
  low: {
    label: "Low",
    duration: "Hours to a few days",
    extent: "Localised",
  },
  medium: {
    label: "Medium",
    duration: "Days to weeks",
    extent: "Patchy, worst on poor ground",
  },
  high: {
    label: "High",
    duration: "Weeks to months, sometimes longer",
    extent: "Regional",
  },
  unknown: {
    label: "Not yet assessed",
    duration: "Not published",
    extent: "Not published",
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

/**
 * Both columns rest on one assessment, which is the usual case: the published
 * work assesses a single design earthquake per system. `evidence` is written
 * on the column that assessment does not model, so a reader on that toggle is
 * told which earthquake the sentence was measured on.
 */
const bothScenarios = (
  bands: [Band, Band],
  mechanism: string,
  source: string,
  evidence: Partial<Record<ScenarioId, string>> = {},
): Record<ScenarioId, Impact> => ({
  cascadia: {
    band: bands[0],
    mechanism,
    source,
    ...(evidence.cascadia ? { evidence: evidence.cascadia } : {}),
  },
  crustal: {
    band: bands[1],
    mechanism,
    source,
    ...(evidence.crustal ? { evidence: evidence.crustal } : {}),
  },
});

/** What the crustal column says wherever the assessment modelled the megathrust. */
const MEGATHRUST_ONLY =
  "The assessment behind this models the magnitude 9 megathrust; nothing published covers the shallow crustal earthquake.";

/** And the reverse, for the province's plan, which is written on the crustal M7. */
const CRUSTAL_ONLY =
  "The province wrote this for its shallow crustal M7 scenario; nothing published states it for the megathrust.";

/**
 * Fourteen systems. Bands, mechanism sentences and source keys all come from
 * `docs/research/impact-bands.md`, which is the authority for the assignment;
 * the per-system files under `docs/research/systems/` carry the working behind
 * each one. Weather is deliberately absent: it does not fail, so it cannot
 * carry a band. It is a condition of each scenario and renders on the timeline.
 */
export const SYSTEMS: SystemEntry[] = [
  // Medium because the province's own megathrust assessment states a duration,
  // and it is days to weeks rather than the weeks to months electricity gets.
  // The band used to rest on CRTC-2025-226, which establishes that no rule sets
  // a backup-power run time — a fact about the rules, not about how long the
  // network is down, and so not a fact that can choose between Medium and High.
  // It waits on electricity and fuel, both High, and still reads Medium: the
  // published duration sets the band. See `docs/research/impact-bands.md`.
  {
    slug: "communications",
    name: "Communications",
    hook: "Cell-site backup power lasts hours to days, and no rule sets a minimum.",
    bitesAt: "hours",
    tier: 2,
    dependsOn: ["electricity", "fuel"],
    impacts: bothScenarios(
      ["medium", "medium"],
      "The province expects communications to be disrupted for days to weeks. Surviving capacity would go first to emergency personnel, with satellite phones and amateur radio used as backups.",
      "DCRRA-2025",
      { crustal: MEGATHRUST_ONLY },
    ),
  },
  {
    slug: "electricity",
    name: "Electricity",
    hook: "Up to two thirds of downtown customers could lose power for several weeks.",
    bitesAt: "days",
    tier: 1,
    dependsOn: ["transportation", "fuel"],
    impacts: bothScenarios(
      ["high", "high"],
      "BC Hydro states that a large earthquake could leave up to two thirds of its downtown Vancouver customers without power for several weeks. Full restoration could take years.",
      "BCH-WESTEND-25",
    ),
  },
  {
    slug: "water",
    name: "Water",
    hook: "Breaks under rivers and inlets take the longest to repair.",
    bitesAt: "days",
    tier: 1,
    dependsOn: ["electricity", "transportation"],
    impacts: bothScenarios(
      ["high", "high"],
      "A magnitude 9 megathrust is modelled to cause 267 water main failures across Metro Vancouver. About 60 occur where mains cross under rivers and inlets, the hardest locations to repair.",
      "MV-WATER-22",
      { crustal: MEGATHRUST_ONLY },
    ),
  },
  {
    slug: "sanitation",
    name: "Sanitation",
    hook: "Without running water, toilets in apartment towers stop working.",
    bitesAt: "weeks",
    tier: 2,
    dependsOn: ["water", "electricity"],
    impacts: bothScenarios(
      ["high", "high"],
      "The province expects water and wastewater disruption for many months. Some treatment plants meet a post-disaster standard, but this says nothing about the sewer network feeding them.",
      "PEIRS",
      { cascadia: CRUSTAL_ONLY },
    ),
  },
  // Restoration is rate-limited by sending a qualified person into every
  // affected building, which no other system on the grid is.
  {
    slug: "gas",
    name: "Natural gas",
    hook: "Restoring gas requires a visit to every affected building.",
    bitesAt: "weeks",
    tier: 2,
    dependsOn: ["transportation", "fuel"],
    impacts: bothScenarios(
      ["high", "high"],
      "Gas cannot be restored in bulk: any air drawn into the pipes has to be purged first, and then service returns only as a technician enters each affected building and relights every appliance in it.",
      "BCUC-C-6-25",
    ),
  },
  {
    slug: "transportation",
    name: "Transportation",
    hook: "A bridge may survive an earthquake without being usable afterwards.",
    bitesAt: "days",
    tier: 1,
    dependsOn: ["fuel"],
    impacts: bothScenarios(
      ["high", "high"],
      "The province designates routes for emergency vehicles after a major earthquake. It also states that the bridges on those routes are not being retrofitted to remain in service.",
      "MOTI-SRDC-05",
    ),
  },
  // Medium for Cascadia and unassessed for the crustal M7, not because the
  // crustal event is milder but because the only study models Cascadia alone.
  {
    slug: "large-infrastructure",
    name: "Port, airport and ferry terminals",
    hook: "The airport model expects damage to every bridge onto Sea Island.",
    bitesAt: "weeks",
    tier: 3,
    dependsOn: ["transportation", "electricity"],
    impacts: {
      cascadia: {
        band: "medium",
        mechanism:
          "Modelling of a magnitude 9 megathrust puts one to two weeks of disrupted service at some Vancouver-area ports, road access to the airport cut for the first few days because every bridge leading to it is damaged, and moderate liquefaction damage at the port areas on the delta.",
        source: "AIR-2013",
      },
      crustal: {
        band: "unknown",
        mechanism:
          "No published work states what these facilities would face in a shallow crustal earthquake; the one study that assesses them models the megathrust and nothing else.",
        source: "AIR-2013",
      },
    },
  },
  {
    slug: "fuel",
    name: "Fuel",
    hook: "A service station with full tanks and no power dispenses nothing.",
    bitesAt: "days",
    tier: 2,
    dependsOn: ["transportation", "electricity", "large-infrastructure"],
    impacts: bothScenarios(
      ["high", "high"],
      "Fuel is the resource every other distribution depends on, and the province expects supply chains to be inoperable.",
      "PEIRS",
      { cascadia: CRUSTAL_ONLY },
    ),
  },
  {
    slug: "food",
    name: "Food",
    hook: "Fresh food depends on regular deliveries.",
    bitesAt: "days",
    tier: 2,
    dependsOn: [
      "transportation",
      "fuel",
      "electricity",
      "large-infrastructure",
    ],
    impacts: bothScenarios(
      ["high", "high"],
      "The province expects delivery networks for food and household supplies to take weeks or months to recover.",
      "PEIRS",
      { cascadia: CRUSTAL_ONLY },
    ),
  },
  // Both dams were reviewed in 2024 under legal compulsion and neither
  // published conclusion mentions earthquakes. Assessed, but not for this.
  {
    slug: "dams-and-reservoirs",
    name: "Dams and reservoirs",
    hook: "The 2024 engineering reviews do not publish an earthquake finding.",
    bitesAt: "hours",
    tier: 3,
    dependsOn: [],
    impacts: bothScenarios(
      ["unknown", "unknown"],
      "Engineers reviewed Cleveland and Seymour Falls dams in 2024, as required every seven years for dams in the top consequence class. Neither review identified an unsafe condition, and neither published conclusion mentions earthquakes.",
      "MV-DSP-2026",
    ),
  },
  {
    slug: "housing",
    name: "Housing",
    hook: "Cordons and failed utilities can keep people out of standing homes.",
    bitesAt: "weeks",
    tier: 2,
    dependsOn: ["water", "sanitation", "electricity"],
    impacts: bothScenarios(
      ["high", "high"],
      "In Vancouver, areas with high concentrations of damage may be closed off for weeks, months or even years, which keeps people out of homes that came through the shaking.",
      "COV-RISK-2024",
    ),
  },
  {
    slug: "health-care",
    name: "Health care",
    hook: "Most hospital buildings in the region predate the current seismic code.",
    bitesAt: "hours",
    tier: 2,
    dependsOn: ["fuel", "electricity", "water", "transportation"],
    impacts: bothScenarios(
      ["medium", "medium"],
      "A study of Vancouver Coastal Health's 127 buildings found about 65 per cent likely to be completely damaged at the ground motion the current building code designs for, and no government or health authority has set the expected casualty load against the region's bed capacity.",
      "DCRRA-APPC",
    ),
  },
  // Unbanded, and not hatched. A band measures restoration time, and how people
  // treat each other has none, so there is nothing for "not yet assessed" to be
  // waiting on; Low would be past disasters elsewhere setting a band, which the
  // rubric does not allow. One sentence stands for both earthquakes because none
  // of the evidence was measured on either. No phase, because the only timing
  // on record is two events, and no `dependsOn`, because no document names an
  // edge. See `docs/research/social-disorder.md`.
  {
    slug: "safety-and-conflict",
    name: "Safety and conflict",
    hook: "Most people help one another after a disaster. Theft and violence are the exception.",
    tier: 3,
    dependsOn: [],
    summary: {
      mechanism:
        "Most people help one another after a disaster. Theft and violence still occur, but usually as isolated cases that news coverage can make seem widespread.",
      source: "KATRINA-MYTHS-08",
    },
  },
  {
    slug: "outside-help",
    name: "Where help comes from",
    hook: "A coast-wide earthquake leaves fewer outside agencies able to help.",
    bitesAt: "days",
    tier: 3,
    dependsOn: ["transportation", "large-infrastructure"],
    impacts: {
      cascadia: {
        band: "high",
        mechanism:
          "The province's plan assumes agencies outside the impact area are unaffected and stages resources with them, and for a megathrust the same plan states that the United States will be unable to deliver mutual aid.",
        source: "PEIRS",
      },
      crustal: {
        band: "low",
        mechanism:
          "The province's plan assumes agencies outside the impact area are unaffected and stages resources with them, and a local crustal earthquake is the case where that assumption holds.",
        source: "PEIRS",
        evidence:
          "This is a planning assumption the province states, not a measured finding about how help would arrive.",
      },
    },
  },
];

export const systemBySlug = (slug: string) =>
  SYSTEMS.find((s) => s.slug === slug);

/* ------------------------------------------------------------------ */
/* Part 1 — the shaking                                                */
/* ------------------------------------------------------------------ */

/**
 * Part 1. The five subjects of `/shaking/`, in reading order, each with the
 * hook its card carries.
 *
 * All five are written, so every entry's body, its documents and the order they
 * are numbered in come from its page module. `status` and `references` stay on
 * the type: a written page can be marked a draft again while its text is under
 * revision, and a subject whose evidence is gathered before its text is written
 * lists that evidence here in the meantime.
 */
export const SHAKING_PAGES: {
  slug: string;
  name: string;
  /** Set where the subject's page carries its documents and not its text. */
  status?: PageStatus;
  hook: string;
  references?: string[];
}[] = [
  {
    slug: "ground",
    name: "Ground conditions",
    hook: "Shaking changes sharply between bedrock, soft sediment and river delta soil.",
  },
  {
    slug: "buildings",
    name: "Buildings",
    hook: "Age, height and construction type shape how a building responds.",
  },
  {
    slug: "casualties",
    name: "Casualties",
    hook: "Thousands of people hurt or killed, and what each published count covers.",
  },
  {
    slug: "fire-following",
    name: "Fire following",
    hook: "Fire is one of the ordinary consequences of a large earthquake. It starts in many homes at once, and the water to fight it is in the mains the shaking has just broken.",
  },
  {
    slug: "landslides",
    name: "Landslides",
    hook: "The province expects landslides to cut transportation routes.",
  },
  {
    slug: "dikes",
    name: "Dikes",
    hook: "Delta dikes stand on soil that can settle and spread sideways.",
  },
  {
    slug: "dams",
    name: "Dams",
    hook:
      "The dams above this region were built to the earthquake expectation of their day, and today’s expectation applies when one is rebuilt, not while it stands.",
  },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

/**
 * The five parts, in reading order.
 *
 * Two of them hold pages of their own, and those lists are built here from
 * `SHAKING_PAGES` and `SYSTEMS` rather than written out a second time. A system
 * added to that array appears in the footer index and in the menu on a phone
 * with no other change, the way it already appears in the grid and the matrix.
 *
 * The children are deliberately not opened from the bar across the top of the
 * desktop page. Three of the five parts have none, so a menu that opens on two
 * of the five teaches a reader it is not worth trying; fourteen systems is a
 * directory rather than a menu; and the site is a sequence, where a page
 * assumes the bands and the scenario toggle the part before it set up. The
 * lists belong where a reader is already looking for one: at the foot of a
 * page they have finished, in the footer index, and in the menu on a phone,
 * which is a panel with room to nest rather than a hover target.
 */
export const NAV: NavItem[] = [
  { href: "/scenarios/", label: "Two scenarios" },
  {
    href: "/shaking/",
    label: "The shaking",
    childrenLabel: "The subjects",
    children: SHAKING_PAGES.map((page) => ({
      href: `/shaking/${page.slug}/`,
      label: page.name,
    })),
  },
  {
    href: "/after/",
    label: "Life afterwards",
    childrenLabel: "The systems",
    children: SYSTEMS.map((system) => ({
      href: `/after/${system.slug}/`,
      label: system.name,
    })),
  },
  { href: "/getting-around/", label: "Getting around" },
  { href: "/prepare/", label: "Preparing" },
];

export const UTILITY_NAV: NavItem[] = [
  { href: "/method/", label: "Method & bands" },
  { href: "/sources/", label: "Sources" },
  { href: "/licences/", label: "Licences" },
  { href: "/contribute/", label: "Contribute" },
  { href: "/about/", label: "About" },
];

/** The part at a given top-level href, for a page that sits inside it. */
export const navSection = (href: string) =>
  NAV.find((item) => item.href === href);

/**
 * Every page the site exports, in reading order, as the sitemap lists them.
 *
 * Derived rather than written, for the same reason `NAV` derives its children:
 * a page the navigation knows about and the sitemap does not is a page nobody
 * finds, and two hand-kept lists would eventually disagree about which pages
 * exist. Adding a system stays one array entry, and the sitemap follows.
 *
 * The home page is not in `NAV` because the masthead is the link to it, so it
 * is added here. The trailing slashes are the URLs the static export actually
 * writes, and they are what the canonical link on each page says.
 */
export const ALL_ROUTES: string[] = [
  "/",
  ...NAV.flatMap((item) => [
    item.href,
    ...(item.children ?? []).map((child) => child.href),
  ]),
  ...UTILITY_NAV.map((item) => item.href),
];
