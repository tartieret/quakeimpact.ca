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
 * Housing. The body of `/after/housing/`, ported from `docs/copy/housing.md`.
 *
 * The words are the copy's, verbatim. The one string a reader sees that the
 * copy does not write is the table caption, which names the table for a screen
 * reader and carries the guard the table exists to make: the five figures are
 * counted in three different units across three different geographies.
 */
export const housing: PageModule = {
  meta: {
    route: "/after/housing/",
    title: "Housing",
    nav: "Housing",
    kicker: "Life afterwards",
    standfirst: (
      <>
        The province’s planning scenario puts 70,000 households out of their
        homes in Greater Vancouver after a magnitude 7.0 crustal earthquake.{" "}
        <Cite id="PEIRS" /> Most of those homes are still standing. The City of
        Vancouver states that areas with high concentrations of damage may be
        closed off for weeks, months or even years. <Cite id="COV-RISK-2024" />
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "PEIRS",
      "COV-RISK-2024",
      "DCRRA-2025",
      "COV-EXPLORER-25",
      "COV-FACTSHEET-24",
      "NRCAN-SCEN",
      "COV-PLAN-2026",
      "COV-HUBS",
      "BBY-BSAFER",
    ],
  },

  sections: [
    {
      title:
        "The first thing that happens to a home is that somebody has to come and look at it",
      body: (
        <Prose>
          <p>
            After the shaking, somebody has to walk up to each building, judge
            it, and leave a placard on the door. In Greater Vancouver, the
            province’s magnitude 7.0 crustal scenario
            counts 10,000 buildings red-tagged, which it defines as
            uninhabitable, and 6,100 yellow-tagged, which it defines as
            conditionally inhabitable. <Cite id="PEIRS" />
          </p>
          <p>
            The yellow tag is the condition most people would actually be in:
            the building stands and entry is restricted, and nobody has said for
            how long.
          </p>
          <p>
            Behind every placard is a queue. The province’s Cascadia assessment
            expects damage assessment teams to be overwhelmed, leaving, in its
            words, “about two million people in need of alternate housing”.{" "}
            <Cite id="DCRRA-2025" /> That figure is province-wide, and it comes
            from the assessment’s written scenario rather than from a model run.{" "}
            <Cite id="DCRRA-2025" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "A cordon closes a block, and a building that came through the shaking can be inside it",
      body: (
        <Prose>
          <p>
            Vancouver’s 2024 seismic risk assessment states that areas with high
            concentrations of damage may be closed off “for weeks, months, or
            even years”, and names the West End and the Downtown Eastside as the
            neighbourhoods most at risk of it. <Cite id="COV-RISK-2024" />
          </p>
          <p>
            A cordon is not a judgement about one building. It is a decision
            about an area, and the City ties it to concentrations of damage
            rather than to any single address. <Cite id="COV-RISK-2024" /> This
            is why displacement counts run so far above red-tag counts. A sound
            building inside a closed area is a building nobody can live in.
          </p>
          <p>
            The City says the same thing to its own residents, and names the
            reason it lasts:
          </p>
          <Quote
            speaker="City of Vancouver"
            source="Hazard and Risk Explorer, and the 2024 earthquake hazard fact sheet"
            cite={
              <>
                <Cite id="COV-EXPLORER-25" /> <Cite id="COV-FACTSHEET-24" />
              </>
            }
          >
            <p>
              “Prolonged and challenging building repair due to heavy demand for
              building assessment and trade services, even for buildings that
              only have minor damage.”
            </p>
          </Quote>
          <p>
            The scarce resource is people. Every building needs somebody
            qualified to assess it and somebody qualified to repair it, one
            building at a time, and the same material tells residents to expect
            extended inaccessibility of large sections of neighbourhoods.{" "}
            <Cite id="COV-EXPLORER-25" /> <Cite id="COV-FACTSHEET-24" />
          </p>
        </Prose>
      ),
    },

    {
      title: "A home with no water and no sewer is a home nobody can live in",
      body: (
        <Prose>
          <p>
            A green placard is not the end of it. “Disruption to water and
            wastewater systems are expected for many months following the
            event.” <Cite id="PEIRS" /> That is the province’s own sentence, and
            it covers a household whose building was never damaged at all.
          </p>
          <p>
            Three of the systems a home runs on have their own pages here.{" "}
            <Link
              href="/after/water/"
              className="text-accent underline underline-offset-2"
            >
              Water
            </Link>
            ,{" "}
            <Link
              href="/after/sanitation/"
              className="text-accent underline underline-offset-2"
            >
              sanitation
            </Link>{" "}
            and{" "}
            <Link
              href="/after/electricity/"
              className="text-accent underline underline-offset-2"
            >
              electricity
            </Link>{" "}
            each come back on their own schedule, and a household waits on the
            slowest of the three. A lift needs power. Flushing needs water
            somebody has to spare. A building can pass its inspection and still
            have nothing coming out of the tap.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Three bodies count the displaced, and they are counting three different things",
      body: (
        <Prose>
          <DataTable
            caption="Five published displacement figures, each with the geography, the scenario and the unit it is counted in. They are not alternative values of one quantity."
            columns={["Where", "Scenario", "What is counted", "Figure"]}
            minWidth="42rem"
            rows={[
              [
                "Greater Vancouver",
                "Magnitude 7.0 crustal",
                "Households displaced",
                <>
                  70,000 <Cite id="PEIRS" />
                </>,
              ],
              [
                "City of Vancouver",
                "Magnitude 7.2 crustal",
                "Occupants disrupted or displaced more than 90 days, at night",
                <>
                  230,520 <Cite id="COV-RISK-2024" />
                </>,
              ],
              [
                "City of Vancouver",
                "Magnitude 9.0 Cascadia",
                "The same, at night",
                <>
                  115,850 <Cite id="COV-RISK-2024" />
                </>,
              ],
              [
                "British Columbia",
                "Magnitude 9.0 Cascadia",
                "People displaced",
                <>
                  577,039 <Cite id="NRCAN-SCEN" />
                </>,
              ],
              [
                "British Columbia",
                "Magnitude 7.0 crustal",
                "People displaced",
                <>
                  345,774 <Cite id="NRCAN-SCEN" />
                </>,
              ],
            ]}
          />
          <p>
            Three different units sit in that table, across three different
            geographies. They are not competing estimates of one quantity and
            they do not correct each other. The 70,000 counts households rather
            than people, and Greater Vancouver rather than the province.{" "}
            <Cite id="PEIRS" /> The two city rows count occupants, and they count
            the City of Vancouver alone. <Cite id="COV-RISK-2024" />
          </p>
          <p>
            The city rows also invert the intuition. For Vancouver the rarer
            magnitude 7.2 crustal earthquake is far worse than the magnitude 9.0
            megathrust, about four times the buildings completely or extensively
            damaged, and the City gives the reason: shaking at City Hall
            comparable to the design forces used for new buildings.{" "}
            <Cite id="COV-RISK-2024" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Nearly seven in ten of Vancouver’s buildings went up before modern seismic standards",
      body: (
        <Prose>
          <p>
            Vancouver has about 90,000 buildings. Nearly 70 per cent were built before
            1990, when early modern seismic standards arrived, and about half
            before 1973, before there were any. <Cite id="COV-RISK-2024" /> Five
            privately owned building types drive nearly 80 per cent of the city’s
            seismic risk while making up roughly a tenth of the buildings.{" "}
            <Cite id="COV-RISK-2024" />
          </p>
          <p>
            The largest single driver of residential displacement is not the
            detached house. It is the wood-frame apartment building: 64 per cent of
            their residents are modelled as displaced for more than 90 days in
            the magnitude 7.2 scenario, which is 45 per cent of the city’s displacement
            total. <Cite id="COV-RISK-2024" /> Wood-frame houses and wood-frame
            apartments are different buildings, and the archetype analysis
            behind the City’s 2026 action plan flags the apartments for lack of
            wall stiffness and strength, and for soft-storey collapse risk where
            the ground floor is left open for tuck-under parking.{" "}
            <Cite id="COV-PLAN-2026" />
          </p>
          <p>
            In unreinforced masonry residential buildings, brick walls with no
            steel in them, over 97 per cent of residents are modelled as displaced for
            more than 90 days. <Cite id="COV-RISK-2024" />
          </p>
          <p>
            Six neighbourhoods carry 65 per cent of the city’s seismic risk: the West
            End, the Downtown Eastside including Chinatown and Strathcona,
            Downtown, Kitsilano, Fairview and Mount Pleasant.{" "}
            <Cite id="COV-RISK-2024" /> The census tracts with the highest risk
            average roughly 70 to 75 per cent renters. <Cite id="COV-RISK-2024" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "There are 70,000 displaced households on one side and 25 hubs of unstated capacity on the other",
      body: (
        <Prose>
          <p>
            Vancouver publishes 25 disaster support hubs, gathering places that
            can work outdoors and where group lodging and shelter may be
            provided depending on impacts. No capacity figure is published for
            them. <Cite id="COV-HUBS" />
          </p>
          <Quote
            speaker="Province of British Columbia"
            source="Provincial Earthquake Immediate Response Strategy"
            cite={<Cite id="PEIRS" />}
          >
            <p>
              “Large numbers of people may require interim housing for months to
              years. Commercially available shelter space, such as hotels, may
              be unavailable due to demand, damage, and reduced staffing
              capacity.”
            </p>
          </Quote>
          <p>
            That is the province describing its own plan. The same strategy
            lists “Interim housing plans developed” as a condition for moving
            into recovery, which is to say as work still to be done.{" "}
            <Cite id="PEIRS" /> And it is written, in its own words, “based on
            the assumption that First Nations and local authorities are unable
            to stand up standard emergency response functions, such as emergency
            support services (ESS), search and rescue (SAR), damage assessment,
            and shelter for evacuees.” <Cite id="PEIRS" />
          </p>
          <VerificationNote label="No published shelter capacity">
            Provincial emergency support services describe reception centres and
            group lodging. Neither carries a published capacity, and no
            published document sets any capacity against the caseload a major
            earthquake would produce. Between the province’s Greater Vancouver
            figure and each municipality’s own plan there is no published
            regional estimate at all. Burnaby is preparing one: its seismic
            resilience strategy studies both a magnitude 7.0 crustal and a
            magnitude 9.0 Cascadia scenario, and is expected in the fall of
            2026. <Cite id="BBY-BSAFER" />
          </VerificationNote>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        A cordon and a yellow tag are both measured in weeks and months, and the
        province says the plan for where people go next is still to be written.{" "}
        <Cite id="PEIRS" />
      </>
    ),
    items: [
      <>
        <strong>
          Find out when your building was put up, what it is built of, and what
          ground it stands on.
        </strong>{" "}
        Your landlord, your strata or your municipality can tell you. Age and
        type are what the City’s own model runs on: nearly 70 per cent of Vancouver’s
        buildings predate 1990, and wood-frame apartments and unreinforced
        masonry carry the highest displacement rates in it.{" "}
        <Cite id="COV-RISK-2024" />
      </>,
      <>
        <strong>
          Agree now with someone outside the region that you could stay with
          them for months, and agree it out loud rather than assuming it.
        </strong>{" "}
        The province says large numbers of people may need interim housing for
        months to years, and that hotels may not be available.{" "}
        <Cite id="PEIRS" /> An arrangement you have actually made is worth more
        than a shelter place nobody has promised you.
      </>,
      // No citation, and none is missing: a cordon shutting people out of a
      // building is the cited fact, and what is behind the door when it does
      // rests on no document.
      <>
        <strong>Keep what you would need out of the building rather than in it.</strong>{" "}
        A cordon closes the door on whatever is behind it: identification,
        insurance papers, a prescription list, a spare set of keys. A copy held
        somewhere else, or by somebody else, is the one you can still get at.
      </>,
    ],
  },
};
