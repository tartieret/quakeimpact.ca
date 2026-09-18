import Link from "next/link";

import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Landslides. The body of `/shaking/landslides/`, ported from `docs/copy/landslides.md`,
 * which is the landslide half of the copy that used to be one secondary
 * hazards page.
 *
 * The page runs in three steps: where the loose ground is and what has been
 * mapped of it, that shaking brings the same slopes down, and how long a
 * severed road stays severed.
 *
 * There is no figure and no map slot, and that is deliberate. The two layers a
 * reader would want cannot be drawn here: the microzonation slope instability
 * sheets are licensed link-only (see `docs/licensing.md`), and no corridor
 * product conditioned on shaking exists for Highway 99 or the Fraser Canyon.
 * A placeholder for a graphic that will never be drawn is a promise rather
 * than a label.
 */
export const landslides: PageModule = {
  meta: {
    route: "/shaking/landslides/",
    title: "Landslides",
    description:
      "The slopes above Highway 99 and Highway 1 are rated for rock fall and debris flows. Shaking is a trigger on the same ground, and the routes into the region could be cut for weeks.",
    nav: "Landslides",
    kicker: "The shaking",
    standfirst:
      "Highway 99 runs north from Horseshoe Bay under cliffs and debris channels, and Highway 1 runs east into the Fraser Canyon. Both have been closed before by what came down on them, and both are how help reaches this region by land.",
    /**
     * First-cited order, which is the order the markers are numbered in.
     */
    references: [
      "GSC-OF-6169",
      "S2S-BLAIS-08",
      "MVSMMP",
      "NRCAN-1700",
      "PEIRS",
      "HWY1-RECOV",
      "HWY8-RECOV",
      "BC-FLOOD-STRAT",
    ],
  },

  sections: [
    {
      title: "Loose rock sits above the roads into this region",
      body: (
        <Prose>
          <p>
            Highway 99 climbs from Horseshoe Bay to Whistler below slopes that
            have been rated for rock falls, rock slides and debris flows at a
            resolution of 25 m. <Cite id="GSC-OF-6169" /> The rating is built
            from the rock type, how steep the slope is, which way it faces, what
            the surface is made of and how far it is from a stream.{" "}
            <Cite id="GSC-OF-6169" />
          </p>
          <p>
            That corridor has a long record of things coming down on it. A
            review of 110 km of it counted 154 landslides between 1855 and 2007,
            on a stretch of road that accounts for “more than 18% of Canada’s
            total landslide related deaths (&gt;600)”. <Cite id="S2S-BLAIS-08" />
          </p>
          <p>
            Closer in, the free neighbourhood maps for the western municipalities
            of Metro Vancouver carry a slope instability layer alongside
            liquefaction, drawn street by street. <Cite id="MVSMMP" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Shaking sets off the same slopes that rain does",
      body: (
        <Prose>
          <p>
            The Cascadia earthquake of January 1700 collapsed houses of the
            Cowichan people on Vancouver Island and set off numerous landslides.{" "}
            <Cite id="NRCAN-1700" />
          </p>
          <p>
            The province’s planning scenario for a magnitude 7.0 earthquake
            close to the city is set on a January afternoon, right after an
            atmospheric river has soaked the ground. Its account of the first
            minutes reads: “Landslides and rock falls are generated in many
            areas, cutting off transportation routes.” <Cite id="PEIRS" />
          </p>
          <p>
            The ratings on Highway 99 were built for the weather. The weight
            they give to which way a slope faces is explained by where the rain
            comes from, which is the west. <Cite id="GSC-OF-6169" /> They still
            show where the loose rock and the debris channels are, and shaking
            works on the same ground.
          </p>
        </Prose>
      ),
    },

    {
      title: "A road cut here stays cut for weeks",
      body: (
        <Prose>
          <p>
            After the crustal scenario the province expects the routes into the
            region to be damaged or only partly usable, at much reduced
            capacity, for weeks to months, and the rail network in the impact
            area to be largely unusable through the immediate response.{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            Where the help is makes that worse. Provincial staging areas sit
            outside the impact area, and resources are gathered there and pushed
            in. <Cite id="PEIRS" /> Two of the roads they would come in on run
            through mountains.
          </p>
          <p>
            The last time these roads were cut it was rain rather than shaking
            that did it. A storm in November 2021 closed Highway 1 through the
            Fraser Canyon at 18 sites between Hope and Spences Bridge, and it
            reopened about two months later. <Cite id="HWY1-RECOV" /> Highway 8
            in the Nicola Valley took about a year. <Cite id="HWY8-RECOV" /> The
            same storm cut the main rail lines out of the province.{" "}
            <Cite id="BC-FLOOD-STRAT" />
          </p>
          <p>
            What those closures did, and how the region moves while they last,
            is on{" "}
            <Link
              href="/getting-around/"
              className="text-accent underline underline-offset-2"
            >
              getting around
            </Link>
            .
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    items: [
      <>
        <strong>Look up the slopes and the soil where you live.</strong> The
        free neighbourhood maps for the western municipalities cover slope
        instability as well as liquefaction. <Cite id="MVSMMP" />{" "}
        <Link
          href="/shaking/ground/"
          className="text-accent underline underline-offset-2"
        >
          Ground conditions
        </Link>{" "}
        says how to read them and which municipalities they do not reach yet.
      </>,
      <>
        <strong>Plan around the road in, not the road out.</strong> Help is
        gathered outside the impact area and pushed in over roads that run
        through mountains. <Cite id="PEIRS" /> At home that means enough water,
        food and medicine to last while the roads are being cleared.
      </>,
    ],
    closing: (
      <>
        A slope that comes down on Highway 99 lands on the road that help
        arrives by. Whether it was rain or shaking that brought it down changes
        very little about the weeks that follow.
      </>
    ),
  },
};
