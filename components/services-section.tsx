"use client"

import { useState } from "react"
import { Zap, Code, Globe, Palette, Shield, Cloud, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      icon: Globe,
      title: "Web Design & Development",
      description: "Enterprise-grade websites that convert. Beautiful, fast, and strategically built for results.",
      features: ["Responsive Design", "Performance Optimized", "SEO Ready", "Accessibility First"],
      color: "from-primary/40 to-cyan-500/20",
      image: "/modern-web-design-interface-neon.jpg",
    },
    {
      id: 2,
      icon: Code,
      title: "Custom Software Development",
      description: "Scalable, secure applications built with cutting-edge technology for your unique business needs.",
      features: ["Full-Stack Solutions", "Cloud Integration", "Real-time Systems", "API Development"],
      color: "from-accent/40 to-purple-500/20",
      image: "/software-development-coding-neon.jpg",
    },
    {
      id: 3,
      icon: Zap,
      title: "SEO & Digital Marketing",
      description: "Strategic digital marketing that drives qualified traffic and measurable business growth.",
      features: ["Technical SEO", "Content Strategy", "PPC Campaigns", "Analytics & Reporting"],
      color: "from-orange-500/30 to-red-500/15",
      image: "/digital-marketing-dashboard-analytics.jpg",
    },
    {
      id: 4,
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that balances aesthetics with functionality and intuitive interaction.",
      features: ["Design Systems", "Wireframing", "Prototyping", "User Testing"],
      color: "from-pink-500/30 to-rose-500/15",
      image: "/ui-ux-design-tools-mockup.jpg",
    },
    {
      id: 5,
      icon: Shield,
      title: "IT Consulting & Support",
      description: "Expert guidance on technology strategy, security, and infrastructure for sustainable growth.",
      features: ["Tech Strategy", "Security Audit", "Cloud Migration", "24/7 Support"],
      color: "from-green-500/30 to-emerald-500/15",
      image: "/it-security-technology-infrastructure.jpg",
    },
    {
      id: 6,
      icon: Cloud,
      title: "Cloud & Automation Solutions",
      description: "Modernize your infrastructure with cloud-native solutions and intelligent automation.",
      features: ["Infrastructure as Code", "CI/CD Pipelines", "Monitoring", "Disaster Recovery"],
      color: "from-primary/40 to-cyan-500/20",
      image: "/cloud-infrastructure-automation.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-20 -right-20 animate-pulse-glow"></div>
        <div className="absolute w-96 h-96 bg-accent/15 rounded-full blur-3xl bottom-0 -left-20 animate-float opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 animate-glow-text">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance animate-glow-text">
            Premium Services Built for Growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions spanning the entire digital landscape. From strategy to execution, we deliver
            excellence at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-6 md:p-8 transition-smooth hover:border-primary/80 hover:shadow-xl hover:neon-glow overflow-hidden cursor-pointer ${
                  hoveredService === service.id ? "scale-105" : ""
                }`}
                style={{
                  animation: `fade-in-up 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background opacity-0 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover blur-sm"
                  />
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 neon-border-hover">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-2 pt-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Arrow */}
                  <div className="pt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-lg text-muted-foreground mb-6">Ready to discuss your project?</p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base neon-glow-hover"
          >
            <a href="#contact">Schedule a Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
