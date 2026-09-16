import Link from "next/link";

import { Cite } from "@/components/citation";
import { GroundDikeSettlement } from "@/components/figures/ground-conditions";
import { Figure, Prose } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Dikes. The body of /shaking/dikes/, ported from docs/copy/dikes.md.
 *
 * Published engineering applies to named Richmond dike sections, not the
 * regional system. The geographic limits stay beside every result.
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
      "A dike keeps the river and the sea out of land lying lower than they are. On the Fraser delta, the dike and the ground beneath it can both move during an earthquake.",
    references: [
      "CJES-2024",
      "RICH-EQ",
      "RICH-THURBER-16",
      "RICH-DMP3-19",
      "RICH-DMP4-21",
      "RICH-DMP5-19",
      "YVR-SICRP",
      "MVSMMP",
    ],
  },

  sections: [
    {
      title: "Delta dikes stand on liquefiable soil",
      body: (
        <Prose>
          <p>
            A dike is an earth embankment that keeps the river and sea away from
            land lying below them. On the Fraser delta, dikes stand on loose,
            wet sand that can lose its strength during an earthquake. The
            embankment and its foundation can settle or spread sideways at the
            same time. <Cite id="CJES-2024" />
          </p>
          <p>
            This does not mean every dike will fail. Performance depends on the
            ground, the shape of the riverbank and how the particular section
            was built. No assessment has established how the region’s dikes as
            a whole would perform.
          </p>
        </Prose>
      ),
    },

    {
      title: "Richmond’s results apply to the sections it tested",
      body: (
        <Prose>
          <p>
            Richmond Fire-Rescue tells residents that computer models predict
            some earthquake damage but that the dikes will remain an intact
            barrier to flooding. <Cite id="RICH-EQ" /> The City’s engineering
            reports give a more limited result.
          </p>
          <p>
            A 2016 analysis tested three sections of the Lulu Island dike in an
            earthquake expected about once in 2,475 years. It estimated 600 mm
            of vertical movement at No. 1 Road, 1,000 mm at Bath Slough and 500
            mm at No. 4 Road. The provincial guideline allows 500 mm, so two
            sections exceeded it and one reached it. Sideways movement remained
            within the guideline at all three sections.{" "}
            <Cite id="RICH-THURBER-16" />
          </p>
          <Figure
            alt="The 2016 analysis estimates 600 mm of vertical movement at No. 1 Road, 1,000 mm at Bath Slough and 500 mm at No. 4 Road, against a provincial guideline of 500 mm."
            caption={
              <>
                Three tested sections in the earthquake expected about once in
                2,475 years. The findings do not apply to untested sections.{" "}
                <Cite id="RICH-THURBER-16" />
              </>
            }
          >
            <GroundDikeSettlement />
          </Figure>
          <p>
            The estimates do not include about 0.3 m of additional settlement
            as liquefied soil packs down again. The report also warns that
            movement of several metres could occur where liquefaction is
            widespread and the riverbank is steep.{" "}
            <Cite id="RICH-THURBER-16" />
          </p>
          <p>
            Later master plans reached the same conclusion for proposed dike
            designs: they would not meet provincial earthquake requirements
            without ground improvement or another approach. The estimated cost
            of densifying the ground was $9,000 to $18,000 per metre of dike.{" "}
            <Cite id="RICH-DMP3-19" /> <Cite id="RICH-DMP4-21" />{" "}
            <Cite id="RICH-DMP5-19" />
          </p>
          <p>
            These findings are not a survey of Richmond’s entire dike system.
            Eleven sections were analysed across four phases, and the reports
            say their results apply only where the tests were done.{" "}
            <Cite id="RICH-THURBER-16" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Sea Island’s dike project addresses sea-level rise",
      body: (
        <Prose>
          <p>
            Sea Island, where Vancouver International Airport sits, is ringed by
            a 15 km perimeter dike. The dike is being raised by about a metre to
            a total height of 4.7 m, along with the pump stations behind it.{" "}
            <Cite id="YVR-SICRP" />
          </p>
          <p>
            That work responds to rising sea levels and flooding. Ground
            stability is part of the project, but it is not a seismic upgrade.{" "}
            <Cite id="YVR-SICRP" />
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    items: [
      <>
        <strong>Find out whether you live behind a dike.</strong> Municipal
        flood maps and emergency information show the protected areas.
      </>,
      <>
        <strong>Ask what has been assessed on the section near you.</strong>{" "}
        Richmond publishes engineering results for named sections. A resident
        of another municipality can ask for the same information. Results from
        one section should not be assumed to describe another.
      </>,
      <>
        <strong>
          Look up the ground beneath the dike and the area behind it.
        </strong>{" "}
        The official neighbourhood maps show liquefaction susceptibility across
        the western municipalities. <Cite id="MVSMMP" />{" "}
        <Link
          href="/shaking/ground/"
          className="text-accent underline underline-offset-2"
        >
          Ground conditions
        </Link>{" "}
        explains how the ground changes the shaking and which municipalities
        are not mapped yet.
      </>,
    ],
  },
};
