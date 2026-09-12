import { Cite } from "@/components/citation";
import { Prose, Quote, VerificationNote } from "@/components/page-parts";
import { DependencyGraph } from "@/components/dependency-graph";
import type { PageModule } from "./index";

/**
 * The dependency graph. The body of `/dependencies/`, ported from
 * `docs/copy/dependencies.md`.
 *
 * `DependencyGraph` is the drawing with the live edge list underneath it,
 * generated from the `dependsOn` entries in `src/content/site.ts`. The drawing
 * joins no two systems with a line, because a line asserts a connection and
 * most of these connections are not established. It counts them instead, and
 * separates the six a document names from the twenty nobody has published.
 *
 * The edges in that list are the content model's, not the evidence's. The copy
 * says so where the section sits, and the closing section names the edges no
 * document stands behind, so a reader cannot take the list for a finding.
 *
 * Every section on the page is the copy verbatim.
 */
export const dependencies: PageModule = {
  meta: {
    route: "/dependencies/",
    title: "Nothing fails alone",
    nav: "Dependency graph",
    kicker: "Why one failure becomes many",
    standfirst:
      "Every system waits on at least one other. Some of those connections have a document behind them, and some are connections nobody has published.",
    /** First-cited order, which is the order the markers are numbered in. */
    references: [
      "PEIRS",
      "MOTI-SRDC-05",
      "MV-DEBRIS-17",
      "MV-WATER-22",
      "KAUR-2026",
      "AIR-2013",
      "RBT2-PANEL-20",
      "DCRRA-2025",
      "BCUC-C-6-25",
      "FEI-RESILIENCY-24",
      "MV-DWMP-26",
      "BCH-WESTEND-25",
      "CRTC-2025-226",
    ],
  },

  sections: [
    {
      title: "Everything else runs on fuel, and fuel moves by road",
      body: (
        <Prose>
          <p>
            Every repair crew, every delivery and everything running on a
            generator needs fuel. The province’s response strategy gives it a
            position of its own:
          </p>
          <Quote
            speaker="Province of British Columbia"
            source="Earthquake Immediate Response Strategy"
            cite={<Cite id="PEIRS" />}
          >
            <p>
              “Fuel also holds a unique position as a critical resource due to
              its requirement in the distribution of all other supplies, first
              responder activities, and enabling functionality of certain
              impacted facilities and infrastructure that rely on generators.”
            </p>
          </Quote>
          <p>Fuel moves by road, which puts roads underneath it in turn.</p>
        </Prose>
      ),
    },

    {
      title: "Few of the connections on this list have a document behind them",
      body: (
        <div className="flex flex-col gap-8">
          <Prose>
            <p>
              A line drawn between two systems asserts a connection whether or
              not anyone has established one, so the picture below counts the
              connections instead of joining them up. Underneath it is the list
              it is built from: each system, and the systems its own page names
              as the ones it waits on.
            </p>
            <p>
              The list is not evidence. Where there is no document, the
              connection is still listed, because leaving it out would suggest it
              had been ruled out rather than never written down.
            </p>
          </Prose>
          <DependencyGraph />
        </div>
      ),
    },

    {
      title: "Roads are the connection with the most documents behind them",
      body: (
        <Prose>
          <p>
            The province’s planning assumptions treat the road network as the
            thing that breaks everything else. “Road, rail, air, and marine
            transportation will be disrupted, and existing supply chains will be
            inoperable.” <Cite id="PEIRS" /> In its shallow magnitude 7.0
            scenario it expects routes “damaged or only partially functional and
            operating at a much-reduced capacity for an extended period (weeks to
            months)”. <Cite id="PEIRS" />
          </p>
          <p>
            The province designates routes that must stay open for emergency
            vehicles after a major earthquake, and states in the same document
            that it is not retrofitting the bridges on those routes to stay in
            service. <Cite id="MOTI-SRDC-05" />
          </p>
          <p>
            Clearing them happens in a published order. Metro Vancouver’s
            regional debris plan puts lifeline routes first, then critical
            infrastructure, naming “hospitals, ambulance halls, police stations,
            EOCs, telecommunication
            sites, water sanitation sites, power generation and transmission
            sites”, then major freeways and arterials, and “local routes” last.{" "}
            <Cite id="MV-DEBRIS-17" />
          </p>
          <p>
            That order is the connection between roads and everything else on
            the list.
          </p>
          <p>
            <strong>Water.</strong> A magnitude 9.0 megathrust is modelled to
            cause 267 water main failures across Metro Vancouver’s network, with
            about 60 of them at the 71 points where mains cross under rivers and
            inlets. <Cite id="MV-WATER-22" /> A crew has to reach each one, and
            the clearing order above decides when.
          </p>
          <p>
            <strong>Hospitals.</strong> A 2026 study modelling the magnitude 9.0
            Cascadia scenario found that “due to disruptions on the road network
            from inaccessible bridges, 54,339 people are entirely isolated from
            accessing any hospitals” on the roads it considers.{" "}
            <Cite id="KAUR-2026" /> That figure assumes the major river crossings
            stay fully usable, which its authors name as one of the reasons their
            model is optimistic. <Cite id="KAUR-2026" />
          </p>
          <p>
            <strong>The airport.</strong> Modelling of a magnitude 9.0 found that
            road access to Vancouver International Airport “is expected to be cut
            off during the first few critical days after the earthquake, because
            all of the bridges leading to it are impacted”. <Cite id="AIR-2013" />{" "}
            The province adds that liquefaction of roadways in Richmond and Delta
            may make driving difficult, which “may compound impacts to Vancouver
            International Airport and Tsawwassen Ferry Terminal”.{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            <strong>A port terminal.</strong> The federal review panel for Roberts
            Bank Terminal 2 found that earthquake damage during operations could
            go as far as “loss of main road access to the terminal due to failure
            of the existing causeway”, while judging collapse of the terminal
            structures unlikely. <Cite id="RBT2-PANEL-20" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Help from outside arrives along the same damaged routes",
      body: (
        <Prose>
          <p>
            The province’s planning assumptions expect the region to be cut off
            by road, by air and by sea at once: “Large parts of the impacted and
            surrounding area will be inaccessible by road due to
            earthquake-induced landslides, liquefaction, and other secondary
            impacts such as bridge collapses, and will be further
            isolated due to damage to airports and marine ports.”{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            Local search and rescue teams are overwhelmed, and resources from
            elsewhere in British Columbia, other provinces and the United States
            are delayed by widespread transportation and communication
            disruption. <Cite id="DCRRA-2025" /> The province’s own Cascadia
            assessment draws the conclusion: “Damage to transportation routes
            and the prioritization of essential personnel and supplies make mass
            evacuation impossible, and the public is directed to shelter in
            place.” <Cite id="DCRRA-2025" />
          </p>
          <p>
            The road network sits under both directions of travel: what comes
            in, and who could leave.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Gas comes back one building at a time, as fast as qualified people can be found",
      body: (
        <Prose>
          <p>
            Gas is the one utility that cannot be restored in bulk: service
            returns building by building, once a qualified person has been inside
            and relit every appliance. The regulator’s decision on that system
            gives several weeks to restore service to hundreds of thousands of
            customers. <Cite id="BCUC-C-6-25" />
          </p>
          <p>
            FortisBC’s own resiliency plan puts its highest figure at 8,716
            relights per day, and that already assumes the utility’s entire
            workforce, mutual aid crews from other utilities and every available
            private contractor in the Lower Mainland. For outages too localised to
            attract mutual aid, the same plan uses 2,025 per day, and for
            community-sized ones 723 per day. <Cite id="FEI-RESILIENCY-24" />
          </p>
          <p>
            The constraint here is people, and how many of them can be got into
            the region.
          </p>
        </Prose>
      ),
    },

    {
      title: "Several of the connections everyone assumes have never been published",
      body: (
        <Prose>
          <p>
            The edges below have no document behind them. Each one is plausible
            and none of them is a finding.
          </p>
          <VerificationNote label="Not published: water and electricity">
            A pump needs power, and water reaches the upper floors of a tall
            building by being pumped. No published assessment says how much of the
            region’s water distribution depends on powered pumping after an
            earthquake, or what losing that power would add to a restoration time.
            Metro Vancouver’s governing drinking water plan carries no restoration
            estimate at all, and lists the analysis that would identify the
            system’s seismic weak points as work still to do.{" "}
            <Cite id="MV-DWMP-26" />
          </VerificationNote>
          <VerificationNote label="Not published: hospital generators and the fuel they run on">
            How long any existing Lower Mainland hospital can run on its own
            generators, and how the fuel for them would be replaced while the
            roads are being cleared, has not been published.
          </VerificationNote>
          <VerificationNote label="Not published: how long road damage adds to power restoration">
            BC Hydro has published what it expects a large earthquake to do to
            supply downtown. <Cite id="BCH-WESTEND-25" /> Nothing published
            separates the part of that which is repairing equipment from the part
            which is crews reaching the work.
          </VerificationNote>
          <p>
            One of these is documented, and what is documented is an absence.
            Nothing in Canada currently requires a mobile phone site to hold any
            backup power at all, and the regulator opened a proceeding in
            September 2025 to decide what that requirement should be.{" "}
            <Cite id="CRTC-2025-226" /> The link from electricity to phones is
            real. Nothing at present sets how long it takes to bite.
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        A household that can manage a while without water, power and a working
        toilet is not waiting to find out which of them comes back first.
      </>
    ),
    items: [
      <>
        <strong>Expect your own street to be cleared late.</strong> The regional
        debris plan clears lifeline routes, critical infrastructure and major
        roads before local ones. <Cite id="MV-DEBRIS-17" /> For most addresses
        that is a long way down the list.
      </>,
      <>
        <strong>Expect the gas to come back building by building.</strong>{" "}
        Service returns only once a qualified person has been inside and relit
        every appliance, and the regulator’s decision on that system gives
        several weeks to restore hundreds of thousands of customers.{" "}
        <Cite id="BCUC-C-6-25" /> Settle what your household would do for heat
        and hot water over that period.
      </>,
      <>
        <strong>Do not build a plan that needs a phone call.</strong> Nothing in
        Canada currently requires a mobile phone site to hold any backup power at
        all, and the regulator opened a proceeding in September 2025 to decide
        what that requirement should be. <Cite id="CRTC-2025-226" />
      </>,
    ],
  },
};
