import type { Metadata } from "next";
import { ArticleShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Lever,
  NextPrev,
} from "@/components/page-parts";
import { Citations, ReferenceList } from "@/components/citation";
import { ScenarioToggle } from "@/components/scenario-toggle";
import { after } from "@/content/pages/after";

/**
 * Part 2. The template holds no words of its own beyond the label on the
 * scenario toggle: everything else comes from the page module, which is where
 * `docs/copy/after.md` landed. The toggle sits in the header because the
 * timeline strip, the band matrix and the system grids in the body all read
 * from it.
 */
export const metadata: Metadata = { title: after.meta.title };

export default function AfterIndexPage() {
  return (
    <Citations ids={after.meta.references}>
      <ArticleShell
        header={
          <PageHeader
            kicker={after.meta.kicker}
            title={after.meta.title}
            standfirst={after.meta.standfirst}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-ink-muted">Bands shown for</span>
              <ScenarioToggle size="lg" />
            </div>
          </PageHeader>
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

        <Lever
          heading={after.lever.heading}
          title={after.lever.title}
          items={after.lever.items}
          href={after.lever.href}
        />

        <Section
          title="Sources on this page"
          lede="Numbered as cited above. Every marker in the text opens its entry in place; these are the same entries, with a link back to where each was used."
        >
          <ReferenceList />
        </Section>

        <NextPrev
          prev={{ href: "/shaking/", label: "The shaking" }}
          next={{ href: "/getting-around/", label: "Getting around" }}
        />
      </ArticleShell>
    </Citations>
  );
}
