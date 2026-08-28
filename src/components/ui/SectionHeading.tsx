import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  index: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="mono mb-3 text-[11px] tracking-[0.22em] text-faint uppercase">
        <span className="text-accent">{index}</span>
        {eyebrow ? <span className="ml-3">{eyebrow}</span> : null}
      </p>
      <h2 className="serif text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
