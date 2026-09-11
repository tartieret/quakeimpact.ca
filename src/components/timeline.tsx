"use client";

import { PHASES, SCENARIOS } from "@/content/site";
import type { Phase } from "@/content/types";
import { useScenario } from "./scenario-context";

/**
 * The spine of Part 2. Used as a page-level index on /after and as a marker
 * strip on each system page showing when that system is felt worst.
 *
 * Weather rides here rather than in the impact grid. It does not fail, so it
 * cannot carry a band — but both official scenarios set a weather condition,
 * and the two pull in opposite directions, so the same day of the same
 * disaster is a different emergency in each. See `docs/research/scenarios.md`.
 */
export function TimelineStrip({
  active,
  compact = false,
}: {
  active?: Phase;
  compact?: boolean;
}) {
  const { scenario } = useScenario();

  return (
    <div className="flex flex-col gap-px overflow-hidden rounded-lg border border-rule bg-rule">
      <ol className="grid grid-cols-2 gap-px bg-rule sm:grid-cols-4">
        {PHASES.map((phase) => {
          const on = phase.id === active;
          return (
            <li
              key={phase.id}
              aria-current={on ? "step" : undefined}
              className={`flex flex-col gap-0.5 px-4 ${
                compact ? "py-3" : "py-5"
              } ${on ? "bg-accent-soft" : "bg-paper-raised"}`}
            >
              <span
                className={`font-display ${compact ? "text-base" : "text-xl"} ${
                  on ? "text-accent" : "text-ink"
                }`}
              >
                {phase.label}
              </span>
              <span className="text-xs text-ink-faint">{phase.window}</span>
            </li>
          );
        })}
      </ol>

      <p className="bg-paper-raised px-4 py-3 text-sm leading-relaxed text-ink-muted">
        <span className="text-xs font-semibold tracking-[0.08em] text-ink-faint uppercase">
          Weather throughout
        </span>{" "}
        <span className="mt-1 block">{SCENARIOS[scenario].conditions}</span>
      </p>
    </div>
  );
}
