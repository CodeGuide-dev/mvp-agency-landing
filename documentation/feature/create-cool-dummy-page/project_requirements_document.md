# Project Requirements Document (PRD)

## 1. Project Overview

**CodeGuide Starter Lite** is a modern web‐application boilerplate built on Next.js 14’s App Router. It provides a fully configured, production-ready foundation—covering secure user authentication (via Clerk), real-time data handling (via Supabase), responsive UI components (with Tailwind CSS and shadcn/ui), and dynamic animations (with Framer Motion). Developers can fork this template and instantly start building SaaS products without spending days wiring up common features.

We’re building this starter kit to save teams time, enforce best practices, and ensure a consistent developer experience. Success means a new project can spin up in under 10 minutes with:
- End-to-end authentication and role-based access control
- A connected, real-time database schema
- A polished, customizable UI with light/dark theming
- Clear code organization and tooling ready for production

---

## 2. In-Scope vs. Out-of-Scope

### In-Scope (v1.0)
- User registration, login, logout, and session management via Clerk
- Role-based access control (RBAC) enforced through Supabase Row Level Security
- Predefined Supabase schema (users, products, prices, subscriptions) with full CRUD
- Real-time updates using Supabase Realtime
- Frontend built with Next.js 14 App Router, React Hooks, and Context API
- Responsive design using Tailwind CSS + shadcn/ui component library
- Smooth animations (Framer Motion + tailwindcss-animate)
- Light/dark mode toggle (next-themes)
- Toast notifications and error boundaries (sonner + react-hot-toast)
- Basic charts (recharts) and date pickers (react-day-picker)
- Resizable panels (react-resizable-panels), command palette (cmdk), dialogs/drawers (vaul)
- Well-organized code structure for easy customization

### Out-of-Scope (Phase 1)
- Payment gateway integration (Stripe, PayPal)
- Multi-tenant or white-label support
- Mobile apps (React Native/SwiftUI)
- Offline support or service workers
- End-to-end testing suites (Cypress, Playwright)
- CI/CD pipelines beyond basic Vercel deployment guide
- Advanced analytics dashboards
- Internationalization (i18n)

---

## 3. User Flow

When a new user lands on the homepage, they see a clean hero section with a “Sign Up / Log In” button. Clicking it opens Clerk’s modal for email/password or social login. After successful authentication, the user is redirected to a Dashboard layout.

The Dashboard presents a left-hand navigation pane listing modules: Products, Prices, Subscriptions, Settings, etc. The main content area displays the selected module’s list view by default (e.g., a table of products). Users can create, edit, or delete items via modal forms. Real-time updates push changes instantly across open sessions. A theme toggle sits in the header, letting users switch between light and dark modes at any time.

---

## 4. Core Features

- **Authentication & Authorization**  
  • Clerk-powered signup/login/logout  
  • Session management and secure client-side tokens  
  • Role-based access enforced by Supabase RLS

- **Database Integration**  
  • Supabase schema (users, products, prices, subscriptions)  
  • CRUD helper functions and TypeScript types  
  • Real-time listeners for instant updates

- **Routing & Layout**  
  • Next.js 14 App Router (file-based nested routes, layouts)  
  • React Server Components for data fetching  
  • Client Components for interactive UI

- **Responsive UI**  
  • Tailwind CSS utility classes  
  • shadcn/ui component library  
  • Lucide React icons

- **Animations & Transitions**  
  • Framer Motion for complex interactions  
  • tailwindcss-animate for utility classes

- **Theming**  
  • next-themes for light/dark mode  
  • CSS variables with Tailwind JIT

- **Notifications & Error Handling**  
  • sonner for structured toast messages  
  • react-hot-toast for general alerts  
  • React error boundaries for recoverable errors

- **Auxiliary Components**  
  • react-resizable-panels for adjustable layouts  
  • vaul for accessible dialogs and drawers  
  • cmdk for keyboard-driven command palette  
  • react-day-picker for date selections  
  • recharts for basic data visualization

- **Code Quality**  
  • TypeScript throughout  
  • class-variance-authority, clsx, tailwind-merge for styling consistency  
  • Logical folder structure (app, components, lib, hooks, utils, types)

---

## 5. Tech Stack & Tools

- Frontend Framework: Next.js 14 (App Router)  
- Styling: Tailwind CSS + shadcn/ui  
- Authentication: Clerk  
- Database & Realtime: Supabase (PostgreSQL, RLS, Realtime)  
- Animations: Framer Motion, tailwindcss-animate  
- Icons: Lucide React  
- State Management: React Hooks & Context API  
- Theming: next-themes  
- Styling Utilities: class-variance-authority, clsx, tailwind-merge  
- Notifications: sonner, react-hot-toast  
- Panels & Layouts: react-resizable-panels  
- Dialogs/Drawers: vaul  
- Command Palette: cmdk  
- Date Picker: react-day-picker  
- Charts: recharts  
- Deployment: Vercel  
- IDE Plugins (optional): Cursor for AI pair programming, Windsurf for live previews  

_No AI models are directly embedded in v1.0._

---

## 6. Non-Functional Requirements

- **Performance**:  
  • Time to First Byte (TTFB) ≤ 200 ms  
  • First Contentful Paint (FCP) ≤ 1 s on 3G emulation  
- **Security & Compliance**:  
  • OWASP Top 10 mitigations (XSS, CSRF, injection)  
  • HTTPS enforcement in production  
  • Supabase RLS policies audited  
- **Scalability**:  
  • Stateles serverless functions (Vercel)  
  • Database indexes for common queries  
- **Usability & Accessibility**:  
  • WCAG 2.1 AA compliance for forms, color contrast, keyboard navigation  
  • Responsive across mobile, tablet, desktop  
- **Reliability**:  
  • 99.9% uptime expected from Clerk and Supabase  
  • Graceful error states with user-friendly messages

---

## 7. Constraints & Assumptions

- Must use Next.js 14 and App Router (no legacy Pages Router)  
- Supabase account with Realtime enabled and correct RLS policies  
- Clerk account for authentication services  
- Node.js v18+ environment  
- Environment variables (.env.local) to store API keys  
- Deployment target: Vercel (serverless functions)  
- Developers are familiar with React, TypeScript, and Git

---

## 8. Known Issues & Potential Pitfalls

- **Supabase RLS Complexity**: Improper policies can block data access.   
  Mitigation: provide example policies and thorough docs.

- **Clerk Rate Limits**: Hitting free-tier limits in early dev.  
  Mitigation: monitor usage, upgrade plan early if needed.

- **Heavy Animations**: Framer Motion can bloat bundles.  
  Mitigation: lazy-load large components, tree-shake animations.

- **App Router Learning Curve**: Beginners might mix server/client components.  
  Mitigation: include clear examples and comments in code.

- **Styling Merge Conflicts**: Tailwind-merge and clsx misuse can override styles.  
  Mitigation: document recommended patterns for conditional classes.

---

This PRD captures all foundational requirements for **CodeGuide Starter Lite**. It leaves no ambiguity: developers and AI agents alike can generate detailed technical docs (Tech Stack, Frontend Guidelines, Backend Structure, etc.) from this reference.