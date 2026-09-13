"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type {
  PointerEvent as ReactPointerEvent,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  ReactNode,
} from "react";

/**
 * The viewport every map on this site is drawn into: a fixed-aspect pane the
 * reader can pan and zoom, with the map's own geometry passed in as children.
 *
 * Read `README.md` beside this file first. A map bends two of its rules, and
 * both bends are forced by the same fact. A map is a measurement of ground,
 * not a chart of a domain.
 *
 * - **A map pane has a `viewBox`, and no other figure does.** The no-viewBox
 *   rule exists to stop a viewBox scaling *type*: a label sized for a phone is
 *   oversized on a laptop. A map pane holds no type at all. Every word, the
 *   heading, the finding, the scale and the legend, is outside the pane, in
 *   HTML that reflows and stays the same physical size at every width. So the
 *   rule's reason does not reach inside the pane, and a viewBox is what makes
 *   zooming possible at all.
 * - **A map pane is a Client Component.** Panning and zooming is interaction,
 *   which is the one thing `CLAUDE.md` allows `"use client"` for. The geometry
 *   is still drawn on the server and handed in as `children`, so the vendored
 *   data and the path building never reach the browser bundle.
 *
 * What it is careful to do:
 *
 * - **It works with JavaScript off.** Server rendered, the pane shows the whole
 *   window at a legible size. The controls appear only once mounted, so
 *   nothing is offered that cannot be used.
 * - **It never hijacks the page.** A bare wheel scrolls the article, as a
 *   reader expects. Zooming is Ctrl and wheel, a trackpad pinch, the buttons
 *   or the keyboard. On a touch screen one finger scrolls the page until the
 *   reader has zoomed in, and only then does a drag pan the map.
 * - **The scale bar cannot lie.** It is sized as a fraction of the visible
 *   window rather than in pixels, so it is recomputed from the zoom itself and
 *   states a round number of kilometres at every magnification.
 */

/* ------------------------------------------------------------------ */
/* The view                                                            */
/* ------------------------------------------------------------------ */

/**
 * What part of the map is on screen.
 *
 * Held as fractions of the map rather than in map units, so two maps of
 * different sizes can share one view and a position in one stays the same
 * position in the other.
 */
export interface MapView {
  /** How many times the window is magnified. 1 shows the whole of it. */
  k: number;
  /** Left edge of the visible window, as a fraction of the map's width. */
  x: number;
  /** Top edge of the visible window, as a fraction of the map's height. */
  y: number;
}

/** The whole window, unmagnified. What the server renders. */
export const WHOLE_MAP: MapView = { k: 1, x: 0, y: 0 };

/**
 * The deepest zoom offered. At 16, the region's 160 km window is about 10 km
 * across, which puts a 730 m ShakeMap cell at roughly 50 px: past the point
 * where more magnification shows anything the model holds.
 */
const MAX_K = 16;

/** How far one arrow key moves, as a fraction of what is visible. */
const KEY_PAN = 0.2;

/** One press of a zoom button, or one notch of the wheel. */
const ZOOM_STEP = 1.5;

function clamp(value: number, low: number, high: number): number {
  return value < low ? low : value > high ? high : value;
}

/**
 * The one rule the view has to obey: never magnified past `MAX_K`, never
 * scrolled past an edge. Every change goes through here, so no gesture can
 * strand the reader looking at blank paper beside the map.
 */
function clampView(view: MapView): MapView {
  const k = clamp(view.k, 1, MAX_K);
  const span = 1 / k;
  return {
    k,
    x: clamp(view.x, 0, 1 - span),
    y: clamp(view.y, 0, 1 - span),
  };
}

/**
 * Zoom about a point, so the ground under the cursor stays under the cursor.
 * `fx` and `fy` are where that point sits in the pane, from 0 to 1.
 */
function zoomAbout(
  view: MapView,
  factor: number,
  fx: number,
  fy: number,
): MapView {
  const k = clamp(view.k * factor, 1, MAX_K);
  const span = 1 / view.k;
  const next = 1 / k;
  return clampView({
    k,
    x: view.x + fx * span - fx * next,
    y: view.y + fy * span - fy * next,
  });
}

