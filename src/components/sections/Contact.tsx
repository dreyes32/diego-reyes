import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

const contacts = [
  site.links.linkedin
    ? { label: "LinkedIn", href: site.links.linkedin, hint: "Professional record" }
    : null,
  site.links.github
    ? { label: "GitHub", href: site.links.github, hint: "Public repositories" }
    : null,
  site.links.email
    ? { label: "Email", href: `mailto:${site.links.email}`, hint: site.links.email }
    : null,
].filter(Boolean) as { label: string; href: string; hint: string }[];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="06"
        eyebrow="Contact"
        title="If the work is relevant, write."
      />

      <div className="mt-12 max-w-xl space-y-4 text-[15.5px] leading-7 text-muted">
        <p>
          I am interested in AI engineering, machine learning, computer vision,
          and research roles where the work has to become software.
        </p>
        <ul className="divide-y divide-line border-y border-line">
          {contacts.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-baseline justify-between gap-6 py-4 transition-colors hover:text-accent"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="text-ink">{item.label}</span>
                <span className="mono text-[12px] text-faint">{item.hint}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
