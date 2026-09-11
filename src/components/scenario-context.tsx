"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import type { ScenarioId } from "@/content/types";

const STORAGE_KEY = "scenario";

interface ScenarioState {
  scenario: ScenarioId;
  setScenario: (id: ScenarioId) => void;
}

const Ctx = createContext<ScenarioState | null>(null);

/**
 * A layout effect commits before paint, and this one used to be documented as
 * the reason a reader who chose the crustal scenario never sees a frame of
 * Cascadia. It is not. The paint a layout effect precedes is the hydration
 * commit's, not the exported HTML's, and the browser has already shown that.
 * Measured on `/scenarios/` with `scenario=crustal` stored: the first animation
 * frame at +105 ms carries Cascadia and the switch lands at +139 ms.
 *
 * The flash is accepted, not fixed, and the reasoning is worth keeping. A
 * blocking inline script in `<head>` can cure a flash whose whole expression is
 * an attribute — a theme, a density. This one is not: the two scenarios differ
 * in the band on every cell and in the words beside it, so the only way CSS
 * could swap them before hydration is for the export to carry both copies and
 * hide one. That doubles the page, and it hands a reader without JavaScript two
 * contradictory sets of bands at once. A third of a second of the default
 * scenario is the cheaper of the two, and the default is the scenario the page
 * is written around.
 *
 * A layout effect is still the right hook for the correction it can make: it
 * runs before the hydrated frame, so the switch happens once rather than twice.
 * On the server there is no paint and no `localStorage`, so the passive effect
 * stands in and React does not warn.
 *
 * This is also why there is no `ready` flag. One existed, and nothing read it,
 * because a flag cannot suppress a paint that has already happened: anything
 * consuming it would have had to hide the bands in the exported HTML too, which
 * costs every reader without JavaScript the content.
 */
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function ScenarioProvider({ children }: { children: ReactNode }) {
  const [scenario, setScenarioState] = useState<ScenarioId>("cascadia");

  useIsomorphicLayoutEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "cascadia" || stored === "crustal")
        setScenarioState(stored);
    } catch {
      /* private mode, blocked storage — the default stands */
    }
  }, []);

  const setScenario = useCallback((id: ScenarioId) => {
    setScenarioState(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <Ctx.Provider value={{ scenario, setScenario }}>{children}</Ctx.Provider>
  );
}

export function useScenario(): ScenarioState {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useScenario must be used inside ScenarioProvider");
  return ctx;
}
