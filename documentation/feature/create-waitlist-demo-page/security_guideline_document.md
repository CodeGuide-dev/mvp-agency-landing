# Security Guidelines for CodeGuide Starter Lite

This document outlines security best practices and controls tailored for the CodeGuide Starter Lite Next.js 14 boilerplate. It covers secure design, implementation, and operations, ensuring a defense-in-depth posture for your SaaS applications.

---

## 1. Core Security Principles

- Security by Design: Integrate security from day one. Treat every feature with a security mindset.
- Least Privilege: Grant only the minimum permissions required (Clerk roles, Supabase RLS policies, environment scopes).
- Defense in Depth: Combine multiple controls (authentication, RLS, rate-limiting, CSP).
- Input Validation & Output Encoding: Assume all external data is untrusted.
- Fail Securely: On error, do not leak stack traces, secrets, or internal paths.
- Secure Defaults: Enable the strongest settings out of the box.

---

## 2. Authentication & Access Control

### 2.1 Clerk Integration

- Enforce **strong password policies** via Clerk’s dashboard (minimum length, complexity).
- Require **MFA** for privileged roles (admin, billing managers).
- Validate Clerk JWTs on the server using the official SDK; reject tokens with missing or expired `exp` claims.
- Use Clerk’s role management to assign fine-grained roles (e.g., `user`, `admin`, `support`).

### 2.2 Supabase Row Level Security (RLS)

- Define RLS policies per table:
  - `users` table: only `owner_id = auth.uid()` rows are accessible by the user.
  - `products`/`prices`: allow read-only to public roles, full access to admin roles.
- Test RLS policies thoroughly against edge cases (e.g., mis-configured policies that grant unintended access).

### 2.3 Session Management

- Store Clerk session tokens in **Secure**, **HttpOnly**, **SameSite=Lax** cookies.
- Enforce session timeout (idle and absolute) via Clerk configuration.
- Provide a logout endpoint that revokes Clerk sessions server-side.

---

## 3. Input Handling & Processing

- Always validate and sanitize incoming data in API routes (`/app/api/**`) and server components.
- Use built-in Next.js data validation (e.g., Zod, Yup) for REST/parsing GraphQL inputs.
- Interact with Supabase via its official SDK—avoid constructing raw SQL. Use parameterized queries.
- Sanitize HTML content before rendering (if you allow rich text) using libraries like DOMPurify.
- Validate file upload types, sizes, and strip metadata before passing to Supabase Storage. Store files outside the public folder with randomized filenames.

---

## 4. Data Protection & Privacy

- Enforce **HTTPS/TLS 1.2+** for all client–server and server–Supabase communications.
- Ensure Supabase database connections use SSL; verify host certificates.
- **Never** store PII or API keys in source code. Use environment variables and Vercel Secrets or a secrets manager (Vault, AWS Secrets Manager).
- Hash any additional credentials or tokens with Argon2 or bcrypt before persisting.
- Enable Supabase’s built-in data encryption at rest.
- Mask or redact sensitive errors; do not expose raw database errors or stack traces to clients.

---

## 5. API & Service Security

- Enforce strict **CORS** policies in `next.config.js` to allow only your production and staging domains.
- Implement request **rate limiting** and throttling on API routes using a library like `express-rate-limit` or Vercel Edge Middleware.
- Use proper HTTP verbs:
  - `GET` for reads, `POST` for creation, `PUT/PATCH` for updates, `DELETE` for removals.
- Version your APIs (`/api/v1/...`) to facilitate controlled changes.
- Return minimal data—avoid leaking internal IDs or environment-specific information.

---

## 6. Web Application Security Hygiene

- **Content Security Policy (CSP):** Define a restrictive CSP in response headers via `next.config.js` or custom `_middleware.js`:
  - Only load scripts/styles from self and vetted CDNs.
  - Disallow inline scripts/styles if possible; use nonces or hashes.
- **Security Headers:**
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: same-origin`
- **CSRF Protection:** For any custom form POSTs outside Clerk, implement anti-CSRF tokens (e.g., using `csurf`).
- **Secure Cookies:** All cookies set by your app must have `Secure`, `HttpOnly`, and `SameSite=Lax` (or `Strict`).
- **Subresource Integrity (SRI):** Apply SRI hashes on third-party scripts/styles when loading from CDNs.

---

## 7. Infrastructure & Configuration Management

- **Environment Configurations:** Keep `.env.*` files out of source control. Use Vercel’s Environment Variables feature.
- **Disable Debugging in Production:** Ensure `NEXT_PUBLIC_ENABLE_DEBUG !== true` in production builds.
- **Port & Service Exposure:** Only expose Next.js ports; disable unnecessary services on your hosting environment.
- **Harden Your Node Environment:** Run with non-root user, limit process capabilities.
- **Regular Patching:** Schedule automated dependency and system updates. Monitor for critical CVEs.

---

## 8. Dependency Management

- Use package lockfiles (`package-lock.json` or `yarn.lock`) to ensure deterministic builds.
- Integrate SCA tools (e.g., Dependabot, Snyk) to alert on vulnerable libraries.
- Perform periodic audits (`npm audit`, `yarn audit`) and update outdated or insecure dependencies promptly.
- Minimize dependencies—review each new library for necessity, maintenance status, and security reputation.

---

## 9. Monitoring, Logging, & Incident Response

- Log authentication events (login successes/failures), critical API errors, and rate-limit triggers.
- Mask PII in logs; omit full tokens or passwords.
- Integrate with a centralized logging/monitoring system (e.g., Datadog, Sentry) with alerting for anomalies.
- Define an incident response plan: roles, escalation paths, communication channels.

---

## 10. Continuous Security Validation

- Incorporate security tests into CI/CD pipelines:
  - Static Application Security Testing (SAST).
  - Dependency scanning.
  - Linter checks for unsafe patterns (e.g., use of `dangerouslySetInnerHTML`).
- Conduct periodic penetration tests and threat modeling sessions as the codebase evolves.
- Review and update this guideline whenever major features or dependencies change.

---

By following this layered approach—anchored in strong authentication, rigorous input validation, data protection, secure CI/CD, and continuous monitoring—you'll ensure that CodeGuide Starter Lite remains a trustworthy, production-ready foundation for your next SaaS project.