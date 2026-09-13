import Link from "next/link";
import { Cite } from "@/components/citation";
import { ScenarioCards } from "@/components/scenario-cards";
import { SystemMatrix } from "@/components/system-grid";
import { Prose, Quote, DataTable, Figure } from "@/components/page-parts";
import {
  CascadiaRecurrence,
  CrustalFaultSection,
  ScenarioBuildingResponse,
  ScenarioDurations,
} from "@/components/figures/scenarios";
import {
  SHAKEMAP_CAVEATS,
  SHAKEMAP_FACTS,
  SHAKEMAP_SOURCE,
  ScenarioShakeMaps,
} from "@/components/figures/shakemap";
import type { PageModule } from "./index";

/**
 * Two earthquakes, not one. The body of `/scenarios/`, ported from
 * `docs/copy/scenarios.md`.
 *
 * The words are the copy's, verbatim. The only reader-facing strings the copy
 * does not write are the two table captions, which name each table for a
 * screen reader and carry the guard that travels with the figures inside it,
 * and the alt text and captions of the four drawings, which are placed beside
 * the prose they illustrate and replace none of it.
 *
 * The scenario cards and the system matrix are not here. They are built from
 * `SCENARIOS` and `SYSTEMS` in `@/content/site`, so the route draws them the
 * way the system template draws its bands: from the data, above and below the
 * words.
 */
