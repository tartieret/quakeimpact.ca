import type { Metadata } from "next";
import { ArticleShell } from "@/components/shell";
import { PageHeader, Section, NextPrev } from "@/components/page-parts";
import { Citations, SourcesSection } from "@/components/citation";
import { contribute } from "@/content/pages/contribute";

/**
 * Contribute.
 *
 * The template holds no words of its own. Everything a reader sees comes from
 * the page module in `@/content/pages/contribute`, which is where
 * `docs/copy/contribute.md` lands.
 *
 * The copy has no "What you can do", so there is no `Lever` here. The page
 * describes no consequence to the reader; what it asks for is the page.
 */
const { meta, sections } = contribute;

export const metadata: Metadata = { title: meta.title };

export default function ContributePage() {
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
          prev={{ href: "/licences/", label: "Licences" }}
          next={{ href: "/about/", label: "About" }}
        />
      </ArticleShell>
    </Citations>
  );
}
