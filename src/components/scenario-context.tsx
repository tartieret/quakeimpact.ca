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
 * The stored preference has to be applied before the browser paints, or a
 * reader who chose the crustal scenario sees a frame of Cascadia bands first.
 * A layout effect is committed before paint; a passive effect is not. On the
 * server there is no paint and no `localStorage`, so the passive effect stands
 * in and React does not warn.
 *
 * This is why there is no `ready` flag. One existed, and nothing read it,
 * because a flag cannot suppress a paint that has already happened — anything
 * consuming it would have had to hide the bands in the exported HTML too,
 * which costs every reader without JavaScript the content. Fixing when the
 * preference is applied removes the flash instead of covering it.
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
