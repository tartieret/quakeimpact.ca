import type { Metadata } from "next";
import { ArticleShell } from "@/components/shell";
import { PageHeader, Section, NextPrev } from "@/components/page-parts";
import { Citations, SourcesSection } from "@/components/citation";
import { about } from "@/content/pages/about";

/**
 * About.
 *
 * The template holds no words of its own. Everything a reader sees comes from
 * the page module in `@/content/pages/about`, which is where
 * `docs/copy/about.md` lands.
 *
 * The copy has no "What you can do", so there is no `Lever` here. The page
 * describes no consequence, and a lever written to fill the slot would be an
 * action nobody asked the reader to take.
 */
const { meta, sections } = about;

export const metadata: Metadata = { title: meta.title };

export default function AboutPage() {
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
          prev={{ href: "/contribute/", label: "Contribute" }}
          next={{ href: "/", label: "Home" }}
        />
      </ArticleShell>
    </Citations>
  );
}
