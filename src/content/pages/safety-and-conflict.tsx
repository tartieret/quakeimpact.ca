import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import { Subhead } from "@/components/prose-blocks";
import { Photograph } from "@/components/photograph";
import type { PageModule } from "./index";

/**
 * Safety and conflict. The body of `/after/safety-and-conflict/`, ported from
 * `docs/copy/safety-and-conflict.md`.
 *
 * The one system on the grid with no restoration time, which is why both of
 * its cells are hatched. The page runs from what people expect, to what
 * research and past disasters show, to where theft and violence have been
 * serious, to what holds them down. Every event on it happened somewhere
 * else, so each one illustrates and none is a forecast for this region. The
 * evidence is `docs/research/social-disorder.md`.
 */
export const safetyAndConflict: PageModule = {
  meta: {
    route: "/after/safety-and-conflict/",
    title: "Safety and conflict",
    description:
      "Most people help each other after a disaster. Theft and violence still happen, and what holds them down is in place beforehand: ties between neighbours, trusted information and plans.",
    nav: "Safety and conflict",
    kicker: "Life afterwards",
    standfirst: (
      <>
        After a disaster, most people help the people around them.{" "}
        <Cite id="KATRINA-MYTHS-08" /> Theft and violence still happen, and what
        holds them down is mostly in place before the shaking: ties between
        neighbours, accurate information, and plans that account for it.{" "}
        <Cite id="LOOTING-REVIEW-25" />
      </>
    ),
    /** First-cited order, which is the order the markers are numbered in. */
    references: [
      "KATRINA-MYTHS-08",
      "LOOTING-REVIEW-25",
      "KATRINA-FRAMES-06",
      "DISASTER-MYTHS-08",
      "LOOTING-DEBATE-07",
      "JAPAN-SHELTERS-18",
      "DRURY-18",
      "CHCH-CRIME-16",
      "CHCH-RESILIENCE-14",
      "CHILE-GUARDIAN-10",
      "CHILE-USGS-11",
      "KATRINA-ALGIERS-10",
      "KOBE-SOCIAL-10",
      "CHILE-CRIME-20",
      "CHILE-COHESION-17",
      "DRURY-19",
      "DCRRA-2025",
      "PEIRS",
      "PREPAREDBC",
      "PREPAREDBC-PLAN",
      "PREPAREDBC-NEIGHBOURHOOD",
    ],
  },

  sections: [
    {
      title: "Most people expect a disaster to bring out the worst in people",
      body: (
        <Prose>
          <p>
            The common picture of a disaster has looting and people turning on
            each other in it. Beliefs like these are held by the public and by
            the organisations that plan for and respond to disasters.{" "}
            <Cite id="KATRINA-FRAMES-06" /> More than half a century of social
            science research has tested them, panic and looting among them,
            against what people actually do. <Cite id="DISASTER-MYTHS-08" />
          </p>
          <p>
            Stories spread further than the thing itself. After a 1952 tornado
            in Arkansas, in the United States, 58 per cent of people reported
            hearing stories of looting and 6 per cent thought they had been
            looted, and later studies found the same again and again.{" "}
            <Cite id="LOOTING-DEBATE-07" />
          </p>
          <p>
            The fear is not only an outsider’s. After the 2011 earthquake and
            tsunami in Japan, many evacuees in shelters feared being robbed
            there, or having their empty homes burgled.{" "}
            <Cite id="JAPAN-SHELTERS-18" />
          </p>
        </Prose>
      ),
    },

    {
      title: "In most disasters people help each other, and crime often falls",
      body: (
        <Prose>
          <p>
            Studies of natural disasters since the 1950s found looting very rare.
            Where it happened it was covert and opportunistic, done by
            individuals or small groups, and condemned by the people around
            them. <Cite id="LOOTING-DEBATE-07" /> Isolated cases of antisocial
            behaviour tend to be what the news shows, while most people respond
            positively and generously. <Cite id="KATRINA-MYTHS-08" /> Survivors
            who face the same danger start to act as a group: they support each
            other, coordinate what they do and expect help in return.{" "}
            <Cite id="DRURY-18" />
          </p>
          <p>
            After the Canterbury earthquakes of 2010 and 2011 in New Zealand,
            overall crime in Christchurch fell, with domestic violence the
            notable exception, even though crime rose in most neighbourhoods.{" "}
            <Cite id="CHCH-CRIME-16" /> The communities that adapted most easily
            were the ones that already had community groups, tribal
            organisations and local leaders before the shaking.{" "}
            <Cite id="CHCH-RESILIENCE-14" />
          </p>
          <Photograph
            id="christchurch-student-volunteer-army"
            caption={
              <>
                Christchurch, March 2011. The Student Volunteer Army, a student
                movement started on Facebook after the earthquakes, gathers with
                shovels before going out.
              </>
            }
          />
          <p>
            After the 2011 earthquake in Japan, the number of reported crimes in
            the three affected prefectures fell sharply that year. That was not
            the same as no crime. Burglaries of empty homes and shops and theft
            of fuel from cars were common in the first month, and theft and
            domestic violence became common in shelters two to four months on.{" "}
            <Cite id="JAPAN-SHELTERS-18" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Theft and violence do happen, and in Chile and New Orleans they were serious",
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
            stores. <Cite id="CHILE-GUARDIAN-10" /> In some places the government
            did not know for several days what local governments needed, and the
            looting surprised response officials and social scientists alike.{" "}
            <Cite id="CHILE-USGS-11" />
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
            After Hurricane Katrina struck New Orleans in the United States in
            2005, there were documented cases of hijacking, rioting and looting,
            and many more reports of people cooperating and helping each other.{" "}
            <Cite id="KATRINA-MYTHS-08" /> Some of the violence came from a
            neighbourhood militia. In Algiers Point, a man was shot in the days
            after the storm; more than four years later a member of the militia
            was implicated, and the man who was shot says it was racially
            motivated. <Cite id="KATRINA-ALGIERS-10" />
          </p>
          <p>
            Violence at home follows a different pattern from theft. It was the
            exception to the fall in crime in Christchurch{" "}
            <Cite id="CHCH-CRIME-16" />, and it became common in Japan’s shelters
            months after the earthquake. <Cite id="JAPAN-SHELTERS-18" />
          </p>

          <Subhead>News coverage makes disorder look more common than it is</Subhead>
          <p>
            After Katrina, news coverage cast survivors first as civil unrest and
            later as something close to urban warfare, greatly exaggerating how
            much looting and lawlessness there was. That framing reinforced calls
            for a bigger military role in disasters.{" "}
            <Cite id="KATRINA-FRAMES-06" />
          </p>
          <p>
            In Japan, baseless rumours spread in the month after the 2011
            earthquake, alongside the burglaries the prefectural police were
            reporting. <Cite id="JAPAN-SHELTERS-18" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Ties between people, accurate information and plans that expect cooperation hold conflict down",
      body: (
        <Prose>
          <p>
            Research on looting after disasters keeps returning to four things:
            how well off people are, the ties between them, what the media
            report, and whether anyone planned for it. Its advice to governments
            is to put looting in their disaster plans, draw on community groups
            and non-governmental organisations, and build social ties over the
            long term. <Cite id="LOOTING-REVIEW-25" />
          </p>
          <p>
            Social ties and trust help explain why some neighbourhoods of Kobe,
            Japan, recovered after its 1995 earthquake while others stagnated.{" "}
            <Cite id="KOBE-SOCIAL-10" /> Communities also organise their own
            protection. After the 2010 earthquake in Chile, the municipalities it
            hit saw lasting falls in property crime, consistent with stronger
            community life and neighbours organising to prevent crime
            themselves. <Cite id="CHILE-CRIME-20" /> Across Chile, living through
            a big earthquake raises measures of social cohesion, which then wear
            away slowly. <Cite id="CHILE-COHESION-17" /> In Japan, volunteer crime
            prevention after the 2011 earthquake gave people a shared goal to
            work towards. <Cite id="JAPAN-SHELTERS-18" />
          </p>
          <p>
            Where rumours spread, accurate information from the media, the
            police and other officials is what reduces the fear.{" "}
            <Cite id="JAPAN-SHELTERS-18" /> What authorities assume about how
            people behave in an emergency shapes their preparedness, response
            and recovery, and with it how much the public can do as the first
            people on the scene. <Cite id="DRURY-19" /> The looting in Chile
            surprised officials, and the lesson drawn for California was to make
            security for damaged businesses a priority in planning.{" "}
            <Cite id="CHILE-USGS-11" />
          </p>
          <p>
            A major earthquake here would bring the kind of shortages Chile’s
            worst-hit areas went through.{" "}
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
            . <Cite id="PEIRS" /> What held conflict down elsewhere, neighbours
            who know each other, information people trust and plans built on
            cooperation, has to be in place before the shaking starts.
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
