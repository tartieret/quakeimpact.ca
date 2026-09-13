import { Cite } from "@/components/citation";
import {
  Figure,
  Photograph,
  Prose,
  Quote,
  VerificationNote,
} from "@/components/page-parts";
import {
  ElectricityChronology,
  ElectricityTwoClocks,
  MurrinShortfall,
  TransformerLeadTimes,
  TransformerSpares,
} from "@/components/figures/electricity";
import type { PageModule } from "./index";

/**
 * Electricity. The body of `/after/electricity/`, ported from
 * `docs/copy/electricity.md`.
 *
 * The words are the copy's, verbatim. The only reader-facing strings the copy
 * does not write are the speaker and document lines under each quotation,
 * which name who is being quoted and from which filing.
 */
export const electricity: PageModule = {
  meta: {
    route: "/after/electricity/",
    title: "Electricity",
    nav: "Electricity",
    kicker: "Life afterwards",
    standfirst:
      "In November 2025 BC Hydro told its regulator that its main downtown substation would not be operable after an earthquake well below the level the building code requires it to withstand. No comparable statement has been published for anywhere else in this region.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "BCH-WESTEND-25",
      "BCH-RRA-F2020",
      "BCH-RRA-F2023",
      "BCH-SEIS-11",
      "BCH-VCCT",
      "BCH-XFMR-21",
      "NIAC-LPT-24",
      "WOODMAC-25",
      "BCH-DAMFAQ",
    ],
  },

  sections: [
    {
      title:
        "BC Hydro says several weeks to restore power downtown, and years to restore the system",
      body: (
        <Prose>
          <p>
            On 10 November 2025 BC Hydro filed its initial application to the BC
            Utilities Commission for the West End Substation Project, which
            would replace the substation that supplies much of downtown
            Vancouver. In the section headed “Seismic Concerns” it wrote:
          </p>
          <Quote
            speaker="BC Hydro"
            source="West End Substation Project application, Seismic Concerns"
            cite={<Cite id="BCH-WESTEND-25" />}
          >
            <p>
              “Most of the Murrin Substation site is located on seismically
              unstable ground with eight underground transmission circuits
              traversing seismically unstable soil. These transmission circuits
              include the four 60 kV transmission lines that radially supply Dal
              Grauer Substation. In a large seismic event, Murrin Substation and
              these underground transmission circuits could be damaged and up to
              two thirds of downtown customers, including all customers served
              by Dal Grauer Substation, could experience a lengthy outage. It
              could take several weeks to restore power to customers and years
              to completely restore the system from the damage depending on the
              magnitude of the seismic event.”
            </p>
          </Quote>
          <p>
            BC Hydro attaches neither duration to a particular earthquake: its
            wording is “in a large seismic event” and “depending on the
            magnitude”.
          </p>
          <Figure
            alt="BC Hydro gives two durations for downtown Vancouver: several weeks before customers have power again, and years before the system is completely restored. Neither is drawn on a scale, because BC Hydro publishes no number for either, and the two are not two ends of one clock."
            caption={
              <>
                Two clocks, and they do not join up. BC Hydro states both in
                words and neither as a figure, so neither panel carries a scale
                to read a date off. Both are about downtown customers.{" "}
                <Cite id="BCH-WESTEND-25" />
              </>
            }
          >
            <ElectricityTwoClocks />
          </Figure>
          <p>
            BC Hydro filed this in support of a project it wants approved, so
            the seismic consequence is the case being made. It is also the owner
            of the asset, in a regulatory filing, citing a seismic assessment of
            its own substation and conceding something against its own interest.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Murrin falls short of the standard the building code sets for it",
      body: (
        <Prose>
          <p>From a footnote in the same filing:</p>
          <Quote
            speaker="BC Hydro"
            source="West End Substation Project application, footnote"
            cite={<Cite id="BCH-WESTEND-25" />}
          >
            <p>
              “The National Building Code of Canada (2020) requires
              post-disaster buildings, such as electrical substations,
              hospitals, and fire halls, to be operable following 1/2475-year
              return period earthquake ground motions. Seismic assessment of
              Murrin Substation found that Murrin Substation would experience
              significant damage and not be operable following 1/1000-year
              return period earthquake ground motions, far less than the
              1/2475-year return period earthquake ground motions.”
            </p>
          </Quote>
          <p>
            A post-disaster building is one the code expects to keep working
            after the earthquake, rather than merely to stay standing. A one in
            2,475 year ground motion is shaking severe enough that it happens on
            average once in 2,475 years, so the higher the number, the rarer and
            the harder the shaking. Murrin
            was commissioned in 1947 and Dal Grauer in 1952. About 60 per cent
            of Murrin’s assets and 78 per cent of Dal Grauer’s are at or near
            the end of their working lives. <Cite id="BCH-WESTEND-25" />
          </p>
          <Figure
            alt="BC Hydro found Murrin Substation in downtown Vancouver not operable after a 1 in 1,000 year ground motion, while the building code requires a post-disaster building to be operable after a 1 in 2,475 year ground motion. The figure shows the gap between the two, and it is about one substation rather than the network."
            caption={
              <>
                The axis carries only the two return periods the footnote
                states. Nothing is filled in below 1 in 1,000, because the
                assessment says what Murrin fails at rather than what it
                withstands. <Cite id="BCH-WESTEND-25" />
              </>
            }
          >
            <MurrinShortfall />
          </Figure>
        </Prose>
      ),
    },

    {
      title:
        "Murrin cannot be fixed where it stands, and the replacement is not due until 2032",
      body: (
        <Prose>
          <p>BC Hydro’s own assessment of the alternatives:</p>
          <Quote
            speaker="BC Hydro"
            source="West End Substation Project application, alternatives assessed"
            cite={<Cite id="BCH-WESTEND-25" />}
          >
            <p>
              “Murrin Substation: seismic upgrades are not feasible as they
              would require outages of critical transmission cables. These
              transmission cables are essential to the reliability of the
              Downtown Vancouver Electricity System and therefore cannot be
              taken out of service for extended periods. These seismic upgrades
              at Murrin Substation are also cost prohibitive.”
            </p>
          </Quote>
          <p>
            Until the new West End substation is in service, much of downtown
            stays on Murrin. Its in-service date is July 2032 at the earliest,
            and the regulator has not yet ruled on it.{" "}
            <Cite id="BCH-WESTEND-25" />
          </p>
          <p>
            BC Hydro’s filing of February 2019, which the regulator’s record
            files by fiscal year as F2020, already stated that Murrin sits on
            seismically unstable soil, that about half of the switchyard
            supplying both substations is vulnerable to settlement and to
            liquefaction, where saturated soil loses its strength and behaves
            like a liquid while the ground shakes, and that load served from both “may experience a
            prolonged outage after a seismic event”.{" "}
            <Cite id="BCH-RRA-F2020" />
          </p>
          <p>
            That same filing also counts about 95,000 customers in the
            downtown study area. <Cite id="BCH-RRA-F2020" /> The customer count and the
            two thirds come from different filings six years apart, so
            multiplying one by the other would produce a number of people nobody
            has published.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The Second Narrows crossing could collapse below the level the code sets, and the work to fix it is not scheduled",
      body: (
        <Prose>
          <p>
            At Second Narrows, BC Hydro’s 2021 revenue requirements filing says
            the transmission line crossing structures “have been assessed as
            being critical, and at risk of sustaining damage, including possible
            collapse, during an earthquake of less than 1:475-year frequency”,
            and that losing the crossing “would result in load curtailment in
            the Metro Vancouver area”, which means cutting power to customers
            on purpose to keep the rest of the network up.{" "}
            <Cite id="BCH-RRA-F2023" />
          </p>
          <p>
            Cost, in-service date and construction start were all listed as to
            be determined, and the project sits in a category for future
            prioritization rather than committed work.{" "}
            <Cite id="BCH-RRA-F2023" />
          </p>
          <p>
            Murrin and the Second Narrows crossing are two named assets, and
            neither is a statement about the rest of the network.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "What BC Hydro said in 2011 and what it found in 2025 do not agree",
      body: (
        <Prose>
          <p>
            In January 2011 BC Hydro stated in a press release that “BC’s
            electrical infrastructure has been built to withstand even a severe
            seismic event, such as a one in a 2,475 year event.”{" "}
            <Cite id="BCH-SEIS-11" />
          </p>
          <p>
            Against that stands BC Hydro’s own 2025 assessment, above: Murrin
            not operable at one in 1,000. <Cite id="BCH-WESTEND-25" />
          </p>
          <p>
            Both are BC Hydro. The 2011 sentence is design intent for the system
            as a whole, fifteen years old. The 2025 finding is an engineering
            assessment of one critical asset that does not meet it.
          </p>
          <Figure
            alt="BC Hydro said in 2011 that the system was built to withstand a 1 in 2,475 year event, its 2019 filing already stated Murrin could see a prolonged outage, its 2025 assessment found the substation not operable at 1 in 1,000, and the replacement is not in service until July 2032 at the earliest. The gap between knowing and fixing is about one downtown substation, not the region."
            caption={
              <>
                Four dates on the public record. The band runs from the filing
                that already stated the problem to July 2032, the earliest the
                replacement can be in service, and it is left open because the
                regulator has not yet ruled.{" "}
                <Cite id="BCH-SEIS-11" /> <Cite id="BCH-RRA-F2020" />{" "}
                <Cite id="BCH-WESTEND-25" />
              </>
            }
          >
            <ElectricityChronology />
          </Figure>
          <p>
            What BC Hydro builds now is built to that standard. The Mount
            Pleasant substation, part of the Vancouver City Central
            Transmission project, is designed to operate after a disaster, with
            ducts and cable vaults installed below the zone where the ground
            would deform. <Cite id="BCH-VCCT" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Restoring a power system can mean ordering equipment rather than repairing it",
      body: (
        <Prose>
          <p>
            In its 2021 filing BC Hydro reported{" "}
            <strong>10 spare power transformers against a fleet of 672</strong>{" "}
            at 60 kV and above. <Cite id="BCH-XFMR-21" /> The same section of its
            2019 filing gave 572 and the same 10 spares.{" "}
            <Cite id="BCH-RRA-F2020" /> Both describe the spares strategy as
            existing “to minimize impacts in the event of a failure”, in the
            singular, and neither connects it to an earthquake, to simultaneous
            losses, or to replacing many units at once.
          </p>
          <Figure
            alt="In its 2021 filing BC Hydro reported 10 spare power transformers against a fleet of 672 at 60 kV and above. Its filings describe the spares as covering a single failure and do not connect them to an earthquake."
            caption={
              <>
                One mark is one transformer in both panels, on the same
                columns. The spares are not drawn as a share of the fleet,
                because the filings connect them to one failure rather than to
                many.{" "}
                <Cite id="BCH-XFMR-21" /> <Cite id="BCH-RRA-F2020" />
              </>
            }
          >
            <TransformerSpares />
          </Figure>
          <p>
            No lead time for a replacement transformer is published anywhere in
            BC Hydro’s regulatory record. In the United States, average lead
            times for power transformers rose from around 50 weeks in 2021 to
            roughly 120 weeks, more than two years, by 2024.{" "}
            <Cite id="NIAC-LPT-24" />
          </p>
          <p>
            Those are US market figures and not a forecast for British Columbia.
            That is what a utility is waiting on when it says years. A
            substation that loses its transformer bank is in a queue behind
            every other buyer.
          </p>
          <Figure
            alt="Average power transformer lead times in the United States rose from around 50 weeks in 2021 to roughly 120 weeks in 2024. These are United States market figures and not a forecast for British Columbia."
            caption={
              <>
                United States market figures, as the drawing is headed. No lead
                time for a replacement transformer is published anywhere in BC
                Hydro’s regulatory record, so nothing here is a British Columbia
                number. <Cite id="NIAC-LPT-24" />{" "}
                <Cite id="WOODMAC-25" />
              </>
            }
          >
            <TransformerLeadTimes />
          </Figure>
          <Photograph
            id="uchtelfangen-transformer"
            caption={
              <>
                Uchtelfangen, Germany, 2019, and no earthquake anywhere in it.
                One transformer, just under 400 tonnes, arriving at its
                substation by road from the harbour at Dillingen, with the road
                closed for it. It is here because almost nobody has seen one, and the
                numbers above describe an object rather than an idea: this is
                what is at the end of a lead time, and what ten spares against a
                fleet of 672 is counting. <Cite id="BCH-XFMR-21" />
              </>
            }
          />
          <VerificationNote label="Not yet published">
            BC Hydro’s statement covers downtown Vancouver, and the Second
            Narrows crossing is the only other named asset. No restoration
            estimate has been published for the North Shore, Richmond, Delta,
            Surrey or the rest of the region, and no seismic assessment of the
            distribution network, the wires in the street, appears anywhere in
            the regulatory record. BC Hydro says its assessment of the
            transmission and distribution system is still being completed.{" "}
            <Cite id="BCH-DAMFAQ" />
          </VerificationNote>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        The only restoration time BC Hydro has published anywhere in this
        region is several weeks, for downtown customers, with years before the
        downtown system is completely restored. <Cite id="BCH-WESTEND-25" />{" "}
        Nothing has been published for anywhere else. Weeks is the interval to prepare against,
        because it is the one the utility has put in writing.
      </>
    ),
    items: [
      <>
        <strong>
          Assume anything that plugs in is unavailable, including things that
          look independent.
        </strong>{" "}
        A service station with full tanks and no power dispenses no fuel.
        Payment terminals and cordless phone handsets stop working.
      </>,
      <>
        <strong>Keep light that does not need the grid</strong>, and keep it
        where you can reach it in the dark. A headlamp for each person beats a
        single torch for the household.
      </>,
      <>
        <strong>Charge for days rather than hours.</strong> A power bank large
        enough to refill a phone several times is the difference between having
        a phone and having a brick.
      </>,
      <>
        <strong>Settle now what has to stay cold or stay powered.</strong>{" "}
        Medication that needs refrigeration, and any medical equipment that runs
        on mains power, need an answer worked out with a pharmacist or
        clinician in advance.
      </>,
      <>
        <strong>
          Find out whether your heating needs electricity to run.
        </strong>{" "}
        A gas appliance that depends on an electric fan or control stops with
        the power.
      </>,
    ],
  },
};
