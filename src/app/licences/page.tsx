import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/shell";
import { PageHeader, Section, Prose, NextPrev } from "@/components/page-parts";
import { REFERENCES } from "@/content/references";
import {
  MEDIA_LICENCES,
  PHOTOGRAPH_LIST,
  nonCommercialPhotographs,
  type Photograph,
} from "@/content/media";
import type { Reference } from "@/content/types";

export const metadata: Metadata = { title: "Licences" };

/**
 * Required by `docs/licensing.md`: the attribution strings, a link to each
 * licence, every dataset with its source, licence and the date it was reached,
 * and the disclaimers the sources themselves impose.
 *
 * The dataset list is read from the generated register rather than retyped, so
 * a corrected licence or date arrives here in the same edit.
 */

/** Published under terms that do not let this site draw from them. */
const LINK_ONLY_KEYS = ["MVSMMP", "MVSMMP-LIC"];

const DATASETS: Reference[] = Object.values(REFERENCES)
  .filter((entry) => entry.kind === "dataset")
  .sort((a, b) => a.id.localeCompare(b.id, "en"));

const USED = DATASETS.filter((entry) => !LINK_ONLY_KEYS.includes(entry.id));
const LINK_ONLY = DATASETS.filter((entry) => LINK_ONLY_KEYS.includes(entry.id));

/** On a page, as against cleared and held. See `src/content/media.ts`. */
const PLACED = PHOTOGRAPH_LIST.filter((photo) => photo.usedOn !== null);
const NON_COMMERCIAL = nonCommercialPhotographs();

/**
 * Placed but not yet hosted. Read from the register rather than stated, so the
 * sentence below cannot outlive the fact: the day a file lands in
 * `public/media/`, this page stops saying the slot is empty.
 */
const UNHOSTED = PLACED.filter((photo) => photo.file === null);

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
      "City of Vancouver open data, including the dedicated fire protection water mains layer used on the fire following page.",
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

/**
 * The credit each photographer is owed, in the same shape as the dataset list.
 * Every field is read from `src/content/media.ts`, so a corrected licence
 * reaches this page and the caption under the photograph in one edit.
 */
