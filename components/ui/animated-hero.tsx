import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { MoveRight, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import Image from 'next/image'

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ['Modern', 'Full-stack', 'Secure', 'Scalable', 'Powerful'], [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-800/20" />
      
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center gap-12 py-20 lg:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="animate-float"
          >
            <a
              href="https://codeguide.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-3 group transition-transform hover:scale-105 duration-300"
            >
              <div className="p-2 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image src="/codeguide-logo.png" alt="CodeGuide" width={42} height={42} className="rounded-lg" />
              </div>
              <span className="logo-text text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CodeGuide
              </span>
            </a>
          </motion.div>
          
          <div className="flex flex-col gap-8 items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-inter font-extrabold max-w-4xl text-center text-5xl tracking-tight md:text-7xl lg:text-8xl"
            >
              <span className="relative flex w-full justify-center overflow-hidden text-center md:mb-2">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 30 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -100 : 100,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                Starter Kit
                <span className="ml-3 px-4 py-2 text-base font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg">
                  Pro
                </span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-3xl text-center text-lg leading-relaxed tracking-tight text-gray-600 dark:text-gray-400 md:text-xl lg:text-2xl font-medium"
            >
              Start building with a modern web application template featuring{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">authentication</span>,{' '}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">database integration</span>, and{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">premium components</span>.
              <br className="hidden md:block" />
              Built with Next.js 14, Clerk, and Supabase.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="gap-4 px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Started <MoveRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-4 px-8 py-6 text-lg font-semibold border-2 border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              <PhoneCall className="h-5 w-5" /> Book a Demo
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Trusted by developers at
            </p>
            <div className="flex items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
