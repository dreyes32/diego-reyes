import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/content/projects";
import Link from "next/link";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="03"
        eyebrow="Selected work"
        title="Technical evidence, not a card grid."
        description="Each project is a system I built or owned. Open a case study for architecture, constraints, and what I will not disclose."
      />

      <ol className="mt-14">
        {featuredProjects.map((project, index) => (
          <li
            key={project.slug}
            className="border-t border-line py-10 last:border-b"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group grid gap-6 md:grid-cols-[88px_1fr_auto] md:items-start"
            >
              <span className="mono text-[12px] text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="mono text-[11px] tracking-[0.18em] text-accent uppercase">
                  {project.category}
                </p>
                <h3 className="serif mt-2 text-3xl tracking-tight transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
                  {project.summary}
                </p>
                <p className="mt-4 text-[13px] text-faint">
                  {project.technologies.slice(0, 5).join(" · ")}
                </p>
              </div>
              <span className="mono text-[12px] text-faint transition-transform group-hover:translate-x-1 group-hover:text-accent">
                Case study →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
