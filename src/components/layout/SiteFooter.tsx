import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-[13px] text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.fullName}
        </p>
        <p className="max-w-md sm:text-right">
          Built as a working artifact — Next.js, TypeScript, and an interactive 3D
          model in the hero.
        </p>
      </div>
    </footer>
  );
}
