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
  | "CC-BY-2.0"
  | "CC-BY-SA-2.0"
  | "CC-BY-SA-3.0"
  | "CC-BY-NC-SA-2.0"
  | "CC-BY-NC-ND-4.0";

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
  "CC-BY-2.0": {
    id: "CC-BY-2.0",
    name: "Creative Commons Attribution 2.0 Generic",
    short: "CC BY 2.0",
    href: "https://creativecommons.org/licenses/by/2.0/",
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
    alt: "Two cars stand parked on a residential street in wet grey silt that has come up through the ground and spread over it, their wheels sunk into it and water pooling alongside. The silt came out of the ground rather than off it: the cars did not drive into anything.",
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
    alt: "A suburban street lies under wet grey silt and standing water, with parked cars sitting in it. In the foreground the silt has built low circular cones around the holes it came up through: the material on the road arrived from underneath it rather than along it.",
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
   * failure — and it killed nobody. The 2011 photographs of the same mechanism
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
    alt: "A fire hydrant with a bright blue body and a white bonnet stands at the kerb on a brick-paved footpath, the letters DFPS cast into the blue below one of its outlets. The colour is the marking: it says this hydrant is fed by the city's dedicated fire protection mains rather than by the drinking-water mains that supply the ordinary ones.",
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
   * Cleared and held. Silt and standing water together is closer to the first
   * hours than silt alone, and `/shaking/ground/` has no section about the
   * first hours. A third photograph in the one section that does exist would be
   * padding, so this waits for a page that needs it rather than going somewhere
   * it nearly fits.
   */
  "christchurch-pages-road": {
    id: "christchurch-pages-road",
    file: null,
    ratio: "3 / 2",
    alt: "A car stands stopped in grey silt and standing water covering a suburban road, hours after the shaking. The water and the silt arrived together, up through the road rather than along it.",
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
