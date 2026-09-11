# Page modules

Where a finished copy file in `docs/copy/` lands. The markdown is the draft the
project writes and reviews; the module is what the site renders. There is no
markdown pipeline and there will not be one, so a module is the source of truth
for its page's words and the route template that renders it holds none.

One file per page, named for its route's last segment. `index.ts` registers
them, keyed on `meta.route`, so the key and the page cannot disagree.

## The contract

A module exports one `PageModule`:

- `meta: PageMeta` — from `src/content/types.ts`.
- `sections: PageSection[]` — one entry per `##` in the copy, in order.
- `lever?: PageLever` — the copy's closing "What you can do". Optional only
  because `/method/` describes no consequence and so writes none.

Three properties make a wrong page hard to write, and they are why the body is
a typed array rather than a component:

**Every `<h2>` comes from a `PageSection.title`.** The route renders each entry
through `Section`, which gives the heading its `id`. The contents rail reads
`main section[id] > h2`, so a section that exists is a section the reader can
reach, and there is no way to author a heading that misses the rail. A subhead
inside a body uses `Subhead`, which gives an `<h3>` its own `id` for the same
reason. Do not write a bare `<h2>` or `<h3>` in a body.

**`lever` is its own field.** It is not one section among many, so the block
that makes the page usable cannot be demoted into prose. It is optional in the
type, and the one page that leaves it off is `/method/`: the principle is no
doom without a lever, and the rubric states no doom.

`PageLever` is the props of `Lever` itself, so a slot added to the component is
a slot a module can fill. Three of them matter when porting. `closing` takes the
paragraph some copy writes after the bullets, which ties the list together and
is not itself an action: a closing sentence forced into the list reads as one
more thing to do. `href` moves the standing link at the foot, and `href: null`
leaves it off, which is what a page that already links to `/prepare/` in its own
words wants, and what `/prepare/` itself wants, since a link from a page to that
same page is a loop. `linkLabel` renames the link where the default words would
be wrong.

**`meta.references` is the citation contract.** It lists reference ids in the
order the body first cites them. `Cite` numbers a marker by the key's position
in that array and `ReferenceList` reads the same array, so the markers and the
list at the foot of the page cannot drift. A key cited but not declared renders
a visible `[?]` instead of a number, and an id in the register that no longer
exists renders the same way, so the contract enforces itself on the page rather
than in a comment.

## Porting a copy file

- `route`, `title`, `nav` and the front-matter `lede` (as `standfirst`) go into
  `meta`. `bands`, `mechanism` and `source` do not: they live in `SYSTEMS` in
  `src/content/site.ts` and the route renders them above the body.
- Each `##` becomes a `PageSection`. The heading text is verbatim.
- Each `[KEY]` becomes `<Cite id="KEY" />`, with the key verbatim. Keys resolve
  in the generated `src/content/references.ts`.
- A `> **Not yet published.**` blockquote is a `VerificationNote`. The copy's
  bold lead is the note's `label` and comes out of the body, with no trailing
  full stop: the label is uppercased in CSS, so a period set in capitals reads
  as a typo. A note that keeps the lead in the body says it twice and then
  opens on a sentence fragment.
- A table is a `DataTable`. It needs a `caption`, which the copy does not write:
  one plain sentence saying what the table shows, under the style guide like any
  other reader-facing string.
- A quotation is a `Quote`, verbatim including its own punctuation. The speaker
  and the document go in `speaker` and `source`; the `[KEY]` goes in `cite`.
- The closing `## What you can do` is `lever`, not a section.
- `## Sources on this page` is not a section either. The route renders
  `ReferenceList` from `meta.references`.
- A bullet or paragraph the copy leaves uncited because it claims nothing and
  rests on no document stays uncited. Do not attach a marker to make it match
  its neighbours.

A graphic goes inside the section body that calls for it, as `Figure` or
`MapPlaceholder`, with `licence` where the dataset's terms are settled and left
off where they are not. The route draws no map of its own: the overlay the
system template used to promise is not licensed and is not being built, per
`docs/licensing.md`.

## The skeleton

```tsx
import { Cite } from "@/components/citation";
import { Prose, Quote, DataTable, VerificationNote } from "@/components/page-parts";
import type { PageModule } from "./index";

export const example: PageModule = {
  meta: {
    route: "/after/example/",
    title: "Example",
    nav: "Example",
    kicker: "Life afterwards",
    standfirst: "The copy's lede, one or two sentences.",
    /** First-cited order. Marker numbering is this array's order. */
    references: ["FIRST-KEY", "SECOND-KEY"],
  },

  sections: [
    {
      title: "A heading that reads as a sentence about the world",
      body: (
        <Prose>
          <p>
            Body, with the marker in the same sentence as the number.{" "}
            <Cite id="FIRST-KEY" />
          </p>
          <VerificationNote label="Not yet published">
            What has and has not been put in the public record.{" "}
            <Cite id="SECOND-KEY" />
          </VerificationNote>
        </Prose>
      ),
    },
  ],

  /** Optional, and left off only by a page that describes no consequence. */
  lever: {
    title: <>The sentence that ties the actions to the interval above.</>,
    items: [
      <>
        <strong>The action.</strong> Why it is that figure. <Cite id="FIRST-KEY" />
      </>,
    ],
    /** The copy's closing paragraph, where it writes one. */
    closing: <>The sentence after the list that is not itself an action.</>,
    /** `null` where the page's own words already link to `/prepare/`. */
    href: null,
  },
};
```

Then add it to `register([...])` in `index.ts`. Nothing else changes: the route
picks it up, the contents rail builds itself from the sections, and the page
stops showing the draft notice. Clear the system's `status` field to take the
marker off with it.

## Not written yet

A page whose evidence is gathered and whose text is not written has no module.
It declares itself in the content model instead: `status: "draft"` on the system
in `src/content/site.ts` or on the entry in `SHAKING_PAGES`. The route draws a
marker beside the title and a two-sentence notice above the body, both from
`src/components/status.tsx`; the copy for them is `docs/copy/unwritten.md`.

Neither piece is a section, so a draft page's contents rail lists only the parts
of the page that are about the subject. Adding a module here is what fills the
body; clearing the `status` field is what takes the marker off.
