import Link from "next/link";
import { ReadingShell } from "@/components/shell";
import { PageHeader } from "@/components/page-parts";

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
