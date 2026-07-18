import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { formatDate } from "@/utils/formatDate";
import { MessageDetailForm } from "./MessageDetailForm";

type MessageDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MessageDetailPage({
  params,
}: MessageDetailPageProps) {
  await requireAdmin();

  const { id } = await params;
  const message = await prisma.contactMessage.findUnique({
    where: { id },
  });

  if (!message) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Query Details</h1>
        <Link
          href="/dashboard/messages"
          className="text-sm text-muted-foreground hover:text-foreground font-semibold"
        >
          &larr; Back to Queries
        </Link>
      </div>

      <Card>
        <CardHeader className="border-b border-border pb-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-xl">{message.subject}</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">
                Submitted on {formatDate(message.createdAt)}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sender Name</p>
              <p className="text-sm font-medium mt-1 text-foreground">{message.name}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sender Email</p>
              <p className="text-sm font-medium mt-1">
                <a href={`mailto:${message.email}`} className="text-primary hover:underline font-semibold">
                  {message.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</p>
            <div className="text-sm mt-2 p-4 bg-muted/30 rounded-md whitespace-pre-wrap leading-relaxed text-foreground border border-border">
              {message.message}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <MessageDetailForm messageId={message.id} initialStatus={message.status} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
