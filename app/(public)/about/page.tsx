import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/config/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn about background, focus areas, and career goals.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About"
      description="About page content will be implemented next in Phase 1."
    />
  );
}
