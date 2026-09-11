/**
 * Plain-Node geometry helpers for the data vendoring scripts.
 *
 * No dependencies, by project rule. Everything here is small enough to read in
 * one sitting, which is the point: the reduction a figure is drawn from has to
 * be auditable, not delegated to a black box.
 *
 * Distances are metres on a local equirectangular projection. Over a 70 km
 * region at 49 degrees north that is accurate to well under a metre, which is
 * two orders of magnitude finer than any tolerance used here.
 */

const M_PER_DEG_LAT = 110_574;
const M_PER_DEG_LON_AT = (lat) => 111_320 * Math.cos((lat * Math.PI) / 180);

/** Local metre projection anchored on a reference latitude. */
export function metreProjector(refLat) {
  const kx = M_PER_DEG_LON_AT(refLat);
  return ([lon, lat]) => [lon * kx, lat * M_PER_DEG_LAT];
}

/** Perpendicular distance from p to the segment ab, in projected units. */
function segmentDistance(p, a, b) {
  const [px, py] = p;
  const [ax, ay] = a;
  const [bx, by] = b;
  const dx = bx - ax;
  const dy = by - ay;
  const len2 = dx * dx + dy * dy;
  if (len2 === 0) return Math.hypot(px - ax, py - ay);
  let t = ((px - ax) * dx + (py - ay) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

/**
 * Douglas-Peucker, iterative so a long coastline cannot blow the stack.
 *
 * `tolerance` is in metres: no retained vertex moves the drawn line by more
 * than that from the original. Written out rather than pulled from a library
 * because the project takes no new dependencies.
 */
export function simplify(points, toleranceMetres, refLat) {
  if (points.length <= 2) return points.slice();
  const project = metreProjector(refLat);
  const xy = points.map(project);
  const keep = new Uint8Array(points.length);
  keep[0] = 1;
  keep[points.length - 1] = 1;
  const stack = [[0, points.length - 1]];
  while (stack.length > 0) {
    const [first, last] = stack.pop();
    let worst = 0;
    let index = -1;
    for (let i = first + 1; i < last; i += 1) {
      const d = segmentDistance(xy[i], xy[first], xy[last]);
      if (d > worst) {
        worst = d;
        index = i;
      }
    }
    if (index !== -1 && worst > toleranceMetres) {
      keep[index] = 1;
      stack.push([first, index], [index, last]);
    }
  }
  return points.filter((_, i) => keep[i] === 1);
}

/** Round a [lon, lat] pair to `digits` decimal places. */
export function roundPoint([lon, lat], digits) {
  const f = 10 ** digits;
  return [Math.round(lon * f) / f, Math.round(lat * f) / f];
}

/** Drop consecutive duplicate vertices left behind by rounding. */
export function dropRepeats(points) {
  const out = [];
  for (const p of points) {
    const prev = out[out.length - 1];
    if (!prev || prev[0] !== p[0] || prev[1] !== p[1]) out.push(p);
  }
  return out;
}

/**
 * Reduce one ring or line: simplify in metres, then round, then drop repeats.
 * Returns null if the result is too short to draw.
 */
export function reduceLine(points, { tolerance, digits, refLat, minPoints = 2 }) {
  const reduced = dropRepeats(
    simplify(points, tolerance, refLat).map((p) => roundPoint(p, digits)),
  );
  return reduced.length >= minPoints ? reduced : null;
}

/** Greatest distance between the original line and its reduction, in metres. */
export function maxDeviation(original, reduced, refLat) {
  const project = metreProjector(refLat);
  const a = original.map(project);
  const b = reduced.map(project);
  let worst = 0;
  for (const p of a) {
    let best = Infinity;
    for (let i = 0; i < b.length - 1; i += 1) {
      const d = segmentDistance(p, b[i], b[i + 1]);
      if (d < best) best = d;
    }
    if (best > worst) worst = best;
  }
  return worst;
}

/** Every line of a GeoJSON geometry, as arrays of [lon, lat]. */
export function geometryLines(geometry) {
  const { type, coordinates } = geometry;
  if (type === "LineString") return [coordinates];
  if (type === "MultiLineString") return coordinates;
  if (type === "Polygon") return coordinates;
  if (type === "MultiPolygon") return coordinates.flat();
  if (type === "Point") return [[coordinates]];
  return [];
}

export function inBox([lon, lat], [west, south, east, north]) {
  return lon >= west && lon <= east && lat >= south && lat <= north;
}
