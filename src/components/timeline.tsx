import { PHASES } from "@/content/site";
import type { Phase } from "@/content/types";

/**
 * The spine of Part 2. Used as a page-level index on /after and as a marker
 * strip on each system page showing when that system is felt worst.
 */
export function TimelineStrip({
  active,
  compact = false,
}: {
  active?: Phase;
  compact?: boolean;
}) {
  return (
    <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-4">
      {PHASES.map((phase) => {
        const on = phase.id === active;
        return (
          <li
            key={phase.id}
            aria-current={on ? "step" : undefined}
            className={`flex flex-col gap-0.5 bg-paper-raised px-4 ${
              compact ? "py-3" : "py-5"
            } ${on ? "bg-accent-soft" : ""}`}
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
  );
}
