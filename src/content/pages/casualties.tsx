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
 * reader; the guards that travel with the figures inside it are in the note
 * under it, because the City's counts are the City of Vancouver alone and the
 * province's are Greater Vancouver, and the two sets are not rows of one
 * ledger.
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
      "COV-RISK-2024",
      "PEIRS",
      "DCRRA-2025",
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
            vehicles or infrastructure. <Cite id="GSC-OF-8853" />{" "}
            Natural Resources Canada draws the conclusion itself, about its own
            work: “therefore, the estimates herein are likely to represent a
            minimum estimate on impacts.” <Cite id="GSC-OF-8853" />
          </p>
          <p>
            So a casualty figure from that work is a floor. Fires, landslides
            and liquefaction hurt people too, and none of these models was asked
            to count them.
          </p>
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
            caption="Casualty figures published by the City of Vancouver and by the Province of BC, with the earthquake and the area each one counts."
            columns={[
              "Who published it, and which earthquake",
              "What it counts",
              "The figure",
            ]}
            minWidth="42rem"
            rows={[
              [
                "City of Vancouver, magnitude 7.2 Georgia Strait",
                "Casualties in the City of Vancouver, daytime and at night",
                "1,370 day, 620 night",
              ],
              [
                "City of Vancouver, magnitude 9.0 Cascadia",
                "Casualties in the City of Vancouver, daytime and at night",
                "400 day, 170 night",
              ],
              [
                "City of Vancouver, magnitude 7.0 deep earthquake",
                "Casualties in the City of Vancouver, daytime and at night",
                "190 day, 70 night",
              ],
              [
                "Province of BC, magnitude 7.0 Georgia Strait",
                "Greater Vancouver, on a weekday between 9 am and 5 pm",
                "2,000 dead, 1,000 critically injured, 6,500 needing hospital care, 21,000 needing first aid",
              ],
              [
                "Province of BC, magnitude 9.0 Cascadia",
                "Deaths and injuries across British Columbia from the main shaking",
                "more than 10,000 injured, 3,400 dead",
              ],
            ]}
            note={
              <>
                The City’s three rows count the City of Vancouver alone{" "}
                <Cite id="COV-RISK-2024" />, the province’s magnitude 7.0 row
                counts Greater Vancouver <Cite id="PEIRS" />{" "}
                <Cite id="GSC-OF-8853" />, and the province’s Cascadia row comes
                from its own assessment of that scenario{" "}
                <Cite id="DCRRA-2025" />. They are separate counts of different
                areas and cannot be added together. The province’s Cascadia row
                counts the whole province, and the heaviest damage in that
                scenario is on Vancouver Island rather than here.
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
            City’s own modelling it does not. The magnitude 7.2 crustal
            earthquake in the Strait of Georgia gives 1,370 daytime casualties
            in the city, against 400 for the magnitude 9.0 Cascadia earthquake
            offshore. <Cite id="COV-RISK-2024" /> The closer earthquake shakes
            City Hall about as hard as the design forces new buildings are built
            to resist. <Cite id="COV-RISK-2024" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Time of day changes the count",
      body: (
        <Prose>
          <p>
            In all three of the City’s scenarios the night figure is under half
            the daytime one: 1,370 against 620 for the magnitude 7.2, 400
            against 170 for the magnitude 9.0, and 190 against 70 for the
            magnitude 7.0 deep earthquake. <Cite id="COV-RISK-2024" /> What
            changes is where people are. At night they are at home; through the
            working day they are in offices, schools, shops and on the street.
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
            collapsed. Of those, 35
            died when unreinforced masonry façades or walls fell, and 26 of the
            35 were struck in the street or in vehicles. <Cite id="NZ-RC-V4" />
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

    {
      title: "The province warns that actual casualties may differ",
      body: (
        <Prose>
          <p>
            The province’s figures rest on damage to buildings and “do not
            include casualties from other secondary hazards or complicating
            factors”, a list running through underlying medical conditions,
            vehicle accidents, falls, explosions, fires, landslides, washouts
            and tsunamis. The strategy “will not consider the effect of an
            earthquake early warning system”. And the data is “for planning
            purposes only and may not match the outcome of real events”.{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            Its Cascadia figures carry the same limit: they “include only direct
            mainshock damage without account of secondary hazards like
            landslides, liquefaction, tsunami, fires and more.”{" "}
            <Cite id="DCRRA-2025" />
          </p>
          <VerificationNote label="Not yet published">
            No published figure counts the people an earthquake here would hurt
            once fire following, landslides and liquefaction are added in.
          </VerificationNote>
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
        <strong>Know what the building you sleep in is made of.</strong> In the
        City’s magnitude 7.2 scenario two building types carry most of the
        night-time casualties: concrete mid-rise and high-rise residential at 37
        per cent, and unreinforced masonry residential at 29 per cent.{" "}
        <Cite id="COV-RISK-2024" />
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
