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
 * written. The credit under the photograph and the list on `/licences/` are both
 * read from here, so they cannot disagree.
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
  | "CC-BY-NC-ND-4.0";

export interface MediaLicence {
  id: MediaLicenceId;
  /** The licence's own name, for `/licences/`. */
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
   * the slow part and the page that wants it may be written later. `/licences/`
   * reads this, so the credit page says which photographs a reader is actually
   * shown without a second list to keep in step.
   */
  usedOn: string | null;
}

/**
 * Christchurch, 2011. Every photograph here is an analogue and none of them may
 * generate a claim about Metro Vancouver — `docs/style-guide.md` §10, question
 * 8. The caption that carries one does the framing: the local ground the
 * photograph stands for, and the ground under the camera.
 */
export const PHOTOGRAPHS = {
  "christchurch-cars-in-silt": {
    id: "christchurch-cars-in-silt",
    file: null,
    ratio: "3 / 2",
    alt: "Two parked cars sit buried to their wheel arches in grey silt that has been forced up through the road surface and spread across it, on an ordinary commercial street. The silt came out of the ground rather than off it: the cars did not drive into anything.",
    photographer: "Schwede66",
    collection: "Science Learning Hub",
    href: "https://www.sciencelearn.org.nz/images/360-cars-in-silt-from-liquefaction",
    taken: "22 February 2011",
    place: "central Christchurch, New Zealand",
    licence: "CC-BY-SA-3.0",
    status: "stated",
    usedOn: "/shaking/ground/",
  },

  "avonside-road-damage": {
    id: "avonside-road-damage",
    file: null,
    ratio: "3 / 2",
    alt: "A suburban road surface has broken open into holes and sunken troughs, with silt and water standing in them. The road did not crack from above: the ground under it lost its strength and moved, taking the surface and everything buried beneath it along.",
    photographer: "Martin Luff",
    collection: "Flickr",
    href: "https://www.flickr.com/photos/martinluff/5471846307",
    taken: "22 February 2011",
    place: "Avonside, Christchurch, New Zealand",
    licence: "CC-BY-SA-2.0",
    status: "stated",
    usedOn: "/shaking/ground/",
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
