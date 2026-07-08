"use client"

import React, { createContext, useContext, useState, useCallback } from "react"

export type Language = "tr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// --- TRANSLATIONS ---
const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Navbar
    "nav.whatWeDo": "Neler Yapıyoruz",
    "nav.services": "Hizmetler",
    "nav.contact": "İletişim",
    "nav.contactUs": "Bize Ulaşın",
    "nav.menuClose": "Menüyü kapat",
    "nav.menuOpen": "Menüyü aç",
    "nav.mobileMenuLabel": "Mobil navigasyon menüsü",
    "nav.mainNav": "Ana navigasyon",
    "nav.home": "Ana sayfa",

    // Hero
    "hero.title1": "Teknoloji ve Dijital Dönüşüm",
    "hero.title2": "Ortağınız",
    "hero.desc1": "Biz, sahadaki her bir operasyondan yönetim kurulundaki en kritik rapora kadar kesintisiz, güvenli ve akıllı bir",
    "hero.techEcosystem": "Teknoloji Ekosistemi",
    "hero.desc1End": "inşa ediyoruz.",
    "hero.desc2Start": "BBM-Tech ile dijital dönüşüm, bir risk değil;",
    "hero.desc2Bold": "ölçülebilir bir başarı hikayesidir",
    "hero.desc2End": ".",
    "hero.cta": "Bize Ulaşın",
    "hero.scrollDown": "Aşağı kaydır",
    "hero.discover": "Keşfet",

    // Hero services list
    "hero.service.1": "Yazılım Geliştirme Hizmetleri",
    "hero.service.2": "Stratejik ERP Çözümleri Geliştirme",
    "hero.service.3": "Özel Yazılım Çözümleri Geliştirme",
    "hero.service.4": "Mobil Yazılım Çözümleri Geliştirme",
    "hero.service.5": "Büyük Veri ve Analitik Çözümleri",
    "hero.service.6": "Veri Çözümleri",
    "hero.service.7": "Yapay Zeka Çözümleri",
    "hero.service.8": "BI Dashboard Çözümleri",
    "hero.service.9": "Danışmanlık Hizmetleri",
    "hero.service.10": "Siber Güvenlik",
    "hero.service.11": "Bilgi Güvenliği",
    "hero.service.12": "BT Yönetim",
    "hero.service.13": "İş Sürekliliği",
    "hero.service.14": "Süreç Yönetimi",
    "hero.service.15": "Altyapı Kurulum ve Yönetimi",
    "hero.service.16": "Outsource Destek",
    "hero.service.17": "Veri Merkezi Kurulumu ve Yönetimi",

    // What We Do
    "whatWeDo.title": "Neler Yapıyoruz?",
    "whatWeDo.subtitle": "Teknoloji ve Dijital Dönüşümünde Ortağınız",
    "whatWeDo.itProcessTitle1": "BT Süreç Yönetiminde Mühendislik Yaklaşımı:",
    "whatWeDo.itProcessTitle2": "Operasyonel Mükemmeliyet",
    "whatWeDo.itProcessDesc1": "BBM-Tech olarak, BT süreçlerini sadece reaktif sorun çözme mekanizmaları olmaktan çıkarıp, işletmenizin dijital operasyonlarının kalbinde yer alan proaktif bir mühendislik disiplinine dönüştürüyoruz.",
    "whatWeDo.itProcessDesc2": "ITIL ve diğer global standartları temel alarak, Hizmet Masası'ndan Olay Yönetimi'ne, Problem Yönetimi'nden Değişim Yönetimi'ne kadar tüm BT süreçlerini otomatize, ölçülebilir ve öngörülebilir hale getiriyoruz.",
    "whatWeDo.itProcessDesc3": "Geliştirdiğimiz merkezi BT yönetim platformları sayesinde, altyapıdan uygulamalara kadar tüm teknoloji yığınınızda kesintisiz hizmet kalitesi ve operasyonel çeviklik sağlıyor, böylece iş birimlerinizin dijital ihtiyaçlarına anında ve stratejik bir yanıt veriyoruz.",
    "whatWeDo.sectors": "Sektörler",
    "whatWeDo.sector.telecom": "Telekomunikasyon",
    "whatWeDo.sector.banking": "Bankacılık",
    "whatWeDo.sector.insurance": "Sigorta",
    "whatWeDo.sector.logistics": "Lojistik",
    "whatWeDo.ctaTitle": "Harekete Geçelim",
    "whatWeDo.ctaDesc1": "Çözümlerimizden hangisi şu an kurumunuzun en öncelikli darboğazını çözebilir?",
    "whatWeDo.ctaDesc2Start": "İsterseniz bu başlıkları içeren bir",
    "whatWeDo.ctaDesc2Bold": "Yol Haritası Çalıştayı",
    "whatWeDo.ctaDesc2End": "planlayabiliriz.",
    "whatWeDo.ctaButton": "Ücretsiz Danışmanlık Alın",

    // Professional services names (what-we-do grid)
    
    "whatWeDo.ps.softwareDev": "Yazılım Çözümleri",
    "whatWeDo.ps.erp": "Stratejik ERP Çözümleri",
    "whatWeDo.ps.mobileSoftware": "Mobil Yazılım Çözümleri",
    "whatWeDo.ps.bigData": "Büyük Veri ve Analitik Çözümleri",
    "whatWeDo.ps.dataSolutions": "Veri Çözümleri",
    "whatWeDo.ps.ai": "Yapay Zeka Çözümleri",
    "whatWeDo.ps.biDashboard": "İş Zekası Çözümleri",
    "whatWeDo.ps.consulting": "Danışmanlık ve Operasyonel Hizmetler",
    "whatWeDo.ps.outsource": "Dış Kaynak Desteği",

    // Services Detailed
    "services.title": "Hizmetlerimiz",
    "services.subtitle": "Operasyonel mükemmellik ve dijital dönüşüm için uçtan uca çözümler",
    "services.professional": "Profesyonel Hizmetler",
    "services.consulting": "Danışmanlık Hizmetleri",

    // Contact
    "contact.title": "Harekete Geçelim",
    "contact.subtitle": "Çözümlerimizden hangisi şu an kurumunuzun en öncelikli darboğazını çözebilir?",
    "contact.subtitle2": "İsterseniz bir Yol Haritası Çalıştayı planlayabiliriz.",
    "contact.reachUs": "Bize Ulaşın",
    "contact.reachUsDesc": "Dijital dönüşüm, yazılım geliştirme veya IT danışmanlık ihtiyaçlarınız için ekibimiz size yardımcı olmaya hazır.",
    "contact.email": "E-posta",
    "contact.phone": "Telefon",
    "contact.address": "Adres",
    "contact.addressLine1": "YTÜ Yıldız Teknopark - Davutpaşa Kampüsü",
    "contact.addressLine2": "Yıldız Teknik Üniversitesi, 34220 Esenler/İstanbul",
    "contact.mapTitle": "Ofis Konumu - Yıldız Teknik Üniversitesi, Davutpaşa, İstanbul",

    // Footer
    "footer.rights": "Tüm hakları saklıdır.",

    // Services Detailed Titles
    "sd.erp.title": "Stratejik ERP Çözümleri Geliştirme",
    "sd.fieldOps.title": "Operasyon ve Saha Yönetimi",
    "sd.predictive.title": "Tahminleyici Bakım, Kestirimci Bakım İş Emirleri, Arıza Erken Uyarı Sistemi",
    "sd.assetViz.title": "Varlık Envanterinin Harita Üzerinde Görselleştirilmesi",
    "sd.fieldTeam.title": "Dinamik Saha Ekibi İzleme ve Rota Optimizasyonu",
    "sd.customSoftware.title": "Özel Yazılım Geliştirme Çözümleri",
    "sd.dataSolutions.title": "Veri Çözümleri",
    "sd.aiMl.title": "Yapay Zeka (AI) ve Makine Öğrenmesi (ML) Çözümleri",
    "sd.biDashboard.title": "Dashboard ve İş Zekası (BI) Çözümleri",

    // Consulting Titles
    "sd.infoSecurity.title": "Bilgi Güvenliği",
    "sd.cyberSecurity.title": "Kritik Altyapılar için Entegre Siber Güvenlik",
    "sd.itsm.title": "BT Hizmet Yönetimi (ITSM)",
    "sd.infra.title": "Altyapı Yönetimi",
    "sd.itamCmdb.title": "Varlık ve Konfigürasyon Yönetimi (ITAM & CMDB)",
    "sd.noc.title": "Ağ ve Performans İzleme (NOC - Network Operations Center)",
    "sd.businessCont.title": "İş Sürekliliği",
    "sd.bia.title": "İş Etki Analizi (BIA) ve Kritiklik Seviyeleri",
    "sd.disasterRecovery.title": "Felaket Kurtarma (Disaster Recovery - DR) Mimarisi",
    "sd.altOps.title": "Operasyonel ve Sahada Süreklilik (Alternative Operations)",
    "sd.crisis.title": "Kriz Yönetimi ve Playbooklar",
    "sd.dataCenter.title": "Kritik Altyapı Veri Merkezi (Data Center) Tasarım ve Kurulumu",
    "sd.physicalSecurity.title": "Fiziksel ve Mimari Güvenlik (Structural Layer)",
    "sd.mep.title": "Enerji ve İklimlendirme Altyapısı (Mechanical & Electrical)",
    "sd.connectivity.title": "Ağ Bağlantısı ve Yapısal Kablolama (Connectivity Layer)",
    "sd.dcim.title": "Veri Merkezi Altyapı Yönetimi (DCIM)",
    "sd.blockchain.title": "Blockchain Çözümleri : Güven ve Şeffaflık Mimarlığı",
  },
  en: {
    // Navbar
    "nav.whatWeDo": "Our Expertise",
    "nav.services": "Solutions",
    "nav.contact": "Get in Touch",
    "nav.contactUs": "Schedule a Consultation",
    "nav.menuClose": "Close menu",
    "nav.menuOpen": "Open menu",
    "nav.mobileMenuLabel": "Mobile navigation menu",
    "nav.mainNav": "Main navigation",
    "nav.home": "Home",

    // Hero
    "hero.title1": "Your Strategic Partner in",
    "hero.title2": "Technology & Digital Transformation",
    "hero.desc1": "From frontline operations to mission-critical boardroom insights, we architect a seamless, secure, and intelligent",
    "hero.techEcosystem": "Enterprise Technology Ecosystem",
    "hero.desc1End": ".",
    "hero.desc2Start": "With BBM-Tech, digital transformation is not a liability —",
    "hero.desc2Bold": "it's a measurable competitive advantage",
    "hero.desc2End": ".",
    "hero.cta": "Schedule a Consultation",
    "hero.scrollDown": "Scroll down",
    "hero.discover": "Explore",

    // Hero services list
    "hero.service.1": "Enterprise Software Development",
    "hero.service.2": "Strategic ERP Implementation",
    "hero.service.3": "Bespoke Software Solutions",
    "hero.service.4": "Mobile Application Development",
    "hero.service.5": "Big Data & Advanced Analytics",
    "hero.service.6": "Enterprise Data Solutions",
    "hero.service.7": "AI & Intelligent Automation",
    "hero.service.8": "BI & Executive Dashboards",
    "hero.service.9": "IT Advisory & Consulting",
    "hero.service.10": "Cybersecurity Services",
    "hero.service.11": "Information Security & Compliance",
    "hero.service.12": "IT Governance & Management",
    "hero.service.13": "Business Continuity Planning",
    "hero.service.14": "Business Process Optimization",
    "hero.service.15": "Infrastructure Deployment & Management",
    "hero.service.16": "Managed IT Services",
    "hero.service.17": "Data Center Design & Operations",

    // What We Do
    "whatWeDo.title": "Our Expertise",
    "whatWeDo.subtitle": "Your Trusted Partner in Technology & Digital Transformation",
    "whatWeDo.itProcessTitle1": "An Engineering-Driven Approach to IT Service Management:",
    "whatWeDo.itProcessTitle2": "Operational Excellence",
    "whatWeDo.itProcessDesc1": "At BBM-Tech, we elevate IT operations from reactive troubleshooting into a proactive engineering discipline — positioned at the core of your enterprise's digital strategy.",
    "whatWeDo.itProcessDesc2": "Leveraging ITIL frameworks and globally recognized standards, we streamline and automate every IT function — from Service Desk and Incident Management to Problem Resolution and Change Governance — delivering measurable, predictable outcomes.",
    "whatWeDo.itProcessDesc3": "Through our proprietary centralized IT management platforms, we deliver uninterrupted service quality and operational agility across your full technology stack — enabling your business units to respond to evolving digital demands with speed and strategic precision.",
    "whatWeDo.sectors": "Industries We Serve",
    "whatWeDo.sector.telecom": "Telecommunications",
    "whatWeDo.sector.banking": "Banking & Finance",
    "whatWeDo.sector.insurance": "Insurance",
    "whatWeDo.sector.logistics": "Supply Chain & Logistics",
    "whatWeDo.ctaTitle": "Ready to Get Started?",
    "whatWeDo.ctaDesc1": "Which of our solutions addresses your organization's most critical operational challenge today?",
    "whatWeDo.ctaDesc2Start": "Let us design a tailored",
    "whatWeDo.ctaDesc2Bold": "Strategic Roadmap Workshop",
    "whatWeDo.ctaDesc2End": "for your enterprise.",
    "whatWeDo.ctaButton": "Request a Free Consultation",

    // Professional services names (what-we-do grid)
    "whatWeDo.ps.softwareDev": "Enterprise Software Development",
    "whatWeDo.ps.erp": "Strategic ERP Implementation",
    "whatWeDo.ps.customSoftware": "Bespoke Software Solutions",
    "whatWeDo.ps.mobileSoftware": "Mobile Application Development",
    "whatWeDo.ps.bigData": "Big Data & Advanced Analytics",
    "whatWeDo.ps.dataSolutions": "Enterprise Data Solutions",
    "whatWeDo.ps.ai": "AI & Intelligent Automation",
    "whatWeDo.ps.biDashboard": "BI & Executive Dashboards",
    "whatWeDo.ps.consulting": "IT Advisory & Consulting",
    "whatWeDo.ps.cyberSecurity": "Cybersecurity Services",
    "whatWeDo.ps.infoSecurity": "Information Security & Compliance",
    "whatWeDo.ps.itManagement": "IT Governance & Management",
    "whatWeDo.ps.businessContinuity": "Business Continuity Planning",
    "whatWeDo.ps.processManagement": "Business Process Optimization",
    "whatWeDo.ps.infrastructure": "Infrastructure Deployment & Management",
    "whatWeDo.ps.outsource": "Managed IT Services",
    "whatWeDo.ps.dataCenter": "Data Center Design & Operations",

    // Services Detailed
    "services.title": "Our Solutions",
    "services.subtitle": "End-to-end enterprise solutions engineered for operational excellence and sustainable digital transformation",
    "services.professional": "Professional Services",
    "services.consulting": "Advisory & Consulting Services",

    // Contact
    "contact.title": "Ready to Get Started?",
    "contact.subtitle": "Which of our solutions addresses your organization's most critical operational challenge today?",
    "contact.subtitle2": "Let us schedule a Strategic Roadmap Workshop tailored to your needs.",
    "contact.reachUs": "Get in Touch",
    "contact.reachUsDesc": "Our team of industry specialists is ready to support your digital transformation, enterprise software, and IT consulting initiatives.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.address": "Headquarters",
    "contact.addressLine1": "YTU Yıldız Teknopark — Davutpaşa Campus",
    "contact.addressLine2": "Yıldız Technical University, 34220 Esenler/Istanbul, Türkiye",
    "contact.mapTitle": "Office Location — Yıldız Technical University, Davutpaşa, Istanbul",

    // Footer
    "footer.rights": "All rights reserved.",

    // Services Detailed Titles
    "sd.erp.title": "Strategic ERP Solutions & Implementation",
    "sd.fieldOps.title": "Field Operations & Workforce Management",
    "sd.predictive.title": "Predictive Maintenance, Condition-Based Work Orders & Early Fault Detection",
    "sd.assetViz.title": "Geospatial Asset Inventory Visualization",
    "sd.fieldTeam.title": "Dynamic Field Team Tracking & Route Optimization",
    "sd.customSoftware.title": "Bespoke Enterprise Software Development",
    "sd.dataSolutions.title": "Enterprise Data Solutions & Engineering",
    "sd.aiMl.title": "Artificial Intelligence & Machine Learning Solutions",
    "sd.biDashboard.title": "Business Intelligence & Executive Dashboard Solutions",

    // Consulting Titles
    "sd.infoSecurity.title": "Information Security & Compliance",
    "sd.cyberSecurity.title": "Integrated Cybersecurity for Critical Infrastructure",
    "sd.itsm.title": "IT Service Management (ITSM)",
    "sd.infra.title": "Enterprise Infrastructure Management",
    "sd.itamCmdb.title": "IT Asset & Configuration Management (ITAM & CMDB)",
    "sd.noc.title": "Network Operations Center (NOC) & Performance Monitoring",
    "sd.businessCont.title": "Business Continuity Planning",
    "sd.bia.title": "Business Impact Analysis (BIA) & Criticality Assessment",
    "sd.disasterRecovery.title": "Disaster Recovery (DR) Architecture & Planning",
    "sd.altOps.title": "Operational Continuity & Alternative Operations",
    "sd.crisis.title": "Crisis Management & Incident Response Playbooks",
    "sd.dataCenter.title": "Mission-Critical Data Center Design & Deployment",
    "sd.physicalSecurity.title": "Physical & Structural Security (Facility Layer)",
    "sd.mep.title": "Power & HVAC Infrastructure (Mechanical & Electrical)",
    "sd.connectivity.title": "Network Connectivity & Structured Cabling",
    "sd.dcim.title": "Data Center Infrastructure Management (DCIM)",
    "sd.blockchain.title": "Enterprise Blockchain: Trust & Transparency Architecture",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("bbm-lang")
      if (saved === "tr" || saved === "en") return saved
    }
    return "tr"
  })

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("bbm-lang", lang)
    }
  }, [])

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || key
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
