import Link from "next/link";
import { Cite } from "@/components/citation";
import {
  Photograph,
  Prose,
  Quote,
  VerificationNote,
} from "@/components/page-parts";
import type { PageModule } from "./index";

const link = "text-accent underline underline-offset-2";

/**
 * Port, airport and ferry terminals. The body of
 * `/after/large-infrastructure/`, ported from
 * `docs/copy/large-infrastructure.md`.
 *
 * The words are the copy's, verbatim. The page carries no figure and no table.
 * Every quantity on it comes from one licence-restricted study
 * (`AIR-2013`), whose register entry allows short attributed quotation and
 * forbids reproducing its tables, figures and maps, so there is nothing here
 * that can honestly be drawn or tabulated.
 */
export const largeInfrastructure: PageModule = {
  meta: {
    route: "/after/large-infrastructure/",
    title: "Port, airport and ferry terminals",
    nav: "Port, airport and ferries",
    kicker: "Life afterwards",
    standfirst: (
      <>
        Goods and people reach this region through a small number of very large
        places, and there is no local substitute for any of them. Modelling of a
        magnitude 9 megathrust expects road access to Vancouver International
        Airport to be cut for the first few critical days, because every bridge
        leading to it is damaged, and service at some Vancouver-area ports
        disrupted for one to two weeks. <Cite id="AIR-2013" />
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "AIR-2013",
      "PEIRS",
      "VFPA-SEASPAN-19",
      "RMS-KOBE",
      "BCF-HSB",
      "BCF-FMU-23",
      "RBT2-NRCAN-19",
      "RBT2-PANEL-20",
      "RBT2-CVS-19",
    ],
  },

  sections: [
    {
      title:
        "Modelling of a megathrust expects road access to the airport cut for the first few days, because every bridge onto Sea Island is damaged",
      body: (
        <Prose>
          <p>
            Vancouver International Airport sits on Sea Island, in the mouth of
            the Fraser. Everything that drives to it crosses a bridge.
          </p>
          <p>
            Modelling of a magnitude 9 megathrust, run for the insurance
            industry in 2013, expects road access to the airport to be cut off
            during the first few critical days after the earthquake, because all
            of the bridges leading to it are damaged. The Arthur Laing Bridge,
            the main connection between the airport and the city, is expected to
            suffer moderate damage, may need to be closed for a few days for
            inspection and initial repair, and may take a few weeks to restore
            fully. The Canada Line rail service to the airport is likely to be
            disrupted as well. <Cite id="AIR-2013" /> Those bridges are the same
            story as every other crossing in the region, which is{" "}
            <Link href="/after/transportation/" className={link}>
              transportation
            </Link>
            .
          </p>
          <p>
            The runways are the second problem. Sea Island is at moderate risk
            of liquefaction, saturated soil losing its strength and behaving
            like a liquid while the ground shakes, and that is the likely source
            of damage to the runways. Areas of tarmac are expected to be
            moderately damaged, with minor settlement or heaving of the surface,
            and some sections of runway may be out of service for a few days.{" "}
            <Cite id="AIR-2013" />
          </p>
          <p>
            The buildings come third. Terminals, towers and hangars are expected
            to sustain “slight to moderate damage”, and some masonry structures
            may take a few months to restore. Airport infrastructure loss across
            the region is put at more than $300 million. <Cite id="AIR-2013" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The harbour ports come off a grade better than the ports on the delta",
      body: (
        <Prose>
          <p>
            Vancouver Harbour comes out at slight damage: minor ground
            settlement, minor cracks in the piles, cracks on the wharf surface.
            Unanchored cranes may derail or go out of alignment and need minor
            repair before working again; anchored equipment is expected to stay
            functional. <Cite id="AIR-2013" />
          </p>
          <p>
            The ports near Richmond, Delta and Surrey come out at moderate
            damage, from liquefaction: considerable settlement and cracking of
            piles, notable derailment of cranes, and wall cracking in port
            buildings. Annacis Island and North Delta are where the liquefaction
            damage is particularly notable. <Cite id="AIR-2013" />
          </p>
          <p>
            One damage grade separates them, and what it grades is the ground,
            not the terminals. Service in some Vancouver-area ports may be
            disrupted for one to two weeks. <Cite id="AIR-2013" /> Approximately
            $647 million a day in cargo moves through the Port of Vancouver.{" "}
            <Cite id="PEIRS" /> A container crane is an electric machine, so a
            terminal that has realigned its cranes is still waiting on{" "}
            <Link href="/after/electricity/" className={link}>
              electricity
            </Link>
            .
          </p>
          <p>
            The harbour’s better grade belongs to a regional model, and it does
            not clear every facility on that shoreline. A geotechnical
            memorandum filed with the port authority for Seaspan’s Vancouver
            Shipyards, on the north shore of Burrard Inlet, finds the site
            underlain by loose sands prone to liquefaction and to large
            displacements in earthquakes with return periods below those current
            building codes recommend. <Cite id="VFPA-SEASPAN-19" /> On what
            stands there now:
          </p>
          <Quote
            speaker="Westmar Advisors, for Seaspan"
            source="Seismic Considerations memorandum filed with the Vancouver Fraser Port Authority"
            cite={<Cite id="VFPA-SEASPAN-19" />}
          >
            <p>
              “it is Westmar’s understanding that most existing facilities at
              the site are likely not designed to withstand kinematic loads and
              soil flow loads due to liquefaction of surrounding soil.”
            </p>
          </Quote>
          <p>
            That is an engineer reporting what the owner understands, not an
            inspection finding, and it covers one industrial boat basin, not the
            harbour.
          </p>
        </Prose>
      ),
    },

    {
      title: "A port can be repaired and still not get its traffic back",
      body: (
        <Prose>
          <p>
            A retrospective of the 1995 earthquake in Kobe, Japan, records that
            the port, “Japan’s leading container shipping port, was heavily
            damaged and repairs took almost a year to complete”. It also records
            that while the city’s economy had largely recovered by 1999, “one
            notable exception is the Port of Kobe which permanently lost
            container shipping business to other Asian ports”.{" "}
            <Cite id="RMS-KOBE" /> Kobe is an illustration, and it forecasts
            nothing here.
          </p>
          <Photograph
            id="kobe-rokko-island-quay"
            caption={
              <>
                Rokko Island, Kobe, 1995. The quay has split along its whole
                length: the strip of apron carrying the crane rails has dropped
                away from the rest of the yard, and the crane standing on it is
                out of line. Rokko Island is an artificial island, built out
                into the bay on fill. Nothing about how far any of this moved,
                or how long it took to put right, transfers to a terminal on the
                Fraser delta.
              </>
            }
          />
          <Photograph
            id="kobe-port-island-crane"
            caption={
              <>
                The same earthquake, a container terminal on Port Island. The
                apron has torn open and a gantry crane has come down across the
                quay. Repairs to the port took almost a year, and the traffic
                did not come back with them. <Cite id="RMS-KOBE" />
              </>
            }
          />
        </Prose>
      ),
    },

    {
      title:
        "The ferry terminal on the delta is the one with no published seismic assessment",
      body: (
        <Prose>
          <p>
            BC Ferries’ renewal program at Horseshoe Bay includes improving
            seismic safety across all three berths. <Cite id="BCF-HSB" />{" "}
            Horseshoe Bay sits on rock at the mouth of Howe Sound; Tsawwassen
            sits on the Fraser delta.
          </p>
          <VerificationNote label="Not located">
            No seismic assessment of the Tsawwassen ferry terminal has been
            published, and no seismic work on it has been announced, either in
            BC Ferries’ capital filings with its regulator or in its own project
            listings. That is a statement about the public record. Nothing in it
            says the terminal on the delta is in worse condition than the one on
            rock.
          </VerificationNote>
          <p>
            The one Lower Mainland ferry facility whose operator says in writing
            that it falls short is not a terminal. In a regulatory filing, BC
            Ferries describes its Fleet Maintenance Unit in Richmond, where the
            fleet is serviced, as having buildings “with a wide range of
            structural, seismic and hazardous-material deficiencies” and as “a
            facility site that does not meet current seismic codes and is
            susceptible to inundation during future sea level rise”.{" "}
            <Cite id="BCF-FMU-23" /> That is a yard, not a berth. It is on the
            delta, and it is where the vessels get fixed.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Nobody has published an assessment of the terminals that are working today",
      body: (
        <Prose>
          <p>
            None of the figures above comes from anyone inspecting a wharf, a
            crane or a runway. They are the output of a catastrophe model, a computer simulation
            insurers use to estimate what an event would cost, which
            AIR Worldwide ran in 2013 for the Insurance Bureau of Canada,
            against the infrastructure as it stood then. <Cite id="AIR-2013" />{" "}
            No operator, regulator or engineer has published an assessment of
            the terminals, container cranes, pile-supported wharves or runways
            that are in use.
          </p>
          <p>
            The one local marine facility with a published federal seismic
            review is the one that has not been built. Natural Resources Canada
            reviewed the seismic design of Roberts Bank Terminal 2 and published
            its review. <Cite id="RBT2-NRCAN-19" /> The review panel for the
            same project listed the mechanism: seismic activity could affect it
            through “shaking damage of buildings, cranes, wharves and the
            causeway overpass”, including “loss of main road access to the
            terminal due to failure of the existing causeway”.{" "}
            <Cite id="RBT2-PANEL-20" /> The way in is the weak point there too.
          </p>
          <p>
            A consulting engineer’s curriculum vitae, filed with that same
            panel, records seismic and liquefaction assessment work on the
            Deltaport Berth 3 expansion. <Cite id="RBT2-CVS-19" /> The findings were
            not published.
          </p>
          <VerificationNote label="Not an engineering assessment">
            Every duration on this page for the port and the airport comes from
            that one model run, against the infrastructure as it stood thirteen
            years ago. <Cite id="AIR-2013" /> The band rests on it, and on
            nothing that inspected a wharf.
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title: "Nothing has been published about a shallow crustal earthquake here",
      body: (
        <Prose>
          <p>
            The band for the megathrust rests on that one study, and the study
            modelled the magnitude 9 megathrust and nothing else.{" "}
            <Cite id="AIR-2013" /> What the port, the airport and the ferry
            terminals would face in a shallow crustal earthquake close to the
            city has not been published by anyone. So the crustal earthquake
            carries no band on this page, because there is nothing to band, and
            that is a statement about the public record rather than about the
            nearer earthquake being gentler.
          </p>
          <p>
            The province’s crustal planning scenario does name two of them, as
            exposure and not as damage: “Liquefaction of roadways in Richmond
            and Delta may make driving difficult, which may compound impacts to
            Vancouver International Airport and Tsawwassen Ferry Terminal.”{" "}
            <Cite id="PEIRS" /> That says the roads to both run over
            ground that can liquefy. It says nothing about either facility, and
            nothing about how long either would be out.
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        The one published model puts some port service out for one to two weeks,
        and road access to the airport out for the first few critical days.{" "}
        <Cite id="AIR-2013" /> What a household can do about that is decide in
        advance not to depend on either.
      </>
    ),
    items: [
      // No citation, and none is missing: this bullet claims nothing about
      // earthquakes and rests on no document. It restates the page's own
      // sourced findings as a decision the reader makes in advance.
      <>
        <strong>
          Do not build a plan around flying out, sailing out, or someone
          arriving that way to help in the first days.
        </strong>{" "}
        Goods and people reach this region through a small number of very large
        places, and there is no local substitute for any of them.
      </>,
      <>
        <strong>
          Plan household supplies for a stretch when nothing is arriving
        </strong>
        , rather than for a stretch when the shops are busy. What reaches a shop
        and what reaches a fuel pump both come through these places, and{" "}
        <Link href="/after/food/" className={link}>
          food
        </Link>{" "}
        and{" "}
        <Link href="/after/fuel/" className={link}>
          fuel
        </Link>{" "}
        set out what the province expects of each.
      </>,
    ],
    closing: (
      <>
        Nothing here is a repair a household can make. What is in reach is
        planning the days afterwards without the way in or the way out.
      </>
    ),
  },
};
