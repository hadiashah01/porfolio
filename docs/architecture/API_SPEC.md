# API_SPEC.md

# API Specification

## Purpose

Defines every API endpoint used by the application.

---

# Contact

POST

/api/contact

Creates a new contact message.

Validation

Zod

Returns

Success

Validation Error

Server Error

---

# Authentication

POST

/api/login

Authenticates administrator.

---

POST

/api/logout

Ends current session.

---

# Dashboard

GET

/api/messages

Returns all contact messages.

---

GET

/api/messages/:id

Returns single message.

---

PATCH

/api/messages/:id

Updates message status.

---

# Response Format

Success

```

{
success: true,
data: {}
}

```

Error

```

{
success:false,
message:"..."
}

```

---

# Validation

Client

Server

Database

Validation required.

Never trust client input.