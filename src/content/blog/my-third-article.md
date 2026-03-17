---
title: "My Third Article"
date: "2026-03-17"
description: "A quick look at React Server Components and when to use them"
---

# ⚛️ My Third Article

This article covers **React Server Components** and how they change the way we build apps.

---

## 🌐 What are Server Components?

Server Components run on the server and never ship JavaScript to the client.

- Zero client-side bundle impact
- Direct access to databases and APIs
- Seamless composition with Client Components

---

## 🧪 Simple example

```tsx
// This component runs only on the server
export default async function UserList() {
  const users = await db.query("SELECT * FROM users")

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  )
}
```
