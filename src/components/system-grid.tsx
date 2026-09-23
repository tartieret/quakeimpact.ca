import Link from "next/link";
import { PHASES, SCENARIOS, SYSTEMS, impactsOf } from "@/content/site";
import type { SystemEntry } from "@/content/types";
import { Cite } from "./citation";
import { NotPublished } from "./prose-blocks";
import { DraftMark } from "./status";

function SystemCard({ system }: { system: SystemEntry }) {
  return (
    <Link
      href={`/after/${system.slug}/`}
      className="group flex flex-col gap-3 bg-paper-raised p-5 transition-colors hover:bg-accent-soft focus-visible:-outline-offset-2"
    >
      {/* Neither the duration nor the phase a system bites at is on the card.
          Both are meant to be read against the other systems, which the table
          does, and the phase lives on the timeline strip, where the four are
          named together. What the card carries is the hook, which is the
          sentence that earns the click. */}
      <h3 className="font-display text-lg leading-snug tracking-tight group-hover:text-accent">
        {system.name}
        {/* On the card as well as on the page, so a reader knows before the
            click rather than after it. Inside the heading here, because a
            card's heading is its whole label and the mark is part of what the
            reader is choosing between. */}
        {system.status === "draft" ? (
          <>
            {" "}
            <DraftMark />
          </>
        ) : null}
      </h3>
      <p className="text-sm leading-relaxed text-ink-muted">{system.hook}</p>
    </Link>
  );
}

/**
 * Every system, or one tier of them. `tier` filters by build order, which is
 * ours rather than the reader's, and no page currently asks for it.
 */
export function SystemGrid({ tier }: { tier?: 1 | 2 | 3 }) {
  const systems = tier ? SYSTEMS.filter((s) => s.tier === tier) : SYSTEMS;

  /* The gap between cards is the container's own background showing through, so
     a row the cards do not fill ends as a block of rule colour that reads as a
     card with nothing in it. Fourteen systems fill two columns and leave one
     such cell in three, so the tail of the grid is padded to the row.
     Full class strings, because Tailwind cannot see a built one. */
  const short = (columns: number) => (columns - (systems.length % columns)) % columns;
  const fillers = [...Array(Math.max(short(2), short(3)))].map((_, i) => {
    const sm = i < short(2);
    const lg = i < short(3);
    if (sm && lg) return "hidden bg-paper-raised sm:block";
    if (lg) return "hidden bg-paper-raised lg:block";
    return "hidden bg-paper-raised sm:block lg:hidden";
  });

  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
      {systems.map((s) => (
        <SystemCard key={s.slug} system={s} />
      ))}
      {fillers.map((className, i) => (
        <span key={i} aria-hidden className={className} />
      ))}
    </div>
  );
}

/**
 * Every system in one table: how long it is out, as a document states it, and
 * when it is felt worst. This is the view an emergency planner will screenshot,
 * so it has to hold up.
 *
 * Each duration carries a marker, so the page rendering the table lists its
 * sources in `meta.references`. A system with no published duration says so
 * rather than leaving a blank that reads as an oversight. Where the two
 * earthquakes read differently, the cell names each.
 *
 * It carries no draft marker: every column is evidence, and the evidence is
 * the same whether the prose behind the name is written or not. The cards
 * carry the marker, and so does the page.
 */
export function SystemMatrix() {
  const th = "px-4 py-3 text-xs tracking-[0.08em] text-ink-faint uppercase";
  return (
    /* Wider than a phone: without a tab stop and a role, the last column is
       unreachable from a keyboard. `DataTable` in prose-blocks.tsx does the
       same. */
    <div
      role="region"
      aria-labelledby="system-matrix-caption"
      tabIndex={0}
      className="overflow-x-auto rounded-xl border border-rule"
    >
      <table className="w-full min-w-[20rem] border-collapse text-left">
        <caption id="system-matrix-caption" className="sr-only">
          How long each system is disrupted, and when it is felt worst
        </caption>
        <thead>
          <tr className="border-b border-rule bg-paper-raised">
            <th scope="col" className={th}>
              System
            </th>
            <th scope="col" className={th}>
              Expected disruption
            </th>
            <th scope="col" className={th}>
              Felt worst
            </th>
          </tr>
        </thead>
        <tbody>
          {SYSTEMS.map((s) => {
            const impacts = impactsOf(s);
            return (
              <tr key={s.slug} className="border-b border-rule align-top last:border-0">
                <th scope="row" className="px-4 py-3 font-normal">
                  <Link href={`/after/${s.slug}/`} className="hover:text-accent">
                    {s.name}
                  </Link>
                </th>
                <td className="px-4 py-3 text-sm">
                  <ul className="flex flex-col gap-1">
                    {impacts.map(({ scenario, impact }) => (
                      <li key={scenario ?? "both"}>
                        {scenario ? (
                          <span className="text-ink-faint">
                            {SCENARIOS[scenario].short}:{" "}
                          </span>
                        ) : null}
                        {impact.disruption ? (
                          <>
                            {impact.disruption.text}{" "}
                            <Cite id={impact.disruption.source} />
                          </>
                        ) : (
                          <NotPublished label="No published estimate" />
                        )}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-3 text-sm text-ink-muted">
                  {PHASES.find((p) => p.id === s.bitesAt)?.label ?? "Not timed"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
