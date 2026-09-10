"use client";

import { SCENARIOS, SCENARIO_ORDER } from "@/content/site";
import { useScenario } from "./scenario-context";

/**
 * The site's one global control. Every impact band on every page reads from it.
 * Kept in the header so the reader can always see which event they are looking at.
 */
export function ScenarioToggle({ size = "sm" }: { size?: "sm" | "lg" }) {
  const { scenario, setScenario } = useScenario();
  const lg = size === "lg";

  return (
    <div
      role="radiogroup"
      aria-label="Earthquake scenario"
      className={`inline-flex rounded-full border border-rule-strong bg-paper-raised p-0.5 ${
        lg ? "text-sm" : "text-xs"
      }`}
    >
      {SCENARIO_ORDER.map((id) => {
        const active = scenario === id;
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setScenario(id)}
            className={`rounded-full font-medium whitespace-nowrap transition-colors ${
              lg ? "px-4 py-2" : "px-3 py-1.5"
            } ${
              active ? "bg-ink text-paper" : "text-ink-muted hover:text-ink"
            }`}
          >
            {SCENARIOS[id].short}
          </button>
        );
      })}
    </div>
  );
}

/** Inline text that names the active scenario, for use inside prose. */
export function ScenarioName() {
  const { scenario } = useScenario();
  return <>{SCENARIOS[scenario].name}</>;
}
