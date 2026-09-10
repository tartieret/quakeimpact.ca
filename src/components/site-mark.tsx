/**
 * The site mark: the seismograph trace from src/app/icon.svg, at header size.
 * Same drawing as the favicon so the tab and the top left agree.
 */
export function SiteMark({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="32" height="32" rx="6" className="fill-ink" />
      <path
        d="M4 19 L10 19 L13 9 L17 25 L20 15 L23 19 L28 19"
        fill="none"
        className="stroke-paper"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
