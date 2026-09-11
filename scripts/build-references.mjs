#!/usr/bin/env node
/**
 * Generate `src/content/references.ts` from the research register in
 * `docs/research/sources.md`.
 *
 * The register is the single source of truth. Retyping 325 rows into a
 * TypeScript file guarantees they drift, so the file is generated and
 * committed, and a corrected date or URL propagates in one edit.
 *
 *   node scripts/build-references.mjs      (or: npm run references)
 *
 * Nothing here is clever about markdown in general. It parses one pipe table
 * with one known column order and throws on anything it does not recognise —
 * a half-written register is worse than a failed build.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const INPUT = "docs/research/sources.md";
const OUTPUT = "src/content/references.ts";

const COLUMNS = ["Key", "Source", "Organisation", "Date", "URL", "Route", "Licence"];
const ROUTES = ["direct", "media", "vendor", "landing", "archive"];

/* ------------------------------------------------------------------ */
/* Kind overrides                                                      */
/* ------------------------------------------------------------------ */

/**
 * Every row is a "report" unless it is named here. Kept short and by hand
 * because the register does not record a kind, and guessing one from a title
 * would be exactly the sort of silent inference this file exists to avoid.
 *
 * Datasets: the mapping and catalogue layers — things the site could draw
 * from, which is why the licence column matters most on these rows.
 * Analogues: Christchurch, Kobe and Tohoku material. They illustrate what
 * life was like elsewhere and never supply a number for here, so the site
 * labels them differently wherever they appear.
 */
const KIND_OVERRIDES = {
  // Datasets — mapping and catalogue layers.
  "BC-DAMS-REG": "dataset",
  "BCDC-TRANSMISSION": "dataset",
  "COV-DFPS-DATA": "dataset",
  MVSMMP: "dataset",
  "MVSMMP-LIC": "dataset",
  "NRCAN-SCEN": "dataset",
  NRCED: "dataset",
  "OPENDRR-GSF-22": "dataset",

  // Analogue events — Christchurch, Kobe, Tohoku.
  "CHANG-2000": "analogue",
  "CHCH-POP": "analogue",
  "CHCH-RNZ": "analogue",
  "CHCH-SEWER-NZH": "analogue",
  "CHCH-SEWER-STUFF": "analogue",
  "JP-WPDM-11": "analogue",
  "METI-2011": "analogue",
  "NZ-RC-V4": "analogue",
  "RMS-KOBE": "analogue",
  "ZAMA-12": "analogue",
};

/* ------------------------------------------------------------------ */
/* Internal cross-references                                           */
/* ------------------------------------------------------------------ */

/**
 * A claim can point at the page that carries the reasoning instead of
 * repeating it. These are not documents and they are not in the register, so
 * they are written here rather than parsed. Hrefs carry a trailing slash
 * because `next.config.ts` sets `trailingSlash: true`.
 */
const INTERNAL_PAGES = [
  {
    id: "page-method",
    kind: "page",
    title: "How the bands are defined",
    href: "/method/",
    note: "The rubric behind every low, medium and high on the site.",
  },
  {
    id: "page-fuel",
    kind: "page",
    title: "Fuel",
    href: "/after/fuel/",
    note: "Why fuel is the dependency underneath the road network.",
  },
];

/* ------------------------------------------------------------------ */
/* Parsing                                                             */
/* ------------------------------------------------------------------ */

class RegisterError extends Error {
  constructor(line, message) {
    super(`${INPUT}:${line} — ${message}`);
    this.name = "RegisterError";
  }
}

/** Split a markdown table row on unescaped pipes. */
function cells(row, line) {
  const trimmed = row.trim().replace(/^\|/, "").replace(/\|$/, "");
  const parts = trimmed.split(/(?<!\\)\|/).map((c) => c.replace(/\\\|/g, "|").trim());
  if (parts.length !== COLUMNS.length) {
    throw new RegisterError(
      line,
      `expected ${COLUMNS.length} columns (${COLUMNS.join(", ")}), found ${parts.length}`,
    );
  }
  return parts;
}

