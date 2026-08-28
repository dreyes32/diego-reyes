import { ButtonLink } from "@/components/ui/ButtonLink";
import { getProject, projects } from "@/content/projects";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

const sections = [
  ["Problem", "problem"],
  ["My role", "role"],
  ["What I built", "built"],
  ["Architecture", "architecture"],
  ["Technical challenges", "challenges"],
  ["Outcome", "outcome"],
] as const;

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="mono text-[11px] tracking-[0.2em] text-accent uppercase">
        {project.category}
      </p>
      <h1 className="serif mt-4 text-4xl leading-tight tracking-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-6 text-[17px] leading-8 text-muted">{project.summary}</p>

      <dl className="mt-12 space-y-10">
        {sections.map(([label, key]) => {
          const value = project[key];
          if (!value) return null;
          return (
            <div key={key}>
              <dt className="mono text-[11px] tracking-[0.18em] text-faint uppercase">
                {label}
              </dt>
              <dd className="mt-3 text-[15.5px] leading-7 text-ink">{value}</dd>
            </div>
          );
        })}
      </dl>

      {project.technologies.length > 0 ? (
        <div className="mt-12">
          <h2 className="mono text-[11px] tracking-[0.18em] text-faint uppercase">
            Technologies
          </h2>
          <p className="mt-3 text-[15px] text-muted">{project.technologies.join(" · ")}</p>
        </div>
      ) : null}

      {project.links && project.links.length > 0 ? (
        <div className="mt-10 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <ButtonLink key={link.href} href={link.href} variant="ghost" external>
              {link.label}
            </ButtonLink>
          ))}
        </div>
      ) : null}

      {project.confidential ? (
        <p className="mt-12 border-t border-line pt-6 text-sm leading-6 text-faint">
          {project.confidential}
        </p>
      ) : null}

      <p className="mt-16">
        <Link href="/#work" className="text-sm text-accent hover:text-accent-strong">
          ← Selected work
        </Link>
      </p>
    </article>
  );
}
