import type {
  Band,
  Impact,
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
  status: "Draft. Content under review, and fourteen pages carry their evidence without their text.",
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
      "Moderate intensity, long duration. Three minutes in the province's scenario",
    extent: "Northern California to British Columbia, damaging the whole coast at once",
    tsunami: "Outer coast; limited effect inside Burrard Inlet",
    mutualAid:
      "Late rather than absent. The province states the US will be unable to help if it is also overwhelmed",
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
      "M7.0 Georgia Strait, same catalogue, and the province's own primary planning scenario",
    source: "Strait of Georgia shallow crust, 3–4 km deep",
    shaking:
      "High intensity, short duration. 10 to 20 seconds of violent shaking in the province's scenario",
    extent: "Concentrated and local",
    tsunami: "Not the primary concern",
    mutualAid:
      "Available. BC's plan assumes agencies outside the impact area are unaffected, which is a planning assumption, and this is the case where it holds",
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
    dependency: "Comes back on its own",
  },
  medium: {
    label: "Medium",
    duration: "Days to weeks",
    extent: "Patchy, worst on poor ground",
    dependency: "Waiting on one other system",
  },
  high: {
    label: "High",
    duration: "Weeks to months, sometimes longer",
    extent: "Regional",
    dependency:
      "Blocked by several failures at once, and by competition for the same crews, fuel and materials up and down the coast",
  },
  unknown: {
    label: "Not yet assessed",
    duration: "Not published",
    extent: "Not published",
    dependency:
      "Nobody has published an assessment. That is a statement about the public record, not about the infrastructure",
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
 * Thirteen systems. Bands, mechanism sentences and source keys all come from
 * `docs/research/impact-bands.md`, which is the authority for the assignment;
 * the per-system files under `docs/research/systems/` carry the working behind
 * each one. Weather is deliberately absent: it does not fail, so it cannot
 * carry a band. It is a condition of each scenario and renders on the timeline.
 */
export const SYSTEMS: SystemEntry[] = [
  // Medium, not High: no source establishes how the network would perform, and
  // the absence of any binding backup-power requirement is itself the finding.
  {
    slug: "communications",
    name: "Communications",
    hook: "Nothing requires a cell tower to hold any backup power at all.",
    bitesAt: "hours",
    tier: 2,
    dependsOn: ["electricity"],
    lever: {
      items: [
        "Text rather than call. A short message gets through congestion that defeats a voice call, and it keeps trying in the background while you do something else.",
        "Do not call 9-1-1 to ask what happened or whether it was an earthquake. A call that is not an emergency holds a line somebody else needs.",
      ],
    },
    impacts: bothScenarios(
      ["medium", "medium"],
      "No Canadian rule sets how long a cell tower must keep running once the power goes, and the regulator opened a proceeding in September 2025 to decide what that requirement should be.",
      "CRTC-2025-226",
    ),
  },
  {
    slug: "electricity",
    name: "Electricity",
    hook: "BC Hydro's own filing puts up to two thirds of downtown customers out for several weeks.",
    bitesAt: "days",
    tier: 1,
    dependsOn: ["transportation", "fuel"],
    impacts: bothScenarios(
      ["high", "high"],
      "BC Hydro's filing to its regulator states that a large seismic event could leave up to two thirds of downtown Vancouver's customers without power for several weeks, and the system years from complete restoration.",
      "BCH-WESTEND-25",
    ),
  },
  {
    slug: "water",
    name: "Water",
    hook: "The worst breaks are the ones under rivers, and those are the repairs that take longest.",
    bitesAt: "days",
    tier: 1,
    dependsOn: ["electricity", "transportation"],
    impacts: bothScenarios(
      ["high", "high"],
      "A magnitude 9 megathrust is modelled to cause 267 water main failures across Metro Vancouver, about 60 of them at the 71 points where mains cross under rivers and inlets, which are the repairs that take longest.",
      "MV-WATER-22",
      { crustal: MEGATHRUST_ONLY },
    ),
  },
  {
    slug: "sanitation",
    name: "Sanitation",
    hook: "A toilet needs water to flush, and in an apartment tower there is nothing else to use.",
    bitesAt: "weeks",
    tier: 2,
    dependsOn: ["water", "electricity"],
    lever: {
      items: [
        "Settle now how the household would contain human waste with no water to flush, and keep what that takes beside the rest of your supplies. A pail with a tight lid, heavy bags, and something dry to cover each use is the whole of it.",
        "Do not plan to flush with stored water. Water put by for drinking and washing does not stretch to the toilet as well, and a household that has not thought about this before the water stops has to think about it afterwards.",
      ],
    },
    impacts: bothScenarios(
      ["high", "high"],
      "The province expects disruption to water and wastewater systems for many months; Metro Vancouver has built individual treatment plants to a post-disaster standard, which is not the same as making the network that feeds them survive.",
      "PEIRS",
      { cascadia: CRUSTAL_ONLY },
    ),
  },
  // Restoration is rate-limited by sending a qualified person into every
  // affected building, which no other system on the grid is.
  {
    slug: "gas",
    name: "Natural gas",
    hook: "Gas is the one utility that cannot be turned back on from a control room.",
    bitesAt: "weeks",
    tier: 2,
    dependsOn: ["transportation", "fuel"],
    lever: {
      items: [
        "Leave the gas on unless fire or emergency officials tell you to turn it off. That is FortisBC's own instruction to its customers, and it runs against what most people assume.",
        "Know what shutting it off costs before you do it. Once the gas is off at the meter, only a registered gas contractor may turn it back on, and that visit is the scarce thing.",
      ],
    },
    impacts: bothScenarios(
      ["high", "high"],
      "Gas cannot be restored in bulk: any air drawn into the pipes has to be purged first, and then service returns only as a technician enters each affected building and relights every appliance in it.",
      "BCUC-C-6-25",
    ),
  },
  {
    slug: "transportation",
    name: "Transportation",
    hook: "Not collapsing and still working are two different standards, and only the first has been bought.",
    bitesAt: "days",
    tier: 1,
    dependsOn: ["fuel"],
    impacts: bothScenarios(
      ["high", "high"],
      "The province designates routes that must stay open for emergency vehicles after a major earthquake, and states in the same document that it is not retrofitting the bridges on those routes to stay in service.",
      "MOTI-SRDC-05",
    ),
  },
  // Medium for Cascadia and unassessed for the crustal M7, not because the
  // crustal event is milder but because the only study models Cascadia alone.
  {
    slug: "large-infrastructure",
    name: "Port, airport and ferry terminals",
    hook: "The airport's weak point is not the runway. It is every bridge onto Sea Island.",
    bitesAt: "weeks",
    tier: 3,
    dependsOn: ["transportation", "electricity"],
    lever: {
      items: [
        "Do not build a plan around flying out, sailing out, or someone arriving that way to help in the first days. Goods and people reach this region through a small number of very large places, and there is no local substitute for any of them.",
        "Plan household supplies for a stretch when nothing is arriving, rather than for a stretch when the shops are busy.",
      ],
    },
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
    lever: {
      items: [
        "Keep the tank above half. The fuel already in the car is the fuel you can count on, and the half tank costs nothing to carry.",
        "Work out now which of the places you would need to reach are within walking or cycling distance, and keep a bicycle in working order if you have one. Do not store fuel at home: it is a fire risk, and this is one problem a household cannot stockpile its way out of.",
      ],
    },
    impacts: bothScenarios(
      ["high", "high"],
      "Fuel is the resource the repair of every other system runs on, and the province expects supply chains to be inoperable.",
      "PEIRS",
      { cascadia: CRUSTAL_ONLY },
    ),
  },
  {
    slug: "food",
    name: "Food",
    hook: "The food that goes first is the food no pantry can hold: meat, produce, dairy and bread.",
    bitesAt: "days",
    tier: 2,
    dependsOn: ["transportation", "fuel", "large-infrastructure"],
    lever: {
      items: [
        "Stock food that keeps without refrigeration and can be eaten without cooking. Fresh meat, produce, dairy and bread are the part of the shop no household can hold, so the pantry has to be built out of the part that can.",
        "Store the things in a grocery shop that are not food: soap, cleaning products, toilet paper. They travel in the same trucks, they keep indefinitely, and almost nobody puts them by.",
      ],
    },
    impacts: bothScenarios(
      ["high", "high"],
      "The province expects the network that delivers meat, fruit and vegetables, dairy, baked goods and cleaning products to take weeks or months to recover; the problem is moving the goods rather than having them.",
      "PEIRS",
      { cascadia: CRUSTAL_ONLY },
    ),
  },
  // Both dams were reviewed in 2024 under legal compulsion and neither
  // published conclusion mentions earthquakes. Assessed, but not for this.
  {
    slug: "dams-and-reservoirs",
    name: "Dams and reservoirs",
    hook: "Both dams were reviewed by an engineer in 2024, and neither published conclusion mentions earthquakes.",
    bitesAt: "hours",
    tier: 3,
    dependsOn: [],
    lever: {
      items: [
        "Find out whether you live, work or send a child to school below one of these dams. The area a failure would flood has been mapped, because the dam's classification depends on it, and it sits in the dam emergency plan.",
        "Ask for the map. It is not published, and municipalities hold part of the plan, so the way to see it is to ask your municipality or Metro Vancouver for it.",
      ],
    },
    impacts: bothScenarios(
      ["unknown", "unknown"],
      "Cleveland and Seymour Falls were each reviewed by an engineer in 2024, as the law requires every seven years for dams in the top consequence class, and neither review identified an unsafe or unacceptable condition; neither published conclusion mentions earthquakes, and the seismic upgrade has not started.",
      "MV-DSP-2026",
    ),
  },
  {
    slug: "housing",
    name: "Housing",
    hook: "Most people who lose their home lose it to a cordon around a building that is still standing.",
    bitesAt: "weeks",
    tier: 2,
    dependsOn: ["water", "sanitation", "electricity"],
    lever: {
      items: [
        "Find out when your building was put up, what it is built of, and what ground it stands on. Your landlord, your strata or your municipality can tell you, and it is the part of your own risk you can still learn before anything happens.",
        "Agree now with someone outside the region that you could stay with them for months, and agree it out loud rather than assuming it. An arrangement you have actually made is worth more than a shelter place nobody has promised you.",
      ],
    },
    impacts: bothScenarios(
      ["high", "high"],
      "The City of Vancouver states that areas with high concentrations of damage may be closed off for weeks, months or even years, which keeps people out of homes that came through the shaking.",
      "COV-RISK-2024",
    ),
  },
  {
    slug: "health-care",
    name: "Health care",
    hook: "Hospitals stand on the same ground as everything else, and most of the stock predates the current code.",
    bitesAt: "hours",
    tier: 2,
    dependsOn: ["fuel", "electricity", "water"],
    lever: {
      items: [
        "Agree now where the household meets and who everyone checks in with, and make the check-in person someone outside the region. A household that can find each other is a household that does not go to a hospital to look.",
        "Sort out the medicines and equipment that cannot lapse. A pharmacist or clinician can tell you what a longer supply, or a plan for a device that runs on mains power, would look like for you.",
      ],
    },
    impacts: bothScenarios(
      ["medium", "medium"],
      "A study of Vancouver Coastal Health's 127 buildings found about 65 per cent likely to be completely damaged at the ground motion the current building code designs for, and no published document sets the expected casualty load against the region's bed capacity.",
      "DCRRA-APPC",
    ),
  },
  {
    slug: "outside-help",
    name: "Where help comes from",
    hook: "British Columbia's plan stages help with the agencies outside the impact area, and in a megathrust they are inside it.",
    bitesAt: "days",
    tier: 3,
    dependsOn: ["transportation", "large-infrastructure"],
    lever: {
      items: [
        "Find out now which people on your street would need help first: anyone who lives alone, anyone who could not get themselves out of a building, anyone whose medicine matters every day.",
        "Agree with your neighbours, before anything happens, who would check on whom. The province's plan is that a community holds on until outside help reaches it, so who knocks on which door is worth settling in advance.",
      ],
    },
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
 * Part 1. `references` is the register key of every document gathered for a
 * subject whose page is not written, and the route lists them at the foot of
 * the page the way a system page lists the documents behind its band.
 *
 * A stub that showed nothing was the defect this field closes: the site told
 * readers each of these pages carried what had been gathered for it, and four
 * of them carried a single sentence. The keys below are the sources their
 * research files in `docs/research/` actually rest on, and several of them are
 * already cited on `/scenarios/` and `/shaking/ground/`, which is why the
 * casualty stub was the sharpest case: the table was published two clicks away
 * and the page that is about it pointed at nothing.
 *
 * `ground` carries none, because its page module declares its own.
 */
export const SHAKING_PAGES: {
  slug: string;
  name: string;
  hook: string;
  references?: string[];
}[] = [
  {
    slug: "ground",
    name: "Ground conditions",
    hook: "What a building stands on matters more than which building it is.",
  },
  // The four below have no page text yet. Their hooks say what the subject is,
  // and claim nothing, because a claim with no page behind it has nowhere to
  // carry its source.
  {
    slug: "buildings",
    name: "Buildings",
    hook: "Structural performance by era and type, and non-structural failure: glazing, cladding and parapets.",
    references: [
      "COV-RISK-2024",
      "GSC-OF-8853",
      "DCRRA-2025",
      "COV-URM-2000",
      "VBBL-2025",
    ],
  },
  {
    slug: "casualties",
    name: "Casualties",
    hook: "The published casualty ranges for the two scenarios, and what drives the range.",
    references: ["PEIRS", "GSC-OF-8853", "DCRRA-2025", "COV-RISK-2024"],
  },
  {
    slug: "fire-following",
    name: "Fire following",
    hook: "Fire after the shaking, and the Dedicated Fire Protection System: what it covers and what it does not.",
    references: [
      "SCAWTHORN-2020",
      "COV-PREPARES",
      "COV-DFPS-2001",
      "COV-DFPS-DATA",
    ],
  },
  {
    slug: "secondary-hazards",
    name: "Secondary hazards",
    hook: "Landslides, dikes and dams, where the damage arrives after the shaking stops.",
    references: [
      "PEIRS",
      "DCRRA-2025",
      "CJES-2024",
      "RICH-EQ",
      "RICH-THURBER-16",
      "RICH-DMP3-19",
      "RICH-DMP4-21",
      "RICH-DMP5-19",
      "MV-DSP-2026",
      "BOWEN-TSU-19",
    ],
  },
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
  { href: "/licences/", label: "Licences" },
  { href: "/contribute/", label: "Contribute" },
  { href: "/about/", label: "About" },
];
