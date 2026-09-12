import type { Metadata } from "next";
import { ArticleShell } from "@/components/shell";
import { PageHeader, Section, NextPrev } from "@/components/page-parts";
import { Citations, SourcesSection } from "@/components/citation";
import { method } from "@/content/pages/method";

/**
 * Method and bands.
 *
 * The template holds no words of its own. The body comes from the page module
 * in `@/content/pages/method`, which is where `docs/copy/method.md` landed.
 *
 * The page ships with the rest of the site rather than after it. A reader who
 * meets a hatched cell without this page has no way to tell a gap in the
 * public record from a gap in the work, and reads the first as the second.
 *
 * The copy has no "What you can do", so there is no `Lever` here. Every other
 * long page ends with one; this one ends with what the reader can send us.
 */
export const metadata: Metadata = { title: method.meta.title };

export default function MethodPage() {
  return (
    <Citations ids={method.meta.references}>
      <ArticleShell
        header={
          <PageHeader
            kicker={method.meta.kicker}
            title={method.meta.title}
            standfirst={method.meta.standfirst}
          />
        }
      >
        {method.sections.map((section) => (
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
          next={{ href: "/sources/", label: "Sources" }}
        />
      </ArticleShell>
    </Citations>
  );
}
