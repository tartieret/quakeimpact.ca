import type { Metadata } from "next";
import { ArticleShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Lever,
  NextPrev,
} from "@/components/page-parts";
import { Citations, ReferenceList } from "@/components/citation";
import { dependencies } from "@/content/pages/dependencies";

/**
 * The dependency graph.
 *
 * The template holds no words of its own. Everything a reader sees comes from
 * the page module in `@/content/pages/dependencies`, which is where
 * `docs/copy/dependencies.md` lands.
 *
 * The graph slot goes with the section whose copy introduces it rather than
 * standing on its own, so the hatched placeholder and the sentence saying it is
 * not drawn cannot drift apart.
 */
const { meta, sections, lever } = dependencies;

export const metadata: Metadata = { title: meta.title };

export default function DependenciesPage() {
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

        <Section
          title="Sources on this page"
          lede="Numbered as cited above. Every marker in the text opens its entry in place; these are the same entries, with a link back to where each was used."
        >
          <ReferenceList />
        </Section>

        <NextPrev
          prev={{ href: "/getting-around/", label: "Getting around" }}
          next={{ href: "/prepare/", label: "Preparing" }}
        />
      </ArticleShell>
    </Citations>
  );
}
