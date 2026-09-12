import type { ReactNode } from "react";
import { REFERENCES } from "@/content/references";
import { CitationProvider, type CitationEntry } from "./citation-client";
import { ReferenceList } from "./citation-client";
import { Section } from "./page-parts";

/**
 * Inline citations.
 *
 * A page declares its references once, in order:
 *
 *   const REFS = ["mv-liquefaction", "crossing-assessments"];
 *   <Citations ids={REFS}> … <ReferenceList /> </Citations>
 *
 * Prose then cites by key — <Cite id="crossing-assessments" /> — and the
 * number comes from the declared order, so it cannot drift from the list at
 * the foot of the page. Clicking a marker opens the reference in place;
 * the same entry is also in the list, with a link back to where it was cited.
 *
 * This half runs on the server, and it is the only half that touches the
 * register. `Citations` resolves the page's declared keys here, so what reaches
 * the browser is the handful of documents the page actually cites rather than
 * all 325. The marker and the list are in `citation-client.tsx`, which imports
 * no register of its own; they are re-exported here so a page module still
 * imports the whole set from `@/components/citation`.
 */

export function Citations({
  ids,
  children,
}: {
  ids: string[];
  children: ReactNode;
}) {
  // A declared key the register does not hold keeps its place in the numbering
  // and renders as a visible `[?]`, rather than silently renumbering the page.
  const entries: CitationEntry[] = ids.map((id) => ({
    id,
    reference: REFERENCES[id] ?? null,
  }));

  return <CitationProvider entries={entries}>{children}</CitationProvider>;
}

export { Cite, ReferenceList } from "./citation-client";
export type { CitationEntry } from "./citation-client";

/**
 * The heading and the line under it that close every page carrying sources.
 *
 * They are strings rather than markup because the landing page lays its
 * sections out full-bleed and cannot use `Section`. Every other route renders
 * `SourcesSection` below and holds no copy of its own, which is what
 * `CLAUDE.md` asks of a route template: the same two sentences were written
 * out in twelve of them.
 */
export const SOURCES_TITLE = "Sources on this page";
export const SOURCES_LEDE =
  "Numbered as cited above. Every marker in the text opens its entry in place; these are the same entries, with a link back to where each was used.";

/**
 * The sources section an article route closes on.
 *
 * `numbered` is false on a page whose body is not written: it still lists the
 * documents gathered for its subject, but nothing above the list carries a
 * marker, so the line that says the numbering follows the text would be
 * describing prose that is not there.
 */
export function SourcesSection({ numbered = true }: { numbered?: boolean }) {
  return (
    <Section title={SOURCES_TITLE} lede={numbered ? SOURCES_LEDE : undefined}>
      <ReferenceList />
    </Section>
  );
}
