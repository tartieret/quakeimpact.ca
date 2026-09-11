"use client";

import type { ReactNode } from "react";
import { SCENARIOS, SCENARIO_ORDER } from "@/content/site";
import { useScenario } from "./scenario-context";

/**
 * Scenario-conditional prose.
 *
 * Route files are server components, so this is the client boundary a page
 * crosses to vary a sentence. Keep it around the sentence, not around the
 * section: both halves are passed in as props, already rendered on the server,
 * and only the choice between them happens on the client.
 */

/** Inline text naming the scenario the reader has selected. */
export function ScenarioName({ form = "name" }: { form?: "name" | "short" }) {
  const { scenario } = useScenario();
  return <>{form === "short" ? SCENARIOS[scenario].short : SCENARIOS[scenario].name}</>;
}

/**
 * A sentence that differs between the two scenarios. Inline by default, so it
 * sits inside a paragraph; pass `as="p"` where the whole paragraph varies.
 *
 * Only for places where the reader has chosen one scenario and wants an answer
 * for it. Where the contrast between the two is the point being taught — every
 * system page — use `ScenarioPair`, which shows both.
 */
export function ScenarioText({
  cascadia,
  crustal,
  as = "span",
}: {
  cascadia: ReactNode;
  crustal: ReactNode;
  as?: "span" | "p";
}) {
  const { scenario } = useScenario();
  const content = scenario === "cascadia" ? cascadia : crustal;
  return as === "p" ? <p>{content}</p> : <>{content}</>;
}

/**
 * Both scenarios at once, each under its own name.
 *
 * System pages show the two side by side whatever the toggle says, because the
 * contrast is the teaching point. This is the shape that cannot hide one of
 * them, and it is the default choice: reach for `ScenarioText` only where the
 * reader wants one answer rather than a comparison.
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
