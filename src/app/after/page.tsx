import type { Metadata } from "next";
import { ArticleShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Lever,
  NextPrev,
} from "@/components/page-parts";
import { Citations, SourcesSection } from "@/components/citation";
import { after } from "@/content/pages/after";
import { metadataFor } from "@/content/metadata";

/**
 * Part 2. The template holds no words of its own: everything comes from the
 * page module, which is where `docs/copy/after.md` landed.
 */
export const metadata: Metadata = metadataFor(after.meta);

export default function AfterIndexPage() {
  return (
    <Citations ids={after.meta.references}>
      <ArticleShell
        header={
          <PageHeader
            kicker={after.meta.kicker}
            title={after.meta.title}
            standfirst={after.meta.standfirst}
          />
        }
      >
        {after.sections.map((section) => (
          <Section
            key={section.id ?? section.title}
            id={section.id}
            title={section.title}
            lede={section.lede}
          >
            {section.body}
          </Section>
        ))}

        {after.lever ? <Lever {...after.lever} /> : null}

        <SourcesSection />

        <NextPrev
          prev={{ href: "/shaking/", label: "The shaking" }}
          next={{ href: "/getting-around/", label: "Getting around" }}
        />
      </ArticleShell>
    </Citations>
  );
}
