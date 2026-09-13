import type { Metadata } from "next";
import { ArticleShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Lever,
  NextPrev,
} from "@/components/page-parts";
import { Citations, SourcesSection } from "@/components/citation";
import { scenarios } from "@/content/pages/scenarios";
import { metadataFor } from "@/content/metadata";

/**
 * Two earthquakes, not one.
 *
 * The template holds no words of its own beyond the labels on the furniture it
 * draws. Every heading, including the two that open and close the page, comes
 * from the page module, and the blocks under them are built from `SCENARIOS`
 * and `SYSTEMS` in `@/content/site` the same way the system template draws its
 * bands from the data rather than from the copy.
 */

const { meta, sections, lever } = scenarios;

export const metadata: Metadata = metadataFor(meta);

export default function ScenariosPage() {
  return (
    <Citations ids={meta.references}>
      <ArticleShell
        header={
          <PageHeader title={meta.title} standfirst={meta.standfirst} />
        }
      >
        {sections.map((section) => (
          <Section
            key={section.id ?? section.title}
            id={section.id}
            title={section.title}
            lede={section.lede}
          >
            {section.body}
          </Section>
        ))}

        {lever ? <Lever {...lever} /> : null}

        <SourcesSection />

        <NextPrev
          prev={{ href: "/", label: "Home" }}
          next={{ href: "/shaking/", label: "The shaking" }}
        />
      </ArticleShell>
    </Citations>
  );
}
