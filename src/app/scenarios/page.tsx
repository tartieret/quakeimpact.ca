import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Prose,
  Callout,
  NextPrev,
} from "@/components/page-parts";
import { ScenarioCards } from "@/components/scenario-cards";
import { SystemMatrix } from "@/components/system-grid";
import { SCENARIOS, SCENARIO_ORDER } from "@/content/site";
import { lorem, loremParagraphs } from "@/content/lorem";

export const metadata: Metadata = { title: "Two scenarios" };

export default function ScenariosPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Two different earthquakes, not one in two sizes"
        title="Two scenarios"
        standfirst={lorem(2, 30)}
      />

      <Section title="Side by side" lede={lorem(1, 31)}>
        <ScenarioCards />
      </Section>

      <Section title="Which one is worse depends on what you mean">
        <Callout label="The contrast most people get backwards">
          <p className="max-w-2xl text-lg leading-relaxed">
            The crustal event is worse <em>for Vancouver</em>. The Cascadia
            event is worse <em>for Vancouver&rsquo;s ability to be helped</em>.
          </p>
        </Callout>
        <div className="mt-8">
          <Prose paragraphs={loremParagraphs(3, 33)} />
        </div>
      </Section>

      <Section
        title="Weather is part of the scenario, not a system that fails"
        lede="Both official scenarios set the weather, and the two set it in opposite directions. The same day of the same earthquake is a different emergency in each."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {SCENARIO_ORDER.map((id) => (
            <div
              key={id}
              className="rounded-xl border border-rule bg-paper-raised p-6"
            >
              <h3 className="font-display text-xl tracking-tight">
                {SCENARIOS[id].name}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {SCENARIOS[id].conditions}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Every system, both scenarios" lede={lorem(1, 36)}>
        <SystemMatrix />
      </Section>

      <NextPrev
        prev={{ href: "/", label: "Home" }}
        next={{ href: "/shaking/", label: "The shaking" }}
      />
    </Shell>
  );
}