/**
 * The view state, for a parent that wants several maps to move together.
 *
 * A pair of maps drawn to one scale is making a comparison, and the comparison
 * only holds while both are showing the same ground. One `useMapView` in the
 * parent, passed to both panes as props, is what keeps them in step. No
 * context and no global state, per `CLAUDE.md`.
 */
export type SetMapView = (
  next: MapView | ((current: MapView) => MapView),
) => void;

export function useMapView(): [MapView, SetMapView] {
  const [view, setView] = useState<MapView>(WHOLE_MAP);
  const set = useCallback<SetMapView>(
    (next) =>
      setView((current) =>
        clampView(typeof next === "function" ? next(current) : next),
      ),
    [],
  );
  return [view, set];
}

/* ------------------------------------------------------------------ */
/* The scale bar                                                       */
/* ------------------------------------------------------------------ */

/** Round distances a reader can hold in their head. */
const NICE_KM = [1, 2, 5, 10, 20, 50, 100, 200, 500];

/**
 * A bar of round length, sized as a percentage of the pane.
 *
 * Stating it as a percentage rather than in pixels is what lets it be correct
 * without measuring anything: the visible window is `kmWide / k` across
 * whatever width the column gives, so a 10 km bar is a known fraction of it at
 * every zoom and at every viewport.
 */
function scaleBar(kmWide: number, k: number): { km: number; percent: number } {
  const visible = kmWide / k;
  const target = visible * 0.25;
  let km = NICE_KM[0];
  for (const candidate of NICE_KM) if (candidate <= target) km = candidate;
  return { km, percent: (km / visible) * 100 };
}

/* ------------------------------------------------------------------ */
/* The pane                                                            */
/* ------------------------------------------------------------------ */

export interface MapViewerProps {
  /** What a reader who cannot see the map should be told it is. */
  label: string;
  /** The map's own coordinate space. Sets the pane's aspect ratio. */
  width: number;
  height: number;
  /** How much ground the map's full width covers, for the scale bar. */
  kmWide: number;
  /** The geometry, drawn on the server in that coordinate space. */
  children: ReactNode;
  /** Supply both to drive several panes from one view. */
  view?: MapView;
  onViewChange?: SetMapView;
}

