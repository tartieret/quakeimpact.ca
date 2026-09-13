import Link from "next/link";

import { Cite } from "@/components/citation";
import { Prose, VerificationNote } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Landslides. The body of `/shaking/landslides/`, ported from `docs/copy/landslides.md`,
 * which is the landslide half of the copy that used to be one secondary
 * hazards page.
 *
 * There is no figure and no map slot on this page, and that is deliberate. The
 * layer a reader would want, earthquake-triggered landslide susceptibility on
 * the two mountain corridors, has not been published. A placeholder for a
 * graphic that will never be drawn is a promise rather than a label, so the
 * copy states the absence in words instead.
 */
export const landslides: PageModule = {
  meta: {
    route: "/shaking/landslides/",
    title: "Landslides",
    nav: "Landslides",
    kicker: "The shaking",
    standfirst:
      "The province’s own planning scenario has landslides cutting the transportation routes. The landslide maps for the two mountain corridors help would arrive on were built for rain, not for earthquakes.",
    /**
     * First-cited order, which is the order the markers are numbered in.
     */
    references: [
      "NRCAN-SCEN",
      "PEIRS",
      "MVSMMP",
      "GSC-OF-6169",
      "S2S-BLAIS-08",
      "S2S-EA-GEO-03",
      "MOTI-SRDC-05",
    ],
  },

  sections: [
    {
      title: "The province’s own scenario has landslides cutting the roads",
      body: (
        <Prose>
          <p>
            Most published damage figures for an earthquake here come from the
            Geological Survey of Canada’s scenario work, which counts “only
            damage to buildings, and their inhabitants, from earthquake
            shaking”. Landslides are “not currently included”.{" "}
            <Cite id="NRCAN-SCEN" /> What has been written about them was
            written separately.
          </p>
          <p>
            The province’s planning scenario for a magnitude 7.0 earthquake
            close to the city is set on a January afternoon, immediately after
            an atmospheric river has soaked the ground. <Cite id="PEIRS" /> Its
            account of the first minutes says: “Landslides and rock falls are
            generated in many areas, cutting off transportation routes. Flooding
            is increased by the recent wet weather event with some dikes
            failing.” <Cite id="PEIRS" />
          </p>
          <p>
            That is one scenario in one wet January. The same strategy assumes
            that “areas will be isolated”, with large parts of the impact area
            unreachable by road because of landslides, liquefaction and bridge
            damage, and it does not say which areas. <Cite id="PEIRS" />
          </p>
          <p>
            Provincial staging areas “are located outside the impact area and
            will be used to organize, prioritize, and disseminate critical
            resources”. <Cite id="PEIRS" /> Help is gathered outside the shaking
            and pushed in, and two of the roads it would come in on run through
            mountains: Highway 99 north through the Sea to Sky corridor, and
            Highway 1 east through the Fraser Canyon.
          </p>
          <VerificationNote label="Not published">
            No map of where an earthquake would set off landslides along the Sea
            to Sky corridor or the Fraser Canyon has been found in the published
            literature. Every seismic landslide product that has been found for
            this part of the province covers the western municipalities of Metro
            Vancouver, which stops well short of either corridor.{" "}
            <Cite id="MVSMMP" />
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title:
        "The landslide maps for those corridors were built for rain, not for earthquakes",
      body: (
        <Prose>
          <p>
            There is landslide mapping for the Sea to Sky corridor. Two maps
            published by the Geological Survey of Canada in 2009 rate the
            corridor for rock falls and rock slides, and for debris flows, at a
            resolution of 25 m. <Cite id="GSC-OF-6169" /> Each rating is a
            weighted sum of things about the slope: the rock type, how steep it
            is, which way it faces, what the surface is made of, how far it is
            from a stream. Not one of those ingredients is an earthquake, and
            the words “earthquake” and “seismic” appear nowhere in the maps. The
            weighting given to which way a slope faces is explained by the
            weather: rain comes from the west. <Cite id="GSC-OF-6169" />
          </p>
          <p>
            The record of what has actually come down on that corridor is built
            the same way. A review of 154 landslides on 110 km of the corridor
            between 1855 and 2007, a corridor that accounts for “more than 18%
            of Canada’s total landslide related deaths (&gt;600)”, puts 54 per
            cent of them down to the climate and 6 per cent to construction, and
            mentions neither earthquakes nor seismic loading anywhere in its
            text. <Cite id="S2S-BLAIS-08" />
          </p>
          <p>
            The environmental assessment for the highway’s own upgrade splits
            the two hazards apart as well. Earthquakes appear there as a matter
            of designing new bridges and structures to stay usable afterwards.
            Rock fall appears separately, and the report puts it down to the
            original blasting of the cuts, the slow loosening of rock
            afterwards, and “ice and root action”. <Cite id="S2S-EA-GEO-03" />
          </p>
          <p>
            The province’s own seismic design criteria for its bridges say:
            “This document does not address other potential risks, such as
            landslides or tsunamis.” <Cite id="MOTI-SRDC-05" /> Shaking and
            slopes are managed by different programs, and the corridors fall in
            the gap between them.
          </p>
          <p>
            A rock-fall map built for rain still shows where the loose rock is,
            and an earthquake is a different trigger on the same slopes. How
            long a severed mountain highway in this province has taken to reopen
            is on{" "}
            <Link
              href="/getting-around/"
              className="text-accent underline underline-offset-2"
            >
              getting around
            </Link>
            , where every closure counted was caused by rain.
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
        <strong>Plan around the road in, not the road out.</strong> The province
        gathers its help outside the impact area and pushes it in, and its own
        scenario has landslides cutting transportation routes.{" "}
        <Cite id="PEIRS" /> At home that means enough water, food and medicine
        to last while the roads are being cleared.
      </>,
    ],
    closing: (
      <>
        None of this has been modelled for the region as a whole. What has been
        measured was measured one slope and one corridor at a time, which is why
        the questions above are local ones.
      </>
    ),
  },
};
