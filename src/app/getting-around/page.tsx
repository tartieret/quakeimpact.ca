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
import { Citations, Cite, ReferenceList } from "@/components/citation";
import { lorem, loremParagraphs, loremLine } from "@/content/lorem";

export const metadata: Metadata = { title: "Getting around" };

const GEOGRAPHY = [
  { name: "Vancouver", claim: "A peninsula, not an island" },
  { name: "Richmond and Delta", claim: "The genuine islands" },
  { name: "The North Shore", claim: "Two crossings and a ferry" },
  { name: "Highway 1 and the valley", claim: "The regional spine" },
];

/**
 * The page's references, in the order they are first cited. Markers take their
 * number from this array, so the numbering and the list at the foot of the
 * page cannot drift apart. Keys resolve in `src/content/references.ts`.
 *
 * This page is the worked example of the citation convention — every claim in
 * running text carries a marker. The prose is still lorem.
 */
const REFS = [
  "crossing-assessments",
  "mv-liquefaction",
  "page-fuel",
  "drr-network",
  "christchurch-displacement",
];

export default function LeavingPage() {
  const [approaches, ground, departure] = loremParagraphs(3, 158);
  const [routes, publicUse] = loremParagraphs(2, 165);
  const [leaving, attrition, slow] = loremParagraphs(3, 170);

  return (
    <Citations ids={REFS}>
      <ArticleShell
        header={
          <PageHeader
            kicker="Part 2b"
            title="Moving after the shaking"
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
                <p className="mt-1 text-sm font-medium text-accent">
                  {g.claim}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {loremLine(i + 152)}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Approaches, not spans">
          <Callout label="What retrofit announcements leave out">
            <p className="max-w-2xl text-lg leading-relaxed">
              A retrofitted bridge can survive intact while its approach
              embankment settles or spreads. A standing bridge with a step at
              the abutment carries nobody.
            </p>
          </Callout>
          <div className="mt-8">
            <Prose
              paragraphs={[
                <>
                  {approaches} <Cite id="crossing-assessments" />
                </>,
                <>
                  {ground} <Cite id="mv-liquefaction" /> Restoring a crossing
                  also needs crews, equipment and diesel on site, which is its
                  own dependency. <Cite id="page-fuel" />
                </>,
                departure,
              ]}
            />
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

        <Section title="What the province actually plans for">
          <Callout label="Sourced twice, from two separate provincial documents">
            <p className="max-w-2xl text-lg leading-relaxed">
              British Columbia&rsquo;s emergency plans do not assume people
              drive out of the region. They assume damaged routes reserved for
              response, public messaging to shelter where you are, and roads
              cleared in a published order that puts life safety and critical
              infrastructure first.
            </p>
          </Callout>
          <div className="mt-8">
            <Prose paragraphs={loremParagraphs(2, 156)} />
          </div>
        </Section>

        <Section title="Disaster Response Routes are not evacuation routes">
          <Prose
            paragraphs={[
              <>
                {routes} <Cite id="drr-network" />
              </>,
              publicUse,
            ]}
          />
          <div className="mt-6">
            <Callout label="What to do if you find yourself on one">
              <p className="max-w-2xl leading-relaxed text-ink-muted">
                {lorem(1, 168)}
              </p>
            </Callout>
          </div>
        </Section>

        <Section title="Leaving happens over months, not on day one">
          <Prose
            paragraphs={[
              leaving,
              <>
                {attrition} <Cite id="christchurch-displacement" />
              </>,
              slow,
            ]}
          />
        </Section>

        <Section title="Still to verify">
          <div className="grid gap-4 sm:grid-cols-2">
            <VerificationNote>{loremLine(174)}</VerificationNote>
            <VerificationNote>{loremLine(178)}</VerificationNote>
          </div>
        </Section>

        <Lever
          title="Plan for where you will be, not for the way out"
          items={[loremLine(180), loremLine(184), loremLine(188)]}
        />

        <Section
          title="References"
          lede="Numbered as cited above. Every marker in the text opens its entry in place; these are the same entries, with a link back to where each was used."
        >
          <ReferenceList />
        </Section>

        <NextPrev
          prev={{ href: "/after/", label: "Life afterwards" }}
          next={{ href: "/dependencies/", label: "Dependency graph" }}
        />
      </ArticleShell>
    </Citations>
  );
}
