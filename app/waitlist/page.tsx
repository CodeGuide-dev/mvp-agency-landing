"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, User, Loader2, ArrowLeft } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { toast } from 'sonner'
import Image from 'next/image'
import Link from 'next/link'
import { joinWaitlist } from './actions'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{name?: string[], email?: string[]}>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    const formData = new FormData(e.currentTarget)
    const result = await joinWaitlist(null, formData)

    if (result.success) {
      setIsSubmitted(true)
      setEmail('')
      setName('')
      toast.success(result.message)
    } else {
      if (result.errors) {
        setErrors(result.errors)
      }
      if (result.message) {
        toast.error(result.message)
      }
    }
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-lg text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20"
            >
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            </motion.div>
            
            <h1 className="mb-4 text-3xl font-bold tracking-tight">You&apos;re on the list!</h1>
            <p className="mb-8 text-muted-foreground">
              Thank you for joining our waitlist. We&apos;ll notify you as soon as we launch with exclusive early access.
            </p>
            
            <div className="space-y-4">
              <Button asChild className="w-full">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="mb-6">
              <Link
                href="https://codeguide.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Image src="/codeguide-logo.png" alt="CodeGuide" width={48} height={48} />
                <span className="text-2xl font-bold">CodeGuide</span>
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Join the <span className="text-spektr-cyan-50">Waitlist</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Be among the first to experience our next-generation starter kit. 
              Get exclusive early access and special launch pricing.
            </p>
          </motion.div>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-2 border-muted/50 shadow-xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Get Early Access</CardTitle>
                <CardDescription>
                  Join thousands of developers already waiting for launch
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-10 h-12 text-base"
                        disabled={isSubmitting}
                        required
                      />
                      {errors?.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name[0]}</p>
                      )}
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 text-base"
                        disabled={isSubmitting}
                        required
                      />
                      {errors?.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email[0]}</p>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining Waitlist...
                      </>
                    ) : (
                      'Join Waitlist'
                    )}
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-muted/20">
                  <p className="text-sm text-muted-foreground text-center">
                    By joining, you agree to receive updates about our product launch. 
                    Unsubscribe anytime.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid gap-8 md:grid-cols-3 text-center"
          >
            <div className="space-y-3">
              <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Early Access</h3>
              <p className="text-sm text-muted-foreground">
                Be the first to try our enhanced starter kit with premium features
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Exclusive Updates</h3>
              <p className="text-sm text-muted-foreground">
                Get behind-the-scenes development updates and sneak peeks
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Special Pricing</h3>
              <p className="text-sm text-muted-foreground">
                Unlock special launch pricing available only to waitlist members
              </p>
            </div>
          </motion.div>

          {/* Back to Home Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}