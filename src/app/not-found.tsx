import type { Metadata } from "next";
import Link from "next/link";
import { ReadingShell } from "@/components/shell";
import { PageHeader } from "@/components/page-parts";

/**
 * The one page on the site that asks not to be indexed. It is not content, it
 * has no address of its own, and a search result landing on it is a dead end
 * for whoever clicked.
 *
 * Both lines are needed. Next writes its own `noindex` onto this route, but
 * the root layout's `index, follow` is inherited alongside it, and two tags
 * contradicting each other is a worse instruction than one repeated. The
 * canonical goes for the same reason: inherited, it would point every mistyped
 * address at the home page.
 */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <ReadingShell>
      <PageHeader
        title="Page not found"
        standfirst="That page does not exist. The address may be mistyped, or it may have changed."
      />
      <Link href="/" className="text-accent underline underline-offset-4">
        Back to the start
      </Link>
    </ReadingShell>
  );
}
