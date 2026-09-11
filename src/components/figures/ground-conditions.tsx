import {
  At,
  Axis,
  Bar,
  FIG_COLOR,
  FIG_STROKE,
  FIG_TYPE,
  FigHeading,
  FigRule,
  FigText,
  FigValue,
  FigureCanvas,
  TrackBase,
  hatchId,
} from "./figure-kit";

/**
 * The figures on `/shaking/ground/`.
 *
 * Every number drawn here is stated in `docs/copy/ground-conditions.md`. None
 * of it comes from the Metro Vancouver Seismic Microzonation Mapping Project,
 * and nothing here reproduces, restyles or derives from those layers: the
 * decision of 10 September 2026 holds, the page's map refusal stays as it is,
 * and these are drawings of figures a paper and a provincial assessment
 * published rather than a map of where the ground is bad. See
 * `docs/licensing.md`.
 *
 * Two of the four are sections drawn downward, which is the one place on this
 * site where a vertical pixel scale carries a quantity. That is still inside
 * the rule the README sets: depth is in pixels and fixed at every width,
 * widths are percentages and mean nothing, and the drawing says so on its face.
 *
 * The captions, the alt text and the citation markers live beside the prose in
 * `src/content/pages/ground-conditions.tsx`.
 */

/* ------------------------------------------------------------------ */
/* Shared section geometry                                             */
/* ------------------------------------------------------------------ */

/** Both sections are a narrow strip, with the annotations in the space beside it. */
const COLUMN_W = "30%";
const LEADER_X = "30%";
const LEADER_W = "3%";
const NOTE_X = "34%";

/** A hairline from the edge of a column to the label that names that depth. */
function Leader({ y }: { y: number }) {
  return (
    <rect
      x={LEADER_X}
      y={y}
      width={LEADER_W}
      height="1"
      fill={FIG_COLOR.mark}
    />
  );
}

/* ------------------------------------------------------------------ */
/* The soil column                                                     */
/* ------------------------------------------------------------------ */

const COLUMN_ID = "ground-soil-column";

/** Pixels per metre of depth. Fixed, so the section never reflows. */
const COLUMN_PX_PER_M = 11;
const COLUMN_SURFACE_Y = 78;

/** The four thicknesses the study gives, in metres. */
const WATER_TABLE_M = 3;
const SHALLOW_WATER_M = 1;
const THRESHOLD_M = 9.6;
const MEAN_M = 11.8;

function columnY(metres: number): number {
  return COLUMN_SURFACE_Y + metres * COLUMN_PX_PER_M;
}

const SOLID_BASE_M = WATER_TABLE_M + THRESHOLD_M;
const BASE_M = WATER_TABLE_M + MEAN_M;
const COLUMN_HEIGHT = 262;

/**
 * The combination, drawn: loose material that can liquefy, under water shallow
 * enough to keep it saturated.
 *
 * The copy gives two thicknesses rather than one, so the band is drawn in two
 * parts under the site's own grammar. Solid to 9.6 m, which is the figure three
 * quarters of the tested profiles exceed. Hatched from there down to the 11.8 m
 * mean, because how much more than 9.6 m any one profile holds is a range and
 * not a measurement.
 *
 * The band sits under the water table because that is the mechanism the copy
 * describes: liquefaction is saturated sand losing its strength. There is no
 * depth axis, because no source gives a depth domain to hang one on, and the
 * depths that matter are written on their own lines instead.
 */
