"use client"

import Link from "next/link"
import { Facebook, Linkedin, Twitter, Github, ArrowRight, MapPin, Mail, Phone } from "lucide-react"
import { Logo } from "@/components/logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Design & Development", href: "#services" },
        { label: "Custom Software", href: "#services" },
        { label: "SEO & Marketing", href: "#services" },
        { label: "Cloud Solutions", href: "#services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Support", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Sitemap", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ]

  return (
    <footer className="bg-gradient-to-b from-background to-background-secondary border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-0 right-0 opacity-40"></div>
        <div className="absolute w-80 h-80 bg-accent/5 rounded-full blur-3xl bottom-0 left-0 opacity-40"></div>
      </div>

      {/* Newsletter CTA */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Stay Updated</h3>
                <p className="text-muted-foreground">
                  Get the latest insights on digital transformation, industry trends, and business growth strategies.
                </p>
              </div>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                />
                <button className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-smooth flex items-center gap-2">
                  <span>Join</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Brand Statement */}
          <div className="mb-12">
            <Link href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-primary-foreground">
                <Logo />
              </div>
              <span className="font-bold text-lg md:text-xl text-foreground">GUIELLERMO TAYS LLC</span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Enterprise-grade digital solutions for ambitious businesses. Building the future, one project at a time.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 mb-12 neon-border-hover">
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">2700 Rose Ave, Ceres, CA 95307</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <a
                    href="mailto:Guiellermotays1@outlook.com"
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Guiellermotays1@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <a href="tel:+18001234567" className="text-sm text-primary hover:text-primary/80 transition-colors">
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-border">
            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} GUIELLERMO TAYS LLC. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg border border-border bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Additional Links */}
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
