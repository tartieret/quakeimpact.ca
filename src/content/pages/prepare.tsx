import { Cite } from "@/components/citation";
import { Figure, Prose, Subhead } from "@/components/page-parts";
import { PrepareWaterArithmetic } from "@/components/figures/prepare";
import type { PageModule } from "./index";

/**
 * Preparing. The body of `/prepare/`, ported from `docs/copy/prepare.md`.
 *
 * This page gives instructions in the site's voice. Citations carry the
 * attribution quietly, except where the province's planning assumption is
 * itself the point. The household water total is arithmetic worked from the
 * published rate. The gas advice is one rule in three parts: know where the
 * valves are, leave them alone unless an official says otherwise, and never
 * restore the service yourself.
 */
export const prepare: PageModule = {
  meta: {
    route: "/prepare/",
    title: "Preparing",
    description:
      "British Columbia asks households to keep at least two weeks of supplies. Start with a plan, water and the people nearby.",
    nav: "Preparing",
    kicker: "Part 3",
    standfirst: (
      <>
        British Columbia asks every household to keep at least two weeks of
        water, food and essential supplies. <Cite id="PREPAREDBC" /> Start with
        the parts that cost nothing: decide where to meet, who to contact
        outside the region and who nearby may need help.
      </>
    ),
    references: [
      "PREPAREDBC",
      "PEIRS",
      "PREPAREDBC-PLAN",
      "PREPAREDBC-NEIGHBOURHOOD",
      "PREPAREDBC-GUIDES",
      "RESEARCHCO-PREP-21",
      "DCRRA-2025",
      "COV-EXPLORER-25",
      "NRCAN-EEW",
      "PREPAREDBC-KIT",
      "PREPAREDBC-DISABILITY",
      "FBC-EQ",
      "SURREY-PREP",
      "ECOMM-EQ",
      "COV-HUBS",
      "DRR-GOVPAGE",
      "PREPAREDBC-BUDGET",
    ],
  },

  sections: [
    {
      title: "Prepare to look after your household for two weeks",
      body: (
        <Prose>
          <p>
            The province plans for family and neighbours to be the only help
            available at first. It asks people in an earthquake zone to be
            self-sufficient for up to two weeks so limited public resources can
            reach those with no other option. <Cite id="PEIRS" />
          </p>
          <p>
            Keep enough water, food and essential supplies for every person and
            pet in the home for at least two weeks. Infrastructure and utilities
            may take weeks to restore. <Cite id="PREPAREDBC" /> Emergency
            Support Services can provide short-term food, lodging and other
            help, but the program is designed around the first 72 hours and not
            the scale of a catastrophic earthquake. <Cite id="PEIRS" />
          </p>
          <p>
            Two weeks is the target. Do not wait until you can buy everything
            at once. A written plan, a meeting place and a conversation with a
            neighbour are useful immediately and cost nothing.
          </p>
        </Prose>
      ),
    },

    {
      title: "Make a plan that works without phone service",
      body: (
        <Prose>
          <p>
            Choose one contact outside British Columbia. Everyone in the
            household should know the number and use that person to pass on
            where they are. Pick two meeting places as well: one close to home,
            such as a mailbox on the street, and one farther away, such as a
            nearby park or community centre. <Cite id="PREPAREDBC-PLAN" />{" "}
            <Cite id="PREPAREDBC-NEIGHBOURHOOD" />
          </p>
          <p>
            Write the plan on paper and put a copy in every grab-and-go bag.
            The province provides a fill-in household plan in English, French,
            Simplified and Traditional Chinese and Punjabi. It takes less space
            than a phone and works when the battery and network do not.{" "}
            <Cite id="PREPAREDBC-PLAN" /> <Cite id="PREPAREDBC-GUIDES" />
          </p>
          <p>
            Most households have not made these simple decisions. In a 2021
            poll of 800 British Columbians, 28 per cent had a plan for contacting
            family or friends and 22 per cent had an agreed meeting place.{" "}
            <Cite id="RESEARCHCO-PREP-21" /> Communications can be disrupted
            for days to weeks, and the service that remains may be reserved for
            emergency personnel. <Cite id="DCRRA-2025" /> Send a text before
            trying a call, but do not make a working phone the plan.{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            Work out how each person would get home if roads were blocked and
            trains had stopped for damage inspections.{" "}
            <Cite id="COV-EXPLORER-25" /> Decide who will collect children,
            check on anyone who lives alone and look after pets if the household
            is separated.
          </p>
        </Prose>
      ),
    },

    {
      title: "Practise one response to shaking",
      body: (
        <Prose>
          <p>
            Earthquake Early Warning detects an earthquake after it starts and
            may provide seconds to tens of seconds of notice through compatible
            phones, television and radio. It does not predict earthquakes, and
            close to the source the alert may arrive as the shaking begins.{" "}
            <Cite id="PREPAREDBC" /> <Cite id="NRCAN-EEW" />
          </p>
          <p>
            Whether the warning is the alert or the movement underfoot, do the
            same thing: Drop, Cover and Hold On. Get onto your hands and knees,
            cover your head and neck, and shelter under sturdy furniture. If
            none is close, crawl to an interior corner or wall. Hold on until
            the shaking stops, then count to 60 before getting up so loose
            objects have time to settle. <Cite id="PREPAREDBC" />
          </p>
          <p>
            If you use a wheelchair, walker or cane, lock the wheels instead of
            dropping, then cover your head and neck and hold on. Repeat the same
            response during aftershocks. <Cite id="PREPAREDBC" /> Practise in
            the places where people sleep, work and spend time. In the moment,
            the useful response is the one the body already knows.
          </p>
        </Prose>
      ),
    },

    {
      title: "Store water before anything else",
      body: (
        <Prose>
          <p>
            Store four litres per person per day for drinking and sanitation.
            For four people over two weeks, that is at least 224 litres. The
            household total is arithmetic from the published daily rate.{" "}
            <Cite id="PREPAREDBC" /> <Cite id="COV-EXPLORER-25" />
          </p>
          <Figure
            alt="At four litres per person per day, a household of four needs at least 224 litres to cover two weeks."
            caption={
              <>
                One mark is four litres, the published rate for one person for
                one day. Fifty-six marks cover four people for two weeks. The
                total is calculated from that rate. <Cite id="PREPAREDBC" />
              </>
            }
          >
            <PrepareWaterArithmetic />
          </Figure>
          <p>
            Water is bulky. Store it first anyway, in more than one container
            if possible, and refresh it on a schedule you will keep. Regional
            distribution of bulk drinking water may remain difficult for the
            first four to five days. <Cite id="DCRRA-2025" /> Whatever you can
            store closes part of that gap.
          </p>
          <p>
            Add water and supplies for each pet, along with a separate
            grab-and-go bag. <Cite id="PREPAREDBC-KIT" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Build the kit around how people actually live",
      body: (
        <Prose>
          <p>
            Choose food that needs no refrigeration and little or no cooking.
            Keep a manual can opener with it. Add a battery-powered or
            hand-crank radio, a flashlight and spare batteries, a phone power
            bank, first aid supplies, medications, dust masks, garbage bags,
            moist towelettes, warm layers, sturdy footwear, an emergency
            blanket, a whistle, copies of identification and insurance papers,
            and cash in small bills. Keep the kit somewhere everyone can reach.{" "}
            <Cite id="PREPAREDBC" />
          </p>
          <p>
            Pack a smaller grab-and-go bag for each person and pet. Include a
            copy of the household plan and a local map with both meeting places
            marked. <Cite id="PREPAREDBC" /> <Cite id="PREPAREDBC-KIT" />
          </p>
          <Subhead>Plan around the person who will need the most help</Subhead>
          <p>
            Medication, mobility equipment, infant supplies, food allergies and
            the needs of older adults cannot be added after the earthquake.
            Write down medication details, keep extra supplies where possible
            and make sure someone else knows how specialised equipment works.{" "}
            <Cite id="PREPAREDBC-DISABILITY" />
          </p>
          <p>
            Build a support network of at least three trusted people for anyone
            who may need help getting out or getting by. Give them the keys and
            medical information they need, show them where supplies are kept,
            and agree how they will check in without relying on a working phone.{" "}
            <Cite id="PREPAREDBC-DISABILITY" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Make the rooms where people sleep safer",
      body: (
        <Prose>
          <p>
            Start beside the beds. Fasten tall bookcases, cabinets and shelving
            to wall studs. Move pictures and mirrors away from beds and seating,
            latch cabinet doors, strap large appliances and anchor the water
            heater. <Cite id="PREPAREDBC" />
          </p>
          <p>
            If you rent or cannot drill, move heavy objects to lower shelves,
            move the bed away from windows, use removable fasteners under small
            appliances and keep sturdy shoes under the bed.{" "}
            <Cite id="COV-EXPLORER-25" /> One safer room is a useful start.
          </p>
        </Prose>
      ),
    },

    {
      title: "Learn the utility shut-offs, then leave them alone",
      body: (
        <Prose>
          <p>
            Find the electrical panel, water valve and gas valve before an
            emergency. Learn how each works and keep the right tool near the
            gas valve. <Cite id="PREPAREDBC" />
          </p>
          <p>
            Do not shut off the gas unless an official tells you to. Once gas
            is off at the meter, a registered gas contractor has to visit the
            home and relight every appliance before service can return. That
            household-by-household work may take weeks after a major emergency.{" "}
            <Cite id="FBC-EQ" /> <Cite id="SURREY-PREP" /> Never turn it back
            on yourself.
          </p>
        </Prose>
      ),
    },

    {
      title: "Prepare with the people who will be nearby",
      body: (
        <Prose>
          <p>
            Meet the neighbours before you need one another. Start with a group
            that already exists, such as a strata council, residents’
            association or Block Watch group. Work out who may need extra help,
            who knows first aid, who can interpret, and who has useful equipment
            such as a barbecue, generator or chainsaw. Agree where to meet and
            whether the building or block has room for shared supplies.{" "}
            <Cite id="PREPAREDBC-NEIGHBOURHOOD" />
          </p>
          <p>
            Neighbours are not official first responders, and directions from
            officials come first. They are still the people most likely to be
            close enough to help in the first hours. <Cite id="PEIRS" />
          </p>
        </Prose>
      ),
    },

    {
      title: "After the shaking, stay put if home is safe",
      body: (
        <Prose>
          <p>
            Move carefully and look for hazards above and below. If the building
            is structurally safe, stay there. Leave if it is badly damaged,
            poses a safety risk or officials order an evacuation. Take the
            grab-and-go bags and follow the instructions provided.{" "}
            <Cite id="PREPAREDBC" />
          </p>
          <p>
            Call 9-1-1 only for a life-threatening emergency. After a magnitude
            4.7 earthquake in 2015, calls to E-Comm rose by 1,500 per cent.{" "}
            <Cite id="ECOMM-EQ" /> Keep the network available for someone whose
            life depends on it.
          </p>
          <p>
            In Vancouver, yellow signs mark 25 disaster support hubs where
            services may include lodging, food, water, supplies, information
            and help reconnecting families. No public capacity figure is
            available, so do not make a hub bed part of the household plan.{" "}
            <Cite id="COV-HUBS" />
          </p>
          <p>
            Disaster Response Routes are not evacuation routes. They remain
            open to everyone until a state of emergency is declared. Once
            activated, get off them and leave them clear for emergency traffic.{" "}
            <Cite id="DRR-GOVPAGE" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Start with what you have and keep adding",
      body: (
        <Prose>
          <p>
            A complete two-week kit costs money and takes space. Start with the
            water and food already in the home, then add an item to the regular
            shopping when the budget allows. Dollar stores, thrift stores and
            garage sales can cover much of the equipment. A backpack can come
            from a thrift store, and first aid supplies can be gathered from
            what is already in the house. <Cite id="PREPAREDBC-BUDGET" />
          </p>
          <p>
            Keep the supplies together, use what is nearing its expiry date and
            replace it. A partial kit that exists is more useful than a perfect
            kit still waiting to be bought.
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: <>Start with three things that cost nothing.</>,
    href: null,
    items: [
      <>
        <strong>Choose two meeting places and one contact outside B.C.</strong>{" "}
        Write the places and number on paper. <Cite id="PREPAREDBC-PLAN" />
      </>,
      <>
        <strong>Meet the neighbours.</strong> Know who may need help, who has
        useful skills and who has equipment.{" "}
        <Cite id="PREPAREDBC-NEIGHBOURHOOD" />
      </>,
      <>
        <strong>Practise Drop, Cover and Hold On.</strong> Do it wherever people
        sleep, work and spend time. <Cite id="PREPAREDBC" />
      </>,
      <>
        <strong>Store water next.</strong> Use four litres per person per day as
        the target and build toward two weeks. <Cite id="PREPAREDBC" />
      </>,
      <>
        <strong>Add food that needs no refrigeration or cooking.</strong> Keep a
        manual can opener with it. <Cite id="PREPAREDBC" />
      </>,
      <>
        <strong>Make one sleeping area safer.</strong> Move heavy objects down,
        move the bed away from glass and secure tall furniture.{" "}
        <Cite id="PREPAREDBC" /> <Cite id="COV-EXPLORER-25" />
      </>,
      <>
        <strong>Pack the first grab-and-go bag.</strong> Include medication,
        warm layers, a light, a power bank, identification and the written plan.{" "}
        <Cite id="PREPAREDBC" />
      </>,
    ],
    closing: (
      <>
        Each step lets a household manage longer without outside help, leaving
        limited public resources for the people who have no other option.{" "}
        <Cite id="PEIRS" />
      </>
    ),
  },
};
