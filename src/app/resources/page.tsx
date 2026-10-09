import type { Metadata } from "next";
import { ArticleShell } from "@/components/shell";
import { PageHeader, Section, NextPrev } from "@/components/page-parts";
import { Citations, SourcesSection } from "@/components/citation";
import { resources } from "@/content/pages/resources";
import { metadataFor } from "@/content/metadata";

/**
 * Further resources.
 *
 * The template holds no words of its own. Everything a reader sees comes from
 * the page module in `@/content/pages/resources`, which is where
 * `docs/copy/resources.md` lands.
 *
 * No `Lever`: each section is already somewhere to go next.
 */
const { meta, sections } = resources;

export const metadata: Metadata = metadataFor(meta);

export default function ResourcesPage() {
  return (
    <Citations ids={meta.references}>
      <ArticleShell
        header={
          <PageHeader
            kicker={meta.kicker}
            title={meta.title}
            standfirst={meta.standfirst}
          />
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

        <SourcesSection />

        <NextPrev
          prev={{ href: "/prepare/", label: "Preparing" }}
          next={{ href: "/method/", label: "Method" }}
        />
      </ArticleShell>
    </Citations>
  );
}
