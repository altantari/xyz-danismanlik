"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { Spotlight } from "@/components/ui/spotlight-new"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()

  const services = [
    t("hero.service.1"),
    t("hero.service.2"),
    t("hero.service.3"),
    t("hero.service.4"),
    t("hero.service.5"),
    t("hero.service.6"),
    t("hero.service.7"),
    t("hero.service.8"),
    t("hero.service.9"),
    t("hero.service.10"),
    t("hero.service.11"),
    t("hero.service.12"),
    t("hero.service.13"),
    t("hero.service.14"),
    t("hero.service.15"),
    t("hero.service.16"),
    t("hero.service.17"),
  ]

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Black background with subtle green gradient */}
      <div className="absolute inset-0 bg-black" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.92 0.16 125 / 0.05), transparent)'
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 50% 0%, oklch(0.92 0.16 125 / 0.08), transparent)'
        }}
      />

      {/* Spotlight effect */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, oklch(0.92 0.16 125 / 0.08) 0, oklch(0.85 0.14 125 / 0.02) 50%, oklch(0.8 0.12 125 / 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, oklch(0.92 0.16 125 / 0.06) 0, oklch(0.85 0.14 125 / 0.02) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, oklch(0.92 0.16 125 / 0.04) 0, oklch(0.8 0.12 125 / 0.02) 80%, transparent 100%)"
        translateY={-350}
        width={560}
        height={1380}
        smallWidth={240}
        duration={8}
        xOffset={80}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-28 sm:pt-24 md:pt-20 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={shouldReduceMotion ? {} : fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-display text-balance mb-8 leading-[1.1]"
          >
            <span className="text-foreground">{t("hero.title1")}</span>
            <br />
            {t("hero.title2")}
          </motion.h1>

          <motion.div
            initial={shouldReduceMotion ? {} : fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 flex items-center justify-center w-full"
          >
            <ContainerTextFlip
              words={services}
              interval={3000}
              animationDuration={700}
              className="bg-transparent mx-auto flex justify-center"
              textClassName="text-xl sm:text-2xl lg:text-3xl text-primary font-medium whitespace-nowrap"
            />
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto mb-10 px-2 space-y-3"
          >
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
              {t("hero.desc1")} <span className="text-foreground font-medium">{t("hero.techEcosystem")}</span> {t("hero.desc1End")}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
              {t("hero.desc2Start")} <span className="text-primary font-semibold">{t("hero.desc2Bold")}</span>{t("hero.desc2End")}
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <HoverBorderGradient
              className="px-6 py-3 font-medium text-base"
              onClick={() => handleScrollTo("#iletisim")}
            >
              {t("hero.cta")}
              <ArrowRight className="w-4 h-4" />
            </HoverBorderGradient>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10 pb-8 flex flex-col items-center"
      >
        <button
          onClick={() => handleScrollTo("#neler-yapiyoruz")}
          className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors group cursor-pointer"
          aria-label={t("hero.scrollDown")}
        >
          <span className="text-xs uppercase tracking-widest">{t("hero.discover")}</span>
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 group-hover:text-primary transition-colors" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
