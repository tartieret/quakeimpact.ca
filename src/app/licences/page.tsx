import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/shell";
import { PageHeader, Section, Prose, NextPrev } from "@/components/page-parts";
import { REFERENCES } from "@/content/references";
import { nonCommercialPhotographs } from "@/content/media";
import type { Reference } from "@/content/types";

export const metadata: Metadata = { title: "Licences" };

/**
 * The credit the open licences require, and nothing the site is not obliged to
 * publish here.
 *
 * Three licences ask for a verbatim sentence and a link to their own text, and
 * this page is where those sentences live. Everything else a reader needs about
 * a source is already somewhere they will meet it: the catalogue's scope is on
 * `/method/` and `/scenarios/` with its markers, a dataset's own licence is on
 * `/sources/`, and a photograph's credit is under the photograph. A second copy
 * here was a second thing to keep in step, and the reasoning behind each
 * decision belongs to us rather than to the reader, so it stays in
 * `docs/licensing.md`.
 *
 * The dataset lists are read from the generated register rather than retyped,
 * so a corrected licence or date arrives here in the same edit.
 */

/** Published under terms that do not let this site draw from them. */
const LINK_ONLY_KEYS = ["MVSMMP", "MVSMMP-LIC"];

const DATASETS: Reference[] = Object.values(REFERENCES)
  .filter((entry) => entry.kind === "dataset")
  .sort((a, b) => a.id.localeCompare(b.id, "en"));

const USED = DATASETS.filter((entry) => !LINK_ONLY_KEYS.includes(entry.id));
const LINK_ONLY = DATASETS.filter((entry) => LINK_ONLY_KEYS.includes(entry.id));

const NON_COMMERCIAL = nonCommercialPhotographs();

/**
 * Non-commercial and on a page, as against non-commercial and held.
 *
 * The distinction the sentence below turns on, and it has moved once already:
 * the only non-commercial row used to be a held one, so the page could say the
 * register merely holds such photographs. A reader is owed the stronger version
 * the moment one of them is something they are being shown.
 */
const NON_COMMERCIAL_SHOWN = NON_COMMERCIAL.filter(
  (photo) => photo.usedOn !== null,
);
const NON_COMMERCIAL_HELD = NON_COMMERCIAL.length - NON_COMMERCIAL_SHOWN.length;

