import Link from "next/link";

type MessageDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MessageDetailPage({
  params,
}: MessageDetailPageProps) {
  const { id } = await params;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Message</h1>
      <p className="text-muted-foreground">
        Detail view for message <span className="font-mono">{id}</span> will be
        connected in Phase 3.
      </p>
      <Link
        href="/dashboard/messages"
        className="inline-flex text-sm text-primary underline-offset-4 hover:underline"
      >
        Back to messages
      </Link>
    </div>
  );
}
