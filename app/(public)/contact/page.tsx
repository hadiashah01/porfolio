import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/config/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch through the contact form or professional links.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact"
      description="Contact page UI will be implemented next in Phase 1. Form submission ships in Phase 2."
    />
  );
}