const LICENCES = [
  {
    name: "Open Government Licence – Canada",
    href: "https://open.canada.ca/en/open-government-licence-canada",
    covers:
      "The national earthquake scenario catalogue, including the two scenarios this site is built on, and the national seismic risk model behind them.",
    attribution: [
      "Contains information licensed under the Open Government Licence – Canada.",
      "Hobbs, T.E., Journeay, J.M., Rotheram, D., 2021. An Earthquake Scenario Catalogue for Canada: A Guide to Using Scenario Hazard and Risk Results; Geological Survey of Canada, Open File 8806, 22 p.",
    ],
  },
  {
    name: "Open Government Licence – Vancouver",
    href: "https://opendata.vancouver.ca/pages/licence/",
    covers:
      "City of Vancouver open data, including the dedicated fire protection water mains drawn on the fire following page.",
    attribution: [
      "Contains information licensed under the Open Government Licence – Vancouver.",
    ],
  },
  {
    name: "Open Government Licence – British Columbia",
    href: "https://www2.gov.bc.ca/gov/content/data/open-data/open-government-licence-bc",
    covers:
      "Only those provincial records that state it on the record itself. A provincial web address confers no licence, so each record is checked one at a time.",
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

function DatasetList({ entries }: { entries: Reference[] }) {
  return (
    <ul className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
      {entries.map((entry) => (
        <li key={entry.id} className="bg-paper-raised px-5 py-4">
          <p className="font-display text-base leading-snug text-pretty">
            {entry.title}
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            {[entry.publisher, entry.date].filter(Boolean).join(" · ")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            <span className="font-semibold">Licence:</span>{" "}
            {entry.licence ?? "None stated. Cited and linked, not copied."}
          </p>
          {entry.href ? (
            <a
              href={entry.href}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-medium text-accent underline underline-offset-4"
            >
              Open the dataset ↗
            </a>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function LicencesPage() {
  return (
    <ArticleShell
      header={
        <PageHeader
          kicker="Credit, and the limits on what is shown"
          title="Licences"
          standfirst="Facts can be stated freely. Maps, tables and wording usually cannot. This page carries the credit the open licences ask for by name, and says which material is linked to rather than reproduced."
        />
      }
    >
      <Section
        title="Credit, in the words each licence asks for"
        lede="Three open licences cover most of the data used here. Each requires the sentence below, and a link to the licence text."
      >
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
      </Section>

      <Section
        title="The datasets those licences cover"
        lede="Each one with the body that publishes it, the date on the record, and the licence stated on it."
      >
        <DatasetList entries={USED} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Every other document behind a figure on this site is listed on the{" "}
          <Link
            href="/sources/"
            className="text-accent underline underline-offset-2"
          >
            sources page
          </Link>
          , with its own licence where one is stated.
        </p>
      </Section>

      <Section
        title="The photographs, and who took them"
        lede="Each photograph carries its credit under itself, on the page it sits on: the photographer, where and when it was taken, the collection it is published in, and a link to the licence."
      >
        <Prose
          paragraphs={[
            "They are somebody's work, published under Creative Commons licences that ask for a name and a link to the terms. Every file is copied to this site and served from it rather than linked from the photographer's own host, so a credit cannot be quietly broken by somebody else moving a file. Each is the photographer's frame, resized to fit a page and otherwise unchanged.",
            NON_COMMERCIAL.length > 0
              ? `${
                  NON_COMMERCIAL_SHOWN.length > 0
                    ? `${
                        NON_COMMERCIAL_SHOWN.length === 1
                          ? "One of the photographs on the site is"
                          : `${NON_COMMERCIAL_SHOWN.length} of the photographs on the site are`
                      } licensed for non-commercial use only${
                        NON_COMMERCIAL_HELD > 0
                          ? ", and the register holds others besides"
                          : ""
                      }.`
                    : "The register holds photographs licensed for non-commercial use only, none of them currently on a page."
                } This site is free, carries no advertising, no affiliate links and nothing for sale, so the condition is met. The day that stopped being true, every one of them would have to come off.`
              : "None of them is licensed for non-commercial use only, so nothing on the site turns on whether it stays free.",
          ]}
        />
      </Section>

      <Section
        title="Material this site links to but does not reproduce"
        lede="The detailed ground conditions mapping for Metro Vancouver is published under terms that reserve commercial publication, in print and in electronic media, to its owner, and the reservation reaches statements and conclusions about the maps as well as the maps themselves."
      >
        <Prose
          paragraphs={[
            "So the ground conditions page describes that mapping in words and links out to it, and the map this site draws instead is the dedicated fire protection mains, which are the pipes themselves rather than a line around a service area. The owners ask that one thing be said alongside any use of the maps, and it is worth saying anyway: they describe ground conditions across a region, and they cannot tell you about a single address. A map that shows your block as susceptible is not an assessment of your building. Only a site investigation is that.",
          ]}
        />
        <div className="mt-6">
          <DatasetList entries={LINK_ONLY} />
        </div>
        <Prose
          paragraphs={[
            "The provincial hazard tool and the regional Disaster Response Route map are linked for the same reason: neither states a licence, so neither is reproduced here. The response routes are for emergency vehicles and are not evacuation routes for the public.",
            "Most of the reports behind this site carry no open licence either, and one, the 2013 insurance and economic cost assessment prepared for the Insurance Bureau of Canada, carries an explicit notice against reproduction in any form. A restoration time, a tonnage, a failure count and a date are facts, so this site states them with credit and links to where they were published. The wording, the tables, the figures and the maps are a different matter, and none of those are copied, redrawn or adapted here.",
          ]}
        />
      </Section>

      <Section
        title="If something here is wrong"
        lede="A licence read the wrong way is a mistake worth fixing quickly, and the people most likely to spot one are the people who published the document."
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
