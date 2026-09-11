"use client";

import type { ReactNode } from "react";
import { PHASES, SCENARIOS } from "@/content/site";
import type { Phase } from "@/content/types";
import { useScenario } from "./scenario-context";

/**
 * The aftermath told as four stretches of time rather than as a list of
 * systems.
 *
 * `TimelineStrip` is the same four phases used as an index: it names them and
 * moves the reader on. This is the other job — the one the landing page needs —
 * where each phase carries a sentence about what the region is living through
 * then. A reader arriving cold meets a consequence before they meet the site's
 * filing system.
 *
 * Presentational, and it holds no words of its own: the headings and the
 * sentences come from the page module, already rendered on the server with
 * their citation markers in them. What it reads for itself is the weather,
 * which is a condition of the scenario rather than a claim about a phase, and
 * which is the reason this is a client component at all.
 *
 * The phase labels and windows come from `PHASES`, so the strip and this
 * cannot disagree about what "weeks" means.
 */
export function PhaseNarrative({
  items,
}: {
  items: { phase: Phase; heading: string; body: ReactNode }[];
}) {
  const { scenario } = useScenario();

  return (
    <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
      <ol className="flex flex-col gap-px bg-rule">
        {items.map((item) => {
          const phase = PHASES.find((p) => p.id === item.phase);
          return (
            <li
              key={item.phase}
              className="grid gap-3 bg-paper-raised px-5 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6 sm:px-6"
            >
              <p className="flex items-baseline gap-2 sm:flex-col sm:gap-0.5">
                <span className="font-display text-xl text-accent">
                  {phase?.label}
                </span>
                <span className="text-xs text-ink-faint">{phase?.window}</span>
              </p>
              <div>
                <h3 className="font-display text-lg leading-snug tracking-tight text-balance">
                  {item.heading}
                </h3>
                <div className="prose-body mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {item.body}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="bg-paper-raised px-5 py-4 text-sm leading-relaxed text-ink-muted sm:px-6">
        <span className="text-xs font-semibold tracking-[0.08em] text-ink-faint uppercase">
          Weather throughout
        </span>
        <span className="mt-1 block">{SCENARIOS[scenario].conditions}</span>
      </p>
    </div>
  );
}
