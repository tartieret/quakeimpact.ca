import Link from "next/link";
import { Cite } from "@/components/citation";
import { Figure, Prose, VideoEmbed } from "@/components/page-parts";
import { DropCoverHoldOn } from "@/components/figures/shaking";
import { DraftMark } from "@/components/status";
import { SHAKING_PAGES } from "@/content/site";
import type { PageModule } from "./index";

/**
 * The shaking. The body of `/shaking/`, ported from `docs/copy/shaking.md`.
 *
 * An index page, and shorter than the pages it points at on purpose. The words
 * are the copy's. The card grid in the last section is not words: it is
 * `SHAKING_PAGES` drawn, so the seven subjects stay reachable from here, each
 * card carrying the subject's own hook. Which of them are drafts is the
 * marker's job, not a sentence's.
 *
 * There is no map slot. The ground conditions overlay this page used to
 * promise rests on the Metro Vancouver microzonation layers, which are not
 * openly licensed and are linked rather than redrawn (`docs/licensing.md`).
 *
 * The one figure is the drop, cover and hold on schematic, and it sits in the
 * first section because that is where the instruction is. It is drawn from the
 * province's written steps rather than from the Earthquake Country Alliance
 * graphic the province credits, which states no licence.
 *
 * The two videos are the only thing on the site loaded from another host, and
 * the second section is the only place they appear. They follow the instruction
 * rather than lead it: a reader who has just been told to drop, cover and hold
 * on can see why there is no time to do anything else. `docs/media.md` has the
 * position and `components/video.tsx` the mechanics.
 */
