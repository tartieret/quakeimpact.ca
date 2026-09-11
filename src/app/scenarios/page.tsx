import type { Metadata } from "next";
import { ArticleShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Lever,
  NextPrev,
} from "@/components/page-parts";
import { Citations, ReferenceList } from "@/components/citation";
import { ScenarioCards } from "@/components/scenario-cards";
import { SystemMatrix } from "@/components/system-grid";
import { scenarios } from "@/content/pages/scenarios";

/**
 * Two earthquakes, not one.
 *
 * The template holds no words of its own beyond the labels on the furniture it
 * draws. The body comes from the page module; the two blocks around it are
 * built from `SCENARIOS` and `SYSTEMS` in `@/content/site`, the same way the
 * system template draws its bands from the data rather than from the copy.
 */

const { meta, sections, lever } = scenarios;

export const metadata: Metadata = { title: meta.title };

export default function ScenariosPage() {
  return (
    <Citations ids={meta.references}>
      <ArticleShell
        header={
          <PageHeader title={meta.title} standfirst={meta.standfirst} />
        }
      >
        {/* Both scenarios at once. The cards are the site-wide toggle, and
            neither column is ever hidden: the contrast is the teaching point. */}
        <Section title="Side by side">
          <ScenarioCards />
        </Section>

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

        <Section title="Every system, both scenarios">
          <SystemMatrix />
        </Section>

        {lever ? <Lever {...lever} /> : null}

        <Section
          title="Sources on this page"
          lede="Numbered as cited above. Every marker in the text opens its entry in place; these are the same entries, with a link back to where each was used."
        >
          <ReferenceList />
        </Section>

        <NextPrev
          prev={{ href: "/", label: "Home" }}
          next={{ href: "/shaking/", label: "The shaking" }}
        />
      </ArticleShell>
    </Citations>
  );
}
