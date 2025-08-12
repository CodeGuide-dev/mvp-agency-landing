import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ['Beautiful', 'Scalable', 'Modern', 'Powerful', 'Professional'], [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2500)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen w-full bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-12 py-20 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-row items-center gap-3 rounded-full bg-muted/50 px-4 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-muted-foreground">Trusted by 100+ businesses</span>
            </div>

            <div className="flex flex-col gap-6 text-center">
              <h1 className="font-regular max-w-4xl text-4xl tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                Build
                <span className="relative mx-4 inline-block overflow-hidden">
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute inset-0 font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 100 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                      animate={
                        titleNumber === index
                          ? { y: 0, opacity: 1 }
                          : { y: titleNumber > index ? -100 : 100, opacity: 0 }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
                <br />
                Digital Solutions
              </h1>

              <p className="mx-auto max-w-3xl text-lg leading-relaxed tracking-tight text-muted-foreground sm:text-xl md:text-2xl">
                We create exceptional web applications and digital experiences that drive growth. 
                From concept to deployment, we bring your vision to life with cutting-edge technology 
                and expert craftsmanship.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button 
                size="lg" 
                className="group gap-2 px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
                onClick={scrollToContact}
              >
                Start Your Project
                <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 px-8 py-6 text-lg font-semibold"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
                <ArrowDown className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