export const shaking: PageModule = {
  meta: {
    route: "/shaking/",
    title: "The shaking",
    description:
      "Damage depends on the earthquake, the ground and the building. Fires, landslides and other failures continue after the shaking stops.",
    nav: "The shaking",
    kicker: "Part 1",
    standfirst:
      "Violent shaking can make it difficult to stand or cross a room. Falling objects are an immediate danger, and aftershocks can return after buildings are damaged.",
    /** First-cited order, which is the order the markers are numbered in. */
    references: [
      "PEIRS",
      "DCRRA-2025",
      "PREPAREDBC",
      "NRCAN-SCEN",
      "MVSMMP",
    ],
  },

  sections: [
    {
      title: "Violent shaking makes it difficult to stand or move",
      body: (
        <Prose>
          <p>
            The province’s planning scenario starts with sound: a low rumble
            like a freight train, heard before anything is felt. The shaking can
            knock people closest to it off their feet, while unsecured objects
            fall or fly through the air. Crossing a room may not be possible.{" "}
            <Cite id="PEIRS" />
          </p>
          <p>
            Shaking may last seconds or minutes, depending on the earthquake.{" "}
            <Cite id="PEIRS" /> <Cite id="DCRRA-2025" />{" "}
            <Link
              href="/scenarios/"
              className="text-accent underline underline-offset-2"
            >
              The two scenarios
            </Link>{" "}
            compares the duration and intensity of the earthquakes used for
            planning here.
          </p>
          <p>
            Drop before the shaking drops you, cover your head and neck, and
            hold on until it stops. <Cite id="PREPAREDBC" /> Do not run
            outside: falling and flying objects severely injure or kill many of
            the people who try. <Cite id="PEIRS" />
          </p>
          <Figure
            alt="Drop to your hands and knees, cover your head and neck under a sturdy table, and hold on to it until the shaking stops, then count to 60 before getting up. The people badly hurt are the ones who try to run outside while the ground is still moving."
            caption={
              <>
                Where there is no sturdy furniture nearby, crawl to the nearest
                interior corner or wall. <Cite id="PREPAREDBC" /> The province
                publishes the same three steps for someone using a wheelchair, a
                walker or a cane, with the wheels locked in place of the drop.{" "}
                <Cite id="PREPAREDBC" />
              </>
            }
          >
            <DropCoverHoldOn />
          </Figure>
        </Prose>
      ),
    },

    {
      title: "What strong earthquake shaking looks like",
      body: (
        <div className="flex flex-col gap-8">
          <Prose>
            <p>
              Two recordings from inside buildings during large earthquakes
              elsewhere. They are here for the one thing a sentence cannot
              give: how fast the shaking arrives, and how long it goes on.
              What a particular building in Metro Vancouver would do is not in
              them.
            </p>
          </Prose>
          <div className="grid gap-6 md:grid-cols-2">
            <VideoEmbed
              id="NJZqREPc9k0"
              title="Inside an Anchorage classroom"
              href="https://www.youtube.com/watch?v=NJZqREPc9k0"
              description="A fixed classroom camera during the magnitude 7.0 earthquake at Anchorage, Alaska, in 2018. The shaking reaches full strength in seconds, which is the reason to take cover where you are rather than move."
            />
            <VideoEmbed
              id="heh5ITmYbRs"
              title="Inside the Sendai Mediatheque"
              href="https://www.youtube.com/watch?v=heh5ITmYbRs"
              description="The magnitude 9.1 earthquake off northeast Japan in 2011, recorded inside a modern building at Sendai. The shaking runs on for minutes, with ceilings and suspended fixtures moving overhead while people hold on under desks."
            />
          </div>
        </div>
      ),
    },

    {
      title: "Aftershocks return to already damaged places",
      body: (
        <Prose>
          <p>
            About a month after the mainshock, the province’s Cascadia scenario
            models a second earthquake: magnitude 7.1, 60 km beneath Sidney,
            lasting 20 seconds at 11pm during an atmospheric river, a long
            period of heavy rain. <Cite id="DCRRA-2025" />
          </p>
          <p>
            The buildings it reaches have already been through the first
            earthquake. Whether a damaged building is safe to enter requires an
            inspection.{" "}
            <Link
              href="/shaking/buildings/"
              className="text-accent underline underline-offset-2"
            >
              Buildings
            </Link>{" "}
            covers who does that and how long people may wait.
          </p>
          <p>
            Published damage figures do not include this second earthquake. The
            federal scenario catalogue excludes aftershocks, and the province’s
            headline figures count only direct damage from the mainshock.{" "}
            <Cite id="NRCAN-SCEN" /> <Cite id="DCRRA-2025" />
          </p>
        </Prose>
      ),
    },

    {
      title: "What shaking sets in motion",
      body: (
        <div className="flex flex-col gap-8">
          <Prose>
            <p>
              Ground conditions and construction shape the immediate damage.
              Some of the most serious effects begin as the shaking ends.
            </p>
          </Prose>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2">
            {SHAKING_PAGES.map((page, i) => (
              <li key={page.slug}>
                <Link
                  href={`/shaking/${page.slug}/`}
                  className="group flex h-full flex-col gap-2 bg-paper-raised p-6 transition-colors hover:bg-accent-soft"
                >
                  <span className="font-mono text-xs text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl tracking-tight group-hover:text-accent">
                    {page.name}
                    {page.status === "draft" ? (
                      <>
                        {" "}
                        <DraftMark />
                      </>
                    ) : null}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {page.hook}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ],

  lever: {
    heading: "What you can do",
    items: [
      <>
        <strong>Know the two things to do in the first seconds.</strong> Drop,
        cover and hold on. Do not run outside. <Cite id="PEIRS" /> The
        province’s Cascadia scenario puts a second earthquake about a month
        after the first, so both are needed more than once.{" "}
        <Cite id="DCRRA-2025" />
      </>,
      <>
        <strong>Look up the ground under the places you spend time.</strong> The
        regional maps cover the western municipalities street by street and are
        free to read. <Cite id="MVSMMP" />{" "}
        <Link
          href="/shaking/ground/"
          className="text-accent underline underline-offset-2"
        >
          Ground conditions
        </Link>{" "}
        says how to read them, and which municipalities they do not reach yet.
      </>,
    ],
  },
};
