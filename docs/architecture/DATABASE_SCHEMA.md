# DATABASE_SCHEMA.md

# Database Schema

## Database

Supabase PostgreSQL

ORM

Prisma

---

# ContactMessage

Fields

- id
- name
- email
- subject
- message
- status
- createdAt
- updatedAt

---

Status Enum

- unread
- read
- responded
- archived

---

# AdminUser

Managed through Supabase Auth.

No custom authentication table required.

---

# Relationships

Current Version

Admin

↓

Contact Messages

(No direct relation required.)

---

# Indexes

Email

Status

CreatedAt

---

# Future Tables

Projects

Blog

Categories

Tags

Testimonials

Analytics

Visitors

Certificates

Experience

Education

---

# Migration Strategy

Every schema change should use Prisma migrations.

Never modify production data manually.