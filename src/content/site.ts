import type {
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
 * Fourteen systems. Mechanism sentences, durations and source keys come from
 * the research: `docs/research/impact-bands.md` holds the assignment and the
 * per-system files under `docs/research/systems/` carry the working behind
 * each one. Weather is deliberately absent: it does not fail. It is a condition
 * of each scenario and renders on the timeline.
 *
 * A duration is written in the source's own terms and never sharpened into a
 * number. Where no document states one, `disruption` is absent and the table
 * says no estimate is published.
 */
export const SYSTEMS: SystemEntry[] = [
  {
    slug: "communications",
    name: "Communications",
    hook: "Cell-site backup power lasts hours to days, and no rule sets a minimum.",
    bitesAt: "hours",
    tier: 2,
    dependsOn: ["electricity", "fuel"],
    impact: {
      mechanism:
        "The province expects communications to be disrupted for days to weeks. Surviving capacity would go first to emergency personnel, with satellite phones and amateur radio used as backups.",
      source: "DCRRA-2025",
      disruption: { text: "Days to weeks", source: "DCRRA-2025" },
    },
  },
  {
    slug: "electricity",
    name: "Electricity",
    hook: "Up to two thirds of downtown customers could lose power for several weeks.",
    bitesAt: "days",
    tier: 1,
    dependsOn: ["transportation", "fuel"],
    impact: {
      mechanism:
        "BC Hydro states that a large earthquake could leave up to two thirds of its downtown Vancouver customers without power for several weeks. Full restoration could take years.",
      source: "BCH-WESTEND-25",
      disruption: {
        text: "Several weeks downtown, years to restore fully",
        source: "BCH-WESTEND-25",
      },
    },
  },
  {
    slug: "water",
    name: "Water",
    hook: "Breaks under rivers and inlets take the longest to repair.",
    bitesAt: "days",
    tier: 1,
    dependsOn: ["electricity", "transportation"],
    impact: {
      mechanism:
        "A magnitude 9 megathrust is modelled to cause 267 water main failures across Metro Vancouver. About 60 occur where mains cross under rivers and inlets, the hardest locations to repair.",
      source: "MV-WATER-22",
      disruption: { text: "Many months", source: "PEIRS" },
    },
  },
  {
    slug: "sanitation",
    name: "Sanitation",
    hook: "Without running water, toilets in apartment towers stop working.",
    bitesAt: "weeks",
    tier: 2,
    dependsOn: ["water", "electricity"],
    impact: {
      mechanism:
        "The province expects water and wastewater disruption for many months. Some treatment plants meet a post-disaster standard, but this says nothing about the sewer network feeding them.",
      source: "PEIRS",
      disruption: { text: "Many months", source: "PEIRS" },
    },
  },
  // Restoration is rate-limited by sending a qualified person into every
  // affected building, which no other system is.
  {
    slug: "gas",
    name: "Natural gas",
    hook: "Restoring gas requires a visit to every affected building.",
    bitesAt: "weeks",
    tier: 2,
    dependsOn: ["transportation", "fuel"],
    impact: {
      mechanism:
        "Gas cannot be restored in bulk: any air drawn into the pipes has to be purged first, and then service returns only as a technician enters each affected building and relights every appliance in it.",
      source: "BCUC-C-6-25",
      disruption: { text: "Several weeks", source: "BCUC-C-6-25" },
    },
  },
  {
    slug: "transportation",
    name: "Transportation",
    hook: "A bridge may survive an earthquake without being usable afterwards.",
    bitesAt: "days",
    tier: 1,
    dependsOn: ["fuel"],
    impact: {
      mechanism:
        "The province designates routes for emergency vehicles after a major earthquake. It also states that the bridges on those routes are not being retrofitted to remain in service.",
      source: "MOTI-SRDC-05",
      disruption: {
        text: "Weeks to months at much-reduced capacity",
        source: "PEIRS",
      },
    },
  },
  // Split, not because the crustal event is milder but because the only study
  // models the megathrust alone.
  {
    slug: "large-infrastructure",
    name: "Port, airport and ferry terminals",
    hook: "The airport model expects damage to every bridge onto Sea Island.",
    bitesAt: "weeks",
    tier: 3,
    dependsOn: ["transportation", "electricity"],
    byScenario: {
      cascadia: {
        mechanism:
          "Modelling of a magnitude 9 megathrust puts one to two weeks of disrupted service at some Vancouver-area ports, road access to the airport cut for the first few days because every bridge leading to it is damaged, and moderate liquefaction damage at the port areas on the delta.",
        source: "AIR-2013",
        disruption: {
          text: "One to two weeks at some ports",
          source: "AIR-2013",
        },
      },
      crustal: {
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
    impact: {
      mechanism:
        "Fuel is the resource every other distribution depends on, and the province expects supply chains to be inoperable.",
      source: "PEIRS",
      disruption: {
        text: "Weeks to months of reduced road capacity",
        source: "PEIRS",
      },
    },
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
    impact: {
      mechanism:
        "The province expects delivery networks for food and household supplies to take weeks or months to recover.",
      source: "PEIRS",
      disruption: { text: "Weeks or months", source: "PEIRS" },
    },
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
    impact: {
      mechanism:
        "Engineers reviewed Cleveland and Seymour Falls dams in 2024, as required every seven years for dams in the top consequence class. Neither review identified an unsafe condition, and neither published conclusion mentions earthquakes.",
      source: "MV-DSP-2026",
    },
  },
  {
    slug: "housing",
    name: "Housing",
    hook: "Cordons and failed utilities can keep people out of standing homes.",
    bitesAt: "weeks",
    tier: 2,
    dependsOn: ["water", "sanitation", "electricity"],
    impact: {
      mechanism:
        "In Vancouver, areas with high concentrations of damage may be closed off for weeks, months or even years, which keeps people out of homes that came through the shaking.",
      source: "COV-RISK-2024",
      disruption: {
        text: "Weeks to years where damage is heaviest",
        source: "COV-RISK-2024",
      },
    },
  },
  {
    slug: "health-care",
    name: "Health care",
    hook: "Most hospital buildings in the region predate the current seismic code.",
    bitesAt: "hours",
    tier: 2,
    dependsOn: ["fuel", "electricity", "water", "transportation"],
    impact: {
      mechanism:
        "A study of Vancouver Coastal Health's 127 buildings found about 65 per cent likely to be completely damaged at the ground motion the current building code designs for, and no government or health authority has set the expected casualty load against the region's bed capacity.",
      source: "DCRRA-APPC",
    },
  },
  // No phase, because the only timing on record is two events, and no
  // `dependsOn`, because no document names an edge. See
  // `docs/research/social-disorder.md`.
  {
    slug: "safety-and-conflict",
    name: "Safety and conflict",
    hook: "Most people help one another after a disaster. Theft and violence are the exception.",
    tier: 3,
    dependsOn: [],
    impact: {
      mechanism:
        "Most people help one another after a disaster. Theft and violence still occur, but usually as isolated cases that news coverage can make seem widespread.",
      source: "KATRINA-MYTHS-08",
    },
  },
  // Split because the province states a different assumption for each
  // earthquake: this is the one row where the two genuinely differ.
  {
    slug: "outside-help",
    name: "Where help comes from",
    hook: "A coast-wide earthquake leaves fewer outside agencies able to help.",
    bitesAt: "days",
    tier: 3,
    dependsOn: ["transportation", "large-infrastructure"],
    byScenario: {
      cascadia: {
        mechanism:
          "The province's plan assumes agencies outside the impact area are unaffected and stages resources with them, and for a megathrust the same plan states that the United States will be unable to deliver mutual aid.",
        source: "PEIRS",
        disruption: {
          text: "Help arrives later, with no US mutual aid",
          source: "PEIRS",
        },
      },
      crustal: {
        mechanism:
          "The province's plan assumes agencies outside the impact area are unaffected and stages resources with them, and a local crustal earthquake is the case where that assumption holds.",
        source: "PEIRS",
        evidence:
          "This is a planning assumption the province states, not a measured finding about how help would arrive.",
        disruption: {
          text: "Outside agencies expected to be available",
          source: "PEIRS",
        },
      },
    },
  },
];

/**
 * A system's impacts as the page draws them: one entry standing for both
 * earthquakes, or one per earthquake where the two differ. `scenario` is null
 * on the shared entry.
 */
export function impactsOf(
  system: SystemEntry,
): { scenario: ScenarioId | null; impact: Impact }[] {
  if (system.byScenario) {
    return SCENARIO_ORDER.map((scenario) => ({
      scenario,
      impact: system.byScenario[scenario],
    }));
  }
  return [{ scenario: null, impact: system.impact }];
}

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
 * assumes the scenarios the part before it set up. The
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
  { href: "/method/", label: "Method" },
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
