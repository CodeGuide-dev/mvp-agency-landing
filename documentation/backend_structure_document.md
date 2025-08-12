# Backend Structure Document

This document outlines the backend setup for the **mvp-agency-landing** project. It covers architecture, data handling, APIs, hosting, infrastructure, security, and monitoring. The goal is to give a clear picture of how the backend works, even for readers without a deep technical background.

## 1. Backend Architecture

Overall, the backend is built on top of Next.js (version 13+). It uses the built-in API routes and server components to handle dynamic tasks. Key points:

- Next.js App Router supports both server-side rendering (SSR) and static site generation (SSG). This ensures pages load quickly and can also update in real time when needed.  
- API routes (under `/pages/api` or `/app/api`) provide small serverless functions for form submissions, health checks, etc.  
- Clerk is integrated for authentication. Clerk runs as a managed service, so user management (sign-up, sign-in, sessions) is offloaded.

How this supports project goals:
- Scalability: Vercel’s serverless functions and Clerk’s infrastructure grow automatically with traffic.  
- Maintainability: Code lives alongside the frontend. Teams can edit UI and related API code in one place.  
- Performance: Pre-rendered pages (SSG) deliver instantly, while API calls stay lightweight.

## 2. Database Management

Currently, the project does **not** run its own database server. Instead:

- User profiles and authentication data live in **Clerk** (a hosted authentication platform).  
- Landing-page content is static, baked into the app at build time—no external database needed for text or images.  
- Contact form submissions (if enabled) are sent via email or a third-party service (e.g., SendGrid) rather than stored in a database.

This approach keeps the MVP simple and avoids database overhead. If the project expands, we can introduce a dedicated database later.

## 3. Database Schema

Since there is no self-hosted SQL or NoSQL database today, we rely on Clerk’s user store. Clerk’s default user schema includes fields like:

•  **User ID** (unique identifier)
•  **Email address**
•  **Full name**
•  **Profile picture URL**
•  **Sign-up date**
•  **Session tokens**

If a future phase requires its own database (e.g., to track leads or orders), we would likely choose PostgreSQL. A simple user table might look like:

    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(100),
      created_at TIMESTAMP DEFAULT NOW()
    );

But for the current MVP, this is not in use.

## 4. API Design and Endpoints

We follow a RESTful style using Next.js API routes. Key endpoints:

- **GET /api/health**  
  Purpose: Quick status check to see if the backend is running.  
  Returns: 200 OK with a simple JSON message.

- **POST /api/contact**  
  Purpose: Receive contact form submissions from the landing page.  
  Input: `{ name, email, message }` in JSON.  
  Processing: Sends an email to the agency or stores the message in a third-party tool.  
  Returns: 200 OK on success, or 4xx on validation errors.

- **(Protected) GET /api/user**  
  Purpose: Fetch the current authenticated user’s profile.  
  Authentication: Expects a Clerk session token.  
  Returns: User details (ID, email, name).

APIs sit alongside the UI code, making it easy to see how data flows from the page to the server.

## 5. Hosting Solutions

We host on **Vercel**, the platform made by the Next.js team. Benefits:

- **Serverless functions** for API routes.  
- **Global CDN** automatically distributes static assets and pre-rendered pages close to users.  
- **Automatic scaling:** no manual server management.  
- **Free tier** suitable for an MVP, with easy upgrade paths.

DNS and SSL are handled automatically by Vercel, so we get HTTPS by default.

## 6. Infrastructure Components

Beyond Vercel and Clerk, the key pieces are:

- **Edge Caching / CDN**  
  Static assets (CSS, fonts, images) and SSG pages are cached at the edge for ultra-fast delivery.

- **Serverless Functions**  
  Next.js API routes spin up on demand. No idle servers mean lower cost.

- **Third-Party Email Service** (e.g., SendGrid or Mailgun)  
  Handles outbound emails from the contact form.

- **Custom Domain & DNS**  
  Pointed to Vercel. DNS managed through your registrar or a service like Cloudflare.

## 7. Security Measures

We follow best practices to keep user data safe:

- **HTTPS everywhere:** Vercel provides SSL certificates automatically.  
- **Clerk Authentication:** Secure, token-based sessions. Passwords and tokens never touch our code.  
- **Environment Variables:** API keys and secrets (Clerk, email service) live in Vercel’s environment settings, not in code.  
- **Input Validation:** All API routes validate incoming data to prevent injection attacks.  
- **CORS & Headers:** We set appropriate HTTP headers (Content Security Policy, X-Frame-Options) via Next.js or a custom middleware.

## 8. Monitoring and Maintenance

To ensure reliability and catch issues early:

- **Vercel Dashboard:** Real-time logs and function usage metrics.  
- **Error Tracking (optional):** Services like Sentry can be added to catch runtime errors in both frontend and API code.  
- **Uptime Checks:** Use a simple scheduled ping (e.g., UptimeRobot) on `/api/health`.  
- **Dependency Updates:** Regularly run `npm audit` and keep Next.js and Clerk SDKs up to date.  
- **Backups (future):** If a database is introduced, schedule automated backups.

## 9. Conclusion and Overall Backend Summary

This MVP backend is designed to be lightweight, cost-effective, and easy to maintain. By leveraging:

- Next.js serverless functions for dynamic needs,  
- Clerk for secure user management,  
- Vercel for hosting and global delivery,  

we achieve a setup that meets the agency landing page’s needs today while leaving clear paths for future growth. Should the project expand to include a full client portal, data tracking, or custom business logic, the foundation is in place to add a dedicated database, more API routes, and advanced monitoring—all without a major rework.