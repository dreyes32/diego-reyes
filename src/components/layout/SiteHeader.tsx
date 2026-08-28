"use client";

import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors",
        scrolled || open
          ? "border-line bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="serif max-w-[68%] text-[14px] leading-tight tracking-tight sm:max-w-none sm:text-[17px]">
          {site.fullName}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          {site.resumeAvailable ? (
            <a
              href={site.resumeHref}
              className="text-[13px] text-accent transition-colors hover:text-accent-strong"
            >
              Resume
            </a>
          ) : null}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="mono text-lg">
              {open ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line px-5 py-6 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="serif text-2xl"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {site.resumeAvailable ? (
              <li>
                <a href={site.resumeHref} className="serif text-2xl text-accent">
                  Resume
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
