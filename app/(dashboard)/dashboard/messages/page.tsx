import { buildMetadata } from "@/config/metadata";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { MessagesList } from "@/components/dashboard/MessagesList";

export const metadata = buildMetadata({
  title: "Contact Queries",
  description: "Manage received contact queries and user requests.",
  path: "/dashboard/messages",
  noIndex: true,
});

export default async function MessagesPage() {
  await requireAdmin();

  // Fetch all messages from Prisma
  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Contact Queries</h1>
      </div>
      <MessagesList initialMessages={messages} />
    </div>
  );
}
