import Link from "next/link";
import { Cite } from "@/components/citation";
import { Figure, Prose, Quote, Subhead } from "@/components/page-parts";
import { PrepareWaterArithmetic } from "@/components/figures/prepare";
import type { PageModule } from "./index";

/**
 * Preparing. The body of `/prepare/`, ported from `docs/copy/prepare.md`.
 *
 * The words are the copy's, verbatim. The page is guidance rather than a
 * comparison of documents: where the published advice differs, the earthquake
 * guide is the one followed, because it is the document written for this
 * hazard, and the other figure is given once in its own wording rather than
 * argued over.
 *
 * Two things in here are load-bearing and easy to flatten by accident. The
 * household water total is arithmetic worked from a published rate, which the
 * sentence carrying it says in the same breath. And the gas advice is one rule
 * in three parts, assembled from three bodies that agree on all three: know
 * where the valves are, leave them alone unless an official says otherwise,
 * and never restore the service yourself.
 */
export const prepare: PageModule = {
  meta: {
    route: "/prepare/",
    title: "Preparing",
    nav: "Preparing",
    kicker: "Part 3",
    standfirst:
      "What British Columbia’s earthquake guidance asks of a household, in the order worth doing it. The two things that cost nothing, a plan for finding each other and a conversation with the neighbours, are the two most households have skipped.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "PEIRS",
      "PREPAREDBC",
      "COV-EXPLORER-25",
      "COV-WORKSHEET-26",
      "PREPAREDBC-PLAN",
      "PREPAREDBC-GUIDES",
      "PREPAREDBC-NEIGHBOURHOOD",
      "RESEARCHCO-PREP-21",
      "DCRRA-2025",
      "NRCAN-EEW",
      "PREPAREDBC-KIT",
      "FBC-EQ",
      "SURREY-PREP",
      "PREPAREDBC-DISABILITY",
      "ECOMM-EQ",
      "COV-HUBS",
      "DRR-GOVPAGE",
      "PREPAREDBC-BUDGET",
      "NSEM-KIT",
      "COV-PREPMAIN",
    ],
  },

  sections: [
    {
      title:
        "The province’s plan says family and neighbours are the first responders",
      body: (
        <Prose>
          <p>From the province’s Earthquake Immediate Response Strategy:</p>
          <Quote
            speaker="The Province of British Columbia"
            source="Provincial Earthquake Immediate Response Strategy, page 42, emphasis added"
            cite={<Cite id="PEIRS" />}
          >
            <p>
              “During a disaster, local and provincial government resources will
              be overwhelmed. In such an event, one’s family and neighbours are
              likely to be the only available first responders.{" "}
              <strong>
                People living in an earthquake zone should aim to be
                self-sufficient for up to two weeks.
              </strong>{" "}
              Prepared neighbourhoods, families, and individuals will
              reduce pressure on overwhelmed government agencies and allow
              available resources to go where they are most needed.”
            </p>
          </Quote>
          <p>
            The last sentence is the reason the province gives. Preparing is not
            only about looking after yourself. It is what frees the ambulance,
            the crew and the shelter place for the person who has no other
            option.
          </p>
          <p>
            PreparedBC’s Earthquake and Tsunami Preparedness Guide asks for
            food, water and supplies for each person and pet in the home “for
            at least two weeks, or longer”. <Cite id="PREPAREDBC" /> The support
            system behind that ask is smaller. The province’s Emergency Support
            Services program, which houses and feeds people who have lost their
            homes, “is designed to provide up to 72 hours of support”, and the
            same page says it “is not designed for the scope and scale of
            services required after a catastrophic earthquake”.{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            The City of Vancouver asks for less. It tells residents to gather
            supplies for “a minimum of 3 days, although your target should be a
            week to 2 weeks” <Cite id="COV-EXPLORER-25" />, and the worksheet it
            hands them multiplies four litres by three days and stops there.{" "}
            <Cite id="COV-WORKSHEET-26" /> Three days is a thin floor for the
            city that would be running the response. The provincial guide’s own
            line is that “It may be weeks before infrastructure, utilities and
            essential services are restored” <Cite id="PREPAREDBC" />, and the{" "}
            <Link
              href="/after/"
              className="text-accent underline underline-offset-2"
            >
              system pages
            </Link>{" "}
            here put several services in weeks to months. The rest of this page
            works to the two-week figure, and a reader who has been through
            those pages should be aiming past it rather than at three days.
          </p>
        </Prose>
      ),
    },

    {
      title: "Write the plan down, and agree where you would meet",
      body: (
        <Prose>
          <p>
            The guide’s own planning checklist is nine items, and only two of
            them are shopping. <Cite id="PREPAREDBC" />
          </p>
          <ul>
            <li>Identify the hazards in your region.</li>
            <li>
              Make an emergency phone list with at least one out-of-area
              contact.
            </li>
            <li>Pick a meeting spot in case you are separated.</li>
            <li>Learn how to turn off the utilities.</li>
            <li>Secure your space.</li>
            <li>
              Identify which official sources you will get information from.
            </li>
            <li>
              Identify any special needs, such as medications, and make sure a
              proper supply is on hand.
            </li>
            <li>
              Store enough food and water for everyone in your home for at least
              two weeks.
            </li>
            <li>Create grab-and-go bags.</li>
          </ul>
          <p>
            The province publishes a fill-in-the-blanks household plan to write
            it on, in English, French, Simplified and Traditional Chinese and
            Punjabi. <Cite id="PREPAREDBC-PLAN" /> <Cite id="PREPAREDBC-GUIDES" />
          </p>

          <Subhead>The out-of-area contact</Subhead>
          <p>
            One phone number, somewhere the earthquake is not. The province’s
            advice is to “choose someone who lives outside of B.C. and wouldn’t
            be affected by a major event, such as an earthquake”, and the reason
            it gives is that local phone and mobile networks may be overwhelmed.{" "}
            <Cite id="PREPAREDBC-PLAN" /> Everyone in the household calls or
            texts that one person, and that person tells each of them where the
            others are.
          </p>

          <Subhead>The meeting place</Subhead>
          <p>
            The province asks households to pick a meeting place, and a
            secondary location such as a community centre in case you cannot get
            back to the first. <Cite id="PREPAREDBC-PLAN" /> Its neighbourhood
            guide is more concrete: one meeting place close by, “like a mailbox
            on your street”, and another farther away, “like a nearby park”.{" "}
            <Cite id="PREPAREDBC-NEIGHBOURHOOD" />
          </p>
          <p>
            This is the part that works when nothing else does, and it is the
            part most households have skipped. In a 2021 poll of 800 British
            Columbians, 28 per cent of respondents had a plan for how to contact
            family or friends and 22 per cent had an agreed meeting place.{" "}
            <Cite id="RESEARCHCO-PREP-21" />
          </p>
          <p>
            Two published statements explain why an agreement made in advance is
            worth more than a phone. The province’s plan says that if service is
            available, networks “may be congested or overloaded, making
            communication extremely challenging”, and that “texts and
            low-bandwidth data-based services may be the most reliable method of
            communication”. <Cite id="PEIRS" /> The province’s 2025 risk
            assessment says disruptions in communications continue for days to
            weeks, with access prioritised for emergency personnel.{" "}
            <Cite id="DCRRA-2025" />
          </p>
          <p>
            Plan how you would get home as well as who you would call. The City
            of Vancouver’s own advice is to “plan alternate ways to get home
            considering roads may be blocked and trains will not be running
            until damage assessments are complete”.{" "}
            <Cite id="COV-EXPLORER-25" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Turn the alerts on, and know what to do in the seconds they buy",
      body: (
        <Prose>
          <p>
            The Canadian Earthquake Early Warning system detects an earthquake
            immediately after it starts and sends an alert through the National
            Public Alerting System, so alerts arrive on television, on the radio
            and on compatible mobile phones. <Cite id="PREPAREDBC" /> It
            provides “seconds to tens-of-seconds of warning”, which is enough to
            get down and under something, and the guide is explicit that early
            warning systems cannot predict earthquakes. <Cite id="PREPAREDBC" />{" "}
            Close to where the earthquake starts, the alert may arrive with the
            shaking rather than before it. <Cite id="NRCAN-EEW" />
          </p>
          <p>
            The seconds buy one action, and it is the same one the guide gives
            for feeling the ground move:
          </p>
          <Quote
            speaker="PreparedBC"
            source="Earthquake and Tsunami Preparedness Guide"
            cite={<Cite id="PREPAREDBC" />}
          >
            <p>
              “If you feel the ground shake or receive an alert on your phone,
              TV or radio from the Canadian Earthquake Early Warning system,
              immediately Drop, Cover and Hold On. After the shaking stops count
              to 60 before getting up.”
            </p>
          </Quote>
          <p>
            Drop to your hands and knees. Cover your head and neck with your arm
            and take shelter under a sturdy piece of furniture, or crawl to the
            nearest interior corner or wall if there is none nearby. Hold on to
            your shelter until the shaking stops, then count to 60, which is the
            time the guide gives loose objects to settle.{" "}
            <Cite id="PREPAREDBC" /> The guide publishes the same three steps
            for someone using a wheelchair, a walker or a cane, with the wheels
            locked in place of the drop. <Cite id="PREPAREDBC" /> Aftershocks
            get the same response, and the guide says to expect them.{" "}
            <Cite id="PREPAREDBC" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Water is the first thing to store",
      body: (
        <Prose>
          <p>
            Four litres per person per day, for drinking and sanitation
            together, is the province’s rate. <Cite id="PREPAREDBC" /> The City
            of Vancouver prints the same rate. <Cite id="COV-EXPLORER-25" /> For
            a household of four holding two weeks, that is at least 224 litres.
            That total is arithmetic from the published rate rather than a
            figure either body prints.
          </p>
          <Figure
            alt="At four litres per person per day, a household of four needs at least 224 litres to cover two weeks. The total is arithmetic from the published rate, and neither the province nor the City prints it."
            caption={
              <>
                One mark is four litres, which is the published rate for one
                person for one day. <Cite id="PREPAREDBC" />{" "}
                <Cite id="COV-EXPLORER-25" /> Fifty-six of them is a household
                of four for two weeks, worked from that rate rather than printed
                in either document.
              </>
            }
          >
            <PrepareWaterArithmetic />
          </Figure>
          <p>
            Pets are on the same list, at about 30 millilitres of water per
            kilogram of body weight per day. <Cite id="PREPAREDBC-KIT" />
          </p>
          <p>
            Water is bulky, and it is still the first thing to store, because
            the province’s 2025 risk assessment says people are thirsty within
            24 hours and that distributing bulk drinking water across the
            affected region stays challenging for the first four to five days.{" "}
            <Cite id="DCRRA-2025" /> Stored water covers exactly that gap.
            Whatever you can hold is worth holding, refilled on a schedule you
            will actually keep.
          </p>
        </Prose>
      ),
    },

    {
      title: "Food that needs no cooking, and a bag by the door",
      body: (
        <Prose>
          <p>
            Non-perishable food for at least two weeks, with a manual can
            opener. <Cite id="PREPAREDBC" /> Then the rest of the kit the guide
            lists: a battery-powered or hand-crank radio, a flashlight and spare
            batteries, a phone charger and a power bank, a first aid kit and
            medications, a dust mask, garbage bags and moist towelettes,
            seasonal clothing, sturdy footwear and an emergency blanket, a
            whistle, and a copy of your plan with copies of important documents
            such as insurance papers and identification, and cash in small
            bills. <Cite id="PREPAREDBC" />
          </p>
          <p>
            Keep it all together somewhere you can reach.{" "}
            <Cite id="PREPAREDBC" />
          </p>
          <p>
            A grab-and-go bag is the smaller version of the same thing, one for
            each person and pet, customised to personal or medical needs, in
            case you have to leave quickly. The guide asks that the bags be
            accessible and that everyone in the household knows where they are.{" "}
            <Cite id="PREPAREDBC" /> The province’s kit list puts one more thing
            in the bag: a local map with your household meeting places marked on
            it. <Cite id="PREPAREDBC-KIT" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Secure the heavy things in the rooms where people sleep",
      body: (
        <Prose>
          <p>
            In the province’s own narrative of the shaking, unsecured objects
            “fall or fly through the air”, windows break and glass scatters.{" "}
            <Cite id="PEIRS" /> Most of what the guidance asks for is about the
            things in the room rather than the building around it.
          </p>
          <p>
            What the provincial guide asks for: tall free-standing furniture
            such as bookcases, cabinets and shelving fastened to wall studs with
            brackets; framed pictures and mirrors moved away from beds, couches
            and chairs; cabinet doors held shut with push or pull latches;
            fridges, freezers, washers and dryers strapped; and the water heater
            anchored snugly to the wall. <Cite id="PREPAREDBC" />
          </p>
          <p>
            If you rent and cannot drill, the City of Vancouver publishes the
            version that needs no fixings: heavy objects on lower shelves,
            pictures and mirrors away from beds and seating, double-sided tape
            or velcro under smaller appliances, the bed away from the window,
            and sturdy shoes under the bed. <Cite id="COV-EXPLORER-25" />
          </p>
          <p>
            Start with the rooms where people sleep, and with anything tall next
            to a bed.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Know where the shut-offs are, and leave the gas alone unless an official says otherwise",
      body: (
        <Prose>
          <p>
            The provincial guide asks everyone to learn how to turn off their
            home’s electrical panel, water and gas valves “in case you’re
            instructed to do so by local officials”, and to hang a wrench close
            to the gas valve. <Cite id="PREPAREDBC" /> It is equally clear about
            the other half: “If your gas is shut off at the meter, DON’T try to
            turn it back on. Only a licensed gas contractor can do that safely.”{" "}
            <Cite id="PREPAREDBC" /> The City of Vancouver asks the same first
            thing, which is to know where the shut-offs are and how to use them.{" "}
            <Cite id="COV-EXPLORER-25" />
          </p>
          <p>
            FortisBC tells customers not to shut their gas off themselves. If it
            is shut off at the meter, only a registered gas contractor may
            restore service, and restoration runs household by household, with a
            visit to each home to relight every appliance. <Cite id="FBC-EQ" />{" "}
            Surrey publishes the same instruction with the consequence attached:
            “Leave natural gas service on unless officials tell you to turn it
            off. If you go turn off the gas, the gas company has to reconnect
            it, which may take weeks after a major emergency.”{" "}
            <Cite id="SURREY-PREP" />
          </p>
          <p>
            So the practical rule has three parts. Know where the valves are.
            Leave them where they are unless an official tells you otherwise.
            Never turn the gas back on yourself.
          </p>
        </Prose>
      ),
    },

    {
      title: "Plan around what the people in your home actually need",
      body: (
        <Prose>
          <p>
            The guide asks households to “consider the unique requirements of
            everyone in your home, such as children, older adults, pets and
            those with additional needs”, and to think about what each of them
            needs to be safe and comfortable. <Cite id="PREPAREDBC" />{" "}
            Medication is the one item on the checklist nobody can improvise:
            identify what is needed and make sure a proper supply is on hand.{" "}
            <Cite id="PREPAREDBC" />
          </p>
          <p>
            The province’s guide for people with disabilities is the most
            specific document in the set, and much of it is useful to anyone who
            might need help. It asks for a trusted support network of at least
            three people, and for a list of things settled with them before
            anything happens: that they will check on you immediately, that they
            hold keys and relevant medical information, that they know how to
            operate specialised medical or mobility equipment such as lifts,
            wheelchairs or scooters, and that they know where your supplies are.
            It also says to agree and practise how you would contact each other,
            and “do not count on telephones working”.{" "}
            <Cite id="PREPAREDBC-DISABILITY" /> A list of your medications with
            the details from your pharmacist, and extra medication or supplies
            where that is possible, belong in the same plan.{" "}
            <Cite id="PREPAREDBC-DISABILITY" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Meet the neighbours, because they are the help that arrives first",
      body: (
        <Prose>
          <p>
            The province says it plainly: “the most immediate help will come
            from those around you”, and that building those relationships now
            means a better response and a faster recovery.{" "}
            <Cite id="PREPAREDBC-PLAN" /> Its response plan says the same thing
            operationally, recording that communities “informally self-activate”
            and “will work together without receiving guidance from the
            Province”. <Cite id="PEIRS" />
          </p>
          <p>
            The province’s neighbourhood guide says where to start, and none of
            it needs a budget. Begin with a group that already exists, such as a
            Block Watch group, a residents’ association or a strata council.
            Work out who might need extra help, including people with small
            children or pets, older adults, people with disabilities and people
            who speak English as a second language. Ask what everyone has and
            can do: who has a barbecue, a generator or a chainsaw, who has first
            aid training, and who could interpret for a neighbour who needs it.
            Agree the two meeting places. Talk about a central storage space,
            which is one published answer to the problem of a kit that will not
            fit in a small apartment.{" "}
            <Cite id="PREPAREDBC-NEIGHBOURHOOD" />
          </p>
          <p>
            The same guide sets the limit on all of this: “neighbourhood
            volunteers are not official first responders”, and instructions from
            officials and first responders come first.{" "}
            <Cite id="PREPAREDBC-NEIGHBOURHOOD" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Stay where you are if the building is safe",
      body: (
        <Prose>
          <p>The guidance is to stay put rather than to travel:</p>
          <Quote
            speaker="PreparedBC"
            source="Earthquake and Tsunami Preparedness Guide"
            cite={<Cite id="PREPAREDBC" />}
          >
            <p>
              “If your home, apartment or condominium is structurally safe
              following an earthquake, the best thing you can do is
              shelter-in-place. In other words – stay where you are. This will
              help first responders do their jobs and support those who need
              them most.”
            </p>
          </Quote>
          <p>
            Move cautiously and look for hazards above and below. If the home
            has considerable damage and poses a safety risk, or officials direct
            an evacuation, leave immediately, take the grab-and-go bags, and
            follow the instructions given. Reception centres may be opened for
            food and lodging, and their locations are listed in the evacuation
            order that sends you to them. <Cite id="PREPAREDBC" /> Only call
            9-1-1 for life-threatening emergencies: after a magnitude 4.7
            earthquake in 2015, E-Comm recorded a 1,500 per cent increase in
            9-1-1 calls, and the province’s guide gives the same instruction.{" "}
            <Cite id="ECOMM-EQ" /> <Cite id="PREPAREDBC" />
          </p>
          <p>
            In Vancouver, 25 disaster support hubs are marked by yellow signs at
            23 community centres, Oppenheimer Park and the Fraserview branch of
            Vancouver Public Library. The City says services there may include
            group lodging, distribution of food, water and supplies, recovery
            information and help finding family. It publishes no capacity
            figure, so the hub is a place to find information and other people
            rather than a place with a bed reserved for you.{" "}
            <Cite id="COV-HUBS" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Disaster Response Route signs mark roads the public is asked to leave",
      body: (
        <Prose>
          <p>
            Those routes stay open to everyone until a state of emergency is
            declared. After that they are activated and controlled for emergency
            responders, and the official instruction to the public is to get off
            them as soon as possible. <Cite id="DRR-GOVPAGE" /> They are not
            evacuation routes, and using them as one would get in the way of the
            response.
          </p>
          <p>
            No City of Vancouver public page explains this. The provincial page
            is the only place it is set out. <Cite id="DRR-GOVPAGE" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Build it over time if money is tight",
      body: (
        <Prose>
          <p>
            The City of Vancouver states the barrier in its own voice: people
            with limited resources “often lack the ability to control the
            structural readiness of their building and are less able to invest
            in personal preparedness”, and it names who that falls on:
            “renters, low-income residents, older adults, and people with
            disabilities”. <Cite id="COV-EXPLORER-25" /> It publishes a resident
            saying it more plainly: “If you barely have the resources to get by
            day-to-day, you don’t have the money to prepare.”{" "}
            <Cite id="COV-EXPLORER-25" />
          </p>
          <p>
            The province publishes the answer the City does not. PreparedBC’s
            budget advice is built around dollar stores, thrift stores and
            garage sales, starting with food and water and adding items as money
            allows, a first aid kit assembled from what is already in the house,
            and a thrift-store backpack for the grab-and-go bag.{" "}
            <Cite id="PREPAREDBC-BUDGET" /> North Shore Emergency Management
            links to it. <Cite id="NSEM-KIT" />
          </p>
          <p>
            A partial kit is worth far more than a planned one, and the City’s
            own landing page says the useful thing: “Start with what you have
            and add more as you can.” <Cite id="COV-PREPMAIN" />
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: <>In this order. The first three cost nothing.</>,
    // The standing link goes to `/prepare/`, which is this page.
    href: null,
    items: [
      <>
        <strong>Meet the neighbours.</strong> Know who lives alone, who needs
        medication, who has mobility limits, and who has tools. It is what the
        province’s plan is built on. <Cite id="PEIRS" />
      </>,
      <>
        <strong>Agree a meeting place and an out-of-area contact.</strong> One
        place close to home, one farther away, and one phone number outside the
        region. <Cite id="PREPAREDBC-PLAN" />{" "}
        <Cite id="PREPAREDBC-NEIGHBOURHOOD" />
      </>,
      <>
        <strong>
          Turn on Earthquake Early Warning alerts, and practise Drop, Cover and
          Hold On.
        </strong>{" "}
        <Cite id="PREPAREDBC" />
      </>,
      <>
        <strong>Store water first.</strong> Four litres per person per day,
        which is PreparedBC’s rate <Cite id="PREPAREDBC" />, for as many days as
        you can hold.
      </>,
      <>
        <strong>Then food that needs no cooking and no refrigeration</strong>,
        and a manual can opener. <Cite id="PREPAREDBC" />
      </>,
      <>
        <strong>
          Then a light, a radio, a power bank, warm layers and sturdy shoes
        </strong>
        , kept where you will be rather than only at home.{" "}
        <Cite id="PREPAREDBC" />
      </>,
      <>
        <strong>Secure the heavy things in the rooms where people sleep.</strong>{" "}
        Start with anything tall next to a bed, and move heavy objects to lower
        shelves. <Cite id="PREPAREDBC" /> <Cite id="COV-EXPLORER-25" />
      </>,
      <>
        <strong>
          Leave the gas on unless an official tells you to turn it off
        </strong>
        , and never turn it back on yourself. <Cite id="PREPAREDBC" />{" "}
        <Cite id="FBC-EQ" /> <Cite id="SURREY-PREP" />
      </>,
      <>
        <strong>Write the plan on paper and put a copy in the bag.</strong> The
        province publishes a fill-in-the-blanks one.{" "}
        <Cite id="PREPAREDBC-PLAN" />
      </>,
      <>
        <strong>Build it over time if money is tight.</strong> The province
        publishes advice on assembling a kit on a budget, and a partial kit is
        worth far more than a planned one. <Cite id="PREPAREDBC-BUDGET" />
      </>,
    ],
    closing: (
      <>
        Every one of these frees capacity for somebody who has no other option,
        which is the reason the province’s own plan gives for asking.{" "}
        <Cite id="PEIRS" />
      </>
    ),
  },
};
