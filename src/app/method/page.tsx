import type { Metadata } from "next";
import { ReadingShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Prose,
  Callout,
  NextPrev,
} from "@/components/page-parts";
import { BandMeter } from "@/components/band";
import { BANDS } from "@/content/site";
import type { Band } from "@/content/types";
import { lorem, loremParagraphs } from "@/content/lorem";

export const metadata: Metadata = { title: "Method & bands" };

const ORDER: Band[] = ["low", "medium", "high", "unknown"];

const PRINCIPLES = [
  "Restoration time is the spine",
  "Every claim carries a source",
  "No doom without a lever",
  "Coupling over inventory",
  "Analogues illustrate, they never generate numbers",
  "Assumptions are research tasks, not content",
];

export default function MethodPage() {
  return (
    <ReadingShell>
      <PageHeader
        kicker="Linked from every impact cell"
        title="How the bands are defined"
        standfirst={lorem(2, 270)}
      />

      <Section
        title="The rubric"
        lede="Deliberately system-agnostic, so that high for sanitation and high for transport mean comparable things."
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

      <Section title="Why bands and not figures">
        <Prose paragraphs={loremParagraphs(3, 275)} />
      </Section>

      <Section title="Presentation rule">
        <Callout label="Never a coloured cell alone">
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

      <Section title="Assumption discipline">
        <Prose paragraphs={loremParagraphs(2, 282)} />
      </Section>

      <NextPrev
        prev={{ href: "/prepare/", label: "Preparing" }}
        next={{ href: "/sources/", label: "Sources" }}
      />
    </ReadingShell>
  );
}
