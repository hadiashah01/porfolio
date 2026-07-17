export const siteConfig = {
  name: "Hadia",
  title: "Hadia | Frontend Developer",
  description:
    "Portfolio of a frontend-focused developer building accessible, modern web applications with Next.js, TypeScript, and thoughtful UI.",
  keywords: [
    "frontend developer",
    "next.js",
    "typescript",
    "portfolio",
    "accessibility",
  ],
  author: "Hadia",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  themeColor: "#0f4c5c",
  metadataDefaults: {
    openGraphImage: "/og/default-og-image.png",
    twitterCard: "summary_large_image",
  },
  links: {
    github: "https://github.com/TODO",
    linkedin: "https://www.linkedin.com/in/TODO",
    email: "mailto:TODO@example.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
