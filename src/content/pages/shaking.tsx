import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import { SHAKING_PAGES } from "@/content/site";
import type { PageModule } from "./index";

/**
 * The shaking. The body of `/shaking/`, ported from `docs/copy/shaking.md`.
 *
 * An index page, and shorter than the pages it points at on purpose. The words
 * are the copy's. The card grid in the last section is not words: it is
 * `SHAKING_PAGES` drawn, so the five pages stay reachable from here however
 * many of them are written.
 *
 * There is no map slot. The ground conditions overlay this page used to
 * promise rests on the Metro Vancouver microzonation layers, which are not
 * openly licensed and are linked rather than redrawn (`docs/licensing.md`).
 */
export const shaking: PageModule = {
  meta: {
    route: "/shaking/",
    title: "The shaking",
    nav: "The shaking",
    kicker: "Part 1",
    standfirst:
      "This part is the earthquake itself: the ground under the region, the buildings on it, the injuries, and the fires and landslides that arrive once the shaking stops. It starts with the ground, because what a building stands on matters more than which building it is.",
    /** First-cited order, which is the order the markers are numbered in. */
    references: [
      "PEIRS",
      "DCRRA-2025",
      "JAVANBAKHT-24",
      "DCRRA-APPC",
      "NRCAN-SCEN",
      "GSC-OF-8853",
      "MVSMMP",
    ],
  },

  sections: [
    {
      title:
        "The shaking is measured in seconds and the rest of this site is measured in months",
      body: (
        <Prose>
          <p>
            In the province’s magnitude 7.0 planning scenario for Greater
            Vancouver, violent shaking lasts 10 to 20 seconds.{" "}
            <Cite id="PEIRS" /> In the province’s magnitude 9.0 Cascadia
            scenario, the mainshock lasts three minutes.{" "}
            <Cite id="DCRRA-2025" /> Each of those durations belongs to its own
            scenario rather than to earthquakes in general.
          </p>
          <p>
            Everything on the pages in this part happens inside that window, or
            in the hours just after it.
          </p>
        </Prose>
      ),
    },

    {
      title: "What a building stands on matters more than which building it is",
      body: (
        <Prose>
          <p>
            <Link
              href="/shaking/ground/"
              className="text-accent underline underline-offset-2"
            >
              Ground conditions
            </Link>{" "}
            comes first because its finding governs the rest. In Richmond and
            Delta the published return period for soil liquefaction, saturated
            sand losing its strength during shaking and behaving for a time like
            a liquid, is 100 to 250 years, worked out from 787 cone penetration
            test profiles. <Cite id="JAVANBAKHT-24" /> Under the whole region a
            deep basin of soft sediment makes slow shaking grow, by amounts the
            province has measured and the national building code does not yet
            account for. <Cite id="DCRRA-APPC" />
          </p>
          <p>
            Two addresses a few blocks apart can sit on different ground. That
            page covers what varies across the region, and how to find out what
            is under a given address.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The official modelling covers buildings and the people in them, and stops there",
      body: (
        <Prose>
          <p>
            The Geological Survey of Canada’s scenario catalogue states its own
            boundary. The modelling covers “only damage to buildings, and their
            inhabitants, from earthquake shaking”, and landslides, liquefaction,
            fire following and aftershocks are “not currently included”.{" "}
            <Cite id="NRCAN-SCEN" /> Natural Resources Canada draws the
            conclusion itself: with those left out, “the estimates herein are
            likely to represent a minimum estimate on impacts.”{" "}
            <Cite id="GSC-OF-8853" />
          </p>
          <p>
            That is why fire following and the hazards that arrive after the
            shaking have pages of their own here. They sit outside the numbers
            that most published accounts quote.
          </p>
        </Prose>
      ),
    },

    {
      title: "This part has five pages and four of them are not written yet",
      body: (
        <div className="flex flex-col gap-8">
          <Prose>
            <p>
              <strong>
                <Link
                  href="/shaking/ground/"
                  className="text-accent underline underline-offset-2"
                >
                  Ground conditions
                </Link>
              </strong>{" "}
              is written in full.
            </p>
            <p>
              <strong>
                Buildings, casualties, fire following and secondary hazards
              </strong>{" "}
              each have a page with no text on it yet. Each one says so, and
              carries what has been gathered for it so far.
            </p>
            <p>
              <strong>What the two scenarios feel like</strong> is on{" "}
              <Link
                href="/scenarios/"
                className="text-accent underline underline-offset-2"
              >
                the two scenarios
              </Link>{" "}
              rather than here, including the province’s own account of the
              first seconds of its planning scenario. <Cite id="PEIRS" />
            </p>
          </Prose>

          <ul className="grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2">
            {SHAKING_PAGES.map((page, i) => (
              <li key={page.slug}>
                <Link
                  href={`/shaking/${page.slug}/`}
                  className="group flex h-full flex-col gap-2 bg-paper-raised p-6 transition-colors hover:bg-accent-soft"
                >
                  <span className="font-mono text-xs text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl tracking-tight group-hover:text-accent">
                    {page.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {page.hook}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    items: [
      <>
        <strong>
          Look up the ground at the addresses you spend time at.
        </strong>{" "}
        The regional microzonation maps cover the western municipalities at
        neighbourhood scale and are free to read. <Cite id="MVSMMP" />{" "}
        <Link
          href="/shaking/ground/"
          className="text-accent underline underline-offset-2"
        >
          Ground conditions
        </Link>{" "}
        says how to read them, and which municipalities they do not yet reach.
      </>,
      <>
        <strong>Learn the two actions for the first seconds.</strong> Drop,
        cover and hold on, and do not run outside. Both are in the province’s
        own account of its planning scenario. <Cite id="PEIRS" />
      </>,
    ],
  },
};
