"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, Zap, Lock, Headphones, TrendingUp, CheckCircle2, Gauge } from "lucide-react"

export default function WhyChooseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && containerRef.current) {
          const items = containerRef.current.querySelectorAll(".reason-card")
          items.forEach((item, idx) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, idx])
            }, idx * 100)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const reasons = [
    {
      icon: Award,
      title: "Industry-Leading Expertise",
      description: "Our team has 12+ years of combined experience delivering award-winning solutions.",
      stat: "50+",
      statLabel: "Awards Won",
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "Your dedicated account manager ensures seamless communication and execution.",
      stat: "24/7",
      statLabel: "Support Available",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Delivery",
      description: "Optimized workflows and proven processes mean your project launches on time.",
      stat: "150+",
      statLabel: "Projects Delivered",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Military-grade security, compliance certifications, and rigorous testing standards.",
      stat: "99.9%",
      statLabel: "Uptime Guaranteed",
    },
    {
      icon: Headphones,
      title: "Exceptional Support",
      description: "Premium support with dedicated experts ready to help whenever you need them.",
      stat: "2hr",
      statLabel: "Average Response",
    },
    {
      icon: TrendingUp,
      title: "Results-Driven Approach",
      description: "We measure success by your metrics. Growth and ROI are our main focus.",
      stat: "3.5x",
      statLabel: "Avg ROI Increase",
    },
  ]

  return (
    <section
      id="why-us"
      ref={containerRef}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/12 rounded-full blur-3xl -top-20 -left-20 animate-float"></div>
        <div className="absolute w-96 h-96 bg-accent/12 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 animate-glow-text">
            Why GUIELLERMO TAYS LLC
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance animate-glow-text">
            Trust Us With Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just a vendor—we're your strategic partner committed to your long-term success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            const isVisible = visibleItems.includes(idx)

            return (
              <div
                key={idx}
                className={`reason-card group rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-6 md:p-8 hover:border-primary/80 transition-smooth neon-border-hover ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0 neon-border-hover">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-bold text-foreground text-lg">{reason.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{reason.description}</p>
                    <div className="pt-4 flex items-baseline gap-2">
                      <p className="text-2xl font-bold text-primary animate-glow-text">{reason.stat}</p>
                      <p className="text-xs text-muted-foreground">{reason.statLabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Differentiator Section */}
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm p-8 md:p-12 mt-16 md:mt-20 neon-border-hover">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-3xl md:text-4xl font-bold animate-glow-text">What Sets Us Apart</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In a crowded marketplace, we stand out by delivering more than services—we deliver transformation.
              </p>

              <ul className="space-y-4">
                <li className="flex gap-3 items-start group hover:translate-x-2 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:animate-glow" />
                  <div>
                    <p className="font-semibold text-foreground">Proven Track Record</p>
                    <p className="text-sm text-muted-foreground">150+ delivered projects with 99% satisfaction</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start group hover:translate-x-2 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:animate-glow" />
                  <div>
                    <p className="font-semibold text-foreground">Transparent Collaboration</p>
                    <p className="text-sm text-muted-foreground">Regular updates and open communication always</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start group hover:translate-x-2 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:animate-glow" />
                  <div>
                    <p className="font-semibold text-foreground">Scalable Solutions</p>
                    <p className="text-sm text-muted-foreground">Built to grow with your business needs</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start group hover:translate-x-2 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:animate-glow" />
                  <div>
                    <p className="font-semibold text-foreground">Premium Quality Assurance</p>
                    <p className="text-sm text-muted-foreground">Multi-stage testing and quality benchmarks</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right side - Visual highlights */}
            <div className="space-y-4">
              <div className="bg-background border border-primary/30 rounded-2xl p-6 space-y-3 neon-border-hover hover:shadow-lg transition-all">
                <div className="flex items-center gap-3">
                  <Gauge className="w-5 h-5 text-primary" />
                  <p className="font-semibold text-foreground">Performance First</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Every solution is optimized for speed, scalability, and user experience
                </p>
              </div>

              <div className="bg-background border border-primary/30 rounded-2xl p-6 space-y-3 neon-border-hover hover:shadow-lg transition-all">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <p className="font-semibold text-foreground">Industry Standards</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  ISO certified, GDPR compliant, and following best practices
                </p>
              </div>

              <div className="bg-background border border-primary/30 rounded-2xl p-6 space-y-3 neon-border-hover hover:shadow-lg transition-all">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <p className="font-semibold text-foreground">Growth Focused</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Strategic solutions designed to drive measurable business results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
