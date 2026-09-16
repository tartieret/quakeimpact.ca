import Link from "next/link";
import { Cite } from "@/components/citation";
import { DataTable, Prose, VerificationNote } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * Casualties. The body of `/shaking/casualties/`, ported from
 * `docs/copy/casualties.md`.
 *
 * The words are the copy's, verbatim. The one reader-facing string the copy
 * does not write is the table's caption, which names the table for a screen
 * reader.
 *
 * The table is a grid of the site's two scenarios against the two areas anybody
 * has published a count for, and the grid invites three comparisons the sources
 * do not support, so the note under it carries all three: the City reports all
 * casualties as one number while the province splits its own by severity; the
 * two wider-area cells count different areas and cannot be added; and the
 * crustal row holds two scenarios of the same fault zone at different
 * magnitudes, the City's 7.2 and the province's 7.0, rather than one scenario
 * counted twice. `docs/research/scenarios.md` records why those magnitudes must
 * never be merged.
 *
 * There is no figure on this page. A drawing of a casualty count would assert a
 * precision none of these studies has, and the honest version of the comparison
 * is the table.
 */
export const casualties: PageModule = {
  meta: {
    route: "/shaking/casualties/",
    title: "Casualties",
    description:
      "Published casualty estimates differ because they cover different earthquakes, areas and times of day.",
    nav: "Casualties",
    kicker: "The shaking",
    standfirst:
      "Published casualty estimates differ because they cover different earthquakes, areas and times of day. They count only shaking damage to buildings and the people inside them.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "NRCAN-SCEN",
      "GSC-OF-8853",
      "PEIRS",
      "DCRRA-2025",
      "COV-RISK-2024",
      "HILT-2022",
      "NZ-RC-V4",
      "CBOC-2016-PR",
      "CBOC-2016",
      "PREPAREDBC",
      "COV-EXPLORER-25",
    ],
  },

  sections: [
    {
      title: "Published figures cover mainshock building damage only",
      body: (
        <Prose>
          <p>
            The published figures nearly all trace back to the Geological Survey
            of Canada’s scenario catalogue, which counts “only damage to
            buildings, and their inhabitants, from earthquake shaking”.{" "}
            <Cite id="NRCAN-SCEN" /> In the open file behind the province’s
            planning scenario, aftershocks, tsunami, landslides, liquefaction
            “and fire following are not considered”, and neither is damage to
            vehicles or infrastructure. <Cite id="GSC-OF-8853" /> Natural
            Resources Canada draws the conclusion itself, about its own work:
            “therefore, the estimates herein are likely to represent a minimum
            estimate on impacts.” <Cite id="GSC-OF-8853" />
          </p>
          <p>
            The province says the same of its own numbers. They rest on damage
            to buildings and “do not include casualties from other secondary
            hazards or complicating factors”, a list running through underlying
            medical conditions, vehicle accidents, falls, explosions, fires,
            landslides, washouts and tsunamis. The strategy “will not consider
            the effect of an earthquake early warning system”, and the data is
            “for planning purposes only and may not match the outcome of real
            events”. <Cite id="PEIRS" /> Its Cascadia figures carry the same
            limit: they “include only direct mainshock damage without account of
            secondary hazards like landslides, liquefaction, tsunami, fires and
            more.” <Cite id="DCRRA-2025" />
          </p>
          <p>
            So every figure below is a floor. Fires, landslides and liquefaction
            hurt people too, and none of these models was asked to count them.
          </p>
          <VerificationNote label="Not yet published">
            No published figure counts the people an earthquake here would hurt
            once fire following, landslides and liquefaction are added in.
          </VerificationNote>
        </Prose>
      ),
    },

    {
      title: "Government estimates cover different areas",
      body: (
        <Prose>
          <p>
            The City of Vancouver reports casualties as a single count, at two
            times of day. The province splits its figures four ways, into the
            dead, the critically injured, those needing hospital care and those
            needing first aid.
          </p>
          <DataTable
            caption="Casualty figures published for each of the two scenarios, in the City of Vancouver and over a wider area."
            columns={["", "In the City of Vancouver", "Over a wider area"]}
            minWidth="44rem"
            rows={[
              [
                "Cascadia megathrust",
                "Magnitude 9.0. 400 casualties in the daytime, 170 at night.",
                "Magnitude 9.0. Across British Columbia: 3,400 dead and more than 10,000 injured.",
              ],
              [
                "Strait of Georgia crustal",
                "Magnitude 7.2. 1,370 casualties in the daytime, 620 at night.",
                "Magnitude 7.0. In Greater Vancouver, on a weekday between 9 am and 5 pm: 2,000 dead, 1,000 critically injured, 6,500 needing hospital care, 21,000 needing first aid.",
              ],
            ]}
            note={
              <>
                The two columns count in different units: the City reports all
                casualties as one number <Cite id="COV-RISK-2024" />, while the
                province separates the dead from the injured <Cite id="PEIRS" />{" "}
                <Cite id="GSC-OF-8853" /> <Cite id="DCRRA-2025" />. The two
                wider-area figures count different areas, Greater Vancouver in
                one row and the whole province in the other, and cannot be added
                together. The heaviest damage in the Cascadia scenario is on
                Vancouver Island, outside the Lower Mainland. And the City and
                the province model the same fault zone at different magnitudes,
                so the bottom row holds two scenarios rather than one counted
                twice.
              </>
            }
          />
          <p>
            The method behind the City’s assessment has been published and peer
            reviewed. <Cite id="HILT-2022" />
          </p>
        </Prose>
      ),
    },

    {
      title: "The closer earthquake causes more casualties in Vancouver",
      body: (
        <Prose>
          <p>
            Intuition says the largest earthquake does the most harm. In the
            City’s own modelling it does not. The crustal earthquake in the
            Strait of Georgia gives more than three times the daytime casualties
            in the city that the Cascadia earthquake offshore does, and it
            shakes City Hall about as hard as the design forces new buildings
            are built to resist. <Cite id="COV-RISK-2024" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Time of day changes the count",
      body: (
        <Prose>
          <p>
            In both of the City’s scenarios the night figure is under half the
            daytime one. <Cite id="COV-RISK-2024" /> What changes is where
            people are. At night they are at home; through the working day they
            are in offices, schools, shops and on the street.
          </p>
          <p>
            The province’s magnitude 7.0 scenario is set on a weekday between 9
            am and 5 pm, “when most people are at school or work”, and every
            casualty figure in it belongs to that hour of the day.{" "}
            <Cite id="GSC-OF-8853" /> Its Cascadia scenario puts the mainshock
            at 10 am on a day in August. <Cite id="DCRRA-2025" /> Neither time
            is a prediction. The modellers had to fix one to do the rest of the
            work.
          </p>
        </Prose>
      ),
    },

    {
      title: "Two building types dominate night-time casualties",
      body: (
        <Prose>
          <p>
            Concrete mid-rise and high-rise residential buildings, concentrated
            in the West End and Downtown, account for 37 per cent of the
            night-time casualties in the magnitude 7.2 earthquake. Unreinforced
            masonry residential buildings in Gastown, the Downtown Eastside and
            Chinatown account for a further 29 per cent, from 581 buildings
            holding about 24,700 residents. <Cite id="COV-RISK-2024" />{" "}
            Unreinforced masonry is brick or concrete block built without steel
            reinforcing.
          </p>
          <p>
            What each building type does in the shaking, and how much of it
            Vancouver has, is set out under{" "}
            <Link href="/shaking/buildings/">buildings</Link>.
          </p>
        </Prose>
      ),
    },

    {
      title: "Falling walls killed people outside in Christchurch",
      body: (
        <Prose>
          <p>
            In the 2011 earthquake in Christchurch, New Zealand, building
            failure killed 42 people apart from the two office buildings that
            collapsed. Of those, 35 died when unreinforced masonry façades or
            walls fell, and 26 of the 35 were struck in the street or in
            vehicles. <Cite id="NZ-RC-V4" />
          </p>
          <p>
            That is Christchurch, and it sets no figure for anywhere here. What
            it shows is where the danger sits during the shaking: at the edge of
            the building, on the footpath, where the wall lands. The province’s
            magnitude 7.0 scenario says the same: “Many of those who try to run
            outside suffer extreme injury or death from falling and flying
            objects”. <Cite id="PEIRS" />
          </p>
        </Prose>
      ),
    },

    {
      title: "The 15,000-death figure is a model input",
      body: (
        <Prose>
          <p>
            The Conference Board of Canada published a study in 2016 of what a
            major earthquake would do to Canada’s economy, with funding from the
            Insurance Bureau of Canada. A figure of approximately 15,000 deaths
            is often quoted from it. <Cite id="CBOC-2016-PR" /> The report’s own
            words: “An assumption was made that this earthquake would result in
            approximately 15,000 deaths”. The Board reasoned it up from the
            province’s own planning figures, then reduced Canada’s population by
            that number inside its economic model. <Cite id="CBOC-2016" />
          </p>
          <p>
            Nothing about the figure was measured. It was chosen as an input,
            and the model was run with Canada’s population reduced by it.
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    items: [
      <>
        <strong>Drop, cover and hold on.</strong> In the province’s account of
        its magnitude 7.0 scenario, the shaking knocks people near the epicentre
        off their feet, “except for those who remember to ‘drop, cover, and hold
        on’”. <Cite id="PEIRS" /> It is the one action that changes the answer
        while the ground is still moving.
      </>,
      <>
        <strong>Do not run outside while the ground is moving.</strong> The wall
        that falls lands on the footpath beside the building, which is where
        most of the people killed by falling walls in Christchurch were
        standing. <Cite id="NZ-RC-V4" /> In the province’s own scenario, those
        who try to run outside are among the badly hurt. <Cite id="PEIRS" />
      </>,
      <>
        <strong>
          Secure the heavy things in the rooms where you sleep and sit.
        </strong>{" "}
        The province’s earthquake guide asks for furniture and heavy objects to
        be secured. <Cite id="PREPAREDBC" /> The City publishes a version for
        people who cannot drill into the walls: heavy objects on lower shelves,
        framed pictures and mirrors away from beds and seating, small appliances
        held down with double-sided tape or velcro, beds away from windows, and
        sturdy shoes under the bed. <Cite id="COV-EXPLORER-25" />
      </>,
      <>
        <strong>Know what the building you sleep in is made of.</strong>{" "}
        Concrete mid-rise and high-rise residential buildings and unreinforced
        masonry residential buildings carry most of the night-time casualties in
        the City’s crustal scenario. <Cite id="COV-RISK-2024" />
      </>,
    ],
    closing: (
      <>
        Time of day drives the largest change in these models. What hangs above
        the bed and what you do while the ground moves are within your control.
      </>
    ),
  },
};
