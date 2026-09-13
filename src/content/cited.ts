import { ALL_PAGES } from "./pages";
import { REFERENCES } from "./references";
import { SHAKING_PAGES, SYSTEMS } from "./site";

/**
 * Which documents the site actually stands on.
 *
 * `REFERENCES` is generated from `docs/research/sources.md`, and that register
 * is a research file first: it holds every document the project has read,
 * including the ones behind findings whose page is not written yet and the
 * negative results that are worth keeping precisely because nothing came of
 * them. `/sources/` used to print the register whole, which put roughly a
 * third of the page behind no claim a reader could go and check, under a
 * standfirst promising the opposite.
 *
 * So the page asks this question instead, and the answer is derived rather
 * than listed. A hand-kept allow-list is the thing the register exists to
 * avoid: it would drift the first time a page cited something new.
 *
 * Nothing is deleted from the register. A document that supports research and
 * not yet a sentence on the site stays where the research can reach it, and
 * arrives here in the same edit that first cites it.
 */
const ids = new Set<string>();

/**
 * `meta.references` is each page's citation contract — `Cite` numbers markers
 * from it and `ReferenceList` prints it — so it is already the authoritative
 * list of what that page cites, and reading it here needs no second parse of
 * the prose.
 */
for (const page of ALL_PAGES) {
  for (const id of page.meta.references) ids.add(id);
}

/**
 * The band grid cites outside any page body: `ImpactCell` resolves
 * `Impact.source` against the register and renders it under the cell. A system
 * whose page is unwritten still shows its bands, so these keys are cited on
 * the site whether or not a page module mentions them.
 */
for (const system of SYSTEMS) {
  for (const impact of Object.values(system.impacts)) ids.add(impact.source);
}

/** The same, for a shaking subject listing its evidence ahead of its text. */
for (const page of SHAKING_PAGES) {
  for (const id of page.references ?? []) ids.add(id);
}

/**
 * Datasets are cited by being licensed. Attribution is a condition of the
 * licences rather than a courtesy, and `/sources/` is where a dataset is named
 * with the licence stated on it, so one reaches the reader even where no
 * sentence cites it. `/licences/` carries the attribution strings themselves
 * and lists nothing, which is why this loop is what puts the datasets in front
 * of anybody.
 */
for (const entry of Object.values(REFERENCES)) {
  if (entry.kind === "dataset") ids.add(entry.id);
}

/** Reference ids the site renders somewhere a reader can reach. */
export const CITED_REFERENCES: ReadonlySet<string> = ids;
