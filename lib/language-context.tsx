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
    "whatWeDo.ps.softwareDev": "Yazılım Geliştirme Hizmetleri",
    "whatWeDo.ps.erp": "Stratejik ERP Çözümleri Geliştirme",
    "whatWeDo.ps.customSoftware": "Özel Yazılım Çözümleri Geliştirme",
    "whatWeDo.ps.mobileSoftware": "Mobil Yazılım Çözümleri Geliştirme",
    "whatWeDo.ps.bigData": "Büyük Veri ve Analitik Çözümleri",
    "whatWeDo.ps.dataSolutions": "Veri Çözümleri",
    "whatWeDo.ps.ai": "Yapay Zeka Çözümleri",
    "whatWeDo.ps.biDashboard": "BI Dashboard Çözümleri",
    "whatWeDo.ps.consulting": "Danışmanlık Hizmetleri",
    "whatWeDo.ps.cyberSecurity": "Siber Güvenlik",
    "whatWeDo.ps.infoSecurity": "Bilgi Güvenliği",
    "whatWeDo.ps.itManagement": "BT Yönetim",
    "whatWeDo.ps.businessContinuity": "İş Sürekliliği",
    "whatWeDo.ps.processManagement": "Süreç Yönetimi",
    "whatWeDo.ps.infrastructure": "Altyapı Kurulum ve Yönetimi",
    "whatWeDo.ps.outsource": "Outsource Destek",
    "whatWeDo.ps.dataCenter": "Veri Merkezi Kurulumu ve Yönetimi",

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
    "nav.whatWeDo": "What We Do",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.contactUs": "Contact Us",
    "nav.menuClose": "Close menu",
    "nav.menuOpen": "Open menu",
    "nav.mobileMenuLabel": "Mobile navigation menu",
    "nav.mainNav": "Main navigation",
    "nav.home": "Home",

    // Hero
    "hero.title1": "Technology and Digital Transformation",
    "hero.title2": "Your Partner",
    "hero.desc1": "From every field operation to the most critical boardroom report, we build a seamless, secure and intelligent",
    "hero.techEcosystem": "Technology Ecosystem",
    "hero.desc1End": ".",
    "hero.desc2Start": "With BBM-Tech, digital transformation is not a risk;",
    "hero.desc2Bold": "it's a measurable success story",
    "hero.desc2End": ".",
    "hero.cta": "Contact Us",
    "hero.scrollDown": "Scroll down",
    "hero.discover": "Discover",

    // Hero services list
    "hero.service.1": "Software Development Services",
    "hero.service.2": "Strategic ERP Solutions Development",
    "hero.service.3": "Custom Software Solutions Development",
    "hero.service.4": "Mobile Software Solutions Development",
    "hero.service.5": "Big Data and Analytics Solutions",
    "hero.service.6": "Data Solutions",
    "hero.service.7": "Artificial Intelligence Solutions",
    "hero.service.8": "BI Dashboard Solutions",
    "hero.service.9": "Consulting Services",
    "hero.service.10": "Cyber Security",
    "hero.service.11": "Information Security",
    "hero.service.12": "IT Management",
    "hero.service.13": "Business Continuity",
    "hero.service.14": "Process Management",
    "hero.service.15": "Infrastructure Setup & Management",
    "hero.service.16": "Outsource Support",
    "hero.service.17": "Data Center Setup & Management",

    // What We Do
    "whatWeDo.title": "What We Do?",
    "whatWeDo.subtitle": "Your Partner in Technology and Digital Transformation",
    "whatWeDo.itProcessTitle1": "Engineering Approach to IT Process Management:",
    "whatWeDo.itProcessTitle2": "Operational Excellence",
    "whatWeDo.itProcessDesc1": "At BBM-Tech, we transform IT processes from mere reactive problem-solving mechanisms into a proactive engineering discipline at the heart of your business's digital operations.",
    "whatWeDo.itProcessDesc2": "Based on ITIL and other global standards, we automate, measure, and make predictable all IT processes from Service Desk to Incident Management, from Problem Management to Change Management.",
    "whatWeDo.itProcessDesc3": "Through our centralized IT management platforms, we ensure uninterrupted service quality and operational agility across your entire technology stack, from infrastructure to applications, providing an immediate and strategic response to your business units' digital needs.",
    "whatWeDo.sectors": "Sectors",
    "whatWeDo.sector.telecom": "Telecommunications",
    "whatWeDo.sector.banking": "Banking",
    "whatWeDo.sector.insurance": "Insurance",
    "whatWeDo.sector.logistics": "Logistics",
    "whatWeDo.ctaTitle": "Let's Take Action",
    "whatWeDo.ctaDesc1": "Which of our solutions can solve your organization's most pressing bottleneck right now?",
    "whatWeDo.ctaDesc2Start": "We can plan a",
    "whatWeDo.ctaDesc2Bold": "Roadmap Workshop",
    "whatWeDo.ctaDesc2End": "covering these topics.",
    "whatWeDo.ctaButton": "Get Free Consultation",

    // Professional services names (what-we-do grid)
    "whatWeDo.ps.softwareDev": "Software Development Services",
    "whatWeDo.ps.erp": "Strategic ERP Solutions Development",
    "whatWeDo.ps.customSoftware": "Custom Software Solutions Development",
    "whatWeDo.ps.mobileSoftware": "Mobile Software Solutions Development",
    "whatWeDo.ps.bigData": "Big Data and Analytics Solutions",
    "whatWeDo.ps.dataSolutions": "Data Solutions",
    "whatWeDo.ps.ai": "Artificial Intelligence Solutions",
    "whatWeDo.ps.biDashboard": "BI Dashboard Solutions",
    "whatWeDo.ps.consulting": "Consulting Services",
    "whatWeDo.ps.cyberSecurity": "Cyber Security",
    "whatWeDo.ps.infoSecurity": "Information Security",
    "whatWeDo.ps.itManagement": "IT Management",
    "whatWeDo.ps.businessContinuity": "Business Continuity",
    "whatWeDo.ps.processManagement": "Process Management",
    "whatWeDo.ps.infrastructure": "Infrastructure Setup & Management",
    "whatWeDo.ps.outsource": "Outsource Support",
    "whatWeDo.ps.dataCenter": "Data Center Setup & Management",

    // Services Detailed
    "services.title": "Our Services",
    "services.subtitle": "End-to-end solutions for operational excellence and digital transformation",
    "services.professional": "Professional Services",
    "services.consulting": "Consulting Services",

    // Contact
    "contact.title": "Let's Take Action",
    "contact.subtitle": "Which of our solutions can solve your organization's most pressing bottleneck right now?",
    "contact.subtitle2": "We can plan a Roadmap Workshop for you.",
    "contact.reachUs": "Contact Us",
    "contact.reachUsDesc": "Our team is ready to help you with your digital transformation, software development, or IT consulting needs.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "contact.addressLine1": "YTU Yıldız Teknopark - Davutpaşa Campus",
    "contact.addressLine2": "Yıldız Technical University, 34220 Esenler/Istanbul",
    "contact.mapTitle": "Office Location - Yıldız Technical University, Davutpaşa, Istanbul",

    // Footer
    "footer.rights": "All rights reserved.",

    // Services Detailed Titles
    "sd.erp.title": "Strategic ERP Solutions Development",
    "sd.fieldOps.title": "Operations and Field Management",
    "sd.predictive.title": "Predictive Maintenance, Preventive Maintenance Work Orders, Early Fault Warning System",
    "sd.assetViz.title": "Asset Inventory Visualization on Map",
    "sd.fieldTeam.title": "Dynamic Field Team Tracking and Route Optimization",
    "sd.customSoftware.title": "Custom Software Development Solutions",
    "sd.dataSolutions.title": "Data Solutions",
    "sd.aiMl.title": "Artificial Intelligence (AI) and Machine Learning (ML) Solutions",
    "sd.biDashboard.title": "Dashboard and Business Intelligence (BI) Solutions",

    // Consulting Titles
    "sd.infoSecurity.title": "Information Security",
    "sd.cyberSecurity.title": "Integrated Cyber Security for Critical Infrastructures",
    "sd.itsm.title": "IT Service Management (ITSM)",
    "sd.infra.title": "Infrastructure Management",
    "sd.itamCmdb.title": "Asset & Configuration Management (ITAM & CMDB)",
    "sd.noc.title": "Network & Performance Monitoring (NOC - Network Operations Center)",
    "sd.businessCont.title": "Business Continuity",
    "sd.bia.title": "Business Impact Analysis (BIA) and Criticality Levels",
    "sd.disasterRecovery.title": "Disaster Recovery (DR) Architecture",
    "sd.altOps.title": "Operational & Field Continuity (Alternative Operations)",
    "sd.crisis.title": "Crisis Management and Playbooks",
    "sd.dataCenter.title": "Critical Infrastructure Data Center Design and Setup",
    "sd.physicalSecurity.title": "Physical & Architectural Security (Structural Layer)",
    "sd.mep.title": "Energy & HVAC Infrastructure (Mechanical & Electrical)",
    "sd.connectivity.title": "Network Connectivity & Structured Cabling (Connectivity Layer)",
    "sd.dcim.title": "Data Center Infrastructure Management (DCIM)",
    "sd.blockchain.title": "Blockchain Solutions: Trust and Transparency Architecture",
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
