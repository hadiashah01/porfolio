import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/config/metadata";

export const metadata = buildMetadata({
  title: "Projects",
  description: "Featured projects and case-study style project writeups.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PlaceholderPage
      title="Projects"
      description="Projects page content will be implemented next in Phase 1."
    />
  );
}
