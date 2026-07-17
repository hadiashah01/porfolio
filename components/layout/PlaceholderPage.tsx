import type { ReactNode } from "react";

import { Section } from "@/components/ui/Section";

type PlaceholderPageProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function PlaceholderPage({
  title,
  description,
  children,
}: PlaceholderPageProps) {
  return (
    <Section>
      <div className="max-w-2xl space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Placeholder
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground">{description}</p>
        {children}
      </div>
    </Section>
  );
}
