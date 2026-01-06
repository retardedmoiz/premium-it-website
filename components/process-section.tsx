"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, Pencil, Code, CheckSquare, Rocket, Headphones } from "lucide-react"

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveStep(0)
        }
      },
      { threshold: 0.5 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: 1,
      icon: Lightbulb,
      title: "Discovery & Strategy",
      description:
        "We dive deep into understanding your business, goals, and challenges. Strategic planning ensures we build the right solution.",
      details: ["Business analysis", "Market research", "Goal definition", "Competitive review"],
    },
    {
      number: 2,
      icon: Pencil,
      title: "Design & Planning",
      description:
        "Beautiful, functional designs that your users love. We create detailed wireframes and design systems before development.",
      details: ["UI/UX design", "Wireframing", "Design systems", "Prototype creation"],
    },
    {
      number: 3,
      icon: Code,
      title: "Development & Build",
      description:
        "Expert engineers transform designs into scalable, performant solutions using cutting-edge technology and best practices.",
      details: ["Full-stack development", "API integration", "Testing", "Code optimization"],
    },
    {
      number: 4,
      icon: CheckSquare,
      title: "Quality Assurance",
      description:
        "Rigorous testing across all devices and scenarios. We ensure your solution meets the highest quality standards.",
      details: ["QA testing", "Security audit", "Performance testing", "User acceptance testing"],
    },
    {
      number: 5,
      icon: Rocket,
      title: "Launch & Deployment",
      description: "Smooth, seamless launch with zero downtime. Our team manages the entire deployment process.",
      details: ["Pre-launch checks", "Deployment", "Monitoring setup", "Performance tracking"],
    },
    {
      number: 6,
      icon: Headphones,
      title: "Support & Growth",
      description: "Ongoing support, updates, and optimization. We're here to ensure your solution thrives.",
      details: ["24/7 support", "Updates & maintenance", "Performance optimization", "Scaling assistance"],
    },
  ]

  return (
    <section
      id="process"
      ref={containerRef}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-primary/8 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/15 rounded-full blur-3xl top-20 left-0 animate-pulse-glow"></div>
        <div className="absolute w-80 h-80 bg-accent/12 rounded-full blur-3xl bottom-10 right-0 animate-float opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 animate-glow-text">
            Our Methodology
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance animate-glow-text">
            A Proven Process Built for Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to post-launch support, we follow a structured approach that ensures excellence at
            every phase.
          </p>
        </div>

        {/* Desktop Timeline View */}
        <div className="hidden md:block space-y-12">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isActive = activeStep === idx

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`group transition-smooth ${idx % 2 === 0 ? "mr-auto md:mr-0" : ""}`}
              >
                <div className={`flex items-center gap-8 ${idx % 2 === 1 ? "flex-row-reverse" : ""}`}>
                  {/* Step Content */}
                  <div
                    className={`flex-1 rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 hover:border-primary/80 transition-smooth neon-border-hover ${
                      isActive ? "border-primary/80 shadow-lg neon-glow" : ""
                    }`}
                    style={{
                      animation: `fade-in-up 0.6s ease-out ${idx * 0.1}s both`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 neon-border-hover">
                        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                        <ul className="grid grid-cols-2 gap-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Connector */}
                  <div className="hidden lg:flex flex-col items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground scale-125 neon-glow"
                          : "bg-border text-muted-foreground border-2 border-card"
                      }`}
                    >
                      {step.number}
                    </div>
                    {idx < steps.length - 1 && (
                      <div
                        className={`w-1 h-20 transition-all duration-300 ${isActive ? "bg-primary" : "bg-border"}`}
                      ></div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile Timeline View */}
        <div className="md:hidden space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/80 transition-smooth animate-fade-in-up neon-border-hover"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center neon-border-hover">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {step.number}
                      </span>
                      <h3 className="font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Guarantee */}
        <div className="mt-16 md:mt-20 rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/12 to-primary/5 p-8 md:p-12 text-center animate-fade-in-up neon-border-hover">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 animate-glow-text">
            Our Process Guarantee
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent communication at every step. You'll have full visibility into progress, timelines, and
            deliverables. We succeed when you succeed.
          </p>
        </div>
      </div>
    </section>
  )
}
