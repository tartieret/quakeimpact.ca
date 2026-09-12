import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose, VerificationNote } from "@/components/page-parts";
import type { PageModule } from "./index";

const link = "text-accent underline underline-offset-2";

/**
 * Food. The body of `/after/food/`, ported from `docs/copy/food.md`.
 *
 * The words are the copy's, verbatim. The page carries no figure: nothing on
 * it is a quantity with a domain a source states, so there is nothing here to
 * draw that would not be a drawn guess.
 */
export const food: PageModule = {
  meta: {
    route: "/after/food/",
    title: "Food",
    nav: "Food",
    kicker: "Life afterwards",
    standfirst: (
      <>
        The province plans on existing supply chains being inoperable, and on
        the network that brings meat, fruit and vegetables, dairy and baked
        goods taking weeks or months to recover. <Cite id="PEIRS" /> Nothing is
        stored for the public to bridge that gap.
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "PEIRS",
      "PHAC-NESS",
      "GM-AAFC-19",
      "COV-HUBS",
      "COV-RNTOOLKIT-19",
      "STATCAN-2021",
      "EMBC-PLANS",
      "BCAGRI-EM",
      "MV-EM",
      "PREPAREDBC",
    ],
  },

  sections: [
    {
      title:
        "The till, the cold case and the freezer aisle all stop on the same power",
      body: (
        <Prose>
          <p>
            A grocery shop is a building full of machines. The tills and the
            card readers need power and a network. The cold case, the walk-in
            cooler and the freezer aisle need power to stay cold. None of that
            is a claim about earthquakes; it is what the equipment is.
          </p>
          <p>
            So the first thing that happens to food happens indoors, before any
            delivery is late. Chilled and frozen stock is on a clock from the
            moment the power goes, and a shop that cannot take payment cannot
            sell what is left. How long the power stays off is{" "}
            <Link href="/after/electricity/" className={link}>
              electricity
            </Link>
            ’s question.
          </p>
          <p>
            Then there is whether anything arrives to replace it. Food comes in
            by truck, over the same roads as everything else, and a truck runs
            on{" "}
            <Link href="/after/fuel/" className={link}>
              fuel
            </Link>
            . The province’s planning assumptions answer that part directly:
            “Road, rail, air, and marine transportation will be disrupted, and
            existing supply chains will be inoperable.” <Cite id="PEIRS" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The province’s own list of what stops moving reads like a grocery shop",
      body: (
        <Prose>
          <p>
            In its earthquake response strategy the province says the
            fast-moving consumer goods network “will be disrupted. It may take
            weeks or months to recover.” <Cite id="PEIRS" /> Fast-moving
            consumer goods is trade language, and the province glosses it in the
            same document: “products that are sold quickly and at relatively low
            cost, such as meat, fruits and vegetables, dairy products, baked
            goods, toiletries, and cleaning products”. <Cite id="PEIRS" />
          </p>
          <p>
            That list is a grocery shop, and it is the reason the usual advice
            does not cover this on its own. Four of the six things the province
            names are perishable: meat, produce, dairy, bread.{" "}
            <Cite id="PEIRS" /> Those are exactly the items no household can put
            by. A cupboard of tins is a real answer to a short gap, and it is
            not an answer to the one the province is describing.
          </p>
          <p>
            The other two the province names are toiletries and cleaning
            products. <Cite id="PEIRS" /> They travel in the same trucks, they
            keep indefinitely, and they are the two almost nobody stores.
          </p>
          <p>
            This is not only about the offshore earthquake. The province’s own
            primary planning scenario is a shallow crustal magnitude 7.0 near
            Greater Vancouver, so these are statements about the nearer, smaller
            earthquake as well. <Cite id="PEIRS" />
          </p>
        </Prose>
      ),
    },

    {
      title: "No level of government is holding food for the public here",
      body: (
        <Prose>
          <p>
            The federal stockpile is real, and it is not a food stockpile. The
            National Emergency Strategic Stockpile holds medical equipment such
            as ventilators, cardiac monitors and personal protective equipment,
            pharmaceuticals, social service supplies such as beds and blankets,
            and mini-clinic triage units. Its own page mentions neither food nor
            water. <Cite id="PHAC-NESS" />
          </p>
          <p>
            The department that would be asked for food says much the same about
            itself. A March 2018 case study by Agriculture and Agri-Food Canada,
            obtained under freedom of information and reported by the Globe and
            Mail in 2019, records that the department has no warehouses full of
            supplies, no direct access to or ownership of food or water
            supplies, limited water expertise, and would be challenged to lead a
            federal response to a request for safe food and water.{" "}
            <Cite id="GM-AAFC-19" />
          </p>
          <p>
            The provincial arrangement is a way of buying rather than a reserve.
            Emergency Support Services meets a household’s needs by purchasing
            from, or referring people to, local retailers after the event.{" "}
            <Cite id="GM-AAFC-19" /> That is a sound design for a house fire or
            a flood in one valley. Here it runs through the same retailers and
            the same roads the province expects to be disrupted,{" "}
            <Cite id="PEIRS" /> so it is at its weakest in exactly the event it
            is meant to cover.
          </p>
        </Prose>
      ),
    },

    {
      title: "A disaster support hub is a meeting point, not a warehouse",
      body: (
        <Prose>
          <p>
            Vancouver designates 25 disaster support hubs, the places residents
            are told to gather after a major earthquake. <Cite id="COV-HUBS" />{" "}
            The City’s own neighbourhood toolkit describes what is there: basic
            items such as pens, whiteboards, signage and a tent, and beyond that
            “the skills, knowledge and supplies that people bring”.{" "}
            <Cite id="COV-RNTOOLKIT-19" /> A hub is a coordination point, and
            it can be used to hand things out. There is no food in it waiting.
          </p>
          <p>
            The voluntary sector’s capacity is real, and it is a different size
            from the problem. The Salvation Army’s BC disaster services director
            estimated it could produce up to 50,000 meals a day within two days
            of a major earthquake, rising with airdrops within a week, with road
            and bridge conditions dictating where those meals could go.{" "}
            <Cite id="GM-AAFC-19" /> The 2021 census counted 2,642,825 people in
            the Vancouver census metropolitan area. <Cite id="STATCAN-2021" />{" "}
            Neither source sets one figure against the other. That is a real
            capability for people in shelters. It is not a food supply for a
            region.
          </p>
          <p>
            Nothing is stored for the public here, and the plan is that
            households stored it themselves. It is a reasonable thing not to
            have known.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The province publishes an emergency plan for foreign animal disease and none for food",
      body: (
        <Prose>
          <p>
            The province’s index of its own emergency plans lists the All Hazard
            Plan, the earthquake response strategy, flood, drought, nuclear,
            pandemic, wildland-urban interface, tsunami notification, flood
            waste and debris, foreign animal disease, a post-secondary plan and
            a guide for schools. There is no food, grocery, consumer-goods or
            supply-chain plan among them. <Cite id="EMBC-PLANS" /> The ministry
            responsible for agriculture publishes emergency material about
            animal disease, wildfire, freshet and flooding at farm level, and
            mentions neither earthquakes nor food supply chains.{" "}
            <Cite id="BCAGRI-EM" />
          </p>
          <p>
            It is not the regional district’s either. Metro Vancouver scopes its
            emergency role, in its own words, to “the delivery of services
            including drinking water, wastewater treatment, solid waste
            management, housing, regional parks, and Electoral Area A”, plus
            9-1-1 and public notification. <Cite id="MV-EM" /> The grocery
            supply chain sits outside the remit of the body a reader might
            reasonably assume owns it.
          </p>
          <VerificationNote label="Not yet measured">
            Nobody has published how much food the Lower Mainland’s shops and
            warehouses hold at any given moment, or how long grocery
            distribution would take to restart here. The province’s “weeks or
            months” is a statement about the consumer goods network across
            British Columbia rather than a study of this region’s warehousing.{" "}
            <Cite id="PEIRS" /> So there is no published answer to how many days
            of food the region holds.
          </VerificationNote>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        The province tells households to aim to be self-sufficient for up to two
        weeks, and says in the same document that Emergency Support Services is
        designed to provide up to 72 hours of support and “is not designed for
        the scope and scale of services required after a catastrophic
        earthquake”. <Cite id="PEIRS" /> Two weeks is the interval to stock
        against.
      </>
    ),
    items: [
      <>
        <strong>Build the pantry out of the half that keeps.</strong> Four of
        the six categories the province names are perishable, so the part of the
        shop a household can hold is the tinned, dried and bottled part.{" "}
        <Cite id="PEIRS" /> PreparedBC asks for non-perishable food for at least
        two weeks, with a manual can opener. <Cite id="PREPAREDBC" />
      </>,
      // No citation, and none is missing: a stove needing power or gas is the
      // kind of consequence no document is paid to write down.
      <>
        <strong>Stock things that can be eaten without cooking.</strong> A
        stove, a kettle and a microwave each depend on something else arriving
        at the building, so a pantry that only becomes a meal with power or gas
        is a pantry with a condition attached.
      </>,
      <>
        <strong>Store the things in a grocery shop that are not food.</strong>{" "}
        Soap, cleaning products and toilet paper fall into two of the six
        categories the province names, they travel in the same trucks, and they
        keep indefinitely. <Cite id="PEIRS" />
      </>,
      <>
        <strong>Count pets in the same calculation.</strong> The provincial
        guide asks for enough for each person and each pet in the home, for at
        least two weeks. <Cite id="PREPAREDBC" />
      </>,
    ],
    closing: (
      <>
        The province’s own reason for asking is not fear. Prepared households,
        it says, “reduce pressure on overwhelmed government agencies and allow
        available resources to go where they are most needed”.{" "}
        <Cite id="PEIRS" />
      </>
    ),
  },
};
