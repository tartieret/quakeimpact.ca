---
route: none. Standing copy, shown on any page whose evidence is gathered and whose text is not written
title: Not written yet
nav: none
hook: The band and its source are real. The page around them is not written.
lede: Two variants of one short notice, one for a system page in Part 2 and one for a shaking page in Part 1. A page in this state also carries a marker beside its title.
status: draft
---

## The state is structural, not prose

A page whose evidence is gathered and whose text is not written shows it twice,
and neither time in a paragraph.

A **marker** beside the page title, and beside the page's card in any list that
links to it, reading `Draft`. It is a word in a dashed outline, so it reads
without colour, and it is not a heading, so it takes no place in the heading
order or the contents rail.

A **notice** at the top of the page body: two sentences, below.

The state itself is a field in the content model, not something inferred from
the words on the page. `status: "draft"` sits on the system in
`src/content/site.ts`, on the entry in `SHAKING_PAGES`, and is available on a
page module's `meta` so a written page can be marked a draft while its text is
under revision. `src/components/status.tsx` draws both pieces.

## The system page variant

Shown on a system page under `/after/` that carries a band, a mechanism
sentence, a source, its place on the timeline, what it waits on and its lever,
and no body text.

> This page is not written yet: the band, the sentence behind it, the documents
> at the foot of the page and the action under them are real and can be checked
> today. [Water](/after/water/), [electricity](/after/electricity/) and
> [transportation](/after/transportation/) are written in full, and
> [preparing](/prepare/) covers what to do across all of the systems, including
> this one.

## The shaking page variant

Shown on a page under `/shaking/` that carries its summary line, the documents
gathered for its subject, and no body text. Pages in Part 1 carry no band, so
the variant names what is on the screen and promises nothing that is not there.

> This page is not written yet: the line at the top says what the subject
> covers, and the documents at the foot are the ones gathered for it so far.
> [Ground conditions](/shaking/ground/) is written in full, and [the two
> scenarios](/scenarios/) covers what each of the two earthquakes does.

## Two sentences, three jobs

Each variant does three things, and does them inside two sentences because a
longer version is the site talking about itself, which section 4 of the style
guide forbids.

First, that the page is not written. Not that work is underway, not when it will
be written, and not an apology. A reader who is told plainly can decide whether
to wait or to read something else.

Second, what on the screen can be relied on. A band with a source behind it is a
real finding, and a reader who takes the empty page as a sign that nothing here
is finished has been misled about the part that is.

Third, where to go: pages that are written, and the page that covers every
system at once.

The system variant's first sentence also names the action at the foot. The
action itself is not in this text, because it is different for every system. It
lives with the system in `src/content/site.ts` and renders through the same
`Lever` a written page uses, so it reaches the contents rail like any other
heading. A page that states a consequence and gives the reader nothing to do
with it is the failure the style guide's section on fear describes.

## What the earlier version got wrong

The standing text was a heading and four paragraphs on a system page, and a
heading and three on a shaking page, and most of it was the site explaining its own build state to someone who
had come to find out what happens to their water. It was also an `<h2>`, so the
contents rail of a draft page listed a section about the page rather than about
the subject. The replacement removes 228 words of that and shows the state as a
marker and a notice instead.

## Sources on this page

This text makes no claim of its own and cites nothing. The band, the mechanism
sentence and the source sit above it and are listed with the page's own sources.
