"use client";

import { SCENARIOS, SCENARIO_ORDER } from "@/content/site";
import { useScenario } from "./scenario-context";

const ROWS: { key: keyof (typeof SCENARIOS)["cascadia"]; label: string }[] = [
  { key: "source", label: "Source" },
  { key: "simulation", label: "Official simulation" },
  { key: "shaking", label: "Shaking in Metro Vancouver" },
  { key: "extent", label: "Geographic extent" },
  { key: "tsunami", label: "Tsunami" },
  { key: "mutualAid", label: "Mutual aid" },
  { key: "recurrence", label: "Recurrence" },
];

/** Side-by-side cards. The contrast between the two is itself the teaching point. */
export function ScenarioCards() {
  const { scenario, setScenario } = useScenario();

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {SCENARIO_ORDER.map((id) => {
        const s = SCENARIOS[id];
        const active = scenario === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setScenario(id)}
            aria-pressed={active}
            className={`flex flex-col gap-4 rounded-xl border p-6 text-left transition-colors ${
              active
                ? "border-accent bg-accent-soft"
                : "border-rule bg-paper-raised hover:border-rule-strong"
            }`}
          >
            <div>
              <h3 className="font-display text-2xl tracking-tight">{s.name}</h3>
              <p className="mt-1 text-sm text-ink-muted">{s.strapline}</p>
            </div>
            <dl className="grid gap-2 border-t border-rule pt-4 text-sm">
              {ROWS.map((row) => (
                <div
                  key={row.key}
                  className="grid gap-0.5 sm:grid-cols-[10rem_1fr] sm:gap-3"
                >
                  <dt className="text-xs tracking-wide text-ink-faint uppercase sm:pt-0.5">
                    {row.label}
                  </dt>
                  <dd className="leading-snug">{s[row.key]}</dd>
                </div>
              ))}
            </dl>
            <span className="text-xs font-medium text-accent">
              {active
                ? "Currently showing this scenario"
                : "Show this scenario across the site"}
            </span>
          </button>
        );
      })}
    </div>
  );
}
