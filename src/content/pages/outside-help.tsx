import Link from "next/link";
import { Cite } from "@/components/citation";
import {
  Prose,
  Quote,
  Subhead,
  DataTable,
  VerificationNote,
} from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Where help comes from. The body of `/after/outside-help/`, ported from
 * `docs/copy/outside-help.md`.
 *
 * The words are the copy's, verbatim. Two things a reader sees are furniture
 * the copy file does not write: the table caption, which names the table for a
 * screen reader, and the quotation's document title, which markdown has no
 * slot for and which the body's lead-in gives in the reader's words instead.
 *
 * This is the one system whose band differs between the two scenarios for a
 * reason about the world rather than a gap in the literature, so the third
 * section writes each column under its own subhead and names the scenario in
 * it. A sentence that carried one column's finding into the other would be a
 * real error on a page the reader reaches through a scenario toggle.
 */
export const outsideHelp: PageModule = {
  meta: {
    route: "/after/outside-help/",
    title: "Where help comes from",
    nav: "Where help comes from",
    kicker: "Life afterwards",
    standfirst: (
      <>
        British Columbia’s earthquake plan does not wait to be asked. It stages
        resources with the agencies outside the damaged region and pushes them
        in. <Cite id="PEIRS" /> Whether there is an outside to push from is the
        thing the two earthquakes answer differently. <Cite id="PEIRS" />
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "PEIRS",
      "DCRRA-2025",
      "DRR-GOVPAGE",
      "AHP-2012",
      "BCEMS-2016",
      "ECR-2016",
      "EX-PROG",
      "AB-ERPBC",
      "EMCR-LEG",
      "CEMP-PAGE",
    ],
  },

  sections: [
    {
      title: "Help arrives over the same roads and ports as everything else",
      body: (
        <Prose>
          <p>
            In the first days, road, rail, air and marine transport are
            disrupted and “existing supply chains will be inoperable”. Areas are
            isolated, unreachable by road because of landslides, liquefaction
            and collapsed bridges, and cut off further by damage to airports and
            marine ports. Inside that area, local capacity to respond “will be
            limited and delayed”. <Cite id="PEIRS" /> What that does to the
            crossings and the terminals is on{" "}
            <Link
              href="/after/transportation/"
              className="text-accent underline underline-offset-2"
            >
              transportation
            </Link>{" "}
            and{" "}
            <Link
              href="/after/large-infrastructure/"
              className="text-accent underline underline-offset-2"
            >
              large infrastructure
            </Link>
            .
          </p>
          <p>
            Leaving is not the plan: “damage to transportation routes and the
            prioritization of essential personnel and supplies make mass
            evacuation impossible, and the public is directed to shelter in
            place.” <Cite id="DCRRA-2025" />
          </p>
          <p>
            Disaster Response Routes are corridors kept open for emergency
            vehicles, and once they are activated the public is told to get off
            them as soon as possible. <Cite id="DRR-GOVPAGE" /> They are roads
            to leave, not roads to leave on.{" "}
            <Link
              href="/getting-around/"
              className="text-accent underline underline-offset-2"
            >
              Getting around
            </Link>{" "}
            covers the signs.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "British Columbia’s plan is to push resources in, which reverses what its own general plan says",
      body: (
        <Prose>
          <p>
            The province’s general emergency plan, the All-Hazard Plan, works
            from the bottom up. The province’s role under it is supplementary:
            it “will coordinate available resources to provide emergency
            response assistance that supplements but does not substitute for
            community resources”, and the first move belongs to the local
            authority. The plan allows that order to be turned around and treats
            it as the exception: a situation at the international or national
            level “may reverse or otherwise change the normal ‘bottom-up’
            approach to response”. <Cite id="AHP-2012" />
          </p>
          <p>
            The earthquake strategy makes the exception the rule. In a major
            earthquake the province “will stand up response measures outlined
            within this strategy and proactively deploy resources into the
            impact area”. <Cite id="PEIRS" /> Nobody has to ask first. The
            general plan has not been amended since 2016. <Cite id="AHP-2012" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Pushing resources in needs an outside to push them from",
      body: (
        <Prose>
          <p>
            Agencies inside the impact area are reduced or delayed, while “those
            outside the impact area will be largely unaffected and functional”.
            The staging follows: “Provincial staging areas are located outside
            the impact area and will be used to organize, prioritize, and
            disseminate critical resources.” <Cite id="PEIRS" />
          </p>
          <p>
            That is a planning assumption: what a province decides to plan
            against. It is not a measured finding about how help would arrive.
          </p>
          <Subhead>
            In the shallow crustal magnitude 7.0, the outside is the rest of the
            province
          </Subhead>
          <p>
            The province’s crustal planning scenario is a magnitude 7.0 beneath
            the Strait of Georgia, and its damage is concentrated and local.{" "}
            <Cite id="PEIRS" /> The impact area is the Lower Mainland. The rest
            of British Columbia, Alberta and the American Pacific Northwest are
            outside it, which is the case the staging plan is built for. Help
            still has to travel over damaged roads, and the first response is
            still the local one. <Cite id="AHP-2012" />
          </p>
          <Subhead>
            In the Cascadia magnitude 9.0, the province says the United States
            may be unable to help
          </Subhead>
          <p>
            From the Cascadia appendix of the province’s earthquake response
            strategy, on a rupture of the Cascadia subduction zone, the offshore
            fault that runs the length of the coast:
          </p>
          <Quote
            speaker="Province of British Columbia"
            source="Provincial Earthquake Immediate Response Strategy"
            cite={<Cite id="PEIRS" />}
          >
            <p>
              “a CSZ event would be devastating to B.C. as impacts would be felt
              over a very broad region, many remote communities might be cut off
              from aid, and the U.S. will be unable to deliver mutual aid if
              they are also overwhelmed by impacts.”
            </p>
          </Quote>
          <p>
            The province’s regional and central coordination centres, the PREOC
            and the PECC, decide what provincial support goes where.{" "}
            <Cite id="BCEMS-2016" /> In this scenario both are “compromised due
            to damage to facilities and impacts on staff” and have to work from
            alternate locations. <Cite id="DCRRA-2025" />
          </p>
          <p>
            The word the province uses is delayed: “resources from other parts
            of B.C., other provinces and the U.S. are delayed due to widespread
            transportation and communication disruptions.”{" "}
            <Cite id="DCRRA-2025" /> The plan is that a community holds on until
            help arrives. <Cite id="PEIRS" />{" "}
            <Link
              href="/scenarios/"
              className="text-accent underline underline-offset-2"
            >
              The two scenarios
            </Link>{" "}
            sit side by side.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The agreements that would bring help are named, and the one scheduled test of them was not run",
      body: (
        <Prose>
          <p>
            In June 2016 the province ran Exercise Coastal Response, its first
            full-scale earthquake and tsunami exercise, with about 800
            participants from 65 organisations. <Cite id="ECR-2016" /> Two of
            its objectives were about help from outside British Columbia, and
            neither was tested. Activating the Pacific Northwest Emergency
            Management Arrangement: “(Not tested due to concurrent Exercise
            Cascadia Rising)”. Requesting activation of Alberta’s earthquake
            plan for British Columbia: “(Not tested due to real-world
            constraints)”. <Cite id="ECR-2016" />
          </p>
          <p>
            British Columbia could not exercise its cross-border arrangement
            because its cross-border partners were exercising the same
            earthquake. It publishes summaries of these exercises rather than
            full after-action reports. <Cite id="EX-PROG" />
          </p>
          <DataTable
            caption="The agreements under which help from outside British Columbia would arrive."
            columns={["Who would come", "Under what"]}
            minWidth="32rem"
            rows={[
              [
                "Alaska, Idaho, Oregon, Washington and Yukon",
                <>
                  The Pacific Northwest Emergency Management Arrangement,
                  established 1998 <Cite id="AHP-2012" />
                </>,
              ],
              [
                "The other provinces and territories",
                <>
                  The Emergency Management Mutual Aid Agreement, a 2010
                  memorandum of the Canadian Council of Emergency Management
                  Organizations <Cite id="PEIRS" />
                </>,
              ],
              [
                "Alberta",
                <>
                  A memorandum of understanding dated 2007, and the Earthquake
                  Response Plan for British Columbia, which Alberta holds{" "}
                  <Cite id="AHP-2012" /> <Cite id="AB-ERPBC" />
                </>,
              ],
              [
                "The Canadian Armed Forces",
                <>
                  A Request for Assistance under Contingency Plan PANORAMA{" "}
                  <Cite id="PEIRS" />
                </>,
              ],
            ]}
          />
          <VerificationNote label="Not published">
            Alberta’s government emergency plans page names the Earthquake
            Response Plan for British Columbia, whose objective is “to
            coordinate Alberta’s assistance to British Columbia during a
            catastrophic earthquake”, and describes it as “currently under
            review”. Nine other plans on that page carry a download link and
            this one carries none. <Cite id="AB-ERPBC" /> British Columbia’s own
            strategy names the plan five times, and an immediate-response
            checklist directs staff to contact the Alberta Emergency Management
            Agency to confirm its activation. <Cite id="PEIRS" />
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title:
        "The framework all of this runs on was made under a law that has since been repealed",
      body: (
        <Prose>
          <p>
            The All-Hazard Plan is dated 4 November 2012 and was last amended on
            22 June 2016. It promises that it “will be reviewed and updated by
            EMBC every four years”, naming an agency that is now the Ministry of
            Emergency Management and Climate Readiness, which publishes the
            earthquake response strategy. <Cite id="AHP-2012" />{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            The plan is made under the Emergency Program Act.{" "}
            <Cite id="AHP-2012" /> The ministry’s own legislation page states
            that the Emergency and Disaster Management Act “replaced the
            Emergency Program Act in 2023”, and announces no successor to the
            framework or to the 2016 guide that sets out how a response is
            organised. <Cite id="EMCR-LEG" /> <Cite id="BCEMS-2016" /> The
            All-Hazard Plan was still the province’s published plan on 23
            December 2025, the date the provincial emergency plans page was last
            updated. <Cite id="CEMP-PAGE" />
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        The province’s plan is that a community holds on until outside help
        reaches it, and it assumes communities work together before any
        provincial guidance arrives. <Cite id="PEIRS" /> That makes your street
        the place to start.
      </>
    ),
    items: [
      // No citation, and none is missing: naming who on a street is least able
      // to wait rests on no document, and the sentence that does rest on one
      // is the lever's title above.
      <>
        <strong>Find out who on your street would need help first.</strong>{" "}
        Anyone who lives alone, anyone who could not get themselves out of a
        building, anyone whose medicine matters every day.
      </>,
      <>
        <strong>Agree who checks on whom, before anything happens.</strong> It
        takes a conversation now and no equipment, and nobody can make the
        arrangement for you afterwards.
      </>,
      <>
        <strong>
          Decide how long to hold out for, knowing the province’s own documents
          disagree.
        </strong>{" "}
        The earthquake response strategy says up to two weeks.{" "}
        <Cite id="PEIRS" /> The All-Hazard Plan says a minimum of 72 hours.{" "}
        <Cite id="AHP-2012" />{" "}
        <Link
          href="/prepare/"
          className="text-accent underline underline-offset-2"
        >
          Preparing
        </Link>{" "}
        sets out what each document says.
      </>,
    ],
    closing: (
      <>
        None of that replaces the response. It is what the province’s own plan
        expects to be happening while the response is on its way.
      </>
    ),
    /** The last item already links to `/prepare/` in the copy's own words. */
    href: null,
  },
};
