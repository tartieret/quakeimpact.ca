import type { ReactNode } from "react";
import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Further resources. The body of `/resources/`, ported from
 * `docs/copy/resources.md`.
 *
 * A list of recommendations, one section each, so the contents rail reads as
 * the list. Every section has the same shape: a heading saying what to do, a
 * line saying who publishes it and in what form, why it is worth the time, and
 * the links. The province's guide leads because it is the one a reader acts on.
 *
 * No `lever`: every section is already somewhere to go next. The podcast is
 * described from its own episode notes rather than from the audio, so the page
 * says what the series covers and when it was made, and leaves what it says to
 * the series.
 */
const link = "text-accent underline underline-offset-2";

/** Who publishes the resource and in what form, above the reasons. */
function About({ children }: { children: ReactNode }) {
  return <p className="text-sm text-ink-muted">{children}</p>;
}

/** The way out to the resource itself, set apart from the prose. */
function Links({ items }: { items: { href: string; label: string }[] }) {
  return (
    <p className="flex flex-wrap gap-x-6 gap-y-2">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-accent underline underline-offset-4"
        >
          {item.label} <span aria-hidden>↗</span>
        </a>
      ))}
    </p>
  );
}

export const resources: PageModule = {
  meta: {
    route: "/resources/",
    title: "Further resources",
    description:
      "Three places to go further: the province’s earthquake preparedness guide, the annual ShakeOut drill, and a CBC podcast that follows a major earthquake.",
    nav: "Resources",
    kicker: "Where to go next",
    standfirst:
      "Three recommendations for going further: the province’s guide to follow at home, a drill to practise in every October, and a CBC podcast that tells the story of a major earthquake from the first day to the first year.",
    /** First-cited order, which is the order the markers are numbered in. */
    references: [
      "PREPAREDBC",
      "PREPAREDBC-PLAN",
      "PREPAREDBC-GUIDES",
      "BCEA-SHAKEOUT-26",
      "CBC-FAULTLINES-16",
      "NRCAN-EEW",
    ],
  },

  sections: [
    {
      title: "Follow the province’s preparedness guide",
      body: (
        <Prose>
          <About>
            PreparedBC, Province of British Columbia. A website and printable
            guides.
          </About>
          <p>
            The <em>Earthquake and Tsunami Preparedness Guide</em> asks
            households to be ready to look after themselves for at least two
            weeks, and covers the plan, the supplies and what to do while the
            ground is shaking. <Cite id="PREPAREDBC" /> It is the guide the
            advice on{" "}
            <Link href="/prepare/" className={link}>
              Preparing
            </Link>{" "}
            follows.
          </p>
          <p>
            Beside it are a household plan to fill in, published in English,
            French, Chinese and Punjabi, <Cite id="PREPAREDBC-PLAN" />{" "}
            <Cite id="PREPAREDBC-GUIDES" /> and separate guides for apartments
            and condominiums, for people with disabilities, for pets and for
            neighbourhoods. <Cite id="PREPAREDBC-GUIDES" />
          </p>
          <Links
            items={[
              {
                href: "https://www2.gov.bc.ca/gov/content/safety/emergency-management/preparedbc",
                label: "Go to PreparedBC",
              },
              {
                href: "https://www2.gov.bc.ca/gov/content/safety/emergency-management/preparedbc/guides-and-resources",
                label: "All the guides",
              },
            ]}
          />
        </Prose>
      ),
    },

    {
      title: "Practise in the ShakeOut drill every October",
      body: (
        <Prose>
          <About>
            The Great British Columbia ShakeOut, run by the British Columbia
            Earthquake Alliance, a not-for-profit society. An annual drill open
            to individuals, families, schools and organizations.
          </About>
          <p>
            Once a year, at the same moment, people across the province stop
            and practise Drop, Cover and Hold On. About 868,000 took part in
            2025. <Cite id="BCEA-SHAKEOUT-26" /> Sign up a household, a
            classroom or a workplace, and rehearse the first minute with the
            people you would be with. What to do while the shaking lasts is on{" "}
            <Link href="/prepare/" className={link}>
              Preparing
            </Link>
            .
          </p>
          <Links
            items={[
              {
                href: "https://www.shakeoutbc.ca/",
                label: "Sign up at shakeoutbc.ca",
              },
            ]}
          />
        </Prose>
      ),
    },

    {
      title: "Listen to Fault Lines, a CBC podcast",
      body: (
        <Prose>
          <About>
            CBC Vancouver, presented by Johanna Wagstaffe. Five episodes, 2016.
          </About>
          <p>
            The series takes a megathrust earthquake off the coast and a shallow
            one beneath Vancouver, the same two kinds this site describes, and
            follows them through the first day, the first three days, the first
            week, and the month and the year after. The last episode hears from
            two people who lived through the earthquakes in Christchurch, New
            Zealand, in 2010 and 2011. <Cite id="CBC-FAULTLINES-16" />
          </p>
          <p>
            Where it and the province’s current guide differ on what to keep at
            home, follow the guide. Earthquake early warning, which can give
            seconds of notice before strong shaking arrives, reached British
            Columbia in 2024, after the series was made.{" "}
            <Cite id="NRCAN-EEW" />
          </p>
          <Links
            items={[
              {
                href: "https://www.cbc.ca/listen/cbc-podcasts/147-fault-lines",
                label: "CBC Listen",
              },
              {
                href: "https://podcasts.apple.com/ca/podcast/fault-lines/id1162124786",
                label: "Apple Podcasts",
              },
            ]}
          />
        </Prose>
      ),
    },
  ],
};
