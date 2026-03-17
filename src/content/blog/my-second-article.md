---
title: "My Second Article"
date: "2026-03-17"
description: "Exploring TypeScript generics and how they can make your code more flexible"
---

# 🧩 My Second Article

This is the second article on my blog, diving into **TypeScript generics**.

---

## 💡 What are generics?

Generics let you write reusable, type-safe code without sacrificing flexibility.

- Avoid code duplication
- Keep full type inference
- Works with functions, classes, and interfaces

---

## 🧪 Simple example

```ts
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello") // "hello"
identity<number>(42)      // 42
```
