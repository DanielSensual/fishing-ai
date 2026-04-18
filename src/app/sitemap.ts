import { spots, speciesCatalog } from "@/lib/spots";
import { regions } from "@/lib/regions";
import type { MetadataRoute } from "next";

const BASE_URL = "https://fishing-ai-nine.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Homepage
  const homepage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/species`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/calendar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/gear`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Regional dashboards
  const regionPages: MetadataRoute.Sitemap = regions.map((r) => ({
    url: `${BASE_URL}/region/${r.slug}`,
    lastModified: now,
    changeFrequency: "hourly" as const,
    priority: 0.9,
  }));

  // Individual spot pages
  const spotPages: MetadataRoute.Sitemap = spots.map((s) => ({
    url: `${BASE_URL}/spots/${s.slug}`,
    lastModified: now,
    changeFrequency: "hourly" as const,
    priority: 0.8,
  }));

  // Species detail pages
  const speciesKeys = Object.keys(speciesCatalog);
  const speciesPages: MetadataRoute.Sitemap = speciesKeys.map((key) => ({
    url: `${BASE_URL}/species/${key}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...homepage, ...regionPages, ...spotPages, ...speciesPages];
}
