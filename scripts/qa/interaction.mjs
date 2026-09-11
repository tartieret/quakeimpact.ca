/**
 * The parts of the QA pass a static snapshot cannot answer: keyboard reach,
 * focus visibility, the citation popover, and whether the stored scenario is
 * applied before the reader sees the other one.
 *
 *   node scripts/qa/interaction.mjs
 *
 * The scenario test is the interesting one. The exported HTML is Cascadia,
 * because a static export has to commit to something. A reader whose stored
 * choice is crustal therefore sees whatever the browser paints before React
 * hydrates. `useLayoutEffect` runs before the paint of the hydration commit,
 * not before the paint of the server HTML, so the question is whether the
 * first painted frame already carries the stored choice. This measures it by
 * sampling the DOM on the first animation frame and again after hydration.
 */
import { chromium } from "playwright";
import { startServer } from "./serve.mjs";

const PORT = 4324;
const base = `http://localhost:${PORT}`;
const server = await startServer(PORT, "out");
const browser = await chromium.launch();

const log = (...a) => console.log(...a);

/* ------------------------------------------------------------------ */
/* Keyboard reach and focus visibility                                 */
/* ------------------------------------------------------------------ */

for (const route of ["/after/water/", "/scenarios/"]) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(base + route, { waitUntil: "networkidle" });

  log(`\n=== keyboard: ${route}`);

  const counts = await page.evaluate(() => ({
    citeButtons: document.querySelectorAll('button[aria-label^="Reference "]').length,
    skipLink: !!document.querySelector('a[href="#main"], a[href^="#"][class*="sr-only"]'),
    skipLinkText: (document.body.querySelector("a") || {}).textContent,
    radios: document.querySelectorAll('[role="radio"]').length,
    railLinks: document.querySelectorAll('nav[aria-label="On this page"] a').length,
  }));
  log("  ", JSON.stringify(counts));

  /* Tab through the head of the document and record what focus lands on and
     whether the focus ring is actually painted. */
  const seen = [];
  await page.evaluate(() => document.body.focus());
  for (let i = 0; i < 60; i++) {
    await page.keyboard.press("Tab");
    const info = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;
      const s = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        tag: el.tagName.toLowerCase(),
        label: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 45),
        outlineWidth: s.outlineWidth,
        outlineStyle: s.outlineStyle,
        outlineColor: s.outlineColor,
        boxShadow: s.boxShadow === "none" ? "" : "shadow",
        matchesFocusVisible: el.matches(":focus-visible"),
        onScreen: r.width > 0 && r.height > 0,
        rect: [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)],
      };
    });
    if (!info) break;
    seen.push(info);
  }
  const noRing = seen.filter(
    (s) => !s.matchesFocusVisible || (s.outlineStyle === "none" && !s.boxShadow),
  );
  const offScreen = seen.filter((s) => !s.onScreen);
  log(`   ${seen.length} stops tabbed; without a visible ring: ${noRing.length}; zero-size: ${offScreen.length}`);
  for (const s of noRing.slice(0, 8)) log("     no ring:", JSON.stringify(s));
  for (const s of offScreen.slice(0, 8)) log("     zero size:", JSON.stringify(s));
  log("   first six stops:", seen.slice(0, 6).map((s) => `${s.tag}:${s.label}`).join(" | "));

  /* The citation popover: open, tab into it, Escape, and see where focus goes. */
  const cite = page.locator('button[aria-label^="Reference "]').first();
  if (await cite.count()) {
    await cite.focus();
    await page.keyboard.press("Enter");
    const opened = await page.evaluate(() =>
      document.querySelectorAll('button[aria-label="Close reference"]').length);
    await page.keyboard.press("Tab");
    const afterTab = await page.evaluate(() =>
      (document.activeElement.getAttribute("aria-label") || document.activeElement.textContent || "").trim().slice(0, 40));
    await page.keyboard.press("Escape");
    const afterEsc = await page.evaluate(() => ({
      open: document.querySelectorAll('button[aria-label="Close reference"]').length,
      focus: document.activeElement.tagName.toLowerCase() +
        ":" + (document.activeElement.getAttribute("aria-label") || document.activeElement.textContent || "").trim().slice(0, 40),
    }));
    log(`   popover opened=${opened}; tab inside lands on "${afterTab}"; after Escape ${JSON.stringify(afterEsc)}`);

    /* And again without tabbing in, which is the common case. */
    await cite.focus();
    await page.keyboard.press("Enter");
    await page.keyboard.press("Escape");
    log("   Escape straight after opening returns focus to:",
      await page.evaluate(() => (document.activeElement.getAttribute("aria-label") || "").slice(0, 40)));
  }
  await ctx.close();
}

/* ------------------------------------------------------------------ */
/* Scenario toggle: persistence, and a flash of the other scenario      */
/* ------------------------------------------------------------------ */

log("\n=== scenario toggle");
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  /* Sample the DOM on the first animation frame, which is the first thing a
     reader can see, and again once hydration has run. */
  await ctx.addInitScript(`
    window.__frames = [];
    const sample = () => {
      const t = document.querySelector('[role="radio"][aria-checked="true"]');
      const main = document.querySelector("main");
      const cells = main
        ? (main.textContent || "").replace(/\\s+/g, " ").trim().slice(0, 90)
        : "";
      return { t: Math.round(performance.now()),
        checked: t ? t.textContent.trim() : null, cells };
    };
    const tick = () => {
      if (document.body) window.__frames.push(sample());
      if (window.__frames.length < 40) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  `);
  const page = await ctx.newPage();
  await page.goto(base + "/scenarios/", { waitUntil: "networkidle" });

  const toggle = page.locator('[role="radiogroup"] [role="radio"]');
  const labels = await toggle.allTextContents();
  log("   toggle options:", labels.join(" / "));
  await toggle.nth(1).click();
  await page.waitForTimeout(100);
  const stored = await page.evaluate(() => localStorage.getItem("scenario"));
  log("   after clicking the second option, localStorage.scenario =", stored);

  /* Reload with the stored choice and watch the frames. */
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  const frames = await page.evaluate(() => window.__frames);
  const distinct = [];
  for (const f of frames) {
    const key = f.checked + "|" + f.cells;
    if (!distinct.length || distinct[distinct.length - 1].key !== key) {
      distinct.push({ key, t: f.t });
    }
  }
  log("   frames after reload (checked option | first band cells):");
  for (const d of distinct) log(`     +${d.t}ms  ${d.key}`);
  log("   >>> a flash exists if the first frame shows the option the reader did not choose");

  await ctx.close();
}

await browser.close();
server.close();
