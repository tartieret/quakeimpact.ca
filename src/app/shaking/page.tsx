import type { Metadata } from "next";
import { ArticleShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Lever,
  NextPrev,
} from "@/components/page-parts";
import { Citations, SourcesSection } from "@/components/citation";
import { shaking } from "@/content/pages/shaking";

/**
 * Part 1. The template holds no words of its own: everything a reader sees
 * comes from the page module, which is where `docs/copy/shaking.md` landed.
 *
 * There is no map slot. The ground conditions overlay this page used to
 * promise rests on the Metro Vancouver microzonation layers, which are not
 * openly licensed and are linked rather than redrawn (`docs/licensing.md`).
 */
export const metadata: Metadata = { title: shaking.meta.title };

export default function ShakingIndexPage() {
  return (
    <Citations ids={shaking.meta.references}>
      <ArticleShell
        header={
          <PageHeader
            kicker={shaking.meta.kicker}
            title={shaking.meta.title}
            standfirst={shaking.meta.standfirst}
          />
        }
      >
        {shaking.sections.map((section) => (
          <Section
            key={section.id ?? section.title}
            id={section.id}
            title={section.title}
            lede={section.lede}
          >
            {section.body}
          </Section>
        ))}

        {shaking.lever ? <Lever {...shaking.lever} /> : null}

        <SourcesSection />

        <NextPrev
          prev={{ href: "/scenarios/", label: "Two scenarios" }}
          next={{ href: "/after/", label: "Life afterwards" }}
        />
      </ArticleShell>
    </Citations>
  );
}
