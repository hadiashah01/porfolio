import { buildMetadata } from "@/config/metadata";

export const metadata = buildMetadata({
  title: "Dashboard",
  description: "Administrator dashboard overview.",
  path: "/dashboard",
  noIndex: true,
});

export default function DashboardPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
      <p className="text-muted-foreground">
        Dashboard functionality will be implemented in Phase 3.
      </p>
    </div>
  );
}
