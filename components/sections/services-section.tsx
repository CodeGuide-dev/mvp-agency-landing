'use client'

import { motion } from 'framer-motion'
import { ServiceCard } from '@/components/ui/service-card'
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Palette,
  Search,
  Users
} from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.',
    features: [
      'React & Next.js Development',
      'Full-stack Solutions',
      'API Integration',
      'Performance Optimization'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    features: [
      'iOS & Android Apps',
      'React Native Development',
      'Cross-platform Solutions',
      'App Store Deployment'
    ]
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that convert visitors into customers.',
    features: [
      'User Experience Research',
      'Interface Design',
      'Prototyping & Testing',
      'Design Systems'
    ]
  },
  {
    icon: Globe,
    title: 'E-commerce Solutions',
    description: 'Complete online stores with secure payment processing and inventory management.',
    features: [
      'Shopify & Custom Stores',
      'Payment Integration',
      'Inventory Management',
      'Order Processing'
    ]
  },
  {
    icon: Database,
    title: 'Backend Services',
    description: 'Scalable server infrastructure and database solutions for your applications.',
    features: [
      'Database Design',
      'API Development',
      'Cloud Infrastructure',
      'Data Migration'
    ]
  },
  {
    icon: Search,
    title: 'SEO & Marketing',
    description: 'Digital marketing strategies to increase your online visibility and reach.',
    features: [
      'Search Engine Optimization',
      'Content Marketing',
      'Social Media Strategy',
      'Analytics & Reporting'
    ]
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We deliver comprehensive digital solutions to help your business thrive in the digital world. 
            From concept to deployment, we&apos;ve got you covered.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Need something custom? We adapt our services to meet your specific requirements.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Users className="h-4 w-4" />
            Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}