import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/config/metadata";

export const metadata = buildMetadata({
  title: "Learning Journey",
  description: "Milestones and continuous learning progress over time.",
  path: "/journey",
});

export default function JourneyPage() {
  return (
    <PlaceholderPage
      title="Learning Journey"
      description="Journey page content will be implemented next in Phase 1."
    />
  );
}
