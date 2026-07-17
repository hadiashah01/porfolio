export const siteConfig = {
  name: "Rehan",
  title: "Rehan | Frontend Developer",
  description:
    "Portfolio of a frontend-focused developer building accessible, modern web applications with Next.js, TypeScript, and thoughtful UI.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  author: "Rehan",
  email: "hello@example.com",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:hello@example.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
