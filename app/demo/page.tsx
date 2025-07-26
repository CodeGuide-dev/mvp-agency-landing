"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Rocket, 
  Heart, 
  Star, 
  Zap, 
  Database, 
  Shield, 
  Layers,
  Play,
  Pause,
  Volume2,
  BarChart3,
  Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
}

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(65)
  const [darkMode, setDarkMode] = useState(false)

  const features = [
    { icon: Rocket, title: "Lightning Fast", description: "Built with Next.js 14 for optimal performance" },
    { icon: Shield, title: "Secure by Default", description: "Clerk authentication with Row Level Security" },
    { icon: Database, title: "Real-time Data", description: "Supabase integration with live updates" },
    { icon: Layers, title: "Modern UI", description: "shadcn/ui components with Tailwind CSS" },
  ]

  const stats = [
    { label: "Projects", value: "24", change: "+12%" },
    { label: "Users", value: "1,337", change: "+23%" },
    { label: "Revenue", value: "$12,345", change: "+45%" },
    { label: "Growth", value: "89%", change: "+8%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <motion.div
        className="container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Demo Showcase</span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Amazing
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Experience the power of modern web development with this interactive demo showcasing 
            cutting-edge components and smooth animations.
          </motion.p>
        </motion.div>

        {/* Floating Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                  </motion.div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Dashboard */}
        <motion.div variants={itemVariants} className="mb-16">
          <Card className="border-0 shadow-2xl bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <BarChart3 className="h-6 w-6" />
                Interactive Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid grid-cols-4 w-full max-w-md">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        variants={pulseVariants}
                        animate="animate"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <Card>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                                <p className="text-2xl font-bold">{stat.value}</p>
                              </div>
                              <Badge variant="secondary" className="text-green-600">
                                {stat.change}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Project Progress</Label>
                      <span className="text-sm text-muted-foreground">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => setProgress(Math.min(100, progress + 10))}
                      >
                        +10%
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setProgress(Math.max(0, progress - 10))}
                      >
                        -10%
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="analytics" className="mt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">User Activity</h3>
                      <Badge>Live</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[1, 2, 3].map((_, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarFallback>U{index + 1}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">User {index + 1}</p>
                                <p className="text-sm text-muted-foreground">Active now</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reports" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Generate Reports</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="h-20 flex-col gap-2">
                        <Calendar className="h-6 w-6" />
                        Monthly Report
                      </Button>
                      <Button variant="outline" className="h-20 flex-col gap-2">
                        <BarChart3 className="h-6 w-6" />
                        Analytics Report
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="settings" className="mt-6">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Dark Mode</Label>
                          <p className="text-sm text-muted-foreground">Toggle dark mode theme</p>
                        </div>
                        <Switch 
                          checked={darkMode}
                          onCheckedChange={setDarkMode}
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive push notifications</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        {/* Media Player Demo */}
        <motion.div variants={itemVariants} className="mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                >
                  <Heart className="h-8 w-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold">Now Playing</h3>
                  <p className="text-muted-foreground">Awesome Demo Track</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Volume2 className="h-4 w-4" />
                <div className="flex-1">
                  <Progress value={45} className="h-1" />
                </div>
                <span className="text-sm text-muted-foreground">2:34 / 5:42</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-xl max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <Button className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Floating Action Button */}
        <motion.div
          className="fixed bottom-8 right-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              size="icon" 
              className="w-16 h-16 rounded-full shadow-lg bg-gradient-to-r from-primary to-purple-600"
            >
              <Star className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}