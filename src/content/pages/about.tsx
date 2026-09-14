import Link from "next/link";
import { Cite } from "@/components/citation";
import { Prose } from "@/components/page-parts";
import type { PageModule } from "./index";

/**
 * About. The body of `/about/`, ported from `docs/copy/about.md`.
 *
 * Three sections, in the order a stranger needs them: who compiled this and
 * why, how it is built, and how to correct it. The page used to run to eight
 * sections and restate the shaking and mutual-aid findings that `/scenarios/`
 * and the home page already carry; an about page that argues the case a second
 * time is an about page nobody finishes.
 *
 * The copy has no `## What you can do`, so this module carries no `lever`. The
 * page describes no consequence, so an action written for it would be an action
 * nobody asked the reader to take.
 *
 * The site does not talk about itself to the reader anywhere else. This page is
 * the exception the reader came for, and it is the one place the author speaks
 * in the first person: who compiled this, and why, is a fact about the site's
 * reliability rather than a biography. That is why the section naming him ends
 * on what the site is not.
 */
const link = "text-accent underline underline-offset-2";

export const about: PageModule = {
  meta: {
    route: "/about/",
    title: "About this site",
    description:
      "QuakeImpact explains the months after a major earthquake in the Lower Mainland. Every factual claim links to its published source.",
    nav: "About",
    standfirst:
      "QuakeImpact explains the months after a major earthquake in the Lower Mainland. Every factual claim comes from published work and links to its source.",
    /** First-cited order, which is the order the markers are numbered in. */
    references: ["PEIRS"],
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
            . I live in downtown Vancouver, and I am the chef d’îlot for the
            French community here: the volunteer the French consulate’s
            emergency plan names as the local point of contact if something
            serious happens in this part of the city.
          </p>
          <p>
            Preparing for that meant reading what the province, the region and
            the utilities have published about a major earthquake. What they
            describe is slower than what most of us picture. The province expects disruption to
            water and wastewater systems “for many months following the event”.{" "}
            <Cite id="PEIRS" /> Almost none of this is secret. It sits in
            filings, plans and assessments that nobody outside the field has a
            reason to open.
          </p>
          <p>
            So this site collects it in one place: what happens to the systems a
            household depends on, how long each one is out, how widely, and what
            it is waiting on.
          </p>
          <p>
            It is a personal project. It is not published by the consulate, by a
            municipality or by any agency, and nothing on it is an official
            instruction.
          </p>
        </Prose>
      ),
    },

    {
      title: "Where the figures come from",
      body: (
        <Prose>
          <p>
            Every figure comes from published work: a regulator’s filing, a
            provincial plan, an engineering assessment, a peer-reviewed paper.
            Each one carries a marker that opens that document’s entry without
            leaving the page, and the{" "}
            <Link href="/sources/" className={link}>
              sources page
            </Link>{" "}
            lists them all. Past earthquakes elsewhere appear too, to show how
            something fails and never to give a number for the Lower Mainland.
          </p>
          <p>
            The site is not complete, and it could not be. No assessment says
            precisely how a system behaves on the day. Where a figure is
            missing, the page says so: a system marked “Not yet assessed” means
            no assessment of it has been published, not that the infrastructure
            is fine.{" "}
            <Link href="/method/" className={link}>
              How the bands work
            </Link>{" "}
            explains the rest.
          </p>
        </Prose>
      ),
    },

    {
      title: "Corrections are welcome",
      body: (
        <Prose>
          <p>
            The site is open source, for the same reason every claim carries its
            document: anyone should be able to check a sentence against its
            source. If you find an error, or a document that fills one of the
            gaps,{" "}
            <Link href="/contribute/" className={link}>
              Contribute
            </Link>{" "}
            says what can be used and what cannot.
          </p>
        </Prose>
      ),
    },
  ],
};
