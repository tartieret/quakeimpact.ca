import Link from "next/link";
import { Cite } from "@/components/citation";
import { ScenarioCards } from "@/components/scenario-cards";
import { SystemMatrix } from "@/components/system-grid";
import { Prose, DataTable, Figure } from "@/components/page-parts";
import {
  CrustalFaultSection,
  ScenarioBuildingResponse,
  ScenarioDurations,
} from "@/components/figures/scenarios";
import {
  SHAKEMAP_BASE_SOURCE,
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
 * and the alt text and captions of the three drawings, which are placed beside
 * the prose they illustrate and replace none of it.
 *
 * The scenario cards and the system matrix draw their data from `SCENARIOS`
 * and `SYSTEMS` in `@/content/site`; this module supplies their headings and
 * surrounding copy.
 */
export const scenarios: PageModule = {
  meta: {
    route: "/scenarios/",
    title: "Two earthquake scenarios",
    description:
      "The Lower Mainland plans for a long offshore megathrust earthquake and a shorter, more violent crustal earthquake close to the city.",
    nav: "Two scenarios",
    standfirst:
      "The Lower Mainland plans for two different earthquakes. An offshore megathrust shakes for much longer; a smaller crustal earthquake close to the city shakes more violently and hits cities harder.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "NRCAN-1700",
      "PEIRS",
      "NRCAN-SCEN",
      "DCRRA-2025",
      "GSC-OF-8853",
      "OPENDRR-GSF-22",
      "NAB-ICCHGE-08",
      "ECR-2023",
      "NRCAN-QA",
      "MAZZOTTI-04",
      "GOLDFINGER-12",
    ],
  },

  sections: [
    {
      title: "How the scenarios differ",
      body: (
        <>
          <Prose>
            <p>
              The nearer earthquake does more to Vancouver itself. Cascadia
              affects the whole coast at once, which also delays outside help.{" "}
              <Cite id="NRCAN-1700" /> <Cite id="PEIRS" />
            </p>
          </Prose>
          <ScenarioCards />
        </>
      ),
    },

    {
      title: "What the models show",
      body: (
        <Prose>
          <p>
            Two runs in the National Earthquake Scenario Catalogue underpin
            these scenarios. One models a full magnitude 9.0 rupture of the
            Cascadia fault affecting most of southwestern British Columbia. The
            other scales a real magnitude 4.6 earthquake beneath the Strait of
            Georgia in 1997 up to magnitude 7.0. <Cite id="NRCAN-SCEN" />
          </p>
          <p>
            Both runs use the same method, so they can be compared directly.
            Results are resolved to Census dissemination areas, roughly a few
            city blocks. They do not describe an individual address.{" "}
            <Cite id="NRCAN-SCEN" />
          </p>
          <p>
            The modelling counts shaking damage to buildings and the people
            inside them. It leaves out landslides, liquefaction, fire following
            and aftershocks. <Cite id="NRCAN-SCEN" /> That limit applies to
            almost every number below.
          </p>
          <p>
            British Columbia’s damage and casualty figures for both scenarios
            use this federal modelling. <Cite id="DCRRA-2025" />{" "}
            <Cite id="NRCAN-SCEN" /> <Cite id="PEIRS" /> Emergency Management
            British Columbia and the Government Operations Centre in Ottawa
            commissioned the scenarios. <Cite id="GSC-OF-8853" /> Two
            governments publishing the same figures is not independent
            agreement.
          </p>
          <Figure
            interactive
            alt={`In federal modelling, the nearer Georgia Strait magnitude 7.0 shakes the Lower Mainland far harder than the Cascadia magnitude 9.0 does: the strongest cell reaches about ${SHAKEMAP_FACTS.georgiaPeak} per cent of gravity against about ${SHAKEMAP_FACTS.cascadiaPeak}. Peak acceleration is not the whole of what either earthquake does, and this modelling covers shaking damage to buildings and the people in them and nothing else.`}
            caption={
              <>
                Two federal scenario ShakeMaps for the same window of the Lower
                Mainland, stacked so that a position in one is the same position
                in the other. <Cite id="NRCAN-SCEN" /> Every mark
                is one cell of about 730 m by 665 m, holding the mean of the
                model sites inside it. The area of a mark is the acceleration
                and the ink is the weight of evidence behind it:{" "}
                {SHAKEMAP_FACTS.sites} model sites stand behind{" "}
                {SHAKEMAP_FACTS.cells} cells, and{" "}
                {SHAKEMAP_FACTS.singleSiteCells} of those cells rest on a single
                site. The marks are separate because the model covers sites, not
                a continuous surface. Both runs measure peak ground
                acceleration. Only the Georgia Strait run includes Modified
                Mercalli intensity; calculating it for Cascadia would require a
                new conversion, so neither map uses it.{" "}
                {SHAKEMAP_CAVEATS.resolution} The shoreline and river water
                under the marks are the province’s Freshwater Atlas, which
                stops at the international boundary.
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
                . {SHAKEMAP_BASE_SOURCE.attribution}{" "}
                <a
                  href={SHAKEMAP_BASE_SOURCE.licenceUrl}
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
      title: "The crustal scenario brings violent shaking close to the city",
      body: (
        <Prose>
          <p>
            The province’s primary planning scenario is a shallow magnitude 7.0
            beneath the Georgia Basin, modelled on the 1997 event. An earthquake
            of that size or larger happens in this broad region roughly once
            every 1,500 years. The rupture is under water, but a significant
            tsunami is not expected.{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            The modelled fault plane dips at 47 degrees from the ground surface
            to a bottom edge about 13 km down, and the earthquake starts 3 km
            down. Its footprint runs
            from near Nanaimo to downtown Vancouver. That describes the fault
            itself, not where the damage falls. <Cite id="OPENDRR-GSF-22" />{" "}
            Shaking across the Lower Mainland and Nanaimo is modelled at 10 to
            60 per cent of gravity, strongest in downtown Vancouver, West
            Vancouver, Nanaimo, Gibsons, and on Gabriola and Bowen Islands.{" "}
            <Cite id="GSC-OF-8853" />
          </p>
          <Figure
            alt="The modelled crustal fault is a plane dipping at 47 degrees from the ground surface down to a bottom edge about 13 km below it, and the earthquake starts 3 km down, which is shallow. The plane reaching the surface is the model’s geometry, not a forecast that the ground breaks open."
            caption={
              <>
                A cross-section drawn from four published measurements, at the
                same scale across and down so the dip is true.{" "}
                <Cite id="OPENDRR-GSF-22" /> The footprint from near
                Nanaimo to downtown Vancouver runs lengthwise across the region,
                outside the plane of this section.
              </>
            }
          >
            <CrustalFaultSection />
          </Figure>
          <p>
            The scenario is set on a January afternoon, immediately after an
            atmospheric river has dropped 180 to 300 mm of rain over three
            days. The saturated ground makes landslides, liquefaction and dike
            failures more prominent. Warmth, dry shelter and unstable slopes
            are the immediate concerns. <Cite id="PEIRS" />
          </p>
          <p>
            The earthquake may be heard before it is felt. A low rumble like a
            freight train is followed by 10 to 20 seconds of violent shaking.
            Near the epicentre, people can be knocked off their feet. Tall
            buildings sway, unsecured objects fall and roads crack. On soft,
            saturated soil, liquefaction removes support from buildings.{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            Rain-soaked slopes fail and block transportation routes. Flooding
            worsens and some dikes fail. Damaged electrical equipment and broken
            gas lines start fires. Some buildings collapse; others shift, crack
            or burn. Glass and masonry fall into streets already blocked by
            debris. Running outside exposes people to those falling objects.
            Many who do are severely injured or killed, while thousands are
            trapped or injured inside buildings. <Cite id="PEIRS" />
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
            and 5pm, when most people are at school or work. They are minimum
            estimates because secondary hazards and damage to infrastructure
            are left out. <Cite id="GSC-OF-8853" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Cascadia affects the whole coast",
      body: (
        <Prose>
          <p>
            The magnitude 9.0 scenario ruptures about 1,000 km of the fault from
            mid Vancouver Island to northern California. Its mainshock strikes
            at 10am on an August day during a 30 to 40 °C heatwave with wildfire
            smoke, making water, shade and clean air the urgent needs. Shaking
            lasts three minutes. <Cite id="DCRRA-2025" />
          </p>
          <p>
            Heaviest damage falls on Vancouver Island and in a band about 20 km
            deep along the mainland coast, from the border to the Sunshine
            Coast. The most severely affected area is roughly 45,000 square
            kilometres. Cascading events include tsunami, urban fires,
            liquefaction, landslides, floods, seiches and aftershocks. The west
            coast of Vancouver Island subsides by about 1 m.{" "}
            <Cite id="DCRRA-2025" />
          </p>
          <p>
            Mainshock shaking alone completely damages about 18,000 buildings,
            sends more than 10,000 people to hospital and kills 3,400. Those
            figures exclude landslides, liquefaction, tsunami, fires and other
            secondary hazards. <Cite id="DCRRA-2025" />
          </p>
          <p>
            It also models an aftershock: magnitude 7.1, 60 km beneath Sidney,
            about a month later, at 11pm, during an atmospheric river, lasting
            20 seconds. <Cite id="DCRRA-2025" />
          </p>
          <p>
            The last Cascadia earthquake began at 9pm on 26 January 1700. The
            fault ruptured for about 1,000 km and produced a tsunami that crossed
            the Pacific. On Vancouver Island, shaking collapsed Cowichan houses
            and triggered landslides. People could not stand and became sick
            from the prolonged motion. The tsunami destroyed the Pachena Bay
            winter village, leaving no survivors. First Nations oral traditions
            record these events. <Cite id="NRCAN-1700" />
          </p>
          <p>
            Japanese records of the arriving tsunami establish the date and
            time. Those records and the First Nations accounts describe the same
            night. <Cite id="NRCAN-1700" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Duration and building type change what fails",
      body: (
        <Prose>
          <p>
            The crustal earthquake produces high-frequency shaking that is
            hardest on short buildings. Unreinforced masonry, brick or concrete
            block built without steel reinforcing, and unreinforced concrete
            buildings may collapse or become uninhabitable. <Cite id="PEIRS" />
          </p>
          <p>
            The megathrust produces long-period waves that move tall buildings
            on deep, soft sediment, including parts of Richmond.{" "}
            <Cite id="DCRRA-2025" />
          </p>
          <Figure
            alt="Fast, sharp shaking is most hazardous to short, stiff, older buildings, while slow, long shaking moves tall buildings on soft ground. Each earthquake affects buildings differently. The drawing shows building response only, not damage."
            caption={
              <>
                The same two buildings appear in both panels. The waves are
                drawn at the same size and carry no scale because no published
                scale exists.
              </>
            }
          >
            <ScenarioBuildingResponse />
          </Figure>
          <p>
            At the Golden Ears Bridge, the soil and deep foundations begin to
            act on each other as shaking lasts longer. In a 30-second design
            event, the moving ground and swaying structure load the bridge at
            the same time. In a 10-second event, the two are largely uncoupled.
            In the longer event, the soil liquefies while the structure is still
            being shaken. <Cite id="NAB-ICCHGE-08" />
          </p>
          <p>
            Those are design events for one bridge, not properties of either
            scenario. Past a certain length, the ground fails while the shaking
            is still going on. The structure then carries the shaking and the
            moving ground at the same time.
          </p>
          <p>
            The province’s magnitude 7.0 Greater Vancouver planning scenario
            gives 10 to 20 seconds of violent shaking, while its magnitude 9.0
            Cascadia scenario gives three minutes. <Cite id="PEIRS" />{" "}
            <Cite id="DCRRA-2025" /> A federal exercise scenario for a magnitude
            6.8 near Tsawwassen lasts more than one minute.{" "}
            <Cite id="ECR-2023" /> Duration belongs to a named scenario, not to
            magnitude alone.
          </p>
          <Figure
            alt="The province's crustal magnitude 7.0 scenario gives 10 to 20 seconds of violent shaking, its Cascadia magnitude 9.0 scenario three minutes, and a federal magnitude 6.8 exercise scenario over one minute. Duration depends on the scenario, not magnitude alone."
            caption={
              <>
                The smallest of the three scenarios is not the shortest, so
                duration cannot be inferred from magnitude.{" "}
                <Cite id="PEIRS" /> <Cite id="DCRRA-2025" />{" "}
                <Cite id="ECR-2023" /> Its bar is solid to one minute and
                hatched beyond it because no end is given.
              </>
            }
          >
            <ScenarioDurations />
          </Figure>
        </Prose>
      ),
    },

    {
      title: "Estimates of how often Cascadia ruptures vary",
      body: (
        <Prose>
          <DataTable
            caption="Four current estimates of the average interval between Cascadia ruptures, with the range around each average."
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
            All four estimates are current and official.
          </p>
          <p>
            For the northern end of the fault, or a full rupture, one estimate
            puts the chance at 7 to 12 per cent in the next 50 years.{" "}
            <Cite id="GOLDFINGER-12" /> A separate federal estimate gives a
            median of about 5 per cent over the same period.{" "}
            <Cite id="MAZZOTTI-04" /> British Columbia’s 2025 assessment uses a
            10 to 20 per cent band, with 3 per cent over 10 years and 9 per cent
            over 30. <Cite id="DCRRA-2025" /> The federal and provincial
            estimates were published 21 years apart and differ by a factor of
            two to four.
          </p>
          <p>
            A higher figure, about 37 per cent in the next 50 years, circulates
            widely. It applies to the{" "}
            <strong>southern</strong> end of the Cascadia fault, off southern
            Oregon and northern California, where ruptures are roughly twice as
            frequent. It is not a figure for this coast.{" "}
            <Cite id="GOLDFINGER-12" />
          </p>
        </Prose>
      ),
    },
    {
      title: "Impacts by scenario",
      body: <SystemMatrix />,
    },
  ],

  lever: {
    heading: "What you can do",
    title: (
      <>
        Start with the building and the ground beneath it.
      </>
    ),
    items: [
      // No citation, and none is missing: the copy leaves both bullets
      // uncited. The first rests on the two building findings above, which
      // carry their markers where they are made.
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
        In either earthquake, drop, cover and hold on. Do not run outside.
      </>
    ),
  },
};
