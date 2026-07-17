export type NavItem = {
  title: string;
  href: string;
};

export const publicNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Journey", href: "/journey" },
  { title: "Contact", href: "/contact" },
];

export const dashboardNav: NavItem[] = [
  { title: "Overview", href: "/dashboard" },
  { title: "Messages", href: "/dashboard/messages" },
];
