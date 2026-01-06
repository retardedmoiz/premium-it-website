"use client"

import { useEffect, useRef } from "react"
import { CheckCircle2 } from "lucide-react"

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && statsRef.current) {
          statsRef.current.classList.add("animate-fade-in-up")
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const coreValues = [
    {
      title: "Proven Expertise",
      description: "3 years of delivering premium solutions with unmatched quality and innovation",
    },
    {
      title: "Client-First Approach",
      description: "Your success is our mission. We prioritize your vision in every decision",
    },
    {
      title: "Innovation & Quality",
      description: "Cutting-edge technology combined with meticulous attention to detail",
    },
    {
      title: "Long-term Partnership",
      description: "We build relationships, not just products. Your growth is our growth",
    },
  ]

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/15 rounded-full blur-3xl top-10 left-10 animate-float opacity-60"></div>
        <div className="absolute w-80 h-80 bg-accent/12 rounded-full blur-3xl bottom-20 right-20 animate-pulse-glow opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-in-left">
            <div className="relative rounded-3xl overflow-hidden h-96 md:h-full md:min-h-[500px] bg-gradient-to-br from-primary/40 via-accent/25 to-primary/30 group neon-border">
              <img
                src="/professional-diverse-tech-team-office.jpg"
                alt="Our Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Right Column - Story */}
          <div className="order-1 md:order-2 space-y-6 md:space-y-8 animate-fade-in-up">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 animate-glow-text">
                About Our Company
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 animate-glow-text">
                Crafting Digital Excellence Since 2023
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              GUIELLERMO TAYS LLC was founded in 2023 on a simple belief: exceptional businesses deserve exceptional
              digital solutions. In just 3 years, we've grown to become a trusted partner for ambitious companies
              looking to transform their digital presence and scale their operations.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of senior engineers, designers, and strategists work in perfect harmony to deliver solutions that
              are not only beautiful but commercially powerful. Every project is treated as a partnership, where your
              ambitions become our blueprint.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold">Our Core Values</h3>
              <ul className="space-y-3">
                {coreValues.slice(0, 2).map((value, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">{value.title}</p>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div ref={statsRef} className="space-y-6 order-3 md:order-2 animate-fade-in-up">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-primary/30 rounded-2xl p-6 md:p-8 text-center hover:border-primary/80 hover:shadow-lg hover:scale-105 transition-all duration-300 neon-border-hover">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-glow-text">150+</p>
                <p className="text-sm md:text-base text-muted-foreground">Projects Successfully Delivered</p>
              </div>
              <div className="bg-card border border-primary/30 rounded-2xl p-6 md:p-8 text-center hover:border-primary/80 hover:shadow-lg hover:scale-105 transition-all duration-300 neon-border-hover">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-glow-text">50+</p>
                <p className="text-sm md:text-base text-muted-foreground">Satisfied Global Clients</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-primary/30 rounded-2xl p-6 md:p-8 text-center hover:border-primary/80 transition-smooth neon-border-hover">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-glow-text">99%</p>
                <p className="text-sm md:text-base text-muted-foreground">Client Satisfaction Rate</p>
              </div>
              <div className="bg-card border border-primary/30 rounded-2xl p-6 md:p-8 text-center hover:border-primary/80 transition-smooth neon-border-hover">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-glow-text">3</p>
                <p className="text-sm md:text-base text-muted-foreground">Years Building Excellence</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30 rounded-2xl p-8 mt-6 neon-border-hover">
              <p className="text-foreground font-semibold mb-2">Our Promise to You</p>
              <p className="text-muted-foreground">
                We don't just meet expectations—we exceed them. Every project is a testament to our commitment to
                excellence and your success.
              </p>
            </div>
          </div>
        </div>

        {/* Additional values */}
        <div className="grid md:grid-cols-2 gap-8 mt-20 pt-20 border-t border-border/30">
          {coreValues.slice(2).map((value, idx) => (
            <div key={idx} className="flex gap-4 group hover:translate-x-2 transition-transform duration-300">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:animate-glow" />
              <div>
                <p className="font-semibold text-foreground text-lg">{value.title}</p>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
