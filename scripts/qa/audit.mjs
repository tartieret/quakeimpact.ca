/**
 * Rendered-output QA over the whole exported site.
 *
 * Builds nothing: it serves `out/` and drives Chromium across every route at
 * two widths and both themes, recording measurements rather than opinions.
 * The thresholds it judges against are all in this file.
 *
 *   node scripts/qa/audit.mjs                 # everything
 *   node scripts/qa/audit.mjs --route /after/water/
 *   node scripts/qa/audit.mjs --shots         # also write screenshots
 *
 * Output: scripts/qa/report.json (raw) and a summary on stdout.
 */
import { chromium } from "playwright";
import { readdir, writeFile, mkdir } from "node:fs/promises";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { startServer } from "./serve.mjs";
import { PAGE_SCRIPT } from "./checks.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "../..");
const OUT = join(ROOT, "out");
const SHOTS = join(HERE, "shots");
const PORT = 4321;

const WIDTHS = [
  { name: "phone", width: 390, height: 844 },
  { name: "desktop", width: 1280, height: 900 },
];
const THEMES = ["light", "dark"];

const args = process.argv.slice(2);
const only = args.includes("--route") ? args[args.indexOf("--route") + 1] : null;
const wantShots = args.includes("--shots");

/** Every exported route, from the `index.html` files the build wrote. */
async function routes(dir = OUT, prefix = "/") {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name === "_next") continue;
    found.push(...(await routes(join(dir, entry.name), `${prefix}${entry.name}/`)));
  }
  try {
    const files = await readdir(dir);
    if (files.includes("index.html")) found.push(prefix);
  } catch {}
  return found.sort();
}

const run = async () => {
  const server = await startServer(PORT, OUT);
  await mkdir(SHOTS, { recursive: true });
  const all = (await routes()).filter(
    (r) => !r.startsWith("/_not-found") && r !== "/404/",
  );
  const list = only ? all.filter((r) => r === only) : all;
  console.log(`${list.length} routes\n`);

  const browser = await chromium.launch();
  const report = [];

  for (const theme of THEMES) {
    for (const vp of WIDTHS) {
      const ctx = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        colorScheme: theme,
        deviceScaleFactor: 1,
      });
      await ctx.addInitScript(PAGE_SCRIPT);
      const page = await ctx.newPage();
      const consoleErrors = [];
      page.on("console", (m) => {
        if (m.type() === "error") consoleErrors.push(m.text().slice(0, 200));
      });
      page.on("pageerror", (e) => consoleErrors.push("pageerror: " + e.message));

      for (const route of list) {
        consoleErrors.length = 0;
        await page.goto(`http://localhost:${PORT}${route}`, {
          waitUntil: "networkidle",
        });
        await page.waitForTimeout(150);
        const data = await page.evaluate(() => ({
          overflow: window.__qa.overflow(),
          scrollers: window.__qa.scrollers(),
          contrast: window.__qa.contrast(),
          headings: window.__qa.headings(),
          figures: window.__qa.figures(),
          marks: window.__qa.marks(),
          unfinished: window.__qa.unfinished(),
          focusables: window.__qa.focusables(),
        }));
        report.push({ route, theme, viewport: vp.name, width: vp.width,
          consoleErrors: [...consoleErrors], ...data });
        process.stdout.write(".");
      }
      await ctx.close();
      console.log(` ${theme}/${vp.name} done`);
    }
  }

  /* ---- screenshots of anything that measured badly ---------------- */
  if (wantShots) {
    const bad = new Set(
      report
        .filter(
          (r) =>
            r.overflow.scrolls ||
            r.figures.figures.some((f) => f.clipped.length || f.overlaps.length) ||
            r.contrast.some((c) => !c.passAA),
        )
        .map((r) => `${r.route}|${r.theme}|${r.viewport}`),
    );
    for (const key of bad) {
      const [route, theme, vpName] = key.split("|");
      const vp = WIDTHS.find((v) => v.name === vpName);
      const ctx = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        colorScheme: theme,
      });
      const page = await ctx.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(200);
      const name = `${route.replace(/\//g, "_") || "_"}${theme}-${vpName}.png`.replace(/^_/, "");
      await page.screenshot({ path: join(SHOTS, name), fullPage: true });
      await ctx.close();
    }
    console.log(`\n${bad.size} screenshots in ${SHOTS}`);
  }

  await browser.close();
  server.close();

  await writeFile(join(HERE, "report.json"), JSON.stringify(report, null, 1));
  summarise(report);
};

