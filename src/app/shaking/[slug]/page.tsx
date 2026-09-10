import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Prose,
  MapPlaceholder,
  Lever,
  VerificationNote,
  NextPrev,
} from "@/components/page-parts";
import { SHAKING_PAGES } from "@/content/site";
import { lorem, loremParagraphs, loremLine } from "@/content/lorem";

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
  return { title: page?.name ?? "Not found" };
}

export default async function ShakingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = SHAKING_PAGES.findIndex((p) => p.slug === slug);
  const page = SHAKING_PAGES[index];
  if (!page) notFound();

  const prev = SHAKING_PAGES[index - 1];
  const next = SHAKING_PAGES[index + 1];

  return (
    <ArticleShell
      header={
        <PageHeader
          kicker="Part 1 — The shaking"
          title={page.name}
          standfirst={page.hook}
        />
      }
    >
      <Section title="What happens">
        <Prose paragraphs={loremParagraphs(3, index + 50)} />
      </Section>

      <Section title="Where it is worst" lede={lorem(1, index + 55)}>
        <MapPlaceholder
          title={`${page.name} — spatial view`}
          caption={loremLine(index + 60)}
          dataset="TBD"
        />
      </Section>

      <Section title="How the two scenarios differ">
        <Prose paragraphs={loremParagraphs(2, index + 65)} />
      </Section>

      <Section title="Open questions">
        <VerificationNote>{loremLine(index + 70)}</VerificationNote>
      </Section>

      <Lever
        title={`Reducing your exposure to ${page.name.toLowerCase()}`}
        items={[
          loremLine(index + 75),
          loremLine(index + 80),
          loremLine(index + 85),
        ]}
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
  );
}
