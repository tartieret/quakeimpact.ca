import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Prose,
  Callout,
  NextPrev,
} from "@/components/page-parts";
import { DependencyGraphPlaceholder } from "@/components/dependency-graph";
import { lorem, loremParagraphs } from "@/content/lorem";

export const metadata: Metadata = { title: "Dependency graph" };

export default function DependenciesPage() {
  return (
    <Shell>
      <PageHeader
        kicker="The one original contribution"
        title="Nothing fails alone"
        standfirst={lorem(2, 190)}
      />

      <Section title="The graph">
        <DependencyGraphPlaceholder />
      </Section>

      <Section title="Reading it">
        <Callout label="Coupling over inventory">
          <p className="max-w-2xl text-lg leading-relaxed">
            The failure of any one system is not the story. The story is that
            they depend on each other.
          </p>
        </Callout>
        <div className="mt-8">
          <Prose paragraphs={loremParagraphs(3, 193)} />
        </div>
      </Section>

      <NextPrev
        prev={{ href: "/leaving/", label: "Getting out" }}
        next={{ href: "/prepare/", label: "Preparing" }}
      />
    </Shell>
  );
}