/* ------------------------------------------------------------------ */
/* Judgement                                                           */
/* ------------------------------------------------------------------ */

export function summarise(report) {
  const say = (s) => console.log(s);
  say("\n================ SUMMARY ================\n");

  /* 1. overflow */
  const scrollers = report.filter((r) => r.overflow.scrolls);
  say(`-- horizontal overflow: ${scrollers.length} page/viewport/theme combinations`);
  for (const r of scrollers) {
    say(`   ${r.route} ${r.theme}/${r.viewport}  doc=${r.overflow.docScrollWidth} vw=${r.overflow.viewport}`);
    for (const o of r.overflow.offenders.slice(0, 4)) {
      say(`      ${o.el}  w=${o.width} l=${o.left} r=${o.right}`);
    }
  }

  /* wide elements even where the doc does not scroll */
  const wide = report.filter((r) => !r.overflow.scrolls && r.overflow.offenders.length);
  say(`\n-- elements past the viewport without the doc scrolling: ${wide.length}`);
  for (const r of wide.slice(0, 15)) {
    say(`   ${r.route} ${r.theme}/${r.viewport}: ${r.overflow.offenders.map((o) => o.el).slice(0, 3).join(" | ")}`);
  }

  /* 1b. scroll containers */
  say("\n-- wide content in a box a keyboard cannot scroll");
  for (const r of report) {
    for (const s of r.scrollers || []) {
      if (s.focusable) continue;
      say(`   ${r.route} ${r.theme}/${r.viewport}: ${s.hiddenPx}px of ${s.scrollWidth}px unreachable, no tabindex, role=${s.role}  ${s.el}`);
    }
  }

  /* 3. contrast */
  say("\n-- contrast below AA");
  const failures = new Map();
  for (const r of report) {
    for (const c of r.contrast.filter((x) => !x.passAA)) {
      const key = `${c.fg}|${c.bg}|${c.px}|${r.theme}`;
      if (!failures.has(key)) failures.set(key, { ...c, theme: r.theme, routes: new Set() });
      failures.get(key).routes.add(r.route);
    }
  }
  for (const f of [...failures.values()].sort((a, b) => a.ratio - b.ratio)) {
    say(`   ${f.ratio}:1  ${f.px}px${f.bold ? " bold" : ""}${f.svg ? " svg" : ""} ${f.theme}  fg=${f.fg} bg=${f.bg}`);
    say(`      "${f.text}" in ${f.el.slice(0, 60)}  (${f.routes.size} routes, e.g. ${[...f.routes][0]})`);
  }

  /* large type that passes only via the large-text exemption */
  say("\n-- large display type between 3:1 and 4.5:1 (style guide: not exempt in practice)");
  const lax = new Map();
  for (const r of report) {
    for (const c of r.contrast.filter((x) => x.passAA && !x.passAAStrict)) {
      const key = `${c.fg}|${c.bg}|${c.px}|${r.theme}`;
      if (!lax.has(key)) lax.set(key, { ...c, theme: r.theme, routes: new Set() });
      lax.get(key).routes.add(r.route);
    }
  }
  for (const f of [...lax.values()].sort((a, b) => a.ratio - b.ratio)) {
    say(`   ${f.ratio}:1  ${f.px}px${f.bold ? " bold" : ""} ${f.theme}  "${f.text}"  (${f.routes.size} routes, e.g. ${[...f.routes][0]})`);
  }

  /* 4. headings */
  say("\n-- headings");
  const seenRoutes = new Set();
  for (const r of report) {
    if (r.theme !== "light" || r.viewport !== "desktop") continue;
    seenRoutes.add(r.route);
    const levels = r.headings.headings;
    const h1 = levels.filter((h) => h.level === 1).length;
    const problems = [];
    if (h1 !== 1) problems.push(`${h1} h1 in main`);
    let prev = 1;
    for (const h of levels) {
      if (h.level > prev + 1) problems.push(`h${prev} -> h${h.level} at "${h.text}"`);
      prev = h.level;
    }
    const missing = r.headings.allH2.filter((t) => !r.headings.railTargets.includes(t));
    if (missing.length && r.headings.allH2.length >= 3) {
      problems.push(`h2 not in rail selector: ${missing.map((m) => JSON.stringify(m)).join(", ")}`);
    }
    if (r.headings.railSlotPresent && !r.headings.railRendered && r.headings.railTargets.length >= 3) {
      problems.push("rail slot present, rail did not render");
    }
    if (r.headings.railHeight > r.headings.viewportHeight) {
      problems.push(
        `contents rail is ${r.headings.railHeight}px tall in a ${r.headings.viewportHeight}px viewport, ` +
        `${r.headings.railLinks.length} links, and does not scroll`,
      );
    }
    if (problems.length) say(`   ${r.route}: ${problems.join("; ")}`);
  }

  /* 5. figures */
  say("\n-- figures");
  const figIssues = [];
  for (const r of report) {
    for (const f of r.figures.figures) {
      if (f.labelEmpty) figIssues.push(`${r.route} ${r.theme}/${r.viewport}: figure with empty aria-label (${f.desc})`);
      if (!f.hasSvg) figIssues.push(`${r.route}: role=img with no svg (${f.desc})`);
      if (f.svgHidden === false) figIssues.push(`${r.route}: inner svg not aria-hidden (${f.label.slice(0, 40)})`);
      for (const c of f.clipped) {
        figIssues.push(`${r.route} ${r.theme}/${r.viewport}: text clipped "${c.text}" (L${c.overLeft} R${c.overRight} T${c.overTop} B${c.overBottom}) in "${f.label.slice(0, 40)}"`);
      }
      for (const o of f.overlaps) {
        figIssues.push(`${r.route} ${r.theme}/${r.viewport}: labels overlap "${o.a}" x "${o.b}" by ${o.ox}x${o.oy}px in "${f.label.slice(0, 40)}"`);
      }
      for (const o of f.near || []) {
        figIssues.push(`NEAR ${r.route} ${r.viewport}: "${o.a}" clears "${o.b}" by only ${o.gap}px in "${f.label.slice(0, 40)}"`);
      }
      for (const t of f.tiny) {
        figIssues.push(`${r.route}: type under the 12px floor, ${t.px}px "${t.text}"`);
      }
    }
    if (r.figures.dupIds.length) figIssues.push(`${r.route}: duplicate element ids ${r.figures.dupIds.join(", ")}`);
    if (r.figures.dupPatterns.length) figIssues.push(`${r.route}: duplicate pattern ids ${r.figures.dupPatterns.join(", ")}`);
  }
  for (const m of [...new Set(figIssues)]) say(`   ${m}`);

  /* 2. invisible marks */
  say("\n-- marks under 1.15:1 against their own ground");
  const markMsgs = new Set();
  for (const r of report) {
    for (const m of r.marks) {
      markMsgs.add(`${r.theme}: ${m.el} ${m.what}=${m.color} on ${m.bg} (${m.ratio}:1) ${m.w}x${m.h} fig=${m.fig} e.g. ${r.route}`);
    }
  }
  for (const m of markMsgs) say(`   ${m}`);

  /* 8. unfinished */
  say("\n-- unfinished");
  for (const r of report) {
    if (r.theme !== "light" || r.viewport !== "desktop") continue;
    const u = r.unfinished;
    const bits = [];
    if (u.emptySections.length) bits.push(`empty sections: ${u.emptySections.map((s) => s.id).join(", ")}`);
    if (u.emptyLists.length) bits.push(`empty lists: ${u.emptyLists.length}`);
    if (u.loremHit) bits.push(`placeholder text: ${u.loremHit}`);
    if (u.wordCount < 120) bits.push(`only ${u.wordCount} words`);
    if (bits.length) say(`   ${r.route}: ${bits.join("; ")}`);
  }

  /* console */
  say("\n-- console errors");
  for (const r of report) {
    if (r.consoleErrors.length) say(`   ${r.route} ${r.theme}/${r.viewport}: ${r.consoleErrors.join(" | ")}`);
  }
  say(`\nroutes checked: ${seenRoutes.size}; records: ${report.length}`);
}

if (args.includes("--from-report")) {
  const { readFile } = await import("node:fs/promises");
  summarise(JSON.parse(await readFile(join(HERE, "report.json"), "utf8")));
} else {
  await run();
}
