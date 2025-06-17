# 🏭 Factory Pattern

---

## 🧩 What is Factory Pattern?

The Factory Pattern is a design pattern that creates objects without showing the exact class or constructor used. It provides a function or method that returns different types of objects based on input.

---

## ❓ Why do we need it?

In frontend development, the Factory Pattern helps us:

- Avoid repeating object creation logic.
- Create reusable, consistent components or utilities.
- Separate object creation from usage (cleaner code structure).
- Easily switch object types based on user settings, feature flags, etc.

---

## ⏱️ When should we use it?

Use the Factory Pattern when:

- You need to create many similar objects with different configurations.
- The type of object depends on dynamic conditions (user role, device, etc).
- You want to centralize and standardize how components or services are created.
- You want to hide complex logic behind a simple function.

---

## 🧪 Step-by-step Explanation

1. **Create a Factory Function** — It will return different objects depending on input (like a type or config).
2. **Define Object Blueprints** — These are the shapes or classes of objects to return (can be components, services, UI configs).
3. **Use Conditional Logic** — The factory decides what to return based on arguments.
4. **Return the Correct Object** — Final object is created and returned for use.
5. **Use the Object in Your App** — Consumers don't care how the object was made — only that it works.

📚 Learn more:
- [MDN: Factory Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [React Docs – Context](https://react.dev/learn/passing-data-deeply-with-context)
- [Vue Docs – Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)

---

## 💡 Real-world Use Cases (Frontend Focused)

- 🧭 Share global app config → (match in React/Vue example)
- 📢 Create toast/notification systems → (match in JS example)
- 🧑‍🔧 Create user role-based UI components
- 📱 Create responsive layout components (mobile/tablet/desktop)
- 🌐 Multi-language support handlers
- 🎨 Theme generators (light/dark, brand styles)
- 🔐 Feature toggle or permission-based services
- 💬 Chatbot or message component builders
- 🧪 A/B testing variants
- 📦 Dynamic component loaders in large apps (like Meta, Google)

---

## 🧑‍💻 Code Examples

### 🔹 Vanilla JavaScript

```js
// Toast Factory Example

function createToast(type, message) {
  const baseToast = {
    message,
    timestamp: new Date().toISOString(),
    dismiss: () => console.log("Toast dismissed"),
  };

  switch (type) {
    case 'success':
      return { ...baseToast, icon: '✅', style: 'green' };
    case 'error':
      return { ...baseToast, icon: '❌', style: 'red' };
    case 'info':
      return { ...baseToast, icon: 'ℹ️', style: 'blue' };
    default:
      return { ...baseToast, icon: '🔔', style: 'gray' };
  }
}

// Usage
const toast = createToast('error', 'Something went wrong!');
console.log(toast); // shows error toast config
```

## 🔹 React (Functional Component + Hooks)

```jsx
// Theme Factory with Context

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const themeFactory = (mode) => {
  if (mode === 'dark') {
    return { background: '#111', text: '#fff' };
  }
  return { background: '#fff', text: '#000' };
};

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light');
  const theme = themeFactory(mode);

  return (
    <ThemeContext.Provider value={{ theme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

// In your component
/*
import { useTheme } from './ThemeProvider';

function Header() {
  const { theme } = useTheme();
  return <header style={{ background: theme.background, color: theme.text }}>My App</header>;
}
*/
```

## 🔹 Vue 3 (Composition API)

```vue

<script setup>
// Role-based UI Factory

import { ref, computed } from 'vue';

const userRole = ref('admin');

function componentFactory(role) {
  const components = {
    admin: { title: 'Admin Panel', accessLevel: 'all' },
    editor: { title: 'Editor Tools', accessLevel: 'write' },
    viewer: { title: 'Viewer Dashboard', accessLevel: 'read' },
  };
  return components[role] || { title: 'Guest View', accessLevel: 'none' };
}

const currentComponent = computed(() => componentFactory(userRole.value));
</script>

<template>
  <div>
    <h1>{{ currentComponent.title }}</h1>
    <p>Access: {{ currentComponent.accessLevel }}</p>
  </div>
</template>
```
