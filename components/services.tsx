"use client"

import React from "react"

import { motion, useReducedMotion } from "framer-motion"
import {
  Shield,
  Lock,
  Server,
  RefreshCcw,
  Database,
  Smartphone,
  Code,
  Boxes,
  BarChart3,
  Brain,
  LineChart,
} from "lucide-react"

const consultingServices = [
  {
    icon: Shield,
    title: "Siber Güvenlik",
    description: "Kurumsal siber güvenlik çözümleri ve penetrasyon testleri",
  },
  {
    icon: Lock,
    title: "Bilgi Güvenliği",
    description: "ISO 27001 uyumlu bilgi güvenliği yönetim sistemleri",
  },
  {
    icon: Server,
    title: "BT Yönetim",
    description: "Altyapı yönetimi ve IT operasyonları optimizasyonu",
  },
  {
    icon: RefreshCcw,
    title: "İş Sürekliliği",
    description: "Felaket kurtarma ve iş sürekliliği planlaması",
  },
  {
    icon: Database,
    title: "Veri Merkezi Kurulumu",
    description: "Anahtar teslimi veri merkezi tasarım ve kurulumu",
  },
]

const softwareServices = [
  {
    icon: Smartphone,
    title: "Mobil Yazılım",
    description: "iOS ve Android için native ve cross-platform uygulamalar",
  },
  {
    icon: Code,
    title: "Özel Yazılım",
    description: "İhtiyaçlarınıza özel kurumsal yazılım geliştirme",
  },
  {
    icon: Boxes,
    title: "Odoo ERP Modül Geliştirme",
    description: "Odoo ERP altyapısında enterprise modül geliştirme",
  },
]

const dataServices = [
  {
    icon: BarChart3,
    title: "Veri Çözümleri",
    description: "Veri entegrasyonu, ETL süreçleri ve veri ambarı çözümleri",
  },
  {
    icon: Brain,
    title: "Yapay Zeka Çözümleri",
    description: "AI/ML entegrasyonu ve otomasyon çözümleri",
  },
  {
    icon: LineChart,
    title: "Dashboard ve BI Çözümleri",
    description: "İş zekası raporlama ve görselleştirme panelleri",
  },
]

function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  index: number
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function Services() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="hizmetler" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left sm:text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-display text-balance mb-4">
            <span className="text-gradient-lime">Hizmetlerimiz</span>
          </h2>
          <p className="text-muted-foreground sm:max-w-2xl sm:mx-auto text-pretty">
            Dijital dönüşüm yolculuğunuzda yanınızda olan güvenilir çözüm ortağınız
          </p>
        </motion.div>

        {/* Danışmanlık Hizmetleri */}
        <div className="mb-16">
          <motion.h3
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-2xl font-semibold text-foreground mb-6 flex items-center gap-3"
          >
            <div className="w-1 h-6 bg-primary rounded-full" />
            Danışmanlık Hizmetleri
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {consultingServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>

        {/* Yazılım Geliştirme Hizmetleri */}
        <div className="mb-16">
          <motion.h3
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-2xl font-semibold text-foreground mb-6 flex items-center gap-3"
          >
            <div className="w-1 h-6 bg-primary rounded-full" />
            Yazılım Geliştirme Hizmetleri
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softwareServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>

        {/* Veri ve AI Çözümleri */}
        <div>
          <motion.h3
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-2xl font-semibold text-foreground mb-6 flex items-center gap-3"
          >
            <div className="w-1 h-6 bg-primary rounded-full" />
            Veri ve Yapay Zeka Çözümleri
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
