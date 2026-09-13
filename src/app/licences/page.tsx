import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/shell";
import { PageHeader, Section, Prose, NextPrev } from "@/components/page-parts";
import { nonCommercialPhotographs } from "@/content/media";
import { pageMetadata } from "@/content/metadata";

export const metadata: Metadata = pageMetadata({
  route: "/licences/",
  title: "Licences",
  description:
    "Facts can be stated freely. Maps, tables and wording usually cannot. This page carries the credit each open licence behind the site asks for, in its own words.",
});

/**
 * The credit the open licences require, and nothing else.
 *
 * Three licences ask for a verbatim sentence and a link to their own text, and
 * this page is where those sentences live. Everything that had grown around
 * them was a second copy of something a reader meets somewhere better: every
 * dataset is on `/sources/` with its licence, the catalogue's scope is on
 * `/method/` and `/scenarios/` with its markers, and a photograph's credit is
 * under the photograph. Why the site treats a document the way it does is our
 * reasoning rather than the reader's business, and it stays in
 * `docs/licensing.md`.
 */

/**
 * The non-commercial photographs a reader is actually shown, which is what the
 * sentence below turns on. A cleared photograph with nowhere to sit yet puts no
 * condition on anything, so it says nothing here. Derived, so the sentence
 * moves on its own the next time a row changes, and goes when the last one does.
 */
const NON_COMMERCIAL_SHOWN = nonCommercialPhotographs().filter(
  (photo) => photo.usedOn !== null,
);

const LICENCES = [
  {
    name: "Open Government Licence – Canada",
    href: "https://open.canada.ca/en/open-government-licence-canada",
    covers:
      "The national earthquake scenario catalogue, and the national seismic risk model behind it.",
    attribution: [
      "Contains information licensed under the Open Government Licence – Canada.",
      "Hobbs, T.E., Journeay, J.M., Rotheram, D., 2021. An Earthquake Scenario Catalogue for Canada: A Guide to Using Scenario Hazard and Risk Results; Geological Survey of Canada, Open File 8806, 22 p.",
    ],
  },
  {
    name: "Open Government Licence – Vancouver",
    href: "https://opendata.vancouver.ca/pages/licence/",
    covers:
      "City of Vancouver open data, including the dedicated fire protection water mains.",
    attribution: [
      "Contains information licensed under the Open Government Licence – Vancouver.",
    ],
  },
  {
    name: "Open Government Licence – British Columbia",
    href: "https://www2.gov.bc.ca/gov/content/data/open-data/open-government-licence-bc",
    covers:
      "Provincial records that state it on the record itself. A provincial web address confers no licence.",
    attribution: [
      "Contains information licensed under the Open Government Licence – British Columbia.",
    ],
  },
];

function Attribution({ lines }: { lines: string[] }) {
  return (
    <blockquote className="border-l-2 border-accent bg-paper-raised py-3 pl-5">
      {lines.map((line, i) => (
        <p
          key={i}
          className={`max-w-2xl text-sm leading-relaxed ${i > 0 ? "mt-2" : ""}`}
        >
          {line}
        </p>
      ))}
    </blockquote>
  );
}

export default function LicencesPage() {
  return (
    <ArticleShell
      header={
        <PageHeader
          kicker="Credit and permissions"
          title="Licences"
          standfirst="Facts can be stated freely. Maps, tables and wording usually cannot."
        />
      }
    >
      <Section title="Credit, in the words each licence asks for">
        <div className="flex flex-col gap-8">
          {LICENCES.map((licence) => (
            <div key={licence.name}>
              <h3 className="font-display text-xl">{licence.name}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink-muted">
                {licence.covers}
              </p>
              <div className="mt-4">
                <Attribution lines={licence.attribution} />
              </div>
              <a
                href={licence.href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-medium text-accent underline underline-offset-4"
              >
                Read the licence ↗
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Every dataset and document behind a figure is listed on the{" "}
          <Link
            href="/sources/"
            className="text-accent underline underline-offset-2"
          >
            sources page
          </Link>
          , with the licence stated on it.
        </p>
      </Section>

      <Section title="Photographs">
        <Prose
          paragraphs={[
            "Each photograph is credited under itself, on the page it sits on: the photographer, where and when it was taken, the collection it is published in, and a link to the licence.",
            ...(NON_COMMERCIAL_SHOWN.length > 0
              ? [
                  `${
                    NON_COMMERCIAL_SHOWN.length === 1
                      ? "One of them is"
                      : `${NON_COMMERCIAL_SHOWN.length} of them are`
                  } licensed for non-commercial use only. This site is free, carries no advertising, no affiliate links and nothing for sale, so the condition is met.`,
                ]
              : []),
          ]}
        />
      </Section>

      <Section title="Linked, not reproduced">
        <Prose
          paragraphs={[
            "The seismic microzonation mapping for Metro Vancouver may not be published commercially, in print or electronically, without written approval from the Institute for Catastrophic Loss Reduction, and the reservation reaches statements and conclusions about the maps as well as the maps themselves. The ground conditions page describes what they found and links to them.",
            "Those maps describe ground conditions across a region. They cannot tell you about a single address, and a map that shows your block as susceptible is not an assessment of your building. Only a site investigation is that.",
            "The provincial hazard tool, the regional Disaster Response Route map and most of the reports behind this site state no licence at all. A restoration time, a tonnage, a failure count and a date are facts, so they are stated here with credit and a link. The wording, the tables, the figures and the maps are not copied, redrawn or adapted.",
          ]}
        />
      </Section>

      <Section
        title="If something here is wrong"
        lede="The people most likely to spot a licence read the wrong way are the people who published the document."
      >
        <Link
          href="/contribute/"
          className="inline-block text-sm font-medium text-accent underline underline-offset-4"
        >
          How to send a correction
        </Link>
      </Section>

      <NextPrev
        prev={{ href: "/sources/", label: "Sources" }}
        next={{ href: "/contribute/", label: "Contribute" }}
      />
    </ArticleShell>
  );
}
