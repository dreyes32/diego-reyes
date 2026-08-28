import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="05"
        eyebrow="Technical skills"
        title="Tools demonstrated in the work above."
        description="Grouped by use. No proficiency bars. Nothing listed here that the rest of the site does not support."
      />

      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.label}>
            <h3 className="mono text-[11px] tracking-[0.2em] text-accent uppercase">
              {group.label}
            </h3>
            <ul className="mt-4 space-y-2 text-[15px] text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
