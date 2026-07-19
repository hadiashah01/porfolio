# Portfolio

A production-ready personal portfolio and internship project built with **Next.js, TypeScript, Tailwind CSS, Prisma, Supabase, Resend, and Google reCAPTCHA v3**.

## Table of Contents

- [Live Demo](#live-demo)
- [Project Status](#project-status)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Deployment](#deployment)
- [Internship Project](#internship-project)
- [License](#license)

## Live Demo

**Production:** https://portfolio-hadia01.vercel.app

## Project Status

✅ Completed

This project was developed as part of a full-stack internship assignment and includes a responsive portfolio website, contact management system, secure admin authentication, and deployment on Vercel.

## Features

- Responsive portfolio website
- About, Projects, Journey and Contact pages
- Contact form with validation
- Contact messages stored in Supabase via Prisma
- Email notifications using Resend
- Secure admin authentication
- Admin dashboard
- View contact messages
- Update message status
- Google reCAPTCHA v3 support
- Login rate limiting
- Dark / Light theme
- Production deployment on Vercel

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Prisma ORM
- Supabase (PostgreSQL)
- Resend
- React Hook Form
- Zod
- Google reCAPTCHA v3
- Framer Motion
- Lucide React
- next-themes
- ESLint
- Prettier
- Vercel

## Getting Started

```bash
npm install
npm run dev
```

Create a `.env.local` file using `.env.example`.

## Available Scripts

| Command | Description |
|---------|-------------|
| npm run dev | Start development server |
| npm run build | Create production build |
| npm run start | Start production server |
| npm run lint | Run ESLint |
| npm run format | Format code |
| npm run format:check | Check formatting |

## Project Structure

```text
app/
components/
lib/
prisma/
public/
docs/
```

## Deployment

The application is deployed on **Vercel**.

Production URL:

https://portfolio-hadia01.vercel.app

## Internship Project

This project was developed as part of a full-stack web development internship. It demonstrates:

- Modern Next.js development
- Database integration with Prisma and Supabase
- Authentication and authorization
- Secure API development
- Form validation
- Email integration
- Production deployment
- Responsive UI development

## Documentation

### Planning

- [Project Plan](./docs/planning/project-plan.md)
- [Roadmap](./docs/planning/roadmap.md)

### Design

- [UI Guidelines](./docs/design/ui-guidelines.md)
- [Design System](./docs/design/design-system.md)

### Architecture

- [Architecture Overview](./docs/architecture/architecture.md)

### Deployment

- [Vercel Deployment](./docs/deployment/vercel.md)
- [Environment Variables](./docs/deployment/environment-variables.md)
