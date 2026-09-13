import Link from "next/link";
import { Cite } from "@/components/citation";
import {
  Figure,
  Prose,
  Callout,
  Quote,
  VerificationNote,
} from "@/components/page-parts";
import {
  ClearingOrder,
  Reopening2021,
} from "@/components/figures/getting-around";
import {
  CrossingsLicence,
  CrossingsMap,
} from "@/components/figures/crossings-map";
import { CROSSINGS_FACTS } from "@/content/crossings";
import type { PageModule } from "./index";

/**
 * Getting around. The body of `/getting-around/`, ported from
 * `docs/copy/getting-around.md`.
 *
 * The words are the copy's, verbatim, including the punctuation inside the two
 * provincial quotations. Anything a reader sees that the copy does not write is
 * furniture: the speaker and document lines under each quotation, and the label
 * on the set-apart block of map facts.
 *
 * The crossings map here is not the slot this page used to carry. That one
 * promised crossings drawn over liquefaction susceptibility, which rests on the
 * Metro Vancouver microzonation layers; those are link-only and are still not
 * being redrawn (`docs/licensing.md`). This map carries no hazard layer at all.
 * It draws where the crossings are and what has been published about each, and
 * it replaced a schematic of the same connections, which is described in
 * `components/figures/crossings-map.tsx`.
 *
 * The same map is on `/after/transportation/`, which owns the engineering, with
 * a caption written for that page's argument. One component and one list of
 * crossings serve both, so the two cannot drift apart.
 */
const transportationLink = (
  <Link
    href="/after/transportation/"
    className="text-accent underline underline-offset-2"
  >
    transportation
  </Link>
);

