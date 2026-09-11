# Conventions for research files

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.


Read with `README.md`. These are the rules every file in this folder follows, so
that twelve files written separately read as one body of work.

## Two different things are called "status", and they must not merge

Every file carries both, in this order, and they answer different questions.

1. **The review header**, immediately under the title. *Has a person checked this?* It is
   process state, it says nothing about the evidence, and it is the only part of a file
   the owner edits directly.
2. **The status line**, below it. *What does the evidence support today?* It is a finding,
   written by whoever did the research.

A file can be `validated` and still say the evidence is thin. A file can be `unreviewed`
and correct. Never let one imply the other.

### The review header

```
<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.
```

Two states only: **`unreviewed`** and **`validated`**. There is no half-reviewed — a file
part-way through a review is still unreviewed, because a reader cannot act on a partial
check. When a file is validated, the visible line becomes
`**Review status: validated 12 September 2026.**` and the HTML comment becomes
`<!-- review-status: validated -->`. **Change both**, so that
`grep -L '^<!-- review-status: validated -->' *.md systems/*.md` lists exactly what is left.

**Validation expires when the file changes.** Any substantive edit after a validation
returns the file to `unreviewed`. A typo fix does not; a new finding, a changed claim or
a changed band does. If you are unsure which you made, it was substantive.

## Structure of a file

These files are background for whoever writes the public pages. They are **organised by
subject, never by the order things were found** — a file that reads as a chronicle of
research makes its reader reconstruct the argument.

1. **Title** — the subject, not the section number.
2. **Status line** — what the evidence supports today, and the band if the subject is a
   system. Written so a reader who stops here is not misled.
3. **The substance**, under headings that name the subject rather than the discovery.
   For a system, the order that works is: **how it fails** (the mechanism), **how bad and
   for how long** (the figures, each with the guards that travel with it), **where and to
   whom** if the evidence supports geography, and **what is being done** — programmes,
   dates, and what has not started.
4. **What is not established** — the open questions belonging to this subject.
5. **For the page** — how the finding reaches the site: the mechanism sentence, the
   guards that govern the whole page, the lever if there is one. Notes to ourselves live
   here and nowhere else.

**Either shape works for the substance**, and the choice follows length. A short file
keeps a single `## Findings` container with subject `###` headings under it. A long one —
`buildings.md`, `dams-and-reservoirs.md` — drops the container and promotes its subjects
to `##`, because by then "Findings" is a wrapper around half the file and tells a reader
nothing. What does not vary is that the three closing parts stay: the substance, **What is
not established**, **For the page**.

**A heading names its subject, not its provenance.** "Large power transformers" rather
than "The transformer finding is older than the 2025 filing". Where provenance carries a
guard, the guard goes in the section body.

**A guard travels with the number it protects.** Only a guard governing how the whole
page must be written belongs in "For the page".

## Rules

- **A marker certifies a route, not a feeling.** [A] means the cited source
  directly states the claim. A government press release is [A] for its own
  existence and not for an engineering fact its own engineers contradict.
- **A number never travels without its scenario.** Displacement, casualties and
  restoration times differ by scenario, by geography and by what is being
  counted. Say which, every time. Figures measuring different things are never
  merged into one column.
- **An out-of-region figure is [C] and stays [C].** It illustrates a mechanism.
  It never becomes a Lower Mainland number, and it never sets a band.
- **A searched absence is a finding — the absence, not the search.** "No health
  authority has published a comparison of casualty load to care capacity" tells a reader
  something about the world and can go on the site. Record the channel and date in one
  line, so the claim is auditable and nobody re-runs a dead search. **What does not
  belong is the narration of the hunt** — the sitemap enumerated, the four query forms,
  the fallback index that also failed. That is our process, and no page will ever use it.
  Where an exploration produced nothing and gates nothing, it is deleted outright.
- **Deliberate non-publication is not the same as absence.** Where a document
  exists and is withheld, say that. It is a different fact about the world.
- **Record what we know, not how we came to know it.** A file states the current
  finding. It does not narrate the claim it replaced, the round in which it changed, or
  the belief it corrected — a reader picking the file up needs the evidence, not the
  project's autobiography. Corrections are made in place. The list of claims this
  project withdrew lives once, in `../research-plan.md`; the lessons those corrections
  taught live in `../knowledge.md`. **A date belongs to a search, not to a change of
  mind**: "searched the City's full-text index on 10 September 2026, zero public pages"
  is evidence and stays; "strengthened 10 September 2026" is a diary entry and goes.
- **Research voice stays in "For the page".** The site does not talk about
  itself. Framings like "the honest framing here" or "the blanks make the
  point" are notes, not copy, and never cross into `docs/copy/`.
- **One claim, one home.** Cross-reference rather than restate.
- **Prose over tables** where a mechanism is being explained; tables where
  values are being compared. A table of one column is a list.

## Numbers that look comparable and are not

Some quantities share a unit, a shape or a name across subjects and cannot be set
beside each other. Three found so far, and the list will grow:

- **Return periods do not cross from dams to buildings.** Engineers and
  Geoscientists BC states that National Building Code ground motions "should not
  be used for dam safety reviews". So a dam's 1-in-10,000-year standard and a
  building's 1-in-2,475-year standard are not two points on one scale, and a
  reader who compares them concludes something false about both.
- **Insured loss is not economic loss.** Both are denominated in billions and
  appear in the same sentences in the source material. One is what insurers pay.
- **A design intent is not a predicted displacement**, and neither is a code
  level. A figure attached to a structure must say which of the three it is.

**Where two numbers share a unit, say what each measures before setting them
side by side.** If that sentence cannot be written, they do not belong in the
same table.

## Access

Some sources sit behind a paywall, a login, or credentials published in a
document that was not meant to circulate. The rule is the same in each case:
**an unread source is unread.** It is recorded as a lead with its route, never
cited, and never summarised from a search-engine snippet — a snippet is not a
document.

Where credentials exist but were not ours to use, that is recorded as a
decision rather than a failure, and it stays a person's call. The same applies
to anything that would require creating an account, accepting terms, or
asserting an affiliation the project does not have.

A "403" or a JavaScript shell means *not yet retrieved*, never *not
available* — see `../knowledge.md`. Retest against a browser user-agent before
recording an absence.

## Source keys

`SCOPE-TOPIC-YY` — the publishing body, the subject, the year: `BCH-WESTEND-25`,
`MV-DWMP-26`, `PEIRS`. Where a key's year is corrected, the key changes with it and
every use is updated in the same pass. Every key resolves in `sources.md`.

Two exceptions, both deliberate. A document whose own identity contains a number
keeps it verbatim — `CRTC-2025-226` is a proceeding number, not a date, and
truncating it would break the citation. And a document universally known by a
name rather than a date keeps the name: `PEIRS`, `MVSMMP`.

Consistency of *format* is worth less than a key a reader can resolve against the
source. Do not churn existing keys to normalise them; a rename costs an edit in
every using file and risks leaving a claim unsourced.
