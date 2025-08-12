# Frontend Guideline Document

This document outlines the frontend setup, architecture, and best practices for the `mvp-agency-landing` project. It uses plain language to make the concepts clear even if you don’t have a deep technical background.

## 1. Frontend Architecture

### Framework and Libraries
- **Next.js 13+ (App Router)**: We rely on Next.js for its routing, server-side rendering (SSR), and static site generation (SSG). This gives us fast initial page loads, great SEO, and flexibility for dynamic or static content.
- **React**: Under the hood, Next.js uses React. We build each UI piece as a React component (small, reusable building blocks).
- **Clerk**: A third-party authentication service that handles sign-in, user sessions, and account management. We wrap our app in a Clerk provider so any part of the site can check who’s logged in.
- **Tailwind CSS**: A utility-first styling framework. It helps us write clean, consistent styles quickly.

### How It Supports Scalability, Maintainability, and Performance
- **Scalability**: The app is split into small components. When new features come along—like a blog section or client portal—we can add pages and components without rewriting the whole site.
- **Maintainability**: File-based routing (`app/` folder) keeps pages and layouts organized. Shared components live in `components/ui/`, so fixing or updating one button style updates every button.
- **Performance**: Next.js automatically pre-renders pages, reduces bundle size with code splitting, and lets us lazy-load heavy parts (like large images or interactive widgets).

---
## 2. Design Principles

### Usability
- Clear calls-to-action (buttons, links) guide users step by step.
- Logical content sections (hero, services, portfolio, contact).

### Accessibility
- Proper ARIA labels on interactive elements (accordions, buttons).
- Keyboard-friendly navigation and focus management.
- Sufficient color contrast for readability.

### Responsiveness
- Layouts adapt fluidly across mobile, tablet, and desktop.
- Tailwind’s responsive utilities (`sm:`, `md:`, `lg:`) make adjusting styles for breakpoints straightforward.

How We Apply These:
- Every component is tested on various screen sizes.
- We follow semantic HTML (using `<header>`, `<nav>`, `<main>`, `<section>`, etc.).
- Interactive widgets include `role` and `aria-` attributes where needed.

---
## 3. Styling and Theming

### Styling Approach
- **Tailwind CSS**: We use Tailwind for all styling. No separate CSS files per component—styles live right alongside markup via class names.
- **Global Styles**: A `globals.css` file holds base styles (fonts, body margin resets, CSS variables).

### Theming
- Tailwind’s config file defines our color palette and font choices so everything stays consistent.

### Visual Style
- Modern, flat design with a hint of depth (shadows) for interactive elements.

### Color Palette
- Primary: Indigo-600 (#4F46E5)
- Secondary: Indigo-400 (#818CF8)
- Accent: Teal-500 (#14B8A6)
- Neutral Light: Gray-100 (#F3F4F6)
- Neutral Dark: Gray-800 (#1F2937)

### Typography
- **Headings & Body**: Geist VF (loaded from `fonts/GeistVF.woff`)
- **Monospace / Code**: Geist Mono VF (`fonts/GeistMonoVF.woff`)
- Fallback: `system-ui`, `sans-serif`

---
## 4. Component Structure

- All UI pieces live in `components/ui/`, organized by type (e.g., `button.tsx`, `card.tsx`, `accordion.tsx`).
- We follow an atomic design mindset:
  - **Atoms**: Buttons, Inputs, Icons
  - **Molecules**: Card (combines image + text + button)
  - **Organisms**: Hero section (combines card, heading, button)

Why It Matters
- **Reusability**: One button component works everywhere.
- **Consistency**: Shared design language and behavior across the site.
- **Maintainability**: Fix a bug in one place, and it’s fixed everywhere.

---
## 5. State Management

- **Local State**: We use React’s built-in `useState` and `useEffect` for component-level state (e.g., toggling an accordion).
- **Authentication State**: Managed by Clerk. The Clerk provider exposes user info and session status via React Context, so any component can check `isSignedIn` or `user`.
- **Future Growth**: If we need more shared state (forms, shopping carts), we can add React Context or a lightweight library like Zustand.

---
## 6. Routing and Navigation

- **File-Based Routing**: Every folder and file under `app/` becomes a route. For example, `app/page.tsx` is the homepage.
- **Layouts**: `app/layout.tsx` wraps every page, providing global elements (header, footer, meta tags, Clerk provider).
- **Linking**: We use `next/link` for client-side navigation—click a link, and the page changes without a full reload.

User Flow
- Users land on `/` (the main landing page).
- Navigation links (in a header or footer) jump to page sections or future pages (e.g., `/contact`, `/portfolio`).

---
## 7. Performance Optimization

- **SSR & SSG**: Next.js pre-renders pages for fast first loads and SEO.
- **Code Splitting**: Only the code needed for each page loads.
- **Lazy Loading**: Large images or widgets load when they scroll into view (`dynamic import` or `next/image`).
- **Tailwind JIT**: Generates only the CSS we use, keeping the final stylesheet small.
- **Font Loading**: We preload our custom fonts to avoid layout shifts.

---
## 8. Testing and Quality Assurance

### Unit Tests
- **Jest** + **React Testing Library**: Test individual components (e.g., button renders, accordion toggles).

### Integration Tests
- Test how multiple components work together (e.g., form input + submit button).

### End-to-End (E2E) Tests
- **Cypress** or **Playwright**: Simulate real user flows (navigating sections, submitting contact form).

### Linting & Formatting
- **ESLint**: Enforces code style and best practices.
- **Prettier**: Auto-formats code for consistency.
- **Pre-commit Hooks**: Run linting and tests before code is committed.

---
## 9. Developer Tooling and Code Quality

- **Cursor AI**: An AI assistant integrated via the `.cursor/` directory to help with code suggestions, linting rules, and documentation snippets.
- **Version Control**: Git with clear commit messages and pull request reviews.
- **CI/CD**: Automatic builds and test runs on each push (e.g., via GitHub Actions).

---
## 10. Conclusion and Overall Frontend Summary

This frontend setup leverages Next.js, React, and Tailwind CSS to deliver a fast, responsive, and maintainable agency landing page. Our component-based structure, clear design principles, and robust tooling ensure:

- A consistent look and feel across the site.
- Easy onboarding for new developers.
- A foundation that scales as we add authentication, blogs, client portals, or other features.

By following these guidelines, we keep our code organized, our users happy, and our development process smooth.
