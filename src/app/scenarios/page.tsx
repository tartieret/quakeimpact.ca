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
import { lorem, loremParagraphs } from "@/content/lorem";

export const metadata: Metadata = { title: "Two scenarios" };

export default function ScenariosPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Held firmly, and only two"
        title="Two scenarios"
        standfirst={lorem(2, 30)}
      />

      <Section title="Side by side" lede={lorem(1, 31)}>
        <ScenarioCards />
      </Section>

      <Section title="The contrast that matters">
        <Callout label="The single most important point">
          <p className="max-w-2xl text-lg leading-relaxed">
            The crustal event is worse <em>for Vancouver</em>. The Cascadia
            event is worse <em>for Vancouver&rsquo;s ability to be helped</em>.
          </p>
        </Callout>
        <div className="mt-8">
          <Prose paragraphs={loremParagraphs(3, 33)} />
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
