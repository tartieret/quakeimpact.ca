import type { Metadata } from "next";
import { ArticleShell } from "@/components/shell";
import { PageHeader, Section, Lever, NextPrev } from "@/components/page-parts";
import { Citations, SourcesSection } from "@/components/citation";
import { gettingAround } from "@/content/pages/getting-around";
import { metadataFor } from "@/content/metadata";

/**
 * Part 2b, moving after the shaking.
 *
 * The template holds no words of its own. Everything a reader sees comes from
 * the page module in `@/content/pages/getting-around`, which is where
 * `docs/copy/getting-around.md` lands.
 *
 * There is no map slot. The overlay this route used to promise, crossings
 * drawn over liquefaction susceptibility, rests on the Metro Vancouver
 * microzonation layers, which are link-only and are not being redrawn
 * (`docs/licensing.md`).
 */
const { meta, sections, lever } = gettingAround;

export const metadata: Metadata = metadataFor(meta);

export default function GettingAroundPage() {
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

        {lever ? <Lever {...lever} /> : null}

        <SourcesSection />

        <NextPrev
          prev={{ href: "/after/", label: "Life afterwards" }}
          next={{ href: "/prepare/", label: "Preparing" }}
        />
      </ArticleShell>
    </Citations>
  );
}
