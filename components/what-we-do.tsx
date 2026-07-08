"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Brain,
  BarChart3,
  Shield,
  Lock,
  Settings,
  Workflow,
  HardDrive,
  ArrowRight,
  Phone,
  Landmark,
  ShieldCheck,
  Truck,
  Building2
} from "lucide-react"
import { LampHeader } from "./ui/lamp"
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import { useLanguage } from "@/lib/language-context"

const sectorKeys = [
  { key: "whatWeDo.sector.telecom", icon: Phone },
  { key: "whatWeDo.sector.banking", icon: Landmark },
  { key: "whatWeDo.sector.insurance", icon: ShieldCheck },
  { key: "whatWeDo.sector.logistics", icon: Truck },
]

const serviceKeys = [
  { key: "whatWeDo.ps.softwareDev", icon: Code2 },
  { key: "whatWeDo.ps.erp", icon: Server },
  { key: "whatWeDo.ps.mobileSoftware", icon: Smartphone },
  { key: "whatWeDo.ps.bigData", icon: Database },
  { key: "whatWeDo.ps.dataSolutions", icon: Database },
  { key: "whatWeDo.ps.ai", icon: Brain },
  { key: "whatWeDo.ps.biDashboard", icon: BarChart3 },
  { key: "whatWeDo.ps.consulting", icon: Shield },
  { key: "whatWeDo.ps.outsource", icon: Settings },
]

export function WhatWeDo() {
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()

  const professionalServices = serviceKeys.map((s) => ({ name: t(s.key), icon: s.icon }))
  const sectors = sectorKeys.map((s) => ({ name: t(s.key), icon: s.icon }))

  return (
    <section id="neler-yapiyoruz" className="bg-background relative py-28 sm:py-32">
      <LampHeader>
        <motion.h2
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-display text-balance mb-4 text-center"
        >
          <span className="text-gradient-lime">{t("whatWeDo.title")}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center"
        >
          {t("whatWeDo.subtitle")}
        </motion.p>
      </LampHeader>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* BT Süreç Yönetimi Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20 border-b border-border/50 pb-16"
        >
          <div className="mb-6 text-center">
            <h3 className="text-base sm:text-lg font-light text-foreground/40 mb-2">
              {t("whatWeDo.itProcessTitle1")}
            </h3>
            <h4 className="text-2xl sm:text-3xl font-semibold text-foreground">
              {t("whatWeDo.itProcessTitle2")}
            </h4>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t("whatWeDo.itProcessDesc1")}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t("whatWeDo.itProcessDesc2")}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t("whatWeDo.itProcessDesc3")}
            </p>
          </div>
        </motion.div>

        {/* Top - Profesyonel Hizmetler (Full Width) */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {professionalServices.map((service, index) => {
              const Icon = service.icon
              const total = professionalServices.length
              const isLast = index === total - 1
              // Remainder for each breakpoint: mobile=2cols, tablet=3cols, desktop=4cols
              const remMobile = total % 2  // 17%2=1 → alone on mobile
              const remTablet = total % 3  // 17%3=2 → not alone
              const remDesktop = total % 4 // 17%4=1 → alone on desktop
              const lastClasses = isLast
                ? [
                    remMobile === 1 ? 'col-span-2' : '',
                    remTablet === 1 ? 'sm:col-span-3' : remTablet === 2 ? 'sm:col-start-2 sm:col-span-1' : '',
                    remDesktop === 1 ? 'lg:col-start-2 lg:col-span-2' : remDesktop === 2 ? 'lg:col-start-2 lg:col-span-1' : remDesktop === 3 ? 'lg:col-start-1 lg:col-span-1' : '',
                  ].filter(Boolean).join(' ')
                : ''
              return (
                <motion.div
                  key={service.name}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className={`flex items-center justify-center gap-3 p-3 bg-card/50 border border-border/50 rounded-lg ${lastClasses}`}
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {service.name}
                  </span>
                </motion.div>
              )
            })}
          </div>

        </motion.div>

        {/* Bottom Row - Sektörler & Harekete Geçelim Side by Side */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 py-12 items-stretch">
          {/* Left Side - Sektörler */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-medium text-muted-foreground/60 uppercase tracking-wider">
              {t("whatWeDo.sectors")}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {sectors.map((sector, index) => {
                const Icon = sector.icon
                return (
                  <motion.div
                    key={sector.name}
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="relative flex flex-col items-center justify-center p-6 rounded-xl bg-linear-to-br from-primary/5 via-background to-primary/5"
                  >
                    <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/3 to-transparent" />
                    <div className="relative w-14 h-14 rounded-xl bg-linear-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-3">
                      <Icon className="w-7 h-7 text-primary/70" />
                    </div>
                    <span className="relative text-sm font-semibold text-foreground">
                      {sector.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Side - Harekete Geçelim CTA */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-linear-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {t("whatWeDo.ctaTitle")}
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              {t("whatWeDo.ctaDesc1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("whatWeDo.ctaDesc2Start")} <span className="text-primary font-medium">{t("whatWeDo.ctaDesc2Bold")}</span> {t("whatWeDo.ctaDesc2End")}
            </p>
            <HoverBorderGradient
              containerClassName="w-full sm:w-auto"
              className="px-6 py-3 font-medium"
              onClick={() => {
                const element = document.querySelector("#iletisim")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {t("whatWeDo.ctaButton")}
              <ArrowRight className="w-4 h-4" />
            </HoverBorderGradient>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
