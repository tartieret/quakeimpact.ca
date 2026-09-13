import Link from "next/link";
import { Cite } from "@/components/citation";
import {
  Callout,
  Prose,
  Quote,
  VerificationNote,
} from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Fuel. The body of `/after/fuel/`, ported from `docs/copy/fuel.md`.
 *
 * The words are the copy's, verbatim, and the voice pass over this page was
 * made in both files so the two do not drift. The Tōhoku block is the copy's
 * last blockquote: it is an aside rather than a gap, so it renders as `Callout`
 * with the copy's bold lead as its label, the way a `VerificationNote` takes
 * one.
 */
export const fuel: PageModule = {
  meta: {
    route: "/after/fuel/",
    title: "Fuel",
    description:
      "The province’s earthquake response plan sets fuel apart from the other critical resources, because the distribution of everything else runs on it.",
    nav: "Fuel",
    kicker: "Life afterwards",
    standfirst: (
      <>
        The province’s earthquake response plan sets fuel apart from the other
        critical resources, because the distribution of everything else runs on
        it. <Cite id="PEIRS" /> The same plan assumes existing supply chains will
        be inoperable. <Cite id="PEIRS" />
      </>
    ),
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "PEIRS",
      "FUEL-GN-21",
      "UBC-FUEL",
      "BC-EMERG-21",
      "NSH-SPEC",
      "NSP-SPEC",
      "METI-2011",
    ],
  },

  sections: [
    {
      title: "Fuel is the one resource everything else moves on",
      body: (
        <Prose>
          <p>
            The Provincial Earthquake Immediate Response Strategy is British
            Columbia’s operational plan for the days after a major earthquake.
            Of the resources it calls critical, it sets one apart:
          </p>
          <Quote
            speaker="The Province of British Columbia, in the Provincial Earthquake Immediate Response Strategy"
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
            Fuel moves every other supply, carries the people who respond, and
            runs the generators under the buildings that have lost their power.
          </p>
          <p>
            The same plan assumes the movement stops: “Road, rail, air, and
            marine transportation will be disrupted, and existing supply chains
            will be inoperable.” <Cite id="PEIRS" /> That is written against the
            province’s primary planning scenario, a shallow magnitude 7.0
            earthquake near Greater Vancouver. <Cite id="PEIRS" />
          </p>
        </Prose>
      ),
    },

    {
      title: "A service station with full tanks and no power dispenses nothing",
      body: (
        <Prose>
          <p>
            A pump is an electric motor. The till beside it is a computer and
            the card reader needs a network. A station with full underground
            tanks hands out nothing while the power is off, and neither does an
            undamaged station the delivery truck cannot reach.
          </p>
          <p>
            In the first week, fuel arrives or does not arrive on two things:
            the power line that runs the station’s pumps, and the road the
            tanker comes down. What BC Hydro has
            published about how long power takes to come back is on the{" "}
            <Link
              href="/after/electricity/"
              className="text-accent underline underline-offset-2"
            >
              electricity
            </Link>{" "}
            page, and what the province expects of the roads is on the{" "}
            <Link
              href="/after/transportation/"
              className="text-accent underline underline-offset-2"
            >
              transportation
            </Link>{" "}
            page.
          </p>
          <VerificationNote label="No current figure for how much fuel the region holds">
            The only figures published for this region’s days of supply come
            from a single phone interview during a flood. On 21 November 2021,
            during the flood emergency in the province’s southwest, Global News
            quoted Dan McTeague, president of the advocacy organisation
            Canadians for Affordable Energy. <Cite id="FUEL-GN-21" /> That is
            one person’s remark to a reporter rather than a study, and it
            predates the 2024 Trans Mountain Expansion. The nearest
            academic work, a 2016 study of the coastal British Columbia fuel
            transportation system, gives its figure for Vancouver Island, not
            for here. <Cite id="UBC-FUEL" /> Nothing current has been published
            for the Lower Mainland.
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title:
        "British Columbia restricted fuel purchases by emergency order in 2021",
      body: (
        <Prose>
          <p>
            In November 2021 the province issued an emergency order restricting
            fuel purchases across the southwest of British Columbia.{" "}
            <Cite id="BC-EMERG-21" />
          </p>
          <p>
            That was a flood, and a smaller disruption than a major earthquake
            would bring. It is still what a fuel shortage has looked like here:
            a provincial order setting a limit on what a person may buy.
          </p>
          <VerificationNote label="Nobody has published who gets fuel first">
            The province names fuel as a critical resource and does not say who
            allocates it after a major earthquake, in what order, or under what
            authority. <Cite id="PEIRS" /> No British Columbia agency has
            published a fuel prioritisation plan for an earthquake. The 2021
            orders show that the province will act once a shortage arrives. They
            do not say what the rules would be the next time.
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title: "A hospital generator is a fuel tank somebody has to keep refilling",
      body: (
        <Prose>
          <p>
            A hospital is the clearest case of a building running on a
            generator. A generator holds hours or days of diesel, not weeks.
            When it runs low, somebody has to drive more of it there, over the
            same roads as everything else.
          </p>
          <p>
            The new Surrey hospital and the new St. Paul’s, both still being
            built, each specify 72 hours of self-sufficiency for fuel, water and
            sanitary holding, in identical terms. <Cite id="NSH-SPEC" />{" "}
            <Cite id="NSP-SPEC" />
          </p>
          <p>
            That figure lives in two project agreements. It is not a code, not a
            standard, and it reaches no hospital already open. What Vancouver
            General, Surrey Memorial, Burnaby, Lions Gate, Richmond or St.
            Paul’s on Burrard hold in their tanks is not in the public record.
          </p>
        </Prose>
      ),
    },

    {
      title: "Every crew repairing everything else is queuing for the same fuel",
      body: (
        <Prose>
          <p>
            The crews restoring{" "}
            <Link
              href="/after/electricity/"
              className="text-accent underline underline-offset-2"
            >
              electricity
            </Link>{" "}
            drive to the poles. The trucks carrying{" "}
            <Link
              href="/after/food/"
              className="text-accent underline underline-offset-2"
            >
              food
            </Link>{" "}
            run the same roads as everything else. Bulk fuel arrives at
            terminals and wharves on the same shoreline and the same delta soils
            as{" "}
            <Link
              href="/after/large-infrastructure/"
              className="text-accent underline underline-offset-2"
            >
              the ports
            </Link>
            . Every one of those movements needs{" "}
            <Link
              href="/after/transportation/"
              className="text-accent underline underline-offset-2"
            >
              the roads and bridges
            </Link>{" "}
            to be passable.
          </p>
          <p>
            A service station needs the grid to run its pumps. The grid needs
            fuel to run the generators and to move the crews who bring it back.
          </p>
          <p>
            The province plans on the routes being “damaged or only partially
            functional and operating at a much-reduced capacity for an extended
            period (weeks to months)”, and on the rail network being “largely
            unusable during the immediate response phase”. <Cite id="PEIRS" />{" "}
            Road and rail are the two ways fuel moves in quantity.
          </p>
          <Callout label="Japan, 2011">
            <p>
              After the 2011 Great East Japan Earthquake, the Pacific-coast oil
              bases that supplied the Tōhoku region “stopped operating and were
              unable to ship existing inventory”, in the words of a briefing by
              Japan’s Agency for Natural Resources and Energy to the Cabinet
              Office’s disaster management council. <Cite id="METI-2011" /> The
              fuel was there; the terminals and the trucks to move it were not.
              The briefing’s own lesson is that there had been no system for
              finding out which terminals were working, what stock they held and
              where the tanker trucks were. <Cite id="METI-2011" /> This is a
              Japanese government document about Japan. It shows what the
              bottleneck looked like there and forecasts nothing here.
            </p>
          </Callout>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        A household cannot stock its way through a fuel shortage. What helps is
        decided before the earthquake.
      </>
    ),
    items: [
      // No citation, and none is missing: this bullet claims no quantity and
      // rests on no document. It is the consequence of the section above it.
      <>
        <strong>Keep the tank above half.</strong> The fuel already in the car is
        the fuel you can count on when the pumps have no power, and half a tank
        costs nothing to carry.
      </>,
      <>
        <strong>Work out now what you could reach without a car.</strong> Find
        out which of the places you would need to get to are within walking or
        cycling distance, and keep a bicycle in working order if you have one.
        What the province plans for people while the crossings are shut is in{" "}
        <Link
          href="/getting-around/"
          className="text-accent underline underline-offset-2"
        >
          getting around
        </Link>
        .
      </>,
      <>
        <strong>Do not store fuel at home.</strong> It is a fire risk, and a can
        in the garage is no answer to roads the province plans on running at
        much-reduced capacity for weeks to months. <Cite id="PEIRS" />
      </>,
    ],
    closing: (
      <>
        None of this makes the fuel come back sooner. It decides how much of your
        week depends on it.
      </>
    ),
  },
};
