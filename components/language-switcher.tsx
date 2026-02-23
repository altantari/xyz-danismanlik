"use client"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { useLanguage, type Language } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"

function TurkeyFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="800" fill="#E30A17" />
      <circle cx="425" cy="400" r="200" fill="#fff" />
      <circle cx="475" cy="400" r="160" fill="#E30A17" />
      <polygon fill="#fff" points="583,400 530,424 543,374 505,344 556,340" transform="rotate(18,583,400)" />
      <polygon fill="#fff" points="583,400 530,424 543,374 505,344 556,340" transform="rotate(90,583,400)" />
      <polygon fill="#fff" points="583,400 530,424 543,374 505,344 556,340" transform="rotate(162,583,400)" />
      <polygon fill="#fff" points="583,400 530,424 543,374 505,344 556,340" transform="rotate(234,583,400)" />
      <polygon fill="#fff" points="583,400 530,424 543,374 505,344 556,340" transform="rotate(306,583,400)" />
    </svg>
  )
}

function UKFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  )
}

const languages: { code: Language; label: string; country: string; display: string }[] = [
  { code: "tr", label: "Türkçe", country: "Türkiye", display: "TR" },
  { code: "en", label: "English", country: "United Kingdom", display: "ENG" },
]

function FlagIcon({ code, className }: { code: Language; className?: string }) {
  if (code === "tr") return <TurkeyFlag className={className} />
  return <UKFlag className={className} />
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 })
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const current = languages.find((l) => l.code === language)!

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        const target = e.target as Element
        if (!target.closest("[data-lang-dropdown]")) {
          setOpen(false)
        }
      }
    }
    const handleScroll = () => setOpen(false)
    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("scroll", handleScroll, true)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("scroll", handleScroll, true)
    }
  }, [])

  const handleButtonClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setDropdownPos({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      })
    }
    setOpen((v) => !v)
  }

  const dropdown = (
    <AnimatePresence>
      {open && (
        <motion.div
          data-lang-dropdown
          initial={{ opacity: 0, y: -6, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.96 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          style={{
            position: "fixed",
            top: dropdownPos.top,
            right: dropdownPos.right,
            zIndex: 9999,
          }}
          className="w-52 rounded-2xl border border-border/60 bg-background shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          <div className="px-4 pt-3 pb-2 border-b border-border/30">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium">
              {language === "tr" ? "Dil Seçimi" : "Language"}
            </p>
          </div>

          {languages.map((lang) => {
            const isActive = language === lang.code
            return (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setOpen(false)
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-all cursor-pointer group ${
                  isActive
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                <div className="w-7 h-5 rounded-[3px] overflow-hidden shrink-0 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
                  <FlagIcon code={lang.code} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-sm leading-tight">{lang.label}</span>
                  <span className="text-[11px] text-muted-foreground/60 leading-tight">{lang.country}</span>
                </div>
                {isActive && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-primary shrink-0" />
                )}
              </button>
            )
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={handleButtonClick}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-border/50 bg-background/50 hover:bg-foreground/8 transition-all cursor-pointer"
        aria-label="Dil seçimi"
      >
        <div className="w-5 h-3.5 rounded-[2px] overflow-hidden shrink-0 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
          <FlagIcon code={language} className="w-full h-full" />
        </div>
        <span className="hidden sm:inline text-muted-foreground text-xs font-semibold tracking-wide">
          {current.display}
        </span>
        <svg
          className={`w-3 h-3 text-muted-foreground/70 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {mounted && createPortal(dropdown, document.body)}
    </>
  )
}
