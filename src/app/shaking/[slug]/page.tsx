import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleShell } from "@/components/shell";
import { PageHeader, Section, Lever, NextPrev } from "@/components/page-parts";
import { Citations, SourcesSection } from "@/components/citation";
import { SHAKING_PAGES, navSection } from "@/content/site";
import { SectionNav } from "@/components/section-nav";
import type { PageModule } from "@/content/pages";
import { buildings } from "@/content/pages/buildings";
import { casualties } from "@/content/pages/casualties";
import { dams } from "@/content/pages/dams";
import { dikes } from "@/content/pages/dikes";
import { fireFollowing } from "@/content/pages/fire-following";
import { groundConditions } from "@/content/pages/ground-conditions";
import { landslides } from "@/content/pages/landslides";
import { ShakingDraftNotice } from "@/components/status";

/**
 * The seven pages of Part 1.
 *
 * The template holds no words of its own beyond the labels on the furniture it
 * draws. A page's body comes from a page module, and all seven now have one.
 * Where a module is absent the body is empty and the page says so in a marker
 * beside the title and two sentences above the document list, rather than in
 * five paragraphs about the site. The state is read from `SHAKING_PAGES`, not
 * inferred from the absence of a module.
 *
 * There is no map slot. The template used to promise a spatial view on every
 * one of these pages; the layers that would draw it are the Metro Vancouver
 * microzonation maps, which are not openly licensed and are linked rather than
 * redrawn (`docs/licensing.md`). Ground conditions makes that refusal part of
 * its own text.
 */

/**
 * Keyed on slug, the way `@/content/pages` keys on route. All seven are written,
 * so the draft notice and the document-list fallback below no longer fire for
 * any of them. Both stay: a page whose text goes back under revision needs them
 * again, and that state is read from `SHAKING_PAGES` rather than inferred from
 * a missing entry here.
 */
const MODULES: Record<string, PageModule> = {
  ground: groundConditions,
  buildings,
  casualties,
  "fire-following": fireFollowing,
  landslides,
  dikes,
  dams,
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
          <SourcesSection numbered={Boolean(page)} />
        ) : null}

        <SectionNav
          section={navSection("/shaking/")}
          current={`/shaking/${slug}/`}
        />

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
