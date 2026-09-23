import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose, Quote, VerificationNote } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Natural gas. The body of `/after/gas/`, ported from `docs/copy/gas.md`.
 *
 * The words are the copy's, verbatim. The page draws no figure: nothing here
 * has a shape the site could licence or honestly build, so it carries none.
 */
export const gas: PageModule = {
  meta: {
    route: "/after/gas/",
    title: "Natural gas",
    description:
      "Gas service returns only after a qualified worker enters each affected building and relights its appliances.",
    nav: "Natural gas",
    kicker: "Life afterwards",
    standfirst: (
      <>
        FortisBC’s fastest estimate is 8,716 appliance relights a day. It assumes
        the utility’s full workforce, mutual aid and every available private gas
        contractor in the Lower Mainland. <Cite id="FEI-RESILIENCY-24" /> A
        qualified worker must enter each affected building before service can
        return.
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "FEI-RESILIENCY-24",
      "FBC-EQ",
      "BCUC-C-6-25",
      "FEI-LTGRP-26",
      "SURREY-PREP",
      "COV-EXPLORER-25",
    ],
  },

  sections: [
    {
      title: "Gas returns one building at a time",
      body: (
        <Prose>
          <p>
            Restoring gas after an earthquake means assessing the system in the
            affected area, repairing the damage, reactivating the system, then
            visiting each home to relight all affected appliances.{" "}
            <Cite id="FBC-EQ" />
          </p>
          <p>
            Water and electricity come back when the network is repaired. Gas
            comes back when a qualified person has been inside the building and
            relit every gas appliance in it, one building at a time.
          </p>
          <p>
            If the pressure in the pipes falls away before the meters can be
            shut, air is drawn into the system and has to be taken out again
            before anybody lights anything.
          </p>
          <Quote
            speaker="FortisBC Energy Inc., to the BC Utilities Commission"
            source="Decision and Order C-6-25"
            cite={<Cite id="BCUC-C-6-25" />}
          >
            <p>
              “an uncontrolled shutdown can introduce the possibility of air
              being drawn into the distribution system, which in turn presents a
              potentially hazardous situation due to the explosive nature of the
              gas-air mixture. From an outage perspective, FEI notes that any
              air within the system must be purged prior to re-lighting customer
              appliances which could extend the outage further.”
            </p>
          </Quote>
          <p>
            A controlled shutdown is one the utility gets notice of. The same
            order treats 72 hours of notice as enough time to carry one out, and
            records uncertainty about whether a controlled shutdown is possible
            at all with less. <Cite id="BCUC-C-6-25" /> An earthquake gives no
            notice.
          </p>
        </Prose>
      ),
    },

    {
      title: "FortisBC’s fastest estimate assumes outside crews",
      body: (
        <Prose>
          <p>
            FortisBC’s 2024 forecast, filed with its regulator in March 2026,
            counts 583,370 residential gas accounts and 61,348 commercial ones
            in its Lower Mainland service region.{" "}
            <Cite id="FEI-LTGRP-26" /> An account is a meter: a house is
            usually one account, and an apartment building on a central gas
            boiler is one account serving everybody in it.
          </p>
          <p>Against that, the rate:</p>
          <Quote
            speaker="FortisBC Energy Inc."
            source="2024 Gas System Resiliency Plan, §3.4.1"
            cite={<Cite id="FEI-RESILIENCY-24" />}
          >
            <p>
              “For these outages, FEI assumes that it has used its available
              workforce, mutual aid crews have been made available to FEI and
              that FEI has retained all of the available private contractors in
              the Lower Mainland. The estimated average rate of relights is
              8,716 per day.”
            </p>
            <p>
              “With more localized outages, it is unlikely that mutual aid
              resources would be available. In such cases, FEI has reduced the
              above assumed estimated average rate of relights as follows:
              mid-size outages are addressed at a rate of 2,025 per day, while
              community-sized outages are addressed at a rate of 723 per day.”
            </p>
          </Quote>
          <p>
            8,716 is the highest of the rates the plan publishes. It counts
            FortisBC’s whole workforce, mutual aid crews sent by other utilities
            and every available private gas contractor in the Lower Mainland.
            Without those outside crews, FortisBC’s own figures are 2,025 a day
            and 723 a day.{" "}
            <Cite id="FEI-RESILIENCY-24" /> The plan also assumes a quarter of
            customers relight their own appliances.{" "}
            <Cite id="FEI-RESILIENCY-24" />
          </p>
          <p>
            Whether outside crews arrive depends on the earthquake, not on the
            gas system. Those crews reach buildings the way everybody else does,
            over the same{" "}
            <Link
              href="/after/transportation/"
              className="text-accent underline underline-offset-2"
            >
              roads
            </Link>{" "}
            and on the same{" "}
            <Link
              href="/after/fuel/"
              className="text-accent underline underline-offset-2"
            >
              fuel
            </Link>
            . FortisBC has published no relight rate for a megathrust, and none
            can be worked out from these figures.
          </p>
        </Prose>
      ),
    },

    {
      title: "A winter supply failure could take weeks to restore",
      body: (
        <Prose>
          <p>
            In October 2025 the BC Utilities Commission approved an LNG storage
            expansion at Tilbury in Delta, reasoning from a different hazard: a
            prolonged loss of supply on the T-South pipeline in winter. The
            panel wrote that such an outage, with no earthquake damage anywhere
            in it, “would put hundreds of thousands of customers
            at risk of losing service”, and that FEI’s evidence showed “a loss
            of service at this scale would take several weeks to restore
            service”.{" "}
            <Cite id="BCUC-C-6-25" /> FortisBC’s own modelling of comparable
            supply interruptions, again with no earthquake damage in them, pairs
            customer counts of roughly 600,000 to 640,000 with total outage
            durations of 57 to 70 days. <Cite id="FEI-RESILIENCY-24" />
          </p>
          <p>
            There are no broken mains in that scenario, no air in the pipes, no
            buildings a technician cannot safely enter and nobody else competing
            for the same contractors, and the relight rate underneath it is the
            8,716 one. Every one of those conditions gets worse in an earthquake
            and none gets better, so those durations are a floor.
          </p>
          <p>
            Two of the outside parties in the proceeding told the commission
            FortisBC was being too cautious:
            one submitted “that FEI’s restoration and relight plan is overly
            conservative”, and another argued that relighting business and
            industrial customers earlier “could dramatically reduce the GDP
            losses incurred”. The panel found FEI’s assumptions “reasonable and
            appropriate”. <Cite id="BCUC-C-6-25" />
          </p>
        </Prose>
      ),
    },

    {
      title: "A Delta storage tank operates below capacity",
      body: (
        <Prose>
          <p>
            The LNG storage tank at the Tilbury base plant was installed in
            1969. Seismic design requirements have tightened since, and to
            comply with them FortisBC runs the tank at 58 per cent of its
            capacity: 0.35 billion cubic feet, down from 0.6.{" "}
            <Cite id="BCUC-C-6-25" />
          </p>
          <p>
            Two engineering firms examined whether the tank could be refurbished
            to its full design capacity while meeting current minimum seismic
            requirements. Both recommended replacing it instead. CB&amp;I called
            remediation “fraught with significant risk”. WSP concluded that even
            if every repair CB&amp;I identified could be completed, it would not
            be cost-effective or feasible to replace the foundation to avoid the
            tank “failing due to earthquake-caused differential settlement”.{" "}
            <Cite id="BCUC-C-6-25" />
          </p>
          <p>
            In October 2025 the commission’s panel agreed that refurbishment
            “does not appear to be a cost-effective or viable option due to
            seismic issues and the age and condition of the assets”, and
            approved a replacement at about $1.14 billion in as-spent dollars
            over a seven-year construction period. <Cite id="BCUC-C-6-25" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Automatic shut-off valves are still being studied",
      body: (
        <Prose>
          <p>
            The 2024 plan’s Lower Mainland initiative is to isolate the
            region’s distribution system after a seismic event that damages
            assets across it. The scope is additional valves and upgrades to
            existing ones, all of them able to “autonomously shut following a
            seismic event”, and the plan says that “Development for this
            initiative is in the preliminary stages”.{" "}
            <Cite id="FEI-RESILIENCY-24" /> The public version carries no
            budget, no commitment and no date for it.
          </p>
          <VerificationNote label="No published restoration time">
            Nothing in the public record says how long the gas would be off in
            the Lower Mainland after an earthquake, or how much of the region
            would lose it. The 2024 plan assesses 58 vulnerabilities across
            FortisBC’s system and identifies each one only by number, with no
            name or location, so none of its results can be tied to a location.{" "}
            <Cite id="FEI-RESILIENCY-24" /> Its second-largest risk overall sits at
            an asset FortisBC has not named and whose location it filed to the
            commission in confidence, so nobody outside the regulator can say
            whether it serves this region. What is public is the mechanism and
            the modelled duration: earthquake lateral spreading, which is
            saturated ground losing its strength and moving sideways, drives
            most of that risk, and the modelled mean total outage is 61 days.{" "}
            <Cite id="FEI-RESILIENCY-24" /> The plan’s own Lower Mainland
            section describes the problem in words and gives no figures.
          </VerificationNote>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        Gas comes back one building at a time, at a rate FortisBC has published.{" "}
        <Cite id="FEI-RESILIENCY-24" /> What a household controls is whether its
        own meter joins that queue.
      </>
    ),
    items: [
      <>
        <strong>
          Leave the gas on unless fire or emergency officials tell you to turn
          it off.
        </strong>{" "}
        That is FortisBC’s own instruction to its customers, and it runs against
        what most people assume. FortisBC says it will shut the service off
        itself if fire or emergency officials ask it to. <Cite id="FBC-EQ" />
      </>,
      <>
        <strong>Know what turning it off costs before you do it.</strong> Once
        the gas is off at the meter, only a registered gas contractor may turn
        it back on. <Cite id="FBC-EQ" /> Surrey’s preparedness page writes the
        consequence out plainly: “Leave natural gas service on unless officials
        tell you to turn it off. If you go turn off the gas, the gas company has
        to reconnect it, which may take weeks after a major emergency.”{" "}
        <Cite id="SURREY-PREP" />
      </>,
      // No citation, and none is missing: this bullet claims nothing a document
      // records. A gas range stops when the gas does, and the relight is the
      // section above.
      <>
        <strong>Check whether what you plan to cook on runs off the meter.</strong>{" "}
        A gas range and a gas furnace stop when the gas does, and they stay
        stopped until somebody has been inside to relight them.
      </>,
    ],
    closing: (
      <>
        Knowing where the shut-off is and using it are two different
        instructions. The City of Vancouver tells residents to know where their
        gas, electric and water shut-offs are and how to turn them off.{" "}
        <Cite id="COV-EXPLORER-25" /> FortisBC tells its customers not to turn
        the gas off themselves. <Cite id="FBC-EQ" /> Both are current advice
        from official bodies. Find the valve now, and leave it alone unless an
        official tells you otherwise.
      </>
    ),
  },
};
