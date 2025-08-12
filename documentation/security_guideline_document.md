# Security Guidelines for `mvp-agency-landing`

This document provides security-by-design guidance for the **mvp-agency-landing** repository—a Next.js 13+ based single-page landing application integrated with Clerk for future authentication. Follow these principles and recommendations to ensure a robust, maintainable, and secure codebase.

---

## 1. Security by Design
- Embed security considerations into every phase: design, implementation, testing, and deployment.  
- Review code against these guidelines during code reviews and automate checks (linters, CI gates).

## 2. Authentication & Access Control

### 2.1 Clerk Integration
- Ensure the Clerk client provider is configured with environment variables (e.g., `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`) loaded via a secure secrets manager (do not commit them).  
- Verify `ClerkProvider` wraps only the routes/components that truly require authentication.

### 2.2 Session Management & JWT
- Rely on Clerk’s best practices for session cookies. They should be `HttpOnly`, `Secure`, and have a reasonable expiration (`maxAge`).  
- Avoid custom JWT handling—leverage Clerk’s built-in token validation and rotation.

### 2.3 Least Privilege & Role-Based Access Control (RBAC)
- If introducing roles (e.g., `admin`, `client`), define them centrally and enforce checks server-side in API routes or Next.js `middleware.ts`.  
- Limit Clerk webhook access or API keys to only the scopes needed (e.g., user.read).

## 3. Input Handling & Output Encoding

### 3.1 Server-Side Validation
- Validate all incoming data in **API routes** or **server actions** using a schema library (e.g., Zod).  
- Never trust client-side sanitization alone.

### 3.2 Prevent Injection Attacks
- Use Next.js’s built-in Parameterized Queries or ORM (e.g., Prisma) when integrating databases in the future.  
- Sanitize any dynamic values used in HTML or CSS (e.g., classNames).

### 3.3 Mitigate XSS & Template Injection
- When rendering user-supplied content (e.g., testimonials), apply React’s default escaping or a library like `dompurify` for rich text.  
- Enforce a strict Content Security Policy (CSP) header via `next.config.js` or Vercel settings:
  ```js
  Content-Security-Policy:
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data:;
  ```

## 4. Data Protection & Privacy

### 4.1 Transport Encryption
- Enforce HTTPS (TLS 1.2+) for all traffic. Configure HSTS in Vercel or your hosting:
  ```yaml
  strictTransportSecurity:
    maxAge: 63072000;
    includeSubDomains: true;
    preload: true;
  ```

### 4.2 Sensitive Data at Rest
- Do not store PII or secrets in plaintext. If you integrate a database later, use field-level encryption or an encrypted volumes feature.  
- Rely on Clerk for user credential storage (hashed with Argon2/bcrypt).

### 4.3 Secrets Management
- Store API keys and secrets in a managed vault or environment variables injected at runtime (Vercel Secrets, AWS Secrets Manager).  
- Ensure `.env.local` is in `.gitignore`.

## 5. API & Service Security

### 5.1 Rate Limiting & Throttling
- Implement basic rate limiting on any custom API routes (e.g., using `express-rate-limit` or Vercel Edge Middleware).  
- Protect forms (e.g., contact form) from spam via CAPTCHA or honeypots.

### 5.2 CORS & HTTP Methods
- If the app exposes any JSON API, configure CORS to trusted origins only.  
- Enforce correct HTTP verbs (`GET` for reads, `POST` for submissions).

## 6. Web Application Security Hygiene

### 6.1 Security Headers
- Set the following headers in `next.config.js` or at the edge:
  - `Strict-Transport-Security` (HSTS)
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: geolocation=(), microphone=()`

### 6.2 CSRF Protection
- If you later integrate server-rendered forms or state-changing API routes, use a CSRF token library like `next-csrf` or `csrf` middleware.

### 6.3 Secure Cookies
- Ensure any cookies you set include `Secure; HttpOnly; SameSite=Lax` at minimum.

## 7. Infrastructure & Configuration Management

### 7.1 Server Hardening
- Disable default Next.js debugging in production (`NEXT_PUBLIC_NODE_ENV=production`).
- Limit public file uploads—currently no upload feature, but if added, store files outside `public/` and scan them for malware.

### 7.2 Dependency & Patch Management
- Use a lockfile (`package-lock.json` or `yarn.lock`) and audit dependencies regularly (`npm audit`).  
- Subscribe to vulnerability alerts for your repositories.

## 8. Dependency Management

- Vet all third-party UI/utility libraries. Prefer actively maintained packages.  
- Remove unused dependencies to minimize the attack surface.  
- Automate checks with SCA tools (e.g., GitHub Dependabot, Snyk).

## 9. Testing & Monitoring

- Write unit tests for security-sensitive code (Clerk wrapper, API routes).  
- Implement end-to-end tests for authentication flows.  
- Monitor runtime logs for unauthorized access attempts, using a centralized logging service.

## 10. Accessibility & Performance (Supporting Security)
- Enforce ARIA attributes on all interactive components (accordions, buttons) to prevent misuse.  
- Ensure no sensitive data leaks through performance profiling or debug logs.

---

By following these guidelines, the **mvp-agency-landing** project will maintain a strong security posture, safeguarding both user data and application integrity while enabling future growth. Regularly review and update this document as the application evolves.