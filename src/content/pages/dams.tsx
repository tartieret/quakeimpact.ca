import type { ReactNode } from "react";
import Link from "next/link";

import { Cite } from "@/components/citation";
import {
  DataTable,
  Figure,
  NotPublished,
  Prose,
  Quote,
} from "@/components/page-parts";
import {
  DAMS,
  DAMS_ATTRIBUTIONS,
  DAM_FACTS,
  DamsMap,
} from "@/components/figures/dams";
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
 * The map draws the layer that is open and not the one a reader wants. The
 * provincial register is OGL-BC and carries every dam's location, owner and
 * failure consequence class, so where the dams are and which of them a failure
 * would reach can be drawn. Dam-breach inundation, the layer that would say
 * where the water goes, is not routed to the public at all; it has no
 * placeholder, because a placeholder for a graphic the site will never be
 * licensed to draw is a promise rather than a label.
 *
 * The map and the table are one exhibit and neither is decoration. The register
 * picks the dams, which is how four dams the prose above never names are on the
 * page at all, and the table's last column is mostly `NotPublished`. That
 * emptiness is the finding: for eleven of the seventeen high-consequence dams
 * in this region, nothing was found in which the owner says what an earthquake
 * would do. The sourced statements in `SEISMIC` below are the same sentences
 * the prose cites, kept beside the prose rather than in the figure, because
 * every one of them is a sourced claim.
 *
 * The water-supply side of Metro Vancouver's dams, what the capital plan has
 * funded and what a reservoir is for, is `/after/dams-and-reservoirs/`. This
 * page is the hazard side and links there rather than repeating it.
 */

/**
 * What each owner has published about its own dam and an earthquake.
 *
 * Keyed by the name in `src/data/region-dams.json`, which is the provincial
 * register's, so a dam that leaves the register's Extreme or Very High classes
 * drops out of the table and takes its statement with it rather than being
 * left behind as an orphan.
 *
 * Every entry summarises a document the prose above already quotes, and nothing
 * is here that is not in one of them. The table states each finding rather than
 * requoting it: the quotations are upstairs in the prose, and repeating them in
 * a cell made rows three hundred pixels tall in which five of the six columns
 * were white space. Three of the four `statement` entries name a deficiency; Stave Falls is here because a filing that lists the
 * significant risks remaining at a dam and includes no seismic one among them
 * is a published statement too, and reading it as silence would be wrong.
 *
 * `reviewed` is a third state and not a fourth column. Metro Vancouver's two
 * dams were reviewed and the published conclusion does not mention an
 * earthquake, which is not the same as nothing having been published and not
 * the same as a seismic finding. The map draws them hollow, because what an
 * earthquake would do to them is still unsaid.
 */
const SEISMIC: Record<
  string,
  { statement?: ReactNode; upgrade?: ReactNode; reviewed?: ReactNode }
> = {
  Alouette: {
    statement: (
      <>
        The power tunnel headworks and surge tower are expected to fail in
        shaking of the size expected once every 100 to 200 years, which could
        block the reservoir’s discharge to Stave Lake.{" "}
        <Cite id="BCH-RRA-F2020" />
      </>
    ),
    upgrade: (
      <>
        Not yet upgraded. The reservoir is operated to leave time for emergency
        response in the meantime. <Cite id="BCH-RRA-F2020" />
      </>
    ),
  },
  Cheakamus: {
    statement: (
      <>
        “Insufficient resistance to seismic loads that may lead to failure of
        the dam, spillway, spillway gates and/or penstock pedestals in a major
        earthquake occurring, on average, about once every 1,000 years or
        more.” <Cite id="BCH-RRA-F2020" />
      </>
    ),
  },
  Wahleach: {
    statement: (
      <>
        The Jones Lake intake gates are expected to fail in shaking of the size
        expected once every 4,800 years, which “would prevent the closure of
        the water passage” and could flood adjacent utility and transportation
        corridors. <Cite id="BCH-RRA-F2020" />
      </>
    ),
  },
  Coquitlam: {
    statement: (
      <>
        The dam contains loose materials expected to liquefy in a moderate to
        large earthquake. <Cite id="BCH-COQUITLAM-RRA-06" />
      </>
    ),
    upgrade: (
      <>
        The inlet portal upgrade is in the plan. The outlet portal and low level
        outlet are monitored and retained. <Cite id="BCH-RRA-F2020" />
      </>
    ),
  },
  Ruskin: {
    statement: (
      <>
        Key components were assessed in 2011 as significantly below the
        earthquake the guidelines required them to survive.{" "}
        <Cite id="BCH-RUSKIN-SEIAM-11" />
      </>
    ),
    upgrade: (
      <>
        Rebuilt. The advisory board concluded the work met its objective of
        withstanding the Maximum Design Earthquake, which is what it was
        designed to do rather than a verification that it does it.{" "}
        <Cite id="BCH-RUSKIN-F2019" />
      </>
    ),
  },
  "Stave Falls": {
    statement: (
      <>
        No seismic issue among the significant risks the filing records at the
        dam. <Cite id="BCH-RRA-F2020" />
      </>
    ),
  },
  Cleveland: {
    reviewed: (
      <>
        Reviewed in 2024. The published conclusion does not mention an
        earthquake. <Cite id="MV-DSP-2026" />
      </>
    ),
  },
  "Seymour Falls": {
    reviewed: (
      <>
        Reviewed in 2024. The published conclusion does not mention an
        earthquake. <Cite id="MV-DSP-2026" />
      </>
    ),
  },
};

