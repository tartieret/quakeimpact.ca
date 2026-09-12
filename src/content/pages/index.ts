import type { ReactNode } from "react";
import type { LeverProps } from "@/components/page-parts";
import type { PageMeta } from "@/content/types";
import { communications } from "./communications";
import { damsAndReservoirs } from "./dams-and-reservoirs";
import { electricity } from "./electricity";
import { food } from "./food";
import { fuel } from "./fuel";
import { gas } from "./gas";
import { healthCare } from "./health-care";
import { housing } from "./housing";
import { largeInfrastructure } from "./large-infrastructure";
import { outsideHelp } from "./outside-help";
import { sanitation } from "./sanitation";
import { transportation } from "./transportation";
import { water } from "./water";

/**
 * Page modules: the body of a written page, as typed content.
 *
 * The copy in `docs/copy/` is markdown and there is no markdown pipeline. A
 * page module is where a finished copy file lands. It is the source of truth
 * for that page's words, and the route template that renders it holds none.
 *
 * The shape is deliberately narrow. A module cannot write a heading of its
 * own, cannot demote its lever into prose, and cannot cite a key it has not
 * declared:
 *
 * - Every `<h2>` on the page comes from a `PageSection.title`, because the
 *   route renders each section through `Section`. The contents rail reads
 *   `main section[id] > h2`, so a section that exists is a section the reader
 *   can navigate to, and there is no way to write a heading that misses it.
 * - `lever` is its own field, not one section among many, so the block that
 *   makes the page usable cannot be demoted to prose. A page that describes a
 *   consequence carries one; `/method/` describes none and leaves it off.
 * - `meta.references` is the page's citation contract. `Cite` numbers a marker
 *   by the key's position in that array and `ReferenceList` reads the same
 *   array, so the markers and the list at the foot of the page cannot drift.
 *   A key that is cited but not declared renders a visible `[?]` rather than a
 *   number, which is what makes the contract self-enforcing on the page.
 *
 * See `README.md` in this folder for the skeleton to copy.
 */

/** One `<h2>` and the body under it. The route renders this through `Section`. */
export interface PageSection {
  /** The `<h2>`. Reads as a standalone sentence about the world. */
  title: string;
  /** Overrides the id slugified from `title`. Rarely needed. */
  id?: string;
  /** One or two sentences between the heading and the body. */
  lede?: ReactNode;
  /**
   * The section body, written with the primitives in
   * `@/components/page-parts`: `Prose`, `Subhead`, `DataTable`, `Quote`,
   * `VerificationNote`, `Figure`, `MapPlaceholder`.
   */
  body: ReactNode;
}

/**
 * The closing "what you can do" block. It is the props of `Lever` itself, so a
 * route hands the whole object to the component and a slot added to the
 * component is a slot a module can fill without a route changing.
 */
export type PageLever = LeverProps;

export interface PageModule {
  meta: PageMeta;
  sections: PageSection[];
  /**
   * The lever. Every page that describes a consequence carries one: no doom
   * without a lever. It is optional only because `/method/` describes no
   * consequence. That page explains the rubric, and a lever written for it
   * would be a lever written to satisfy a type.
   */
  lever?: PageLever;
}

/** Keyed on `meta.route`, so the key and the page cannot disagree. */
function register(modules: PageModule[]): Record<string, PageModule> {
  return Object.fromEntries(modules.map((m) => [m.meta.route, m]));
}

/**
 * Order follows `SYSTEMS` in `src/content/site.ts`, so the register reads in the
 * same order the reader meets the pages in.
 */
export const PAGES = register([
  communications,
  electricity,
  water,
  sanitation,
  gas,
  transportation,
  largeInfrastructure,
  fuel,
  food,
  damsAndReservoirs,
  housing,
  healthCare,
  outsideHelp,
]);

/** The module for a route, or undefined where the page is not written yet. */
export const pageFor = (route: string): PageModule | undefined => PAGES[route];

/** The module for a system under `/after/`, by slug. */
export const pageForSystem = (slug: string): PageModule | undefined =>
  pageFor(`/after/${slug}/`);
