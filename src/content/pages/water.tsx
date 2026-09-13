import Link from "next/link";
import { Cite } from "@/components/citation";
import {
  Figure,
  Photograph,
  Prose,
  Quote,
  DataTable,
  VerificationNote,
} from "@/components/page-parts";
import {
  WaterFailureCounts,
  WaterTwoClocks,
} from "@/components/figures/water";
import type { PageModule } from "./index";

/**
 * Water. The body of `/after/water/`, ported from `docs/copy/water.md`.
 *
 * The words are the copy's, verbatim. Anything a reader sees that is not in
 * the copy file is furniture the copy does not write: the table caption below,
 * which names the table for a screen reader.
 */
export const water: PageModule = {
  meta: {
    route: "/after/water/",
    title: "Water",
    nav: "Water",
    kicker: "Life afterwards",
    standfirst: (
      <>
        Metro Vancouver’s own seismic assessment models 267 water main failures
        across the region in a magnitude 9.0 earthquake.{" "}
        <Cite id="MV-WATER-22" /> About 60 of them fall at the 71 points where
        mains cross under rivers and inlets, which are the hardest places in the
        system to reach. <Cite id="MV-WATER-22" />
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "MV-WATER-22",
      "MV-MGR-2021",
      "MV-DWMP-26",
      "GM-AAFC-19",
      "PEIRS",
      "DCRRA-2025",
      "CNW-PWERP-23",
      "MV-ANNACIS-TUNNEL",
      "MV-SNT-PAGE",
      "MV-STANLEY-TUNNEL",
      "MV-CAMBIE-FS",
      "MV-TUNNELS",
      "MV-WAT-2025-09",
      "MV-RESERVOIR-23",
      "PREPAREDBC",
    ],
  },

  sections: [
    {
      title: "A pipe under a road and a pipe under a river are different repairs",
      body: (
        <Prose>
          <Quote
            speaker="Lucas Pitts, director of policy, planning and analysis at the Greater Vancouver Water District, describing his own system"
            cite={<Cite id="MV-WATER-22" />}
          >
            <p>
              “It’s one thing for a pipe under the Lougheed Highway to leak. We
              can go dig that out, we can throw a patch on it, we can be out of
              there in four hours. But for a crossing under the Fraser River,
              obviously, if that breaks, to fix that takes a very long time.”
            </p>
          </Quote>
          <p>
            Where the breaks fall matters more than how many of them there are.
          </p>
          <Photograph
            id="christchurch-parkview-valve"
            caption={
              <>
                Parkview School, Christchurch, New Zealand, six days after the
                February 2011 earthquake. A worker at the bottom of a concrete
                shaft repairs earthquake damage to a valve on the school’s well,
                while a second person holds the ladder from above.
              </>
            }
          />
        </Prose>
      ),
    },

    {
      title:
        "267 main failures are modelled region-wide, and about 60 of them at river and inlet crossings",
      body: (
        <Prose>
          <p>
            Metro Vancouver commissioned the engineering firm WSP Canada to
            assess the seismic vulnerability of the regional water supply
            system. <Cite id="MV-MGR-2021" /> The study was published inside
            Metro Vancouver in February 2022. It reached the public two months
            later, when a heavily redacted copy released under
            freedom-of-information law was obtained by Glacier Media, which
            reported it in April 2022. Everything in this section comes through
            that reporting. <Cite id="MV-WATER-22" />
          </p>
          <p>Under a magnitude 9.0 megathrust, the offshore earthquake where one tectonic plate slips under another along hundreds of kilometres at once, the study modelled:</p>
          <ul>
            <li>
              <strong>267 water main failures</strong> across the region and its
              21 municipalities.
            </li>
            <li>
              <strong>22 water mains</strong> rated at high seismic
              vulnerability, running through the North Shore, Vancouver,
              Burnaby, New Westminster, the Tri-Cities, Maple Ridge, Richmond,
              Delta and Surrey.
            </li>
            <li>
              <strong>About 60 breaks across the 71 water crossings</strong>,
              including three to four in the hardest category, which is the
              Fraser River, the Pitt River, False Creek and Burrard Inlet.
            </li>
          </ul>
          <p>
            <Cite id="MV-WATER-22" />
          </p>
          <p>
            The 267 counts failures anywhere in the network, across the whole
            region. The 60 counts breaks at the 71 river and inlet crossings
            alone, the part of that total falling on the assets hardest to
            reach.
          </p>
          <Figure
            alt="Metro Vancouver models 267 water main failures across the region, and about 60 breaks at the 71 river and inlet crossings, which are counted separately rather than added together."
            caption={
              <>
                Two counts from the same study, kept apart. One mark is one
                failure in both panels. Three to four of the crossing breaks
                fall in the hardest category: the Fraser River, the Pitt River,
                False Creek and Burrard Inlet. <Cite id="MV-WATER-22" />
              </>
            }
          >
            <WaterFailureCounts />
          </Figure>
          <p>
            The figures come from a review of 123 existing reports on
            reservoirs, pump stations and pipelines rather than from a single
            model run. <Cite id="MV-WATER-22" /> They are more than eight and a
            half times the failures projected by the region’s previous study in
            1993. <Cite id="MV-WATER-22" /> The study is four years old.
          </p>
        </Prose>
      ),
    },

    {
      title: "Nobody has published how long the water would take to come back",
      body: (
        <Prose>
          <p>
            About two thirds of the roughly 300-page report is blacked out in
            the public version. Two of the withheld pieces are what a
            restoration estimate would be built from: the number of leaks and
            breaks per main, and the damage estimates for 21 water storage
            facilities. Both were removed under freedom-of-information
            exemptions. <Cite id="MV-WATER-22" />
          </p>
          <p>
            Metro Vancouver’s own Drinking Water Management Plan 2026, which is
            the region’s governing drinking water document, contains no
            restoration estimate of any kind. It names seismic risk as a core
            pressure, and the first action under its resilience strategy is to
            “increase the seismic resilience of the water system by conducting
            prioritized structural analysis to identify seismic
            vulnerabilities”. <Cite id="MV-DWMP-26" />
          </p>
          <p>In 2026, identifying the weak points is still work to be done.</p>
          <p>
            Metro Vancouver owns the transmission mains; the member
            municipalities own the pipes in the street. The plan’s third action
            commits to coordinating with those municipalities “to identify
            points of possible failure”, which says in the region’s own words
            that the joined-up picture across that seam has not been assembled
            yet. <Cite id="MV-DWMP-26" />
          </p>
          <VerificationNote label="Not a restoration estimate">
            A March 2018 case study by Agriculture and Agri-Food Canada found
            that drinking water disruption in the Vancouver area “could last
            several months”. It is a federal document written by an agriculture
            department rather than by the water utility, never published,
            obtained under freedom of information and reported by the Globe and
            Mail in 2019. “Several months” is a range word rather than a figure.
            The study is eight years old and predates the current tunnel and
            reservoir program. The other half of it has aged better: at the
            time, the province had put its plans for supplying potable water on
            hold pending an update from Metro Vancouver.{" "}
            <Cite id="GM-AAFC-19" />
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title:
        "The province expects water and sewer disruption to last many months",
      body: (
        <Prose>
          <p>
            “Disruption to water and wastewater systems are expected for many
            months following the event.” <Cite id="PEIRS" /> The sentence is
            qualitative, it covers sewers in the same breath as water, and it is
            region-wide rather than specific to any pipe. The province wrote it
            for its shallow crustal M7 planning scenario.
          </p>
          <p>
            The province’s Cascadia assessment states that “people are thirsty
            within 24 hours”, and that “distributing bulk potable water across
            the affected region remains challenging for the first four to five
            days”. <Cite id="DCRRA-2025" />
          </p>
          <Photograph
            id="christchurch-water-tanker"
            caption={
              <>
                Fisher Avenue, Beckenham, Christchurch, the day after the
                February 2011 earthquake. Residents fill buckets and jugs from a
                contractor’s water tanker parked at the kerb.
              </>
            }
          />
          <p>
            The four to five days are about trucking water to people; the many
            months is about repairing the network. Merging them would suggest
            water comes back in a week.
          </p>
          <Figure
            alt="Two clocks run at once: trucking bulk water to people is hard for the first four to five days, while repairing the network is expected to take many months with no published end date."
            caption={
              <>
                Two clocks, and they do not join up. The province gives the
                first one a length. <Cite id="DCRRA-2025" /> The second is the
                province’s “many months”, which is a range word rather than a
                figure, so the panel carries no scale to read a date off.{" "}
                <Cite id="PEIRS" />
              </>
            }
          >
            <WaterTwoClocks />
          </Figure>
          <Photograph
            id="kumamoto-temporary-pipe"
            caption={
              <>
                Akamizu, Aso, Japan, three weeks after the April 2016 Kumamoto
                earthquakes. A temporary pipe lies along the edge of the road,
                held down with sandbags.
              </>
            }
          />
        </Prose>
      ),
    },

    {
      title:
        "One municipality publishes numbers, and they do not carry across the region",
      body: (
        <Prose>
          <p>
            New Westminster’s potable water emergency response plan carries a
            damage and duration table in its earthquake annex: 200 to 300 breaks
            in a 475-year event, at “approximately 1-3 days per break”. It gives
            “weeks to months” for the loss of the regional supply through
            landslides. <Cite id="CNW-PWERP-23" />
          </p>
          <p>
            It covers New Westminster’s own distribution pipes and nobody
            else’s. Its scenarios are 1-in-100 and 1-in-475 year events, far
            below the level either scenario described here is built on, so the
            break counts do not transfer to them. The one to three days is how
            long a single break takes to repair, not how long the city waits:
            turning it into a restoration time needs a crew count the plan does
            not give. The weeks to months attaches to the regional supply being
            cut by landslides, not to those 200 to 300 breaks. And the table is
            a response plan’s planning assumption. No study produced it.
          </p>
          <p>Metro Vancouver has published nothing comparable.</p>
        </Prose>
      ),
    },

    {
      title:
      "Five deep tunnels are planned, and none of the three under way is finished",
      body: (
        <Prose>
          <p>
            Metro Vancouver is replacing its river and inlet crossings with deep
            bored tunnels “designed to ensure delivery of drinking water in the
            event of a major earthquake”. It says there are five, and its
            construction listing names four of them.{" "}
            <Cite id="MV-ANNACIS-TUNNEL" />
          </p>
          <DataTable
            caption="The four deep water supply tunnels Metro Vancouver’s construction listing names, and how far each has got."
            columns={["Tunnel", "Status"]}
            minWidth="30rem"
            rows={[
              [
                "Second Narrows",
                <>
                  30 m below the bottom of Burrard Inlet, about 1 km long;
                  expected complete in 2028 <Cite id="MV-SNT-PAGE" />
                </>,
              ],
              [
                "Annacis",
                <>
                  Started 2022, expected complete at the end of 2028{" "}
                  <Cite id="MV-ANNACIS-TUNNEL" />
                </>,
              ],
              [
                "Stanley Park",
                <>
                  Under construction, replacing a 1930s main{" "}
                  <Cite id="MV-STANLEY-TUNNEL" />
                </>,
              ],
              ["Cambie-Richmond", <>In design <Cite id="MV-CAMBIE-FS" /></>],
            ]}
          />
          <p>
            The Port Mann water supply tunnel, completed in 2017, was the first
            deep crossing of this kind in the region. <Cite id="MV-TUNNELS" />
          </p>
          <p>
            Metro Vancouver describes the new tunnels the same way each time, as
            meeting current seismic standards and as built so that water keeps
            flowing after a major earthquake. Those crossings are where about 60
            of the 267 failures fall, and they are the repairs that take
            longest.
          </p>
          <p>
            Elsewhere the work runs later. The seismic phase of the Palisade
            Lake outlet works is scheduled to start in the mid-2030s and finish
            in the early 2040s, timed so that draining the lake does not hit
            summer supply. <Cite id="MV-WAT-2025-09" /> As of 2023, four
            reservoirs built before the 1990s still needed upgrading.{" "}
            <Cite id="MV-RESERVOIR-23" />
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        People are thirsty within 24 hours, and trucking bulk water around the
        region is hard for the first four to five days. <Cite id="DCRRA-2025" />{" "}
        Stored water at home covers that gap.
      </>
    ),
    items: [
      <>
        <strong>Store four litres per person per day.</strong> That is the
        province’s own figure, for drinking and basic sanitation together.{" "}
        <Cite id="PREPAREDBC" /> The provincial earthquake guide says to
        multiply it by at least two weeks, and{" "}
        <Link
          href="/prepare/"
          className="text-accent underline underline-offset-2"
        >
          preparing
        </Link>{" "}
        sets out how to hold that much and what else to have ready.
      </>,
      <>
        <strong>Count pets as well as people.</strong> The provincial guide
        includes every pet in the household in the same calculation.{" "}
        <Cite id="PREPAREDBC" />
      </>,
      // No citation, and none is missing: this bullet claims nothing about
      // earthquakes and rests on no document. Every other bullet on the page
      // carries a marker, so the absence of one here is the visible
      // distinction the copy draws.
      <>
        <strong>Refill it on a schedule you will keep.</strong> Water stored
        years ago and forgotten about is water you have not got.
      </>,
    ],
  },
};
