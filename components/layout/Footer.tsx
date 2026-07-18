import Link from "next/link";

import { siteConfig } from "@/config/site";
import { publicNav } from "@/config/navigation";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold">{siteConfig.name}</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          {publicNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <a
            href={siteConfig.links.github}
            className="transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            className="transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.email}
            className=" transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </Container>

      <Container className="border-t border-border py-4">
        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
