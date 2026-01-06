"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const elements = heroRef.current.querySelectorAll(".parallax-element")
      elements.forEach((el) => {
        const speed = Number.parseFloat((el as HTMLElement).dataset.speed || "0.5")
        const xMove = (x - rect.width / 2) * speed * 0.01
        const yMove = (y - rect.height / 2) * speed * 0.01
        ;(el as HTMLElement).style.transform = `translate(${xMove}px, ${yMove}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-20 md:pt-0 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/10 overflow-hidden relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="parallax-element absolute w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl top-10 -left-20 animate-pulse-glow"
          data-speed="2"
        ></div>
        <div
          className="parallax-element absolute w-96 h-96 bg-gradient-to-tl from-accent/25 to-primary/15 rounded-full blur-3xl -bottom-20 -right-20 animate-float"
          data-speed="-1.5"
        ></div>
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-radial-glow opacity-20 pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-6 md:space-y-8 animate-fade-in-up">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance animate-glow-text">
              Next-Level IT Solutions for Growing Businesses
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              We deliver cutting-edge web design, custom software, and digital transformation that elevates your brand
              and drives real business impact.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base font-medium neon-glow-hover transition-all"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 h-12 text-base font-medium bg-transparent neon-border-hover"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary animate-glow-text">150+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary animate-glow-text">50+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary animate-glow-text">12+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center parallax-element" data-speed="1">
          <div className="relative w-full aspect-square animate-float-rotate">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-accent/30 to-primary/20 rounded-3xl blur-3xl animate-pulse-glow neon-glow"></div>

            {/* Image container with premium overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/20 to-primary/30 rounded-3xl overflow-hidden shadow-2xl neon-border">
              <img src="/futuristic-neon-tech-workspace-glowing.jpg" alt="Tech Innovation Hub" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
