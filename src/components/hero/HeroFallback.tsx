export function HeroFallback() {
  return (
    <div
      className="flex h-full min-h-[280px] items-center justify-center"
      aria-hidden
    >
      <svg viewBox="0 0 200 200" className="h-56 w-56 text-accent sm:h-64 sm:w-64">
        <path
          d="M58 58c10-22 38-32 64-22 22 8 34 28 28 48-4 14-16 24-32 28 16 4 28 16 30 32 4 24-10 46-36 54-24 8-50 0-62-18"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="58" cy="58" r="3" fill="currentColor" />
        <circle cx="138" cy="100" r="3" fill="currentColor" />
        <circle cx="58" cy="152" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}
