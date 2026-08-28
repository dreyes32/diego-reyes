import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/content/skills";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Systems that reason, retrieve, and occupy space."
        />
        <div className="space-y-5 text-[15.5px] leading-7 text-muted">
          <p>
            I work as an AI engineer and researcher: building software that calls
            models, retrieves evidence, and ships on real infrastructure — then
            studying the 3D geometry those systems have to live inside.
          </p>
          <p>
            At Werfen I build WALT, an agentic AI system for enterprise
            workflows. Retrieval, document-grounded generation, clarification,
            and escalation are engineering problems first. At UC San Diego I
            study graph neural networks for mesh optimization, so XR scenes can
            keep the vertices that matter.
          </p>
          <p>
            HCI and Unreal Engine sit underneath that work, not on top of it. I
            care about how people move through virtual space, and I have built
            the simulation systems that make those environments behave.
          </p>
          <p className="pt-2 text-ink">
            {education.degree}, {education.minor}
            <span className="text-muted">
              {" "}
              — {education.school}, {education.dates}
            </span>
          </p>
          <p className="text-[13px] text-faint">{education.honors.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
