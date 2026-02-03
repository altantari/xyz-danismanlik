"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavbarProps {
  children: React.ReactNode
  className?: string
  mobileMenuOpen?: boolean
}

export function Navbar({ children, className, mobileMenuOpen = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      style={{
        width: scrolled ? "calc(100% - 2rem)" : "calc(100% - 1rem)",
        maxWidth: scrolled ? "56rem" : "64rem",
      }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        className
      )}
    >
      <div
        style={{
          padding: scrolled ? "0.5rem 1.25rem" : "0.625rem 1.5rem",
        }}
        className={cn(
          "bg-background/80 backdrop-blur-xl border border-border/50 shadow-[0_0_30px_-5px_oklch(0.92_0.16_125/0.3)] transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "rounded-2xl" : "rounded-full"
        )}
      >
        {children}
      </div>
    </header>
  )
}

interface NavBodyProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

export function NavBody({ children, className, visible = true }: NavBodyProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between transition-opacity duration-200",
        visible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  )
}

interface NavItemsProps {
  items: Array<{ name: string; link: string }>
  className?: string
  onItemClick?: (href: string, e: React.MouseEvent<HTMLAnchorElement>) => void
}

export function NavItems({ items, className, onItemClick }: NavItemsProps) {
  return (
    <div className={cn("hidden lg:flex items-center gap-8", className)}>
      {items.map((item) => (
        <a
          key={item.link}
          href={item.link}
          onClick={(e) => onItemClick?.(item.link, e)}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}

interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

export function MobileNav({ children, className, visible = false }: MobileNavProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.2, ease: "easeInOut" },
          }}
          className={cn("lg:hidden overflow-hidden", className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
}

export function MobileNavMenu({ children, className, isOpen }: MobileNavMenuProps) {
  return (
    <motion.div
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      exit={{ y: -10 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className={cn("border-t border-border/30 px-4 pb-4 pt-2", className)}
    >
      {children}
    </motion.div>
  )
}

interface MobileNavToggleProps {
  isOpen: boolean
  onClick: () => void
}

export function MobileNavToggle({ isOpen, onClick }: MobileNavToggleProps) {
  return (
    <button
      type="button"
      className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
      onClick={onClick}
      aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
      aria-expanded={isOpen}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.svg
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </motion.svg>
        ) : (
          <motion.svg
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  )
}

interface NavbarButtonProps {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary"
  onClick?: () => void
}

export function NavbarButton({
  href,
  as: Component = "button",
  children,
  className,
  variant = "primary",
  onClick,
}: NavbarButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors"
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
  }

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </Component>
  )
}