/** Strip markdown emphasis and code ticks from a fragment of a cell. */
function plain(text) {
  return text
    .replace(/\*\*([\s\S]*?)\*\*/g, "$1")
    .replace(/\*([\s\S]*?)\*/g, "$1")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** Drop the punctuation that joined a note to the title it followed. */
function tidyNote(text) {
  return text.replace(/^[\s,;:.—–-]+/, "").trim();
}

/**
 * The Source cell mixes a title with an editorial note. The register writes
 * that mix four consistent ways:
 *
 *   *Title*, note             an italicised document title
 *   "Headline", note          a news headline, quoted rather than italicised
 *   Title — note              a page or dataset name, then an em dash
 *   Author, "Article"…  **note**   a full citation, then a bold editorial note
 *
 * The brief said to take only the italic form and treat every other cell as a
 * title. That produces 200 "titles" of three hundred characters, which is a
 * worse reference list than the register it came from, so the three other
 * shapes are handled too. Each is a typographic convention the register keeps
 * throughout, not a guess about an individual row.
 *
 * A leading bold flag (one row rejects its own source in bold before naming
 * it) is kept, and becomes the start of the note.
 */
function splitSource(cell) {
  let rest = cell;
  let prefix = "";

  const leadingFlag = rest.match(/^\*\*([\s\S]+?)\*\*\s*([\s\S]*)$/);
  if (leadingFlag && /^\*[^*]/.test(leadingFlag[2])) {
    prefix = plain(leadingFlag[1]);
    rest = leadingFlag[2];
  }

  let title;
  let note;
  const italic = rest.match(/^\*([^*]+)\*([\s\S]*)$/);
  const bold = rest.match(/^\*\*([\s\S]+?)\*\*([\s\S]*)$/);
  const quoted = rest.match(/^["“]([^"”]+)["”]([\s\S]*)$/);

  if (italic) [, title, note] = italic;
  else if (bold) [, title, note] = bold;
  else if (quoted) [, title, note] = quoted;
  else {
    // Whichever separator comes first: an em dash, or the bold run the
    // register uses to open an editorial note after a full citation.
    const dash = rest.search(/\s+—\s+/);
    const emphasis = rest.indexOf("**", 1);
    const candidates = [dash, emphasis].filter((i) => i > 0);
    const at = candidates.length ? Math.min(...candidates) : -1;
    if (at === -1) [title, note] = [rest, ""];
    else [title, note] = [rest.slice(0, at), rest.slice(at)];
  }

  const tidied = tidyNote(plain(note));
  const parts = [prefix, tidied ? tidied.charAt(0).toUpperCase() + tidied.slice(1) : ""];
  return { title: plain(title).replace(/[.,;:\s]+$/, ""), note: parts.filter(Boolean).join(". ") };
}

/**
 * The Date cell is kept verbatim because it carries "undated", "not
 * recovered" and "accessed 10 Sep 2026", which a number cannot. A numeric
 * year is derived alongside it for sorting and display: the first four-digit
 * year in the cell, which in this register is the document's own date where
 * a later amendment or retrieval date follows it.
 *
 * An access date is not a publication date, so a cell that only records when
 * we looked at a living page yields no year at all.
 */
function deriveYear(date) {
  if (/^(accessed|searched|retrieved|queried|checked|mod\.|record last modified|page updated|last updated|page `modified`)/i.test(date)) {
    return undefined;
  }
  const match = date.match(/\b(?:18|19|20)\d{2}\b/);
  return match ? Number(match[0]) : undefined;
}

/** The first real URL in the cell. The cell often carries prose around it. */
function extractHref(cell) {
  const match = cell.match(/https?:\/\/[^\s)·,;]+/);
  return match ? match[0].replace(/[.,;]+$/, "") : "";
}

/**
 * A URL that is paywalled, that refuses an automated fetch, or that was never
 * recovered is a property of the claim: no reader can re-verify it by
 * following the link. That belongs in the note, not in a build log.
 */
function accessNotes(urlCell, href, note) {
  const out = [];
  const already = note.toLowerCase();
  if (/paywall/i.test(urlCell) && !already.includes("paywall")) {
    out.push("Paywalled: the document cannot be reached by following the link");
  }
  if (/\b403\b/.test(urlCell) && !already.includes("403")) {
    out.push("The host returns 403 to an automated fetch; open it in a browser");
  }
  if (!href) {
    const stated = plain(urlCell);
    out.push(
      stated && stated !== "—"
        ? `No link recovered: ${stated.charAt(0).toLowerCase()}${stated.slice(1)}`
        : "No link recorded in the register",
    );
  }
  return out;
}

function parseRegister(markdown) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((l) => l.trim() === "## Register");
  if (start === -1) throw new Error(`${INPUT}: no "## Register" heading found`);

  const entries = [];
  const seen = new Set();

  for (let i = start + 1; i < lines.length; i++) {
    const raw = lines[i];
    if (/^## /.test(raw)) break;
    if (!raw.trim().startsWith("|")) continue;

    const line = i + 1;
    const first = raw.trim().replace(/^\|/, "").split("|")[0].trim();
    if (first === COLUMNS[0]) continue; // header row
    if (/^-{3,}$/.test(first)) continue; // separator row

    const [keyCell, sourceCell, orgCell, dateCell, urlCell, routeCell, licenceCell] =
      cells(raw, line);

    const id = keyCell.replace(/`/g, "").trim();
    if (!id) throw new RegisterError(line, "row has no key");
    if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(id)) {
      throw new RegisterError(line, `key is not a citation key: ${JSON.stringify(id)}`);
    }
    if (seen.has(id)) throw new RegisterError(line, `duplicate key ${id}`);
    seen.add(id);

    const { title, note } = splitSource(sourceCell);
    if (!title) throw new RegisterError(line, `${id} has an empty Source cell`);

    const route = routeCell === "—" || routeCell === "" ? undefined : routeCell;
    if (route && !ROUTES.includes(route)) {
      throw new RegisterError(line, `${id} has an unknown route ${JSON.stringify(route)}`);
    }

    const href = extractHref(urlCell);
    const fullNote = [note, ...accessNotes(urlCell, href, note)]
      .filter(Boolean)
      .join(". ")
      .replace(/\.\.+$/, ".");

    const licence =
      licenceCell === "—" || licenceCell === "" ? undefined : plain(licenceCell);

    entries.push({
      id,
      kind: KIND_OVERRIDES[id] ?? "report",
      title,
      publisher: orgCell === "—" ? undefined : plain(orgCell),
      year: deriveYear(dateCell),
      date: plain(dateCell),
      href,
      note: fullNote || undefined,
      route,
      licence,
    });
  }

  if (entries.length === 0) throw new Error(`${INPUT}: the register parsed to zero rows`);

  const unknown = Object.keys(KIND_OVERRIDES).filter((k) => !seen.has(k));
  if (unknown.length) {
    throw new Error(`kind override names a key that is not in the register: ${unknown.join(", ")}`);
  }

  return entries;
}

/* ------------------------------------------------------------------ */
/* Emitting                                                            */
/* ------------------------------------------------------------------ */

const FIELD_ORDER = [
  "id",
  "kind",
  "title",
  "publisher",
  "year",
  "date",
  "href",
  "note",
  "route",
  "licence",
];

function emit(entries) {
  const body = entries
    .map((entry) => {
      // `href` is required by the type, so an unrecoverable document keeps an
      // empty one. The pages render that as "no link to follow" rather than as
      // a link that goes nowhere.
      const fields = FIELD_ORDER.filter(
        (f) => entry[f] !== undefined && (entry[f] !== "" || f === "href"),
      )
        .map((f) => `    ${f}: ${JSON.stringify(entry[f])},`)
        .join("\n");
      return `  ${JSON.stringify(entry.id)}: {\n${fields}\n  },`;
    })
    .join("\n");

  return `// Generated by scripts/build-references.mjs from ${INPUT}.
// Do not edit by hand: run \`npm run references\` after changing the register.

import type { Reference } from "./types";

/**
 * The source register. One entry per document, keyed by the citation key used
 * in prose and in \`Impact.source\`. Two internal pages are included, because a
 * claim can point at the page that carries the reasoning instead of repeating
 * it.
 */
export const REFERENCES: Record<string, Reference> = {
${body}
};

export const reference = (id: string): Reference | undefined => REFERENCES[id];
`;
}

/* ------------------------------------------------------------------ */

const markdown = readFileSync(resolve(ROOT, INPUT), "utf8");
const parsed = parseRegister(markdown);
const entries = [...parsed].sort((a, b) => a.id.localeCompare(b.id, "en"));

for (const page of INTERNAL_PAGES) {
  if (entries.some((e) => e.id === page.id)) {
    throw new Error(`internal page id ${page.id} collides with a register key`);
  }
  entries.push(page);
}

writeFileSync(resolve(ROOT, OUTPUT), emit(entries), "utf8");

const counts = entries.reduce((acc, e) => ({ ...acc, [e.kind]: (acc[e.kind] ?? 0) + 1 }), {});
const noLink = parsed.filter((e) => !e.href).length;
const noYear = parsed.filter((e) => e.year === undefined).length;
console.log(
  `${OUTPUT}: ${parsed.length} register rows + ${INTERNAL_PAGES.length} internal pages`,
);
console.log(`  by kind: ${Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(", ")}`);
console.log(`  ${noLink} rows have no recoverable link; ${noYear} have no derivable year`);
