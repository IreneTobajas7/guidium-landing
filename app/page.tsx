"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
} from "lucide-react"
import { useEffect, useState } from "react"
import { GuidiumLogo } from "@/components/guidium-logo"

export default function GuidiumLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const impactStats = [
    {
      icon: AlertTriangle,
      stat: "9 out of 10",
      description: "employees have felt let down on day one",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
    },
    {
      icon: TrendingUp,
      stat: "82%",
      description: "increase in retention with effective onboarding",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Heart,
      stat: "69%",
      description: "more likely to stay three years when they feel welcome",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Users,
      stat: "20%",
      description: "of new starters leave within 45 days due to poor onboarding",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
    },
  ]

  const productFeatures = [
    {
      title: "Every person learns differently",
      feature: "Personalized Content",
      impact: "Content adapts to individual learning styles and preferences through personality insights",
      icon: Brain,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "First connections matter most",
      feature: "Key Introductions",
      impact: "Seamless introductions to essential contacts with pre-scheduled initial meetings",
      icon: Calendar,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Clear path, confident steps",
      feature: "Structured Onboarding",
      impact: "Week 1, 30/60/90-day roadmaps that eliminate guesswork and build momentum",
      icon: CheckSquare,
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Progress feels rewarding",
      feature: "Gamified Experience",
      impact: "Achievement recognition that makes onboarding engaging, not overwhelming",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Expectations, openly shared",
      feature: "Expectation Alignment",
      impact: "New hire insights shared with managers for meaningful first conversations",
      icon: MessageSquare,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "No one navigates alone",
      feature: "Buddy System",
      impact: "Thoughtful peer connections that provide ongoing support and cultural integration",
      icon: UserCheck,
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-xl border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <GuidiumLogo />
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Very Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-purple-600/15 to-cyan-600/15"></div>

        {/* Extremely Gentle Floating Orbs */}
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/4 rounded-full blur-3xl"
          style={{
            animation: "gentle-float 12s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/4 rounded-full blur-3xl"
          style={{
            animation: "gentle-float 16s ease-in-out infinite",
            animationDelay: "4s",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/3 rounded-full blur-3xl"
          style={{
            animation: "gentle-float 14s ease-in-out infinite",
            animationDelay: "8s",
          }}
        ></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Badge with very subtle animation */}
            <div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/15 to-purple-500/15 backdrop-blur-sm border border-blue-400/20 rounded-full px-6 py-3 mb-8"
              style={{
                animation: "gentle-glow 8s ease-in-out infinite",
              }}
            >
              <Sparkles className="h-4 w-4 text-blue-400" style={{ animation: "gentle-spin 12s linear infinite" }} />
              <span className="text-blue-300 font-medium">Transform your onboarding experience</span>
            </div>

            {/* Updated headline with very subtle effects */}
            <h1 className="font-bold text-white leading-tight mb-8">
              <div className="text-4xl md:text-6xl mb-6">
                <span
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-5xl md:text-7xl"
                  style={{ animation: "gentle-glow 10s ease-in-out infinite" }}
                >
                  88%
                </span>{" "}
                <span className="text-slate-300">of employees don't have a great onboarding experience...</span>
              </div>
              <div className="text-5xl md:text-7xl">
                <span
                  className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative"
                  style={{ animation: "gentle-glow 12s ease-in-out infinite" }}
                >
                  Let's do better together.
                  <div
                    className="absolute -inset-2 bg-gradient-to-r from-emerald-400/5 via-blue-400/5 to-purple-400/5 blur-xl rounded-lg -z-10"
                    style={{ animation: "gentle-glow 14s ease-in-out infinite" }}
                  ></div>
                </span>
              </div>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Give every new joiner the support you wish you'd had.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group border-0 hover:scale-105"
              >
                <Zap className="mr-2 h-5 w-5" />
                See Guidium in action
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm bg-transparent hover:scale-105 transition-all duration-300"
              >
                Watch demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Narrative Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
              Why onboarding matters
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The numbers don't lie. First impressions shape entire careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:border-slate-600 hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-2xl`}
                      style={{ animation: "gentle-glow 8s ease-in-out infinite", animationDelay: `${index * 2}s` }}
                    ></div>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:rotate-6 transition-transform duration-300`}
                      style={{ animation: "gentle-glow 10s ease-in-out infinite", animationDelay: `${index * 1.5}s` }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3
                      className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}
                      style={{ animation: "gentle-glow 6s ease-in-out infinite" }}
                    >
                      {item.stat}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Product Value Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
              What makes onboarding work
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Six principles that transform first days into lasting connections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productFeatures.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-slate-600 backdrop-blur-sm hover:scale-105 group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 relative overflow-hidden">
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full blur-xl`}
                    ></div>

                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300 flex-shrink-0`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">{item.title}</p>
                        <h3 className="text-lg font-semibold text-white">{item.feature}</h3>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed">{item.impact}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900/15 to-purple-900/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div
          className="absolute top-10 left-1/4 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl"
          style={{ animation: "gentle-float 16s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl"
          style={{ animation: "gentle-float 20s ease-in-out infinite", animationDelay: "4s" }}
        ></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-8 leading-tight">
              Stop losing great people to forgettable first days.
            </h2>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
              Smooth transitions, honest communication, no one left behind.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group border-0 hover:scale-105"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Start your Guidium pilot
              <Sparkles className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>

            <p className="text-sm text-slate-500 mt-6">No lengthy setup. No hidden costs. Just better onboarding.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-800 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <GuidiumLogo />
            <div className="text-slate-500 text-sm mt-4 md:mt-0">© 2025 Guidium. Making onboarding meaningful.</div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-10px) scale(1.02); opacity: 0.6; }
        }
        
        @keyframes gentle-glow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes gentle-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
