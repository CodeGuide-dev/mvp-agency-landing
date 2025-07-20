"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Dummy Test Page
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Testing various UI components and layouts
          </p>
          <Badge variant="secondary" className="text-sm">
            Test Environment
          </Badge>
        </div>

        <Separator />

        {/* Component Testing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Buttons Card */}
          <Card>
            <CardHeader>
              <CardTitle>Button Components</CardTitle>
              <CardDescription>Testing different button variants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          {/* Form Elements Card */}
          <Card>
            <CardHeader>
              <CardTitle>Form Elements</CardTitle>
              <CardDescription>Testing input and form components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="test-input">Test Input</Label>
                <Input
                  id="test-input"
                  type="text"
                  placeholder="Enter test text..."
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="test-textarea">Test Textarea</Label>
                <Textarea
                  id="test-textarea"
                  placeholder="Enter test description..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h3 className="font-semibold text-green-800 dark:text-green-200">Success</h3>
                <p className="text-sm text-green-600 dark:text-green-400">
                  All tests passing
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">!</span>
                </div>
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">Warning</h3>
                <p className="text-sm text-yellow-600 dark:text-yellow-400">
                  Some items need attention
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">i</span>
                </div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-200">Info</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Additional information
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Test Data */}
        <Card>
          <CardHeader>
            <CardTitle>Test Data</CardTitle>
            <CardDescription>Sample data for testing purposes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Environment Info</h4>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Framework: Next.js 14</li>
                  <li>Styling: Tailwind CSS</li>
                  <li>UI Components: Radix UI</li>
                  <li>Language: TypeScript</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Test Metrics</h4>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Load Time: 0.5s</li>
                  <li>Bundle Size: 245KB</li>
                  <li>Performance Score: 98/100</li>
                  <li>Accessibility: 100/100</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>This is a dummy test page created for testing purposes</p>
          <p className="mt-1">Generated on {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}