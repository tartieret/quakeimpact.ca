/**
 * Copy checks against the rendered text, not the source.
 *
 * The style guide's sentence rules apply to anything a reader sees, which
 * includes a heading, a figure label, alt text and a caption. Those come from
 * four different files and are assembled at render time, so the only place
 * they can all be checked at once is the exported HTML.
 *
 *   node scripts/qa/copy.mjs
 */
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const OUT = "out";

/** Every exported page. */
async function pages(dir = OUT, prefix = "/") {
  const found = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.isDirectory() && e.name !== "_next") {
      found.push(...(await pages(join(dir, e.name), `${prefix}${e.name}/`)));
    }
  }
  if ((await readdir(dir)).includes("index.html")) {
    found.push({ route: prefix, file: join(dir, "index.html") });
  }
  return found;
}

/** Visible text, with script and style stripped and entities resolved. */
function visible(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ");
}

/** aria-labels, which are reader facing but never appear in the text. */
function labels(html) {
  return [...html.matchAll(/aria-label="([^"]*)"/g)].map((m) =>
    m[1].replace(/&#x27;/g, "'").replace(/&amp;/g, "&"),
  );
}

/* The word list in §7, plus §5's dash rule. A hit is a question, not a
   verdict: a proper name may legitimately contain a listed word, and §5
   allows a dash in a quotation, a proper name and a numeric range. */
const BANNED = [
  /\bthe big one\b/i, /\bovercdue\b/i, /\boverdue\b/i, /\bground zero\b/i,
  /\bwar zone\b/i, /\bticking time bomb\b/i, /\bapocalyptic\b/i,
  /\bunimaginable\b/i, /\bdevastation\b/i, /\bdevastated\b/i,
  /\bmass exodus\b/i, /\bexperts warn\b/i, /\bwhen, not if\b/i,
  /\bact now\b/i,
];
const SOFT = [/\bcatastrophic\b/i, /\bdestroyed\b/i, /\bdowntime\b/i];

const results = [];
for (const { route, file } of (await pages()).sort((a, b) => a.route.localeCompare(b.route))) {
  if (route === "/404/" || route.startsWith("/_not-found")) continue;
  const html = await readFile(file, "utf8");
  const text = visible(html);
  const hits = [];

  for (const re of BANNED) {
    const m = re.exec(text);
    if (m) hits.push(`word list: "${m[0]}" ... ${context(text, m.index)}`);
  }
  for (const re of SOFT) {
    const m = re.exec(text);
    if (m) hits.push(`check in context: "${m[0]}" ... ${context(text, m.index)}`);
  }

  /* Dashes. A numeric range and a licence name are allowed; everything else
     is a §5 violation. */
  for (const m of text.matchAll(/[^\s]{0,40}[—–][^\s]{0,40}/g)) {
    const s = m[0];
    if (/\d[–]\d/.test(s)) continue;                 // numeric range
    if (/Licence|License|Open Government/i.test(s)) continue;
    hits.push(`dash: ...${context(text, m.index)}`);
  }
  for (const label of labels(html)) {
    if (/[—–]/.test(label) && !/\d[–]\d/.test(label)) {
      hits.push(`dash in aria-label: "${label}"`);
    }
    if (/^\s*$/.test(label)) hits.push("empty aria-label");
  }

  /* American spellings the guide rules out. */
  for (const re of [/\bmeters?\b/g, /\bcenters?\b/g, /\bneighborhood/gi, /\bliters?\b/gi, /\bkilometers?\b/gi]) {
    const m = re.exec(text);
    if (m) hits.push(`spelling: "${m[0]}" ... ${context(text, m.index)}`);
  }

  /* An exclamation mark or a rhetorical question in the site's own voice. */
  const bang = /!(?!\[)/.exec(text.replace(/&#33;/g, "!"));
  if (bang) hits.push(`exclamation: ${context(text, bang.index)}`);

  if (hits.length) results.push({ route, hits });
}

function context(text, i) {
  return text.slice(Math.max(0, i - 60), i + 80).trim();
}

if (!results.length) console.log("no copy-rule hits");
for (const r of results) {
  console.log(`\n${r.route}`);
  for (const h of [...new Set(r.hits)]) console.log("   " + h);
}
