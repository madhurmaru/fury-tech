"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Star,
  Calendar,
  Users,
  Code,
  Smartphone,
  Brain,
  Cloud,
  Zap,
  Target,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import companyData from "@/data/company.json"

export default function ViewOurWorkPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const portfolioItems = [
    {
      title: "FinTech Dashboard",
      category: "web-app",
      description:
        "A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "/placeholder.svg?height=300&width=500",
      results: ["300% increase in user engagement", "50% reduction in processing time", "99.9% uptime achieved"],
      client: "TechCorp Financial",
      timeline: "4 months",
      teamSize: "6 developers",
    },
    {
      title: "E-Commerce Mobile App",
      category: "mobile-app",
      description: "Cross-platform mobile application with advanced search, AR try-on features, and seamless checkout.",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=300&width=500",
      results: ["200% increase in mobile sales", "4.8/5 app store rating", "1M+ downloads in 6 months"],
      client: "RetailMax",
      timeline: "3 months",
      teamSize: "4 developers",
    },
    {
      title: "AI-Powered Analytics",
      category: "ai-ml",
      description: "Machine learning platform that predicts customer behavior and optimizes marketing campaigns.",
      technologies: ["Python", "TensorFlow", "AWS", "Docker"],
      image: "/placeholder.svg?height=300&width=500",
      results: ["85% prediction accuracy", "40% increase in ROI", "60% reduction in churn"],
      client: "DataDriven Inc",
      timeline: "5 months",
      teamSize: "5 specialists",
    },
    {
      title: "Cloud Infrastructure Migration",
      category: "cloud",
      description: "Complete migration of legacy systems to cloud-native architecture with microservices.",
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
      image: "/placeholder.svg?height=300&width=500",
      results: ["70% cost reduction", "99.99% availability", "10x faster deployments"],
      client: "Enterprise Solutions",
      timeline: "6 months",
      teamSize: "8 engineers",
    },
    {
      title: "Healthcare Management System",
      category: "web-app",
      description: "HIPAA-compliant patient management system with telemedicine capabilities and AI diagnostics.",
      technologies: ["Next.js", "PostgreSQL", "AWS", "WebRTC"],
      image: "/placeholder.svg?height=300&width=500",
      results: ["500+ healthcare providers", "HIPAA compliance achieved", "30% faster patient processing"],
      client: "HealthTech Solutions",
      timeline: "8 months",
      teamSize: "10 developers",
    },
    {
      title: "IoT Smart City Platform",
      category: "iot",
      description: "Comprehensive IoT platform for smart city management with real-time monitoring and analytics.",
      technologies: ["Node.js", "InfluxDB", "Grafana", "MQTT"],
      image: "/placeholder.svg?height=300&width=500",
      results: ["1000+ sensors connected", "25% energy savings", "Real-time city monitoring"],
      client: "Smart City Initiative",
      timeline: "12 months",
      teamSize: "12 specialists",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects", icon: Target },
    { id: "web-app", name: "Web Applications", icon: Code },
    { id: "mobile-app", name: "Mobile Apps", icon: Smartphone },
    { id: "ai-ml", name: "AI/ML", icon: Brain },
    { id: "cloud", name: "Cloud Solutions", icon: Cloud },
    { id: "iot", name: "IoT", icon: Zap },
  ]

  const filteredProjects =
    selectedCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

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
              <Star className="w-4 h-4 mr-2" />
              Our Portfolio
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Transforming <span className="text-red-600">Ideas</span> Into Impact
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects that have driven growth, innovation, and digital
              transformation for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">5★</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`${
                    selectedCategory === category.id
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                  } px-6 py-3`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary" className="bg-white/90 text-gray-900 hover:bg-white">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View Live
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/90 text-gray-900 hover:bg-white">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                      <Badge variant="secondary" className="bg-red-100 text-red-600 dark:bg-red-950/20">
                        {categories.find((cat) => cat.id === project.category)?.name || project.category}
                      </Badge>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{project.teamSize}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>5.0</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {project.results.slice(0, 2).map((result, resultIndex) => (
                            <li
                              key={resultIndex}
                              className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
                            >
                              <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Client: <span className="font-medium text-gray-700 dark:text-gray-300">{project.client}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No Projects Found</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                We don't have any projects in this category yet, but we're always working on new exciting projects!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our portfolio of successful projects. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-project">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/get-started">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
              >
                Get Free Consultation
              </Button>
            </Link>
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
              Transforming visions into digital realities, one project at a time.
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