export function MapViewer({
  label,
  width,
  height,
  kmWide,
  children,
  view: controlled,
  onViewChange,
}: MapViewerProps) {
  const [own, setOwn] = useMapView();
  const view = controlled ?? own;
  const setView = onViewChange ?? setOwn;

  const paneRef = useRef<HTMLDivElement>(null);
  /** Live pointers, so a second finger turns a drag into a pinch. */
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinchDistance = useRef(0);

  /**
   * The controls render only after mount. Server rendered, the pane is a
   * plain picture of the whole window, which is what a reader with no
   * JavaScript gets: nothing on offer that does not work.
   */
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  /** Held only so the cursor can say the map is being dragged. */
  const [dragging, setDragging] = useState(false);

  /** Where a client point sits in the pane, from 0 to 1. */
  const fractionOf = useCallback((clientX: number, clientY: number) => {
    const rect = paneRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0 || rect.height === 0) {
      return { fx: 0.5, fy: 0.5 };
    }
    return {
      fx: clamp((clientX - rect.left) / rect.width, 0, 1),
      fy: clamp((clientY - rect.top) / rect.height, 0, 1),
    };
  }, []);

  /**
   * Every change is written as an update of the view before it, never of the
   * view this render happened to see. Two zoom presses in one tick are then
   * two steps rather than one, which is what a reader who clicks twice quickly
   * expects.
   */
  const zoom = useCallback(
    (factor: number, fx = 0.5, fy = 0.5) =>
      setView((current) => zoomAbout(current, factor, fx, fy)),
    [setView],
  );

  /**
   * Ctrl and wheel zooms; a bare wheel is left alone so the article scrolls.
   * The listener is attached by hand because React's own wheel handler is
   * passive, and a passive handler cannot stop the browser's page zoom.
   */
  useEffect(() => {
    const pane = paneRef.current;
    if (!pane) return;
    function onWheel(event: WheelEvent) {
      if (!event.ctrlKey && !event.metaKey) return;
      event.preventDefault();
      const { fx, fy } = fractionOf(event.clientX, event.clientY);
      zoom(event.deltaY < 0 ? ZOOM_STEP : 1 / ZOOM_STEP, fx, fy);
    }
    pane.addEventListener("wheel", onWheel, { passive: false });
    return () => pane.removeEventListener("wheel", onWheel);
  }, [fractionOf, zoom]);

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    pointers.current.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
    });
    if (pointers.current.size === 1 && view.k === 1) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const live = pointers.current;
    const previous = live.get(event.pointerId);
    if (!previous) return;
    const rect = paneRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0 || rect.height === 0) return;

    const current = { x: event.clientX, y: event.clientY };
    live.set(event.pointerId, current);

    if (live.size >= 2) {
      const [a, b] = [...live.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchDistance.current > 0 && distance > 0) {
        const { fx, fy } = fractionOf((a.x + b.x) / 2, (a.y + b.y) / 2);
        zoom(distance / pinchDistance.current, fx, fy);
      }
      pinchDistance.current = distance;
      return;
    }

    if (view.k === 1) return;
    const dx = (current.x - previous.x) / rect.width;
    const dy = (current.y - previous.y) / rect.height;
    setView((live) => ({
      k: live.k,
      x: live.x - dx / live.k,
      y: live.y - dy / live.k,
    }));
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) pinchDistance.current = 0;
    if (pointers.current.size === 0) setDragging(false);
  }

  function onDoubleClick(event: ReactMouseEvent<HTMLDivElement>) {
    const { fx, fy } = fractionOf(event.clientX, event.clientY);
    zoom(ZOOM_STEP, fx, fy);
  }

  function onKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    const pan = (dx: number, dy: number) =>
      setView((live) => ({
        k: live.k,
        x: live.x + (dx * KEY_PAN) / live.k,
        y: live.y + (dy * KEY_PAN) / live.k,
      }));

    switch (event.key) {
      case "ArrowLeft":
        pan(-1, 0);
        break;
      case "ArrowRight":
        pan(1, 0);
        break;
      case "ArrowUp":
        pan(0, -1);
        break;
      case "ArrowDown":
        pan(0, 1);
        break;
      case "+":
      case "=":
        zoom(ZOOM_STEP);
        break;
      case "-":
      case "_":
        zoom(1 / ZOOM_STEP);
        break;
      case "0":
        setView(WHOLE_MAP);
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  const span = 1 / view.k;
  const viewBox = [view.x * width, view.y * height, width * span, height * span]
    .map((value) => Math.round(value * 1000) / 1000)
    .join(" ");

  const bar = scaleBar(kmWide, view.k);
  const zoomed = view.k > 1;

  return (
    <div className="flex flex-col gap-2">
      <div
        ref={paneRef}
        role="img"
        aria-label={label}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={onDoubleClick}
        onKeyDown={onKeyDown}
        className="relative overflow-hidden rounded border border-rule-strong bg-paper-raised"
        style={{
          aspectRatio: `${width} / ${height}`,
          /* One finger scrolls the article until the reader has zoomed in. */
          touchAction: zoomed ? "none" : "pan-y",
          cursor:
            !ready || !zoomed ? "default" : dragging ? "grabbing" : "grab",
        }}
      >
        <svg
          viewBox={viewBox}
          width="100%"
          height="100%"
          aria-hidden="true"
          focusable="false"
          className="block"
        >
          {children}
        </svg>
      </div>

      {/*
       * The scale and the controls sit under the drawing rather than on it.
       * A bar drawn over the map lands on whatever the reader has panned to,
       * which on these two maps is the densest corner of the region. Under it,
       * the bar's percentage is still a percentage of the pane's own width,
       * because this row is the pane's sibling and exactly as wide. Both the
       * bar and the buttons are direct children of the row for the same
       * reason: a percentage of a box that shrinks to fit its contents is a
       * percentage of nothing, and the scale would stop being true.
       */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-ink-faint">
        {ready ? (
          <ZoomButton
            onClick={() => zoom(1 / ZOOM_STEP)}
            disabled={view.k <= 1}
            label={`Zoom out of ${label}`}
          >
            &minus;
          </ZoomButton>
        ) : null}
        {ready ? (
          <ZoomButton
            onClick={() => zoom(ZOOM_STEP)}
            disabled={view.k >= MAX_K}
            label={`Zoom in on ${label}`}
          >
            +
          </ZoomButton>
        ) : null}
        {ready ? (
          <ZoomButton
            onClick={() => setView(WHOLE_MAP)}
            disabled={view.k === 1 && view.x === 0 && view.y === 0}
            label={`Show the whole of ${label}`}
            wide
          >
            Whole map
          </ZoomButton>
        ) : null}

        {ready ? (
          <span>
            {zoomed
              ? `${Math.round(view.k * 10) / 10} times. Drag to move, or use the arrow keys.`
              : "Whole window. Zoom in to move around."}
          </span>
        ) : null}

        {/*
         * The bar takes the row's full width as its reference and then a
         * percentage of it, which is why this wrapper is `w-full` rather than
         * shrink-to-fit: a percentage of a box sized by its contents is a
         * percentage of nothing. It also keeps the bar and the distance it
         * states on one line at phone width, where the controls beside them
         * wrap.
         */}
        <span className="flex w-full items-center gap-2">
          <span
            className="h-[3px] shrink-0 border-x border-b border-mark"
            style={{ width: `${bar.percent}%` }}
          />
          <span className="whitespace-nowrap">{bar.km} km. North is up.</span>
        </span>
      </div>
    </div>
  );
}

/** One control. A real button, so it is reachable and focusable for free. */
function ZoomButton({
  onClick,
  disabled,
  label,
  wide = false,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  label: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`${wide ? "px-2.5" : "w-7"} h-7 rounded border border-rule text-sm text-accent hover:bg-accent-soft focus-visible:bg-accent-soft disabled:text-ink-faint disabled:opacity-60 disabled:hover:bg-transparent`}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* A pair of maps that move together                                   */
/* ------------------------------------------------------------------ */

/** One map in a linked set, with the words that introduce it. */
export interface MapPane {
  key: string;
  /** What a reader who cannot see it should be told this pane is. */
  label: string;
  /** What the panel is about. */
  heading: ReactNode;
  /** The finding, written out, so it survives without the drawing. */
  value: ReactNode;
  /** What the finding is a measure of. */
  subnote: ReactNode;
  /** A caveat that belongs to this pane and not to the other. */
  note: ReactNode;
  /** The geometry, drawn on the server. */
  geometry: ReactNode;
}

/**
 * Several maps on one scale, sharing one view.
 *
 * Two maps stacked exist to be compared, and the comparison only means
 * anything while both are showing the same ground. Zooming one zooms the
 * other, so a position in one is the same position in the other at every
 * magnification, which is what the drawing claims on its face.
 */
export function LinkedMapPanes({
  panes,
  width,
  height,
  kmWide,
}: {
  panes: MapPane[];
  width: number;
  height: number;
  kmWide: number;
}) {
  const [view, setView] = useMapView();
  return (
    <div className="flex flex-col gap-6">
      {panes.map((pane, index) => (
        <div key={pane.key} className="flex flex-col gap-3">
          {index > 0 ? <hr className="mb-3 border-t border-mark" /> : null}
          <div>
            <p className="text-sm font-semibold text-ink">{pane.heading}</p>
            <p className="mt-1 text-lg font-bold text-ink">{pane.value}</p>
            <p className="text-xs text-ink-faint">{pane.subnote}</p>
          </div>
          <MapViewer
            label={pane.label}
            width={width}
            height={height}
            kmWide={kmWide}
            view={view}
            onViewChange={setView}
          >
            {pane.geometry}
          </MapViewer>
          <p className="text-xs text-ink-faint">{pane.note}</p>
        </div>
      ))}
    </div>
  );
}