/**
 * Where an owner files a dam in a different class than the register does.
 *
 * One case. BC Hydro's facility asset plan classifies Wahleach Very High; the
 * provincial register classes it Extreme. The distinction is not cosmetic,
 * because the design criteria the province sets differ by class, so neither
 * number goes on the page without its source beside it. The column is the
 * register's throughout and says so; this is the disagreement, not a
 * correction of it.
 */
const CONSEQUENCE_CONFLICT: Record<string, ReactNode> = {
  Wahleach: (
    <>
      BC Hydro files it Very High. <Cite id="BCH-RRA-F2020" />
    </>
  ),
};

/** The dams drawn solid: an owner has said what an earthquake would do. */
const PUBLISHED = Object.entries(SEISMIC)
  .filter(([, entry]) => entry.statement)
  .map(([name]) => name);

/**
 * The last column. A dam with nothing published carries the hatched label
 * rather than an empty cell, which `prose-blocks.tsx` exists to make
 * impossible to read as an oversight.
 */
function whatIsSaid(name: string): ReactNode {
  const entry = SEISMIC[name];
  if (!entry) return <NotPublished label="Nothing found" />;
  return (
    <>
      {entry.statement ?? entry.reviewed}
      {entry.upgrade ? <span className="mt-2 block">{entry.upgrade}</span> : null}
    </>
  );
}

export const dams: PageModule = {
  meta: {
    route: "/shaking/dams/",
    title: "Dams",
    description:
      "Metro Vancouver’s reviews of its water-supply dams do not mention an earthquake. BC Hydro names the part of each power dam it expects one to break.",
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

    {
      title:
        "The register lists seventeen dams here whose failure would reach people, and records nothing about earthquakes at any of them",
      body: (
        <Prose>
          <p>
            The province keeps a public register of every regulated dam, and it
            classifies each one by what a failure would reach downstream.{" "}
            <Cite id="BC-DAMS-REG" /> {DAM_FACTS.total} dams in this region
            carry one of its two highest classes: {DAM_FACTS.extreme} Extreme
            and {DAM_FACTS.veryHigh} Very High. That classification is about the
            people and property below a dam, not about the structure and not
            about shaking. The register holds no seismic rating, no assessment
            date and no upgrade programme for any dam in it.{" "}
            <Cite id="BC-DAMS-REG" />
          </p>
          <Figure
            interactive
            alt={`The ${DAM_FACTS.total} dams the province classes Extreme or Very High failure consequence in the Lower Mainland, spread from Wahleach at the east end of the Fraser Valley to Howe Sound in the west, and north to Whistler. Only ${PUBLISHED.length} of them, all owned by BC Hydro, are drawn solid: those are the only ones whose owner has published what an earthquake is expected to do.`}
            caption={
              <>
                Every dam the provincial register classes Extreme or Very High
                failure consequence inside this window.{" "}
                <Cite id="BC-DAMS-REG" /> The size of a mark is that
                classification, which measures what is downstream rather than
                the dam or the shaking. A solid mark is a dam whose owner has
                published what an earthquake is expected to do to it; a hollow
                mark is one where nothing of the kind was found.{" "}
                {PUBLISHED.length} of {DAM_FACTS.total} are solid, and every one
                of them is BC Hydro’s. Four of the dams sit in two pairs a few
                hundred metres apart and separate as the map is zoomed. The shoreline and river water
                under the marks are the province’s Freshwater Atlas. The
                register is the province’s, and the drawing is not.
              </>
            }
            licence={DAMS_ATTRIBUTIONS.map((source, index) => (
              <span key={source.id}>
                {index > 0 ? " " : null}
                {source.attribution}{" "}
                <a
                  href={source.licenceUrl}
                  className="text-accent underline underline-offset-2"
                >
                  Read the licence
                </a>
                .
              </span>
            ))}
          >
            <DamsMap published={PUBLISHED} />
          </Figure>
          <p>
            The table names each one. The first five columns are the register’s
            own fields; the last is what the dam’s owner has said elsewhere, and
            for most of these dams nothing was found. Risk level is the
            regulator’s supervisory grading of its own file on a dam, which is
            not a measure of the dam and not a measure of an earthquake.{" "}
            <Cite id="BC-DAMS-REG" />
          </p>
          <DataTable
            caption={`The ${DAM_FACTS.total} dams the provincial register classes Extreme or Very High failure consequence in the Lower Mainland, with what each owner has published about an earthquake. Failure consequence classifies what is downstream, not the likelihood of a failure.`}
            minWidth="72rem"
            columns={[
              "Dam",
              "Owner",
              "Structure",
              "Failure consequence",
              "Regulator’s risk level",
              "What its owner has said an earthquake would do",
            ]}
            rows={DAMS.map((dam) => [
              dam.name,
              dam.owner,
              dam.height ? `${dam.type}, ${dam.height} m` : dam.type,
              CONSEQUENCE_CONFLICT[dam.name] ? (
                <>
                  {dam.consequence}
                  <span className="mt-1 block text-ink-faint">
                    {CONSEQUENCE_CONFLICT[dam.name]}
                  </span>
                </>
              ) : (
                dam.consequence
              ),
              dam.risk ?? <NotPublished label="None given" />,
              whatIsSaid(dam.name),
            ])}
            note={
              <>
                Register fields as at {DAM_FACTS.accessed}.{" "}
                <Cite id="BC-DAMS-REG" /> “Nothing found” means no document was
                found in which the owner states what an earthquake is expected
                to do to that dam. It is not a finding that the dam is safe, and
                it is not a finding that nobody has looked: BC Hydro files
                seismic detail on some of its dams to its regulator and not
                others, and Metro Vancouver publishes a yearly safety summary
                rather than the reviews behind it. <Cite id="BCH-RRA-F2020" />{" "}
                <Cite id="MV-DSP-2026" />
              </>
            }
          />
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
