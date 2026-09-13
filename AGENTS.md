# Codex instructions

Read and follow ./AGENT_INSTRUCTIONS.md before starting work. It is the canonical
source of project instructions shared with Claude Code.

Critical rules repeated here for Codex:

- Read docs/site-overview.md and docs/stack-and-structure.md before making changes.
- Read docs/style-guide.md before editing any site copy, heading, label or alt text.
- Do not publish unsourced claims. Keep placeholders honestly labelled and record
  assumptions as verification items.
- Preserve accessibility: WCAG AA contrast, keyboard access, visible focus,
  ordered headings and meaning beyond colour alone.
- No new dependencies without asking.
- Run npm run typecheck before pushing.

Maintain shared rules in AGENT_INSTRUCTIONS.md. When changing a rule repeated
above, update this summary in the same change.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
