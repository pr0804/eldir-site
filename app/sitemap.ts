import type { MetadataRoute } from "next";

const baseUrl = "https://www.eldir.ca";
const locales = ["fr", "en"];
const routes = [
  "",
  "/services",
  "/contact",
  "/a-propos",
  "/mentions-legales",
  "/politique-confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
      });
    }
  }

  return entries;
}