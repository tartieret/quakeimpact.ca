import { Cite } from "@/components/citation";
import { Prose, VerificationNote } from "@/components/page-parts";
import { DataTable, Quote } from "@/components/prose-blocks";
import type { PageModule } from "./index";

/**
 * Buildings. The body of `/shaking/buildings/`, ported from
 * `docs/copy/buildings.md`.
 *
 * Three guards from `docs/research/buildings.md` are load-bearing here and are
 * written into the sentences rather than kept in this comment: City of
 * Vancouver figures never mix with the province's regional ones, displacement
 * is always "more than 90 days" and always per scenario, and a loss figure is
 * total economic unless the word "insured" is in the sentence. The two
 * unrelated $38 billion figures are both left off the page, which is the only
 * safe way to handle them.
 *
 * Casualty figures belong to `/shaking/casualties/`, fire following to
 * `/shaking/fire-following/`. Neither is restated here.
 */
export const buildings: PageModule = {
  meta: {
    route: "/shaking/buildings/",
    title: "Buildings",
    nav: "Buildings",
    kicker: "The shaking",
    standfirst:
      "The City of Vancouver has run three earthquakes through a model of its own buildings, and the nearer, smaller one is the worse one. Most of the city went up before the rules that would have made it safer, and about a tenth of the buildings carry nearly four fifths of the risk.",
    /**
     * First-cited order, which is the order the markers are numbered in. It is
     * also the order of "Sources on this page" at the foot of the copy file.
     */
    references: [
      "COV-RISK-2024",
      "HILT-2022",
      "DCRRA-EXP",
      "COV-PLAN-2026",
      "GSC-OF-8853",
      "COV-EXPLORER-25",
      "COV-FACTSHEET-24",
      "NZ-RC-V4",
      "COV-FOI-GLASS",
      "VBBL-2025",
      "CSA-S832-14",
      "COV-HERITAGE",
      "SEA-URM",
      "AIR-2013",
      "IBC-2025",
      "CBOC-2016",
      "LEPAN-2016",
    ],
  },

  sections: [
    {
      title:
        "In the City’s own modelling, the nearer earthquake does more damage than the bigger one",
      body: (
        <Prose>
          <p>
            In November 2024 the City of Vancouver shook a computer model of its
            own buildings with three different earthquakes and counted the
            damage each time. <Cite id="COV-RISK-2024" /> Only one of the three
            would ever happen, so the rows below are three separate what-ifs
            rather than stages of one event.
          </p>
          <DataTable
            caption="Three earthquakes modelled separately against the City of Vancouver’s buildings: how many are badly damaged, how many people are out of their homes for more than 90 days, and the direct economic loss."
            columns={[
              "Earthquake",
              "Buildings completely or extensively damaged",
              "People out of their homes for more than 90 days, daytime / nighttime",
              "Direct economic loss",
            ]}
            rows={[
              [
                "M7.2 in the Georgia Strait, close to the city",
                "6,080",
                "365,340 / 230,520",
                "$17 billion",
              ],
              [
                "M9.0 Cascadia, offshore",
                "1,440",
                "140,000 / 115,850",
                "$3.8 billion",
              ],
              [
                "M7.0 deep under the region",
                "720",
                "25,420 / 15,230",
                "$3.1 billion",
              ],
            ]}
            note={
              <>
                All of it is the City of Vancouver alone and none of it covers
                the rest of the region. Daytime and nighttime are two times of
                day the same earthquake was modelled at, not two events. Losses
                are total economic damage, not the insured share.{" "}
                <Cite id="COV-RISK-2024" />
              </>
            }
          />
          <p>
            The M7.2 in the Georgia Strait damages about four times as many
            buildings as the M9.0 offshore, and does about four and a half times
            the direct economic damage. Distance decides that, not the magnitude
            in the headline: the nearer earthquake shakes the ground at City
            Hall about as hard as the forces new buildings are designed for.{" "}
            <Cite id="COV-RISK-2024" /> The method behind the model is published
            and peer-reviewed. <Cite id="HILT-2022" />
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Most of the city was built before the rules that would have made it safer",
      body: (
        <Prose>
          <p>
            Vancouver has about 90,000 buildings. Nearly 70 per cent of them
            went up before 1990, when the first modern earthquake standards
            arrived, and about half before 1973, when there were no earthquake
            standards at all. <Cite id="COV-RISK-2024" />
          </p>
          <p>
            Five privately owned building types make up roughly a tenth of the
            stock and carry nearly 80 per cent of the city’s earthquake risk:
            concrete mid-rise and high-rise homes, wood-frame apartment
            buildings, older brick buildings people live in, low-rise concrete
            shops and offices, and downtown office towers.{" "}
            <Cite id="COV-RISK-2024" /> Six neighbourhoods carry 65 per cent of
            it: the West End, the Downtown Eastside including Chinatown and
            Strathcona, Downtown, Kitsilano, Fairview and Mount Pleasant.{" "}
            <Cite id="COV-RISK-2024" />
          </p>
          <p>
            The province counts a different thing, across all of British
            Columbia. Ninety-two per cent of its population, 4,400,000 people,
            90 per cent of its businesses and 76 per cent of its critical
            facilities, 13,000 of them, stand where the ground shaking used to
            design buildings, the level expected about once in 2,475 years,
            passes the thresholds the province set. <Cite id="DCRRA-EXP" /> That
            is a count of what is exposed, not a forecast of what any one
            earthquake does.
          </p>
        </Prose>
      ),
    },

    {
      title: "The building you are in matters more than the magnitude",
      body: (
        <Prose>
          <p>
            The City’s model splits its housing by type. These are its M7.2
            Georgia Strait figures, and they are averages for a type, not a
            verdict on any one building.
          </p>
          <DataTable
            caption="Three kinds of home in the City of Vancouver’s M7.2 Georgia Strait run: how many people live in them, how many of the buildings are badly damaged, and what share of their residents are out for more than 90 days."
            columns={[
              "Home",
              "Where",
              "People living in them",
              "Buildings badly damaged",
              "Residents out for more than 90 days",
            ]}
            rows={[
              [
                "Concrete mid-rise and high-rise",
                "West End, Downtown",
                "124,900",
                "28%",
                "70%",
              ],
              [
                "Wood-frame apartments",
                "Fairview, Kitsilano, Mount Pleasant, West End",
                "160,900",
                "not published",
                "64%",
              ],
              [
                "Older brick, 581 buildings",
                "Gastown, Downtown Eastside, Chinatown",
                "24,700",
                "35%",
                "over 97%",
              ],
            ]}
            minWidth="44rem"
            note={
              <>
                City of Vancouver only, and all of it belongs to the M7.2
                Georgia Strait scenario rather than to the other two. Badly
                damaged means extensively or completely damaged, and the share
                for wood-frame apartments is not published. The types are
                counted by what a building is, not by the year it went up.{" "}
                <Cite id="COV-RISK-2024" />
              </>
            }
          />
          <p>
            Age is missing from that table because the City has not published
            it. Its figures count a building by what it is, not by when it went
            up, and the stock they average over is old: about 70 per cent of
            Vancouver’s buildings went up before 1990 and about half before
            1973. <Cite id="COV-RISK-2024" /> So a percentage beside a building
            type is an average over mostly older construction, and where a newer
            building of the same type sits inside it is not something the
            published work answers.
          </p>
          <p>
            Wood-frame apartment buildings are the largest single cause of
            people being out of their homes. They account for 45 per cent of all
            residential displacement in that scenario, 103,900 people, and they
            hold 40 per cent of the city’s purpose-built rental.{" "}
            <Cite id="COV-RISK-2024" />
          </p>
          <p>
            The usual line about wood is that it does well in an earthquake, and
            that line is about houses. The engineering analysis behind the
            City’s 2026 action plan flags wood-frame apartment buildings
            separately, for walls that are neither stiff enough nor strong
            enough, for being likely uninhabitable after an earthquake of the
            size new buildings are designed for, and for the risk of the ground floor collapsing where it
            has been left open for tuck-under parking.{" "}
            <Cite id="COV-PLAN-2026" />
          </p>
          <p>
            Of downtown office towers, 29 per cent are extensively or completely
            damaged and nearly half of the people who use them are displaced for
            more than 90 days. <Cite id="COV-RISK-2024" />
          </p>
          <p>
            Federal modelling of the province’s own planning earthquake, a
            magnitude 7.0 in the Strait of Georgia close to the city, gives
            complete damage to 26 per cent of wood buildings, 22 per cent
            of concrete and 19 per cent of steel, and Natural Resources Canada
            puts its own caution in the same breath: “Wood is a predominant
            building material in this region, so despite having the highest
            proportion of completely damaged buildings, wood actually performs
            quite well seismically.” <Cite id="GSC-OF-8853" /> Those are
            regional figures against a very large number of wood buildings, and
            they say nothing about the wood apartment buildings above: a
            separate finding from a separate study.
          </p>
        </Prose>
      ),
    },

    {
      title: "Most of the people in the highest-risk buildings rent them",
      body: (
        <Prose>
          <p>
            In the census tracts carrying the most risk, roughly 70 to 75 per
            cent of people rent rather than own, and about 20 to 30 per cent of
            those renters are low income. More than 10 per cent are seniors, 30
            to 40 per cent are visible minorities and 4 to 10 per cent are
            Indigenous. <Cite id="COV-RISK-2024" /> Many single-room-occupancy
            units, the cheapest housing in the city, are in older brick
            buildings in the Downtown Eastside. <Cite id="COV-RISK-2024" />
          </p>
          <p>
            A tenant cannot upgrade a building, and in those tracts most people
            are tenants.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "A building can come through it and still be somewhere nobody can go back to",
      body: (
        <Prose>
          <p>
            In the M7.2 run, 28 per cent of concrete mid-rise and high-rise
            buildings are badly damaged, while 70 per cent of the people living
            in them are out of their homes for more than 90 days.{" "}
            <Cite id="COV-RISK-2024" /> Far more households are displaced than
            the damage count on its own would suggest.
          </p>
          <p>
            Where damage is concentrated, whole areas may be shut “for weeks,
            months, or even years”, and the City’s assessment names the West End
            and the Downtown Eastside. <Cite id="COV-RISK-2024" />
          </p>
          <p>
            Usually it is not the building that keeps people out. It is the
            queue for someone qualified to come and look at it. The City
            tells residents, in the material written for them, to expect
            extended inaccessibility of large sections of neighbourhoods:
          </p>
          <Quote
            speaker="City of Vancouver"
            source="Hazard and Risk Explorer, and the 2024 earthquake hazard fact sheet"
            cite={
              <>
                <Cite id="COV-EXPLORER-25" /> <Cite id="COV-FACTSHEET-24" />
              </>
            }
          >
            <p>
              “Prolonged and challenging building repair due to heavy demand for
              building assessment and trade services, even for buildings that
              only have minor damage.”
            </p>
          </Quote>
          <p>
            Someone qualified has to look at each building and say whether
            people can go back in. There is a fixed number of those people and a
            fixed number of trades to do the repairs, and they work through the
            city one building at a time. Minor damage still needs the visit.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "The falling hazard Vancouver has named is brick, on its own high streets",
      body: (
        <Prose>
          <p>
            Most people picture glass coming off a building in an earthquake.
            The City points at brick:
          </p>
          <Quote
            speaker="City of Vancouver"
            source="City-wide seismic risk assessment, November 2024"
            cite={<Cite id="COV-RISK-2024" />}
          >
            <p>
              “Commercial high streets and arterials throughout the city,
              containing many older URM, wood, and low-rise concrete commercial
              buildings, are also at high risk. As a result, these streets,
              particularly those within the Downtown Eastside and Downtown, have
              an additional risk of on-street injuries and fatalities from
              falling building debris. Along many arterials, such as Hastings
              Street, Kingsway, and others, on-street debris is likely to cause
              emergency response and transportation blockages.”
            </p>
            <p>
              “Many of these buildings have parapets and gable end walls that
              are very prone to collapse onto exterior areas immediately
              adjacent to the building.”
            </p>
          </Quote>
          <p>
            URM means unreinforced masonry: brick laid without steel through it,
            which is how almost every old commercial block on those streets was
            built. A parapet is the bit of wall that carries on above the
            roofline, the part that makes an old shopfront look taller than it
            is. It is held up by gravity and by mortar, and in an earthquake it
            comes down on the footpath.
          </p>
          <p>
            Federal modelling of the province’s own planning earthquake, a
            magnitude 7.0 in the Strait of Georgia close to the city, puts 13
            million tonnes of mixed debris on the ground, and says in the same
            passage that it is “likely to litter the streets and obstruct
            response operations”. Those estimates count shaking damage to
            buildings and the people in them, and leave out aftershocks,
            tsunami, landslides, liquefaction and fire, so the agency calls them
            a minimum. <Cite id="GSC-OF-8853" />
          </p>
          <p>
            In the 2011 earthquake in Christchurch, New Zealand, 35 of the 42
            deaths from building failures, leaving aside the two office
            buildings that collapsed outright, came from unreinforced masonry façades or walls falling, 26 of them
            onto people on the street or in vehicles. <Cite id="NZ-RC-V4" />{" "}
            That is how people die under falling brick, and it sets no number
            for Vancouver.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Nobody has measured what the glass would do, and the City has said so in writing",
      body: (
        <Prose>
          <p>
            In 2021 someone asked the City of Vancouver, through a freedom of
            information request, for any report projecting damage or casualties
            from falling glass downtown in a large earthquake. The response,
            file 04-1000-20-2021-060 and dated 17 February 2021, was that no
            such records exist, confirmed by both the Vancouver Emergency
            Management Agency and the planning department.{" "}
            <Cite id="COV-FOI-GLASS" /> And the City’s own 2024 risk assessment,
            which runs to hundreds of pages, never uses the words glass,
            glazing, cladding, curtain wall or window at all.{" "}
            <Cite id="COV-RISK-2024" />
          </p>
          <VerificationNote label="Not measured">
            How much glass would come down, and who it would hurt, has not been
            estimated for Vancouver. The City has said on the record that it
            holds no such report <Cite id="COV-FOI-GLASS" />, and no study of
            glazing, cladding or façade falling hazard has been published for
            anywhere in Canada.
          </VerificationNote>
          <p>
            What has not been measured has still been regulated. The Vancouver
            Building By-law has required for years that cladding, cantilevered
            parapets, ornaments and the ties holding brick facing on be designed
            for a stated earthquake force, and that glazing be able to move at
            least 13 mm without falling out. <Cite id="VBBL-2025" /> The
            by-law’s own commentary says why: “The failure or detachment of
            non-structural components and equipment during an earthquake can
            present a major threat to life safety.” <Cite id="VBBL-2025" />
          </p>
          <p>
            CSA Group publishes a standard on reducing the earthquake risk of
            what it calls operational and functional components, or OFCs,
            meaning everything in a building that is not its frame. It says that
            “the main cause of casualties and property damage in the event of an
            earthquake is often the failure of these OFCs”, and that losses from
            damage to them are “in many cases considerably greater than damage
            to the structural system”. <Cite id="CSA-S832-14" /> The by-law’s
            commentary points at that standard as guidance. Nothing makes it
            mandatory.
          </p>
          <p>
            Vancouver has not ignored what falls off a building, and it has not
            measured it either. It has regulated the hazard for decades in the
            buildings it has been able to regulate, which are the new ones.
          </p>
        </Prose>
      ),
    },

    {
      title:
        "Vancouver’s falling-hazard rule only bites when somebody renovates",
      body: (
        <Prose>
          <p>
            Part 11 of the Vancouver Building By-law has no equivalent in the
            provincial or national building codes. At upgrade level S3 it
            requires that “falling hazards that may impact adjacent properties
            and over public ways must be addressed”, naming cantilevered walls,
            parapets, exterior ornaments, towers, chimneys and appendages. Four
            further levels escalate the same requirement across cladding, brick
            facing, cornices, canopies and awnings. <Cite id="VBBL-2025" />
          </p>
          <p>
            Part 11 is triggered by renovation, addition, reconstruction or a
            change of use. Nothing requires an owner to brace a parapet
            otherwise, and Vancouver has no standalone parapet or façade
            retrofit requirement. <Cite id="VBBL-2025" /> A building that nobody
            renovates is never reached.
          </p>
          <p>
            Where an owner does upgrade, the by-law asks for either 50 or 75 per
            cent of current code design levels depending on the case, and the
            trigger for it moved from the cost of the permit to the scope of the
            work in 2007. <Cite id="COV-RISK-2024" /> The only money attached is
            voluntary and aimed at heritage: up to $50,000 under the Heritage
            Façade Rehabilitation Program, which requires the building be
            “constructed primarily of unreinforced masonry”, and up to $4
            million per building under the Heritage Incentive Program.{" "}
            <Cite id="COV-HERITAGE" />
          </p>
          <p>
            There is no public list of which buildings are at risk. The City’s
            Buildings Seismic Risk Reduction Action Plan, reported to council in
            2026, makes seismic screening the second of seven actions in a
            five-year plan, modelled on Seattle and other west coast cities and
            costed at $3,000 to $10,000 per building.{" "}
            <Cite id="COV-PLAN-2026" /> <Cite id="SEA-URM" /> It carries no
            publication date, and how the results would be published is
            explicitly unsettled: landlords and lenders objected to naming
            individual buildings. <Cite id="COV-PLAN-2026" />
          </p>
        </Prose>
      ),
    },

    {
      title: "Most of what the damage would cost is not insured",
      body: (
        <Prose>
          <p>
            AIR Worldwide, modelling a M9.0 Cascadia earthquake about 300 km
            from Vancouver for the Insurance Bureau of Canada in 2013, put total
            economic loss at $74.7 billion: $62.0 billion of direct damage plus
            $12.7 billion of knock-on economic effect. <Cite id="AIR-2013" />
          </p>
          <p>
            The $12.7 billion is the middle of a range running from $4.1 billion
            if the economy proves resilient to $21.4 billion if it does not,
            which puts the total somewhere between roughly $66 billion and $83
            billion. <Cite id="AIR-2013" />
          </p>
          <p>
            The same study puts insured loss at $20.4 billion, the covered part
            of the $62.0 billion of direct damage: 32.9 per cent of the direct
            loss and 27.3 per cent of the total economic loss.{" "}
            <Cite id="AIR-2013" /> The gap between those two numbers is the part
            somebody other than an insurer pays. In 2025 an Insurance Bureau of
            Canada vice-president gave a magnitude 9 as roughly $96 to $100
            billion of total economic loss and $26 billion insured. No study
            behind those figures has been published, so whether they are new
            work or the 2013 study restated is not known. <Cite id="IBC-2025" />
          </p>
          <p>
            A larger figure gets quoted often and is not a third estimate. The
            Conference Board of Canada’s $127.5 billion begins from the AIR
            study and scales it up: the Board chose an insured-loss level of $42
            billion in consultation with the Insurance Bureau of Canada, then
            assumed total economic losses would grow in line with insured ones,
            and the research itself was funded by the Insurance Bureau of
            Canada. <Cite id="CBOC-2016" />
          </p>
          <p>
            About 60 to 65 per cent of homeowners in southwest British Columbia
            carry earthquake coverage, about 70 per cent in Victoria and about
            55 per cent in Vancouver, and coverage among renters is much lower.{" "}
            <Cite id="LEPAN-2016" />
          </p>
        </Prose>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    items: [
      <>
        <strong>
          Find out what kind of building you live in, and which neighbourhood it
          is in.
        </strong>{" "}
        Five building types carry nearly 80 per cent of the city’s risk and six
        neighbourhoods carry 65 per cent of it. <Cite id="COV-RISK-2024" />
      </>,
      <>
        <strong>
          If your apartment building is wood-frame with an open parking level
          underneath, that is the thing to ask about.
        </strong>{" "}
        The analysis behind the City’s action plan names exactly that shape, a
        ground floor left open for tuck-under parking, as a collapse risk.{" "}
        <Cite id="COV-PLAN-2026" />
      </>,
      <>
        <strong>
          Find out whether your household has earthquake coverage.
        </strong>{" "}
        About 55 per cent of Vancouver homeowners do and far fewer renters,
        so it is not something a policy can be assumed to include.{" "}
        <Cite id="LEPAN-2016" /> The only way to know is to read the policy or
        ask the insurer.
      </>,
      <>
        <strong>
          Plan for being locked out of a home that is still standing.
        </strong>{" "}
        The City tells residents to expect extended inaccessibility of large
        sections of neighbourhoods, and names the demand for building assessment
        and trade services as why repairs drag out even where the damage is
        minor. <Cite id="COV-EXPLORER-25" /> <Cite id="COV-FACTSHEET-24" />{" "}
        Documents, medication, glasses and a few days of essentials are worth
        keeping somewhere you can pick up on the way out.
      </>,
      <>
        <strong>
          If you are renovating, that is when the falling-hazard rules arrive.
        </strong>{" "}
        Part 11 of the by-law requires falling hazards over public ways to be
        dealt with, and it is triggered by renovation, addition, reconstruction
        or change of use rather than by the calendar. <Cite id="VBBL-2025" />
      </>,
    ],
    closing: (
      <>
        None of these changes the building. They change how much you know about
        it in advance, and what you have with you if you cannot get back in.
      </>
    ),
  },
};