export function GroundSoilColumn() {
  const hatch = `url(#${hatchId(COLUMN_ID)})`;

  return (
    <FigureCanvas id={COLUMN_ID} height={COLUMN_HEIGHT}>
      <FigHeading y={14}>Liquefiable soil under the delta</FigHeading>
      <FigValue y={41}>Mean 11.8 m thick</FigValue>

      {/* Above the water table. Drier ground, drawn as an empty track: the
          interval is bounded by the ground surface above it and the water
          table below it, both of which are marks, so the fill is the ground
          between them rather than the thing that states them. */}
      <rect
        x="0"
        y={COLUMN_SURFACE_Y}
        width={COLUMN_W}
        height={WATER_TABLE_M * COLUMN_PX_PER_M}
        fill={FIG_COLOR.track}
      />

      {/* Solid to 9.6 m: the figure three quarters of the profiles exceed. */}
      <rect
        x="0"
        y={columnY(WATER_TABLE_M)}
        width={COLUMN_W}
        height={THRESHOLD_M * COLUMN_PX_PER_M}
        fill={FIG_COLOR.muted}
      />

      {/* Hatched to the mean: the part that varies from profile to profile. */}
      <rect
        x="0"
        y={columnY(SOLID_BASE_M)}
        width={COLUMN_W}
        height={(MEAN_M - THRESHOLD_M) * COLUMN_PX_PER_M}
        fill={hatch}
      />

      {/* Ground surface. */}
      <rect
        x="0"
        y={COLUMN_SURFACE_Y}
        width={COLUMN_W}
        height={FIG_STROKE}
        fill={FIG_COLOR.ink}
      />
      <FigText y={70} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Ground surface
      </FigText>

      {/* Groundwater: under 3 m, and in places under 1 m. */}
      <line
        x1="0"
        y1={columnY(SHALLOW_WATER_M)}
        x2={COLUMN_W}
        y2={columnY(SHALLOW_WATER_M)}
        stroke={FIG_COLOR.mark}
        strokeWidth={FIG_STROKE}
        strokeDasharray="4 3"
      />
      <Leader y={columnY(SHALLOW_WATER_M)} />
      <FigText x={NOTE_X} y={columnY(SHALLOW_WATER_M) + 4}>
        Under 1 m in places
      </FigText>

      <rect
        x="0"
        y={columnY(WATER_TABLE_M)}
        width={COLUMN_W}
        height={FIG_STROKE}
        fill={FIG_COLOR.mark}
      />
      <Leader y={columnY(WATER_TABLE_M)} />
      <FigText x={NOTE_X} y={columnY(WATER_TABLE_M) + 4} fill={FIG_COLOR.ink}>
        Water table, under 3 m
      </FigText>

      <FigText x={NOTE_X} y={168}>
        Liquefiable material
      </FigText>

      <Leader y={columnY(SOLID_BASE_M)} />
      <FigText x={NOTE_X} y={columnY(SOLID_BASE_M) + 4}>
        Three quarters exceed 9.6 m
      </FigText>

      <rect
        x="0"
        y={columnY(BASE_M)}
        width={COLUMN_W}
        height={FIG_STROKE}
        fill={FIG_COLOR.mark}
      />
      <Leader y={columnY(BASE_M)} />
      <FigText x={NOTE_X} y={columnY(BASE_M) + 4} fill={FIG_COLOR.ink}>
        Mean total 11.8 m
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* Basin amplification                                                 */
/* ------------------------------------------------------------------ */

const BASIN_ID = "ground-basin-amplification";

/**
 * Amplification factors, so 1.0 is the ground doing nothing at all. The domain
 * is the figure's own and carries no ticks: the assessment gives two factors
 * for this region, not a scale, so there is nothing here to read a third
 * number off.
 */
const BASIN_DOMAIN = 3;
const NO_AMPLIFICATION = 1;
const BASIN_ORIGIN_X = `${(NO_AMPLIFICATION / BASIN_DOMAIN) * 100}%`;

const BASIN_TRACK_A = 90;
const BASIN_TRACK_B = 138;
const BASIN_TRACK_H = 16;
const BASIN_HEIGHT = 200;

/**
 * Two factors and the two basin depths they belong to.
 *
 * The period is on the figure twice, in the heading and in the note under it,
 * because the copy is explicit that an amplification factor without a period
 * attached does not mean anything. Bars run from zero so a bar's length is the
 * factor itself, and the rule at 1.0 marks the ground neither growing nor
 * damping the shaking.
 */
export function GroundBasinAmplification() {
  return (
    <FigureCanvas id={BASIN_ID} height={BASIN_HEIGHT}>
      <FigHeading y={14}>Basin amplification at two seconds</FigHeading>
      <FigValue y={41}>1.7 to 2.63 times</FigValue>

      <FigText
        x={BASIN_ORIGIN_X}
        y={62}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        1.0, no amplification
      </FigText>

      <FigText y={82} fill={FIG_COLOR.ink}>
        1 to 2 km deep: average 1.7
      </FigText>
      <TrackBase y={BASIN_TRACK_A} height={BASIN_TRACK_H} />
      <Bar
        to={1.7}
        domain={BASIN_DOMAIN}
        y={BASIN_TRACK_A}
        height={BASIN_TRACK_H}
      />

      <FigText y={130} fill={FIG_COLOR.ink}>
        3 to 4 km deep: average 2.63
      </FigText>
      <TrackBase y={BASIN_TRACK_B} height={BASIN_TRACK_H} />
      <Bar
        to={2.63}
        domain={BASIN_DOMAIN}
        y={BASIN_TRACK_B}
        height={BASIN_TRACK_H}
      />

      {/* Drawn last, so it stays visible where it crosses the two bars. */}
      <rect
        x={BASIN_ORIGIN_X}
        y={66}
        width="1"
        height={BASIN_TRACK_B + BASIN_TRACK_H + 6 - 66}
        fill={FIG_COLOR.mark}
      />

      <FigText y={184} size={FIG_TYPE.tick}>
        Average amplification at a period of two seconds
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* Richmond dike settlement                                            */
/* ------------------------------------------------------------------ */

const DIKE_ID = "ground-dike-settlement";

/** Millimetres of vertical movement. The largest tested section sets the end. */
const DIKE_DOMAIN = 1000;
const DIKE_LIMIT = 500;
const DIKE_LIMIT_X = `${(DIKE_LIMIT / DIKE_DOMAIN) * 100}%`;

const DIKE_TRACK_H = 16;
const DIKE_ROWS = [
  { label: "No. 1 Road: 600 mm", value: 600, labelY: 82, trackY: 90 },
  { label: "Bath Slough: 1,000 mm", value: 1000, labelY: 126, trackY: 134 },
  { label: "No. 4 Road: 500 mm", value: 500, labelY: 170, trackY: 178 },
] as const;

const DIKE_AXIS_Y = 194;
const DIKE_HEIGHT = 270;

function millimetres(value: number): string {
  if (value === 0) return "0";
  return `${value === 1000 ? "1,000" : value} mm`;
}

/**
 * Three modelled settlements against the limit they are judged by.
 *
 * Every number on the drawing is published: the three movements, and the
 * provincial 500 mm the rule marks. No. 4 Road lands exactly on that limit,
 * which is what the copy says, so its bar is drawn to end on the rule rather
 * than near it. The axis carries only 0, the limit and the largest tested
 * value, because those are the numbers the reports give.
 *
 * The four limits that travel with these figures are longer than a label will
 * hold and live in the caption and the alt text: three sections of the eleven
 * analysed, at the 1-in-2,475-year earthquake, describing proposed
 * cross-sections without the ground improvement the City is designing and
 * costing.
 */
export function GroundDikeSettlement() {
  return (
    <FigureCanvas id={DIKE_ID} height={DIKE_HEIGHT}>
      <FigHeading y={14}>Modelled settlement on Lulu Island</FigHeading>
      <FigValue y={41}>Two sections over the limit</FigValue>

      <FigText
        x={DIKE_LIMIT_X}
        y={62}
        size={FIG_TYPE.tick}
        fill={FIG_COLOR.faint}
      >
        Provincial limit 500 mm
      </FigText>

      {DIKE_ROWS.map((row) => (
        <g key={row.label}>
          <FigText y={row.labelY} fill={FIG_COLOR.ink}>
            {row.label}
          </FigText>
          <TrackBase y={row.trackY} height={DIKE_TRACK_H} />
          <Bar
            to={row.value}
            domain={DIKE_DOMAIN}
            y={row.trackY}
            height={DIKE_TRACK_H}
          />
        </g>
      ))}

      {/* Drawn last, so it stays visible where it crosses the bars. */}
      <rect
        x={DIKE_LIMIT_X}
        y={66}
        width="1"
        height={DIKE_AXIS_Y - 66}
        fill={FIG_COLOR.mark}
      />

      <Axis
        y={DIKE_AXIS_Y}
        domain={DIKE_DOMAIN}
        values={[0, DIKE_LIMIT, DIKE_DOMAIN]}
        labelY={212}
        format={millimetres}
      />

      <FigText y={238} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Three sections tested in 2016
      </FigText>
      <FigText y={256} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        1-in-2,475-year earthquake
      </FigText>
    </FigureCanvas>
  );
}

/* ------------------------------------------------------------------ */
/* Two grounds, on one depth scale                                     */
/* ------------------------------------------------------------------ */

const GROUNDS_ID = "ground-two-grounds";

/** Pixels per metre. Shallower than the soil column, which goes to 15 m not 200. */
const GROUNDS_PX_PER_M = 0.8;

const UPLAND_SURFACE_Y = 76;
const DELTA_SURFACE_Y = 190;

/** The two thicknesses the copy gives, in metres. Both ends of the range are open. */
const SHALLOW_DEPOSITS_M = 20;
const DEEP_DEPOSITS_M = 200;

const GROUNDS_HEIGHT = 396;

function deltaY(metres: number): number {
  return DELTA_SURFACE_Y + metres * GROUNDS_PX_PER_M;
}

/**
 * The page's thesis, with no geography in it.
 *
 * This is what the site draws in place of the map it will not draw, and it is
 * a substitute rather than a stand-in: it carries the ground rather than the
 * municipality using only the two facts the copy states, and it draws no
 * boundary, no extent and no susceptibility anywhere.
 *
 * It is deliberately not a west to east section. A section needs the shape of
 * the bedrock surface and a horizontal distance, and nothing the copy gives
 * supplies either. So the two grounds are two columns on one depth scale,
 * separated by a rule because they are two places rather than one profile. The
 * delta column is hatched throughout: the copy gives the range its base falls
 * in, and both ends of that range are open.
 */
export function GroundTwoGrounds() {
  const hatch = `url(#${hatchId(GROUNDS_ID)})`;

  return (
    <FigureCanvas id={GROUNDS_ID} height={GROUNDS_HEIGHT}>
      <FigHeading y={14}>How deep the soft ground goes</FigHeading>
      <FigValue y={41}>Bedrock, or 200 m down</FigValue>

      {/* The uplands. No thickness is published, so nothing here is measured. */}
      <FigText y={68} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Downtown peninsula and North Shore
      </FigText>
      <rect
        x="0"
        y={UPLAND_SURFACE_Y}
        width={COLUMN_W}
        height={64}
        fill={FIG_COLOR.muted}
      />
      <rect
        x="0"
        y={UPLAND_SURFACE_Y}
        width={COLUMN_W}
        height={FIG_STROKE}
        fill={FIG_COLOR.ink}
      />
      <Leader y={102} />
      <FigText x={NOTE_X} y={106} fill={FIG_COLOR.ink}>
        Bedrock under the uplands
      </FigText>

      <FigRule y={156} />

      {/* The delta. */}
      <FigText y={178} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        The Fraser delta under Richmond and Delta
      </FigText>
      <rect
        x="0"
        y={DELTA_SURFACE_Y}
        width={COLUMN_W}
        height={DEEP_DEPOSITS_M * GROUNDS_PX_PER_M}
        fill={hatch}
      />
      <rect
        x="0"
        y={DELTA_SURFACE_Y}
        width={COLUMN_W}
        height={FIG_STROKE}
        fill={FIG_COLOR.ink}
      />

      <rect
        x="0"
        y={deltaY(SHALLOW_DEPOSITS_M)}
        width={COLUMN_W}
        height="1"
        fill={FIG_COLOR.mark}
      />
      <Leader y={deltaY(SHALLOW_DEPOSITS_M)} />
      <FigText x={NOTE_X} y={deltaY(SHALLOW_DEPOSITS_M) + 4}>
        Less than 20 m in places
      </FigText>

      <FigText x={NOTE_X} y={280} fill={FIG_COLOR.ink}>
        Soft delta deposits
      </FigText>

      <rect
        x="0"
        y={deltaY(DEEP_DEPOSITS_M)}
        width={COLUMN_W}
        height="1"
        fill={FIG_COLOR.mark}
      />
      <Leader y={deltaY(DEEP_DEPOSITS_M)} />
      <FigText x={NOTE_X} y={deltaY(DEEP_DEPOSITS_M) + 4}>
        More than 200 m in places
      </FigText>

      {/* The open end. The base of the deposits is not a line anybody drew. */}
      <At x="15%" y={deltaY(DEEP_DEPOSITS_M) + 3}>
        <path d="M-8 0 L0 10 L8 0 Z" fill={FIG_COLOR.muted} />
      </At>

      <FigText y={378} size={FIG_TYPE.tick} fill={FIG_COLOR.faint}>
        Depths to scale. Widths mean nothing.
      </FigText>
    </FigureCanvas>
  );
}
