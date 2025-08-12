'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Image from 'next/image'

const stats = [
  { label: 'Years of Experience', value: '8+' },
  { label: 'Successful Projects', value: '150+' },
  { label: 'Happy Clients', value: '100+' },
  { label: 'Team Members', value: '25+' },
]

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable results that drive your business forward.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our priority. We work closely with you every step of the way.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of the curve with the latest technologies and best practices.'
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'We never compromise on quality and always deliver excellence.'
  }
]

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    bio: 'Visionary leader with 10+ years in digital transformation'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    bio: 'Full-stack expert passionate about scalable architecture'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    bio: 'UX/UI designer focused on user-centered design solutions'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We&apos;re a passionate team of developers, designers, and digital strategists 
            committed to transforming ideas into exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid gap-16 lg:gap-24">
          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 items-center"
          >
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">Our Story</Badge>
                <h3 className="text-2xl font-bold mb-4">
                  Building Digital Excellence Since 2016
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  What started as a small team of passionate developers has grown into a 
                  full-service digital agency. We&apos;ve helped startups launch their first 
                  products and supported enterprises in their digital transformation journeys.
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                  'Agile development methodology',
                  'Transparent communication',
                  'Continuous learning and improvement',
                  '24/7 support and maintenance'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
                  alt="Team working together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-border/50">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">Our Values</Badge>
              <h3 className="text-2xl font-bold">
                What Drives Us Forward
              </h3>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-border/50 hover:border-border transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">Our Team</Badge>
              <h3 className="text-2xl font-bold">
                Meet the People Behind the Magic
              </h3>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg">{member.name}</h4>
                    <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 sm:p-12">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Work Together?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let&apos;s discuss how we can help transform your ideas into exceptional digital experiences.
                </p>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}