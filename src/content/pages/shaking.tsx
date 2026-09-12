import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import { DraftMark } from "@/components/status";
import { SHAKING_PAGES } from "@/content/site";
import type { PageModule } from "./index";

/**
 * The shaking. The body of `/shaking/`, ported from `docs/copy/shaking.md`.
 *
 * An index page, and shorter than the pages it points at on purpose. The words
 * are the copy's. The card grid in the last section is not words: it is
 * `SHAKING_PAGES` drawn, so the five subjects stay reachable from here, each
 * card carrying the subject's own hook. Which of them are drafts is the
 * marker's job, not a sentence's.
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
      "The ground under the region, the buildings on it, the injuries, and the fires and landslides that come once the shaking stops. Where the damage falls is decided more by the ground than by the buildings standing on it.",
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
      title: "The shaking is the short part",
      body: (
        <Prose>
          <p>
            In the province’s magnitude 7.0 scenario, an earthquake close to the
            city, the violent shaking lasts 10 to 20 seconds.{" "}
            <Cite id="PEIRS" /> In its magnitude 9.0 scenario, the offshore
            Cascadia earthquake, the main shaking lasts three minutes.{" "}
            <Cite id="DCRRA-2025" /> Each of those belongs to its own scenario,
            not to earthquakes in general.
          </p>
          <p>
            That is the whole of it. Almost all of the damage is done inside
            that window, or in the hours just after. Everything else on this
            site is about the months that follow. What those first seconds look
            like is on{" "}
            <Link
              href="/scenarios/"
              className="text-accent underline underline-offset-2"
            >
              the two scenarios
            </Link>
            . <Cite id="PEIRS" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "What you are standing on matters more than what you are standing in",
      body: (
        <Prose>
          <p>
            Two houses a few blocks apart can come through the same earthquake
            very differently, because the ground under them is different. Rock
            holds still. Soft, wet ground does not.
          </p>
          <p>
            On the Fraser delta, under Richmond and Delta, the soil is loose
            sand with water in the gaps between the grains. Shake it hard enough
            and the sand stops carrying the weight above it and behaves for a
            while like a thick liquid. Engineers call that liquefaction. Buried
            pipes float up, roads sag, foundations tilt. The published estimate
            is that delta soil reaches that tipping point every 100 to 250
            years. <Cite id="JAVANBAKHT-24" />
          </p>
          <p>
            The second effect is under everybody. The whole region sits in a
            deep bowl of soft sediment, and soft sediment does not pass the
            shaking through unchanged: it makes the slow, rolling waves
            stronger, which is what tall buildings feel. The province has
            measured how much stronger. Canada’s building code does not yet
            count it. <Cite id="DCRRA-APPC" />
          </p>
          <p>
            <Link
              href="/shaking/ground/"
              className="text-accent underline underline-offset-2"
            >
              Ground conditions
            </Link>{" "}
            has the numbers, and how to look up the ground under an address you
            care about.
          </p>
        </Prose>
      ),
    },

    {
      title: "The official damage numbers leave things out, and say so",
      body: (
        <Prose>
          <p>
            Most published figures for an earthquake here come from the
            Geological Survey of Canada’s scenario catalogue, and it is careful
            about its own limits. It counts “only damage to buildings, and their
            inhabitants, from earthquake shaking”. Landslides, liquefaction,
            fire following and aftershocks are “not currently included”.{" "}
            <Cite id="NRCAN-SCEN" /> Natural Resources Canada spells out what
            that means: with those left out, “the estimates herein are likely to
            represent a minimum estimate on impacts.” <Cite id="GSC-OF-8853" />
          </p>
          <p>
            So a damage figure or a casualty figure from that work is a floor
            rather than a ceiling. The fires and the landslides sit outside it.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The ground moves, buildings break, people are hurt, and then the fires start",
      body: (
        <div className="flex flex-col gap-8">
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
                    {page.status === "draft" ? (
                      <>
                        {" "}
                        <DraftMark />
                      </>
                    ) : null}
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
        <strong>Look up the ground under the places you spend time.</strong> The
        regional maps cover the western municipalities street by street and are
        free to read. <Cite id="MVSMMP" />{" "}
        <Link
          href="/shaking/ground/"
          className="text-accent underline underline-offset-2"
        >
          Ground conditions
        </Link>{" "}
        says how to read them, and which municipalities they do not reach yet.
      </>,
      <>
        <strong>Know the two things to do in the first seconds.</strong> Drop,
        cover and hold on. Do not run outside. Both are in the province’s own
        account of its planning scenario. <Cite id="PEIRS" />
      </>,
    ],
  },
};
