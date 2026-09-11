import type { Reference } from "./types";

/**
 * The source register. One entry per document; the key is the citation key
 * used in prose and in `Impact.source`.
 *
 * SCAFFOLD. Every `href` below points at example.org and every entry is
 * flagged `placeholder`. That flag is what makes the marker and the reference
 * list say so on the page — a fake citation must never look like a real one.
 * Replace the entry, drop the flag, and nothing else changes.
 */
export const REFERENCES: Record<string, Reference> = {
  "nrcan-hazard": {
    id: "nrcan-hazard",
    kind: "report",
    title: "National seismic hazard model for Canada",
    publisher: "Natural Resources Canada",
    year: 2020,
    href: "https://example.org/placeholder/nrcan-seismic-hazard",
    note: "Ground motion inputs for both scenarios.",
    placeholder: true,
  },
  "mv-liquefaction": {
    id: "mv-liquefaction",
    kind: "dataset",
    title: "Regional liquefaction susceptibility mapping",
    publisher: "Metro Vancouver",
    year: 2019,
    href: "https://example.org/placeholder/liquefaction-susceptibility",
    note: "The ground layer under every map on the site. Licence to confirm.",
    placeholder: true,
  },
  "crossing-assessments": {
    id: "crossing-assessments",
    kind: "report",
    title: "Seismic assessment of Fraser River and Burrard Inlet crossings",
    publisher: "BC Ministry of Transportation and Infrastructure",
    year: 2021,
    href: "https://example.org/placeholder/crossing-assessments",
    note: "Crossing by crossing. Read for approaches, not only spans.",
    placeholder: true,
  },
  "drr-network": {
    id: "drr-network",
    kind: "report",
    title: "Disaster Response Route network — designation and signage",
    publisher: "Metro Vancouver / Emergency Management BC",
    year: 2022,
    href: "https://example.org/placeholder/disaster-response-routes",
    note: "Responder routes. The public is expected to stay off them.",
    placeholder: true,
  },
  "christchurch-displacement": {
    id: "christchurch-displacement",
    kind: "analogue",
    title: "Population movement after the Canterbury earthquake sequence",
    publisher: "Statistics New Zealand",
    year: 2013,
    href: "https://example.org/placeholder/canterbury-population",
    note: "Illustrates how departure plays out over months. Generates no numbers for Vancouver.",
    placeholder: true,
  },
  "kobe-port": {
    id: "kobe-port",
    kind: "analogue",
    title: "The port of Kobe after the 1995 Hyogo-ken Nanbu earthquake",
    publisher: "TBD",
    year: 1995,
    href: "https://example.org/placeholder/kobe-port",
    note: "A port city of similar scale losing its port. Illustrates wharf and crane damage; supplies no Vancouver figure.",
    placeholder: true,
  },
  "tohoku-fuel": {
    id: "tohoku-fuel",
    kind: "analogue",
    title: "Fuel distribution after the 2011 Great East Japan earthquake",
    publisher: "Government of Japan",
    year: 2011,
    href: "https://example.org/placeholder/tohoku-fuel",
    note: "The fuel existed; the terminals and trucks to move it did not. Shows the mechanism, not a duration for here.",
    placeholder: true,
  },
  "fuel-days-of-supply": {
    id: "fuel-days-of-supply",
    kind: "report",
    title: "Lower Mainland refined fuel supply and terminal capacity",
    publisher: "TBD",
    href: "https://example.org/placeholder/fuel-supply",
    note: "Lead with the mechanism, not a days-of-supply figure — the only Lower Mainland figures trace to one phone interview during the 2021 flood.",
    placeholder: true,
  },

  /* Internal pages are citable too — a claim can point at the page that
     carries the reasoning instead of repeating it. */
  "page-method": {
    id: "page-method",
    kind: "page",
    title: "How the bands are defined",
    href: "/method/",
    note: "The rubric behind every low / medium / high on the site.",
  },
  "page-fuel": {
    id: "page-fuel",
    kind: "page",
    title: "Fuel",
    href: "/after/fuel/",
    note: "Why fuel is the dependency underneath the road network.",
  },
};

export const reference = (id: string): Reference | undefined => REFERENCES[id];
