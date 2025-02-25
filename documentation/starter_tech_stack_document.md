# Tech Stack

This starter kit uses the following tech stack:

1. **Core Framework and Runtime:**
   - **Next.js 14.2.23**: The main framework used for building the application, providing server-side rendering, routing, and API capabilities
   - **React 18**: The underlying UI library for building components
   - **TypeScript**: Used for type-safe development

2. **Authentication and User Management:**
   - **Clerk**: Implemented via `@clerk/nextjs` for handling authentication and user management

3. **Database and Backend:**
   - **Supabase**: Used as the main database and backend service
   - Database schema includes tables for:
     - customers
     - products
     - prices
     - subscriptions
   - Row Level Security (RLS) is enabled for data protection
   - Custom types for handling pricing plans and subscription statuses

4. **UI Components and Styling:**
   - **shadcn/ui**: Beautifully designed components made with Tailwind CSS and Radix UI
   - **Radix UI**: Extensive use of accessible components including:
     - Dialog, Popover, Tooltip
     - Navigation menus
     - Form elements (Checkbox, Radio, Select)
     - Layout components (Accordion, Tabs)
   - **Tailwind CSS**: For styling with utility classes
     - Uses `tailwindcss-animate` for animations
     - Custom configuration via `tailwind.config.ts`
   - **Framer Motion**: For advanced animations
   - **Lucide React**: For icons
   - **Embla Carousel**: For carousel/slider components
   - **Sonner**: For toast notifications
   - **class-variance-authority**: For managing component variants
   - **clsx** and **tailwind-merge**: For conditional class name handling

6. **Form Handling and Validation:**
   - **React Hook Form**: For form management
   - **Zod**: For schema validation
   - **@hookform/resolvers**: For integrating Zod with React Hook Form

7. **Date Handling and Charts:**
   - **date-fns**: For date manipulation
   - **React Day Picker**: For date picking components
   - **Recharts**: For data visualization and charts

8. **Development Tools:**
   - **ESLint**: For code linting
   - **Prettier**: For code formatting with Tailwind plugin
   - **TypeScript**: For static type checking
   - **PostCSS**: For CSS processing

9. **UI/UX Features:**
   - **next-themes**: For dark/light theme switching
   - **react-resizable-panels**: For resizable layout panels
   - **vaul**: For additional UI components
   - **cmdk**: For command palette functionality

The project is set up as a modern SaaS application with:
- Full subscription management system
- Secure authentication
- Type-safe development
- Modern UI components
- Responsive design
- Server-side rendering capabilities
- API routes for backend functionality
- Database with proper security measures

This tech stack provides a robust foundation for building a scalable, secure, and user-friendly web application with all the modern features expected in a professional SaaS product, excluding payment processing.
