"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowLeft, Send } from "lucide-react"
import { useEffect, useState } from "react"
import { GuidiumLogo } from "@/components/guidium-logo"
import Link from "next/link"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // Here you would typically send the form data to your backend
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@guidium.com",
      description: "Send us an email anytime",
      color: "#2A9D8F",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+44 20 7946 0958",
      description: "Mon-Fri from 9am to 6pm",
      color: "#E9C46A",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "London, United Kingdom",
      description: "Come say hello at our office",
      color: "#F4A261",
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      description: "We'll get back to you quickly",
      color: "#E76F51",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex justify-between items-center">
            <Link href="/">
              <GuidiumLogo />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-[#264653] hover:text-[#2A9D8F] font-medium transition-colours">
                <ArrowLeft className="inline-block w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-6 bg-gradient-to-br from-[#2A9D8F]/12 via-white/80 to-[#E9C46A]/15 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 3px 3px, #2A9D8F 1px, transparent 0),
              linear-gradient(45deg, transparent 40%, rgba(42,157,143,0.05) 50%, transparent 60%),
              radial-gradient(circle at 60px 60px, rgba(233,196,106,0.03) 2px, transparent 0),
              linear-gradient(-45deg, transparent 45%, rgba(244,162,97,0.04) 50%, transparent 55%)
            `,
            backgroundSize: "40px 40px, 200px 200px, 120px 120px, 180px 180px",
          }}
        ></div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-[#E9C46A]/15 to-[#F4A261]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-l from-[#2A9D8F]/15 to-[#264653]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#E76F51]/10 rounded-full blur-2xl"></div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#264653] leading-tight mb-8">
              Get in{" "}
              <span className="bg-gradient-to-r from-[#E76F51] to-[#F4A261] bg-clip-text text-transparent">touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Have questions about GUIDIUM? Want to learn more about transforming your onboarding process? We'd love to
              hear from you.
            </p>
          </div>
        </div>

        {/* Smooth Gradient Transition */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white/30"></div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-gray-50/50 to-white relative">
        {/* Smooth blend overlay */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/30 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#264653] mb-6">
              How to{" "}
              <span className="bg-gradient-to-r from-[#2A9D8F] to-[#E9C46A] bg-clip-text text-transparent">
                reach us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the method that works best for you. We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className={`border-2 border-gray-200 hover:border-[#2A9D8F] shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-105 bg-white relative overflow-hidden ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 text-center relative">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="h-8 w-8" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#264653] mb-2">{item.title}</h3>
                    <p className="text-xl font-bold mb-2" style={{ color: item.color }}>
                      {item.content}
                    </p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Smooth Gradient Transition */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#264653]/20"></div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#264653]/95 via-[#2A9D8F]/95 to-[#264653]/95 relative overflow-hidden">
        {/* Smooth blend overlay */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#264653]/20 to-transparent"></div>

        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 3px 3px, white 1px, transparent 0),
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%),
              radial-gradient(circle at 60px 60px, rgba(255,255,255,0.03) 2px, transparent 0),
              linear-gradient(-45deg, transparent 45%, rgba(255,255,255,0.04) 50%, transparent 55%)
            `,
            backgroundSize: "40px 40px, 200px 200px, 120px 120px, 180px 180px",
          }}
        ></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white/4 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-white/4 rounded-full blur-xl"></div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-xl relative overflow-hidden">
            {/* Card background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#2A9D8F]/8 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#E9C46A]/8 rounded-full blur-3xl"></div>

            {formSubmitted ? (
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-[#2A9D8F] mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#264653] mb-6">Thank you for reaching out!</h2>
                <p className="text-xl text-gray-600 mb-8">
                  We've received your message and will get back to you within 24 hours.
                </p>
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-[#2A9D8F] hover:bg-[#264653] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <Mail className="h-16 w-16 text-[#2A9D8F] mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-[#264653] mb-6">
                    Send us a{" "}
                    <span className="bg-gradient-to-r from-[#2A9D8F] to-[#F4A261] bg-clip-text text-transparent">
                      message
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Jane" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Smith" required className="h-12" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="jane@company.com" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="+44 20 7946 0958" className="h-12" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Acme Inc." required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role</Label>
                      <Input id="role" placeholder="HR Manager" className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What can we help you with?" required className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your enquiry..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#2A9D8F] hover:bg-[#264653] text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Smooth Gradient Transition */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white/30"></div>
      </section>

      {/* Footer */}
      <section className="py-12 px-6 bg-gradient-to-br from-white via-gray-50/30 to-white border-t border-gray-200 relative">
        {/* Smooth blend overlay */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/30 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/">
              <GuidiumLogo />
            </Link>
            <div className="text-gray-500 text-sm mt-4 md:mt-0">© 2025 GUIDIUM. Making onboarding meaningful.</div>
          </div>
        </div>
      </section>
    </div>
  )
}
