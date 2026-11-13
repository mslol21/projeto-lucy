import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://novembroazul.escoladefasciaterapiaemovimento.com/sitemap.xml",
  };
}
