# PROJECT_STRUCTURE.md

# Project Structure

## Purpose

This document defines the official folder and file organization for the portfolio project. Every file should have a clear responsibility, making the project easier to navigate, maintain, and extend.

---

# Root Structure

```
portfolio/

├── app/
├── components/
├── config/
├── docs/
├── hooks/
├── lib/
├── prisma/
├── providers/
├── public/
├── styles/
├── types/
├── utils/

├── .env.example
├── next.config.ts
├── middleware.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# app/

Contains all routes using the Next.js App Router.

```
app/

├── (public)/
│   ├── page.tsx
│   ├── about/
│   ├── projects/
│   ├── journey/
│   └── contact/
│
├── (dashboard)/
│   ├── login/
│   └── dashboard/
│
├── api/
│
├── not-found.tsx
├── error.tsx
├── loading.tsx
└── layout.tsx
```

---

# components/

```
components/

├── ui/
├── layout/
├── sections/
├── forms/
└── dashboard/
```

---

# hooks/

Reusable React hooks.

Examples

- useTheme
- useScrollProgress
- useLocalStorage

---

# lib/

Application services.

Examples

- prisma.ts
- supabase.ts
- resend.ts
- auth.ts

---

# utils/

Helper functions.

Examples

- formatDate
- cn
- slugify

---

# providers/

Application providers.

Examples

- ThemeProvider
- SessionProvider

---

# prisma/

Contains

- schema.prisma
- migrations

---

# public/

Static assets.

```
public/

images/

icons/

logos/

og/

favicons/
```

---

# styles/

Global styles.

Variables.

Animations.

---

# types/

Shared TypeScript types.

---

# config/

Application constants.

Examples

- navigation.ts
- site.ts
- metadata.ts

---

# docs/

Project documentation.

Planning.

Design.

Deployment.

Architecture.

---

# File Naming

Components

PascalCase

Hooks

camelCase

Utilities

camelCase

Routes

kebab-case

---

# Architecture Rule

Every file should have a single responsibility.

Never create folders "just in case."

Add folders only when required.