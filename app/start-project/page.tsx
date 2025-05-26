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
  Calendar,
  Clock,
  DollarSign,
  Users,
  Zap,
  Target,
  Lightbulb,
  Rocket,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import companyData from "@/data/company.json"

export default function StartProjectPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const projectTypes = [
    {
      title: "MVP Development",
      description: "Launch your startup idea with a minimum viable product",
      timeline: "4-8 weeks",
      price: "Starting at $25,000",
      icon: Lightbulb,
    },
    {
      title: "Enterprise Solution",
      description: "Scale your business with custom enterprise software",
      timeline: "3-6 months",
      price: "Starting at $100,000",
      icon: Target,
    },
    {
      title: "Mobile Application",
      description: "Native or cross-platform mobile apps",
      timeline: "6-12 weeks",
      price: "Starting at $40,000",
      icon: Users,
    },
    {
      title: "AI/ML Integration",
      description: "Intelligent systems and machine learning solutions",
      timeline: "8-16 weeks",
      price: "Starting at $60,000",
      icon: Zap,
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
              <Rocket className="w-4 h-4 mr-2" />
              Start Your Project
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Turn Your <span className="text-red-600">Vision</span> Into Reality
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect project type for your needs and get a custom proposal tailored to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Choose Your Project Type
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Select the type of project that best matches your needs. Each option includes a detailed consultation and
              custom proposal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projectTypes.map((project, index) => {
              const IconComponent = project.icon
              const isSelected = selectedService === project.title
              return (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-red-50 dark:bg-red-950/20 border-red-600 shadow-xl scale-105"
                      : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-102"
                  }`}
                  onClick={() => setSelectedService(project.title)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                          isSelected ? "bg-red-600 text-white" : "bg-red-100 dark:bg-red-950/20 text-red-600"
                        }`}
                      >
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-red-600" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{project.timeline}</span>
                      </div>
                      {/*<div className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-red-600" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{project.price}</span>
                      </div>*/}
                    </div>

                    {isSelected && (
                      <div className="mt-6 p-4 bg-red-100 dark:bg-red-950/30 rounded-lg">
                        <p className="text-sm text-red-800 dark:text-red-200 font-medium">
                          ✓ Selected - This project type will be included in your consultation.
                        </p>  
                        <p>
                          Scroll Down to schedule a free consultation.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Start Form */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Let's Get Started</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Fill out this quick form and we'll schedule a free consultation within 24 hours.
              </p>
            </div>

            <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input placeholder="John Doe" className="border-gray-300 dark:border-gray-600" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        className="border-gray-300 dark:border-gray-600"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
                      <Input placeholder="Your Company" className="border-gray-300 dark:border-gray-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <Input placeholder="+1 (555) 123-4567" className="border-gray-300 dark:border-gray-600" />
                    </div>
                  </div>

                  {selectedService && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Selected Project Type
                      </label>
                      <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-md">
                        <span className="text-red-800 dark:text-red-200 font-medium">{selectedService}</span>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Meeting Time
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white">
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Brief Project Description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold">
                    Schedule Free Consultation
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What's Included in Your Consultation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Project Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Deep dive into your requirements, goals, and technical specifications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Team Introduction</h3>
              <p className="text-gray-600 dark:text-gray-300">Meet the experts who will be working on your project.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Custom Proposal</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detailed proposal with timeline, pricing, and project roadmap.
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
            <p className="text-gray-400 mb-6 max-w-md mx-auto">Ready to transform your vision into reality.</p>
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
