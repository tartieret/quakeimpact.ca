import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleShell } from "@/components/shell";
import { PageHeader, Section, Lever, NextPrev } from "@/components/page-parts";
import { Citations, ReferenceList } from "@/components/citation";
import { SHAKING_PAGES } from "@/content/site";
import type { PageModule } from "@/content/pages";
import { groundConditions } from "@/content/pages/ground-conditions";
import { ShakingDraftNotice } from "@/components/status";

/**
 * The five pages of Part 1.
 *
 * The template holds no words of its own beyond the labels on the furniture it
 * draws. A page's body comes from a page module where one exists. Where it does
 * not, the body is empty and the page says so in a marker beside the title and
 * two sentences above the document list, rather than in five paragraphs about
 * the site. The state is read from `SHAKING_PAGES`, not inferred from the
 * absence of a module.
 *
 * There is no map slot. The template used to promise a spatial view on every
 * one of these pages; the layers that would draw it are the Metro Vancouver
 * microzonation maps, which are not openly licensed and are linked rather than
 * redrawn (`docs/licensing.md`). Ground conditions makes that refusal part of
 * its own text.
 */

/**
 * Keyed on slug, the way `@/content/pages` keys on route. One entry, because
 * one of the five is written.
 */
const MODULES: Record<string, PageModule> = {
  ground: groundConditions,
};

export function generateStaticParams() {
  return SHAKING_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = SHAKING_PAGES.find((p) => p.slug === slug);
  return { title: MODULES[slug]?.meta.title ?? page?.name ?? "Not found" };
}

export default async function ShakingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = SHAKING_PAGES.findIndex((p) => p.slug === slug);
  const entry = SHAKING_PAGES[index];
  if (!entry) notFound();

  const page = MODULES[slug];
  const prev = SHAKING_PAGES[index - 1];
  const next = SHAKING_PAGES[index + 1];

  const status = page?.meta.status ?? entry.status;

  /**
   * An unwritten Part 1 page still has sources: the documents gathered for its
   * subject, declared on `SHAKING_PAGES`. They list the way a system stub's do.
   */
  const references = page ? page.meta.references : (entry.references ?? []);

  return (
    <Citations ids={references}>
      <ArticleShell
        header={
          <PageHeader
            kicker={page?.meta.kicker ?? "The shaking"}
            title={page?.meta.title ?? entry.name}
            status={status}
            standfirst={page?.meta.standfirst ?? entry.hook}
          />
        }
      >
        {/* Above the document list, because it says what that list is. Not a
            `<section>`: no heading, no entry in the contents rail, no place in
            the heading order. */}
        {page ? null : <ShakingDraftNotice />}

        {(page?.sections ?? []).map((section) => (
          <Section
            key={section.id ?? section.title}
            id={section.id}
            title={section.title}
            lede={section.lede}
          >
            {section.body}
          </Section>
        ))}

        {page?.lever ? <Lever {...page.lever} /> : null}

        {/* The lede describes markers in the text, so it belongs only to a page
            that has text. A stub lists the documents gathered for its subject
            and says so in the standing block above. */}
        {references.length > 0 ? (
          <Section
            title="Sources on this page"
            lede={
              page
                ? "Numbered as cited above. Every marker in the text opens its entry in place; these are the same entries, with a link back to where each was used."
                : undefined
            }
          >
            <ReferenceList />
          </Section>
        ) : null}

        <NextPrev
          prev={
            prev
              ? { href: `/shaking/${prev.slug}/`, label: prev.name }
              : { href: "/shaking/", label: "The shaking" }
          }
          next={
            next
              ? { href: `/shaking/${next.slug}/`, label: next.name }
              : { href: "/after/", label: "Life afterwards" }
          }
        />
      </ArticleShell>
    </Citations>
  );
}
