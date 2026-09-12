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
      "Where the damage falls depends on the ground and the building together, and on which of the two earthquakes arrives. The shaking is the short part: buildings break, people are hurt, and the fires and landslides come once it stops.",
    /** First-cited order, which is the order the markers are numbered in. */
    references: [
      "PEIRS",
      "NRCAN-1700",
      "DCRRA-2025",
      "NRCAN-SCEN",
      "JAVANBAKHT-24",
      "DCRRA-APPC",
      "GSC-OF-8853",
      "MVSMMP",
    ],
  },

  sections: [
    {
      title: "Nobody rides it out standing up",
      body: (
        <Prose>
          <p>
            Hardly anyone here has felt one. The province’s planning scenario
            starts with sound: a low rumble like a freight train, heard before
            anything is felt. Then the shaking knocks the people closest to it
            off their feet, and unsecured objects fall or fly through the air.{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            Nobody crosses a room. The floor is moving, and so is everything on
            it that is not fastened down. <Cite id="PEIRS" />
          </p>
          <p>
            The last Cascadia earthquake was on a night in January 1700. Natural
            Resources Canada records the oral traditions of First Nations on
            Vancouver Island: the shaking “was so violent that people could not
            stand and so prolonged that it made them sick.”{" "}
            <Cite id="NRCAN-1700" />
          </p>
          <p>
            Everyone closest is knocked down “except for those who remember to
            ‘drop, cover, and hold on’”. <Cite id="PEIRS" /> Drop before the
            shaking drops you, cover, and hold on until it stops. Do not run
            outside: many of those who try suffer extreme injury or death from
            falling and flying objects. <Cite id="PEIRS" />
          </p>
          <p>
            In the magnitude 7.0 scenario, an earthquake close to the city, the
            violent shaking lasts 10 to 20 seconds. <Cite id="PEIRS" /> In the
            magnitude 9.0 scenario, the offshore Cascadia earthquake, the main
            shaking lasts three minutes. <Cite id="DCRRA-2025" /> Almost all of
            the damage is done in that window or in the hours just after, and
            everything else on this site is about the months that follow. The
            province’s full account of those first seconds is on{" "}
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
      title: "The mainshock is not the last earthquake",
      body: (
        <Prose>
          <p>
            The province’s Cascadia scenario does not end when the shaking
            stops. About a month after the mainshock it models a second
            earthquake: magnitude 7.1, 60 km beneath Sidney, lasting 20 seconds,
            at 11 at night during an atmospheric river, which is a long and
            heavy rainstorm. <Cite id="DCRRA-2025" />
          </p>
          <p>
            That second earthquake is larger than the magnitude 7.0 the province
            uses for its other planning scenario, the one close to the city,{" "}
            <Cite id="PEIRS" /> and the buildings it reaches have already been
            through the first one. Whether a damaged building is safe to be in
            is a question somebody has to come and answer.{" "}
            <Link
              href="/shaking/buildings/"
              className="text-accent underline underline-offset-2"
            >
              Buildings
            </Link>{" "}
            covers who does that and how long people wait.
          </p>
          <p>
            None of it is in the published damage figures. The federal scenario
            catalogue leaves aftershocks out by name, <Cite id="NRCAN-SCEN" />{" "}
            and the province’s own headline numbers count “only direct mainshock
            damage”. <Cite id="DCRRA-2025" />
          </p>
        </Prose>
      ),
    },

    {
      title: "The ground and the building decide it together",
      body: (
        <Prose>
          <p>
            Two things decide what an earthquake does to a place: the ground
            underneath and the building on top. Which pairing turns out to be
            dangerous changes with the earthquake.
          </p>
          <p>
            The ground varies over short distances. The downtown peninsula and
            the North Shore slopes sit on rock. Richmond and Delta sit on loose
            sand with water in the gaps between the grains, and shaking hard
            enough stops the sand carrying the weight above it, so the ground
            behaves for a while like a thick liquid. Engineers call that
            liquefaction, and it floats buried pipes up, makes roads sag and
            tilts foundations. Delta soil is estimated to reach that tipping
            point every 100 to 250 years. <Cite id="JAVANBAKHT-24" />
          </p>
          <p>
            Underneath all of it the region sits in a deep bowl of soft
            sediment, which makes the slow, rolling waves stronger.{" "}
            <Cite id="DCRRA-APPC" />
          </p>
          <p>
            Which buildings that hurts depends on which earthquake it is. The
            near one shakes fast, which is “most hazardous to short buildings”,
            and unreinforced masonry and unreinforced concrete suffer the
            greatest damage. <Cite id="PEIRS" /> The offshore one shakes slowly,
            and there the ground and the building come as a pair: “urban areas
            with tall buildings on deep, soft sediments (for example, parts of
            Richmond) that resonate with the long-period seismic waves generated
            by the subduction interface earthquake also suffer significant
            damage.” <Cite id="DCRRA-2025" />
          </p>
          <p>
            <Link
              href="/shaking/ground/"
              className="text-accent underline underline-offset-2"
            >
              Ground conditions
            </Link>{" "}
            covers the ground half and how to look up an address.{" "}
            <Link
              href="/shaking/buildings/"
              className="text-accent underline underline-offset-2"
            >
              Buildings
            </Link>{" "}
            covers the other half.
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
            Geological Survey of Canada’s scenario catalogue. It counts “only
            damage to buildings, and their inhabitants, from earthquake
            shaking”. Landslides, liquefaction, fire following and aftershocks
            are “not currently included”. <Cite id="NRCAN-SCEN" /> With those
            left out, “the estimates herein are likely to represent a minimum
            estimate on impacts.” <Cite id="GSC-OF-8853" />
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
        cover and hold on. Do not run outside. <Cite id="PEIRS" /> The
        province’s Cascadia scenario puts a second earthquake about a month
        after the first, so both are needed more than once.{" "}
        <Cite id="DCRRA-2025" />
      </>,
    ],
  },
};
