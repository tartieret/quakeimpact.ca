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
- `lever: PageLever` — the copy's closing "What you can do".

Three properties make a wrong page hard to write, and they are why the body is
a typed array rather than a component:

**Every `<h2>` comes from a `PageSection.title`.** The route renders each entry
through `Section`, which gives the heading its `id`. The contents rail reads
`main section[id] > h2`, so a section that exists is a section the reader can
reach, and there is no way to author a heading that misses the rail. A subhead
inside a body uses `Subhead`, which gives an `<h3>` its own `id` for the same
reason. Do not write a bare `<h2>` or `<h3>` in a body.

**`lever` is a required field.** It is not one section among many, so the block
that makes the page usable cannot be dropped or demoted into prose.

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
- A `> **Not yet published.**` blockquote is a `VerificationNote`.
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
          <VerificationNote>
            <strong>Not yet published.</strong> What has and has not been put in
            the public record. <Cite id="SECOND-KEY" />
          </VerificationNote>
        </Prose>
      ),
    },
  ],

  lever: {
    title: <>The sentence that ties the actions to the interval above.</>,
    items: [
      <>
        <strong>The action.</strong> Why it is that figure. <Cite id="FIRST-KEY" />
      </>,
    ],
  },
};
```

Then add it to `register([...])` in `index.ts`. Nothing else changes: the route
picks it up, the contents rail builds itself from the sections, and the page
stops showing the unwritten text.

## Not written yet

`unwritten.tsx` holds the standing text from `docs/copy/unwritten.md` for a
system page whose evidence is gathered and whose body is not. It is a
`PageSection`, so it renders through the same path as a written one and appears
in the contents rail, which is how a reader can see from the rail that the page
says only this. The copy file's shaking-page variant is not built here; it
belongs to the `/shaking/` route.
