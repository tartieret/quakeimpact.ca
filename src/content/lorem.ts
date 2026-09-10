/**
 * Placeholder prose. Every string in this file is scaffolding and must be
 * replaced with sourced content before anything is published.
 */

const SENTENCES = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
];

/** Deterministic pseudo-random so builds stay stable between runs. */
function pick(seed: number, offset: number) {
  return SENTENCES[(seed * 7 + offset * 3) % SENTENCES.length];
}

export function lorem(sentences = 3, seed = 1): string {
  return Array.from({ length: sentences }, (_, i) => pick(seed, i)).join(" ");
}

export function loremParagraphs(count = 3, seed = 1): string[] {
  return Array.from({ length: count }, (_, i) => lorem(3 + (i % 2), seed + i));
}

/** Short fragment for captions, hooks and table cells. */
export function loremLine(seed = 1): string {
  const s = pick(seed, 0);
  return s.slice(0, 78).replace(/[ ,]+$/, "") + ".";
}
