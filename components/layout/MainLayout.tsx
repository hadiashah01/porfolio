import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

export type MainLayoutProps = {
  children: ReactNode;
  showScrollProgress?: boolean;
};

export function MainLayout({
  children,
  showScrollProgress = true,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {showScrollProgress ? <ScrollProgress /> : null}
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
