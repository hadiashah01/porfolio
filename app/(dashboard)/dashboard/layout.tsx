import type { ReactNode } from "react";
import Link from "next/link";

import { dashboardNav } from "@/config/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden w-64 flex-col border-r border-border bg-surface p-6 md:flex">
        <p className="mb-8 text-lg font-semibold">Dashboard</p>
        <nav aria-label="Dashboard" className="space-y-2">
          {dashboardNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-border px-6">
          <p className="text-sm text-muted-foreground">
            Protected routes arrive in Phase 3
          </p>
          <ThemeToggle />
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
