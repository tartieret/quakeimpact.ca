import type { ReactNode } from "react";
import { PHASES } from "@/content/site";
import type { Phase } from "@/content/types";

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
 * their citation markers in them. It reads nothing for itself and holds no
 * state, so it stays a server component; a sentence that varies by scenario
 * crosses the client boundary inside the item it belongs to.
 *
 * The phase labels and windows come from `PHASES`, so the strip and this
 * cannot disagree about what "weeks" means.
 *
 * There is no weather footer. Weather is not a fifth phase and it is not a
 * period of the aftermath: it is the condition every phase happens in, and it
 * belongs in the prose under the timeline, where the two scenarios' conditions
 * can be set against each other in one sentence rather than swapped silently
 * under a label.
 */
export function PhaseNarrative({
  items,
}: {
  items: { phase: Phase; heading: string; body: ReactNode }[];
}) {
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
    </div>
  );
}
