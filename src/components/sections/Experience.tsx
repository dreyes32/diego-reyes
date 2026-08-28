import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Engineering ownership, written so it can be scanned."
        description="Roles are listed as they appear in my professional record. Copy here is narrative, not a résumé dump."
      />

      <ol className="mt-14 divide-y divide-line border-y border-line">
        {experience.map((item) => (
          <li key={item.id} className="grid gap-4 py-8 md:grid-cols-[180px_1fr] md:gap-10">
            <div className="mono text-[12px] tracking-wide text-faint uppercase">
              {item.dates ? <p>{item.dates}</p> : null}
              {item.location ? (
                <p className={item.dates ? "mt-1 normal-case" : "normal-case"}>{item.location}</p>
              ) : null}
            </div>
            <div>
              <h3 className="serif text-2xl tracking-tight">{item.role}</h3>
              <p className="mt-1 text-sm text-accent">{item.organization}</p>
              <p className="mono mt-3 text-[11px] tracking-[0.16em] text-faint uppercase">
                {item.focus}
              </p>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">{item.summary}</p>
              <p className="mt-4 text-[13px] text-faint">{item.technologies.join(" · ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
