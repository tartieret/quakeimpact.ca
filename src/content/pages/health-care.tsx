import Link from "next/link";
import { Cite } from "@/components/citation";
import {
  Photograph,
  Prose,
  Quote,
  DataTable,
  VerificationNote,
} from "@/components/page-parts";
import type { PageModule } from "./index";

const link = "text-accent underline underline-offset-2";

/**
 * Health care. The body of `/after/health-care/`, ported from
 * `docs/copy/health-care.md`.
 *
 * The words are the copy's, verbatim. Anything a reader sees that is not in
 * the copy file is furniture the copy does not write: the table caption below,
 * which names the table for a screen reader, and the speaker lines on the two
 * quotations, which the copy writes as the sentence before each block.
 */
export const healthCare: PageModule = {
  meta: {
    route: "/after/health-care/",
    title: "Health care",
    description:
      "A study of one health authority’s buildings finds about 65 per cent likely to be completely damaged at the earthquake level used by the current building code.",
    nav: "Health care",
    kicker: "Life afterwards",
    standfirst: (
      <>
        A study of one health authority’s 127 buildings finds about 65 per cent
        likely to be completely damaged at the earthquake level used by the current
        building code. <Cite id="DCRRA-APPC" /> No government or health authority
        has compared the province’s casualty estimates with the region’s
        hospital capacity. Only peer-reviewed engineering work has done so.
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "DCRRA-APPC",
      "PEIRS",
      "DCRRA-2025",
      "VBBL-2025",
      "NSH-SPEC",
      "NSP-SPEC",
      "KAUR-2026",
      "HEMBC-MCI",
      "MITRA-2020",
      "RCH-SPEC",
      "BCGOV-RICH-2016",
      "BCGOV-LGH-2018",
      "BCGOV-RICH-2024",
    ],
  },

  sections: [
    {
      title: "Injured people arrive within hours",
      body: (
        <Prose>
          <p>
            For a magnitude 7.0 earthquake under Greater Vancouver on a weekday
            afternoon, the province’s earthquake immediate response plan
            forecasts 1,000 people
            critically injured, 6,500 needing hospital care that is not
            critical, and 21,000 needing paramedics or first aid, from damage to
            buildings alone. <Cite id="PEIRS" /> The province excludes injuries
            from fires, landslides, vehicle collisions and falls, so those
            counts do not cover everything that would send a person to a
            hospital. <Cite id="PEIRS" /> The same plan says first responders
            and medical facilities would be overwhelmed. <Cite id="PEIRS" />
          </p>
          <p>
            Hospitals are hindered as well by “thousands of uninjured,
            distraught people … looking for loved ones and seeking shelter”.{" "}
            <Cite id="DCRRA-2025" />
          </p>
        </Prose>
      ),
    },

    {
      title: "A standing hospital may not be operational",
      body: (
        <Prose>
          <p>
            A building can come through the shaking and stop being a hospital.
            The frame holds and the things fixed to it do not: the ceilings, the
            ductwork, the pipes overhead, the fittings that hold equipment in
            place. Damage to any of those, which engineers call non-structural
            damage, closes a department in a building that did not fall down.
          </p>
          <Photograph
            id="kumamoto-city-hospital-tents"
            caption={
              <>
                Kumamoto City Hospital, damaged in the April 2016 Kumamoto
                earthquakes, three days after the main shock. Tents with chairs
                have been set up by its entrance.
              </>
            }
          />
          <p>
            A case study for the province sorted all 127 buildings owned by
            Vancouver Coastal Health by the era they were built in.{" "}
            <Cite id="DCRRA-APPC" />
          </p>
          <DataTable
            caption="Vancouver Coastal Health’s 127 buildings, counted by the era they were built in."
            columns={["Construction era", "Category", "Buildings"]}
            minWidth="28rem"
            rows={[
              ["Pre-1970", "Pre-code", "32"],
              ["1970–1991", "Low-code", "51"],
              ["1992–2005", "Moderate-code", "27"],
              ["Post-2006", "High-code", "17"],
            ]}
            note={<Cite id="DCRRA-APPC" />}
          />
          <Quote
            speaker="The case study, in the province’s Cascadia resilience assessment"
            source="Seismic resilience of B.C.’s hospital infrastructure"
            cite={<Cite id="DCRRA-APPC" />}
          >
            <p>
              “Around 65% of VCH buildings (pre-code and low-code buildings) are
              likely to experience complete damage due to shaking corresponding
              to the design ground motion currently used in the 2020 National
              Building Code of Canada. If VCH buildings were to experience
              current design ground motion intensities, the majority of
              buildings would experience damage that would compromise hospital
              functionality.”
            </p>
          </Quote>
          <p>
            That 65 per cent is one health authority’s buildings, not the
            region’s. It counts buildings expected to be completely damaged at a
            single design ground motion, which is a statement about a portfolio
            and not a forecast for any particular earthquake. The method takes
            the year a building went up as a stand-in for how it would perform,
            and its authors say reliable results need a detailed engineering
            assessment of each building. <Cite id="DCRRA-APPC" /> It says nothing
            about whether any particular hospital would collapse.
          </p>
        </Prose>
      ),
    },

    {
      title: "Backup systems depend on stored fuel and water",
      body: (
        <Prose>
          <p>
            When the{" "}
            <Link href="/after/electricity/" className={link}>
              power
            </Link>{" "}
            goes, the generator carries the building, and the generator burns{" "}
            <Link href="/after/fuel/" className={link}>
              fuel
            </Link>{" "}
            that arrives by truck. Once the{" "}
            <Link href="/after/water/" className={link}>
              water
            </Link>{" "}
            held in the building is gone, more of it has to be delivered the
            same way.
          </p>
          <p>
            The Vancouver Building By-law sets emergency power run times for
            getting people out of a building safely: not less than two hours for
            elevators in tall buildings, for equipment supplying water to fight
            a fire and for smoke-control fans, and between thirty minutes and
            two hours for lighting. <Cite id="VBBL-2025" /> For hospitals the
            by-law points elsewhere, to CSA Z32, the standard for essential
            electrical systems in health care facilities, which CSA sells rather
            than publishes. <Cite id="VBBL-2025" />
          </p>
          <p>
            The project agreements for the new Surrey hospital and the new St.
            Paul’s each require, in identical terms, 72 hours of
            self-sufficiency for fuel, water and sanitary holding, which is
            wastewater kept on site. <Cite id="NSH-SPEC" />{" "}
            <Cite id="NSP-SPEC" /> Neither hospital has opened.
          </p>
          <VerificationNote label="Not published for existing hospitals">
            Nothing published for the hospitals open today says how long a
            generator can run, how much fuel is held on site, or how much water
            is stored.
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title: "Road damage can cut off hospital access",
      body: (
        <Prose>
          <p>
            Three engineers at UBC published a study in April 2026 modelling how
            a magnitude 9.0 Cascadia earthquake would affect people’s ability to
            reach the 16 Metro Vancouver hospitals that have emergency
            departments, counting damage to the hospitals and damage to the
            roads together. <Cite id="KAUR-2026" />
          </p>
          <p>
            In the City of Vancouver the study’s measure of how well people can
            reach emergency care falls from about 0.9 before the earthquake to
            about 0.3 after it, mostly because of damage to the hospitals rather
            than to the roads. <Cite id="KAUR-2026" /> Across the region the
            model leaves 54,339 people unable to reach any hospital on the roads
            it considers, because the bridges they would cross are out, and
            retrofitting those bridges inside the model cuts that to under
            27,000. <Cite id="KAUR-2026" /> The bridges themselves are on{" "}
            <Link href="/after/transportation/" className={link}>
              the roads
            </Link>
            .
          </p>
          <p>
            The model excludes non-structural damage, utility failures and staff
            who cannot get to work, and its authors say this leaves it “likely
            overestimating post-earthquake hospital functionality and
            underestimating accessibility loss”. <Cite id="KAUR-2026" /> It also
            assumes the major river crossings stay open and that everyone drives
            on free-flowing roads. <Cite id="KAUR-2026" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Expected casualties have not been compared with bed capacity",
      body: (
        <Prose>
          <p>
            The Mass Casualty Incident Framework for British Columbia Hospitals,
            published by the Provincial Health Services Authority in January
            2026, is the official document for this question and it does not
            answer it. <Cite id="HEMBC-MCI" /> It standardises how hospitals
            respond to a mass casualty incident, and the words earthquake,
            seismic, Cascadia and post-disaster do not appear in it. Its one
            quantified surge figure, that 10 to 20 per cent of a hospital’s beds
            could be freed up quickly by moving patients, is drawn from
            published literature rather than measured in British Columbia
            hospitals. <Cite id="HEMBC-MCI" />
          </p>
          <p>
            The capacity figures that are public are academic. The 2026 study
            carries a table of acute care beds for its 16 hospitals and labels
            them “Assumed”: the authors compiled them from public
            health-authority pages, they count acute care beds rather than
            intensive care or emergency department beds, and the hospitals are
            anonymised by city. <Cite id="KAUR-2026" /> The only per-hospital
            intensive care counts in public come from a 2020 medical journal
            case series covering the six hospitals designated as COVID-19
            centres, which is not an inventory of the region.{" "}
            <Cite id="MITRA-2020" />
          </p>
          <VerificationNote label="No official comparison">
            No government or health authority has put the expected casualty load
            beside the region’s care capacity, and no official inventory of
            intensive care or operating room beds is published for British
            Columbia. The official figures that exist are counts attached to
            individual building projects rather than a list of what the region
            has. Peer-reviewed engineering work has made the comparison.{" "}
            <Cite id="KAUR-2026" />
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title: "New hospitals meet a higher seismic standard",
      body: (
        <Prose>
          <Quote
            speaker="The province’s earthquake immediate response plan"
            cite={<Cite id="PEIRS" />}
          >
            <p>
              “St. Paul’s Hospital in downtown Vancouver is an older building
              with masonry elements and may be significantly impacted by a large
              seismic event. Other hospitals in this region, including Vancouver
              General, UBC Hospital, and Lion’s Gate Hospital, are likely to see
              increased demand as a result.”
            </p>
          </Quote>
          <p>
            That describes the St. Paul’s on Burrard Street. Its replacement on
            Station Street is built to the Vancouver Building By-law’s
            post-disaster requirement. <Cite id="NSP-SPEC" /> How many patients the other three could take
            is not in the plan.
          </p>
          <p>
            Three major projects are specified to post-disaster importance
            category, the code’s term for a building expected to keep working
            after an earthquake rather than only to stay standing: the new
            Surrey hospital and BC Cancer Centre <Cite id="NSH-SPEC" />, the new
            St. Paul’s <Cite id="NSP-SPEC" /> and phase two of Royal Columbian
            Hospital. <Cite id="RCH-SPEC" /> At Royal Columbian the acute care
            tower is post-disaster and the support building beside it is
            specified as normal importance category. <Cite id="RCH-SPEC" /> The
            standard is applied where care is delivered. A hospital is a group
            of buildings, and they are not all rated the same.
          </p>
          <p>
            The new St. Paul’s also carries the only published number for how
            long a Lower Mainland hospital would be out of service, a median
            repair time of 30 days or less at the 1-in-2,475-year earthquake,
            which is the shaking the current building code designs against.{" "}
            <Cite id="NSP-SPEC" /> It is a target in a contract for a building
            that has not opened.
          </p>
          <p>
            Richmond Hospital <Cite id="BCGOV-RICH-2016" /> and Lions Gate
            Hospital <Cite id="BCGOV-LGH-2018" /> predate current seismic
            standards. Richmond’s redevelopment is funded and under way in
            phases.{" "}
            <Cite id="BCGOV-RICH-2024" />
          </p>
          <p>
            The seismic ratings for the region’s hospital buildings do exist,
            held in a British Columbia Health Seismic Database maintained by the
            engineering firm Bush, Bohlman & Partners and used by the 2026 study
            under data-sharing arrangements with two health authorities.{" "}
            <Cite id="KAUR-2026" /> It is not published.
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        Hospitals are hindered by thousands of uninjured people arriving to look
        for family and to shelter. <Cite id="DCRRA-2025" /> A household that has
        already settled where it meets is not among them.
      </>
    ),
    items: [
      // No citation, and none is missing: this bullet rests on the mechanism
      // the sentence above it cites, and claims nothing of its own.
      <>
        <strong>Agree a meeting place now, while nobody needs it.</strong> A
        household that can find each other has no reason to check the emergency
        departments.
      </>,
      <>
        <strong>Make the check-in person someone outside the region.</strong>{" "}
        Where phone service is available at all, networks “may be congested or
        overloaded”. <Cite id="PEIRS" /> What happens to the network is on{" "}
        <Link href="/after/communications/" className={link}>
          communications
        </Link>
        .
      </>,
      <>
        <strong>Sort out the medicines and equipment that cannot lapse.</strong>{" "}
        A pharmacist or a clinician can tell you what a longer supply looks like
        for you, and what to do about a device that runs on mains power.
      </>,
    ],
  },
};
