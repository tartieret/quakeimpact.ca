import Link from "next/link";

import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Dikes. The body of `/shaking/dikes/`, ported from `docs/copy/dikes.md`,
 * which is the dike part of the copy that used to be one secondary hazards
 * page.
 *
 * The engineering that has been published on named dike sections is the
 * Richmond dike master plan work, and it stays on `/shaking/ground/`, where it
 * is part of an argument about what the ground under a dike does and carries
 * the figure that draws it. This page holds the mechanism and links there
 * rather than moving it and leaving that argument a step short.
 */
export const dikes: PageModule = {
  meta: {
    route: "/shaking/dikes/",
    title: "Dikes",
    description:
      "A dike keeps the river and the sea out of land lying lower than they are. On the Fraser delta it is built on the same loose, wet sand that liquefies.",
    nav: "Dikes",
    kicker: "The shaking",
    standfirst:
      "A dike keeps the river and the sea out of land lying lower than they are. On the Fraser delta it is built on the same loose, wet sand that liquefies in an earthquake.",
    /**
     * First-cited order, which is the order the markers are numbered in.
     */
    references: ["CJES-2024", "RICH-DMP3-19", "YVR-SICRP", "MVSMMP"],
  },

  sections: [
    {
      title: "The dikes sit on the ground most likely to move",
      body: (
        <Prose>
          <p>
            A dike is an earth embankment that keeps the river and the sea out
            of land lying lower than they are. On the Fraser delta, the ground a
            dike is built on is the same loose, wet sand that liquefies in an
            earthquake, so the thing holding the water back and the ground most
            likely to move are in the same place. The peer-reviewed review of
            the delta treats subsidence, flooding, liquefaction, dike
            vulnerability and tsunami as one interacting set.{" "}
            <Cite id="CJES-2024" />
          </p>
          <p>
            Richmond has had sections of its own dikes analysed by engineers,
            and published the results in its dike master plans. Those plans
            conclude that proposed dike cross-sections will not meet the
            provincial seismic design requirements for dikes without ground
            improvement first. <Cite id="RICH-DMP3-19" /> The numbers, and the
            gap between them and what the City tells residents, are on{" "}
            <Link
              href="/shaking/ground/"
              className="text-accent underline underline-offset-2"
            >
              ground conditions
            </Link>
            .
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Sea Island’s dike is being raised for the sea, not for an earthquake",
      body: (
        <Prose>
          <p>
            Sea Island, where Vancouver International Airport sits, is ringed by
            a 15 km perimeter dike, which is being raised by about a metre to a
            total height of 4.7 m along with the pump stations behind it.{" "}
            <Cite id="YVR-SICRP" /> That work is a response to rising sea levels
            and flooding, with ground stability included in it. It is not a
            seismic project. <Cite id="YVR-SICRP" />
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    items: [
      <>
        <strong>Find out whether you live behind a dike, and ask the City
        what it holds on that section.</strong>{" "}
        Richmond publishes its dike master plans, and they state where proposed
        cross-sections fall short of the provincial seismic requirements.{" "}
        <Cite id="RICH-DMP3-19" /> A resident of another municipality can ask
        for the equivalent. Asking is the route that exists.
      </>,
      <>
        <strong>Look up what the ground behind the dike is made of.</strong> The
        free neighbourhood maps for the western municipalities map liquefaction
        susceptibility, which is the same ground the dike itself stands on.{" "}
        <Cite id="MVSMMP" />{" "}
        <Link
          href="/shaking/ground/"
          className="text-accent underline underline-offset-2"
        >
          Ground conditions
        </Link>{" "}
        says how to read them and which municipalities they do not reach yet.
      </>,
    ],
    closing: (
      <>
        No assessment of how the region’s dikes as a whole would perform in an
        earthquake has been published. What has been measured was measured one
        section at a time, by the municipality that owns it.
      </>
    ),
  },
};
