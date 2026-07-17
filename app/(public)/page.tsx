import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/config/metadata";

export const metadata = buildMetadata({
  title: "Home",
  path: "/",
});

export default function HomePage() {
  return (
    <PlaceholderPage
      title="Home"
      description="Home page content will be implemented next in Phase 1."
    />
  );
}
