# Tech Stack Document

This document explains the technology choices for the **CodeGuide Starter Lite** project in everyday language. You don’t need a technical background to understand how each piece fits together and why it was chosen.

## 1. Frontend Technologies
These are the tools and libraries that shape what you see and interact with in your browser.

- **Next.js 14 (App Router)**
  - A modern framework built on React that handles page routing, data loading, and server-side rendering behind the scenes. It makes pages load faster and keeps the code organized.
- **Tailwind CSS**
  - A utility-first styling tool that provides ready-made classes (like `p-4` for padding) so developers can build responsive layouts quickly without writing custom CSS from scratch.
- **shadcn/ui**
  - A set of pre-built, customizable components (buttons, forms, dialogs) that follow modern design patterns, helping us deliver a clean and consistent look right away.
- **Framer Motion & tailwindcss-animate**
  - Animation libraries that let us add smooth transitions and micro-interactions (like fading in menus or sliding panels) to make the app feel lively.
- **Lucide React**
  - A collection of simple, customizable icons used throughout the UI for clear visual cues (e.g., menus, buttons, status indicators).
- **next-themes**
  - Handles dark/light mode toggling so users can switch themes and have their preference remembered.
- **React Context API & React Hooks**
  - Built-in React features for managing state (the app’s data) and sharing it across components without extra libraries.
- **Styling Helpers**
  - `class-variance-authority`, `clsx`, and `tailwind-merge` help combine and manage Tailwind classes in a clean, consistent way.
- **Notifications & Feedback**
  - `sonner` and `react-hot-toast` display small, temporary messages (toasts) to guide users or show errors.
- **Interactive Components**
  - `react-resizable-panels` (adjustable panels), `vaul` (dialogs and drawers), `cmdk` (keyboard command palette), `react-day-picker` (date selector), and `recharts` (charts and graphs) round out the user experience with specialized interfaces.

**How these choices enhance the experience:**
- Rapid UI development with consistent styling
- Smooth, engaging animations
- Accessible, responsive design across devices
- Clear feedback and interactive elements

## 2. Backend Technologies
These are the systems that run on the server, manage data, and power the app’s features behind the scenes.

- **Supabase (PostgreSQL + Realtime)**
  - A hosted database that stores all your data (users, products, subscriptions) in a structured way. It also pushes real-time updates to the frontend so users see changes instantly.
- **Clerk**
  - Manages user sign-up, login, password reset, and session handling out of the box. It keeps authentication secure and simple to integrate.
- **Next.js API Routes / Route Handlers**
  - Built-in server endpoints within Next.js that let us write backend logic (e.g., fetching or updating data) alongside the frontend code.
- **Supabase Row Level Security (RLS)**
  - Fine-grained permissions on the database so each user only sees or modifies data they’re allowed to.

**How these components work together:**
1. A user logs in via Clerk
2. Clerk issues a secure token
3. Next.js API Routes verify the token and fetch or update data in Supabase
4. Supabase pushes real-time changes back to the user’s browser if anyone edits shared data

## 3. Infrastructure and Deployment
This section covers where the code lives, how it’s tested and deployed, and the tools that keep everything running smoothly.

- **Version Control: Git & GitHub**
  - Every change is tracked in Git and stored on GitHub. This allows multiple developers to collaborate safely and roll back changes if needed.
- **CI/CD Pipeline: GitHub Actions**
  - Automated workflows that run tests, check code style, and build the project each time code is pushed. If everything passes, the app is automatically deployed.
- **Hosting Platform: Vercel**
  - Optimized for Next.js apps, Vercel handles building, hosting, and global content delivery (CDN) with zero configuration.
- **Environment Variables**
  - Sensitive keys (Clerk API keys, Supabase URL and secret) are stored securely in Vercel and never exposed in the code.

**Benefits of these choices:**
- Fast, reliable deployments with rollbacks
- Team collaboration without conflict
- Automatic testing to catch errors early
- Scalable hosting with global reach

## 4. Third-Party Integrations
External services that add specialized functionality without reinventing the wheel.

- **Clerk**
  - User authentication and session management service
- **Supabase**
  - Managed Postgres database with real-time capabilities
- **Vercel**
  - Deployment, hosting, and CDN for the application

**Why we use them:**
- Reduce time spent on building and maintaining these critical features
- Leverage proven, secure platforms with 24/7 uptime
- Focus development effort on unique product features

## 5. Security and Performance Considerations
How we keep data safe and the app running smoothly.

Security Measures:
- **Authentication & Authorization:** Clerk for login flows; Supabase RLS for data permissions
- **Encrypted Communication:** HTTPS everywhere to protect data in transit
- **Environment Variables:** Secrets never in code; stored securely in Vercel
- **Input Validation & Sanitization:** Prevent malicious input on both client and server

Performance Optimizations:
- **Server-Side Rendering (SSR) & Static Generation:** Next.js renders pages in advance, so users get fast load times
- **Code Splitting & Lazy Loading:** Only load the code needed for the current page or feature
- **Image & Asset Optimization:** Vercel’s built-in optimization for images and static files
- **Realtime Updates:** Supabase pushes only the changed data, avoiding full page refreshes

## 6. Conclusion and Overall Tech Stack Summary
Every technology in this starter template was chosen to balance ease of development, performance, security, and user experience:

- **Next.js 14** for a modern, high-performance React framework
- **Tailwind CSS & shadcn/ui** for rapid, consistent styling
- **Framer Motion** for engaging animations
- **Clerk & Supabase** for secure authentication and real-time data
- **GitHub Actions & Vercel** for reliable, zero-config deployments

This combination gives developers a robust, production-ready foundation that’s easy to customize and scale, while ensuring end users enjoy a fast, secure, and polished experience.