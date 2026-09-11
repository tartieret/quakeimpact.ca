import type { Metadata } from "next";
import { ReadingShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Prose,
  Callout,
  VerificationNote,
  NextPrev,
} from "@/components/page-parts";
import { BandMeter } from "@/components/band";
import { BANDS } from "@/content/site";
import type { Band } from "@/content/types";
import { lorem, loremParagraphs } from "@/content/lorem";

export const metadata: Metadata = { title: "Method & bands" };

const ORDER: Band[] = ["low", "medium", "high", "unknown"];

/**
 * The project's six principles, written for the reader rather than in the
 * project's own shorthand. The shorthand lives in `docs/site-overview.md` §2.
 */
const PRINCIPLES = [
  "How long a system takes to come back matters more than how badly it broke.",
  "Every figure on this site names the document it came from.",
  "Every section ends with something you can do.",
  "Systems are shown as they depend on each other, not as a list.",
  "Christchurch and Kobe show what life was like. They never supply a number for here.",
  "Anything a document has not confirmed is shown as an open question, not written as fact.",
];

export default function MethodPage() {
  return (
    <ReadingShell>
      <PageHeader
        kicker="What low, medium and high mean here"
        title="How the bands are defined"
        standfirst={lorem(2, 270)}
      />

      <Section
        title="The rubric"
        lede="The same rubric for every system, so that high for sanitation and high for transportation mean comparable things."
      >
        <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
          {ORDER.map((band) => (
            <div key={band} className="bg-paper-raised p-5">
              <div className="flex items-center gap-3">
                <BandMeter band={band} />
                <h3 className="font-display text-xl tracking-tight">
                  {BANDS[band].label}
                </h3>
              </div>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-[7rem_1fr]">
                <dt className="text-xs tracking-wide text-ink-faint uppercase">
                  Duration
                </dt>
                <dd>{BANDS[band].duration}</dd>
                <dt className="text-xs tracking-wide text-ink-faint uppercase">
                  Extent
                </dt>
                <dd>{BANDS[band].extent}</dd>
                <dt className="text-xs tracking-wide text-ink-faint uppercase">
                  Dependency
                </dt>
                <dd>{BANDS[band].dependency}</dd>
              </dl>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What a hatched cell means">
        <Callout label="A statement about the public record">
          <p className="max-w-2xl text-lg leading-relaxed">
            A hatched cell says nobody has published an assessment this scale
            can read. It does not say the system is safe, and it does not say
            the system is doomed.
          </p>
        </Callout>
        <div className="mt-6">
          <Prose paragraphs={loremParagraphs(2, 272)} />
        </div>
        <div className="mt-6">
          <VerificationNote>
            Three different situations currently share one hatch: never
            assessed, assessed and not published, and assessed for something
            other than earthquakes. Whether the fourth band should be split is
            an open design question.
          </VerificationNote>
        </div>
      </Section>

      <Section title="Why bands and not figures">
        <Prose paragraphs={loremParagraphs(3, 275)} />
      </Section>

      <Section title="Why every cell has a sentence beside it">
        <Callout label="A colour on its own is only an assertion">
          <p className="text-lg leading-relaxed">
            Every impact on this site is band, then one sentence of mechanism,
            then a source link.
          </p>
        </Callout>
      </Section>

      <Section title="Principles">
        <ol className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
          {PRINCIPLES.map((p, i) => (
            <li key={p} className="flex gap-4 bg-paper-raised px-5 py-4">
              <span className="font-mono text-xs text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-medium">{p}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        title="Canada has one earthquake loss model, not several"
        lede="Where two governments quote the same casualty figure, that is one model quoted twice — not two studies agreeing."
      >
        <Prose paragraphs={loremParagraphs(2, 279)} />
      </Section>

      <Section title="What happens when nobody has published an answer">
        <Prose paragraphs={loremParagraphs(2, 282)} />
      </Section>

      <NextPrev
        prev={{ href: "/prepare/", label: "Preparing" }}
        next={{ href: "/sources/", label: "Sources" }}
      />
    </ReadingShell>
  );
}
