import { Cite } from "@/components/citation";
import {
  Prose,
  Quote,
  DataTable,
  VerificationNote,
} from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Preparing. The body of `/prepare/`, ported from `docs/copy/prepare.md`.
 *
 * The words are the copy's, verbatim. The one reader-facing string the copy
 * does not write is the table caption below, which names the table for a
 * screen reader.
 *
 * Two things in here are load-bearing and easy to flatten by accident. The six
 * published durations are a comparison rather than a number to resolve: the
 * same two weeks is a floor in one document and a ceiling in another, and each
 * wording stays attached to the body that published it. And the two household
 * water totals are arithmetic worked from two published rates, which the
 * sentence carrying them says in the same breath.
 */
export const prepare: PageModule = {
  meta: {
    route: "/prepare/",
    title: "Preparing",
    nav: "Preparing",
    kicker: "Part 3",
    standfirst:
      "The province’s earthquake response plan tells households to be self-sufficient for up to two weeks. The same plan says the support system behind them is designed for 72 hours and is not built for this event.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "PEIRS",
      "BCEMS-2016",
      "PREPAREDBC",
      "PREPAREDBC-KIT",
      "PREPAREDBC-EQ",
      "AHP-2012",
      "COV-EXPLORER-25",
      "CEMP-PAGE",
      "WA-2WEEKS",
      "SURREY-PREP",
      "NSEM-KIT",
      "RICH-FR",
      "COV-WORKSHEET-26",
      "DCRRA-2025",
      "FBC-EQ",
      "COV-HHH-2011",
      "DRR-GOVPAGE",
      "PREPAREDBC-BUDGET",
      "SMP-PROGRESS",
    ],
  },

  sections: [
    {
      title:
        "The province’s response plan says government resources will be overwhelmed",
      body: (
        <Prose>
          <p>From the province’s Earthquake Immediate Response Strategy:</p>
          <Quote
            speaker="The Province of British Columbia"
            source="Provincial Earthquake Immediate Response Strategy, page 42"
            cite={<Cite id="PEIRS" />}
          >
            <p>
              “During a disaster, local and provincial government resources will
              be overwhelmed. In such an event, one’s family and neighbours are
              likely to be the only available first responders. People living in
              an earthquake zone should aim to be self-sufficient for up to two
              weeks. Prepared neighbourhoods, families, and individuals will
              reduce pressure on overwhelmed government agencies and allow
              available resources to go where they are most needed.”
            </p>
          </Quote>
          <p>
            The last sentence is the reason the province gives. Preparing is not
            only about looking after yourself. It is what frees the ambulance,
            the crew and the shelter place for the person who has no other
            option.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Family and neighbours are the first responders, and the plan says so",
      body: (
        <Prose>
          <p>
            The same strategy records that communities “informally self-activate”
            and “will work together without receiving guidance from the
            Province”. <Cite id="PEIRS" />
          </p>
          <p>
            That makes the most valuable preparation a social one. Knowing which
            neighbours live alone, who has medical needs, who has a wrench and
            who has a first aid certificate is worth more in the first day than
            anything in a cupboard.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Households are asked for two weeks, and the support system behind them is built for three days",
      body: (
        <Prose>
          <p>
            The province’s Emergency Support Services program is the system that
            houses and feeds people who have lost their homes. From the same
            page of the same document:
          </p>
          <Quote
            speaker="The Province of British Columbia"
            source="Provincial Earthquake Immediate Response Strategy, page 42"
            cite={<Cite id="PEIRS" />}
          >
            <p>
              “ESS is delivered by local emergency programs and is designed to
              provide up to 72 hours of support … the ESS program is not
              designed for the scope and scale of services required after a
              catastrophic earthquake.”
            </p>
          </Quote>
          <p>
            This is not new, and it is not a single document’s opinion. The
            province’s emergency management system said the same thing ten years
            earlier: “In a catastrophic emergency such as an earthquake … ESS
            service delivery may not be able to manage the scope and volume of
            needs”. <Cite id="BCEMS-2016" />
          </p>
          <p>
            Households are asked to cover two weeks. The support system behind
            them is designed for three days. The province states both, and
            states that the second is not sized for this event.
          </p>
        </Prose>
      ),
    },

    {
      title: "How long to prepare for depends on which document you open",
      body: (
        <Prose>
          <p>
            Six official answers are in print, five of them provincial and one
            municipal. All six are published now.
          </p>
          <DataTable
            caption="Six published answers to how many days of supplies a household should hold, each in the wording its own document uses."
            columns={["Source", "What it says"]}
            minWidth="34rem"
            rows={[
              [
                <>
                  PreparedBC <em>Earthquake and Tsunami Preparedness Guide</em>,
                  March 2024 <Cite id="PREPAREDBC" />
                </>,
                <>“at least two weeks”, stated three times</>,
              ],
              [
                <>
                  PreparedBC general emergency kit page{" "}
                  <Cite id="PREPAREDBC-KIT" />
                </>,
                <>“minimum three-day to one-week supply”</>,
              ],
              [
                <>
                  PreparedBC earthquake hazard page <Cite id="PREPAREDBC-EQ" />
                </>,
                <>
                  “a minimum of 3 days”, adding that one to two weeks is a good
                  idea
                </>,
              ],
              [
                <>
                  The province’s All-Hazard Plan, dated 2012{" "}
                  <Cite id="AHP-2012" />
                </>,
                <>
                  “self-sufficient for a minimum of 72 hours”, with a caveat
                  that recent events suggest a week or longer
                </>,
              ],
              [
                <>
                  The province’s earthquake response strategy{" "}
                  <Cite id="PEIRS" />
                </>,
                <>“self-sufficient for up to two weeks”</>,
              ],
              [
                <>
                  City of Vancouver <Cite id="COV-EXPLORER-25" />
                </>,
                <>
                  “a minimum of 3 days, although your target should be a week to
                  2 weeks”
                </>,
              ],
            ]}
          />
          <p>
            The oldest of the six is not a consumer web page. It is the
            All-Hazard Plan, the primary component of the province’s
            Comprehensive Emergency Management Plan, and it still carries the
            72-hour figure. <Cite id="AHP-2012" /> <Cite id="CEMP-PAGE" />
          </p>
          <p>
            Across the border, Washington State says two weeks everywhere, under
            a single named campaign called Be 2 Weeks Ready.{" "}
            <Cite id="WA-2WEEKS" />
          </p>
          <p>
            So the gap is not between countries. It is inside British Columbia’s
            own advice. The earthquake-specific guide, which is the document
            written for this hazard, says at least two weeks.{" "}
            <Cite id="PREPAREDBC" />
          </p>
          <p>
            The four Lower Mainland authorities differ from each other too.
            Surrey asks residents to be prepared “for at least 72 hours”.{" "}
            <Cite id="SURREY-PREP" /> North Shore Emergency Management asks them
            to be “self-sustaining for up to two (2) weeks”.{" "}
            <Cite id="NSEM-KIT" /> Richmond Fire-Rescue publishes no household
            figure at all and points residents to the provincial guide.{" "}
            <Cite id="RICH-FR" /> Vancouver, which would run the response,
            prints the three-day arithmetic on its own worksheet.{" "}
            <Cite id="COV-WORKSHEET-26" />
          </p>
          <p>
            The two-week figure arrives in three different wordings. The
            provincial earthquake guide says “at least two weeks”.{" "}
            <Cite id="PREPAREDBC" /> The North Shore says “up to two (2)
            weeks”. <Cite id="NSEM-KIT" /> The response plan says “up to two
            weeks”. <Cite id="PEIRS" /> It is the same number pointing in
            opposite directions: one is a floor, the others a ceiling.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Everyone agrees on the water rate and disagrees on the number of days",
      body: (
        <Prose>
          <p>
            Four litres per person per day, for drinking and sanitation
            together, is PreparedBC’s figure. <Cite id="PREPAREDBC" /> The City
            of Vancouver prints the same rate. <Cite id="COV-EXPLORER-25" />
          </p>
          <p>
            What differs is the multiplier. The City’s worksheet multiplies the
            rate by three days and prints the sum.{" "}
            <Cite id="COV-WORKSHEET-26" /> The provincial earthquake guide says
            at least two weeks. <Cite id="PREPAREDBC" /> For a household of
            four, that is 48 litres against at least 224 litres. Those two
            totals are arithmetic from the two published rates; neither the City
            nor the province prints either one.
          </p>
          <p>
            Two weeks of water is bulky. It is also the single most useful thing
            in a kit, because the province’s 2025 risk assessment says people
            are thirsty within 24 hours, and that distributing bulk drinking
            water across the affected region stays challenging for the first
            four to five days. <Cite id="DCRRA-2025" /> Stored water covers
            exactly that gap.
          </p>
        </Prose>
      ),
    },

    {
      title: "Two official sources give opposite advice about the gas meter",
      body: (
        <Prose>
          <p>
            FortisBC tells customers not to shut off their gas. If a customer
            shuts it off at the meter, they must not turn it back on: only a
            registered gas contractor may restore service, and restoration runs
            household by household, with a visit to each home to relight every
            appliance. <Cite id="FBC-EQ" />
          </p>
          <p>
            Surrey publishes the same advice with the consequence attached:
            “Leave natural gas service on unless officials tell you to turn it
            off. If you go turn off the gas, the gas company has to reconnect
            it, which may take weeks after a major emergency.”{" "}
            <Cite id="SURREY-PREP" />
          </p>
          <p>
            The City of Vancouver points the other way. Every City list of home
            preparations ends with “Know where your gas, electric, and water
            shut-offs are located and know how to turn them off.”{" "}
            <Cite id="COV-EXPLORER-25" /> A 2011 City worksheet, still linked
            from the City’s current guidance, goes further and says to keep a
            wrench close to the gas meter. <Cite id="COV-HHH-2011" />
          </p>
          <p>
            No City document tells anyone to shut the gas off after an
            earthquake. What it does is tell everyone to know how. FortisBC
            tells customers not to, and says what it costs. Both are official,
            both are current, and neither mentions the other.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The province’s scenario of the first minute is largely about objects that fall",
      body: (
        <Prose>
          <p>
            In the province’s own narrative of the shaking, unsecured objects
            “fall or fly through the air”, windows break and glass scatters, and
            a small number of buildings collapse. <Cite id="PEIRS" />
          </p>
          <p>
            The provincial guide covers fastening furniture, water heaters and
            heavy objects. <Cite id="PREPAREDBC" /> The City splits the same
            material into what a tenant can do without drilling and what needs a
            landlord or a contractor. <Cite id="COV-EXPLORER-25" />
          </p>
          <p>
            Without drilling anything: heavy objects on lower shelves, framed
            pictures and mirrors away from beds and seating, double-sided tape
            or velcro under smaller appliances, the bed away from the window,
            and sturdy shoes under the bed. <Cite id="COV-EXPLORER-25" />
          </p>
          <p>
            If you can fix things to the wall: tall furniture bracketed to
            studs, appliances strapped, and the water heater tank secured to the
            wall. <Cite id="COV-EXPLORER-25" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Disaster Response Route signs mark roads the public is asked to leave",
      body: (
        <Prose>
          <p>
            Those routes stay open to everyone until a state of emergency is
            declared. After that they are activated and controlled for emergency
            responders, and the official instruction to the public is to get off
            them as soon as possible. <Cite id="DRR-GOVPAGE" /> They are not
            evacuation routes, and using them as one would get in the way of the
            response.
          </p>
          <p>
            No City of Vancouver public page explains this. The provincial page
            is the only place it is set out. <Cite id="DRR-GOVPAGE" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The City names cost as a barrier, and the province is the one that answers it",
      body: (
        <Prose>
          <p>
            The City of Vancouver states the problem in its own voice: people
            with limited resources “often lack the ability to control the
            structural readiness of their building and are less able to invest
            in personal preparedness”, and it names who that falls on: “renters,
            low-income residents, older adults, and people with disabilities”.{" "}
            <Cite id="COV-EXPLORER-25" /> It publishes a resident saying it more
            plainly: “If you barely have the resources to get by day-to-day, you
            don’t have the money to prepare.” <Cite id="COV-EXPLORER-25" />
          </p>
          <p>
            The City’s own advice does not answer that. The province’s does.
            PreparedBC publishes advice on assembling a kit on a budget, built
            around dollar stores, thrift stores and adding items over time as
            money allows. <Cite id="PREPAREDBC-BUDGET" /> North Shore Emergency
            Management links to it. <Cite id="NSEM-KIT" />
          </p>
          {/* The copy's own bold lead is the label, so it is set once rather
              than printed twice. */}
          <VerificationNote label="Not published">
            Nobody has published advice on the storage half of the problem:
            where two weeks of water goes in an
            apartment, what a tenant can ask a landlord for, or what happens to
            a tenancy when a building is tagged. The provincial budget advice
            assumes a bin and somewhere to put it.{" "}
            <Cite id="PREPAREDBC-BUDGET" />
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title:
        "School seismic upgrading in Metro Vancouver is past halfway, and province-wide it is not",
      body: (
        <Prose>
          <p>
            What is being asked of households sits alongside public building
            work that is still under way. School seismic mitigation is the one
            part of it whose progress is published. The May 2026 progress report
            records 159 of 260 Metro Vancouver projects complete and 101
            remaining. Province-wide, 233 of 498 are complete.{" "}
            <Cite id="SMP-PROGRESS" />
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: <>In this order. The first one costs nothing.</>,
    // The standing link goes to `/prepare/`, which is this page.
    href: null,
    items: [
      <>
        <strong>Meet the neighbours.</strong> Know who lives alone, who needs
        medication, who has mobility limits, and who has tools. It is what the
        province’s plan is built on. <Cite id="PEIRS" />
      </>,
      <>
        <strong>Store water first.</strong> Four litres per person per day,
        which is PreparedBC’s rate <Cite id="PREPAREDBC" />, for as many days as
        you can hold, refilled on a schedule you will actually keep.
      </>,
      <>
        <strong>Then food that needs no cooking and no refrigeration</strong>,
        and a manual can opener. <Cite id="PREPAREDBC" />
      </>,
      <>
        <strong>
          Then a light, a power bank, warm layers and sturdy shoes
        </strong>
        , kept where you will be rather than only at home.{" "}
        <Cite id="PREPAREDBC-KIT" />
      </>,
      <>
        <strong>Secure the heavy things in the rooms where people sleep.</strong>{" "}
        Start with anything tall next to a bed, and move heavy objects to lower
        shelves. <Cite id="COV-EXPLORER-25" />
      </>,
      <>
        <strong>
          Leave the gas on unless an official tells you to turn it off.
        </strong>{" "}
        That is FortisBC’s instruction <Cite id="FBC-EQ" /> and Surrey’s{" "}
        <Cite id="SURREY-PREP" />. Know where the shut-offs are, which is what
        the City asks. <Cite id="COV-EXPLORER-25" />
      </>,
      <>
        <strong>Agree a meeting place and an out-of-region contact.</strong> The
        province’s plan says that if service is available, networks “may be
        congested or overloaded”. <Cite id="PEIRS" />
      </>,
      <>
        <strong>Build it over time if money is tight.</strong> The province
        publishes advice on assembling a kit on a budget, and a partial kit is
        worth far more than a planned one. <Cite id="PREPAREDBC-BUDGET" />
      </>,
    ],
  },
};
