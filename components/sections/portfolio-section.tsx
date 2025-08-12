'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PortfolioCard } from '@/components/ui/portfolio-card'
import { Button } from '@/components/ui/button'

const portfolioProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with modern UI, secure payments, and inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    category: 'Web App',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'SaaS Dashboard',
    description: 'A comprehensive analytics dashboard with real-time data visualization and user management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Chart.js'],
    category: 'Dashboard',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    category: 'Mobile App',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Corporate Website',
    description: 'Modern corporate website with CMS integration and performance optimization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    technologies: ['Next.js', 'Strapi', 'Tailwind CSS', 'Vercel'],
    category: 'Website',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'AI Chat Platform',
    description: 'Intelligent chatbot platform with natural language processing and machine learning.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    technologies: ['Python', 'OpenAI', 'FastAPI', 'React', 'WebSocket'],
    category: 'AI/ML',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Healthcare Portal',
    description: 'Patient management system with appointment scheduling and medical record management.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'HIPAA Compliant'],
    category: 'Web App',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project'
  }
]

const categories = ['All', 'Web App', 'Mobile App', 'Dashboard', 'Website', 'AI/ML']

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects. From startups to enterprise solutions, 
            we&apos;ve delivered exceptional digital experiences across various industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              category={project.category}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of our work or discuss your project?
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="gap-2 px-8 py-6 text-lg font-semibold"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}