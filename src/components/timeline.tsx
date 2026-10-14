import type { ReactNode } from "react";
import { PHASES, SCENARIOS } from "@/content/site";
import type { Phase } from "@/content/types";
import { ScenarioPair } from "./scenario-text";

/**
 * The spine of Part 2. Used as a page-level index on /after and, compact, in
 * the "At a glance" section of each system page, marking when that system is
 * felt worst.
 *
 * The marked phase is named in words inside its own cell, not only tinted, so
 * a reader who cannot tell the tint apart still reads which phase it is.
 *
 * `children` are further rows set under the phases inside the same frame. The
 * /after index passes `TimelineWeather` there; a system page passes nothing.
 */
export function TimelineStrip({
  active,
  compact = false,
  children,
}: {
  active?: Phase;
  compact?: boolean;
  children?: ReactNode;
}) {
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
              {on ? (
                <span className="mt-1 text-[0.6875rem] font-semibold tracking-[0.08em] text-accent uppercase">
                  Felt worst
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
      {children}
    </div>
  );
}

/**
 * The weather, as a row under the phases in `TimelineStrip`'s frame.
 *
 * Weather rides here rather than in the impact grid. It does not fail, so it
 * has no restoration time, but both official scenarios set a weather condition,
 * and the two pull in opposite directions, so the same day of the same
 * disaster is a different emergency in each. See `docs/research/scenarios.md`.
 * Both are shown, because that opposition is the thing worth knowing and
 * neither one is the reader's forecast.
 *
 * It sits on the /after index only. A system page's strip marks a phase and
 * nothing else, and /scenarios/ sets the conditions out on its own.
 */
export function TimelineWeather() {
  return (
    <div className="bg-paper-raised px-4 py-3">
      <span className="text-xs font-semibold tracking-[0.08em] text-ink-faint uppercase">
        Weather throughout
      </span>
      <div className="mt-2">
        <ScenarioPair
          cascadia={SCENARIOS.cascadia.conditions}
          crustal={SCENARIOS.crustal.conditions}
        />
      </div>
    </div>
  );
}
