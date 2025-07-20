# Backend Structure Document

This document outlines the backend setup for the "CodeGuide Starter Lite" project. It covers the architecture, database, APIs, hosting, infrastructure, security, monitoring, and maintenance in everyday language.

## 1. Backend Architecture

### Overview
The backend is built on a serverless model using Next.js 14’s App Router. Instead of a traditional server, we rely on functions that run on demand, eliminating idle servers and enabling instant scaling.

### Key Design Patterns and Frameworks
- **Next.js App Router**: Provides file-based routing with special `route.ts` files for API endpoints and server components for data fetching.  
- **Service/Repository Pattern**: Business logic is separated into services (e.g., subscription service) and repositories (data access), making the code easy to maintain and test.  
- **Server Components & Server Actions**: Keep data fetching and mutations on the server, improving performance and avoiding extra client-side bundles.

### How It Supports Scalability, Maintainability, and Performance
- **Scalability**: Deployed on Vercel’s serverless platform. Each function scales independently under load without manual intervention.  
- **Maintainability**: Clear folder structure (`app/api`, `lib/services`, `lib/db`, etc.) separates concerns and encourages reusable code.  
- **Performance**: Data is fetched directly from the database in server components, keeping client bundles small. Caching strategies in Next.js (revalidation, incremental static regeneration) speed up common requests.

## 2. Database Management

### Database Technology
- **Type**: Relational (SQL)  
- **System**: Supabase (hosted PostgreSQL)

### Data Structure and Access
- **Tables**: Users, Products, Prices, Subscriptions.  
- **Row-Level Security (RLS)**: Supabase policies restrict who can read or write each row based on the user’s ID and role.  
- **Real-Time Updates**: Supabase Realtime pushes changes to the client in milliseconds when data is inserted, updated, or deleted.  
- **Access**: We use the official Supabase JavaScript client in server code, initialized with admin credentials for secure operations.

### Data Management Practices
- **Migrations**: Managed via Supabase CLI or dashboard—each schema change is versioned.  
- **Backups**: Automated daily backups provided by Supabase.  
- **Monitoring**: Supabase dashboard displays query performance and storage usage.

## 3. Database Schema

### Human-Readable Format
- **Users**: Store user profiles and link to Clerk user IDs. Includes email, name, and timestamps.  
- **Products**: Definitions of items or plans the app offers, with name, description, and active flag.  
- **Prices**: Tied to products. Includes amount, currency, billing interval (monthly/yearly).  
- **Subscriptions**: Tracks which user is subscribed to which price, along with status (active, canceled), and billing periods.

### SQL Schema (PostgreSQL)
```sql
-- Users table (linked to Clerk)
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Products table
CREATE TABLE products (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Prices table (linked to products)
CREATE TABLE prices (
  id UUID PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  unit_amount INTEGER NOT NULL,
  currency TEXT NOT NULL,
  interval TEXT CHECK (interval IN ('month','year')) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Subscriptions table
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  price_id UUID REFERENCES prices(id) ON DELETE RESTRICT,
  status TEXT CHECK (status IN ('active','canceled','trialing')) NOT NULL,
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

## 4. API Design and Endpoints

### Approach: RESTful
We use Next.js API Route Handlers (`app/api/.../route.ts`) to create RESTful endpoints.

### Key Endpoints
- **Authentication**  
  - Handled by Clerk middleware—no custom routes needed.  
- **GET /api/products**  
  - Returns a list of available products and their prices.  
- **GET /api/products/:id**  
  - Returns details for a single product, including price options.  
- **GET /api/subscriptions**  
  - Returns the current user’s subscriptions (requires authentication).  
- **POST /api/subscriptions**  
  - Creates a new subscription for the user.  
- **DELETE /api/subscriptions/:id**  
  - Cancels the specified subscription.  
- **GET /api/users/me**  
  - Returns profile information for the logged-in user.

### Communication Flow
1. Frontend calls an endpoint (e.g., `GET /api/products`).  
2. Next.js route handler verifies the user’s session via Clerk if needed.  
3. Handler calls a service that uses the Supabase client to query the database.  
4. Data is returned to the frontend as JSON.

## 5. Hosting Solutions

- **Vercel**: The entire Next.js app, including API routes, is deployed to Vercel’s global serverless platform.  
- **Supabase**: Hosted PostgreSQL database with real-time capabilities and built-in authentication support.  
- **Clerk**: Hosted authentication and user management.

### Benefits
- **Reliability**: Vercel and Supabase are managed services with SLAs.  
- **Scalability**: Serverless functions auto-scale under load.  
- **Cost-Effectiveness**: Pay-as-you-go pricing means low costs for small projects and automatic growth support.

## 6. Infrastructure Components

- **Global CDN**: Vercel’s edge network caches static assets and server responses close to users.  
- **Load Balancing**: Automatic in Vercel’s serverless runtime.  
- **Caching Mechanisms**:  
  - Next.js ISR (Incremental Static Regeneration) for pages that change infrequently.  
  - HTTP caching headers managed via route configurations.  
- **Edge Functions**: Small pieces of middleware (e.g., authentication checks) run at the edge for low latency.

## 7. Security Measures

- **Authentication**: Handled by Clerk, providing secure login, session management, and multi-factor support out of the box.  
- **Authorization**: Supabase Row-Level Security (RLS) ensures users can only access their own data.  
- **Transport Security**: All traffic is HTTPS.  
- **Data Encryption**: Supabase encrypts data at rest and in transit.  
- **Environment Variables**: Sensitive keys (Supabase, Clerk) are stored securely in Vercel’s dashboard—not in source code.  
- **Content Security Policy (CSP)**: Default Next.js headers with custom adjustments as needed to prevent cross-site scripting.

## 8. Monitoring and Maintenance

### Monitoring Tools
- **Vercel Analytics**: Tracks traffic, response times, and error rates.  
- **Supabase Dashboard**: Monitors database performance, query durations, and resource usage.  
- **Server Logs**: Accessible via Vercel for API route invocations and errors.

### Maintenance Strategies
- **Dependency Updates**: Regularly update Next.js, Supabase client, and other dependencies using automated tools (e.g., Dependabot).  
- **Database Migrations**: Versioned via Supabase CLI to apply schema changes safely.  
- **Health Checks**: Automated smoke tests run after each deployment to verify key endpoints.  
- **Backups & Rollbacks**: Daily database backups in Supabase; previous Vercel deployments kept for quick rollbacks.

## 9. Conclusion and Overall Backend Summary

The backend of "CodeGuide Starter Lite" combines a serverless Next.js 14 setup with managed services (Supabase for database and real-time features, Clerk for authentication) and is hosted on Vercel. This approach ensures:

- **Fast Time-to-Market**: Minimal server management.  
- **Scalability**: Automatic function and database scaling.  
- **Security**: Robust authentication, authorization, and data encryption.  
- **Maintainability**: Modular code structure and clear separation of concerns.  

Unique aspects include real-time updates via Supabase Realtime, fine-grained access control with RLS, and the modern developer experience of Next.js App Router. This backend foundation is production-ready, cost-effective, and easy to customize for future SaaS applications.
