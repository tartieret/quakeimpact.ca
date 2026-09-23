/**
 * Photographs, and the terms each one comes with.
 *
 * The companion to `references.ts`, and deliberately not part of it. A
 * reference is a document a claim rests on; a photograph is not a claim and may
 * not become one. `docs/style-guide.md` §8 sets the test a photograph has to
 * pass — it shows a mechanism the page has described and a reader has never
 * seen — and `docs/media.md` §"What a photograph is for on this site" carries
 * the limits and the reasoning.
 *
 * This file is the one place a photographer, a licence and a source link are
 * written. The credit under the photograph is read from here, so a corrected
 * licence reaches the page in one edit.
 *
 * Unlike `references.ts` this file is written by hand: there are a handful of
 * entries, each is checked one at a time against its own source page, and the
 * generator that builds the source register from `docs/research/sources.md` has
 * nothing to offer a register this size.
 */

export type MediaLicenceId =
  | "PD"
  | "CC-BY-2.0"
  | "CC-BY-2.1-JP"
  | "CC-BY-3.0"
  | "CC-BY-4.0"
  | "CC-BY-SA-2.0"
  | "CC-BY-SA-3.0"
  | "CC-BY-SA-4.0"
  | "CC-BY-NC-SA-2.0"
  | "CC-BY-NC-ND-4.0"
  | "PD-USGov-USGS";

export interface MediaLicence {
  id: MediaLicenceId;
  /** The licence's own name, for a register entry or a note about terms. */
  name: string;
  /** How it is written in a credit line under a photograph. */
  short: string;
  href: string;
  /**
   * A derived work has to carry the same licence. Costs nothing while the
   * photograph sits in a page as itself, and rules it out of anything the site
   * draws on: a composite, an annotated version, a crop inside a figure.
   */
  shareAlike: boolean;
  /**
   * Usable only while the site sells nothing, carries no advertising and
   * promotes no paid offering. A flag rather than a note, so the question
   * "what comes off if that changes" is answered by reading the data.
   */
  nonCommercial: boolean;
  /**
   * No crop, no colour correction, no overlay, no composite. Straight resizing
   * is not a derivative. The credit says "No changes made."
   */
  noDerivatives: boolean;
}

export const MEDIA_LICENCES: Record<MediaLicenceId, MediaLicence> = {
  /**
   * Not a licence but the absence of one: the photographer released the work
   * into the public domain, so nothing is required and nothing is forbidden.
   * It is in this table anyway, because the credit line is built from it and a
   * reader is owed the photographer's name whether or not the law asks for it.
   * The link goes to the dedication the source page carries rather than to a
   * general explanation of the public domain, so the claim can be checked where
   * it was made.
   */
  PD: {
    id: "PD",
    name: "Released into the public domain by the photographer",
    short: "Public domain",
    href: "https://commons.wikimedia.org/wiki/Template:PD-user-en",
    shareAlike: false,
    nonCommercial: false,
    noDerivatives: false,
  },
  "CC-BY-2.0": {
    id: "CC-BY-2.0",
    name: "Creative Commons Attribution 2.0 Generic",
    short: "CC BY 2.0",
    href: "https://creativecommons.org/licenses/by/2.0/",
    shareAlike: false,
    nonCommercial: false,
    noDerivatives: false,
  },
  /**
   * The Japan port of CC BY 2.1. The City of Kobe published its official
   * earthquake archive under it, which is why the register carries a licence
   * nothing else on the site uses. Attribution only: no share-alike, no
   * non-commercial condition, no bar on derivatives.
   */
  "CC-BY-2.1-JP": {
    id: "CC-BY-2.1-JP",
    name: "Creative Commons Attribution 2.1 Japan",
    short: "CC BY 2.1 JP",
    href: "https://creativecommons.org/licenses/by/2.1/jp/",
    shareAlike: false,
    nonCommercial: false,
    noDerivatives: false,
  },
  "CC-BY-3.0": {
    id: "CC-BY-3.0",
    name: "Creative Commons Attribution 3.0 Unported",
    short: "CC BY 3.0",
    href: "https://creativecommons.org/licenses/by/3.0/",
    shareAlike: false,
    nonCommercial: false,
    noDerivatives: false,
  },
  "CC-BY-4.0": {
    id: "CC-BY-4.0",
    name: "Creative Commons Attribution 4.0 International",
    short: "CC BY 4.0",
    href: "https://creativecommons.org/licenses/by/4.0/",
    shareAlike: false,
    nonCommercial: false,
    noDerivatives: false,
  },
  "CC-BY-SA-2.0": {
    id: "CC-BY-SA-2.0",
    name: "Creative Commons Attribution-ShareAlike 2.0 Generic",
    short: "CC BY-SA 2.0",
    href: "https://creativecommons.org/licenses/by-sa/2.0/",
    shareAlike: true,
    nonCommercial: false,
    noDerivatives: false,
  },
  "CC-BY-SA-3.0": {
    id: "CC-BY-SA-3.0",
    name: "Creative Commons Attribution-ShareAlike 3.0 Unported",
    short: "CC BY-SA 3.0",
    href: "https://creativecommons.org/licenses/by-sa/3.0/",
    shareAlike: true,
    nonCommercial: false,
    noDerivatives: false,
  },
  "CC-BY-SA-4.0": {
    id: "CC-BY-SA-4.0",
    name: "Creative Commons Attribution-ShareAlike 4.0 International",
    short: "CC BY-SA 4.0",
    href: "https://creativecommons.org/licenses/by-sa/4.0/",
    shareAlike: true,
    nonCommercial: false,
    noDerivatives: false,
  },
  "CC-BY-NC-SA-2.0": {
    id: "CC-BY-NC-SA-2.0",
    name: "Creative Commons Attribution-NonCommercial-ShareAlike 2.0 Generic",
    short: "CC BY-NC-SA 2.0",
    href: "https://creativecommons.org/licenses/by-nc-sa/2.0/",
    shareAlike: true,
    nonCommercial: true,
    noDerivatives: false,
  },
  "CC-BY-NC-ND-4.0": {
    id: "CC-BY-NC-ND-4.0",
    name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International",
    short: "CC BY-NC-ND 4.0",
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    shareAlike: false,
    nonCommercial: true,
    noDerivatives: true,
  },
  /**
   * Not a licence: a work of the United States Geological Survey, which is a
   * work of the US federal government and in the public domain. Attribution
   * is not required by law, and the credit gives it anyway because it is what
   * the rest of the register does and it tells a reader where to check. The
   * link is the Commons template the file page carries, which states the basis.
   */
  "PD-USGov-USGS": {
    id: "PD-USGov-USGS",
    name: "Public domain: work of the U.S. Geological Survey",
    short: "Public domain (USGS)",
    href: "https://commons.wikimedia.org/wiki/Template:PD-USGov-USGS",
    shareAlike: false,
    nonCommercial: false,
    noDerivatives: false,
  },
};

