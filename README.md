[![CodeGuide](/codeguide-backdrop.svg)](https://codeguide.dev)

# CodeGuide Starter Pro

A comprehensive, modern web application starter template built with Next.js 14 and the latest technologies. This production-ready template features authentication, database integration, beautiful UI components, and a complete development setup for building scalable SaaS applications.

## ✨ Features

- 🔐 **Complete Authentication System** - Powered by Clerk with full user management
- 🗄️ **Database Integration** - Supabase with PostgreSQL, migrations, and Row Level Security
- 🎨 **Modern UI/UX** - Beautiful components with shadcn/ui, Tailwind CSS, and Framer Motion animations
- 🌙 **Dark/Light Theme** - Built-in theme switching with next-themes
- 📱 **Responsive Design** - Mobile-first approach with responsive components
- 🚀 **App Router Ready** - Built with Next.js 14 App Router for optimal performance
- 🔒 **Type-Safe Development** - Full TypeScript support with strict typing
- 📊 **Data Visualization** - Charts and analytics with Recharts
- 🎯 **Form Handling** - React Hook Form with Zod validation
- 🔄 **Real-time Updates** - Supabase real-time subscriptions
- 🛠️ **Developer Experience** - ESLint, Prettier, and excellent tooling

## 🏗️ Tech Stack

### Core Framework
- **[Next.js 14.2.23](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://typescriptlang.org/)** - Type-safe development

### Authentication & Database
- **[Clerk](https://clerk.com/)** - Complete authentication solution
- **[Supabase](https://supabase.com/)** - PostgreSQL database with real-time capabilities

### UI & Styling
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible UI components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://radix-ui.com/)** - Primitive components for accessibility
- **[Framer Motion](https://framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Zod](https://zod.dev/)** - Schema validation

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js 18+** installed ([Download here](https://nodejs.org/))
- A **[Clerk](https://clerk.com/)** account for authentication
- A **[Supabase](https://supabase.com/)** account for database
- **Git** for version control

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodeGuide-dev/mvp-agency-landing.git
   cd mvp-agency-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables (see [Configuration](#-configuration) section)

4. **Run database migrations**
   ```bash
   npx supabase db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Clerk Authentication Setup

1. Create a new application in [Clerk Dashboard](https://dashboard.clerk.com/)
2. Navigate to **API Keys** in your Clerk dashboard
3. Copy your keys to your `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

### Supabase Database Setup

1. Create a new project in [Supabase Dashboard](https://app.supabase.com/)
2. Go to **Settings > API**
3. Copy your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Complete Environment Variables

Create a `.env.local` file with the following:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── providers/        # Context providers
│   └── ui/               # UI components (shadcn/ui)
├── documentation/        # Project documentation
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries
├── public/              # Static assets
├── supabase/           # Database schema & migrations
├── types/              # TypeScript type definitions
└── utils/              # Helper functions
```

## 🎨 UI Components

This starter includes a comprehensive set of UI components powered by **shadcn/ui**:

### Layout Components
- Accordion, Collapsible, Tabs
- Sidebar, Navigation Menu
- Breadcrumb, Pagination

### Form Components
- Input, Textarea, Select
- Checkbox, Radio Group, Switch
- Calendar, Date Picker
- Command Palette

### Feedback Components
- Alert, Dialog, Toast
- Progress, Skeleton
- Hover Card, Tooltip

### Data Display
- Avatar, Badge, Card
- Table, Chart (Recharts)
- Carousel, Aspect Ratio

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 🗄️ Database Schema

The starter includes a basic Supabase schema with:

- **customers** - User profile information
- **products** - Product catalog
- **prices** - Pricing information
- **subscriptions** - User subscriptions

All tables include Row Level Security (RLS) policies for data protection.

## 📚 Documentation

The project includes comprehensive documentation in the `/documentation` folder:

- **Technical Stack Document** - Detailed breakdown of all technologies used
- **Setup Guides** - Step-by-step configuration instructions
- **Component Documentation** - Usage examples for UI components

## 🎯 Customization

### Adding New Components
```bash
npx shadcn-ui@latest add [component-name]
```

### Customizing Themes
Edit `tailwind.config.ts` to customize colors, fonts, and spacing.

### Database Changes
1. Modify schema in `/supabase/migrations/`
2. Run migrations: `npx supabase db push`
3. Update TypeScript types: `npx supabase gen types typescript`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
This starter works with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](https://codeguide.dev/docs)
- 💬 [Community Discord](https://discord.gg/codeguide)
- 🐛 [Report Issues](https://github.com/CodeGuide-dev/mvp-agency-landing/issues)
- 📧 [Email Support](mailto:support@codeguide.dev)

## 🙏 Acknowledgments

Built with ❤️ by the [CodeGuide](https://codeguide.dev) team. Special thanks to:

- [Vercel](https://vercel.com) for Next.js
- [Clerk](https://clerk.com) for authentication
- [Supabase](https://supabase.com) for database
- [shadcn](https://twitter.com/shadcn) for amazing UI components

---

**Ready to build something amazing?** 🚀

[Get Started](https://codeguide.dev) | [View Demo](https://mvp-agency-landing.vercel.app) | [Documentation](https://codeguide.dev/docs)
