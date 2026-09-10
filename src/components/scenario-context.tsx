"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ScenarioId } from "@/content/types";

const STORAGE_KEY = "scenario";

interface ScenarioState {
  scenario: ScenarioId;
  setScenario: (id: ScenarioId) => void;
  /** True once the stored preference has been read, to avoid a flash. */
  ready: boolean;
}

const Ctx = createContext<ScenarioState | null>(null);

export function ScenarioProvider({ children }: { children: ReactNode }) {
  const [scenario, setScenarioState] = useState<ScenarioId>("cascadia");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "cascadia" || stored === "crustal")
        setScenarioState(stored);
    } catch {
      /* private mode, blocked storage — the default stands */
    }
    setReady(true);
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
    <Ctx.Provider value={{ scenario, setScenario, ready }}>
      {children}
    </Ctx.Provider>
  );
}

export function useScenario(): ScenarioState {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useScenario must be used inside ScenarioProvider");
  return ctx;
}
