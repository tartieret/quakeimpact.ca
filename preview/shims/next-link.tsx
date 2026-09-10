import type { AnchorHTMLAttributes, ReactNode } from "react";

/** Preview-only stand-in for next/link: hash routing inside a single page. */
export default function Link({
  href,
  children,
  ...rest
}: { href: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={"#" + href}
      onClick={() => {
        window.setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 0);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
