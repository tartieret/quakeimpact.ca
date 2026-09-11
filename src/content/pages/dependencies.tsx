import { Cite } from "@/components/citation";
import { Prose, Quote, VerificationNote } from "@/components/page-parts";
import { DependencyGraphPlaceholder } from "@/components/dependency-graph";
import type { PageModule } from "./index";

/**
 * The dependency graph. The body of `/dependencies/`, ported from
 * `docs/copy/dependencies.md`.
 *
 * The drawn graph does not exist. `DependencyGraphPlaceholder` is a hatched
 * slot with the live edge list underneath it, generated from the `dependsOn`
 * entries in `src/content/site.ts`, and it stays until the picture is drawn.
 *
 * The edges in that list are the content model's, not the evidence's. The copy
 * says so where the section sits, and the closing section names the edges no
 * document stands behind, so a reader cannot take the list for a finding.
 */
export const dependencies: PageModule = {
  meta: {
    route: "/dependencies/",
    title: "Nothing fails alone",
    nav: "Dependency graph",
    kicker: "Why one failure becomes many",
    standfirst:
      "Every system on this site waits on at least one other. This page gathers those connections into one picture, says which of them a document stands behind, and says which are connections nobody has published.",
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
      "PREPAREDBC",
    ],
  },

  sections: [
    {
      title: "The province names one resource that everything else runs on",
      body: (
        <Prose>
          <p>
            The province’s own earthquake response strategy singles out fuel:
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
          <p>
            Every repair crew, every delivery and everything running on a
            generator sits downstream of that one sentence. Fuel moves by road,
            which puts roads underneath it in turn, and roads are where most of
            the published evidence on this page is.
          </p>
        </Prose>
      ),
    },

    {
      title: "The graph is not drawn yet, and these are the connections it would draw",
      body: (
        <div className="flex flex-col gap-8">
          <Prose>
            <p>
              The picture below is an empty slot. Underneath it is the list the
              drawn version would be built from: each system, and the systems its
              own page names as the ones it waits on.
            </p>
            <p>
              The list is not evidence. Some of those connections have a document
              behind them, and the rest of this page sets out which. Where there
              is no document, the connection is still listed, because leaving it
              out would suggest it had been ruled out rather than never written
              down.
            </p>
          </Prose>
          <DependencyGraphPlaceholder />
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
            The roads themselves are waiting on something. The province
            designates routes that must stay open for emergency vehicles after a
            major earthquake, and states in the same document that it is not
            retrofitting the bridges on those routes to stay in service.{" "}
            <Cite id="MOTI-SRDC-05" />
          </p>
          <p>
            Clearing them happens in a published order, and it is not the
            reader’s street first. Metro Vancouver’s regional debris plan puts
            lifeline routes first, then critical infrastructure, naming
            “hospitals, ambulance halls, police stations, EOCs, telecommunication
            sites, water sanitation sites, power generation and transmission
            sites”, then major freeways and arterials, and “local routes” last.{" "}
            <Cite id="MV-DEBRIS-17" />
          </p>
          <p>
            That order is the connection between roads and everything on the
            list. Four places where it has been measured:
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
            accessing any hospitals” on the roads it considers, a figure reached
            while assuming the major river crossings stay fully usable, which its
            authors name as one of the reasons their model is optimistic.{" "}
            <Cite id="KAUR-2026" />
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
            The province states the isolation in its own planning assumptions:
            “Large parts of the impacted and surrounding area will be inaccessible
            by road due to earthquake-induced landslides, liquefaction, and other
            secondary impacts such as bridge collapses, and will be further
            isolated due to damage to airports and marine ports.”{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            Its Cascadia assessment carries the consequence for help arriving:
            local search and rescue teams are overwhelmed, and resources from
            elsewhere in British Columbia, other provinces and the United States
            are delayed by widespread transportation and communication
            disruption. <Cite id="DCRRA-2025" /> The same document states the
            result in its own words: “Damage to transportation routes and the
            prioritization of essential personnel and supplies make mass evacuation
            impossible, and the public is directed to shelter in place.”{" "}
            <Cite id="DCRRA-2025" />
          </p>
          <p>
            So the road network sits under both directions of travel: what comes
            in, and who could leave.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Natural gas waits on people rather than on roads, and the rate is published",
      body: (
        <Prose>
          <p>
            Not every dependency is a road. Gas is the one utility that cannot be
            restored in bulk: service returns building by building, once a
            qualified person has been inside and relit every appliance. The
            regulator’s decision on that system gives several weeks to restore
            service to hundreds of thousands of customers.{" "}
            <Cite id="BCUC-C-6-25" />
          </p>
          <p>
            FortisBC’s own resiliency plan puts a rate on it. Its highest figure,
            8,716 relights per day, already assumes the utility’s entire
            workforce, mutual aid crews from other utilities and every available
            private contractor in the Lower Mainland. For outages too localised to
            attract mutual aid, the same plan uses 2,025 per day, and for
            community-sized ones 723 per day. <Cite id="FEI-RESILIENCY-24" />
          </p>
          <p>
            That is a dependency on how many qualified people can be got to the
            region, which is a different constraint from the ones above and moves
            on a different clock.
          </p>
        </Prose>
      ),
    },

    {
      title: "Several of the connections everyone assumes have never been published",
      body: (
        <Prose>
          <p>
            These are the edges on the list that no document stands behind. Each
            one is plausible and none of them is a finding.
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
            roads are being cleared, is not in any document this site has found.
          </VerificationNote>
          <VerificationNote label="Not published: how long road damage adds to power restoration">
            BC Hydro has published what it expects a large earthquake to do to
            supply downtown. <Cite id="BCH-WESTEND-25" /> Nothing published
            separates the part of that which is repairing equipment from the part
            which is crews reaching the work.
          </VerificationNote>
          <p>
            One connection in this group is documented, and it is documented as an
            absence. Nothing in Canada currently requires a mobile phone site to
            hold any backup power at all, and the regulator opened a proceeding in
            September 2025 to decide what that requirement should be.{" "}
            <Cite id="CRTC-2025-226" /> So the link from electricity to phones is
            real, and how long it takes to bite is set by nothing at present.
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        The coupling is also the argument for preparing at home. A household that
        can manage a while without water, power and a working toilet is not
        waiting to find out which of them comes back first.
      </>
    ),
    items: [
      <>
        <strong>Store four litres per person per day, pets included.</strong> That
        is the province’s own figure, for drinking and basic sanitation together.{" "}
        <Cite id="PREPAREDBC" /> Its Cascadia assessment says distributing bulk
        drinking water across the region stays difficult for the first four to
        five days. <Cite id="DCRRA-2025" />
      </>,
      // No citation, and none is missing: this bullet states no figure and rests
      // on no document. It is a thing to go and find out about your own home.
      <>
        <strong>Work out what in your home stops when the power does</strong>,
        including the heating and any gas appliance with an electric fan or
        control, and settle what to do about each one before you need to.
      </>,
      <>
        <strong>Expect your own street to be cleared late.</strong> The regional
        debris plan clears lifeline routes, critical infrastructure and major
        roads before local ones, which is a reasonable order and it is not a fast
        one for most addresses. <Cite id="MV-DEBRIS-17" />
      </>,
    ],
  },
};
