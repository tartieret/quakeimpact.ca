import { useEffect, useState } from "react";

export function currentPath(): string {
  const h = window.location.hash.replace(/^#/, "");
  return h.startsWith("/") ? h : "/";
}

export function usePathname(): string {
  const [path, setPath] = useState(() => currentPath());
  useEffect(() => {
    const on = () => setPath(currentPath());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return path;
}

export function notFound(): never {
  throw new Error("not found");
}
