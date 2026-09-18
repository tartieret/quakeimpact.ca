import type { ReactNode } from "react";
import Link from "next/link";

import { Cite } from "@/components/citation";
import {
  Callout,
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
 * The page builds in three steps: what the classes measure, what standard
 * they imply, and how the dams here stand against it. Classification first,
 * because a reader needs to know the class counts what is downstream and rates
 * neither the dam nor the shaking. Then the one-in-ten-thousand-year design
 * earthquake, and the fact that it binds new work rather than a standing dam.
 * Then the four dams with parts expected to fail far below it, and Ruskin,
 * which was found short and rebuilt. The two owners' evidence still does not
 * mix in a sentence or a table column: Metro Vancouver publishes a yearly
 * safety summary and no review report, BC Hydro states named seismic
 * deficiencies to its own regulator.
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
 * emptiness is a finding, and the table is where it is stated: the prose says
 * it once and moves on, because a page that keeps announcing what nobody has
 * written down is a bibliography rather than a description of the place. The
 * sourced statements in `SEISMIC` below are the same sentences the prose
 * cites, kept beside the prose rather than in the figure, because every one of
 * them is a sourced claim.
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
        withstanding the Maximum Design Earthquake. That states the design
        objective; it does not verify performance.{" "}
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
    upgrade: (
      <>
        A $3 million seismic upgrade in 1992 and a $25 million East Abutment
        upgrade in 2001 and 2002. Both are records of work done, not an
        assessment of how the dam would perform now.{" "}
        <Cite id="MV-CLEVELANDDAM-FS" />
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
    upgrade: (
      <>
        A $44 million seismic upgrade between 2004 and 2007, which is a record
        of work done, not an assessment of how the dam would perform now.{" "}
        <Cite id="MV-SEYMOURDAM-FS" />
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
 * The detail row. A dam with nothing published carries the hatched label
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
      "Dams in the top two classes are designed for a one-in-ten-thousand-year earthquake. Four in this region have parts expected to fail far below that.",
    nav: "Dams",
    kicker: "The shaking",
    standfirst:
      "There are dams up the valleys all around this region, from the east end of the Fraser Valley to Howe Sound and north to Whistler. Two of them hold Metro Vancouver’s drinking water, and several more generate electricity.",
    /**
     * First-cited order, which is the order the markers are numbered in.
     */
    references: [
      "BC-DAMS-REG",
      "BC-DDCG",
      "BCH-RRA-F2020",
      "BCDSR-40-2016",
      "EGBC-DSR-GL",
      "BCH-COQUITLAM-RRA-06",
      "MV-DSP-2026",
      "MV-CLEVELANDDAM-FS",
      "BCH-RUSKIN-SEIAM-11",
      "BCH-RUSKIN-F2019",
      "MV-SEYMOURDAM-FS",
      "BCDSP-DEP-24",
    ],
  },

  sections: [
    {
      title: "The province classes each dam by what is below it",
      body: (
        <Prose>
          <p>
            The province keeps a public register of every regulated dam and
            classes each one by what a failure would reach downstream.{" "}
            <Cite id="BC-DAMS-REG" /> {DAM_FACTS.total} dams in this region are
            in the top two classes, {DAM_FACTS.extreme} Extreme and{" "}
            {DAM_FACTS.veryHigh} Very High. The class counts the people and
            property below a dam. It rates neither the structure nor the
            shaking, and the register carries no seismic rating, no assessment
            date and no upgrade programme. <Cite id="BC-DAMS-REG" />
          </p>
          <Figure
            interactive
            alt={`The ${DAM_FACTS.total} dams the province classes Extreme or Very High failure consequence in the Lower Mainland, spread from Wahleach at the east end of the Fraser Valley to Howe Sound in the west, and north to Whistler. Only ${PUBLISHED.length} of them, all owned by BC Hydro, are drawn solid: those are the only ones whose owner has said what an earthquake is expected to do.`}
            caption={
              <>
                Every dam the provincial register classes Extreme or Very High
                failure consequence inside this window.{" "}
                <Cite id="BC-DAMS-REG" /> The size of a mark is that
                classification, which measures the people and property
                downstream. It does not rate the dam or the shaking. A solid
                mark is a dam whose owner has said what an earthquake is
                expected to do to it; a hollow mark is one where nothing of the
                kind was found. {PUBLISHED.length} of {DAM_FACTS.total} are
                solid, and every one of them is BC Hydro’s. Four of the dams sit
                in two pairs a few hundred metres apart and separate as the map
                is zoomed. The shoreline and river water under the marks are the
                province’s Freshwater Atlas. The register is the province’s, and
                the drawing is not.
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
        </Prose>
      ),
    },

    {
      title: "These dams are designed for a one-in-ten-thousand-year earthquake",
      body: (
        <Prose>
          <p>
            Very High and Extreme carry the same design earthquake: the ground
            motion expected once in ten thousand years, or the largest
            earthquake thought credible at the site. <Cite id="BC-DDCG" /> One
            figure therefore covers every dam in the table below.
          </p>
          <p>
            BC Hydro says the same of its own dams, in filings to the utilities
            commission.
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
            The two figures are not independent of each other. Both descend from
            the Canadian Dam Association’s guidelines, so a reader who meets the
            number twice has met one source restated. <Cite id="BC-DDCG" />{" "}
            <Cite id="BCH-RRA-F2020" />
          </p>
          <p>
            It binds new work. The criterion applies when a dam is built,
            altered, improved or replaced, and not to a dam that is simply
            standing there. <Cite id="BC-DDCG" /> It is a guideline minimum
            rather than law, deviations “may be considered but must be clearly
            stated and justified”, and the Dam Safety Regulation itself gives no
            seismic number and never uses the word earthquake.{" "}
            <Cite id="BC-DDCG" /> <Cite id="BCDSR-40-2016" />
          </p>
          <p>
            An old dam is covered a different way. Every seven years an engineer
            qualified in dam safety analysis goes over a dam in the top classes,
            and the professional guideline for those reviews puts the Maximum
            Design Earthquake among the design criteria a review updates,
            directing that potential liquefaction “should also be considered”.{" "}
            <Cite id="BCDSR-40-2016" /> <Cite id="EGBC-DSR-GL" /> So a dam
            finished in 1954 is measured again, on a cycle, against a current
            earthquake.
          </p>
          <Callout label="Not the same scale">
            <p>
              A return period on this page is not a return period on{" "}
              <Link
                href="/shaking/buildings/"
                className="text-accent underline underline-offset-2"
              >
                buildings
              </Link>
              . Dams are assessed on mean, site-specific ground motion, and the
              professional guideline for dam safety reviews says the National
              Building Code’s figures, which are median values on a national
              grid, “should not be used for dam safety reviews”.{" "}
              <Cite id="EGBC-DSR-GL" /> The province allows the national model
              for the lower classes and requires a site-specific assessment for
              detailed design at the top two. <Cite id="BC-DDCG" />
            </p>
          </Callout>
        </Prose>
      ),
    },

    {
      title: "Four dams have parts expected to fail far below that",
      body: (
        <div className="space-y-6">
          <Prose>
            <p>
              The gap is widest at Alouette. The power tunnel headworks and the
              surge tower are expected to fail in shaking of the size expected
              once every 100 to 200 years, which could block the discharge from
              Alouette Reservoir into Stave Lake. <Cite id="BCH-RRA-F2020" />{" "}
              Those are the works that let water out of the reservoir, not the
              embankment holding it in. Until the tunnel is upgraded the
              reservoir is run so that there would be time to respond after a
              major earthquake. <Cite id="BCH-RRA-F2020" />
            </p>
            <p>
              At Cheakamus, near Whistler, it is the dam. Its resistance to
              seismic loads is insufficient, and an earthquake of the size
              expected about once every thousand years or more could bring down
              the dam, the spillway, the spillway gates or the penstock
              pedestals. <Cite id="BCH-RRA-F2020" />
            </p>
            <p>
              Coquitlam Dam holds back Coquitlam Lake, and it is built partly of
              loose material that is expected to liquefy in a moderate to large
              earthquake: saturated soil that loses its strength and behaves
              like a liquid while the ground shakes.{" "}
              <Cite id="BCH-COQUITLAM-RRA-06" /> The same mechanism under roads
              and buildings is on{" "}
              <Link
                href="/shaking/ground/"
                className="text-accent underline underline-offset-2"
              >
                ground conditions
              </Link>
              . At Wahleach, at the east end of the Fraser Valley, the intake
              gates at Jones Lake are expected to fail at about once in 4,800
              years, which would leave the water passage open and could flood
              the utility and transport corridors below.{" "}
              <Cite id="BCH-RRA-F2020" />
            </p>
            <p>
              Each deficiency is priced, and BC Hydro says which it is fixing
              and which it is living with. At Coquitlam the inlet portal upgrade
              is in the plan; the outlet portal and the low level outlet are
              monitored and kept as they are, because what would follow is
              expected to be minor. <Cite id="BCH-RRA-F2020" /> Stave Falls
              carries no seismic problem at all among the significant risks
              recorded at the dam. Its trouble is turbine design and obsolete
              controls. <Cite id="BCH-RRA-F2020" />
            </p>
            <p>
              Two of the seventeen are not power dams. Cleveland on the Capilano
              and Seymour Falls on the Seymour hold Metro Vancouver’s drinking
              water, and each was reviewed by an engineer in 2024 whose
              conclusion does not mention an earthquake. <Cite id="MV-DSP-2026" />{" "}
              What those reviews say, what the capital plan has funded and where
              the water would go are on{" "}
              <Link
                href="/after/dams-and-reservoirs/"
                className="text-accent underline underline-offset-2"
              >
                dams and reservoirs
              </Link>
              .
            </p>
            <p>
              The table names all {DAM_FACTS.total}, with what each owner has
              said an earthquake would do to its own dam. For most of them the
              column is empty, which is not the same as a finding that the dam
              is sound.
            </p>
          </Prose>
          <Prose wide>
            <DataTable
              caption={`The ${DAM_FACTS.total} dams the provincial register classes Extreme or Very High failure consequence in the Lower Mainland, with what each owner has said about an earthquake. Failure consequence classifies what is downstream, not the likelihood of a failure.`}
              minWidth="40rem"
              columns={[
                "Dam",
                "Owner",
                "Structure",
                "Failure consequence",
                "Regulator’s risk level",
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
              ])}
              details={DAMS.map((dam) => whatIsSaid(dam.name))}
              note={
                <>
                  Register fields as at {DAM_FACTS.accessed}.{" "}
                  <Cite id="BC-DAMS-REG" /> Risk level is the regulator’s
                  supervisory grading of its own file on a dam, which measures
                  neither the dam nor the shaking. <Cite id="BC-DAMS-REG" />{" "}
                  “Nothing found” means no document was found in which the owner
                  states what an earthquake is expected to do to that dam. It is
                  not a finding that the dam is safe, and it is not a finding
                  that nobody has looked: BC Hydro files seismic detail on some
                  of its dams to its regulator and not others, and the reviews
                  behind Metro Vancouver’s yearly safety summary are not public.{" "}
                  <Cite id="BCH-RRA-F2020" /> <Cite id="MV-DSP-2026" />
                </>
              }
            />
          </Prose>
        </div>
      ),
    },

    {
      title: "Ruskin Dam was found short, and rebuilt",
      body: (
        <Prose>
          <p>
            In 2011 a consultant reported to BC Hydro that key parts of Ruskin
            Dam and its powerhouse would withstand far less shaking than the
            guidelines asked of them, with up to 300 people downstream in
            summer. <Cite id="BCH-RUSKIN-SEIAM-11" /> The dam was rebuilt. After
            a twenty year dam safety initiative and eleven years of construction
            the upper part was finished, and the project’s advisory board
            concluded it had met its objective of withstanding the Maximum
            Design Earthquake. <Cite id="BCH-RUSKIN-F2019" />
          </p>
          <p>
            Ruskin is in Mission, in the Fraser Valley Regional District,
            outside Metro Vancouver. <Cite id="BC-DAMS-REG" />
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
        A municipality downstream of a dam receives a defined part of its
        emergency plan. <Cite id="BCDSP-DEP-24" /> A resident can ask for it,
        and can ask Metro Vancouver directly under freedom of information.
      </>,
      <>
        <strong>Look up how the dam is classified.</strong> The provincial dam
        register is public and carries each dam’s owner and its failure
        consequence classification, which is the measure the design guidelines
        are written against. <Cite id="BC-DAMS-REG" />
      </>,
    ],
    closing: (
      <>
        Where the water would go if a dam failed is not something a resident can
        look up. The register names the class and stops there.{" "}
        <Cite id="BC-DAMS-REG" />
      </>
    ),
  },
};
