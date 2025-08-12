"use client"

import { Header } from '@/components/navigation/header'
import { Hero } from '@/components/ui/animated-hero'
import { ServicesSection } from '@/components/sections/services-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
