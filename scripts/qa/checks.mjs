/**
 * The page-side of the QA pass.
 *
 * `PAGE_SCRIPT` is injected into every page before it loads and hangs a
 * `window.__qa` object off the window. Each member is a measurement, not a
 * judgement: it returns numbers and element descriptions, and `audit.mjs`
 * decides what counts as a defect. Keeping the thresholds out of here means
 * one readable place to argue with, and a rerun after a fix that is
 * comparable with the run before it.
 */

export const PAGE_SCRIPT = String.raw`
window.__qa = (() => {
  const desc = (el) => {
    if (!el) return "(none)";
    const id = el.id ? "#" + el.id : "";
    const cls = ((el.getAttribute && el.getAttribute("class")) || "")
      .split(/\s+/).filter(Boolean).slice(0, 4).join(".");
    const txt = (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 60);
    return el.tagName.toLowerCase() + id + (cls ? "." + cls : "") +
      (txt ? ' "' + txt + '"' : "");
  };

  /* WCAG 2.x relative luminance and contrast ratio. */
  const srgb = (c) => {
    const v = c / 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  const parse = (s) => {
    const m = /rgba?\(([^)]+)\)/.exec(s || "");
    if (!m) return null;
    const p = m[1].split(/[,\s\/]+/).filter(Boolean).map(Number);
    if (p.length < 3 || p.some(Number.isNaN)) return null;
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const over = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  });
  const lum = (c) => 0.2126 * srgb(c.r) + 0.7152 * srgb(c.g) + 0.0722 * srgb(c.b);
  const ratio = (a, b) => {
    const l1 = lum(a), l2 = lum(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  };
  const rgb = (c) =>
    "rgb(" + Math.round(c.r) + "," + Math.round(c.g) + "," + Math.round(c.b) + ")";

  /* The real background behind an element: the nearest opaque ancestor
     colour, with any translucent layers composited back down onto it. */
  const bgOf = (el) => {
    const stack = [];
    let n = el;
    while (n && n.nodeType === 1) {
      const c = parse(getComputedStyle(n).backgroundColor);
      if (c && c.a > 0) {
        stack.unshift(c);
        if (c.a === 1) break;
      }
      n = n.parentElement;
    }
    let base = parse(getComputedStyle(document.documentElement).backgroundColor);
    if (!base || base.a < 1) base = { r: 255, g: 255, b: 255, a: 1 };
    for (const c of stack) base = over(c, base);
    return base;
  };

  const scrollAncestor = (el) => {
    let n = el.parentElement;
    while (n && n !== document.documentElement) {
      const s = getComputedStyle(n);
      if (/(auto|scroll|hidden|clip)/.test(s.overflowX)) return n;
      n = n.parentElement;
    }
    return null;
  };

  return {
    desc, ratio, bgOf, parse, over,

    /* ---- 1. horizontal overflow ---------------------------------- */
    overflow() {
      const doc = document.documentElement;
      const vw = window.innerWidth;
      const offenders = [];
      for (const el of document.querySelectorAll("body *")) {
        const s = getComputedStyle(el);
        if (s.display === "none" || s.visibility === "hidden") continue;
        if (s.position === "fixed") continue;
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) continue;
        const left = r.left + window.scrollX;
        const right = r.right + window.scrollX;
        if (right <= vw + 1 && left >= -1) continue;
        if (scrollAncestor(el)) continue;
        offenders.push({
          el: desc(el), width: Math.round(r.width),
          left: Math.round(left), right: Math.round(right),
        });
      }
      return {
        docScrollWidth: doc.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
        viewport: vw,
        scrolls: doc.scrollWidth > vw + 1,
        offenders: offenders.slice(0, 30),
      };
    },

    /* ---- 1b. scroll containers a keyboard cannot reach ------------- */
    /* Wide content is supposed to scroll inside its own box rather than push
       the page sideways, which it does. But a box that only scrolls by drag
       or wheel is mouse-only: without a tabindex nothing focuses it, so a
       keyboard reader never sees the far side of the table. */
    scrollers() {
      const out = [];
      for (const el of document.querySelectorAll("body *")) {
        const s = getComputedStyle(el);
        if (!/(auto|scroll)/.test(s.overflowX)) continue;
        const overflowBy = el.scrollWidth - el.clientWidth;
        if (overflowBy <= 1) continue;
        out.push({
          el: desc(el).slice(0, 80),
          clientWidth: el.clientWidth,
          scrollWidth: el.scrollWidth,
          hiddenPx: overflowBy,
          focusable: el.tabIndex >= 0,
          role: el.getAttribute("role"),
          labelled: !!(el.getAttribute("aria-label") || el.getAttribute("aria-labelledby")),
        });
      }
      return out;
    },

    /* ---- 3. contrast ---------------------------------------------- */
    contrast() {
      const out = [];
      const seen = new Set();
      const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
      let node;
      while ((node = walk.nextNode())) {
        const t = (node.nodeValue || "").trim();
        if (!t) continue;
        const el = node.parentElement;
        if (!el) continue;
        if (el.closest("[aria-hidden='true']") && !el.ownerSVGElement) continue;
        const s = getComputedStyle(el);
        if (s.visibility === "hidden" || s.display === "none") continue;
        if (Number(s.opacity) === 0) continue;
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        const isSvg = el.ownerSVGElement != null;
        const fgRaw = isSvg && s.fill && s.fill !== "none" ? s.fill : s.color;
        const fg = parse(fgRaw);
        if (!fg) continue;
        /* An <svg> paints nothing of its own, so the ground under SVG text is
           whatever the figure frame around it is painted. */
        const bgHost = isSvg ? (el.ownerSVGElement.parentElement || el) : el;
        const bg = bgOf(bgHost);
        const cr = ratio(over(fg, bg), bg);
        const px = parseFloat(s.fontSize);
        const bold = Number(s.fontWeight) >= 700;
        const large = px >= 24 || (px >= 18.66 && bold);
        const key = fgRaw + "|" + rgb(bg) + "|" + px + "|" + bold + "|" + isSvg;
        if (seen.has(key)) continue;
        seen.add(key);
        out.push({
          text: t.slice(0, 50), el: desc(el), svg: isSvg,
          fg: fgRaw, bg: rgb(bg), px, bold, large,
          ratio: Math.round(cr * 100) / 100,
          passAA: cr >= (large ? 3 : 4.5),
          passAAStrict: cr >= 4.5,
        });
      }
      return out;
    },

    /* ---- 4. headings and the contents rail ------------------------ */
    headings() {
      const main = document.querySelector("main") || document.body;
      const text = (n) => (n.textContent || "").trim().replace(/\s+/g, " ");
      const hs = [...main.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) => ({
        level: Number(h.tagName[1]),
        text: text(h).slice(0, 70),
        id: h.id || (h.parentElement && h.parentElement.id) || "",
      }));
      const railTargets = [
        ...document.querySelectorAll("main section[id] > h2, main section[id] h3[id]"),
      ].map(text);
      const rail = document.querySelector('nav[aria-label="On this page"]');
      return {
        headings: hs,
        railTargets,
        railLinks: rail ? [...rail.querySelectorAll("a")].map(text) : null,
        allH2: [...main.querySelectorAll("h2")].map(text),
        railSlotPresent: !!document.querySelector("main aside, body aside"),
        railRendered: !!rail,
        /* The rail is sticky, and a sticky box taller than the viewport stops
           being sticky: everything past the first screenful is unreachable. */
        railHeight: rail ? Math.round(rail.getBoundingClientRect().height) : 0,
        viewportHeight: window.innerHeight,
        titles: [...document.querySelectorAll("h1")].map(text),
      };
    },

    /* ---- 5. figures ------------------------------------------------ */
    figures() {
      const figs = [...document.querySelectorAll('[role="img"]')];
      const allIds = [...document.querySelectorAll("[id]")].map((e) => e.id).filter(Boolean);
      const dupIds = allIds.filter((id, i) => allIds.indexOf(id) !== i);
      const patternIds = [...document.querySelectorAll("pattern[id]")].map((p) => p.id);
      const dupPatterns = patternIds.filter((id, i) => patternIds.indexOf(id) !== i);
      const figures = figs.map((f) => {
        const label = f.getAttribute("aria-label") || "";
        const svg = f.querySelector("svg");
        /* A labelled frame holds a drawing or a photograph. Only the drawings
           carry <text> to measure, so everything below stays keyed to the svg;
           this is here so an empty frame is still told apart from a full one. */
        const img = f.querySelector("img");
        const box = (svg || f).getBoundingClientRect();
        const boxes = (svg ? [...svg.querySelectorAll("text")] : [])
          .map((t) => ({
            t: (t.textContent || "").trim(),
            r: t.getBoundingClientRect(),
            px: parseFloat(getComputedStyle(t).fontSize),
          }))
          .filter((b) => b.t && b.r.width > 0);
        const clipped = boxes
          .filter((b) =>
            b.r.right > box.right + 1.5 || b.r.left < box.left - 1.5 ||
            b.r.bottom > box.bottom + 1.5 || b.r.top < box.top - 1.5)
          .map((b) => ({
            text: b.t,
            overLeft: Math.round(box.left - b.r.left),
            overRight: Math.round(b.r.right - box.right),
            overBottom: Math.round(b.r.bottom - box.bottom),
            overTop: Math.round(box.top - b.r.top),
          }));
        const overlaps = [];
        for (let i = 0; i < boxes.length; i++) {
          for (let j = i + 1; j < boxes.length; j++) {
            const a = boxes[i].r, b = boxes[j].r;
            const ox = Math.min(a.right, b.right) - Math.max(a.left, b.left);
            const oy = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
            if (ox > 1 && oy > 1) {
              overlaps.push({
                a: boxes[i].t, b: boxes[j].t,
                ox: Math.round(ox * 10) / 10, oy: Math.round(oy * 10) / 10,
              });
            }
          }
        }
        /* Near misses. Two labels that share a line and clear each other by a
           hair are one font-metric change away from the collision above. */
        const near = [];
        for (let i = 0; i < boxes.length; i++) {
          for (let j = i + 1; j < boxes.length; j++) {
            const a = boxes[i].r, b = boxes[j].r;
            const oy = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
            if (oy <= 1) continue;
            const gap = Math.max(a.left, b.left) - Math.min(a.right, b.right);
            if (gap >= 0 && gap < 4) {
              near.push({ a: boxes[i].t, b: boxes[j].t, gap: Math.round(gap * 10) / 10 });
            }
          }
        }
        const tiny = boxes.filter((b) => b.px < 11.9).map((b) => ({ text: b.t, px: b.px }));
        return {
          id: f.id || (svg && svg.id) || "",
          label, labelEmpty: !label.trim(),
          width: Math.round(box.width), height: Math.round(box.height),
          svgHidden: svg ? svg.getAttribute("aria-hidden") === "true" : null,
          hasSvg: !!svg, hasImg: !!img,
          textCount: boxes.length, clipped, overlaps, near, tiny,
          desc: desc(f).slice(0, 90),
        };
      });
      return { count: figs.length, figures, dupIds: [...new Set(dupIds)],
        dupPatterns: [...new Set(dupPatterns)] };
    },

    /* ---- 2/5b. marks that vanish into their own ground ------------- */
    marks() {
      const out = [];
      for (const svg of document.querySelectorAll("svg")) {
        const pageBg = bgOf(svg.parentElement || svg);
        const painted = [...svg.querySelectorAll("rect")];
        /* SVG paints in document order, so a mark's real ground is the last
           opaque rect drawn before it that covers it. Without this the site
           mark reads as an invisible stroke on every page: its trace is paper
           coloured because it sits on an ink filled tile. */
        const groundFor = (el) => {
          const r = el.getBoundingClientRect();
          let ground = pageBg;
          for (const rect of painted) {
            if (rect === el) break;
            if (!(rect.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING)) continue;
            const c = parse(getComputedStyle(rect).fill);
            if (!c || c.a < 1) continue;
            const b = rect.getBoundingClientRect();
            if (b.left <= r.left + 0.5 && b.right >= r.right - 0.5 &&
                b.top <= r.top + 0.5 && b.bottom >= r.bottom - 0.5) {
              ground = c;
            }
          }
          return ground;
        };
        for (const el of svg.querySelectorAll("rect,path,line,circle,polyline,polygon")) {
          const r = el.getBoundingClientRect();
          if (r.width < 0.5 && r.height < 0.5) continue;
          const bg = groundFor(el);
          const s = getComputedStyle(el);
          for (const pair of [["fill", s.fill], ["stroke", s.stroke]]) {
            const raw = pair[1];
            if (!raw || raw === "none" || raw.indexOf("url(") === 0) continue;
            if (pair[0] === "stroke" && parseFloat(s.strokeWidth) === 0) continue;
            const c = parse(raw);
            if (!c || c.a === 0) continue;
            const cr = ratio(over(c, bg), bg);
            if (cr < 1.15) {
              out.push({
                el: el.tagName, what: pair[0], color: raw, bg: rgb(bg),
                ratio: Math.round(cr * 100) / 100,
                w: Math.round(r.width), h: Math.round(r.height),
                fig: (el.closest('[role="img"]') || { id: "" }).id,
              });
            }
          }
        }
      }
      return out.slice(0, 40);
    },

    /* ---- 8. anything that looks unfinished -------------------------- */
    unfinished() {
      const main = document.querySelector("main") || document.body;
      const emptySections = [...main.querySelectorAll("section[id]")]
        .filter((s) => {
          const clone = s.cloneNode(true);
          clone.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((h) => h.remove());
          return (clone.textContent || "").trim().length < 20 &&
            clone.querySelectorAll("svg,img,table,li").length === 0;
        })
        .map((s) => ({ id: s.id, heading: ((s.querySelector("h2,h3") || {}).textContent || "").trim() }));
      const emptyLists = [...main.querySelectorAll("ul,ol")]
        .filter((l) => l.children.length === 0).map(desc);
      const body = main.textContent || "";
      const lorem = /lorem ipsum|dolor sit amet|\bTODO\b|\bFIXME\b|placeholder text/i.exec(body);
      return {
        emptySections, emptyLists,
        loremHit: lorem ? lorem[0] : null,
        wordCount: body.trim().split(/\s+/).filter(Boolean).length,
        hasLever: !!main.querySelector("[data-lever], .lever") ||
          /what you can do|what to do/i.test(body),
      };
    },

    /* ---- 6. focusables --------------------------------------------- */
    focusables() {
      const sel = 'a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"]),summary';
      return [...document.querySelectorAll(sel)].map((el) => {
        const r = el.getBoundingClientRect();
        return {
          el: desc(el).slice(0, 70), tag: el.tagName.toLowerCase(),
          visible: r.width > 0 && r.height > 0,
          w: Math.round(r.width), h: Math.round(r.height),
        };
      });
    },
  };
})();
`;
