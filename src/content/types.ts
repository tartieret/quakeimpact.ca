import type { ReactNode } from "react";

export type ScenarioId = "cascadia" | "crustal";

export type Band = "low" | "medium" | "high" | "unknown";

export type Phase = "hours" | "days" | "weeks" | "months";

/**
 * Where a page is in the making. A page whose evidence is gathered and whose
 * text is not written is a draft; a written page has no status and shows
 * nothing.
 *
 * It is a field rather than a sentence because it is state, and state belongs
 * in the content model. A reader is told by a marker beside the title and a
 * short notice at the top of the body, both drawn by `src/components/status.tsx`,
 * rather than by a paragraph in which the site explains its own build order.
 *
 * It is a union of one on purpose. The only state the site has needed to show
 * so far is this one, and a second value should arrive with a page that needs
 * it rather than in anticipation.
 */
export type PageStatus = "draft";

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

/**
 * The action a system carries in its own right, independent of whether the
 * page around it has been written.
 *
 * It belongs to the system rather than to the standing unwritten text, because
 * the useful action is different for every system: a toilet with no water and a
 * gas meter that only a contractor may reopen call for different things. Plain
 * strings rather than nodes, because this file's content ships from a `.ts`
 * module and an action stated here cites nothing: it is practical advice, and
 * the site's convention is that such a line carries no marker.
 */
export interface StandingLever {
  /** One or two actions, each a plain sentence. */
  items: string[];
}

/**
 * What an unbanded system carries in place of its two impact cells: one
 * sentence of mechanism and the source it rests on, standing for both
 * earthquakes because nothing behind it was measured on either.
 */
export interface SystemSummary {
  mechanism: string;
  /** Source key from the source register. */
  source: string;
}

interface SystemBase {
  slug: string;
  name: string;
  /**
   * Set where this system's page carries its evidence and not its text. The
   * grid, the route and the page title all read it, so the state is stated
   * once and shown everywhere.
   */
  status?: PageStatus;
  /** The "what people underestimate" line. */
  hook: string;
  /**
   * What a reader can do about this system. Carried here so that a page whose
   * body is not written still ends with a lever: severity without efficacy is
   * the failure mode the style guide names, and these are the pages a search
   * engine lands someone on. A written page overrides it with its own.
   */
  lever?: StandingLever;
  /**
   * Slugs of systems this one relies on, shown as "Related systems" on its page.
   * Navigation, not evidence: nothing on the site draws or counts these links.
   */
  dependsOn: string[];
  /** Build-order tier from the project plan. */
  tier: 1 | 2 | 3;
}

/** A system that fails and comes back, banded per scenario on the rubric. */
export interface BandedSystem extends SystemBase {
  /** Where in the timeline this system is felt worst. */
  bitesAt: Phase;
  impacts: Record<ScenarioId, Impact>;
  summary?: never;
}

/**
 * A system with no restoration time for a band to measure, so no band, no
 * phase and no scenario columns: how people treat each other after a disaster
 * is the case. It is not "not yet assessed", which says an assessment could be
 * published and has not been. Here none could be, and saying otherwise would
 * put a gap in the record that is not there. Widening `Band` to cover it was
 * the option `docs/research/impact-bands.md` rejected for weather.
 */
export interface UnbandedSystem extends SystemBase {
  bitesAt?: never;
  impacts?: never;
  summary: SystemSummary;
}

export type SystemEntry = BandedSystem | UnbandedSystem;

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
  /**
   * The page in one or two plain sentences, for a search result and for the
   * card a link to this page unfurls into on social media. Required, because a
   * page without one falls back to the site's own tagline and every result for
   * this site then says the same thing.
   *
   * A plain string rather than a node: it is read by a machine and printed
   * without markup, so it can carry no citation marker. It says only what the
   * page's own standfirst already says, which is copy that has been through
   * `docs/style-guide.md`, and the page one click away carries the markers.
   * Around 160 characters is what a search engine shows.
   */
  description: string;
  /**
   * Normally absent: a module exists because the page is written. It is here so
   * that a written page can be marked a draft when its text is under revision,
   * without that fact having to be written into the prose.
   */
  status?: PageStatus;
  /** Label in navigation and on cards. */
  nav: string;
  /** Kicker above the title, where the page belongs to a part of the site. */
  kicker?: string;
  /**
   * The standfirst under the title. A ReactNode, because a standfirst is
   * often where the page's headline number sits and a number needs its source.
   */
  standfirst: ReactNode;
  /**
   * Reference ids in the order they are first cited on the page. Marker
   * numbering is this array's order, so it is the page's citation contract.
   */
  references: string[];
}

/**
 * An entry in the site navigation.
 *
 * `children` is the pages inside a part, and it is derived rather than written:
 * `NAV` builds it from `SHAKING_PAGES` and `SYSTEMS`, so adding a system stays
 * one array entry and no list has to be kept in step with another.
 *
 * `childrenLabel` names what those pages are in the site's own words, because
 * "the systems" and "the subjects" are not interchangeable and a generic label
 * would tell a reader nothing. It carries no count: a counted label is a second
 * fact to keep true, and it would go stale the first time the list grows.
 */
export interface NavItem {
  href: string;
  label: string;
  children?: NavItem[];
  childrenLabel?: string;
}
