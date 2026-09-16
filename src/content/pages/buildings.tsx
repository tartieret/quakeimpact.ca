import Link from "next/link";

import { Cite } from "@/components/citation";
import { Photograph, Prose, VerificationNote } from "@/components/page-parts";
import { DataTable } from "@/components/prose-blocks";
import type { PageModule } from "./index";

/**
 * Buildings. The body of /shaking/buildings/, ported from
 * docs/copy/buildings.md.
 *
 * Three guards from docs/research/buildings.md are load-bearing here and are
 * written into the sentences instead of being kept in this comment: City of
 * Vancouver figures never mix with regional ones, displacement is always
 * "more than 90 days" and always per scenario, and a loss figure is total
 * economic unless the insured share is named.
 *
 * Casualty figures belong to /shaking/casualties/, fire following to
 * /shaking/fire-following/, and the longer displacement story to
 * /after/housing/. They are not repeated here.
 */
export const buildings: PageModule = {
  meta: {
    route: "/shaking/buildings/",
    title: "Buildings",
    description:
      "Vancouver’s building model finds more damage from a nearby crustal earthquake than from a larger offshore megathrust.",
    nav: "Buildings",
    kicker: "The shaking",
    standfirst:
      "A nearby earthquake could damage more Vancouver buildings than a much larger earthquake offshore. Age and construction matter, and a building that remains standing may still be unusable.",
    references: [
      "COV-RISK-2024",
      "COV-PLAN-2026",
      "GSC-OF-8853",
      "NZ-RC-V4",
      "COV-FOI-GLASS",
      "VBBL-2025",
      "COV-EXPLORER-25",
      "COV-FACTSHEET-24",
      "AIR-2013",
      "LEPAN-2016",
    ],
  },

  sections: [
    {
      title: "A nearby earthquake could cause the most damage",
      body: (
        <Prose>
          <p>
            In 2024, the City of Vancouver modelled what three different
            earthquakes would do to the city’s buildings.{" "}
            <Cite id="COV-RISK-2024" /> Each row below is a separate scenario.
          </p>
          <DataTable
            caption="Three earthquakes modelled separately against the City of Vancouver’s buildings: how many are badly damaged, how many people are out of their homes for more than 90 days, and the direct economic loss."
            columns={[
              "Earthquake",
              "Buildings completely or extensively damaged",
              "People out of their homes for more than 90 days, daytime / nighttime",
              "Direct economic loss",
            ]}
            rows={[
              [
                "M7.2 in the Georgia Strait, close to the city",
                "6,080",
                "365,340 / 230,520",
                "$17 billion",
              ],
              [
                "M9.0 Cascadia, offshore",
                "1,440",
                "140,000 / 115,850",
                "$3.8 billion",
              ],
              [
                "M7.0 deep under the region",
                "720",
                "25,420 / 15,230",
                "$3.1 billion",
              ],
            ]}
            note={
              <>
                These figures cover the City of Vancouver, not the wider
                region. Daytime and nighttime are two versions of the same
                scenario. The losses are total direct damage, not the share
                covered by insurance. <Cite id="COV-RISK-2024" />
              </>
            }
          />
          <p>
            The nearby M7.2 damages about four times as many buildings as the
            offshore M9.0 and causes about four and a half times the direct
            economic loss. Its smaller magnitude is offset by its location. It
            produces stronger shaking in the city. <Cite id="COV-RISK-2024" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Age and construction shape the damage",
      body: (
        <Prose>
          <p>
            Vancouver has about 90,000 buildings. Nearly 70 per cent were built
            before 1990, when modern earthquake standards arrived, and about
            half before 1973, when there were no earthquake standards.{" "}
            <Cite id="COV-RISK-2024" />
          </p>
          <p>
            Five privately owned building types make up roughly a tenth of the
            stock but carry nearly 80 per cent of the city’s earthquake risk.
            They include concrete apartment buildings, wood-frame apartments,
            older brick homes, low-rise concrete shops and offices, and
            downtown office towers. <Cite id="COV-RISK-2024" />
          </p>
          <p>
            The City’s M7.2 scenario shows how differently three common types
            of housing perform. The figures are averages for each type, not an
            assessment of any individual building.
          </p>
          <DataTable
            caption="Three kinds of home in the City of Vancouver’s M7.2 Georgia Strait scenario."
            columns={[
              "Home",
              "Where",
              "People living in them",
              "Buildings badly damaged",
              "Residents out for more than 90 days",
            ]}
            rows={[
              [
                "Concrete mid-rise and high-rise",
                "West End, Downtown",
                "124,900",
                "28%",
                "70%",
              ],
              [
                "Wood-frame apartments",
                "Fairview, Kitsilano, Mount Pleasant, West End",
                "160,900",
                "not published",
                "64%",
              ],
              [
                "Older brick, 581 buildings",
                "Gastown, Downtown Eastside, Chinatown",
                "24,700",
                "35%",
                "over 97%",
              ],
            ]}
            minWidth="44rem"
            note={
              <>
                The table does not separate newer buildings from older ones.
                “Badly damaged” means extensively or completely damaged.{" "}
                <Cite id="COV-RISK-2024" />
              </>
            }
          />
          <p>
            Wood-frame apartments account for 45 per cent of residential
            displacement in this scenario, or 103,900 people. They also hold 40
            per cent of the city’s purpose-built rental housing.{" "}
            <Cite id="COV-RISK-2024" /> This is different from the familiar
            finding that wood-frame houses generally perform well. The City’s
            engineering work identifies weak walls and ground floors left open
            for parking as particular concerns in apartment buildings.{" "}
            <Cite id="COV-PLAN-2026" />
          </p>
          <p>
            Downtown office towers are another concern. The model finds 29 per
            cent extensively or completely damaged, with nearly half of their
            occupants unable to return for more than 90 days.{" "}
            <Cite id="COV-RISK-2024" />
          </p>
          <p>
            Six neighbourhoods carry 65 per cent of the city’s building risk:
            the West End, the Downtown Eastside including Chinatown and
            Strathcona, Downtown, Kitsilano, Fairview and Mount Pleasant.{" "}
            <Cite id="COV-RISK-2024" /> In the census tracts with the most risk,
            roughly 70 to 75 per cent of residents rent. Tenants can ask about a
            building’s condition, but they cannot retrofit it themselves.{" "}
            <Cite id="COV-RISK-2024" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Falling walls and glass threaten the street",
      body: (
        <Prose>
          <p>
            Older commercial streets face a different hazard. Brick walls,
            parapets and gable ends can fall onto pavements and roads, injuring
            people and blocking emergency vehicles. The City identifies this
            risk along streets including Hastings and Kingsway, especially in
            and around Downtown and the Downtown Eastside.{" "}
            <Cite id="COV-RISK-2024" />
          </p>
          <p>
            Unreinforced masonry is brick or concrete block built without steel
            reinforcing. A parapet is the section of wall above the roofline.
            Both can break away from an older building during strong shaking.
          </p>
          <Photograph
            id="christchurch-beckenham-shops"
            caption={
              <>
                Christchurch, New Zealand, on the day of the 2010 earthquake.
                Part of a brick wall and parapet has fallen onto the shopfront,
                closing the pavement below.
              </>
            }
          />
          <p>
            Federal modelling of a magnitude 7.0 earthquake close to Vancouver
            estimates 13 million tonnes of debris across the affected region,
            enough to obstruct streets and response work. The estimate excludes
            damage from aftershocks, tsunami, landslides, liquefaction and fire.{" "}
            <Cite id="GSC-OF-8853" />
          </p>
          <p>
            The danger is established even though no Vancouver casualty
            estimate exists for falling walls. In the 2011 earthquake in
            Christchurch, New Zealand, unreinforced masonry walls and façades
            caused 35 of the 42 deaths from building failures outside the two
            office buildings that collapsed. Twenty-six of those people were on
            the street or in vehicles. <Cite id="NZ-RC-V4" /> Christchurch
            shows the mechanism, not how many people would be harmed here.
          </p>
          <VerificationNote label="Not measured">
            Vancouver has not estimated how much glass would fall in a major
            earthquake or how many people it could hurt. The City confirmed in
            2021 that it held no report on the subject.{" "}
            <Cite id="COV-FOI-GLASS" />
          </VerificationNote>
          <p>
            The Vancouver Building By-law requires glazing in newer buildings
            to accommodate movement without falling out. It also sets
            earthquake requirements for cladding, parapets, ornaments and brick
            facing. <Cite id="VBBL-2025" /> Older buildings generally come
            under the falling-hazard rules only when an owner renovates, adds
            to, reconstructs or changes the use of the building. Age alone does
            not trigger an upgrade, and Vancouver has no standalone requirement
            to retrofit parapets or façades. <Cite id="VBBL-2025" />
          </p>
          <p>
            There is no public list of buildings at risk. The City’s five-year
            risk-reduction plan includes seismic screening, but it does not set
            a date for publishing the results or say whether individual
            buildings will be named. <Cite id="COV-PLAN-2026" />
          </p>
        </Prose>
      ),
    },

    {
      title: "A standing building may still be unusable",
      body: (
        <Prose>
          <p>
            The gap between damage and displacement in the tables is important.
            A building does not have to collapse to become inaccessible. Damage
            elsewhere on the block can lead to a cordon, and every building
            must wait for someone qualified to inspect it.
          </p>
          <p>
            The City expects large parts of some neighbourhoods to remain
            inaccessible while a limited number of inspectors and tradespeople
            work through damaged buildings. Even minor damage can take time to
            assess and repair. <Cite id="COV-EXPLORER-25" />{" "}
            <Cite id="COV-FACTSHEET-24" /> The{" "}
            <Link href="/after/housing/">Housing page</Link> covers the longer
            problem of finding somewhere for displaced households to live.
          </p>
        </Prose>
      ),
    },

    {
      title: "Most of the cost falls outside insurance",
      body: (
        <Prose>
          <p>
            A 2013 model of an M9.0 Cascadia earthquake put the total economic
            loss in western Canada between roughly $66 billion and $83 billion,
            depending on how quickly the economy recovered. Its central
            estimate was about $75 billion. About $62 billion was direct damage
            and about $20 billion of that direct damage was insured. In other
            words, insurance covered roughly a third of the direct loss and
            just over a quarter of the central estimate for total economic
            loss. <Cite id="AIR-2013" />
          </p>
          <p>
            Coverage is also uneven. About 55 per cent of Vancouver homeowners
            carry earthquake insurance, and coverage among renters is much
            lower. <Cite id="LEPAN-2016" /> Earthquake damage cannot be assumed
            to be part of a home or tenant policy.
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    items: [
      <>
        <strong>
          Find out when your building was built and what it is made of.
        </strong>{" "}
        Your landlord, strata or municipality may have the information. The
        City’s model shows that age and construction type both matter.{" "}
        <Cite id="COV-RISK-2024" />
      </>,
      <>
        <strong>
          Ask about an open parking level under a wood-frame apartment building.
        </strong>{" "}
        The City’s engineering work identifies this arrangement as a collapse
        risk. <Cite id="COV-PLAN-2026" />
      </>,
      <>
        <strong>Check whether your policy includes earthquake coverage.</strong>{" "}
        About 55 per cent of Vancouver homeowners have it, and coverage is less
        common among renters. Read the policy or ask the insurer.{" "}
        <Cite id="LEPAN-2016" />
      </>,
      <>
        <strong>Keep essential items where they remain accessible.</strong>{" "}
        A cordon or inspection backlog can keep people out of a standing home.
        Keep copies of identification and insurance documents, a medication
        list, glasses and other essentials somewhere you can reach if you cannot
        go back inside. <Cite id="COV-EXPLORER-25" />{" "}
        <Cite id="COV-FACTSHEET-24" />
      </>,
    ],
    closing: (
      <>
        These steps do not change the building. They make its condition and the
        consequences of being unable to return less of a surprise.
      </>
    ),
  },
};
