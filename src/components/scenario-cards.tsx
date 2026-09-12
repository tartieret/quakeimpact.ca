import { SCENARIOS, SCENARIO_ORDER } from "@/content/site";

const ROWS: { key: keyof (typeof SCENARIOS)["cascadia"]; label: string }[] = [
  { key: "source", label: "Source" },
  { key: "simulation", label: "Official simulation" },
  { key: "shaking", label: "Shaking in Metro Vancouver" },
  { key: "extent", label: "Geographic extent" },
  { key: "tsunami", label: "Tsunami" },
  { key: "mutualAid", label: "Mutual aid" },
  { key: "recurrence", label: "Recurrence" },
];

/**
 * Side-by-side cards. The contrast between the two is itself the teaching
 * point, so both are read together rather than chosen between: the rows line
 * up so that source, shaking, extent and mutual aid can be read straight
 * across.
 */
export function ScenarioCards() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {SCENARIO_ORDER.map((id) => {
        const s = SCENARIOS[id];
        return (
          <div
            key={id}
            className="flex flex-col gap-4 rounded-xl border border-rule bg-paper-raised p-6"
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
          </div>
        );
      })}
    </div>
  );
}