/**
 * How far a photograph has got through the check in `docs/media.md`.
 *
 * `verified` is the only state that may be hosted, and it means one thing: a
 * person opened the source page, read the photographer and the licence off it,
 * and dated the row. `stated` means the register holds a photographer and a
 * licence taken from the brief the images arrived in, which is a good record of
 * someone else's check and is not one of ours.
 */
export type MediaStatus = "verified" | "stated" | "to-verify";

export interface Photograph {
  id: string;
  /**
   * The file under `public/media/`, or `null` while the photograph is cleared
   * and the file is not hosted. A null file draws a labelled slot naming the
   * photographer and the licence, rather than a broken image or a picture of
   * nothing: `docs/style-guide.md` §8 again — nothing looks more finished than
   * it is.
   */
  file: string | null;
  /**
   * The hosted file's own aspect ratio, as a CSS `aspect-ratio` value. It
   * reserves the right amount of space before the image arrives, so hosting a
   * file does not move the page under a reader. Left at the frame's default
   * where the file has not been measured.
   */
  ratio?: string;
  /**
   * What the ground is doing, in one sentence. Not what the object is: a reader
   * who cannot see the photograph is owed the mechanism, and "a car in mud" is
   * not the mechanism.
   */
  alt: string;
  photographer: string;
  /** The photographer's own title, where the collection records one. */
  title?: string;
  /** Where the file is published. Named in the credit. */
  collection: string;
  /** The source page, which is where the licence can be checked. */
  href: string;
  /** When the photograph was taken, in the reader's terms. */
  taken: string;
  /** Where, in the reader's terms. */
  place: string;
  /**
   * What the site has done to the file beyond resizing and re-encoding, in the
   * words the credit prints — "Cropped to the runway." — or absent where
   * nothing has been done. The 4.0 licences require a change to be indicated,
   * and share-alike and no-derivatives licences mean a row carrying this field
   * should not exist at all: check the licence before writing it.
   */
  changes?: string;
  licence: MediaLicenceId;
  status: MediaStatus;
  /**
   * The route the photograph sits on, or `null` where it is cleared and held.
   *
   * A held photograph is one whose terms are settled and which has nowhere it
   * belongs yet. It is kept rather than dropped, because clearing an image is
   * the slow part and the page that wants it may be written later.
   *
   * A photograph is credited under itself, on the page it sits on, so this is
   * not what puts a credit in front of a reader. It is what separates placed
   * from held, which is the difference between a non-commercial licence the
   * site is relying on today and one it is only holding: `/licences/` reads it
   * for that sentence, and gets the answer from the register rather than from
   * somebody's memory of which rows are on a page.
   */
  usedOn: string | null;
}

/**
 * Mostly Christchurch, in 2010 and 2011. Those are analogues, none of them may
 * generate a claim about Metro Vancouver — `docs/style-guide.md` §10, question
 * 8 — and the caption that carries one does the framing: the local ground the
 * photograph stands for, and the ground under the camera.
 *
 * `vancouver-dfps-hydrant` is the exception and the only one so far. It is a
 * photograph of the thing itself, on the street the reader is being asked to
 * look at, so the analogue rule has nothing to bite on: there is no transfer to
 * limit. Its caption does the opposite job — not "this could happen here" but
 * "this is the object, go and see whether it is on your corner".
 */