function PhotographList({ entries }: { entries: Photograph[] }) {
  return (
    <ul className="flex flex-col gap-px overflow-hidden rounded-xl border border-rule bg-rule">
      {entries.map((photo) => {
        const licence = MEDIA_LICENCES[photo.licence];
        return (
          <li key={photo.id} className="bg-paper-raised px-5 py-4">
            <p className="font-display text-base leading-snug text-pretty">
              {photo.photographer}
              {photo.title ? <>, “{photo.title}”</> : null}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {photo.place} · {photo.taken} · {photo.collection}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              <span className="font-semibold">Licence:</span> {licence.name}
              {licence.noDerivatives ? ". No changes made." : "."}
            </p>
            {photo.usedOn ? (
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                <span className="font-semibold">On:</span>{" "}
                <Link
                  href={photo.usedOn}
                  className="text-accent underline underline-offset-2"
                >
                  {photo.usedOn}
                </Link>
                {photo.file === null ? ", where the file is not hosted yet" : ""}
              </p>
            ) : null}
            <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
              <a
                href={photo.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-accent underline underline-offset-4"
              >
                Open the photograph ↗
              </a>
              <a
                href={licence.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-accent underline underline-offset-4"
              >
                Read the licence ↗
              </a>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default function LicencesPage() {
  return (
    <ArticleShell
      header={
        <PageHeader
          kicker="Credit, permissions and the limits on what is shown"
          title="Licences"
          standfirst="Facts can be stated freely. Maps, tables and wording usually cannot. This page records who owns what on this site, the credit each owner asks for, and the material that is linked to rather than reproduced."
        />
      }
    >
      <Section
        title="Credit, in the words each licence asks for"
        lede="Three open licences cover most of the data used here. Each requires the sentence below, and a link to the licence text. One record further down carries no open licence at all, and is read and linked rather than copied."
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
        title="The datasets this site uses"
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
        lede="Three pages carry photographs: ground conditions, buildings and fire following. Most are Christchurch, New Zealand, in 2010 and 2011, because a sentence cannot show a street where the ground has turned to liquid or a wall has come off a shop. One is a Vancouver hydrant. They are somebody's work, published under Creative Commons licences that ask for the photographer's name and a link to the terms."
      >
        <Prose
          paragraphs={[
            "The rule for a photograph is the rule for everything else here: nothing is shown unless the terms have been read and recorded. There is one more limit on top of it. A photograph of somewhere else is an analogue, and an analogue on this site may not produce a number. What carries across from Christchurch to the Fraser delta is the mechanism — wet sand losing its strength, a parapet held up by gravity and mortar. How deep the silt was, how many streets it closed and how long it took to clear are facts about Christchurch, and they stay there.",
            "The hydrant is the exception, and it is one because it is here. A photograph of a Vancouver street is not standing in for anything, so there is no transfer to limit: it shows an object a reader can go and check for on their own corner, which is the one thing the page it sits on was asking them to do.",
            UNHOSTED.length > 0
              ? "Some of the image files are not hosted yet. Until they are, the place each one will sit says so and names the photographer and the licence, rather than showing a gap and explaining nothing."
              : "Every file is copied to this site and served from it, rather than linked from the photographer's own host, so a credit here cannot be quietly broken by somebody else moving a file. Each is the photographer's frame, resized to fit a page and otherwise unchanged.",
          ]}
        />
        <div className="mt-6">
          <PhotographList entries={PLACED} />
        </div>
        {NON_COMMERCIAL.length > 0 ? (
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-muted">
            The register behind this list also holds photographs licensed for
            non-commercial use only. This site is free, carries no advertising
            and sells nothing, so the condition is met. If that ever stopped
            being true, they would come off in the same change.
          </p>
        ) : null}
      </Section>

      <Section
        title="What the scenario modelling leaves out"
        lede="The national scenario catalogue asks that its scope be stated wherever its output appears, and its scope is narrower than the subject of this site."
      >
        <Prose
          paragraphs={[
            "The catalogue models damage to buildings and to the people inside them, from shaking alone. It does not model roads, bridges, pipes, cables or vehicles. It does not include losses from aftershocks, from liquefaction, which is saturated ground losing its strength and behaving like a liquid while it shakes, from landslides, or from fire following the earthquake.",
            "So the casualty and damage figures taken from it are a floor, not a total, and the systems pages on this site are built from other work. Saying so is a condition of using the catalogue honestly, as well as a condition of using it at all.",
          ]}
        />
      </Section>

      <Section
        title="Maps this site links to but does not draw"
        lede="The detailed ground conditions mapping for Metro Vancouver is published under terms that reserve commercial publication, in print and in electronic media, to its owner, and the reservation reaches statements and conclusions about the maps as well as the maps themselves. This site links to it and describes what it found, in its own words."
      >
        <Prose
          paragraphs={[
            "The published map sheets may not be altered, and anything built from the underlying layers would have to be published under the same terms. Permission to do otherwise is held by the Institute for Catastrophic Loss Reduction. It has not been asked for and will not be: two of the limits would hold with permission anyway, because the published map sheets may not be altered and anything built from the underlying layers must carry the same terms. So the ground conditions page describes the mapping in words and links out to it, and the map this site draws instead is the dedicated fire protection mains, which are the pipes themselves and not a line around a service area.",
            "The owners ask that one thing be said alongside any use of those maps, and it is worth saying anyway: they describe ground conditions across a region, and they cannot tell you about a single address. A map that shows your block as susceptible is not an assessment of your building. Only a site investigation is that.",
          ]}
        />
        <div className="mt-6">
          <DatasetList entries={LINK_ONLY} />
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-muted">
          The provincial hazard tool and the regional Disaster Response Route
          map are linked for the same reason: neither states a licence, so
          neither is reproduced here. The response routes are for emergency
          vehicles and are not evacuation routes for the public.
        </p>
      </Section>

      <Section
        title="Documents quoted, but not reproduced"
        lede="Most of the reports behind this site carry no open licence at all. That is a narrower limit than it sounds."
      >
        <Prose
          paragraphs={[
            "A restoration time, a tonnage, a failure count and a date are facts. Facts cannot be owned, so this site states them and links to where they were published. The wording, the tables, the figures and the maps are a different matter, and none of those are copied, redrawn or adapted here.",
            "The Province of British Columbia reserves all rights in its material by default, and the provincial disaster risk assessment says so on its own record: it may be read by anyone and reproduced by no one. Its own authors scope it to provincial and regional analysis rather than to decisions about a community or a property, and that is how it is used here. Short quotation with credit and a link is ordinary practice and is what this site does. Provincial legislation is the exception, published under the King's Printer licence and quotable at length.",
            "One study, the 2013 insurance and economic cost assessment prepared for the Insurance Bureau of Canada, carries an explicit notice against reproduction in any form. Its findings are stated here as facts, with credit. None of its tables, figures or maps appear, and no copy of it is hosted.",
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
