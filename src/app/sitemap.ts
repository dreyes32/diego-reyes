import { site } from "@/content/site";
import { projects } from "@/content/projects";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date() },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
