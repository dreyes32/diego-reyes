import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/content/site";
import { HeroVisual } from "./HeroVisual";

const social = [
  site.links.linkedin
    ? { label: "LinkedIn", href: site.links.linkedin }
    : null,
  site.links.github ? { label: "GitHub", href: site.links.github } : null,
  site.links.email ? { label: "Email", href: `mailto:${site.links.email}` } : null,
].filter(Boolean) as { label: string; href: string }[];

export function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
      <div>
        <p className="mono text-[11px] tracking-[0.24em] text-accent uppercase">
          {site.location}
        </p>
        <h1 className="serif mt-4 text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl lg:text-7xl">
          {site.name}
        </h1>
        <p className="mt-4 text-lg text-accent sm:text-xl">{site.role}</p>
        <p className="mt-6 max-w-xl text-[16px] leading-7 text-muted">{site.headline}</p>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">{site.summary}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href="/#work">View My Work</ButtonLink>
          {site.resumeAvailable ? (
            <ButtonLink href={site.resumeHref} variant="ghost" external>
              Resume
            </ButtonLink>
          ) : null}
        </div>

        {social.length > 0 ? (
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="mono text-[12px] tracking-wide text-faint uppercase transition-colors hover:text-accent"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <HeroVisual />
    </section>
  );
}
