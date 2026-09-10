import type { Metadata } from "next";
import Link from "next/link";
import { ReadingShell } from "@/components/shell";
import {
  PageHeader,
  Section,
  Prose,
  Callout,
  NextPrev,
} from "@/components/page-parts";
import { lorem, loremLine, loremParagraphs } from "@/content/lorem";

export const metadata: Metadata = { title: "Sources" };

const PRIMARY = [
  "NRCan seismic hazard model",
  "Metro Vancouver seismic and infrastructure studies",
  "City of Vancouver seismic studies",
  "Published regional loss estimates",
  "BC Hydro",
  "Emergency Management BC / PreparedBC",
  "Seismic assessments of individual crossings",
];

const ANALOGUES = [
  { name: "Christchurch 2011", role: "The closest analogue for aftermath" },
  { name: "Kobe 1995", role: "A port city of similar scale losing its port" },
  { name: "Tōhoku 2011", role: "Fuel logistics collapse" },
  {
    name: "West Berlin 1948–49",
    role: "Used inverted — the ceiling on what rescue can be",
  },
];

export default function SourcesPage() {
  return (
    <ReadingShell>
      <PageHeader
        kicker="One wrong number and the field writes off the site"
        title="Sources"
        standfirst={lorem(2, 290)}
      />

      <Section title="Primary — reports" lede={lorem(1, 291)}>
        <ul className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
          {PRIMARY.map((s, i) => (
            <li key={s} className="bg-paper-raised px-5 py-4">
              <p className="font-medium">{s}</p>
              <p className="mt-1 text-sm text-ink-muted">
                {loremLine(i + 292)}
              </p>
              <p className="mt-2 font-mono text-xs text-ink-faint">
                Citation pending — licence to be confirmed
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Secondary — analogue events"
        lede="For illustration only. They tell us what life was like; they do not tell us Vancouver's restoration times."
      >
        <ul className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
          {ANALOGUES.map((a) => (
            <li key={a.name} className="bg-paper-raised px-5 py-4">
              <p className="font-display text-lg">{a.name}</p>
              <p className="mt-1 text-sm text-accent">{a.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="The Berlin comparison, and its counterpoint">
        <Callout label="Order of magnitude, not a logistics plan">
          <p className="text-lg leading-relaxed">
            Labelled explicitly as a capacity comparison. Nobody plans to supply
            a metro region by air — the actual levers are restoring surface
            corridors and reducing demand.
          </p>
        </Callout>
        <div className="mt-8">
          <Prose paragraphs={loremParagraphs(2, 300)} />
        </div>
      </Section>

      <Section
        title="How sources appear in the text"
        lede="A register nobody reads is not sourcing. Claims in running text carry a numbered marker that opens the document in place."
      >
        <Prose
          paragraphs={[
            <>
              Every entry above has a key. Prose cites the key, the marker takes
              its number from the order the page cites in, and the same entries
              are listed again at the foot of the page. A marker can also point
              at another page on this site, where the reasoning is set out
              rather than repeated. The{" "}
              <Link
                href="/leaving/"
                className="text-accent underline underline-offset-2"
              >
                Getting out
              </Link>{" "}
              page is the worked example.
            </>,
          ]}
        />
      </Section>

      <Section
        title="Missing a document"
        lede="Every key here is still TBD and every link is a placeholder. Pointers are worth more than opinions."
      >
        <Link
          href="/contribute/"
          className="inline-block text-sm font-medium text-accent underline underline-offset-4"
        >
          How to send a source or a correction
        </Link>
      </Section>

      <NextPrev
        prev={{ href: "/method/", label: "Method & bands" }}
        next={{ href: "/contribute/", label: "Contribute" }}
      />
    </ReadingShell>
  );
}