export const scenarios: PageModule = {
  meta: {
    route: "/scenarios/",
    title: "Two earthquakes, not one",
    nav: "Two scenarios",
    standfirst:
      "One is offshore, very large and very long. The other is close, smaller and violent. Most people have only heard of the first, and the federal hazard agency calls the second the greater hazard to cities.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "NRCAN-1700",
      "PEIRS",
      "NRCAN-SCEN",
      "OPENDRR-GSF-22",
      "GSC-OF-8853",
      "DCRRA-2025",
      "NAB-ICCHGE-08",
      "ECR-2023",
      "NRCAN-QA",
      "MAZZOTTI-04",
      "GOLDFINGER-12",
    ],
  },

  sections: [
    {
      title: "The two earthquakes differ in almost every way that matters",
      body: <ScenarioCards />,
    },

    {
      title: "The nearer earthquake is the greater hazard to cities",
      body: (
        <Prose>
          <p>
            Natural Resources Canada, on its own page about the last Cascadia
            rupture: “because the fault is offshore, it is not the greatest
            earthquake hazard faced by major west coast cities.” The same page
            says of the shallower earthquakes underneath the region, “Because
            these inland earthquakes can be much closer to our urban areas and
            occur more frequently, they represent the greatest earthquake
            hazard.” <Cite id="NRCAN-1700" />
          </p>
          <p>
            British Columbia plans around the nearer one. Its primary earthquake
            planning scenario is a shallow magnitude 7.0 in the Strait of
            Georgia. <Cite id="PEIRS" />
          </p>
          <p>
            They are two different problems, not a larger and a smaller version
            of one. The nearer earthquake does more to Vancouver itself, because
            it is closer to the city and happens more often.{" "}
            <Cite id="NRCAN-1700" /> The offshore one does more to Vancouver’s
            chances of being helped: it damages the whole coast at once, and in
            a Cascadia event the United States would be unable to deliver mutual
            aid. <Cite id="PEIRS" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Both scenarios come from the same official catalogue",
      body: (
        <Prose>
          <p>
            The Geological Survey of Canada publishes a National Earthquake
            Scenario Catalogue with a modelled run for each. The Cascadia entry
            is the M9.0 Cascadia Full Rupture Subduction Earthquake, a “Full
            rupture of the Cascadia interface fault” affecting “most communities
            in southwestern British Columbia”. The crustal entry is the M7.0
            Georgia Strait, which takes a real magnitude 4.6 earthquake of 1997
            beneath the strait and asks what that event would have done at
            magnitude 7.0. <Cite id="NRCAN-SCEN" />
          </p>
          <p>
            Both runs use the same method, which is what makes the contrast
            between them worth drawing. The catalogue states its own resolution:
            results are given “at the approximate scale of Census dissemination
            areas”, which is an area the size of a few city blocks, not an
            address. <Cite id="NRCAN-SCEN" />
          </p>
          <p>
            The modelling covers “only damage to buildings, and their
            inhabitants, from earthquake shaking”. Landslides, liquefaction,
            fire following and aftershocks are “not currently included”.{" "}
            <Cite id="NRCAN-SCEN" /> That exclusion governs almost every number
            below.
          </p>
          <Figure
            interactive
            alt={`In the catalogue's own modelling, the nearer Georgia Strait magnitude 7.0 shakes the Lower Mainland far harder than the Cascadia magnitude 9.0 does: the strongest cell reaches about ${SHAKEMAP_FACTS.georgiaPeak} per cent of gravity against about ${SHAKEMAP_FACTS.cascadiaPeak}. Peak acceleration is not the whole of what either earthquake does, and this modelling covers shaking damage to buildings and the people in them and nothing else.`}
            caption={
              <>
                The catalogue’s two scenario ShakeMaps for the same window of
                the Lower Mainland, stacked so that a position in one is the
                same position in the other. <Cite id="NRCAN-SCEN" /> Every mark
                is one cell of about 730 m by 665 m, holding the mean of the
                model sites inside it. The area of a mark is the acceleration
                and the ink is the weight of evidence behind it:{" "}
                {SHAKEMAP_FACTS.sites} model sites stand behind{" "}
                {SHAKEMAP_FACTS.cells} cells, and{" "}
                {SHAKEMAP_FACTS.singleSiteCells} of those cells rest on a single
                site. The marks are drawn apart rather than joined because the
                catalogue models sites, not a surface. Peak ground acceleration
                is the measure both runs publish. The catalogue converts it to
                Modified Mercalli intensity for the Georgia Strait run and not
                for Cascadia, and deriving the missing one
                would need a conversion equation, so neither map is drawn on
                it. Two limits the catalogue states travel with every mark.{" "}
                {SHAKEMAP_CAVEATS.resolution} {SHAKEMAP_CAVEATS.scope} The
                modelling is the Geological Survey of Canada’s, and the drawing
                is not.
              </>
            }
            licence={
              <>
                {SHAKEMAP_SOURCE.attribution}{" "}
                <a
                  href={SHAKEMAP_SOURCE.licenceUrl}
                  className="text-accent underline underline-offset-2"
                >
                  Read the licence
                </a>
                .
              </>
            }
          >
            <ScenarioShakeMaps />
          </Figure>
        </Prose>
      ),
    },

    {
      title: "The crustal magnitude 7.0 is the province’s planning scenario",
      body: (
        <Prose>
          <p>
            The province’s Earthquake Immediate Response Strategy is built on a
            shallow magnitude 7.0 beneath the Georgia Basin, modelled on the
            1997 event. An earthquake of that size or larger happens in this
            broad region roughly once every 1,500 years. The rupture is under
            water, and even so “a significant tsunami is not expected”.{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            The modelled fault plane dips at 47 degrees from the ground surface
            to a bottom edge about 13 km down, and the earthquake starts 3 km
            down. Its footprint runs
            from near Nanaimo to downtown Vancouver, which describes the fault
            rather than where the damage falls. <Cite id="OPENDRR-GSF-22" />{" "}
            Shaking across the Lower Mainland and Nanaimo is modelled at 10 to
            60 per cent of gravity, strongest in downtown Vancouver, West
            Vancouver, Nanaimo, Gibsons, and on Gabriola and Bowen Islands.{" "}
            <Cite id="GSC-OF-8853" />
          </p>
          <Figure
            alt="The modelled crustal fault is a plane dipping at 47 degrees from the ground surface down to a bottom edge about 13 km below it, and the earthquake starts 3 km down, which is shallow. The plane reaching the surface is the model’s geometry, not a forecast that the ground breaks open."
            caption={
              <>
                A cross-section drawn from the four numbers the federal rupture
                file states, at the same scale across and down so the dip is
                true. <Cite id="OPENDRR-GSF-22" /> The footprint from near
                Nanaimo to downtown Vancouver runs across the region rather than
                through this section, so it is not on it.
              </>
            }
          >
            <CrustalFaultSection />
          </Figure>
          <p>
            The scenario is set on a January afternoon, immediately after an
            atmospheric river has dropped 180 to 300 mm of rain over three days. The ground is already saturated when the
            shaking starts, which is why the scenario’s landslides, liquefaction
            and dike failures are as prominent as they are. Warmth, dry shelter
            and unstable slopes are what people need attended to first in that
            weather. <Cite id="PEIRS" />
          </p>
          <p>
            Its modelled impacts, counting only shaking damage to buildings and
            to the people inside them:
          </p>
          <DataTable
            caption="What the province’s magnitude 7.0 scenario models for Greater Vancouver."
            columns={["", "Magnitude 7.0, Greater Vancouver"]}
            minWidth="30rem"
            rows={[
              ["Buildings red-tagged, meaning nobody may enter", "10,000"],
              ["Buildings yellow-tagged, meaning restricted entry", "6,100"],
              ["People whose homes are damaged", "about 1.7 million"],
              ["Deaths", "2,000"],
              ["Critically injured", "1,000"],
              ["Needing hospital care, not critical", "6,500"],
              ["Needing paramedic or first-aid treatment", "21,000"],
              ["Households displaced", "70,000"],
              ["Direct property losses", "$30 billion"],
            ]}
            note={
              <>
                <Cite id="GSC-OF-8853" /> <Cite id="PEIRS" />
              </>
            }
          />
          <p>
            Every figure in that table belongs to the daytime hours between 9am
            and 5pm, when most
            people are at school or work. Natural Resources Canada says of its
            own numbers that because secondary hazards and damage to
            infrastructure are left out, “the estimates herein are likely to
            represent a minimum estimate on impacts.” <Cite id="GSC-OF-8853" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "In the province’s scenario, the earthquake is heard before it is felt",
      body: (
        <Prose>
          <p>
            The passage below describes the magnitude 7.0 Greater Vancouver
            scenario and no other, on ground already saturated by three days of
            rain. <Cite id="PEIRS" />
          </p>
          <Quote
            speaker="The Province of British Columbia, on its magnitude 7.0 Greater Vancouver scenario"
            source="Provincial Earthquake Immediate Response Strategy"
          >
            <p>
              For many, the earthquake is heard before it is felt. The low,
              rumbling sound is similar to that of a freight train, immediately
              followed by 10-20 seconds of violent shaking that knocks people
              located closest to the epicentre from their feet — except for
              those who remember to “drop, cover, and hold on”. Taller buildings
              sway with the high intensity shaking. Unsecured objects fall or
              fly through the air. Roads crack and the ground ruptures in some
              areas. Buildings on softer, saturated soils lose support through
              liquefaction — a process in which the ground temporarily behaves
              like a liquid while being shaken.
            </p>
            <p>
              Landslides and rock falls are generated in many areas, cutting off
              transportation routes. Flooding is increased by the recent wet
              weather event with some dikes failing. Several fires start
              throughout the impact area from damaged electrical power and
              ruptured gas lines. A small number of buildings collapse, many
              shift and crack, and others are destroyed by fire.
            </p>
            <p>
              Windows break and glass scatters across the pavement. Debris is
              strewn throughout roadways, cutting off access to areas and
              blocking vehicle passage. Entire walls from unreinforced masonry
              buildings fall into the streets. Many of those who try to run
              outside suffer extreme injury or death from falling and flying
              objects and thousands are trapped or injured.
            </p>
          </Quote>
          <p>
            Unreinforced masonry is brick or concrete block built without steel
            reinforcing, and it is the wall type that falls into the street in
            that passage.
          </p>
          <p>
            The passage gives two instructions: drop, cover and hold on, and do
            not run outside.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The province’s Cascadia scenario shakes for three minutes along 1,000 km of fault",
      body: (
        <Prose>
          <p>
            The province’s risk and resilience assessment models a magnitude 9.0
            rupture running about 1,000 km from mid Vancouver Island to northern
            California, with the mainshock at 10am on a day in August during a 30
            to 40 °C heatwave with wildfire smoke, which makes water, shade and
            clean air the urgent needs. Shaking in that mainshock lasts three
            minutes. <Cite id="DCRRA-2025" />
          </p>
          <p>
            Heaviest damage falls on Vancouver Island and in a band about 20 km
            deep along the mainland coast, from the border to the Sunshine
            Coast. The most severely affected area is roughly 45,000 square
            kilometres. The assessment names tsunami, urban fires, liquefaction,
            landslides, floods, seiches and aftershocks as cascading events, and
            about 1 m of subsidence on the west coast of Vancouver Island.{" "}
            <Cite id="DCRRA-2025" />
          </p>
          <p>
            Its headline figures, again counting mainshock shaking alone, are
            complete damage to about 18,000 buildings, more than 10,000 hospital
            injuries both critical and not, and 3,400 deaths. The assessment’s
            own footnote: these “include only direct mainshock damage without
            account of secondary hazards like landslides, liquefaction, tsunami,
            fires and more.” <Cite id="DCRRA-2025" />
          </p>
          <p>
            It also models an aftershock: magnitude 7.1, 60 km beneath Sidney,
            about a month later, at 11pm, during an atmospheric river, lasting
            20 seconds. <Cite id="DCRRA-2025" />
          </p>
        </Prose>
      ),
    },

    {
      title: "The two earthquakes threaten different buildings",
      body: (
        <Prose>
          <p>
            Of the crustal earthquake, the province writes: “The near-surface
            earthquake results in high frequency shaking that is most hazardous
            to short buildings. Unreinforced masonry and unreinforced concrete
            buildings may suffer the greatest damage, including complete
            collapse and inhabitability.” <Cite id="PEIRS" />
          </p>
          <p>
            Of the megathrust, the converse: “urban areas with tall buildings on
            deep, soft sediments (for example, parts of Richmond) that resonate
            with the long-period seismic waves generated by the subduction
            interface earthquake also suffer significant damage.”{" "}
            <Cite id="DCRRA-2025" />
          </p>
          <p>
            Fast, sharp shaking breaks short, stiff, older buildings. Slow, long
            shaking moves tall buildings on soft ground.
          </p>
          <Figure
            alt="Fast, sharp shaking is most hazardous to short, stiff, older buildings, while slow, long shaking moves tall buildings on soft ground. Neither earthquake is the other's smaller version, and the drawing shows how buildings respond rather than what happens to them."
            caption={
              <>
                The same two buildings stand in both panels. What changes is how
                fast the ground moves and which building that motion finds. The
                province writes both halves: high frequency shaking is “most
                hazardous to short buildings” <Cite id="PEIRS" />, and tall
                buildings on deep, soft sediments “resonate with the long-period
                seismic waves” of the megathrust. <Cite id="DCRRA-2025" /> The
                waves are drawn at the same size as each other and carry no
                scale, because neither document gives one.
              </>
            }
          >
            <ScenarioBuildingResponse />
          </Figure>
        </Prose>
      ),
    },

    {
      title: "How long the shaking lasts changes what fails",
      body: (
        <Prose>
          <p>
            A study of the Golden Ears Bridge measured how the soil and the deep
            foundations under it act on each other as an earthquake runs longer.
            At the longest of that bridge’s design events, strong shaking
            lasted about 30 seconds and the forces from the moving ground and
            the forces from the swaying structure “occurred simultaneously”; at
            the shortest, shaking lasted about
            10 seconds and the two were “essentially uncoupled”. In the longer
            event the soil liquefied early, while the structure was still being
            shaken. <Cite id="NAB-ICCHGE-08" />
          </p>
          <p>
            Those are design events for one bridge, not properties of either
            scenario. Past a certain length, the ground fails while the shaking
            is still going on, and a structure meets both loads at once instead
            of one after the other.
          </p>
          <p>
            In the province’s magnitude 7.0 Greater Vancouver planning scenario,
            violent shaking lasts 10 to 20 seconds. <Cite id="PEIRS" /> In the
            province’s magnitude 9.0 Cascadia scenario, the mainshock lasts
            three minutes. <Cite id="DCRRA-2025" /> Exercise Coastal Response
            2023, a federal exercise scenario for a magnitude 6.8 near
            Tsawwassen, states that “the duration of the earthquake lasted over
            one minute”, which is a smaller crustal earthquake with a longer
            stated duration. <Cite id="ECR-2023" /> There is no general rule
            here, only named scenarios.
          </p>
          <Figure
            alt="The province's crustal magnitude 7.0 scenario gives 10 to 20 seconds of violent shaking, its Cascadia magnitude 9.0 scenario three minutes, and a federal magnitude 6.8 exercise scenario over one minute. A duration belongs to the scenario that states it and not to the magnitude."
            caption={
              <>
                Three named scenarios on one scale. The third is the reason the
                first two cannot be turned into a rule: it is the smallest
                earthquake of the three and it shakes for longer than the
                crustal scenario does. <Cite id="PEIRS" />{" "}
                <Cite id="DCRRA-2025" /> <Cite id="ECR-2023" /> Its bar is solid
                to one minute, which is what the exercise states, and hatched
                past it under an arrow, because the exercise gives no end.
              </>
            }
          >
            <ScenarioDurations />
          </Figure>
        </Prose>
      ),
    },

    {
      title: "The province’s figures and the federal figures come from one model",
      body: (
        <Prose>
          <p>
            The provincial assessment attributes its Cascadia damage and
            casualty numbers to Natural Resources Canada’s own scenario run.{" "}
            <Cite id="DCRRA-2025" /> <Cite id="NRCAN-SCEN" /> The provincial
            crustal figures were likewise “developed by Natural Resources Canada
            based on core modelling”. <Cite id="PEIRS" /> Emergency Management
            British Columbia and the Government Operations Centre in Ottawa
            asked Natural Resources Canada for those scenarios in the first
            place. <Cite id="GSC-OF-8853" />
          </p>
          <p>
            Two levels of government publishing the same number is one model
            quoted twice, not two estimates agreeing. Canada has one public
            earthquake loss model, and both governments use it.
          </p>
        </Prose>
      ),
    },

    {
      title: "Published estimates of how often Cascadia ruptures do not agree",
      body: (
        <Prose>
          <DataTable
            caption="The average interval between Cascadia ruptures as four published sources state it, with the range each source gives around its own average. All four are current."
            columns={["Source", "Average interval", "Stated range"]}
            minWidth="34rem"
            rows={[
              [
                <>
                  Natural Resources Canada <Cite id="NRCAN-QA" />
                </>,
                "500 to 600 years",
                "200 to 800 years",
              ],
              [
                <>
                  Geological Survey of Canada, 2004 <Cite id="MAZZOTTI-04" />
                </>,
                "about 600 years, give or take 30",
                "215 to 1,500 years",
              ],
              [
                <>
                  BC’s risk and resilience assessment, 2025{" "}
                  <Cite id="DCRRA-2025" />
                </>,
                "400 to 500 years",
                "200 to 1,000 years",
              ],
              [
                <>
                  BC’s earthquake response strategy <Cite id="PEIRS" />
                </>,
                "400 to 500 years",
                "100 to 1,100 years",
              ],
            ]}
          />
          <p>
            The federal agency gives a longer average than the province does.
            Both are current and both are official. The last rupture was in
            1700.
          </p>
          <Figure
            alt="Four official sources give four different answers for how often Cascadia ruptures: averages between 400 and 630 years, inside stated ranges running from 100 years to 1,500. All four are drawn the same way, because all four are current and none is the right one. The scale is the interval between ruptures, not a date."
            caption={
              <>
                The four rows of the table above, drawn against one another. The
                solid block is the average each source gives, itself a range in
                every case; the hatch is the wider range the same source states
                around it. <Cite id="NRCAN-QA" /> <Cite id="MAZZOTTI-04" />{" "}
                <Cite id="DCRRA-2025" /> <Cite id="PEIRS" /> The scale measures
                the gap between one rupture and the next, so there is no point
                on it that stands for a year.
              </>
            }
          >
            <CascadiaRecurrence />
          </Figure>
        </Prose>
      ),
    },

    {
      title: "The 37 per cent figure belongs to the southern end of the fault",
      body: (
        <Prose>
          <p>
            A figure of about 37 per cent in the next 50 years circulates
            widely. It is Goldfinger and colleagues’ time-dependent probability
            for a rupture of the <strong>southern</strong> Cascadia margin, off
            southern Oregon and northern California, where ruptures are roughly
            twice as frequent. The same study’s figure for the northern or full
            margin, which is the part that matters to British Columbia, is 7 to
            12 per cent in 50 years. <Cite id="GOLDFINGER-12" />
          </p>
          <p>
            The Geological Survey of Canada’s 2004 paper gives a 50-year
            probability with a median of about 5 per cent.{" "}
            <Cite id="MAZZOTTI-04" /> The province’s 2025 assessment puts the
            50-year probability in a 10 to 20 per cent band, with 3 per cent
            over 10 years and 9 per cent over 30. <Cite id="DCRRA-2025" /> They
            are 21 years apart and they disagree by a factor of two to four.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The last Cascadia earthquake is dated to the evening of 26 January 1700",
      body: (
        <Prose>
          <p>
            Natural Resources Canada: “At 9PM on January 26, 1700 one of the
            world’s largest earthquakes occurred along the west coast of North
            America. The undersea Cascadia thrust fault ruptured along a 1000 km
            length, from mid Vancouver Island to northern California in a great
            earthquake, producing tremendous shaking and a huge tsunami that
            swept across the Pacific.” <Cite id="NRCAN-1700" />
          </p>
          <p>
            The same page: “The earthquake shaking collapsed houses of the
            Cowichan people on Vancouver Island and caused numerous landslides.
            The shaking was so violent that people could not stand and so
            prolonged that it made them sick. On the west coast of Vancouver
            Island, the tsunami completely destroyed the winter village of the
            Pachena Bay people with no survivors. These events are recorded in
            the oral traditions of the First Nations people on Vancouver
            Island.” <Cite id="NRCAN-1700" />
          </p>
          <p>
            The date is known because the tsunami was recorded in Japan. “It is
            the accurate descriptions of the tsunami and the accurate time
            keeping by the Japanese that allows us to confidently know the size
            and exact time of this great earthquake.” <Cite id="NRCAN-1700" />{" "}
            The First Nations accounts and the Japanese records are of the same
            night.
          </p>
        </Prose>
      ),
    },
    {
      title: "Every system carries a band for each of the two earthquakes",
      body: <SystemMatrix />,
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        Two things decide most of what either earthquake means for a person, and
        both can be found out today.
      </>
    ),
    items: [
      // No citation, and none is missing: the copy leaves both bullets
      // uncited. The first rests on the province's two statements quoted
      // above, which carry their markers where they are made.
      <>
        <strong>Learn what your building is.</strong> Its age, its height and
        what it is made of. A short, older unreinforced masonry building and a
        tall building on soft ground are at risk from different earthquakes.
      </>,
      <>
        <strong>Learn what it stands on.</strong> What a building sits on
        matters as much as the building itself.{" "}
        <Link
          href="/shaking/ground/"
          className="text-accent underline underline-offset-2"
        >
          Ground conditions
        </Link>{" "}
        covers what varies across the region, and how to find out what is under
        a given address.
      </>,
    ],
    closing: (
      <>
        In either earthquake, the first seconds ask for the same two actions:
        drop, cover and hold on, and do not run outside.
      </>
    ),
  },
};
