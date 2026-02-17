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

const sectors = [
  { name: "Telekomunikasyon", icon: Phone },
  { name: "Bankacılık", icon: Landmark },
  { name: "Sigorta", icon: ShieldCheck },
  { name: "Lojistik", icon: Truck },
]

const professionalServices = [
  { name: "Yazılım Geliştirme Hizmetleri", icon: Code2 },
  { name: "Stratejik ERP Çözümleri Geliştirme", icon: Server },
  { name: "Özel Yazılım Çözümleri Geliştirme", icon: Code2 },
  { name: "Mobil Yazılım Çözümleri Geliştirme", icon: Smartphone },
  { name: "Büyük Veri ve Analitik Çözümleri", icon: Database },
  { name: "Veri Çözümleri", icon: Database },
  { name: "Yapay Zeka Çözümleri", icon: Brain },
  { name: "BI Dashboard Çözümleri", icon: BarChart3 },
  { name: "Danışmanlık Hizmetleri", icon: Settings },
  { name: "Siber Güvenlik", icon: Shield },
  { name: "Bilgi Güvenliği", icon: Lock },
  { name: "BT Yönetim", icon: Settings },
  { name: "İş Sürekliliği", icon: Workflow },
  { name: "Süreç Yönetimi", icon: Workflow },
  { name: "Altyapı Kurulum ve Yönetimi", icon: HardDrive },
  { name: "Outsource Destek", icon: Settings },
  { name: "Veri Merkezi Kurulumu ve Yönetimi", icon: Building2 },
]

export function WhatWeDo() {
  const shouldReduceMotion = useReducedMotion()

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
          <span className="text-gradient-lime">Neler Yapıyoruz?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center"
        >
          Teknoloji ve Dijital Dönüşümünde Ortağınız
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
              BT Süreç Yönetiminde Mühendislik Yaklaşımı:
            </h3>
            <h4 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Operasyonel Mükemmeliyet
            </h4>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              BBM-Tech olarak, BT süreçlerini sadece reaktif sorun çözme mekanizmaları olmaktan çıkarıp, işletmenizin dijital operasyonlarının kalbinde yer alan proaktif bir mühendislik disiplinine dönüştürüyoruz.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              ITIL ve diğer global standartları temel alarak, Hizmet Masası'ndan Olay Yönetimi'ne, Problem Yönetimi'nden Değişim Yönetimi'ne kadar tüm BT süreçlerini otomatize, ölçülebilir ve öngörülebilir hale getiriyoruz.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Geliştirdiğimiz merkezi BT yönetim platformları sayesinde, altyapıdan uygulamalara kadar tüm teknoloji yığınınızda kesintisiz hizmet kalitesi ve operasyonel çeviklik sağlıyor, böylece iş birimlerinizin dijital ihtiyaçlarına anında ve stratejik bir yanıt veriyoruz.
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
              const isLastAlone = index === professionalServices.length - 1 && professionalServices.length % 4 === 1
              return (
                <motion.div
                  key={service.name}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className={`flex items-center gap-3 p-3 bg-card/50 border border-border/50 rounded-lg ${isLastAlone ? 'col-start-2 lg:col-start-2 lg:col-span-2 justify-center' : ''}`}
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
              Sektörler
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
              Harekete Geçelim
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              Çözümlerimizden hangisi şu an kurumunuzun en öncelikli darboğazını çözebilir?
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              İsterseniz bu başlıkları içeren bir <span className="text-primary font-medium">Yol Haritası Çalıştayı</span> planlayabiliriz.
            </p>
            <HoverBorderGradient
              containerClassName="w-full sm:w-auto"
              className="px-6 py-3 font-medium"
              onClick={() => {
                const element = document.querySelector("#iletisim")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Ücretsiz Danışmanlık Alın
              <ArrowRight className="w-4 h-4" />
            </HoverBorderGradient>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
