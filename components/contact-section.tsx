"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })

      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Guiellermotays1@outlook.com",
      href: "mailto:Guiellermotays1@outlook.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (800) 123-4567",
      href: "tel:+18001234567",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "Ceres, CA 95307",
      href: "https://maps.google.com/?q=2700+Rose+Ave,+Ceres,+CA+95307",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/8"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/15 rounded-full blur-3xl -top-20 -right-20 animate-float"></div>
        <div className="absolute w-80 h-80 bg-accent/12 rounded-full blur-3xl -bottom-20 -left-20 animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 animate-glow-text">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance animate-glow-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help you achieve extraordinary results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <a
                key={idx}
                href={info.href}
                target={info.label === "Office" ? "_blank" : undefined}
                rel={info.label === "Office" ? "noopener noreferrer" : undefined}
                className="group rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-6 md:p-8 hover:border-primary/80 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up neon-border-hover"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 neon-border-hover">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors animate-glow-text">
                      {info.value}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Google Maps */}
        <div className="mb-16 rounded-3xl overflow-hidden border border-primary/30 shadow-xl neon-border-hover animate-fade-in-up">
          <iframe
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.3516789639647!2d-120.95449!3d37.59234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b1f7e7e7e7e7d%3A0x0!2s2700%20Rose%20Ave%2C%20Ceres%2C%20CA%2095307!5e0!3m2!1sen!2sus!4v1234567890"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 md:p-12 animate-fade-in-up shadow-xl neon-border-hover">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto neon-glow">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground animate-glow-text">Message Sent Successfully!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-background focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground neon-border-hover"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-background focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground neon-border-hover"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-background focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground neon-border-hover"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-background focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground neon-border-hover"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-foreground">Project Details *</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-background focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none neon-border-hover"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 text-base font-semibold transition-all disabled:opacity-50 neon-glow-hover"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Your information will never be shared or sold.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* CTA Below Form */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">Prefer to talk first? Schedule a free consultation.</p>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 h-12 text-base font-medium bg-transparent neon-border-hover"
          >
            <a href="#">Schedule Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
