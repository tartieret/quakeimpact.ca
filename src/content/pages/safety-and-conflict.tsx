import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Safety and conflict. The body of `/after/safety-and-conflict/`, ported from
 * `docs/copy/safety-and-conflict.md`.
 *
 * The one system on the grid with no restoration time, which is why both of
 * its cells are hatched. Every event on the page happened somewhere else, so
 * each one illustrates what people did and none of them is a forecast for this
 * region. The evidence is `docs/research/social-disorder.md`.
 */
export const safetyAndConflict: PageModule = {
  meta: {
    route: "/after/safety-and-conflict/",
    title: "Safety and conflict",
    description:
      "After a disaster most people help the people around them. Theft, fights over supplies and violence at home still happen, and some of the worst has come where power, water and communications were out for days.",
    nav: "Safety and conflict",
    kicker: "Life afterwards",
    standfirst: (
      <>
        After a disaster, most people help the people around them.{" "}
        <Cite id="KATRINA-MYTHS-08" /> Theft, fights over supplies and violence
        at home do happen, and some of the worst of it has come where power,
        water and communications were out for days.{" "}
        <Cite id="CHILE-GUARDIAN-10" />
      </>
    ),
    /** First-cited order, which is the order the markers are numbered in. */
    references: [
      "KATRINA-MYTHS-08",
      "CHILE-GUARDIAN-10",
      "DRURY-18",
      "CHCH-RESILIENCE-14",
      "CHILE-COHESION-17",
      "CHCH-CRIME-16",
      "CHILE-USGS-11",
      "CHILE-CRIME-20",
      "KATRINA-FRAMES-06",
      "KATRINA-ALGIERS-10",
      "LOOTING-REVIEW-25",
      "DCRRA-2025",
      "PEIRS",
      "PREPAREDBC",
      "PREPAREDBC-PLAN",
      "PREPAREDBC-NEIGHBOURHOOD",
    ],
  },

  sections: [
    {
      title: "Most people help the people around them",
      body: (
        <Prose>
          <p>
            Isolated cases of antisocial behaviour after a disaster tend to be
            what the news shows, while most people respond positively and
            generously. <Cite id="KATRINA-MYTHS-08" /> Survivors who face the
            same danger start to act as a group: they support each other,
            coordinate what they do and expect help in return.{" "}
            <Cite id="DRURY-18" />
          </p>
          <p>
            The Canterbury earthquakes of 2010 and 2011 in New Zealand showed
            which communities adapted most easily: the ones that already had
            community groups, tribal organisations and local leaders before the
            shaking. Hardship that was already there got worse.{" "}
            <Cite id="CHCH-RESILIENCE-14" />
          </p>
          <p>
            In Chile, living through a big earthquake has been found to raise
            several measures of social cohesion, which then wear away slowly once
            conditions ease. <Cite id="CHILE-COHESION-17" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Crime can fall overall while violence at home does not",
      body: (
        <Prose>
          <p>
            In Christchurch, overall crime fell after the earthquakes, with
            domestic violence the notable exception. Crime still rose in most
            neighbourhoods, even though the total went down.{" "}
            <Cite id="CHCH-CRIME-16" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Serious looting has happened in a stable country",
      body: (
        <Prose>
          <p>
            Looting is one word for several different acts: taking food, water
            or medicine when there is nowhere to buy them, taking goods from a
            damaged shop, and breaking into homes people have left.
          </p>
          <p>
            After the 2010 earthquake in Chile, many survivors in the south went
            into a third day without electricity, communications or fresh water.
            Looting spread across the south, and the president ordered 10,000
            soldiers to protect supermarkets, pharmacies, banks and department
            stores. <Cite id="CHILE-GUARDIAN-10" /> In some places the
            government did not know for several days what local governments
            needed, and the looting surprised response officials and social
            scientists alike. <Cite id="CHILE-USGS-11" />
          </p>
          <p>
            In Concepción, trucks distributing water were attacked, and the mayor
            said nobody wanted to distribute water after that. Next door in San
            Pedro de la Paz, looters stripped a clinic of its medicine and
            supplies. In the same days, many people took their neighbours in, and
            volunteers brought tents and fresh water to families camped in the
            street. <Cite id="CHILE-GUARDIAN-10" />
          </p>
          <p>
            Property crime did not settle at a higher level. Household surveys
            show lasting falls in property crime in the municipalities the
            earthquake hit, consistent with stronger community life and
            neighbours organising to prevent crime themselves.{" "}
            <Cite id="CHILE-CRIME-20" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Stories of violence can do harm of their own",
      body: (
        <Prose>
          <p>
            After Hurricane Katrina struck New Orleans in the United States in
            2005, news coverage cast survivors first as civil unrest and later as
            something close to urban warfare, greatly exaggerating how much
            looting and lawlessness there was. That framing reinforced calls for
            a bigger military role in disasters. <Cite id="KATRINA-FRAMES-06" />
          </p>
          <p>
            Some of the violence was real. There were documented cases of
            hijacking, rioting and looting in New Orleans, and many more reports
            of people cooperating and helping each other.{" "}
            <Cite id="KATRINA-MYTHS-08" /> In the Algiers Point neighbourhood, a
            man was shot in the days after the storm. More than four years later
            a member of a neighbourhood militia was implicated, and the man who
            was shot says it was racially motivated.{" "}
            <Cite id="KATRINA-ALGIERS-10" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The shortages that came with Chile’s worst days are ones an earthquake here is expected to bring",
      body: (
        <Prose>
          <p>
            Research on looting after disasters keeps returning to four things:
            how well off people are, the ties between them, what the media
            report, and what is done to prevent it.{" "}
            <Cite id="LOOTING-REVIEW-25" />
          </p>
          <p>
            <Link
              href="/after/communications/"
              className="text-accent underline underline-offset-2"
            >
              Communications
            </Link>{" "}
            are expected to be disrupted for days to weeks, with what capacity
            survives going to emergency personnel first.{" "}
            <Cite id="DCRRA-2025" /> The network that delivers{" "}
            <Link
              href="/after/food/"
              className="text-accent underline underline-offset-2"
            >
              food
            </Link>{" "}
            is expected to take weeks or months to recover.{" "}
            <Cite id="PEIRS" /> In a megathrust, the United States would be
            unable to send{" "}
            <Link
              href="/after/outside-help/"
              className="text-accent underline underline-offset-2"
            >
              help
            </Link>
            . <Cite id="PEIRS" />
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        A household with its own supplies and people it knows nearby spends less
        time where conflict started in other disasters: in queues, around
        damaged shops, and inside a rumour.
      </>
    ),
    items: [
      <>
        <strong>Keep at least two weeks of food and water.</strong> That is the
        province’s figure for an earthquake. <Cite id="PREPAREDBC" /> It is also
        time not spent waiting for a water truck. In Chile, the trucks
        distributing water were attacked. <Cite id="CHILE-GUARDIAN-10" />
      </>,
      <>
        <strong>Get to know your neighbours before you need them.</strong> The
        most immediate help after an earthquake comes from the people around
        you. <Cite id="PREPAREDBC-PLAN" /> PreparedBC publishes a guide to
        organising a neighbourhood, including the reminder that neighbourhood
        volunteers are not official first responders.{" "}
        <Cite id="PREPAREDBC-NEIGHBOURHOOD" />
      </>,
      <>
        <strong>Check a dramatic story before you pass it on.</strong> After
        Hurricane Katrina, exaggerated reports of looting and lawlessness fed
        calls for a bigger military role in disasters.{" "}
        <Cite id="KATRINA-FRAMES-06" />
      </>,
      <>
        <strong>Let property go.</strong> Do not confront or follow someone who
        is taking things. In New Orleans, some of the violence came from a
        neighbourhood militia. <Cite id="KATRINA-ALGIERS-10" />
      </>,
      <>
        <strong>Decide where you would go if home stopped being safe.</strong>{" "}
        In Christchurch, domestic violence was the exception when other crime
        fell. <Cite id="CHCH-CRIME-16" /> A relative, a friend or a neighbour you
        could stay with is worth settling on now.
      </>,
    ],
  },
};
