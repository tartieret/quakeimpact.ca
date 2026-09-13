import Link from "next/link";

import { Cite } from "@/components/citation";
import { Prose, Quote } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Dams. The body of `/shaking/dams/`, ported from `docs/copy/dams.md`,
 * which is the dam part of the copy that used to be one secondary hazards
 * page.
 *
 * The dams here have two owners and the evidence does not mix: Metro Vancouver
 * publishes a yearly safety summary and no review report, BC Hydro states named
 * seismic deficiencies to its own regulator. They have a section each, and
 * neither shares a sentence or a table column with the other.
 *
 * There is no map slot. Dam-breach inundation, the layer a reader would want,
 * is not routed to the public at all, and a placeholder for a graphic that will
 * never be drawn is a promise rather than a label.
 *
 * The water-supply side of Metro Vancouver's dams, what the capital plan has
 * funded and what a reservoir is for, is `/after/dams-and-reservoirs/`. This
 * page is the hazard side and links there rather than repeating it.
 */
export const dams: PageModule = {
  meta: {
    route: "/shaking/dams/",
    title: "Dams",
    nav: "Dams",
    kicker: "The shaking",
    standfirst:
      "The region’s dams have two owners. Metro Vancouver’s published reviews of its water-supply dams do not mention an earthquake; BC Hydro tells its own regulator which part of each power dam it expects one to break.",
    /**
     * First-cited order, which is the order the markers are numbered in.
     */
    references: [
      "MV-DSP-2026",
      "BC-DAMS-REG",
      "BCH-RRA-F2020",
      "BCH-RUSKIN-SEIAM-11",
      "BCH-RUSKIN-F2019",
      "BCH-COQUITLAM-RRA-06",
      "BCDSP-DEP-24",
    ],
  },

  sections: [
    {
      title:
        "The two water-supply dams were reviewed in 2024, and neither published conclusion mentions an earthquake",
      body: (
        <Prose>
          <p>
            Metro Vancouver’s two water-supply dams, Cleveland on the Capilano
            and Seymour Falls on the Seymour, were each reviewed by an engineer
            in 2024, and neither published conclusion mentions an earthquake.{" "}
            <Cite id="MV-DSP-2026" /> What those reviews say, what the capital
            plan has funded and what has not been published about where the
            water would go are on{" "}
            <Link
              href="/after/dams-and-reservoirs/"
              className="text-accent underline underline-offset-2"
            >
              dams and reservoirs
            </Link>
            , where the same two dams are the region’s drinking water as well as
            a structure above it.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "BC Hydro names the parts of its own dams an earthquake is expected to break",
      body: (
        <Prose>
          <p>
            BC Hydro owns the power dams in and near the region. Coquitlam,
            Stave Falls, Alouette and Cheakamus are classified Extreme in the
            provincial register as it stands. <Cite id="BC-DAMS-REG" /> In
            filings to its own regulator, BC Hydro names the part of each dam
            that it expects an earthquake to damage, and the strength of shaking
            at which it expects that to happen. <Cite id="BCH-RRA-F2020" />
          </p>
          <Quote
            speaker="BC Hydro"
            source="Facility Asset Plans, filed with the British Columbia Utilities Commission"
            cite={<Cite id="BCH-RRA-F2020" />}
          >
            <p>
              “Given that these are all Extreme consequence dams, current
              expectations — as outlined in the Canadian Dam Association’s Dam
              Safety Guidelines — are that they should be able to withstand an
              earthquake of intensity expected to occur once every 10,000
              years.”
            </p>
          </Quote>
          <p>
            Every figure BC Hydro gives names a part, not a dam. At Alouette, it
            expects the power tunnel headworks and surge tower to fail in
            shaking of the size expected on average once every 100 to 200 years,
            which “could block the post-earthquake discharge of water from
            Alouette Reservoir to Stave Lake Reservoir”.{" "}
            <Cite id="BCH-RRA-F2020" /> That is the means of letting water out
            of the reservoir, not the dam holding it in. Until the tunnel is
            upgraded, BC Hydro says “Alouette Lake Reservoir will be operated in
            a manner that provides sufficient time to provide emergency response
            following a major earthquake.” <Cite id="BCH-RRA-F2020" />
          </p>
          <p>
            BC Hydro prices each deficiency and states in writing which it is
            fixing and which it is accepting: at Coquitlam the inlet portal
            upgrade is in the plan while the outlet portal and the low level
            outlet “are monitored and will be retained as the consequences are
            expected to be low”. <Cite id="BCH-RRA-F2020" /> Stave Falls records
            no seismic issue at all among the significant risks remaining at the
            dam; its problems are turbine design and obsolete controls.{" "}
            <Cite id="BCH-RRA-F2020" />
          </p>
          <p>
            In 2011 a consultant reported to BC Hydro that key components of
            Ruskin Dam and its powerhouse had seismic withstand levels
            “significantly below” the earthquake the guidelines required them to
            survive, with up to 300 people downstream of the dam in summer.{" "}
            <Cite id="BCH-RUSKIN-SEIAM-11" /> The dam was rebuilt. BC Hydro’s
            2019 reporting records that after a 20 year dam safety initiative
            and 11 years of construction the upper part of the dam was finished,
            and its advisory board concluded the project “has met the overall
            project objectives of withstanding the Maximum Design Earthquake”.{" "}
            <Cite id="BCH-RUSKIN-F2019" /> That is a statement about what the
            work was designed to do, not a later verification that it does it.
            Ruskin is in Mission, in the Fraser Valley Regional District,
            outside Metro Vancouver. <Cite id="BC-DAMS-REG" />
          </p>
          <p>
            Coquitlam Dam is where the material in the dam itself is the
            problem. BC Hydro told the regulator in 2006 that “the dam contains
            loose materials that are expected to liquefy during a moderate to
            large earthquake”. <Cite id="BCH-COQUITLAM-RRA-06" /> That is the
            mechanism described on{" "}
            <Link
              href="/shaking/ground/"
              className="text-accent underline underline-offset-2"
            >
              ground conditions
            </Link>
            , written by an owner about its own structure.
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    items: [
      <>
        <strong>
          Ask your local government what it holds for the dam nearest you.
        </strong>{" "}
        Municipalities downstream of a dam receive a defined part of its
        emergency plan. <Cite id="BCDSP-DEP-24" /> A resident can ask for it,
        and can ask Metro Vancouver directly under freedom of information.
        Asking is the route that exists.
      </>,
      <>
        <strong>Look up how the dam is classified.</strong> The provincial dam
        register is public and carries each dam’s owner and its failure
        consequence classification, which is the measure the guidelines above
        are written against. <Cite id="BC-DAMS-REG" />
      </>,
    ],
    closing: (
      <>
        Where the water would go if a dam did fail is not published for the dams
        in this region. The provincial register names each dam’s failure
        consequence classification and stops there. <Cite id="BC-DAMS-REG" />
      </>
    ),
  },
};
