"use client";

import Link from "next/link";
import { PHASES, SYSTEMS } from "@/content/site";
import type { SystemEntry } from "@/content/types";
import { useScenario } from "./scenario-context";
import { BandPill } from "./band";
import { DraftMark } from "./status";

function SystemCard({ system }: { system: SystemEntry }) {
  const { scenario } = useScenario();
  const impact = system.impacts[scenario];
  const phase = PHASES.find((p) => p.id === system.bitesAt);

  return (
    <Link
      href={`/after/${system.slug}/`}
      className="group flex flex-col gap-3 bg-paper-raised p-5 transition-colors hover:bg-accent-soft focus-visible:-outline-offset-2"
    >
      <div className="flex items-start justify-between gap-3">
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
        <span className="mt-0.5 shrink-0 text-[0.6875rem] tracking-wide text-ink-faint uppercase">
          {phase?.label}
        </span>
      </div>
      <BandPill band={impact.band} />
      <p className="text-sm leading-relaxed text-ink-muted">{system.hook}</p>
    </Link>
  );
}

/**
 * Every system, or a chosen few.
 *
 * `tier` filters by build order, which is ours rather than the reader's, and
 * is what `/after/` used before it took the whole grid. `slugs` is the landing
 * page's need: a handful of consequences picked for a reader who has not asked
 * for an inventory yet, in the order the page names them rather than in the
 * order the content model holds them. A slug the model does not carry is
 * dropped rather than rendered empty.
 */
export function SystemGrid({
  tier,
  slugs,
}: {
  tier?: 1 | 2 | 3;
  slugs?: string[];
}) {
  const systems = slugs
    ? slugs
        .map((slug) => SYSTEMS.find((s) => s.slug === slug))
        .filter((s): s is SystemEntry => s !== undefined)
    : tier
      ? SYSTEMS.filter((s) => s.tier === tier)
      : SYSTEMS;
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
      {systems.map((s) => (
        <SystemCard key={s.slug} system={s} />
      ))}
    </div>
  );
}

/**
 * The full grid as a table: every system against both scenarios at once.
 * This is the view an emergency planner will screenshot, so it has to hold up.
 *
 * It carries no draft marker, and that is deliberate. Every column here is
 * evidence, and a draft page carries its evidence in full: the two bands and
 * the phase in a row are the same whether the prose behind the name is written
 * or not, so a marker would qualify nothing the reader is looking at. It would
 * also sit one column away from the "Not yet assessed" band, and those are two
 * different absences. One says nobody has published an assessment; the other
 * says we have not written the page. Putting them side by side in the same
 * table invites a reader to take one for the other, which is the one misreading
 * this table cannot afford. The cards carry the marker, and so does the page.
 */
export function SystemMatrix() {
  return (
    /* 34rem of table in a 348px box at phone width: without a tab stop and a
       role, the last column is unreachable from a keyboard. `DataTable` in
       prose-blocks.tsx already does this; the pattern is the same one. */
    <div
      role="region"
      aria-labelledby="system-matrix-caption"
      tabIndex={0}
      className="overflow-x-auto rounded-xl border border-rule"
    >
      <table className="w-full min-w-[34rem] border-collapse text-left">
        <caption id="system-matrix-caption" className="sr-only">
          Every system in both scenarios
        </caption>
        <thead>
          <tr className="border-b border-rule bg-paper-raised">
            <th
              scope="col"
              className="px-4 py-3 text-xs tracking-[0.08em] text-ink-faint uppercase"
            >
              System
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-xs tracking-[0.08em] text-ink-faint uppercase"
            >
              Cascadia M9
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-xs tracking-[0.08em] text-ink-faint uppercase"
            >
              Crustal M7
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-xs tracking-[0.08em] text-ink-faint uppercase"
            >
              Felt worst
            </th>
          </tr>
        </thead>
        <tbody>
          {SYSTEMS.map((s) => (
            <tr key={s.slug} className="border-b border-rule last:border-0">
              <th scope="row" className="px-4 py-3 font-normal">
                <Link href={`/after/${s.slug}/`} className="hover:text-accent">
                  {s.name}
                </Link>
              </th>
              <td className="px-4 py-3">
                <BandPill band={s.impacts.cascadia.band} />
              </td>
              <td className="px-4 py-3">
                <BandPill band={s.impacts.crustal.band} />
              </td>
              <td className="px-4 py-3 text-sm text-ink-muted">
                {PHASES.find((p) => p.id === s.bitesAt)?.label}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
