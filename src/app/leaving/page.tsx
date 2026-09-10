import type { Metadata } from "next";
import { ArticleShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Prose,
  Callout,
  MapPlaceholder,
  VerificationNote,
  Lever,
  NextPrev,
} from "@/components/page-parts";
import { lorem, loremParagraphs, loremLine } from "@/content/lorem";

export const metadata: Metadata = { title: "Getting out" };

const GEOGRAPHY = [
  { name: "Vancouver", claim: "A peninsula, not an island" },
  { name: "Richmond and Delta", claim: "The genuine islands" },
  { name: "The North Shore", claim: "Two crossings and a ferry" },
  { name: "Highway 1 and the valley", claim: "The regional spine" },
];

export default function LeavingPage() {
  return (
    <ArticleShell
      header={
        <PageHeader
          kicker="Part 2b"
          title="Who can actually leave"
          standfirst={lorem(2, 150)}
        />
      }
    >
      <Section title="The geography, plainly" lede={lorem(1, 151)}>
        <ul className="grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2">
          {GEOGRAPHY.map((g, i) => (
            <li key={g.name} className="bg-paper-raised p-6">
              <span className="font-mono text-xs text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl tracking-tight">
                {g.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">{g.claim}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {loremLine(i + 152)}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Approaches, not spans">
        <Callout label="The least understood point on this page">
          <p className="max-w-2xl text-lg leading-relaxed">
            A retrofitted bridge can survive intact while its approach
            embankment settles or spreads. A standing bridge with a step at the
            abutment carries nobody.
          </p>
        </Callout>
        <div className="mt-8">
          <Prose paragraphs={loremParagraphs(3, 158)} />
        </div>
      </Section>

      <Section title="Crossing by crossing" lede={lorem(1, 162)}>
        <MapPlaceholder
          title="Crossings over liquefaction susceptibility"
          caption="Fixed critical infrastructure drawn on top of the ground it sits on."
          dataset="TBD"
          ratio="21 / 9"
        />
      </Section>

      <Section title="Disaster Response Routes are not evacuation routes">
        <Prose paragraphs={loremParagraphs(2, 165)} />
        <div className="mt-6">
          <Callout label="Teach the right behaviour">
            <p className="max-w-2xl leading-relaxed text-ink-muted">
              {lorem(1, 168)}
            </p>
          </Callout>
        </div>
      </Section>

      <Section title="Departure is not day one">
        <Prose paragraphs={loremParagraphs(3, 170)} />
      </Section>

      <Section title="Still to verify">
        <div className="grid gap-4 sm:grid-cols-2">
          <VerificationNote>{loremLine(174)}</VerificationNote>
          <VerificationNote>{loremLine(178)}</VerificationNote>
        </div>
      </Section>

      <Lever
        title="If you live on the delta or the North Shore"
        items={[loremLine(180), loremLine(184), loremLine(188)]}
      />

      <NextPrev
        prev={{ href: "/after/", label: "Life afterwards" }}
        next={{ href: "/dependencies/", label: "Dependency graph" }}
      />
    </ArticleShell>
  );
}