export const PHOTOGRAPHS = {
  "christchurch-cars-in-silt": {
    id: "christchurch-cars-in-silt",
    file: "christchurch-cars-in-silt.jpg",
    ratio: "4 / 3",
    alt: "Two cars stand parked on a residential street in wet grey silt that rose through the ground and spread over it, their wheels sunk into it and water pooling alongside. The cars did not drive into the silt.",
    photographer: "Schwede66",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Liquefaction_in_Peterborough_St.JPG",
    taken: "22 February 2011",
    place: "Peterborough Street, central Christchurch, New Zealand",
    licence: "CC-BY-SA-3.0",
    status: "verified",
    usedOn: "/shaking/ground/",
  },

  "avonside-road-damage": {
    id: "avonside-road-damage",
    file: "avonside-road-damage.jpg",
    ratio: "4 / 3",
    alt: "A suburban street lies under wet grey silt and standing water, with parked cars sitting in it. In the foreground the silt has built low circular cones around the holes it emerged through from below.",
    photographer: "Martin Luff",
    collection: "Flickr",
    href: "https://www.flickr.com/photos/martinluff/5471846307",
    taken: "22 February 2011",
    place: "Avonside, Christchurch, New Zealand",
    licence: "CC-BY-SA-2.0",
    status: "verified",
    usedOn: "/shaking/ground/",
  },

  /**
   * The three below are the September 2010 Darfield earthquake rather than
   * February 2011, and that is deliberate. Same city, same building stock, same
   * failure — and no one died directly. The 2011 photographs of the same mechanism
   * carry a death toll that `/shaking/buildings/` cites two paragraphs further
   * down, and using them would have put the limit on casualty imagery under
   * pressure for no gain. 2010 gets the mechanism with none of that.
   */
  "christchurch-beckenham-shops": {
    id: "christchurch-beckenham-shops",
    file: "christchurch-beckenham-shops.jpg",
    ratio: "100 / 39",
    alt: "A row of two-storey brick shops, each carrying a moulded parapet above its roofline. On one of them the parapet and the wall below it have gone, leaving bare brick and a dark cavity behind, and the verandah underneath is bent where the masonry landed on it. Tape and traffic cones close the footpath along the whole row, and the shopfront directly under the failure is boarded over with plywood.",
    photographer: "Greg O’Beirne",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:ChristchurchEarthquake_Beckenham03_gobeirne.jpg",
    taken: "4 September 2010",
    place: "Beckenham, Christchurch, New Zealand",
    licence: "CC-BY-SA-3.0",
    status: "verified",
    usedOn: "/shaking/buildings/",
  },

  "christchurch-dairy-gable-wall": {
    id: "christchurch-dairy-gable-wall",
    file: "christchurch-dairy-gable-wall.jpg",
    ratio: "1600 / 1199",
    alt: "The upper brick wall of a two-storey corner shop has come off the building, opening the room behind it to the street with its interior door and lining still standing. The brick that fell lies heaped on the footpath directly below, against a shopfront whose windows, awning and signs are undamaged.",
    photographer: "Martin Luff",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Earthquake_damage_-_dairy.jpg",
    taken: "6 September 2010",
    place: "Dallington, Christchurch, New Zealand",
    licence: "CC-BY-SA-2.0",
    status: "verified",
    usedOn: "/shaking/buildings/",
  },

  "christchurch-moorhouse-parapet": {
    id: "christchurch-moorhouse-parapet",
    file: "christchurch-moorhouse-parapet.jpg",
    ratio: "4 / 3",
    alt: "Brick from a collapsed parapet lies spread the length of a footpath and out across the parking lane of a wide road, fenced off with mesh panels and cones. The building it came off stands with its walls and windows intact, and traffic is running in the far lanes.",
    photographer: "Nate Cull",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Office_Building_Moorhouse_Ave.jpg",
    taken: "6 September 2010",
    place: "Moorhouse Avenue, Christchurch, New Zealand",
    licence: "CC-BY-SA-2.0",
    status: "verified",
    usedOn: "/shaking/buildings/",
  },

  /**
   * The first photograph on the site that is not an analogue. `/shaking/fire-
   * following/` tells a reader that the blue hydrants are the one part of the
   * City's description of the dedicated fire system they can act on, and then
   * does not show them one. This does.
   *
   * Non-commercial as well as share-alike, which makes two NC rows in the
   * register rather than one. `nonCommercialPhotographs()` is what answers the
   * question on the day it is asked, and what decides whether `/licences/`
   * mentions the condition at all.
   */
  "vancouver-dfps-hydrant": {
    id: "vancouver-dfps-hydrant",
    file: "vancouver-dfps-hydrant.jpg",
    ratio: "1 / 1",
    alt: "A fire hydrant with a bright blue body and a white bonnet stands at the kerb on a brick-paved footpath, the letters DFPS cast into the blue below one of its outlets. The blue marks a hydrant fed by the city's dedicated fire protection system, separate from the drinking-water mains.",
    photographer: "Tom Magliery",
    title: "Hydrant",
    collection: "Flickr",
    href: "https://www.flickr.com/photos/mag3737/35236992430",
    taken: "24 June 2017",
    place: "Vancouver, British Columbia",
    licence: "CC-BY-NC-SA-2.0",
    status: "verified",
    usedOn: "/shaking/fire-following/",
  },

  /**
   * The first photograph on an `/after/` page, and the first admitted under the
   * widened test in `docs/media.md`: it teaches no mechanism a reader could not
   * already picture, and it is there because `/after/water/` asks them to
   * believe a duration. The page carries 267 modelled failures, about 60 of
   * them at crossings, and New Westminster's "approximately 1-3 days per
   * break". This is one repair, and what one of them costs is the whole
   * argument for why the total takes months.
   *
   * It is a well valve rather than a buried transmission main, and the caption
   * says so. There is no photograph of an earthquake-broken buried main in any
   * openly licensed collection reachable from here — Commons has pipe-in-trench
   * images only from ordinary, non-seismic breaks. Reaching for one of those
   * and letting the page imply an earthquake would be the exact failure the
   * register exists to prevent.
   */
  "christchurch-parkview-valve": {
    id: "christchurch-parkview-valve",
    file: "christchurch-parkview-valve.jpg",
    ratio: "4 / 3",
    alt: "Seen from above, a worker crouches at the bottom of a deep concrete shaft in standing water, both hands on the joint where a blue gate valve meets a large flanged pipe. A ladder runs down the shaft wall and a second person steadies it from the rim.",
    photographer: "Martin Luff",
    title: "Trying to restore water to Christchurch",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Repairing_earthquake_damage_to_valve,_Parkview_School_well,_Christchurch.jpg",
    taken: "28 February 2011",
    place: "Parkview School, Christchurch, New Zealand",
    licence: "CC-BY-SA-2.0",
    status: "verified",
    usedOn: "/after/water/",
  },

  /**
   * The first clock on `/after/water/`, and `kumamoto-temporary-pipe` is the
   * second. The section they sit in is about two durations that do not join up:
   * four to five days of trucking bulk water to people, and many months of
   * repairing the network. One photograph each, with the figure that draws the
   * gap between them.
   *
   * Greg O'Beirne's second row in the register, after
   * `christchurch-beckenham-shops`, and from the same suburb.
   *
   * People are in frame and none of them is in difficulty: neighbours filling
   * buckets on a sunny street, including a child who is not the subject. The
   * limit in `docs/media.md` bars casualties and identifiable people in
   * distress, and an orderly queue for water is neither. Recorded because a
   * photograph with a child in it should be a decision somebody made rather
   * than one nobody noticed.
   */
  "christchurch-water-tanker": {
    id: "christchurch-water-tanker",
    file: "christchurch-water-tanker.jpg",
    ratio: "765 / 1024",
    alt: "A road tanker stands at the kerb of a tree-lined residential street while about a dozen people fill white buckets, plastic jugs and bottles from its outlet, more empty containers waiting on the grass verge beside them. One person crouches to hold a bucket under the tap.",
    photographer: "Greg O’Beirne",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Post-earthquake_water_distribution_in_Beckenham_-_Tanker.jpg",
    taken: "23 February 2011",
    place: "Fisher Avenue, Beckenham, Christchurch, New Zealand",
    licence: "CC-BY-2.0",
    status: "verified",
    usedOn: "/after/water/",
  },

  /**
   * The second photograph on `/after/water/`, placed under the two-clocks
   * figure: a temporary pipe laid on the surface of a road three weeks after
   * the earthquakes.
   *
   * The file's description is one line, "Temporary pipe after the 2016
   * Kumamoto earthquake", and does not say what the pipe carries. The caption
   * and the alt text do not say either.
   */
  "kumamoto-temporary-pipe": {
    id: "kumamoto-temporary-pipe",
    file: "kumamoto-temporary-pipe.jpg",
    ratio: "4 / 3",
    alt: "A grey pipe runs along the edge of a cracked rural road, weighted down at intervals by white sandbags, and carries on into the distance towards the mountains. There is no trench: the pipe lies on the road surface.",
    photographer: "hanonimas",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Temporary_pipe_after_the_2016_Kumamoto_earthquake.jpg",
    taken: "7 May 2016",
    place: "Akamizu, Aso, Kumamoto Prefecture, Japan",
    licence: "CC-BY-SA-3.0",
    status: "verified",
    usedOn: "/after/water/",
  },

  /**
   * The pair on `/after/transportation/`, and the first photographs on the site
   * from an earthquake that is neither Christchurch nor Japan. The 2018
   * Anchorage magnitude 7.0 killed nobody, and a state transport department
   * photographed its own crossings and released the set under CC BY 2.0, which
   * is a combination the register has not had before.
   *
   * They are there for the page's least intuitive claim: that restoration is
   * gated on inspection before it is gated on repair, so a crossing that
   * survived is still shut in the morning. The first is the inspection. The
   * second is the morning.
   *
   * **Both files carry an EXIF rotation and Commons reports the unrotated
   * dimensions.** The file page for the first says 3024 × 4032, which is
   * portrait, and the frame is landscape. Taking that number would have set a
   * `3 / 4` frame around a `4 / 3` picture and letterboxed it on every screen.
   * The `ratio` on each row is measured off the hosted file after the rotation
   * was applied, which is the only number that describes what a browser draws.
   * This is the same failure `docs/media.md` records for the first two rows in
   * the register, arriving by a different route.
   */
  "anchorage-bridge-inspection": {
    id: "anchorage-bridge-inspection",
    file: "anchorage-bridge-inspection.jpg",
    ratio: "4 / 3",
    alt: "A gloved hand holds a tape measure flat across a crack that runs through asphalt, the crack open wide enough that a width can be read off the tape. The surface either side of it is sound.",
    photographer: "Alaska DOT&PF",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Earthquake,_NB_Glenn,_Eagle_River_Bridge_11.30.2018.jpg",
    taken: "30 November 2018",
    place: "Glenn Highway at the Eagle River bridge, Anchorage, Alaska",
    licence: "CC-BY-2.0",
    status: "verified",
    usedOn: "/after/transportation/",
  },

  "anchorage-glenn-highway-closed": {
    id: "anchorage-glenn-highway-closed",
    file: "anchorage-glenn-highway-closed.jpg",
    ratio: "4 / 3",
    alt: "A wide highway carriageway stands empty of traffic under a grey sky, with a pickup, plant and a crew in high-visibility clothing working at the far end and snow on the verges. Cracks run across the concrete in the foreground.",
    photographer: "Alaska DOT&PF",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Earthquake,_NB_Glenn,_Eagle_River_Bridge_3_12.1.2018.jpg",
    taken: "1 December 2018",
    place: "Glenn Highway at the Eagle River bridge, Anchorage, Alaska",
    licence: "CC-BY-2.0",
    status: "verified",
    usedOn: "/after/transportation/",
  },

  /**
   * The picture `/after/transportation/` was missing, and it took a second pass
   * to find. The page's argument is that the structure is not what fails — the
   * ground carrying the road up to it is — and the whole difficulty of showing
   * that is that a photograph of a wrecked road usually has no intact road in
   * it to compare against. This frame has both, a few metres apart: the
   * carriageway on the left is unbroken with its lane markings on, and the
   * off-ramp on the right has gone down the slope with its guardrail.
   *
   * It is an off-ramp embankment, not a bridge approach, and the caption calls
   * it an off-ramp.
   */
  "anchorage-mirror-lake-ramp": {
    id: "anchorage-mirror-lake-ramp",
    file: "anchorage-mirror-lake-ramp.jpg",
    ratio: "1800 / 667",
    alt: "A highway off-ramp has dropped away entirely, its asphalt broken into tilted slabs and the embankment beneath it slid down the slope carrying the guardrail with it. The main carriageway a few metres to the left is unbroken, lane markings intact, snow on the verge.",
    photographer: "Alaska DOT&PF",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Mirror_Lake_SB_OFF_Ramp_Before.jpg",
    taken: "30 November 2018",
    place: "Mirror Lake interchange, Glenn Highway, Chugiak, Alaska",
    licence: "CC-BY-2.0",
    status: "verified",
    usedOn: "/after/transportation/",
  },

  /**
   * **Suggested by the site's owner.** The second photograph on the site that
   * is not an analogue, after the DFPS hydrant. The page spends a section on
   * the tunnel's capacity and never shows the reader which crossing it means.
   * The caption says where the tunnel is and quotes the province on why it
   * matters.
   *
   * CC BY-SA 4.0: share-alike, so not cropped.
   */
  "george-massey-tunnel-south-portal": {
    id: "george-massey-tunnel-south-portal",
    file: "george-massey-tunnel-south-portal.jpg",
    ratio: "1800 / 1172",
    alt: "Cars and a tanker truck on a four-lane highway head down between concrete retaining walls into the twin portals of the George Massey Tunnel. Lane-control signals above the entrance show red crosses over the lanes to the left and green arrows over the lanes to the right.",
    photographer: "SounderBruce",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:George_Massey_Tunnel_south_portal.jpg",
    taken: "16 September 2021",
    place: "South portal, George Massey Tunnel, Delta, British Columbia",
    licence: "CC-BY-SA-4.0",
    status: "verified",
    usedOn: "/after/transportation/",
  },

  /**
   * `/after/transportation/`, under the SkyTrain section, and it is there for a
   * contrast rather than for a resemblance.
   *
   * A magnitude 4.8 in 2015 tripped guideway intrusion alarms, both lines were
   * stopped, nothing was found and service resumed in about eighty minutes.
   * That number is the page's most quotable and its most misleading: it is how
   * long it takes to confirm a system is undamaged. This is the other case.
   *
   * The 2016 Kaikoura earthquake was magnitude 7.8 and killed two people, which
   * makes it the closest thing in the register to a large earthquake with a low
   * death toll.
   */
  "kaikoura-buckled-track": {
    id: "kaikoura-buckled-track",
    file: "kaikoura-buckled-track.jpg",
    ratio: "1800 / 900",
    alt: "A railway track seen from ground level bends into a long S where the ground beneath it has moved sideways, sleepers and ballast following the deviation. Rust covers the rail heads, with no polished running surface.",
    photographer: "Ulrich Lange",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Railway_Track,_Kaikoura_(after_earthquake).jpg",
    taken: "24 February 2017",
    place: "North of Kaikoura, Canterbury, New Zealand",
    licence: "CC-BY-3.0",
    status: "verified",
    usedOn: "/after/transportation/",
  },

  /**
   * **Suggested by the site's owner**, who asked for structures like SkyTrain
   * damaged in other earthquakes. The Port Liner is an automated train on an
   * elevated guideway, the nearest system to SkyTrain in the register. The
   * guideway stayed up and stands on props. That is the case between the
   * eighty-minute check and a collapse, and the page is silent about it.
   *
   * Collapsed Shinkansen spans from the same earthquake were rejected: the page
   * makes no claim that SkyTrain would fall.
   */
  "kobe-port-liner-shored-guideway": {
    id: "kobe-port-liner-shored-guideway",
    file: "kobe-port-liner-shored-guideway.jpg",
    ratio: "1800 / 1292",
    alt: "An elevated guideway on green steel girders runs above a city street. Scaffolding towers and steel cross-beams prop up its deck between the concrete piers, and barriers and cones close the lanes beneath. The office building on the left has lost cladding onto the pavement.",
    photographer: "City of Kobe",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Hachimandori_c056.jpg",
    taken: "21 January 1995",
    place: "Port Liner near Hachiman-dori, Chuo-ku, Kobe, Japan",
    licence: "CC-BY-2.1-JP",
    status: "verified",
    usedOn: "/after/transportation/",
  },

  /**
   * Placed directly after the Port Liner. It shows a standing elevated line
   * under repair, from a recent event with a low death toll. A train is in the frame and the caption does not describe it: it may
   * be the one the earthquake derailed, and nothing on the file page says so.
   */
  "shiroishi-shinkansen-viaduct-repair": {
    id: "shiroishi-shinkansen-viaduct-repair",
    file: "shiroishi-shinkansen-viaduct-repair.jpg",
    ratio: "1800 / 1204",
    alt: "A long concrete railway viaduct on paired columns crosses farmland. Scaffolding has been built around the beams tying the columns together near the ground, and aerial work platforms and trucks are parked under the deck. A Shinkansen train stands on the viaduct at the far right.",
    photographer: "Katorisi",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Connecting_beams_damaged_by_the_2022_earthquake,_Shiroishi_city,_Japan.jpg",
    taken: "29 March 2022",
    place: "Tohoku Shinkansen viaduct, Shiroishi, Miyagi, Japan",
    licence: "CC-BY-4.0",
    status: "verified",
    usedOn: "/after/transportation/",
  },

  /**
   * The only photograph on the site with no earthquake in it.
   *
   * `/after/electricity/` argues that restoring a power system can mean
   * ordering equipment rather than repairing it: ten spares against a fleet of
   * 672, and US lead times that went from about 50 weeks to about 120. Those
   * are numbers about an object almost no reader has ever seen, and a number
   * about an unseen object is the weakest thing a page can carry. This is the
   * object.
   *
   * The precedent is `vancouver-dfps-hydrant` rather than the Christchurch
   * rows: it is a photograph of the thing itself, not of an event, so there is
   * no analogue to limit and nothing about an earthquake to imply. What it has
   * to avoid instead is the opposite failure — looking like damage. It does
   * not: nothing in the frame is broken, and the caption describes a delivery.
   */
  "uchtelfangen-transformer": {
    id: "uchtelfangen-transformer",
    file: "uchtelfangen-transformer.jpg",
    ratio: "1800 / 946",
    alt: "A grey power transformer the size of a small building sits slung between the red girder frames of a heavy-haulage transporter, which spans the full width of a closed road. People in high-visibility jackets stand at the far end, small against it. Nothing in the frame is damaged: the transformer is arriving at a substation under escort.",
    photographer: "Simon Mannweiler",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Trafo_(Umspannanlage_Uchtelfangen)_2019-02_(12).jpg",
    taken: "24 February 2019",
    place: "Uchtelfangen, Illingen, Saarland, Germany",
    licence: "CC-BY-SA-4.0",
    status: "verified",
    usedOn: "/after/electricity/",
  },

  /**
   * The second photograph on `/after/electricity/`, and the one that is about
   * the street rather than the substation.
   *
   * The page's closing note says BC Hydro's statement covers downtown
   * Vancouver, that no restoration estimate is published for the rest of the
   * region, and that no seismic assessment of the distribution network — the
   * wires in the street — appears anywhere in the regulatory record. A
   * transformer is the equipment at the top of that system. This is the bottom
   * of it, lying in the road.
   *
   * Seven weeks after the earthquake (1 January to 17 February) and the pole is
   * still where it fell, which is the second thing the frame carries.
   */
  "wajima-fallen-pole": {
    id: "wajima-fallen-pole",
    file: "wajima-fallen-pole.jpg",
    ratio: "1600 / 1067",
    alt: "A concrete power pole lies fallen across a road, its cables still attached and trailing along the ground. Behind it an excavator stands in a heap of broken timber, houses are still standing on either side, and overhead wires run on above between the poles that did not come down.",
    photographer: "Hurohukidaikon",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:R6_noto_earthquake_wajima_street_2024-02-17_7.jpg",
    taken: "17 February 2024",
    place: "Wajima, Ishikawa Prefecture, Japan",
    licence: "CC-BY-4.0",
    status: "verified",
    usedOn: "/after/electricity/",
  },

  /**
   * The photograph that was reported not to exist.
   *
   * A search of Commons for a Christchurch street with portable toilets on it
   * came back as a firm negative: the categories were enumerated, and the
   * conclusion was that the canonical image lives in New Zealand press and
   * archive collections rather than here. This file was listed separately as a
   * weak maybe, because its entire description is "February 2011 Christchurch
   * earthquake" and the only evidence of a toilet was one editor's category.
   *
   * Opening it settled it. It is a portable toilet on a residential footpath,
   * with a second one behind it along the same path. The category was right and
   * the negative result was wrong, and nothing but looking could have told the
   * difference. That is the third time in this register that a file's own
   * description has been a worse guide than the image.
   */
  "christchurch-street-portaloo": {
    id: "christchurch-street-portaloo",
    file: "christchurch-street-portaloo.jpg",
    ratio: "1600 / 1067",
    alt: "A blue portable toilet stands on the footpath of a tree-lined residential street with a biohazard label on its door, and a second one is visible further along the same footpath.",
    photographer: "Andy Miah",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:February_2011_Christchurch_earthquake_21.jpg",
    taken: "12 April 2011",
    place: "Christchurch, New Zealand",
    licence: "CC-BY-SA-2.0",
    status: "verified",
    usedOn: "/after/sanitation/",
  },

  /**
   * `/after/sanitation/`. The plainest photograph in the register of buried
   * infrastructure moving, and it needs no caption to be understood: a concrete
   * shaft standing a metre out of a road it used to sit under.
   *
   * It is a sewer access chamber and not a sewer pipe. The photographer's
   * description attributes the uplift to soil liquefaction. The page's claim is that a treatment plant built to a post-disaster
   * standard still has to be reached through a network nobody has published an
   * assessment of, and this is that network with the ground taken out from
   * under it.
   *
   * Taken nearly four months after the earthquake, which is the second thing it
   * carries: the shaft is still standing in the road in late April.
   */
  "suzu-uplifted-manhole": {
    id: "suzu-uplifted-manhole",
    file: "suzu-uplifted-manhole.jpg",
    ratio: "1050 / 1400",
    alt: "A concrete sewer manhole shaft stands about a metre proud of a road surface with its cover still on top, the asphalt around its base broken into loose slabs. Damaged houses line the street behind it.",
    photographer: "Yasu",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Uplifted_manhole_caused_by_the_2024_Noto_Peninsula_Earthquake_in_Suzu,_Ishikawa,_Japan.jpg",
    taken: "27 April 2024",
    place: "Horyumachi, Suzu, Ishikawa Prefecture, Japan",
    licence: "CC-BY-SA-3.0",
    status: "verified",
    usedOn: "/after/sanitation/",
  },

  /**
   * `/after/housing/`, and the only photograph on the site whose subject is a
   * piece of paper.
   *
   * The page says somebody has to walk up to each building, judge it and leave
   * a placard on the door, and that the yellow tag is the condition most people
   * would be in: the building stands, entry is restricted, and nobody has said
   * for how long. This is that placard. It carries the judgement, the hazard
   * written on by hand, the hour it was made, and the office that made it — and
   * no end date, which is the page's point standing in the frame.
   *
   * **It is a building, and the register does not claim it is a home.** The
   * file page says "Emergency Risk Discrimination: LIMITED ENTRY" and nothing
   * about what is behind the shutter. The assessment system covers dwellings
   * and does not only cover them, so the caption stays with the notice.
   */
  "sendai-limited-entry-placard": {
    id: "sendai-limited-entry-placard",
    file: "sendai-limited-entry-placard.jpg",
    ratio: "1050 / 1400",
    alt: "A yellow assessment notice is taped to the corrugated metal shutter of a building. Under a Japanese heading it reads LIMITED ENTRY in English. Below that, a hand has written the hazard found and the date and hour of the assessment, and a printed label names the ward office that made it.",
    photographer: "Walks",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Building_inspected_after_earthquake,_yellow.jpg",
    taken: "23 March 2011",
    place: "Miyagino-ku, Sendai, Miyagi Prefecture, Japan",
    licence: "CC-BY-4.0",
    status: "verified",
    usedOn: "/after/housing/",
  },

  /**
   * `/after/housing/`, and the pair to `sendai-limited-entry-placard`. The
   * placard is the judgement on one building. This is the other mechanism the
   * page describes, which does not look at your building at all: a cordon is
   * drawn around an area, and a sound building inside it is still a building
   * nobody is living in.
   *
   * Nate Cull's second row, after `christchurch-moorhouse-parapet`, and the
   * September 2010 Darfield earthquake again — when no one died directly.
   *
   * People are in frame and identifiable, and none of them is in distress:
   * they are standing on a corner with their bags, waiting, talking to a
   * soldier and a worker in a high-visibility vest. Recorded here rather than
   * left to be noticed, the same as `christchurch-water-tanker`.
   */
  "christchurch-cordon-passes": {
    id: "christchurch-cordon-passes",
    file: "christchurch-cordon-passes.jpg",
    ratio: "4 / 3",
    alt: "People with bags and a suitcase stand on a street corner talking to a soldier and a worker in a high-visibility vest, yellow cordon tape strung across the road behind them and a police car beyond it. The buildings on the corner are intact, their windows unbroken and their signs still up.",
    photographer: "Nate Cull",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Manchester_Street_cordon.jpg",
    taken: "6 September 2010",
    place: "Manchester Street, Christchurch, New Zealand",
    licence: "CC-BY-SA-2.0",
    status: "verified",
    usedOn: "/after/housing/",
  },

  /**
   * The pair on `/after/large-infrastructure/`, and both come from the City of
   * Kobe's own earthquake archive, 阪神・淡路大震災「1.17の記録」, which the
   * city published under CC BY 2.1 Japan. A municipal government releasing its
   * own disaster record under a commercial-use licence is the best source this
   * register has found, and the archive is far larger than these two frames.
   *
   * The page's section is short: Kobe's port was Japan's leading container
   * port, repairs took almost a year, and it permanently lost container
   * business to other Asian ports. The captions describe what is in each frame
   * and carry the page's sourced fact about the port's recovery.
   */
  "kobe-rokko-island-quay": {
    id: "kobe-rokko-island-quay",
    file: "kobe-rokko-island-quay.jpg",
    ratio: "1000 / 1500",
    alt: "Seen from above, a container terminal quay has split along its whole length in a fissure running parallel to the water. The strip of apron carrying the crane rails has dropped away from the rest of the yard, and a gantry crane standing on it leans out of line. Stacked containers and a second crane sit on the intact ground behind.",
    photographer: "City of Kobe",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Images_from_The_Great_Hanshin-Awaji_Earthquake%EF%BC%9Da056.jpg",
    taken: "1995",
    place: "Rokko Island, Higashinada, Kobe, Japan",
    licence: "CC-BY-2.1-JP",
    status: "verified",
    usedOn: "/after/large-infrastructure/",
  },

  "kobe-port-island-crane": {
    id: "kobe-port-island-crane",
    file: "kobe-port-island-crane.jpg",
    ratio: "1600 / 1141",
    alt: "A container terminal apron has torn open in a wide fissure with water standing in it, and a red gantry crane has collapsed across the quay behind, its legs buckled and its boom folded onto the ground. Shipping containers lie toppled and stacked askew further along the wharf.",
    photographer: "City of Kobe",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Images_from_The_Great_Hanshin-Awaji_Earthquake%EF%BC%9Dc111.jpg",
    taken: "1995",
    place: "Port Island container terminal, Kobe, Japan",
    licence: "CC-BY-2.1-JP",
    status: "verified",
    usedOn: "/after/large-infrastructure/",
  },

  /**
   * The airport half of `/after/large-infrastructure/`, and the first
   * photograph on the site that the site has changed.
   *
   * An aerial by the Geospatial Information Authority of Japan, taken nearly
   * four months after the 2024 Noto Peninsula earthquake. At full frame the
   * runway is a thin grey line in a forest and the repairs are three specks, so
   * it is cropped to the runway, where they read as three dark bands across its
   * full width. CC BY 4.0 permits a crop and requires it to be indicated, which
   * is what `changes` is for. The file on Commons is itself a crop of the
   * authority's original frame, and says so.
   */
  "noto-airport-runway-repairs": {
    id: "noto-airport-runway-repairs",
    file: "noto-airport-runway-repairs.jpg",
    ratio: "20 / 9",
    alt: "An aerial photograph of an airport runway laid across cleared hilltop ground, the word NOTO spelled out in white letters on the grass beside it. Three dark rectangles of newer surface cross the full width of the grey runway at intervals along its length: each is a section of runway that was repaired.",
    photographer: "Geospatial Information Authority of Japan",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Noto_Airport_Aerial_photograph.2024.jpg",
    taken: "26 April 2024",
    place: "Noto Airport, Ishikawa Prefecture, Japan",
    changes: "Cropped to the runway.",
    licence: "CC-BY-4.0",
    status: "verified",
    usedOn: "/after/large-infrastructure/",
  },

  /**
   * `/after/fuel/`, in the section on a station with full tanks and no power.
   * The page's point is that tanks full of fuel are not fuel being sold, and
   * this is a station that stopped selling for a reason that is neither: the
   * forecourt broke.
   *
   * Martin Luff's fourth row, and the September 2010 earthquake, which killed
   * nobody.
   */
  "christchurch-petrol-station-forecourt": {
    id: "christchurch-petrol-station-forecourt",
    file: "christchurch-petrol-station-forecourt.jpg",
    ratio: "4 / 3",
    alt: "A petrol station forecourt on a suburban corner has broken and heaved: a slab of concrete stands tilted up at a sharp edge with its underside exposed, and grey silt is spread across the ground in front of it. Cordon tape runs across the forecourt, a hand-lettered sign leans against the broken edge, and the shop and canopy behind are standing.",
    photographer: "Martin Luff",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Damage_to_petrol_station_on_Pages_Road,_from_the_2010_Canterbury_earthquake.jpg",
    taken: "September 2010",
    place: "Pages Road, Bexley, Christchurch, New Zealand",
    licence: "CC-BY-SA-2.0",
    status: "verified",
    usedOn: "/after/fuel/",
  },

  /**
   * `/after/dams-and-reservoirs/`, and the page most at risk of dread, so the
   * choice here was about which photograph not to use.
   *
   * The page says neither published review of Cleveland or Seymour Falls
   * mentions earthquakes and the seismic upgrade has not started. It does not
   * say either dam would fail. This is a dam an earthquake damaged that held the
   * water: the facing and part of the embankment on the reservoir side slid in,
   * the slope behind cracked, and the reservoir stayed where it was. That is the
   * question a seismic stability evaluation exists to answer, shown rather than
   * forecast.
   *
   * A second USGS aerial of the same dam is higher resolution and was set
   * aside: it is framed to put the populated valley below the dam in view, and
   * its own description is about the vulnerability of the city. That is the
   * version of this photograph that reads as dread.
   */
  "van-norman-dam-slide": {
    id: "van-norman-dam-slide",
    file: "van-norman-dam-slide.jpg",
    ratio: "1400 / 1391",
    alt: "An aerial view of an earth dam beside its reservoir. On the water side the concrete lining has broken into slabs and slid down into the reservoir with part of the embankment, and cracks run along the slope behind the crest. The crest road still curves along the top and the water is still held behind it, with an intake tower standing out in the reservoir.",
    photographer: "Robert E. Wallace, USGS",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Lower_Van_Norman_Dam_Damage_1971.jpg",
    taken: "10 February 1971",
    place: "Lower Van Norman Dam, San Fernando Valley, Los Angeles County, California",
    licence: "PD-USGov-USGS",
    status: "verified",
    usedOn: "/after/dams-and-reservoirs/",
  },

  /**
   * `/after/food/`, in the section headed "The till, the cold case and the
   * freezer aisle all stop on the same power". It is a cold case, empty, a week
   * after the 2011 earthquake, with signs limiting milk to one per customer.
   *
   * Nothing in the file says the power was off in that shop, and the case is
   * lit, so the caption describes the empty case and the signs and does not say
   * why it is empty. "Tokyo" comes from two Commons categories rather than the
   * file's date field, which says only "Japan".
   */
  "tokyo-milk-case-limit": {
    id: "tokyo-milk-case-limit",
    file: "tokyo-milk-case-limit.jpg",
    ratio: "4 / 3",
    alt: "A supermarket's chilled milk case stands almost empty, its shelves bare wire and price labels with nothing above them, a few cartons left at one end of the top shelf. Yellow notices on the shelves and glass limit milk to one per customer. The case is lit.",
    photographer: "Dick Thomas Johnson",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%B8_%E7%89%9B%E4%B9%B3%E3%81%AF%E3%81%8A%E4%B8%80%E4%BA%BA%E6%A7%981%E7%82%B9%E9%99%90%E3%82%8A%E3%81%A8%E3%81%95%E3%81%9B%E3%81%A6%E9%A0%82%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82_(6010087039).jpg",
    taken: "18 March 2011",
    place: "Tokyo, Japan",
    licence: "CC-BY-2.0",
    status: "verified",
    usedOn: "/after/food/",
  },

  /**
   * `/after/health-care/`, under "A hospital that stays standing is not the same
   * as a hospital that stays working". The file's description says the hospital
   * was damaged in the earthquake. The frame shows the building upright and
   * whole from the front, and white tents with chairs set up by its entrance.
   *
   * What the tents were for is not in the file, and the caption does not guess:
   * a standing hospital with part of its business moved onto the forecourt is
   * the point, and it needs no more than is in the frame. Taken three days after
   * the main shock of 16 April 2016.
   */
  "kumamoto-city-hospital-tents": {
    id: "kumamoto-city-hospital-tents",
    file: "kumamoto-city-hospital-tents.jpg",
    ratio: "1050 / 1400",
    alt: "A seven-storey hospital building stands upright under a blue sky, its facade and windows whole from the front, with its name on a tall sign by the drive. At its entrance, white event tents have been put up with chairs and tables under them and hand-written notices on boards.",
    photographer: "hyolee2",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:2016_Kumamoto_earthquake_Kumamoto_City_Hospital_2.JPG",
    taken: "19 April 2016",
    place: "Kumamoto City Hospital, Higashi-ku, Kumamoto, Japan",
    licence: "CC-BY-SA-3.0",
    status: "verified",
    usedOn: "/after/health-care/",
  },

  /**
   * Cleared and held. Silt and standing water together is closer to the first
   * hours than silt alone, and `/shaking/ground/` has no section about the
   * first hours. A third photograph in the one section that does exist would be
   * padding, so this waits for a page that needs it rather than going somewhere
   * it nearly fits.
   */
  /**
   * The one photograph of the structure this site is actually about, rather
   * than of an analogue somewhere else. Cleveland Dam is the subject of
   * `/after/dams-and-reservoirs/` and of the table on `/shaking/dams/`, and the
   * mechanism both pages describe is geometric: a reservoir held above a
   * canyon that people are in. The fact sheet's words for that canyon are "deep
   * and narrow", which is accurate, is not a picture, and leaves a reader who
   * has only seen the lake from the viewpoint with nothing to attach it to.
   * What the photograph adds is the drop and the width of the ground at the
   * bottom of it.
   *
   * The analogue rule in `docs/style-guide.md` §10 has nothing to bite on here,
   * as with the hydrant: there is no transfer from somewhere else to limit,
   * because this is the place itself.
   */
  "cleveland-dam-spillway": {
    id: "cleveland-dam-spillway",
    file: "cleveland-dam-spillway.jpg",
    ratio: "4 / 3",
    alt: "Water released at Cleveland Dam runs down the dam's concrete spillway face and falls into a rock canyon immediately below it. The canyon is narrow enough that its two walls are both in frame, and the reservoir the water came from is held above it.",
    photographer: "Psi4ce",
    title: "Cleveland Dam Spillway",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Cleveland_Dam_Spillway.JPG",
    taken: "4 March 2006",
    place: "Cleveland Dam, Capilano River, North Vancouver",
    licence: "PD",
    status: "verified",
    usedOn: "/after/dams-and-reservoirs/",
  },

  "christchurch-pages-road": {
    id: "christchurch-pages-road",
    file: null,
    ratio: "3 / 2",
    alt: "A car stands stopped in grey silt and standing water covering a suburban road, hours after the shaking. The water and silt rose together through the road.",
    photographer: "Gavin Turner",
    title: "Car stuck in liquefaction",
    collection: "Canterbury Stories, Christchurch City Libraries",
    href: "https://www.canterburystories.nz/collections/community/gavinturner/ccl-cs-27020",
    taken: "22 February 2011",
    place: "Pages Road near Onepu Street, Christchurch, New Zealand",
    licence: "CC-BY-NC-ND-4.0",
    status: "stated",
    usedOn: null,
  },

  /**
   * `/after/outside-help/`, where it was held for from the start. It was found
   * for `/after/water/` and kept off that page: two soldiers under a water page
   * invite the inference that the army restores the network, which that page
   * does not say. On the page about help arriving from outside the impact area,
   * the same photograph says what the page says. The engineers are from Linton,
   * at the other end of the country, which is the description's own detail.
   *
   * Its Commons description ends with a sentence about aerial surveillance from
   * a P-3K Orion. That is boilerplate pasted across the whole NZ Defence Force
   * upload batch and it is not this frame, which is at ground level a few feet
   * from the two men.
   */
  "christchurch-army-water-repair": {
    id: "christchurch-army-water-repair",
    file: "christchurch-army-water-repair.jpg",
    ratio: "3 / 2",
    alt: "Two soldiers in camouflage dig by hand into broken, stony ground, one bent over a shovel in the loose fill and the other working a long-handled tool beside him. A backhoe stands behind them with a third soldier in its cab and its bucket lowered to the hole.",
    photographer: "New Zealand Defence Force",
    title: "NZ Army Engineers repair water mains at Burwood Hospital after Christchurch Earthquake",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:NZ_Army_Engineers_repair_water_mains_at_Burwood_Hospital_after_Christchurch_Earthquake_-_Flickr_-_NZ_Defence_Force.jpg",
    taken: "26 February 2011",
    place: "Burwood Hospital, Christchurch, New Zealand",
    licence: "CC-BY-2.0",
    status: "verified",
    usedOn: "/after/outside-help/",
  },
  /**
   * The social response, on the page that argues most people help. Suggested by
   * the site's owner.
   *
   * The file description's date, 29 February 2011, does not exist, so `taken`
   * comes from the camera's recorded time, 4 March 2011, and is written to the
   * month. The description names no place: Christchurch comes from the Commons
   * category, whose text says the movement started after the Christchurch
   * earthquakes. The filename's "Ilam School" is the uploader's naming and is
   * not used.
   */
  "christchurch-student-volunteer-army": {
    id: "christchurch-student-volunteer-army",
    file: "christchurch-student-volunteer-army.jpg",
    ratio: "1600 / 1195",
    alt: "Several hundred young volunteers pack a grass field, most smiling at the camera and many holding shovels and spades up above their heads, in front of a banner reading Volunteer Army with two organisers in high-visibility vests beside it.",
    photographer: "Sam Johnson",
    collection: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:StudentArmy_IlamSchool.jpg",
    taken: "March 2011",
    place: "Christchurch, New Zealand",
    licence: "CC-BY-SA-3.0",
    status: "verified",
    usedOn: "/after/safety-and-conflict/",
  },
} as const satisfies Record<string, Photograph>;

export type PhotographId = keyof typeof PHOTOGRAPHS;

/** Every photograph the site holds terms for, in register order. */
export const PHOTOGRAPH_LIST: Photograph[] = Object.values(PHOTOGRAPHS);

/**
 * The photographs whose licence is non-commercial.
 *
 * They decide one thing between them: whether the site could ever carry
 * advertising, an affiliate link or a paid offering without taking something
 * down first. Today the site carries none of those, so the licence is met. The
 * answer is computed from the register rather than remembered, so the question
 * is settled by reading the data on the day it is asked.
 */
export function nonCommercialPhotographs(): Photograph[] {
  return PHOTOGRAPH_LIST.filter(
    (photo) => MEDIA_LICENCES[photo.licence].nonCommercial,
  );
}
