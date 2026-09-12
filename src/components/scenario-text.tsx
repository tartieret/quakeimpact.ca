import type { ReactNode } from "react";
import { SCENARIOS, SCENARIO_ORDER } from "@/content/site";

/**
 * A passage that differs between the two scenarios, shown as both at once,
 * each under its own name.
 *
 * There is no shape here that shows one and hides the other, and that is the
 * whole design. The published work assesses a single design earthquake per
 * system, so the two columns usually rest on one assessment and the difference
 * between them is a difference in what has been studied rather than in what
 * would happen. A control that picks one column would present that gap as an
 * answer. Where the two genuinely diverge, the divergence is the teaching
 * point and hiding half of it teaches nothing.
 */
export function ScenarioPair({
  cascadia,
  crustal,
}: {
  cascadia: ReactNode;
  crustal: ReactNode;
}) {
  const content = { cascadia, crustal };
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {SCENARIO_ORDER.map((id) => (
        <div key={id} className="flex flex-col gap-2">
          {/* A label, not a heading: the contents rail is built from real
              <h2> elements and a page's heading order is not this
              component's to change. */}
          <span className="text-[0.6875rem] font-semibold tracking-[0.08em] text-ink-faint uppercase">
            {SCENARIOS[id].name}
          </span>
          <div className="text-sm leading-relaxed text-ink-muted">
            {content[id]}
          </div>
        </div>
      ))}
    </div>
  );
}
