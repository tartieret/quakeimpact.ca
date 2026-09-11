import { Suspense, useMemo, use, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { ScenarioProvider } from "@/components/scenario-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { usePathname } from "next/navigation";

import HomePage from "@/app/page";
import ScenariosPage from "@/app/scenarios/page";
import ShakingIndexPage from "@/app/shaking/page";
import ShakingDetailPage from "@/app/shaking/[slug]/page";
import AfterIndexPage from "@/app/after/page";
import SystemPage from "@/app/after/[slug]/page";
import GettingAroundPage from "@/app/getting-around/page";
import DependenciesPage from "@/app/dependencies/page";
import PreparePage from "@/app/prepare/page";
import MethodPage from "@/app/method/page";
import SourcesPage from "@/app/sources/page";
import ContributePage from "@/app/contribute/page";
import AboutPage from "@/app/about/page";
import NotFound from "@/app/not-found";

/** Renders an async page component on the client. */
function Async({
  fn,
  slug,
}: {
  fn: (p: { params: Promise<{ slug: string }> }) => Promise<ReactNode>;
  slug: string;
}) {
  const promise = useMemo(
    () => fn({ params: Promise.resolve({ slug }) }),
    [fn, slug],
  );
  return <>{use(promise)}</>;
}

function Route() {
  const path = usePathname();
  const clean = path.replace(/\/+$/, "") || "/";

  if (clean === "/") return <HomePage />;
  if (clean === "/scenarios") return <ScenariosPage />;
  if (clean === "/shaking") return <ShakingIndexPage />;
  if (clean === "/after") return <AfterIndexPage />;
  if (clean === "/getting-around") return <GettingAroundPage />;
  if (clean === "/dependencies") return <DependenciesPage />;
  if (clean === "/prepare") return <PreparePage />;
  if (clean === "/method") return <MethodPage />;
  if (clean === "/sources") return <SourcesPage />;
  if (clean === "/contribute") return <ContributePage />;
  if (clean === "/about") return <AboutPage />;

  const shaking = clean.match(/^\/shaking\/(.+)$/);
  if (shaking) return <Async key={clean} fn={ShakingDetailPage} slug={shaking[1]} />;

  const after = clean.match(/^\/after\/(.+)$/);
  if (after) return <Async key={clean} fn={SystemPage} slug={after[1]} />;

  return <NotFound />;
}

function App() {
  return (
    <ScenarioProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main" className="flex-1">
          <Suspense fallback={<div className="p-16 text-ink-faint">Loading…</div>}>
            <Route />
          </Suspense>
        </main>
        <SiteFooter />
      </div>
    </ScenarioProvider>
  );
}

const el = document.getElementById("root");
if (el) createRoot(el).render(<App />);
