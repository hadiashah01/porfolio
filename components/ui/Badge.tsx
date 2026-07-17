import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-pill px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        filled: "bg-primary text-primary-foreground",
        outline: "border border-border bg-transparent text-foreground",
        soft: "bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "soft",
    },
  },
);

export type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { badgeVariants };
