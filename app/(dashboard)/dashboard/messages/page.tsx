import { buildMetadata } from "@/config/metadata";

export const metadata = buildMetadata({
  title: "Messages",
  description: "Contact message management.",
  path: "/dashboard/messages",
  noIndex: true,
});

export default function MessagesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Messages</h1>
      <p className="text-muted-foreground">
        Contact list, search, and status updates ship in Phase 3.
      </p>
    </div>
  );
}
