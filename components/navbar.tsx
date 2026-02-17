"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#neler-yapiyoruz", label: "Neler Yapıyoruz" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#iletisim", label: "İletişim" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      setMobileMenuOpen(false)
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-2 sm:px-4 lg:px-8 py-4" aria-label="Ana navigasyon">
        <motion.div
          layout
          transition={{
            layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
          }}
          className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden shadow-[0_0_30px_-5px_oklch(0.92_0.16_125/0.3)]"
        >
          {/* Main Header Row */}
          <div className="flex h-14 items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2" aria-label="Ana sayfa">
              <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-primary" aria-hidden="true" />
              <span
                className="font-heading font-bold text-base sm:text-lg text-foreground"
                style={{ letterSpacing: "-0.05em" }}
              >
                BBM Tech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                size="sm"
                rounded="full"
                className="gap-1.5"
                onClick={() => {
                  const element = document.querySelector("#iletisim")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Bize Ulaşın
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Menu - Expands from header */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.2, ease: "easeInOut" },
                }}
                className="lg:hidden overflow-hidden"
                role="dialog"
                aria-modal="true"
                aria-label="Mobil navigasyon menüsü"
              >
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  exit={{ y: -10 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="border-t border-border/30 px-4 pb-4 pt-2"
                >
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.05 + 0.1,
                        }}
                        className="flex items-center px-3 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors rounded-lg"
                        onClick={(e) => handleNavClick(e, link.href)}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, delay: 0.25 }}
                    className="mt-3 pt-3 border-t border-border/30"
                  >
                    <Button
                      rounded="lg"
                      className="w-full gap-2"
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setTimeout(() => {
                          const element = document.querySelector("#iletisim")
                          if (element) element.scrollIntoView({ behavior: "smooth" })
                        }, 200)
                      }}
                    >
                      Bize Ulaşın
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </header>
  )
}