export const gettingAround: PageModule = {
  meta: {
    route: "/getting-around/",
    title: "Moving after the shaking",
    description:
      "Two provincial emergency plans assume people will not drive out of the region after a major earthquake. Both direct the public to shelter where they are.",
    nav: "Getting around",
    kicker: "After the shaking",
    standfirst:
      "Two provincial emergency plans assume people will not drive out of the region after a major earthquake. Both direct the public to shelter where they are.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "PEIRS",
      "DCRRA-2025",
      "PITTMDW-DRR",
      "DRR-GOVPAGE",
      "DRT-PRIMER-18",
      "DRT-PLANNING-18",
      "MV-DEBRIS-17",
      "IPREM-RES",
      "HWY5-RECOV",
      "HWY1-RECOV",
      "HWY8-RECOV",
      "BC-FLOOD-STRAT",
      "SEPULVEDA-23",
      "BOWEN-TSU-19",
      "NSEMO-TSU-05",
      "COV-EXPLORER-25",
    ],
  },

  sections: [
    {
      title: "The province plans on people staying",
      body: (
        <Prose>
          <p>
            From the planning assumptions in the province’s Earthquake Immediate
            Response Strategy:
          </p>
          <Quote
            speaker="Province of British Columbia"
            source="Provincial Earthquake Immediate Response Strategy, planning assumptions"
            cite={<Cite id="PEIRS" />}
          >
            <p>
              “Spontaneous mass evacuation out of the impact area will not take
              place: … public messaging will emphasize sheltering within the
              region … Critical casualties, essential response personnel, those
              in imminent danger, and stranded travellers will be re-located as
              part of the immediate response.”
            </p>
          </Quote>
          <p>
            From the province’s risk and resilience assessment, on its Cascadia
            scenario:
          </p>
          <Quote
            speaker="Province of British Columbia"
            source="Disaster and Climate Risk and Resilience Assessment, on its Cascadia scenario"
            cite={<Cite id="DCRRA-2025" />}
          >
            <p>
              “Damage to transportation routes and the prioritization of
              essential personnel and supplies make mass evacuation impossible,
              and the public is directed to shelter in place.”
            </p>
          </Quote>
          <p>
            Two provincial documents, written for two different scenarios, give
            the same instruction. The plan assumes people will not drive out,
            and that the roads will be doing other work.
          </p>
          <p>
            Large parts of the area “will be inaccessible by road due to
            earthquake-induced landslides, liquefaction, and other secondary
            impacts such as bridge collapses”. And “Road, rail, air, and marine
            transportation will be disrupted, and existing supply chains will be
            inoperable.” <Cite id="PEIRS" /> Liquefaction there means saturated
            soil losing its strength and behaving like a liquid while the ground
            shakes.
          </p>
        </Prose>
      ),
    },

    {
      title: "The land connections are fewer than the map suggests",
      body: (
        <Prose>
          {/* Uncited on purpose: these three are map facts. They claim nothing
              about earthquakes and rest on no document. The sentence that used
              to say so to the reader explained the site's own source keys, which
              is the one thing a page here may not do. */}
          <Callout label="Where the water is">
            <Prose>
              <p>
                <strong>Vancouver is a peninsula, not an island.</strong>{" "}
                Burrard Inlet is to the north and the North Arm of the Fraser to
                the south, and the land connection runs eastward through Burnaby
                and New Westminster.
              </p>
              <p>
                <strong>
                  Richmond is reached only by bridges and a tunnel.
                </strong>{" "}
                There is no land route onto Lulu Island or Sea Island. South of
                the Fraser, Delta connects by land eastward to Surrey.
              </p>
              <p>
                <strong>The North Shore has two vehicle crossings</strong>, with
                mountains behind it.
              </p>
            </Prose>
          </Callout>
          {/* The three facts above are drawn here as geography rather than
              asserted. What the marks add on top of position is not a claim
              about earthquakes either: it is whether anybody has published one.
              The licence slot is filled because three datasets are behind it. */}
          <Figure
            interactive
            alt={`Every road, rail and transit crossing off the Vancouver peninsula and onto Richmond, mapped. Vancouver's land connection runs east; everything else is a bridge or a tunnel. ${CROSSINGS_FACTS.none} of the ${CROSSINGS_FACTS.total} crossings have nothing published about the earthquake they were designed or assessed against, and those include every False Creek bridge, the Arthur Laing, the Lions Gate and the Ironworkers. A blank mark means nothing was found, not that a crossing is unassessed.`}
            caption={
              <>
                The crossings, where they are. Vancouver's land route runs east
                through Burnaby and New Westminster; every other way off the
                peninsula, and every way onto Richmond, is on this map. The
                marks say what has been published about the earthquake each
                crossing was designed or assessed against, which for most of
                them is nothing that could be found. That is a gap in the public
                record and not a verdict on a bridge. What the crossings were
                built to withstand is in {transportationLink}.
              </>
            }
            licence={<CrossingsLicence />}
          >
            <CrossingsMap />
          </Figure>
          <p>
            What those crossings were built to withstand, and what happens to
            the ground their approaches sit on, is the subject of{" "}
            {transportationLink}.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Disaster Response Route signs mean stay off, not evacuate this way",
      body: (
        <Prose>
          <p>
            The signs stand on roads across the region. A network of provincial
            and municipal roads was designated in 1995 across Metro Vancouver
            and Greater Victoria to move emergency responders and supplies.{" "}
            <Cite id="PITTMDW-DRR" /> The routes are open to everyone until a
            state of emergency is declared, and then they are activated and
            controlled. Authorised users must carry both government-issued photo
            identification and employment identification.{" "}
            <Cite id="DRR-GOVPAGE" />
          </p>
          <p>
            <strong>
              The official instruction to the public is to get off the route as
              soon as possible
            </strong>
            , to make way for emergency responders. <Cite id="DRR-GOVPAGE" />
          </p>
          <p>
            The province does not oversell them: “Like any infrastructure, these
            routes are susceptible to hazards and could potentially be
            negatively impacted by the emergency event.”{" "}
            <Cite id="PITTMDW-DRR" />
          </p>
          <p>
            The doctrine changed in June 2018: “DRRs are not designated
            pre-event. DRRs are determined at the time of the event based on the
            needs of response and recovery and available options.” What is
            designated in advance is now called a critical route.{" "}
            <Cite id="DRT-PRIMER-18" /> The advice to the public is unchanged.
          </p>
          <p>
            Among the published considerations for choosing roads for response
            routes: “Consider avoiding steep grades, circuitous routing,
            bridges, tunnels, overpasses and underpasses.”{" "}
            <Cite id="DRT-PLANNING-18" /> Seismic retrofit status is one of the
            vulnerability criteria in the same guide, alongside soil stability
            and how close the road runs to gas and water lines.{" "}
            <Cite id="DRT-PLANNING-18" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Roads are cleared in a published order, and getting people home is not near the top",
      body: (
        <Prose>
          <p>
            Metro Vancouver’s regional debris management plan sets the clearing
            priority:
          </p>
          <Quote
            speaker="Metro Vancouver REAC, IPREM and CCEM"
            source="Joint Municipal Regional Disaster Debris Management Operational Plan"
            cite={<Cite id="MV-DEBRIS-17" />}
          >
            <p>
              “Lifelines: Routes essential to life safety transportation, e.g.
              evacuation routes. Critical Infrastructure, e.g. hospitals,
              ambulance halls, police stations, EOCs, telecommunication sites,
              water sanitation sites, power generation and transmission sites.
              Clear major freeways and arterial routes. Clear areas necessary
              for movement of goods and services and/or economic restoration.
              Clear minor arterial routes. Clear local routes.”
            </p>
          </Quote>
          <p>
            Local roads are last. The plan’s suggested starting point is one
            this region already knows from winter: “Local Authorities may choose
            to use their snow removal routes as a base”.{" "}
            <Cite id="MV-DEBRIS-17" />
          </p>
          <Figure
            alt="The clearing order published by Metro Vancouver runs from lifelines and evacuation routes, through critical infrastructure, major freeways and arterials, goods and economic restoration, and minor arterials, to local routes last. It is an order of work rather than a timetable, and the plan publishes no durations."
            caption={
              <>
                The order quoted above, drawn as a ladder from lifelines down to
                local streets. It is a sequence and not a schedule: the plan
                gives no durations, so the figure carries no scale.{" "}
                <Cite id="MV-DEBRIS-17" />
              </>
            }
          >
            <ClearingOrder />
          </Figure>
          <p>
            Provincially, the same sequencing applies to reopening. Critical
            routes “are used as a reference to prioritize the restoration of
            routes for regional mobility for all traffic”, and “Emergency
            responders should only use damaged routes after safety assessments
            have deemed the damaged routes safe for emergency use.”{" "}
            <Cite id="DRT-PRIMER-18" />
          </p>
          <VerificationNote label="Not yet established">
            There is no public forecast of how long any named Lower Mainland
            corridor would be closed. What is published is the framework for
            reopening them <Cite id="DRT-PRIMER-18" />{" "}
            <Cite id="MV-DEBRIS-17" />, and, separately, the lane and
            restoration targets a new lifeline crossing is designed against,
            which are
            set out in {transportationLink}. Some regional emergency-management
            material is withheld by choice: “Due to the sensitive nature of some
            of our work, some materials are only available upon request.”{" "}
            <Cite id="IPREM-RES" />
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title:
        "Rainfall severed three BC highways in 2021, and reopening them took months",
      body: (
        <Prose>
          <p>
            The only measured evidence of how long it takes to reopen a severed
            highway in this province comes from the atmospheric river of
            November 2021. Every figure below is rainfall damage from that
            storm. None of it was caused by an earthquake.
          </p>
          <ul>
            <li>
              <strong>Highway 5, the Coquihalla.</strong> Closed on 14 November
              2021 by that rainfall, with more than 20 damaged sites along 130
              km, including seven bridges where spans collapsed or were heavily
              damaged. Reopened to commercial traffic in 35 days and to all
              traffic after about 66 days. The last permanent bridge was
              finished in October 2023, about 23 months after the storm.{" "}
              <Cite id="HWY5-RECOV" />
            </li>
            <li>
              <strong>Highway 1, the Fraser Canyon.</strong> Closed on 14
              November 2021 by the same rainfall, with 18 damaged sites between
              Hope and Spences Bridge, and reopened after 61 and 71 days on two
              segments. Permanent repairs on that rainfall damage ran into 2025,
              with one culvert expected in 2026. <Cite id="HWY1-RECOV" />
            </li>
            <li>
              <strong>Highway 8, the Nicola Valley.</strong> Also closed by the
              November 2021 rainfall, with 25 damaged sites and more than 13 km
              of road to rebuild. Reopened to the public on 9 November 2022,
              about 12 months after the storm, and restored to two lanes only in
              December 2025. <Cite id="HWY8-RECOV" />
            </li>
          </ul>
          {/* Placed under the list the guard sentence above introduces, and
              carrying the guard itself, in the caption and in the alt text, so
              it does not depend on that sentence staying beside it. */}
          <Figure
            alt="Highway 5 reopened to commercial traffic in 35 days and to all traffic after about 66 days, Highway 1 after 61 and 71 days on two segments, and Highway 8 after about 12 months, with the last permanent Highway 5 bridge finished about 23 months on. Every one of these durations is damage from the November 2021 rainfall and none of it was caused by an earthquake."
            caption={
              <>
                Reopening durations for the three highways cut by the
                atmospheric river of November 2021, a long and heavy rainstorm.
                Days and months are drawn on
                separate scales because the sources give them that way. None of
                this is earthquake damage and none of it forecasts one.{" "}
                <Cite id="HWY5-RECOV" /> <Cite id="HWY1-RECOV" />{" "}
                <Cite id="HWY8-RECOV" />
              </>
            }
          >
            <Reopening2021 />
          </Figure>
          <p>
            The provincial flood strategy puts the economic impact of the
            November 2021 rainfall at $5 to $7 billion and records that it cut
            “main access routes to B.C. and Canada”.{" "}
            <Cite id="BC-FLOOD-STRAT" /> Peer-reviewed work on the same rainfall
            event describes its ground failures as “severing land connectivity
            between Metro Vancouver and the rest of Canada”, and one of its
            authors works for the road authority. <Cite id="SEPULVEDA-23" />
          </p>
          <p>
            Those are the durations this road authority and these contractors
            achieved in this terrain.
          </p>
        </Prose>
      ),
    },

    {
      title: "A landslide wave in Howe Sound is assessed as unlikely",
      body: (
        <Prose>
          <p>
            Federal mapping “concluded that none of the landslides that entered
            Howe Sound were large enough to produce a significant tsunami”, and
            a landslide into the sound large enough to produce damaging waves on
            Bowen Island is assessed as unlikely. <Cite id="BOWEN-TSU-19" /> An
            earlier North Shore assessment agrees, putting the probability as
            “very low, although not zero” and finding the North and West
            Vancouver waterfronts not at risk from such a wave.{" "}
            <Cite id="NSEMO-TSU-05" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Nobody has published how many people would leave, or when",
      body: (
        <Prose>
          <p>
            The route out of the region would be a damaged road, cleared in an
            order that puts local streets last. <Cite id="MV-DEBRIS-17" /> How
            much of the network the province expects to be working, and for how
            long, is set out in {transportationLink}.
          </p>
          <VerificationNote label="Not yet established">
            How many people would leave the Lower Mainland after a major
            earthquake, and over what period, has not been published by any
            government or researcher. The province’s plans say only that a mass
            departure will not happen and is not planned for.{" "}
            <Cite id="PEIRS" /> <Cite id="DCRRA-2025" />
          </VerificationNote>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: <>The decision that matters is where you will be when it happens.</>,
    items: [
      <>
        <strong>Decide where you would rather be stuck, and be there.</strong>{" "}
        Know which side of the water you will be on during a working day, and
        plan to stay on that side. The province’s plans assume exactly that:
        shelter within the region, where you already are. <Cite id="PEIRS" />{" "}
        <Cite id="DCRRA-2025" />
      </>,
      // No citation, and none is missing: the copy leaves this bullet uncited
      // because it rests on no document and claims nothing.
      <>
        <strong>Prepare the place you will actually be</strong>, not the place
        you would try to reach. A workplace where you might spend several days
        is worth a small kit of its own.
      </>,
      <>
        <strong>Plan a way home that does not need a vehicle or a train.</strong>{" "}
        The City of Vancouver’s own advice is to plan alternate ways home,
        because “roads may be blocked and trains will not be running until
        damage assessments are complete”. <Cite id="COV-EXPLORER-25" />
      </>,
      // Uncited in the copy for the same reason as the second bullet.
      <>
        <strong>
          Agree with your household who you will each contact, and where you
          will each go.
        </strong>{" "}
        A single agreed person and a single agreed place removes the reason to
        set out across a damaged city.
      </>,
      <>
        <strong>
          If you are on a Disaster Response Route when one is activated, get off
          it.
        </strong>{" "}
        That is the province’s instruction. <Cite id="DRR-GOVPAGE" />
      </>,
    ],
  },
};
