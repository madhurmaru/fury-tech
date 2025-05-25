"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun, ArrowRight, ArrowLeft, Upload, MapPin, Clock, Users, Heart, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import companyData from "@/data/company.json"

export default function CareersPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

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
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
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
              <Heart className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {companyData.careers.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {companyData.careers.description}
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Choose FuryTech?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We believe in creating an environment where innovation thrives and every team member can reach their full
              potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyData.careers.culture.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-950/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-red-600 border-red-600 bg-red-50 dark:bg-red-950/20 mb-4">
              Open Positions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Find Your Perfect Role
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our current openings and take the next step in your career journey with FuryTech.
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {companyData.careers.openPositions.map((position, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{position.title}</h3>
                          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{position.department}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{position.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{position.type}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-red-100 text-red-600 dark:bg-red-950/20">
                          {position.type}
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{position.description}</p>
                    </div>

                    <div className="lg:ml-8">
                      <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 group-hover:scale-105 transition-transform">
                        Apply Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Hiring Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We've designed a straightforward process to help us get to know you and for you to learn about us.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Application",
                description: "Submit your application and resume through our portal.",
              },
              { step: "2", title: "Screening", description: "Initial phone or video call to discuss your background." },
              { step: "3", title: "Interview", description: "Technical and cultural fit interviews with our team." },
              { step: "4", title: "Offer", description: "Reference checks and job offer for successful candidates." },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't see a position that fits? We're always interested in hearing from talented individuals.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Send Us Your Resume
            <Upload className="ml-2 h-5 w-5" />
          </Button>
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
            <p className="text-gray-400 mb-6 max-w-md mx-auto">Building the future, one innovation at a time.</p>
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
