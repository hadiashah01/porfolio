import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "primary" }), "mt-8")}
      >
        Return home
      </Link>
    </Container>
  );
}
