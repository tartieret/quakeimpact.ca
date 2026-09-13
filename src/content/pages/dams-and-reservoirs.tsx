import Link from "next/link";
import { Cite } from "@/components/citation";
import {
  Prose,
  Quote,
  DataTable,
  VerificationNote,
} from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Dams and reservoirs. The body of `/after/dams-and-reservoirs/`, ported from
 * `docs/copy/dams-and-reservoirs.md`.
 *
 * Both bands are "Not yet assessed", so the page describes the public record
 * rather than a consequence: two dams reviewed in 2024 under legal compulsion,
 * neither review finding an unsafe condition, and neither published conclusion
 * saying anything about earthquakes. The reviews' finding goes first and in the
 * engineers' own words, because the gap this page reports is a gap in what has
 * been published about seismic performance, not a danger anybody has named.
 *
 * No figure and no map placeholder: a placeholder for an inundation map would
 * be a promise the site cannot keep.
 *
 * The words are the copy's, verbatim. Anything a reader sees that is not in the
 * copy file is furniture the copy does not write: the table caption below.
 */
export const damsAndReservoirs: PageModule = {
  meta: {
    route: "/after/dams-and-reservoirs/",
    title: "Dams and reservoirs",
    description:
      "Cleveland and Seymour Falls were each reviewed by an engineer in 2024, and neither published conclusion mentions earthquakes.",
    nav: "Dams and reservoirs",
    kicker: "Life afterwards",
    standfirst: (
      <>
        Cleveland and Seymour Falls were each reviewed by an engineer in 2024, as
        the law requires every seven years for dams in the top consequence class,
        and neither review identified an unsafe or unacceptable condition.{" "}
        <Cite id="MV-DSP-2026" /> Neither published conclusion mentions
        earthquakes, and the seismic upgrade has not started.{" "}
        <Cite id="MV-CAPEX-2026" />
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "MV-DSP-2026",
      "MV-CAPEX-2026",
      "BC-DAMS-REG",
      "BCDSR-40-2016",
      "BCDSP-DSR-INFO",
      "MV-DSP-2021",
      "BC-DDCG",
      "MV-ASSET-2021",
      "OAG-DAMS-21",
      "OAG-DAMS-FU-25",
      "BCDSP-DEP-24",
      "BCDSP-INUND-16",
      "BCH-DAMFAQ",
      "MV-CDSEP",
    ],
  },

  sections: [
    {
      title:
        "Two of the dams holding Metro Vancouver’s drinking water are in the province’s top consequence class",
      body: (
        <Prose>
          <p>
            Metro Vancouver has fourteen regulated dams. <Cite id="BC-DAMS-REG" />{" "}
            Two of them, Cleveland and Seymour Falls, hold back reservoirs in the
            region’s{" "}
            <Link
              href="/after/water/"
              className="text-accent underline underline-offset-2"
            >
              drinking water supply
            </Link>
            , and both are classified “Extreme” failure consequence, the top of
            the province’s five-tier scale. <Cite id="BC-DAMS-REG" />
          </p>
          <p>
            That scale measures consequence, not hazard. It describes what is
            below a dam, and it is assigned before anyone assesses how the dam
            itself would perform. The Regulation sorts dams by potential loss of
            life, and Extreme is its top band, for “more than 100”, where the
            population at risk is permanent: people “ordinarily or regularly
            located in the dam-breach inundation zone, whether to live, work or
            recreate”. <Cite id="BCDSR-40-2016" />
          </p>
          <p>
            Both dams sit at risk level “3 – Stable” in the provincial register,
            which is how the regulator records that it has not flagged a
            deficiency at either one. That is also the ceiling: no Extreme dam in
            British Columbia is rated better than 3, and 20 of the province’s 56
            are rated worse. <Cite id="BC-DAMS-REG" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Both dams were reviewed by an engineer in 2024, and neither review found an unsafe condition",
      body: (
        <Prose>
          <p>
            A dam in that class must be reviewed every seven years by an
            engineering professional qualified in dam safety analysis, to
            determine whether it is safe, with the report submitted to a
            provincial dam safety officer for acceptance.{" "}
            <Cite id="BCDSR-40-2016" /> Metro Vancouver publishes the status of
            each of its dams once a year, in a report to its Water Committee.{" "}
            <Cite id="MV-DSP-2026" />
          </p>
          <p>
            Cleveland Dam’s review ran from 2023 to 2024 and “identified no
            unsafe or unacceptable conditions related to design, construction, or
            operation”; the consultant’s report went to the province that
            December. <Cite id="MV-DSP-2026" /> Seymour Falls Dam’s ran from 2021
            to 2024, with the report submitted in June 2024:
          </p>
          <Quote
            speaker="The Greater Vancouver Water District’s dam safety program annual update, on Seymour Falls Dam"
            cite={<Cite id="MV-DSP-2026" />}
          >
            <p>
              “The review concluded that the dam is reasonably safe, operated
              safely, maintained in a safe condition, and that surveillance is
              adequate to detect any developing safety problems.”
            </p>
          </Quote>
          <p>
            A review ends in one of three verdicts, signed by an engineer and
            peer-reviewed by a second: reasonably safe, reasonably safe with
            deficiencies, or not safe with deficiencies requiring urgent action.
            “Reasonably safe” is the first of those, and the province treats it
            as equivalent to the Regulation’s own word, “safe”.{" "}
            <Cite id="BCDSP-DSR-INFO" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Neither published conclusion mentions earthquakes, and the seismic upgrade is not due to start until 2028",
      body: (
        <Prose>
          <p>
            Metro Vancouver has published one of these updates every year since
            2021, each naming every dam and its review status.{" "}
            <Cite id="MV-DSP-2021" /> <Cite id="MV-DSP-2026" /> None of them says
            anything about how either dam would behave in an earthquake. The
            reports themselves are not published, and the consultants who wrote
            them are not named. <Cite id="MV-DSP-2026" />
          </p>
          <p>
            The capital program is published. It leaves the seismic question
            open.
          </p>
          <DataTable
            caption="The three seismic projects Metro Vancouver’s capital reporting lists for the two dams, and how far each has got."
            columns={["Project", "Stage at 31 May 2026", "Timeline", "Estimate"]}
            minWidth="38rem"
            note={<Cite id="MV-CAPEX-2026" />}
            rows={[
              [
                "Cleveland Dam Seismic Stability Evaluation",
                "Design",
                "2024–2027",
                "$1.2 million",
              ],
              [
                "Seymour Falls Dam Seismic Stability Assessment",
                "Design",
                "2025–2032",
                "$14.15 million",
              ],
              [
                "Cleveland Dam MCE Seismic Upgrades",
                "Not started",
                "2028–2034",
                "$25 million",
              ],
            ]}
          />
          <p>
            MCE stands for Maximum Credible Earthquake, the criterion the
            province’s design guideline sets for a dam in this class.{" "}
            <Cite id="BC-DDCG" /> Metro Vancouver is still paying for the
            evaluations and has not begun the upgrade.
          </p>
          <VerificationNote label="Not yet published">
            Both reviews found no unsafe condition, and that is the whole of what
            has been made public about them. Whether either engineer examined
            earthquake performance, and what they concluded if they did, is not
            in the annual updates, and the reports behind those updates are not
            released. <Cite id="MV-DSP-2026" />
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title:
        "Surveillance runs weekly, and the province’s own audit of both dams is six years old",
      body: (
        <Prose>
          <p>
            Between reviews, Metro Vancouver reports site surveillance at least
            weekly at both dams and formal inspections twice a year, and
            geotechnical and lake level instrumentation “is reviewed by staff
            daily (Monday – Friday) through an automated data acquisition
            system”.{" "}
            <Cite id="MV-DSP-2026" /> Each of those intervals is what the
            Regulation’s schedule requires of a dam in this class.{" "}
            <Cite id="BCDSR-40-2016" /> Cleveland’s two low-level outlet valves,
            original equipment from the 1950s found badly deteriorated in a 2016
            condition assessment, were replaced in 2021.{" "}
            <Cite id="MV-ASSET-2021" />
          </p>
          <p>
            A provincial dam safety officer audits a dam in this class about
            every five years. The last audits of Cleveland and Seymour Falls were
            completed in 2020, and as of June 2026 follow-up audits “are being
            planned”.{" "}
            <Cite id="MV-DSP-2026" /> In September 2021, on an audit covering
            2019 and 2020, the Auditor General of British Columbia found that the
            ministry “has not effectively overseen the safety of dams in B.C.”{" "}
            <Cite id="OAG-DAMS-21" /> All nine recommendations were accepted; two
            were complete as at 31 March 2025, when the province’s dam safety
            program reported 10 staff against an assessed need of 25 and said it
            was “only able to target the very highest risk dams”.{" "}
            <Cite id="OAG-DAMS-FU-25" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The area a failure would flood has been mapped, and the map is not published",
      body: (
        <Prose>
          <p>
            The owner of a dam in this class must prepare an emergency plan and
            submit it to the province for acceptance, and the province’s template
            requires an evacuation area map to be inserted in it.{" "}
            <Cite id="BCDSR-40-2016" /> <Cite id="BCDSP-DEP-24" /> Both dams’
            plans were updated in March 2026. <Cite id="MV-DSP-2026" /> So the
            area a failure would flood has been mapped. It had to be: the
            consequence classification is worked out from who is in it.
          </p>
          <p>
            The province gets the plan in full. A downstream local emergency
            authority gets a defined part of it, which the province’s
            controlled-copy register lists as sections 1, 2 and 4.1 and part of
            appendix A. <Cite id="BCDSP-DEP-24" /> The public gets none of it.
            Nobody has explained why, because the regime never raises the
            question: it carries no duty to publish an emergency plan or an
            inundation study, and no confidentiality rule covering one either.{" "}
            <Cite id="BCDSR-40-2016" /> <Cite id="BCDSP-INUND-16" /> BC Hydro
            publishes dam failure evacuation brochures for Campbell River and the
            Strathcona Regional District, both on Vancouver Island, and nothing
            comparable for any of its Lower Mainland dams.{" "}
            <Cite id="BCH-DAMFAQ" />
          </p>
          <p>
            Earthquakes are in those plans even though they are absent from the
            review summaries. The template lists three of them among the events
            that escalate a dam emergency: an earthquake felt or reported within
            50 kilometres of the dam, one causing visible damage to the dam, and
            one causing an uncontrolled release of water.{" "}
            <Cite id="BCDSP-DEP-24" />
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        Whether you are below one of these dams has an answer, and somebody holds
        it.
      </>
    ),
    items: [
      <>
        <strong>
          Find out whether you live, work or send a child to school below one of
          them.
        </strong>{" "}
        The area a failure would flood has been mapped, because the dam’s
        classification is worked out from it, and the map sits in the dam
        emergency plan. <Cite id="BCDSR-40-2016" /> <Cite id="BCDSP-DEP-24" />
      </>,
      <>
        <strong>Ask your municipality for the part of the plan it holds.</strong>{" "}
        A downstream local emergency authority receives a defined part of the
        plan, and nothing in the regime stops it from telling you what is in it.{" "}
        <Cite id="BCDSP-DEP-24" />
      </>,
      <>
        <strong>Ask Metro Vancouver for the rest.</strong> There is no duty to
        publish an emergency plan and no rule against releasing one, so a
        freedom-of-information request is the route.{" "}
        <Cite id="BCDSR-40-2016" />
      </>,
      <>
        <strong>
          Know what the sirens below Cleveland Dam will mean, and what they will
          not.
        </strong>{" "}
        Metro Vancouver is building the Capilano River Evacuation System,
        targeted for 2027, for an unscheduled release from the dam. It does not
        sound for heavy rain or spring melt, and it is not a dam breach or
        earthquake warning. <Cite id="MV-CDSEP" />
      </>,
    ],
    closing: (
      <>
        Two engineers reviewed these dams in 2024 and neither found an unsafe
        condition. What has not been published is where the water would go, and
        the part of that concerning your own address is something you can ask
        for.
      </>
    ),
  },
};
