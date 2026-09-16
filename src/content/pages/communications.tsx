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
 * Communications. The body of `/after/communications/`, ported from
 * `docs/copy/communications.md`.
 *
 * The words are the copy's, verbatim. Anything a reader sees that is not in
 * the copy file is furniture the copy does not write: the speaker lines under
 * the two quotations, and the table caption, which names the table for a
 * screen reader.
 *
 * There is no figure here. Nothing on this page has a shape a source gives:
 * the regulatory findings are presence and absence rather than quantity, and
 * the one duration the province publishes is "days to weeks", which is a range
 * word and not an axis.
 */
const electricityLink = (
  <Link
    href="/after/electricity/"
    className="text-accent underline underline-offset-2"
  >
    electricity
  </Link>
);

const fuelLink = (
  <Link href="/after/fuel/" className="text-accent underline underline-offset-2">
    fuel
  </Link>
);

export const communications: PageModule = {
  meta: {
    route: "/after/communications/",
    title: "Communications",
    description:
      "The province expects disruption to communications to continue for days to weeks. No rule sets how long a cell site has to hold backup power.",
    nav: "Communications",
    kicker: "Life afterwards",
    standfirst: (
      <>
        The province expects communications to be disrupted for days to weeks.
        Surviving capacity would go first to emergency personnel.{" "}
        <Cite id="DCRRA-2025" /> Cell sites have no minimum backup-power
        requirement. The regulator is still considering one.{" "}
        <Cite id="CRTC-2025-226" />
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "DCRRA-2025",
      "CRTC-2025-226",
      "PEIRS",
      "ECOMM-EQ",
      "CRTC-2025-225",
      "CRTC-2025-65",
      "CRTC-2016-165",
      "BC-CRTC-SUB",
      "ECOMM-FAC",
      "NRCAN-EEW",
      "BC-ALERT-2026",
      "NRCAN-EEW-FAQ",
      "NRCAN-EEW-CSZ-23",
      "NRCAN-EEW-1946-21",
      "NRCAN-EEW-NISQ-26",
      "NRCAN-EEW-CHCH-23",
      "COV-EXPLORER-25",
    ],
  },

  sections: [
    {
      title: "Call volumes overload the network first",
      body: (
        <Prose>
          <p>A cell site does not have to fall over to stop working:</p>
          <Quote
            speaker="Province of British Columbia"
            source="Provincial Earthquake Immediate Response Strategy"
            cite={<Cite id="PEIRS" />}
          >
            <p>
              “If service is available, networks may be congested or overloaded,
              making communication extremely challenging. Texts and
              low-bandwidth data-based services may be the most reliable method
              of communication when other services are disrupted.”
            </p>
          </Quote>
          <p>
            A voice call holds a channel open for as long as it lasts; a text is
            a short burst that keeps retrying until it lands. <Cite id="PEIRS" />
          </p>
          <p>
            The same filling-up happens to 9-1-1. E-Comm, which answers 9-1-1
            calls for the Lower Mainland, says: “We received a 1,500 per cent
            increase in 9-1-1 calls after a 4.7 earthquake in 2015. The vast
            majority of those calls were not emergencies.” <Cite id="ECOMM-EQ" />{" "}
            The count comes from one small earthquake and is not a forecast for
            a large one.
          </p>
        </Prose>
      ),
    },

    {
      title: "Disruption could last days to weeks",
      body: (
        <Prose>
          <p>
            The province’s megathrust assessment states that “disruptions in
            communications continue for days to weeks”, with access prioritised
            for emergency personnel, “leading to a prolonged lack of access to
            communications for the general population”.{" "}
            <Cite id="DCRRA-2025" /> The assessment gives no site counts or
            outage curve and applies to a magnitude 9.0 Cascadia earthquake.
          </p>
          <p>
            The response strategy does not separate copper from cellular:
            “common communication service providers, including cellular and
            landline telephone providers, may be impacted”. <Cite id="PEIRS" />{" "}
            It names “satellite phones and amateur radio services” as the
            backups people would fall back on. Radio fills up the way the
            cellular network does: “Radio communication, if operable, may be
            also congested and impact the ability of first responders if
            saturated with non-sanctioned operators.” <Cite id="PEIRS" />
          </p>
          <p>
            Non-sanctioned means outside the province’s own volunteer service.
            Through the Provincial Emergency Radio Communications Service it has
            installed amateur radio equipment at each of its regional emergency
            operations centres, though “some regions have a limited number of
            radio operators”. <Cite id="PEIRS" /> The distinction is whether an
            operator joined an organised group before the earthquake.
          </p>
          <VerificationNote label="Not published">
            Which regions are short of radio operators, and whether the Lower
            Mainland is one of them, is not in the document. <Cite id="PEIRS" />{" "}
            No carrier has published how many sites it runs here, how long they
            hold without grid power, or how quickly it would bring them back,
            and the province’s assessments give no site counts and no
            restoration curve. <Cite id="PEIRS" /> <Cite id="DCRRA-2025" />
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title: "Cell sites have no minimum backup-power requirement",
      body: (
        <Prose>
          <p>
            A cell site is a radio and a computer in a cabinet, usually on a
            rooftop or at the foot of a mast, and both run on grid power. When
            the power goes, the site runs on whatever battery or generator its
            owner chose to put there. How long the grid takes to come back is on{" "}
            {electricityLink}, and a generator runs as long as somebody keeps
            delivering {fuelLink}.
          </p>
          <p>
            No Canadian rule sets how long that battery has to last. On 4
            September 2025 the Canadian Radio-television and Telecommunications
            Commission, the federal telecom regulator, opened a proceeding on
            network resiliency and put this to the industry: “What parameters
            should TSPs use to determine an appropriate backup power run time
            for each type of network site?” <Cite id="CRTC-2025-226" /> TSPs are
            the telephone and internet companies themselves. The guidance
            reproduced in the proceeding’s appendix uses “should”, making it a
            recommendation. <Cite id="CRTC-2025-226" />
          </p>
          <p>
            The record closed in late August 2026. No decision has been issued.{" "}
            <Cite id="CRTC-2025-226" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Current rules focus on reporting and 9-1-1 routing",
      body: (
        <Prose>
          <p>
            Telecom Decision CRTC 2025-225, in force since 4 November 2025,
            requires a provider to notify the Commission, Innovation, Science
            and Economic Development Canada and emergency management
            organisations within two hours of a major outage, and to file a
            report within fourteen days. <Cite id="CRTC-2025-225" /> It sets no
            backup-power requirement and no requirement to physically strengthen
            anything. <Cite id="CRTC-2025-225" /> Telecom Decision CRTC 2025-65,
            from February 2025, requires that 9-1-1 traffic be given priority on
            the network where that is technically feasible.{" "}
            <Cite id="CRTC-2025-65" />
          </p>
          <p>
            Guidance under an earlier Commission policy sets backup power of at
            least 24 hours for central office 9-1-1 switches and 72 hours for
            tandem switches. <Cite id="CRTC-2016-165" /> Those are the switching
            offices that route a 9-1-1 call, not the radio sites the call
            travels over. Both figures are guidance, and neither is binding.{" "}
            <Cite id="CRTC-2016-165" />
          </p>
        </Prose>
      ),
    },

    {
      title: "British Columbia has requested 72 hours of backup power",
      body: (
        <Prose>
          <p>
            On 28 November 2025 the Province of British Columbia filed its own
            submission in that proceeding. It asks the Commission to mandate a
            minimum of 72 hours of autonomous backup power at core and
            high-priority sites, 120 hours as best practice in remote areas,
            seismic-rated shelter foundations in high-risk zones, and annual
            stress testing including a “Massive Traffic Surge” scenario.{" "}
            <Cite id="BC-CRTC-SUB" /> It names “Seismic Events: High earthquake
            risk in southwestern BC” as one of four risk categories facing the
            province. <Cite id="BC-CRTC-SUB" />
          </p>
          <p>
            The submission is a request, not a rule. It does not describe what
            is in place today.
          </p>
          <p>
            E-Comm’s Lower Mainland centre is a 60,000 square foot reinforced
            concrete post-disaster building, “designed to resist an earthquake
            and to operate self-sufficiently for up to 72 hours”.{" "}
            <Cite id="ECOMM-FAC" /> This applies to the centre receiving the
            call, not the cabinets and towers carrying it.
          </p>
        </Prose>
      ),
    },

    {
      title: "Earthquake alerts depend on the mobile network",
      body: (
        <Prose>
          <p>
            Earthquake Early Warning has been live in British Columbia since
            spring 2024, delivered over the national public alerting system.{" "}
            <Cite id="NRCAN-EEW" /> BC Emergency Alert reaches a phone only over
            a live LTE cellular network. <Cite id="BC-ALERT-2026" />
          </p>
          <p>
            How much warning there is depends on how far away the earthquake
            starts. Natural Resources Canada, which runs the system, publishes
            only “seconds to tens-of-seconds” and says the number depends on
            distance. <Cite id="NRCAN-EEW-FAQ" /> It models named earthquakes
            instead, and Vancouver appears in three of them.
          </p>
          <DataTable
            caption="Each row is one modelled earthquake and the warning Vancouver would get from it."
            columns={["Modelled earthquake", "Warning for Vancouver"]}
            minWidth="32rem"
            rows={[
              [
                "Magnitude 9 Cascadia megathrust",
                <>
                  21 to 239 seconds, “due to the variation in possible ruptures
                  along the CSZ” <Cite id="NRCAN-EEW-CSZ-23" />
                </>,
              ],
              [
                "1946 magnitude 7.3 on central Vancouver Island",
                <>
                  About 40 seconds <Cite id="NRCAN-EEW-1946-21" />
                </>,
              ],
              [
                "2001 magnitude 6.8 Nisqually, in Washington State, 52 km deep",
                <>
                  30 seconds <Cite id="NRCAN-EEW-NISQ-26" />
                </>,
              ],
            ]}
          />
          <p>
            For a shallow earthquake directly under a city, the closest case it
            has modelled is Victoria, where near the epicentre “alerts would
            have very short warning times, or even arrive too late”.{" "}
            <Cite id="NRCAN-EEW-CHCH-23" /> Ground close to any epicentre falls
            in what it calls a late alert zone, where the alert arrives after
            the shaking starts. <Cite id="NRCAN-EEW" />
          </p>
          <VerificationNote label="Not a general figure">
            The City of Vancouver tells residents to expect “10 to 30 seconds of
            warning”. <Cite id="COV-EXPLORER-25" /> No scenario is attached to
            that range, and the numbers above each belong to one modelled
            earthquake. <Cite id="NRCAN-EEW-FAQ" />
          </VerificationNote>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        The network that survives the first hours is narrow, and what people
        send across it decides who else gets through.
      </>
    ),
    items: [
      <>
        <strong>Send a text message.</strong> The province names texts and
        low-bandwidth messages as the most reliable method when other services
        are disrupted. <Cite id="PEIRS" /> A short message keeps retrying in the
        background, while a voice call holds a channel open for its whole
        length.
      </>,
      <>
        <strong>Use 9-1-1 only for emergencies.</strong>{" "}
        After a magnitude 4.7 in 2015 E-Comm recorded a 1,500 per cent increase
        in 9-1-1 calls, and the vast majority of them were not emergencies.{" "}
        <Cite id="ECOMM-EQ" /> Each of those calls held a line somebody else
        needed.
      </>,
      <>
        <strong>Turn on emergency alerts, and expect the warning to be
        short.</strong>{" "}
        Earthquake Early Warning has been live in British Columbia since spring
        2024, <Cite id="NRCAN-EEW" /> and BC Emergency Alert reaches a phone
        over the same cellular network the earthquake is degrading.{" "}
        <Cite id="BC-ALERT-2026" /> Close to the epicentre the alert may arrive
        as the shaking begins. <Cite id="NRCAN-EEW" />
      </>,
    ],
    closing: <>These steps do not require buying anything in advance.</>,
  },
};
