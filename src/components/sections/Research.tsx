import { SectionHeading } from "@/components/ui/SectionHeading";
import { research } from "@/content/research";
import Link from "next/link";

export function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="04"
        eyebrow="Research"
        title="Open-ended problems, not just shipped features."
        description="These entries are distinct from product work. They are questions I am still responsible for answering carefully."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {research.map((item) => (
          <article
            key={item.slug}
            className="border-t border-line pt-8"
          >
            <p className="mono text-[11px] tracking-[0.18em] text-faint uppercase">
              {item.status}
            </p>
            <h3 className="serif mt-3 text-2xl leading-snug tracking-tight">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-accent">{item.venue}</p>
            <p className="mt-5 text-[15px] leading-7 text-ink">
              <span className="mono mr-2 text-[11px] tracking-wide text-faint uppercase">
                Question
              </span>
              {item.question}
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted">{item.approach}</p>
            {item.relatedProject ? (
              <Link
                href={`/projects/${item.relatedProject}`}
                className="mt-5 inline-flex text-sm text-accent transition-colors hover:text-accent-strong"
              >
                Related case study →
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
