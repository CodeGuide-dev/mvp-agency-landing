# Frontend Guideline Document

This document outlines the frontend architecture, design principles, and technologies for the CodeGuide Starter Lite project. It’s written in plain language so anyone—technical or not—can understand how the frontend is set up and why.

## Frontend Architecture

### Frameworks and Libraries
- **Next.js 14 (App Router)**: Provides file-based routing, server and client component support, and built-in performance optimizations.
- **React**: The core UI library for building components and handling state.
- **Tailwind CSS**: Utility-first styling framework for rapid, consistent design.
- **shadcn/ui**: A set of pre-built, accessible React components styled with Tailwind.
- **Authentication & Backend Integration**:
  - **Clerk**: Manages user sign-up, sign-in, session cookies, and role-based access control (RBAC).
  - **Supabase**: Provides the database (PostgreSQL), real-time updates, and row-level security (RLS).
- **Animations**:
  - **Framer Motion** for custom, high-performance animations.
  - **tailwindcss-animate** for utility classes that trigger common animations.
- **Icons**: Lucide React
- **Utility Libraries**:
  - **class-variance-authority (CVA)** and **clsx** for conditional CSS class logic.
  - **tailwind-merge** to merge conflicting Tailwind classes gracefully.
  - **sonner** and **react-hot-toast** for user notifications.
  - **react-resizable-panels**, **vaul** (dialogs/drawers), **cmdk** (command palette), **react-day-picker**, **recharts** (charts).
- **Theme Management**: next-themes for light/dark mode support.

### How It Supports Scalability, Maintainability, and Performance
- **Scalability**: File-based routing and layouts in Next.js keep code organized as the app grows. Server components reduce client bundle sizes.
- **Maintainability**: A clear folder structure (`app/`, `components/`, `hooks/`, `utils/`, `supabase/`, `types/`) and TypeScript types make it easy to find, update, and understand code.
- **Performance**: Next.js optimizes images, splits code by route, and prioritizes server rendering. Tailwind’s JIT compiler outputs only the CSS you use, keeping stylesheets small.

## Design Principles

1. **Usability**: Interfaces follow common patterns (e.g., form flows, navigation bars) so users feel at home. Clear labels, helpful error messages, and toast notifications guide users.
2. **Accessibility**: shadcn/ui components include ARIA attributes. Color contrasts meet WCAG standards. Keyboard navigation and focus outlines are supported.
3. **Responsiveness**: Mobile-first design with Tailwind breakpoints ensures layouts adapt fluidly from phones to large desktops.
4. **Consistency**: Design tokens (colors, spacing, typography) and a shared component library deliver a unified look and predictable behavior.

### Application of Principles
- Buttons, inputs, and modals come from the same component set with shared props (size, color, disabled state).
- Forms show inline validation messages and use accessible labels.
- Navigation is sticky on desktop and collapsible on mobile.

## Styling and Theming

### Styling Approach
- **Utility-First with Tailwind CSS**: Write styles directly in class names, minimizing custom CSS files.
- **CVA & clsx**: Create reusable style variants for components (e.g., `button.primary`, `button.secondary`) while keeping class logic tidy.
- **Tailwind Merge**: Safely compose multiple Tailwind class lists.

### Theming
- **Dark/Light Mode**: Managed by `next-themes`. CSS custom properties drive color changes at runtime with no full reload.

### Visual Style
- **Overall Style**: Modern, minimal, and flat. Emphasis on whitespace and clear hierarchy.
- **Glassmorphism Accents**: Subtle translucent panels in modals or cards for depth.

### Color Palette
- Primary: #3B82F6 (Blue 500)
- Secondary: #6366F1 (Indigo 500)
- Accent: #10B981 (Green 500)
- Neutral Light: #F3F4F6 (Gray 100)
- Neutral Dark: #1F2937 (Gray 800)
- Danger: #EF4444 (Red 500)
- Warning: #F59E0B (Amber 500)
- Info: #0EA5E9 (Sky 500)

### Typography
- **Font Family**: Inter, with system-ui fallbacks.
- **Headings**: Bold, larger sizes (e.g., `text-2xl`, `text-3xl`).
- **Body**: `text-base` or `text-sm`, comfortable line height for reading.

## Component Structure

- **Atomic Components** (`Button`, `Input`, `Card`, `Modal`): Simple, single-purpose pieces.
- **Molecules & Organisms** (`FormLogin`, `NavBar`, `DataTable`): Compose atomic components into larger blocks.
- **Pages & Layouts** (`app/dashboard/page.tsx`, `app/(auth)/layout.tsx`): High-level structures that bring it all together.

Why Component-Based Architecture Matters:
- **Reusability**: Build once, use everywhere.
- **Isolation**: Easier to test and debug small pieces.
- **Consistency**: Shared props and styles keep the UI cohesive.

## State Management

- **Local State**: React’s `useState` and `useReducer` for component-level data.
- **Shared State**: React Context API for things like theme, user session, or global notifications.
- Avoids heavy libraries—keeps bundle size small.
- Data-fetching state (loading, error, data) is often handled per component with React Server Components or client hooks.

## Routing and Navigation

- **Next.js App Router** handles routing via filesystem under `app/`:
  - `page.tsx` files map to routes.
  - `layout.tsx` files wrap multiple pages with common UI (headers, footers).
  - Dynamic routes (`[id]`) for parameterized paths.
- **Nested Layouts** allow shared UI between related pages (e.g., a sidebar for all dashboard routes).
- **Link Component** (`next/link`) for client-side navigation with prefetching.

## Performance Optimization

- **Code Splitting**: Each route only loads the JavaScript and CSS it needs.
- **Lazy Loading**: React’s `lazy` and `Suspense` for rarely used components (e.g., large charts).
- **Image Optimization**: `next/image` automatically serves optimal sizes and formats.
- **Tailwind JIT**: Generates only the CSS classes used in your code.
- **Server Components**: Moves data fetching and rendering to the server, reducing client bundle size.

## Testing and Quality Assurance

- **Unit Tests**: Using Jest and React Testing Library for component logic.
- **Integration Tests**: Verifying that multiple components work together (forms, API calls).
- **End-to-End Tests**: Playwright or Cypress to simulate user flows (sign up, login, data updates).
- **Linting & Formatting**:
  - ESLint with recommended rules for React, Next.js, and TypeScript.
  - Prettier for consistent code style.
- **TypeScript**: Statically checks types, reducing runtime errors.

## Conclusion and Overall Frontend Summary

The CodeGuide Starter Lite frontend combines Next.js 14, Tailwind CSS, and a suite of best-in-class libraries to deliver a scalable, maintainable, and high-performance foundation. Accessibility, responsiveness, and developer experience are at the core of our design. By organizing components, leveraging utility classes, and using modern React patterns (Server Components, Context API), this template gets you up and running quickly while leaving room for customization and growth.

Key Takeaways:
- A clear architecture with Next.js App Router and atomic components.
- Utility-first styling with a modern color palette and Inter font.
- Simple, built-in state management via React hooks and Context.
- Robust performance optimizations out of the box.
- A testing setup that ensures reliability as the project scales.

With these guidelines in place, any developer—novice or expert—can jump in, understand the setup, and start building new features confidently.