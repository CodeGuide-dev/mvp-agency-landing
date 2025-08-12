'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  index: number
}

export function ServiceCard({ icon: Icon, title, description, features, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 hover:border-border">
        <CardHeader className="space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            <CardDescription className="text-base text-muted-foreground mt-2">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-2">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}