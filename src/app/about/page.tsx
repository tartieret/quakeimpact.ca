import type { Metadata } from "next";
import { ReadingShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Prose,
  Callout,
  NextPrev,
} from "@/components/page-parts";
import { lorem, loremParagraphs } from "@/content/lorem";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <ReadingShell>
      <PageHeader title="About this site" standfirst={lorem(2, 310)} />

      <Section title="What this is">
        <Prose paragraphs={loremParagraphs(2, 311)} />
      </Section>

      <Section title="What this is not">
        <Callout label="Not a modelling project">
          <p className="text-lg leading-relaxed">
            Every claim is compiled from published work or documented analogue
            events. The contribution is synthesis, legibility and narrative.
          </p>
        </Callout>
      </Section>

      <Section title="Corrections">
        <Prose paragraphs={loremParagraphs(2, 315)} />
      </Section>

      <NextPrev
        prev={{ href: "/sources/", label: "Sources" }}
        next={{ href: "/", label: "Home" }}
      />
    </ReadingShell>
  );
}
