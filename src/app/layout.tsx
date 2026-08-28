import { AmbientField } from "@/components/ambient/AmbientField";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { site } from "@/content/site";
import "@fontsource-variable/newsreader";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — ${site.role}`,
    template: `%s — ${site.fullName}`,
  },
  description: site.description,
  keywords: [
    "AI engineer",
    "machine learning",
    "computer vision",
    "graph neural networks",
    "RAG",
    "Unreal Engine",
    "Diego Zidane Reyes Gomez",
    "Diego Gomez",
  ],
  authors: [{ name: site.fullName }],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.fullName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#2f5c47",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-svh bg-bg text-ink antialiased">
        <ThemeProvider>
          <AmbientField />
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
          >
            Skip to content
          </a>
          <div className="relative z-10">
            <SiteHeader />
            <main id="content">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
