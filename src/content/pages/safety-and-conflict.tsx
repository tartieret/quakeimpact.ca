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
 * The one system with no restoration time, which is why it carries no duration
 * and no phase. It opens on the question a reader arrives with, in the days when the
 * tap and the shops have stopped, and answers it before working through what
 * people expect, what the research and past disasters show, where theft and
 * violence were serious, and what holds conflict down. The opening scene is
 * built under `docs/style-guide.md` §4 as revised on 16 September 2026: every
 * element in it is a consequence another page here states and sources, and it
 * introduces no fact of its own. Every event on the page happened somewhere
 * else. The evidence is `docs/research/social-disorder.md`.
 */
export const safetyAndConflict: PageModule = {
  meta: {
    route: "/after/safety-and-conflict/",
    title: "Safety and conflict",
    description:
      "What happens when people run out of food and water after a major earthquake? Past disasters show that most people help one another.",
    nav: "Safety and conflict",
    kicker: "Life afterwards",
    standfirst: (
      <>
        What happens when people run out of food and water after a major
        earthquake?
      </>
    ),
    /** First-cited order, which is the order the markers are numbered in. */
    references: [
      "PEIRS",
      "DCRRA-2025",
      "KATRINA-MYTHS-08",
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
      "LOOTING-REVIEW-25",
      "KOBE-SOCIAL-10",
      "CHILE-CRIME-20",
      "CHILE-COHESION-17",
      "DRURY-19",
      "PREPAREDBC",
      "PREPAREDBC-PLAN",
      "PREPAREDBC-NEIGHBOURHOOD",
    ],
  },

  sections: [
    {
      title: "Shortages put pressure on particular places",
      body: (
        <Prose>
          <p>
            The{" "}
            <Link
              href="/after/water/"
              className="text-accent underline underline-offset-2"
            >
              tap
            </Link>{" "}
            gives nothing. The corner shop is shut, and any supermarket that
            opens can sell only what remains on its shelves. The province
            expects the food distribution network to take weeks or months to
            recover. The{" "}
            <Link
              href="/after/fuel/"
              className="text-accent underline underline-offset-2"
            >
              fuel
            </Link>{" "}
            supply chains that move food may be inoperable.{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            Getting bulk drinking water around the region remains difficult for
            the first several days. <Cite id="DCRRA-2025" /> People gather at
            water trucks, while disrupted{" "}
            <Link
              href="/after/communications/"
              className="text-accent underline underline-offset-2"
            >
              communications
            </Link>{" "}
            make it harder to know where supplies will arrive.{" "}
            <Cite id="DCRRA-2025" />
          </p>
          <p>
            Past disasters give a consistent answer to what people do next. Most
            help one another. Theft and violence occur, but not as a general
            breakdown. <Cite id="KATRINA-MYTHS-08" /> When conflict does happen,
            it tends to centre on scarce supplies, damaged shops or false
            rumours.
          </p>
        </Prose>
      ),
    },

    {
      title: "Most people expect a disaster to bring out the worst in people",
      body: (
        <Prose>
          <p>
            The public often expects disasters to descend into looting and
            violence. Some organisations that plan for and respond to disasters
            share that expectation.{" "}
            <Cite id="KATRINA-FRAMES-06" /> More than half a century of social
            science research has compared those beliefs with what people
            actually do. <Cite id="DISASTER-MYTHS-08" />
          </p>
          <p>
            Reports of looting often outnumber documented cases. After a 1952
            tornado in Arkansas, in the United States, 58 per cent of people had
            heard stories of looting, but only 6 per cent thought they had been
            looted. Later studies found the same pattern.{" "}
            <Cite id="LOOTING-DEBATE-07" />
          </p>
          <p>
            People caught in a disaster can share that fear. After the 2011
            earthquake and tsunami in Japan, many people in shelters feared
            being robbed there or having their empty homes burgled.{" "}
            <Cite id="JAPAN-SHELTERS-18" />
          </p>
        </Prose>
      ),
    },

    {
      title: "People usually help one another, and crime often falls",
      body: (
        <Prose>
          <p>
            Studies since the 1950s have found looting after natural disasters
            to be rare. When it occurs, it is usually opportunistic, carried out
            by individuals or small groups and condemned by the people around
            them. <Cite id="LOOTING-DEBATE-07" /> Shared danger also changes how
            survivors act. They support one another, coordinate their work and
            expect help in return. <Cite id="DRURY-18" />
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
            Reported crime in the three affected prefectures fell sharply after
            the 2011 earthquake in Japan. Burglaries of empty homes and shops
            and theft of fuel from cars were still common in the first month.
            Two to four months later, theft and domestic violence became common
            in shelters.{" "}
            <Cite id="JAPAN-SHELTERS-18" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Serious disorder has happened",
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
            2005, there were documented cases of hijacking, rioting and looting.
            Reports of cooperation and mutual aid were much more common.{" "}
            <Cite id="KATRINA-MYTHS-08" /> Some violence came from a
            neighbourhood militia. In Algiers Point, a man was shot in the days
            after the storm. More than four years later, a member of the militia
            was implicated, and the man who was shot said it was racially
            motivated. <Cite id="KATRINA-ALGIERS-10" />
          </p>
          <p>
            Violence at home follows a different pattern from theft. It was the
            exception to the fall in crime in Christchurch{" "}
            <Cite id="CHCH-CRIME-16" />, and it became common in Japan’s shelters
            months after the earthquake. <Cite id="JAPAN-SHELTERS-18" />
          </p>

          <Subhead>News coverage can exaggerate disorder</Subhead>
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
      title: "Trust and planning reduce conflict",
      body: (
        <Prose>
          <p>
            Studies link looting after disasters to poverty, weak social ties,
            media coverage and a lack of planning. They recommend that
            governments plan for looting, work with community groups and build
            social ties over time. <Cite id="LOOTING-REVIEW-25" />
          </p>
          <p>
            Social ties and trust help explain why some neighbourhoods of Kobe,
            Japan, recovered after its 1995 earthquake while others stagnated.{" "}
            <Cite id="KOBE-SOCIAL-10" /> Communities also organise their own
            protection. Municipalities hit by the 2010 earthquake in Chile saw
            lasting falls in property crime, consistent with stronger community
            life and neighbours working to prevent crime.{" "}
            <Cite id="CHILE-CRIME-20" />
          </p>
          <p>
            Across Chile, living through a large earthquake raised measures of
            social cohesion, although the effect faded over time.{" "}
            <Cite id="CHILE-COHESION-17" /> In Japan, volunteer crime prevention
            after the 2011 earthquake gave people a shared goal.{" "}
            <Cite id="JAPAN-SHELTERS-18" />
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
            Households control one part of this: their own supplies. The
            province recommends keeping two weeks of food and water for an
            earthquake here. <Cite id="PREPAREDBC" /> Those supplies reduce the
            time a household spends waiting in a queue.
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        Stored supplies reduce the time a household spends in queues or around
        damaged shops.
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
        <strong>Check the source of a dramatic story before you pass it on.</strong>{" "}
        After Hurricane Katrina, exaggerated reports of looting and lawlessness
        fed calls for a bigger military role in disasters.{" "}
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
