"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Menu,
  X,
  ArrowRight,
  Code,
  Cloud,
  Brain,
  Smartphone,
  Star,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Zap,
  Rocket,
  Shield,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import companyData from "@/data/company.json"

const iconMap = {
  Code,
  Cloud,
  Brain,
  Smartphone,
  Zap,
  Rocket,
  Shield,
  Users,
}

export default function FuryTechWebsite() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10 dark:from-red-600/20 dark:to-orange-600/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge
              variant="outline"
              className="text-red-600 border-red-600 bg-red-50 dark:bg-red-950/20 text-lg px-4 py-2"
            >
              <Zap className="w-4 h-4 mr-2" />
              Premium Technology Solutions
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              {companyData.tagline.split(" ").map((word, index) => (
                <span
                  key={index}
                  className={
                    word.toLowerCase().includes("ignite") || word.toLowerCase().includes("fuel") ? "text-red-600" : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {companyData.description}. We transform ideas into powerful digital experiences that drive growth and
              innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/get-started">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/view-our-work">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 px-8 py-4 text-lg font-semibold"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyData.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{metric.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-red-600 border-red-600 bg-red-50 dark:bg-red-950/20 mb-4">
              {companyData.about.title}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {companyData.about.subtitle}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {companyData.about.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{companyData.about.mission}</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {companyData.about.stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.about.values.map((value, index) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap]
              return (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-red-600 border-red-600 bg-red-50 dark:bg-red-950/20 mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Cutting-Edge Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We deliver innovative technology solutions that transform businesses and drive digital excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-950/10"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                      <IconComponent className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-red-600 border-red-600 bg-red-50 dark:bg-red-950/20 mb-4">
              Our Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tailored for Your Success
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From startups to enterprises, we deliver solutions that scale with your business and drive measurable
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyData.solutions.map((solution, index) => {
              const IconComponent = iconMap[solution.icon as keyof typeof iconMap]
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-gray-800"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                        <IconComponent className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{solution.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{solution.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-red-600 border-red-600 bg-red-50 dark:bg-red-950/20 mb-4">
              Technology Stack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Powered by Innovation</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to build scalable, secure, and high-performance solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {companyData.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-lg px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-red-600 hover:text-red-600 transition-colors cursor-pointer"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="clients" className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-red-600 border-red-600 bg-red-50 dark:bg-red-950/20 mb-4">
              Client Success
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyData.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-red-600 font-medium">{testimonial.role}</div>
                    <div className="text-gray-500 dark:text-gray-400">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Ignite Your Next Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's transform your vision into reality with cutting-edge technology and innovative solutions.
          </p>
          <Link href="/start-project">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Start Your Project
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>*/}

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="outline" className="text-red-600 border-red-600 bg-red-50 dark:bg-red-950/20 mb-4">
                Get In Touch
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Ready to start your next project? Contact us today and let's discuss how we can help you achieve your
                goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-950/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                    <div className="text-gray-600 dark:text-gray-300">{companyData.contact.email}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-950/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Phone</div>
                    <div className="text-gray-600 dark:text-gray-300">{companyData.contact.phone}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-950/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Address</div>
                    <div className="text-gray-600 dark:text-gray-300">{companyData.contact.address}</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" className="border-gray-300 dark:border-gray-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" className="border-gray-300 dark:border-gray-600" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="border-gray-300 dark:border-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src={companyData.logo || "/placeholder.svg"}
                  alt={`${companyData.name} Logo`}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold">{companyData.name}</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                {companyData.description}. We're passionate about creating innovative solutions that drive business
                growth.
              </p>
              <div className="flex space-x-4">
                <Link href={companyData.social.twitter} className="text-gray-400 hover:text-red-400 transition-colors">
                  <X className="w-6 h-6" />
                </Link>
                <Link href={companyData.social.linkedin} className="text-gray-400 hover:text-red-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href={companyData.social.github} className="text-gray-400 hover:text-red-400 transition-colors">
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href={companyData.social.instagram}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {companyData.navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-400 hover:text-red-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li key="Get Started">
                    <Link href="/get-started" className="text-gray-400 hover:text-red-400 transition-colors">
                      Get Started
                    </Link>
                  </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest insights and innovations.</p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white rounded-r-none"
                />
                <Button className="bg-red-600 hover:bg-red-700 rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {companyData.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
