import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  label?: string;
};

export function Divider({ className, label, ...props }: DividerProps) {
  if (!label) {
    return (
      <hr
        className={cn("border-0 border-t border-border", className)}
        {...props}
      />
    );
  }

  return (
    <div
      className={cn("flex items-center gap-4", className)}
      role="separator"
      aria-label={label}
    >
      <div className="h-px flex-1 bg-border" />
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
