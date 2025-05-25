"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Calendar,
  FileText,
  Zap,
  Rocket,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import companyData from "@/data/company.json"

export default function GetStartedPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const steps = [
    {
      number: 1,
      title: "Tell Us About Your Project",
      description: "Share your vision, goals, and requirements with our team.",
      icon: MessageSquare,
    },
    {
      number: 2,
      title: "Free Consultation",
      description: "Schedule a call to discuss your project in detail.",
      icon: Calendar,
    },
    {
      number: 3,
      title: "Proposal & Timeline",
      description: "Receive a detailed proposal with timeline and pricing.",
      icon: FileText,
    },
    {
      number: 4,
      title: "Project Kickoff",
      description: "Begin development with our expert team.",
      icon: Rocket,
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-white"}`}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={companyData.logo || "/placeholder.svg"}
              alt={`${companyData.name} Logo`}
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{companyData.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {companyData.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link href="/">
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {companyData.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10 dark:from-red-600/20 dark:to-orange-600/20" />

        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge
              variant="outline"
              className="text-red-600 border-red-600 bg-red-50 dark:bg-red-950/20 text-lg px-4 py-2"
            >
              <Zap className="w-4 h-4 mr-2" />
              Get Started Today
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Let's Build Something <span className="text-red-600">Amazing</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? Our streamlined process makes it easy to get started with your
              next project.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Simple Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From initial consultation to project delivery, we've streamlined our process to ensure your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card
                  key={index}
                  className={`relative overflow-hidden transition-all duration-300 ${
                    currentStep === step.number
                      ? "bg-red-50 dark:bg-red-950/20 border-red-600 shadow-xl scale-105"
                      : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg"
                  }`}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                        currentStep === step.number
                          ? "bg-red-600 text-white"
                          : "bg-red-100 dark:bg-red-950/20 text-red-600"
                      }`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div
                      className={`text-2xl font-bold mb-2 ${
                        currentStep === step.number ? "text-red-600" : "text-gray-400"
                      }`}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-8">
              {steps.map((step) => (
                <Button
                  key={step.number}
                  variant={currentStep === step.number ? "default" : "outline"}
                  className={
                    currentStep === step.number ? "bg-red-600 hover:bg-red-700" : "border-red-600 text-red-600"
                  }
                  onClick={() => setCurrentStep(step.number)}
                >
                  Step {step.number}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Form */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Tell Us About Your Project</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                The more details you provide, the better we can understand your needs and provide an accurate proposal.
              </p>
            </div>

            <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <Input placeholder="John" className="border-gray-300 dark:border-gray-600" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Doe" className="border-gray-300 dark:border-gray-600" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        className="border-gray-300 dark:border-gray-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
                      <Input placeholder="Your Company" className="border-gray-300 dark:border-gray-600" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Type *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white">
                      <option value="">Select project type</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="ai-ml">AI/ML Solution</option>
                      <option value="cloud-infrastructure">Cloud Infrastructure</option>
                      <option value="custom-software">Custom Software</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Budget Range
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white">
                      <option value="">Select budget range</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Timeline
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white">
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Please describe your project in detail. Include your goals, target audience, key features, and any specific requirements..."
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-700 dark:text-gray-300">
                      I'd like to receive updates about FuryTech's services and insights
                    </label>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold">
                    Submit Project Request
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">What Happens Next?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">We Review Your Request</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team will carefully review your project details within 24 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Schedule a Call</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We'll reach out to schedule a free consultation call to discuss your project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Get Your Proposal</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive a detailed proposal with timeline, pricing, and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Image
                src={companyData.logo || "/placeholder.svg"}
                alt={`${companyData.name} Logo`}
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold">{companyData.name}</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Ready to ignite innovation and fuel your future success.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} {companyData.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
