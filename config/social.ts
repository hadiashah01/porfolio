import { personal } from "@/config/personal";

const githubDisplay = personal.github.replace(/^https?:\/\//, "");
const linkedinDisplay = personal.linkedin.replace(/^https?:\/\//, "");

export const socialLinks = {
  github: personal.github,
  linkedin: personal.linkedin,
  email: personal.email,
};

export const contactMethods = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    label: "GitHub",
    value: githubDisplay,
    href: personal.github,
  },
  {
    label: "LinkedIn",
    value: linkedinDisplay,
    href: personal.linkedin,
  },
];

export const contactFormPlaceholders = {
  name: "Your name",
  email: "you@example.com",
  subject: "What do you want to discuss?",
  message: "Share a few details about your idea or request.",
};
