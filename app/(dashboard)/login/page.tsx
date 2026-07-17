import { buildMetadata } from "@/config/metadata";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata = buildMetadata({
  title: "Login",
  description: "Administrator login.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Authentication will be implemented in Phase 3.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
