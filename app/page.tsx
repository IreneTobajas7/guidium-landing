"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  TrendingUp,
  Heart,
  AlertTriangle,
  Brain,
  Calendar,
  CheckSquare,
  Trophy,
  MessageSquare,
  UserCheck,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Rocket,
  X,
} from "lucide-react"
import { useEffect, useState } from "react"
import { GuidiumLogo } from "@/components/guidium-logo"
import Link from "next/link"

export default function GuidiumLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // Here you would typically send the form data to your backend
  }

  const impactStats = [
    {
      icon: AlertTriangle,
      stat: "9 out of 10",
      description: "employees have felt let down on day one",
      color: "#E76F51",
      bgColor: "bg-red-50",
    },
    {
      icon: TrendingUp,
      stat: "82%",
      description: "increase in retention with effective onboarding",
      color: "#2A9D8F",
      bgColor: "bg-teal-50",
    },
    {
      icon: Heart,
      stat: "69%",
      description: "more likely to stay three years when they feel welcome",
      color: "#F4A261",
      bgColor: "bg-orange-50",
    },
    {
      icon: Users,
      stat: "20%",
      description: "of new starters leave within 45 days due to poor onboarding",
      color: "#E9C46A",
      bgColor: "bg-yellow-50",
    },
  ]

  const productFeatures = [
    {
      title: "Every person learns differently",
      feature: "Personalised Content",
      impact: "Content adapts to individual learning styles and preferences through personality insights",
      icon: Brain,
      color: "#264653",
    },
    {
      title: "First connections matter most",
      feature: "Key Introductions",
      impact: "Seamless introductions to essential contacts with pre-scheduled initial meetings",
      icon: Calendar,
      color: "#2A9D8F",
    },
    {
      title: "Clear path, confident steps",
      feature: "Structured Onboarding",
      impact: "Week 1, 30/60/90-day roadmaps that eliminate guesswork and build momentum",
      icon: CheckSquare,
      color: "#E9C46A",
    },
    {
      title: "Progress feels rewarding",
      feature: "Gamified Experience",
      impact: "Achievement recognition that makes onboarding engaging, not overwhelming",
      icon: Trophy,
      color: "#F4A261",
    },
    {
      title: "Expectations, openly shared",
      feature: "Expectation Alignment",
      impact: "New hire insights shared with managers for meaningful first conversations",
      icon: MessageSquare,
      color: "#E76F51",
    },
    {
      title: "No one navigates alone",
      feature: "Buddy System",
      impact: "Thoughtful peer connections that provide ongoing support and cultural integration",
      icon: UserCheck,
      color: "#2A9D8F",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex justify-between items-center">
            <GuidiumLogo />
            <div className="flex items-center gap-6">
              <a href="#pilot" className="text-[#264653] hover:text-[#2A9D8F] font-medium transition-colours">
                Early Access
              </a>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-[#2A9D8F] text-[#2A9D8F] hover:bg-[#2A9D8F] hover:text-white bg-transparent"
                >
                  Contact Us
                </Button>
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
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-[#2A9D8F]/8 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-[#F4A261]/8 rounded-full blur-xl"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-bold text-[#264653] leading-tight mb-8">
                Too many people start new jobs{" "}
                <span className="bg-gradient-to-r from-[#E76F51] to-[#F4A261] bg-clip-text text-transparent">
                  lost and confused.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
                Give every new joiner the start you wish you'd had.
              </p>

              {/* CTA Section */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-[#2A9D8F] hover:bg-[#264653] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  See GUIDIUM in action
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Gradient Transition */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#264653]/20"></div>
      </section>

      {/* Impact Statistics */}
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
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-white/4 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-white/4 rounded-full blur-xl"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-[#E9C46A] to-[#F4A261] bg-clip-text text-transparent">
                onboarding matters
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Numbers don't lie. First impressions shape entire careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/95 backdrop-blur-sm relative overflow-hidden ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div
                      className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-15"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div
                      className="absolute -top-2 -left-2 w-16 h-16 rounded-full blur-xl opacity-10"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="h-8 w-8" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-3xl font-bold mb-3" style={{ color: item.color }}>
                      {item.stat}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Smooth Gradient Transition */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white/30"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gradient-to-br from-white via-gray-50/50 to-white relative">
        {/* Smooth blend overlay */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/30 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#264653] mb-6">
              What{" "}
              <span className="bg-gradient-to-r from-[#2A9D8F] to-[#E9C46A] bg-clip-text text-transparent">
                good onboarding
              </span>{" "}
              looks like
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six principles to build stronger teams from the start.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productFeatures.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className={`border-2 border-gray-200 hover:border-[#2A9D8F] shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-105 bg-white relative overflow-hidden ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: item.color }} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{item.title}</p>
                        <h3 className="text-lg font-semibold text-[#264653]">{item.feature}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.impact}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Smooth Gradient Transition */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#264653]/20"></div>
      </section>

      {/* Pilot Program Section */}
      <section
        id="pilot"
        className="py-20 px-6 bg-gradient-to-br from-[#264653]/95 via-[#2A9D8F]/95 to-[#264653]/95 relative overflow-hidden"
      >
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

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-xl relative overflow-hidden">
            {/* Card background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#2A9D8F]/8 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#E9C46A]/8 rounded-full blur-3xl"></div>

            <Rocket className="h-16 w-16 text-[#2A9D8F] mx-auto mb-6 relative" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#264653] mb-6">
              Ready to transform{" "}
              <span className="bg-gradient-to-r from-[#2A9D8F] to-[#F4A261] bg-clip-text text-transparent">
                your onboarding?
              </span>
            </h2>
            <div className="max-w-2xl mx-auto mb-10">
              <p className="text-xl text-gray-600 mb-4">
                We are opening up early access to GUIDIUM for a small group of companies who want to shape the future of
                onboarding.
              </p>
              <p className="text-xl text-gray-600 font-medium text-[#2A9D8F]">
                Join us and help shape the future of onboarding.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 relative">
                <div className="absolute inset-0 bg-[#2A9D8F]/5 rounded-lg"></div>
                <div className="text-2xl font-bold text-[#2A9D8F] mb-2 relative">Free</div>
                <div className="text-gray-600 relative">Full access</div>
              </div>
              <div className="p-4 relative">
                <div className="absolute inset-0 bg-[#E9C46A]/5 rounded-lg"></div>
                <div className="text-2xl font-bold text-[#E9C46A] mb-2 relative">2 months</div>
                <div className="text-gray-600 relative">No commitment</div>
              </div>
              <div className="p-4 relative">
                <div className="absolute inset-0 bg-[#F4A261]/5 rounded-lg"></div>
                <div className="text-2xl font-bold text-[#F4A261] mb-2 relative">1:1</div>
                <div className="text-gray-600 relative">Dedicated support</div>
              </div>
            </div>

            {!showForm ? (
              <Button
                size="lg"
                className="bg-[#2A9D8F] hover:bg-[#264653] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative"
                onClick={() => setShowForm(true)}
              >
                Get Early Access
              </Button>
            ) : formSubmitted ? (
              <div className="bg-[#2A9D8F]/10 p-8 rounded-lg border border-[#2A9D8F]/20 max-w-md mx-auto">
                <CheckCircle className="h-12 w-12 text-[#2A9D8F] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#264653] mb-2">Thank you for your interest!</h3>
                <p className="text-gray-600">
                  We've received your application for early access. Our team will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-lg max-w-lg mx-auto relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowForm(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
                <h3 className="text-2xl font-bold text-[#264653] mb-6">Apply for Early Access</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Jane" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Smith" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="jane@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Acme Inc." required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Input id="role" placeholder="HR Manager" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employees">Number of Employees</Label>
                    <Input id="employees" placeholder="e.g. 50-100" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Why are you interested in GUIDIUM?</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your current onboarding challenges..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#2A9D8F] hover:bg-[#264653] text-white py-2 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Submit Application
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#264653] via-[#2A9D8F] to-[#264653] relative overflow-hidden">
        {/* Enhanced Background Pattern */}
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
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/4 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-white/4 rounded-full blur-xl"></div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Stop losing great people to forgettable first days.
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Smooth transitions, honest communication, no one left behind.
            </p>

            <Button
              size="lg"
              className="bg-[#E9C46A] hover:bg-[#F4A261] text-[#264653] px-10 py-5 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              onClick={() => {
                document.getElementById("pilot")?.scrollIntoView({ behavior: "smooth" })
                setTimeout(() => setShowForm(true), 800)
              }}
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Start your GUIDIUM pilot
              <Sparkles className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>

            <p className="text-sm text-white/70 mt-6">No lengthy setup. No hidden costs. Just better onboarding.</p>
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
            <GuidiumLogo />
            <div className="text-gray-500 text-sm mt-4 md:mt-0">© 2025 GUIDIUM. Making onboarding meaningful.</div>
          </div>
        </div>
      </section>
    </div>
  )
}
