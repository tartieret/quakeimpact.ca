# Conventions for research files

<!-- review-status: unreviewed -->

> **Review status: unreviewed.** Not yet verified by the project owner. Change to
> `validated` with a date once reviewed, in both the comment and this line.
> **Last research pass:** 10 September 2026.
> **Changed in that pass.** Documents the review header this file now carries.


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
returns the file to `unreviewed`. A typo fix does not; a new finding, a withdrawn claim or
a changed band does. If you are unsure which you made, it was substantive.

**Where a claim was withdrawn or reversed in the last pass, the header says so** and names
the section, so the reviewer starts where the risk is rather than at the top.

## Structure of a file

1. **Title** — the subject, not the section number.
2. **Status line** — one line: what the evidence supports today, and the band if
   the subject is a system. Written so a reader who stops here is not misled.
3. **Findings** — the substance. Each factual line carries a source key and a
   confidence marker.
4. **What is not established** — the open questions belonging to this subject,
   each stating what was searched, so an absence is auditable.
5. **For the page** — how the finding should reach the site: the mechanism
   sentence, the guards that must travel with a number, the lever if there is
   one. Notes to ourselves live here and nowhere else.

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
- **A searched absence is a finding.** Record what was searched, through which
  channel, and when. "Nobody has published this" is a stronger and more useful
  statement than "we did not find this" — but only the search entitles us to it.
- **Deliberate non-publication is not the same as absence.** Where a document
  exists and is withheld, say that. It is a different fact about the world.
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
