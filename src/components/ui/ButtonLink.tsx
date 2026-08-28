import { cn } from "@/lib/cn";
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm transition-colors",
    variant === "primary" && "bg-ink text-bg hover:bg-accent",
    variant === "ghost" && "border border-line text-ink hover:border-accent hover:text-accent",
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
