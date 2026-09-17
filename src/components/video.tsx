/**
 * A video recorded during an earthquake, embedded from the host that publishes
 * it.
 *
 * This is the one thing on the site that loads from another host at runtime.
 * The figures README's rule 2 holds for everything drawn and for every
 * photograph, both of which the site can hold a licence to and serve itself.
 * Footage of a real earthquake is neither: the site has no licence to
 * reproduce it, and `docs/licensing.md` says that where a licence is
 * unconfirmed the answer is to link out rather than host. An embed is that
 * link, playing in place, and the file stays where its owner put it.
 *
 * What the component enforces is the rest of it:
 *
 * - **No autoplay.** The parameter is absent and `allow` does not carry it, so
 *   a reader who scrolls past sees a still frame. A page about an earthquake
 *   that starts shouting at a reader has misread its own subject.
 * - **`youtube-nocookie.com`.** The privacy-enhanced host, which sets nothing
 *   until the reader presses play. A reader should not pay for reading with a
 *   tracking cookie.
 * - **A name.** An `<iframe>` with no `title` is an unlabelled frame in the
 *   rail of a screen reader. The title says what the video shows, the way a
 *   figure's `alt` states the finding, and the description under it carries
 *   the rest.
 *
 * The frame holds 16:9 at every width, which is the shape of the source file:
 * the player letterboxes anything else itself, and the site does not crop it.
 */
export function VideoEmbed({
  /** The video's id on the host, which is the `v=` parameter of its watch URL. */
  id,
  /** What the video shows. The accessible name of the frame and the card's heading. */
  title,
  /** The video's own page, for a reader who would rather watch it there. */
  href,
  /** What a reader is looking at, and what it is there to show. */
  description,
}: {
  id: string;
  title: string;
  href: string;
  description: string;
}) {
  return (
    <figure className="flex flex-col overflow-hidden rounded-xl border border-rule bg-paper-raised">
      <div className="aspect-video w-full bg-ink">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
          title={title}
          loading="lazy"
          allow="fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="block h-full w-full border-0"
        />
      </div>
      <figcaption className="flex flex-col gap-2 p-5">
        <h3 className="font-display text-lg tracking-tight text-pretty">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-rule-strong underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            {title}
          </a>
        </h3>
        <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
      </figcaption>
    </figure>
  );
}
