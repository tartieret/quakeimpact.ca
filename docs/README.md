# docs

The knowledge base for QuakeImpact. Everything the site is built on lives here,
in version control alongside the code that renders it.

| File | What it holds |
|---|---|
| `site-overview.md` | The project document: purpose, principles, scenarios, how impacts are shown, content structure, build order, open decisions. Owns **structure**. |
| `style-guide.md` | How the site sounds and looks: audience, tone, the evidence on fear appeals, sentence-level rules, word list, visual language, accessibility, pre-publication checklist. **Read before writing any page.** |
| `research/` | The evidence base. One subject per file, with source keys, confidence markers and open questions. Owns **fact**. Start at `research/README.md`. |
| `licensing.md` | Per-dataset licence status, the attribution strings the site must publish, and the rules for text and figures. **Nothing is reproduced or hosted unless it is cleared here.** |
| `media.md` | Per-photograph licence status, what a photograph is admitted for, and the credit each one is owed. The same rule as `licensing.md`, applied to images. |
| `stack-and-structure.md` | How the site is built: stack, routes, content model, and how the principles in the overview are enforced in code. |
| `knowledge/` | Lessons that outlive a change, by topic: `research.md` (retrieval and false absences), `build.md` (stack, content pipeline, QA), `design.md` (colour, figures, maps, photographs). Rules, not stories; grep before debugging. |
| `research-plan.md` | Where the research stands: what changed, what was corrected, what is decided, what has not been started. **Read this first when picking the project back up.** |

## Working rules

- **Every research file carries a review status.** Two states, `unreviewed` and
  `validated`, in a header directly under the title. It records whether a person has
  checked the file, and says nothing about how strong the evidence is — a validated file
  may still report a thin one. `grep -L '^<!-- review-status: validated -->' docs/research/*.md docs/research/systems/*.md`
  lists what is left to review. Any substantive edit returns a file to `unreviewed`.
  See `research/CONVENTIONS.md`.
- **The overview owns structure; the research owns fact.** A claim reaches the
  site only if it appears in `research/` with a source and a confidence marker
  the source supports. Where the two documents disagree, `research/` wins on
  fact and `site-overview.md` wins on shape.
- **Assumptions are research tasks.** Anything held as "I believe X" enters
  `research/open-questions.md` as a verification item. It does not reach the site
  until a source confirms or contradicts it, and it ships visibly as an open
  question in the meantime.
- **An absence that has been searched for is a finding.** Record the channel and
  the date. "Nobody has published this" is a stronger statement than "we did not
  find this" — but only the search earns it. Deliberate non-publication is a
  third thing again, and is worth saying out loud.
- **Four registers, four homes.** `site-overview.md` §9 registers open
  *decisions*; `research/open-questions.md` registers open *research questions*;
  `licensing.md` registers licence status per dataset; `media.md` does the same
  for photographs, which arrive on different terms from data and are checked one
  file at a time. When one document closes another's item, say so in both.
- **Every document carries a version and a date.** When one supersedes another,
  the superseding document names the file and section, and the superseded item is
  edited in place rather than left standing.
- **Tone is not a matter of taste.** `style-guide.md` records decisions backed by
  risk-communication research, not preferences. Changing them is a decision to
  record, not an edit to make in passing.
- **Research prose is not copy.** Roughly one sentence in four in `research/` is
  the project talking about itself. That is correct there and fatal on a page.
  Copy is written through the style guide, not pasted across.
