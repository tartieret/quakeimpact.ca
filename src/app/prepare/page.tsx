import type { Metadata } from "next";
import { ArticleShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Lever,
  NextPrev,
} from "@/components/page-parts";
import { Citations, SourcesSection } from "@/components/citation";
import { prepare } from "@/content/pages/prepare";
import { metadataFor } from "@/content/metadata";

/**
 * Preparing.
 *
 * The template holds no words of its own beyond the labels on the furniture it
 * draws. Every sentence a reader sees comes from the page module in
 * `@/content/pages/prepare`. The system grid that used to sit between the last
 * section and the lever is gone: it was `/after/`'s grid a second time, and it
 * stood between the guidance and the block that makes the guidance usable.
 */
export const metadata: Metadata = metadataFor(prepare.meta);

export default function PreparePage() {
  return (
    <Citations ids={prepare.meta.references}>
      <ArticleShell
        header={
          <PageHeader
            kicker={prepare.meta.kicker}
            title={prepare.meta.title}
            standfirst={prepare.meta.standfirst}
          />
        }
      >
        {prepare.sections.map((section) => (
          <Section
            key={section.id ?? section.title}
            id={section.id}
            title={section.title}
            lede={section.lede}
          >
            {section.body}
          </Section>
        ))}

        {prepare.lever ? <Lever {...prepare.lever} /> : null}

        <SourcesSection />

        <NextPrev
          prev={{ href: "/dependencies/", label: "Dependency graph" }}
          next={{ href: "/method/", label: "Method & bands" }}
        />
      </ArticleShell>
    </Citations>
  );
}
