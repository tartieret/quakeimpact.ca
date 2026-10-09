import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * About. The body of `/about/`, ported from `docs/copy/about.md`.
 *
 * Five sections, in the order a stranger needs them: who made it and why, the
 * talk it grew out of, how its information is chosen, how AI was used to make
 * it, and how to improve it. The AI section says what the review consisted of
 * rather than only that there was one; keep it true if the process changes.
 * The page used to restate the shaking and mutual-aid findings that
 * `/scenarios/` and the home page already carry; an about page that argues the
 * case a second time is an about page nobody finishes.
 *
 * The copy has no `## What you can do`, so this module carries no `lever`. The
 * page describes no consequence, so an action written for it would be an action
 * nobody asked the reader to take.
 *
 * The site does not talk about itself to the reader anywhere else. This page is
 * the exception the reader came for: the author speaks in the first person
 * about who made the project and where it came from, and the project speaks as "we" about how
 * it works.
 *
 * The 2015 slides are hosted with Janos Toth's permission, recorded in
 * `docs/licensing.md`, and cited as `TOTH-BCCI-15`. The register entry carries
 * the warning that they have not been reviewed since 2015, so the copy does not
 * repeat it. They are the project's origin, not evidence for any claim.
 */
const link = "text-accent underline underline-offset-2";

export const about: PageModule = {
  meta: {
    route: "/about/",
    title: "About this site",
    description:
      "QuakeImpact describes what a major earthquake would do to daily life in the Lower Mainland. Its figures come from published work and link to their sources.",
    nav: "About",
    standfirst:
      "QuakeImpact describes what a major earthquake would do to daily life in the Lower Mainland, in the order people would live through it. Its figures come from published work and link to their sources.",
    /** First-cited order, which is the order the markers are numbered in. */
    references: ["PEIRS", "TOTH-BCCI-15"],
  },

  sections: [
    {
      title: "Why I built this site",
      body: (
        <Prose>
          <p>
            My name is{" "}
            <a
              href="https://www.linkedin.com/in/thomastartiere/"
              className={link}
            >
              Thomas Tartière
            </a>
            . I live in downtown Vancouver and volunteer as the chef d’îlot for
            the French community. If something serious happens in this part of
            the city, the French consulate’s emergency plan has me as the local
            point of contact.
          </p>
          <p>
            Preparing for that role meant reading what has been published about
            a major earthquake here, and there is a lot of it. The public
            guidance mostly covers the risk and what to do while the ground is
            shaking. What happens over the following days, weeks and months is
            in technical reports: the province, for example, expects disruption
            to water and wastewater systems “for many months following the
            event”. <Cite id="PEIRS" /> Those reports are rarely brought
            together, and most are written for specialists, not for the general
            public.
          </p>
          <p>
            This site tries to fill that gap. It describes, in plain language,
            what a household would live through in the short, medium and longer
            term: what happens to the water, power, roads and food supply it
            relies on, and how long each takes to come back.
          </p>
          <p>
            This is a personal project, not a publication of the consulate, a
            municipality or any agency, and nothing on it is an official
            instruction.
          </p>
        </Prose>
      ),
    },

    {
      title: "Where this started",
      body: (
        <Prose>
          <p>
            In November 2015 I went to a talk in Vancouver by{" "}
            <a
              href="https://www.linkedin.com/in/janos-toth-97b63a6/"
              className={link}
            >
              Janos Toth
            </a>{" "}
            (Enginomix Consulting Inc.) on the earthquake vulnerability of
            British Columbia’s critical infrastructure.{" "}
            <Cite id="TOTH-BCCI-15" /> He had brought together information from
            many published sources to give an overall picture, and went through
            it one system at a time: buildings, schools, hospitals, bridges, the
            water supply, the power grid. It had a lasting effect on me.
          </p>
          <p>
            Years later, when my first child was born, that talk was still in
            the back of my mind, and it is what got me to put together an
            emergency kit for our family. I would like this site to do the same
            for other people, and to follow the same approach: start from
            published work, go through the systems people rely on, and show what
            losing them would mean.
          </p>
        </Prose>
      ),
    },

    {
      title: "Where the information comes from",
      body: (
        <Prose>
          <p>
            Our goal is an honest picture of what a major earthquake would do to
            life in the Lower Mainland. Wherever published work exists, we rely
            on it, and each figure links to its source on the{" "}
            <Link href="/sources/" className={link}>
              sources page
            </Link>
            .
          </p>
          <p>
            The published record has gaps. Some systems have never been assessed
            publicly, and some studies cover one neighbourhood but not the next.
            Where that happens, we say so instead of filling the gap with a
            guess.
          </p>
          <p>
            We keep the detail light on purpose. What changes how a household
            prepares is knowing whether something lasts days, weeks or months,
            and what that would be like to live through. So that is what we
            focus on. The full documents are linked for anyone who wants them,
            and{" "}
            <Link href="/method/" className={link}>
              How this site works
            </Link>{" "}
            explains our method.
          </p>
        </Prose>
      ),
    },

    {
      title: "How we used AI",
      body: (
        <Prose>
          <p>
            This site was built with generative AI, mainly Anthropic’s Claude
            (Opus 5.5), in 2026. I decided what to cover, which sources to trust
            and what went on each page. The AI searched for and summarised
            published documents, drafted most of the text and wrote most of the
            code.
          </p>
          <p>
            Every figure and quotation was then checked against the document it
            cites, first by a separate AI review pass and then by me. The
            photographs are real, taken by the people credited under them. None
            was generated.
          </p>
          <p>
            AI makes mistakes, and so do I. Every figure links to its source so
            you can check it. If something looks wrong, please tell us.
          </p>
        </Prose>
      ),
    },

    {
      title: "Contributions are welcome",
      body: (
        <Prose>
          <p>
            If you work in one of the fields this site covers, or something on a
            page looks wrong to you, please get in touch, even without a source
            to hand. A correction, a report that fills one of the gaps or a
            review of a page all help keep the picture accurate. The site is
            open source, and{" "}
            <Link href="/contribute/" className={link}>
              Contribute
            </Link>{" "}
            explains how to send them.
          </p>
        </Prose>
      ),
    },
  ],
};
