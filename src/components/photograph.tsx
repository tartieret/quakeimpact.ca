import type { ReactNode } from "react";
import {
  MEDIA_LICENCES,
  PHOTOGRAPHS,
  type MediaLicence,
  type Photograph as PhotographEntry,
  type PhotographId,
} from "@/content/media";
import { Figure } from "./prose-blocks";

/**
 * A photograph, its caption and the credit its licence asks for.
 *
 * `docs/style-guide.md` §8 says what a photograph is for and `docs/media.md`
 * carries the limits. The one this component can enforce is the credit: a
 * photographer, a collection, a licence and two links, drawn from
 * `src/content/media.ts` rather than typed under the picture, so a corrected
 * licence reaches the page and `/licences/` in the same edit.
 *
 * The caption belongs to the page and is passed in. It carries the framing §8
 * asks for — the Metro Vancouver ground the photograph stands for — and its
 * citations, like every other caption on the site.
 *
 * Whether an image earns its place at all is editorial and a component cannot
 * check it. The test is in §8: a photograph shows a mechanism the page has
 * described and a reader has never seen, and an image adding nothing the prose
 * already gives is decoration.
 */
export function Photograph({
  id,
  caption,
}: {
  id: PhotographId;
  /** The finding the photograph is there to support, and the local framing. */
  caption: ReactNode;
}) {
  const photo: PhotographEntry = PHOTOGRAPHS[id];
  const licence = MEDIA_LICENCES[photo.licence];

  if (photo.file === null) {
    return <UnhostedSlot photo={photo} licence={licence} caption={caption} />;
  }

  return (
    <Figure
      alt={photo.alt}
      caption={caption}
      licence={<Credit photo={photo} licence={licence} />}
    >
      {/*
       * The frame carries `role="img"` and the finding in `aria-label`, so the
       * image itself is `alt=""`: labelled twice, a screen reader reads the
       * finding and then reads it again.
       *
       * Hosted under `public/media/`, never hot-linked. The figures rule that
       * nothing is fetched at runtime holds for photographs too, and a link to
       * another host would break the credit the day that host moved the file.
       *
       * `object-contain` rather than `object-cover`, and the reason is the
       * licence rather than the layout. The frame takes its shape from `ratio`
       * in the register, which is a number a person typed. Both rows carried
       * 3 / 2 for 4 / 3 files until someone opened them. Under `cover` a wrong
       * ratio crops the photograph and says nothing, and a crop of a
       * share-alike or no-derivatives image is an unannounced derivative. Under
       * `contain` the same mistake letterboxes instead: identical rendering
       * when the ratio is right, and a visible defect rather than a quiet
       * licence breach when it is wrong.
       */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/media/${photo.file}`}
        alt=""
        loading="lazy"
        decoding="async"
        style={photo.ratio ? { aspectRatio: photo.ratio } : undefined}
        className="block w-full object-contain"
      />
    </Figure>
  );
}

/**
 * A photograph whose terms are recorded and whose file is not hosted yet.
 *
 * It says so, names the photographer and the licence, and links the source, so
 * a reader can go and look at the thing the page is describing. Nothing on this
 * site should look more finished than it is, and the alternative — a broken
 * image, or quietly dropping the slot — fails that in one direction or the
 * other.
 *
 * It is a plain block of text rather than a `role="img"` frame, because there is
 * no image to label and a frame announcing the finding would be announcing a
 * photograph that is not there.
 */
function UnhostedSlot({
  photo,
  licence,
  caption,
}: {
  photo: PhotographEntry;
  licence: MediaLicence;
  caption: ReactNode;
}) {
  return (
    <figure>
      <div
        style={{ aspectRatio: photo.ratio ?? "3 / 2", maxHeight: "26rem" }}
        className="hatch grid w-full max-w-full place-items-center rounded-lg border border-rule-strong"
      >
        <div className="max-w-sm rounded-md bg-paper-raised px-5 py-4 text-center">
          <p className="text-xs font-semibold tracking-[0.12em] text-ink-faint uppercase">
            Photograph not hosted yet
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {photo.alt}
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
        {caption}
        <span className="mt-2 block text-xs text-ink-faint">
          <Credit photo={photo} licence={licence} />
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * The credit line. Every clause is one the licence or the framing asks for: who
 * took it, what they called it, where and when, where it is published, and the
 * licence, with links to the last two so both can be checked.
 *
 * A no-derivatives licence adds the sentence it requires. Straight resizing is
 * not a derivative, so the sentence is true of what the site does with the file.
 */
function Credit({
  photo,
  licence,
}: {
  photo: PhotographEntry;
  licence: MediaLicence;
}) {
  return (
    <>
      Photo by {photo.photographer}
      {photo.title ? <>, “{photo.title}”</> : null}, {photo.place},{" "}
      {photo.taken}.{" "}
      <a
        href={photo.href}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2"
      >
        {photo.collection}
      </a>
      .{" "}
      <a
        href={licence.href}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2"
      >
        {licence.short}
      </a>
      .{licence.noDerivatives ? " No changes made." : ""}
    </>
  );
}
