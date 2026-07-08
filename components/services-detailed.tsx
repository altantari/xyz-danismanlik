"use client"

import { useState, useEffect } from "react"
import { motion, useReducedMotion, AnimatePresence, LayoutGroup } from "framer-motion"
import {
  Code,
  Server,
  Smartphone,
  BarChart3,
  Database,
  Brain,
  LineChart,
  Shield,
  Users,
  Plus,
  X,
} from "lucide-react"
import { LampHeader } from "./ui/lamp"
import { GlowingEffect } from "./ui/glowing-effect"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    id: "software-solutions",
    icon: Code,
    title: "Yazılım Çözümleri",
    titleEn: "Software Solutions",
    description: `Standart paketlerin yetmediği durumlarda, kurumların iş süreçlerine %100 uyumlu, yüksek performanslı ve güvenli yazılım mimarileri kullanarak özel uygulamalar geliştiriyoruz. Geliştirdiğimiz çözümler; teknik borç bırakmayan, sürdürülebilir kod yapısı, hızlı prototipleme ve pazara çıkış süresini kısaltan temel özellikleriyle ön plana çıkar. Uygulama tasarımımız, kritik sistemlerdeki "sıfır kesinti" ve modülerlik prensibine göre oluşturulur.

Bunun yanı sıra cloud ve/veya on-prem platformlarda geliştirdiğimiz;
- Web tabanlı, mobil ve masaüstü uygulamalar
- Kurumsal portal ve API
- ERP ve CRM entegrasyonları

Güncel geliştirme metodolojileri ve uluslararası standartlar gözetilerek yüksek performans, güvenlik, esneklik ve kullanıcı deneyimi üst noktada tutulur.`,
    descriptionEn: `When standard software packages are not applicable, our tailor-made solutions which are built on high-performance, secure, and scalable software architectures that align with all kind of business processes. Our solutions are based on sustainability, maintainability code with minimal technical debt, rapid deployment capability and streamlined and fast delivery. Our application architecture is designed with all the principles of zero downtime, high availability, and modularity, ensuring maximum business continuity for mission-critical systems. In addition, we design and deliver cloud-based and/or on-premises solutions, including web-based, mobile, and desktop applications, enterprise portals and API development, and ERP and CRM integrations. Applying modern software development methodologies, each of our solutions provides high performance, robust security, scalability, flexibility, and remarkable user experience.`,
  },
  {
    id: "erp-solutions",
    icon: Server,
    title: "Stratejik ERP Çözümleri",
    titleEn: "ERP Solutions",
    description: `Kurumsal kaynak planlamayı sadece bir kayıt sistemi değil, operasyonel hız kazandıran bir "iş zekası motoru" olarak konumlandırıyoruz. Uçtan uca entegrasyon ile Saha Operasyonları, Finans, Satın Alma, Depo, Üretim ve İK süreçlerinin bütünleşik yapıda yönetilmesini sağlayan esnek ve modüler çözüm sunuyoruz.`,
    descriptionEn: `Our Enterprise Resource Planning (ERP) solution goes beyond traditional record keeping by serving as an intelligent business platform that drives operational excellence and digital transformation. With end-to-end integration across Field Operations, Finance, Procurement, Warehouse Management, Manufacturing, and Human Resources, it enables organizations to streamline processes, improve cross-functional collaboration, and gain real-time visibility into business operations through a flexible, scalable, and modular architecture.`,
  },
  {
    id: "mobile-solutions",
    icon: Smartphone,
    title: "Mobil Yazılım Çözümleri",
    titleEn: "Mobile Application Solutions",
    description: `Günümüz iş dünyasında operasyonel verimliliği artırmak, müşteri deneyimini mükemmelleştirmek ve pazarda rekabet avantajı sağlamak adına mobil yazılım çözümleri stratejik bir zorunluluk haline gelmiştir. Kurumların dijital ekosistemlerini mobil platformlara entegre etmesi; iş süreçlerinin zaman ve mekandan bağımsız olarak kesintisiz sürdürülmesine olanak tanır.

iOS ve Android teknolojilerinde gerek native kod yazarak işletim sisteminin sunduğu tüm özelliklerden faydalanıyor, gerekse responsive kod yazarak daha az maliyetli çözümler sunuyoruz.`,
    descriptionEn: `In today's digital economy, mobile technologies have become a fundamental component of business transformation, enabling organizations to improve operational efficiency, enhance customer engagement, and accelerate business performance. We help organizations transform their business operations through secure and intelligent mobile applications, providing seamless access to enterprise systems, data, and services across any device and location. We design and develop scalable mobile applications for both iOS and Android platforms, offering native development to fully leverage platform-specific capabilities and deliver superior performance, as well as cross-platform solutions that reduce development costs and accelerate deployment. By aligning technology with business objectives, we help organizations create intuitive, secure, and high-performing mobile experiences that support their digital transformation journey.`,
  },
  {
    id: "big-data-analytics",
    icon: BarChart3,
    title: "Büyük Veri ve Analitik Çözümleri",
    titleEn: "Big Data & Analytics Solutions",
    description: `Verinin yalnızca depolanması değil, doğru analiz edilerek stratejik karar süreçlerine dönüştürülmesi günümüz işletmeleri için kritik bir rekabet avantajı sağlar. Büyük Veri ve Analitik Çözümleri, kurumların farklı kaynaklardan elde ettiği yüksek hacimli, hızlı ve çeşitli verileri güvenli, ölçeklenebilir ve entegre bir platform üzerinde yönetmesini sağlayarak iş süreçlerini daha verimli hale getirir.

Modern veri mimarileri, gerçek zamanlı analiz yetenekleri ve gelişmiş raporlama altyapıları ile işletmeler; operasyonel süreçlerini optimize edebilir, müşteri davranışlarını daha iyi anlayabilir, riskleri önceden öngörebilir ve veri odaklı karar alma kültürünü kurumsal yapılarının merkezine taşıyabilir.

Sunduğumuz çözümler ile veri toplama, veri entegrasyonu, data lakehouse ve veri ambarı tasarımı, ETL/ELT süreçleri, gerçek zamanlı veri işleme, iş zekâsı, gelişmiş analitik, yapay zekâ ve makine öğrenmesi destekli analiz çözümleri kurumların ihtiyaçlarına özel olarak tasarlanır.`,
    descriptionEn: `In today's data-driven economy, the true value of data lies not only in its storage, but in its ability to generate actionable insights that drive strategic business decisions. Our Big Data & Analytics Solutions enable organizations to collect, integrate, manage, and analyze large volumes of structured and unstructured data through secure, scalable, and unified data platforms. By transforming enterprise data into meaningful business intelligence, organizations can optimize operational performance, better understand customer behavior, mitigate potential risks, and drive innovation through informed decision-making. We build modern data platforms that integrate data engineering, lakehouse and warehouse solutions, ETL/ELT pipelines, real-time processing, business intelligence, advanced analytics, and machine learning—creating a trusted foundation for enterprise-wide decision intelligence.`,
  },
  {
    id: "data-solutions",
    icon: Database,
    title: "Veri Çözümleri",
    titleEn: "Data Lifecycle Solutions",
    description: `Yapay zekanın başarısının verinin kalitesine ve erişilebilirliğine bağlı olduğu gerçeğiyle geliştirdiğimiz çözümler veriyi sadece depolamıyor, bir "Veri Üretim Hattı" oluşturuyor.

Bu çözümler uygulanırken;
- Edge Computing Veri Entegrasyonu ile sahada, veri merkeze gönderilmeden önce uç noktada işlenip yalnızca anlamlı özetler (anomali, kritik eşik vb.) ana merkeze taşınır.
- Modern Data Lakehouse Mimarisi ile tüm veri kaynaklarından gelen veri tek bir havuzda toplanır.
- ETL/ELT ve Veri Boru Hatları ile veri temizlenir, zenginleştirilir ve anonimleştirilerek analitik ortama taşınır.
- Veri yönetişimi sayesinde verinin "sahibi kim?", "nasıl değişti?" ve "kim erişebilir?" sorularının GRC katmanıyla entegre edilmesiyle bütünleşik bir yapı sağlanır.`,
    descriptionEn: `Building successful AI solutions starts with a modern data platform. Our approach manages the complete Data Lifecycle by integrating, processing, governing, and transforming enterprise data into a trusted asset for analytics and intelligent decision-making. Using Edge Computing, valuable information is filtered and processed before reaching central systems, reducing latency and optimizing data flows. Data from multiple sources is consolidated through a modern Data Lakehouse architecture, while ETL/ELT pipelines ensure that information is cleansed, standardized, enriched, and anonymized. Enterprise Data Governance integrated with GRC establishes a unified framework for data ownership, lineage, compliance, and secure access management.`,
  },
  {
    id: "ai-solutions",
    icon: Brain,
    title: "Yapay Zeka Çözümleri",
    titleEn: "Artificial Intelligence Solutions",
    description: `Veriden sadece "ne oldu?" sorusunun değil, "ne olacak?" ve "ne yapmalıyım?" sorularının cevabını alıyoruz. Uyguladığımız çözümlerde veri modelleri ve modern yapay zeka algoritmaları ile; kestirimsel bakım, talep ve tedarik tahminleme, nakit tahminleme, siber ve operasyonel anomali tespiti sağlanırken, görüntü kayıtlarını da işleyerek saha denetimini insansız süreçlerle tasarlıyoruz.`,
    descriptionEn: `Our intelligent analytics solutions enable organizations to evolve from descriptive reporting to predictive and prescriptive decision-making. Using advanced AI models and modern data science techniques, we help organizations predict equipment failures, forecast demand and cash flow, identify cyber and operational risks before they occur, and automate visual inspection processes through AI-powered image and video analytics.`,
  },
  {
    id: "business-intelligence",
    icon: LineChart,
    title: "İş Zekası Çözümleri",
    titleEn: "Business Intelligence Solutions",
    description: `Verinin "hikayeleştirildiği" ve karar vericinin eyleme geçmesini sağlayan çözümlerimiz ile;
- Gerçek Zamanlı Dashboard ile sahadaki anlık durumu, harita altlığıyla entegre şekilde izleme
- Self-Service BI ile karar vericilerin kimseye ihtiyaç duymadan, sürükle-bırak yöntemiyle kendi raporlarını oluşturma
- Executive Scorecards ile kurumun ana hedefleri (KPI) ile gerçekleşen rakamların karşılaştırıldığı, sapmaların otomatik olarak "Kırmızı Alarm" olarak tanımlanabilmesi
- Neden Analizi Yeteneği ile Dashboard üzerindeki bir detaya tıklandığında, sorunun hangi kayıttan kaynaklandığını tespite yönelik derin analiz

kullanıcılara etkin yönetebilme imkanı sağlar.`,
    descriptionEn: `Our analytics solutions enable organizations to visualize, explore, and act on business data in real time. Interactive dashboards deliver operational visibility through live monitoring and map-based visualizations. Self-Service BI empowers business users to build reports and dashboards independently, while Executive Scorecards provide continuous visibility into strategic performance by comparing KPIs with business objectives. Built-in drill-through and root-cause analysis capabilities allow users to quickly identify the source of operational issues and make data-driven decisions with confidence.`,
  },
  {
    id: "consulting-operations",
    icon: Shield,
    title: "Danışmanlık ve Operasyonel Hizmetler",
    titleEn: "Consulting & Managed Services",
    description: `• Kritik Altyapılar için Entegre Siber Güvenlik (SIEM / SOAR / UEBA, EDR, NDR, ITDR, Deception Technologies, Attack Surface Management, Automated Security Validation, OT / ICS Security)
- BT Hizmet Yönetimi (Servis Masası, Problem Yönetimi, Olay Yönetimi, Değişiklik Yönetimi, Hizmet Seviyesi Taahhüdü)
- Varlık ve Konfigürasyon Yönetimi (CMDB, ITAM)
- Altyapı Kurulumu ve Yönetimi (Sunucu ve Depolama Altyapıları, Sanallaştırma, Hiper Bütünleşik Sistemler, Konteyner Yönetimi, Yedekleme ve Felaket Kurtarma, Performans ve Kapasite Yönetimi)
- Ağ ve Performans İzleme – NOC (7/24 Sistem izleme, Uygulama izleme)
- Veri Merkezi Kurulumu ve Yönetimi (Veri Merkezi Danışmanlığı ve Mimari Tasarımı, Veri Merkezi Fiziksel Kurulumu, Veri Merkezi Sistemsel ve Çevresel İzleme)`,
    descriptionEn: `• Integrated Cybersecurity Solutions for Critical Infrastructure (SIEM / SOAR / UEBA, EDR, NDR, ITDR, Deception Technologies, Attack Surface Management, Automated Security Validation, OT / ICS Security)
- IT Service Management (Service Desk, Incident Management, Problem Management, Change Management, Service Level Management)
- Asset & Configuration Management (CMDB, ITAM)
- Infrastructure Deployment & Management (Server & Storage Infrastructure, Virtualization Platforms, HCI, Container Platforms & Orchestration, Backup & Disaster Recovery, Performance & Capacity Management)
- Network Operations Center (NOC) & Performance Monitoring (24x7 Infrastructure Monitoring, Application Performance Monitoring)
- Data Center Deployment & Management (Data Center Consulting & Architecture Design, Data Center Infrastructure Deployment, Data Center Systems & Environmental Monitoring)`,
  },
  {
    id: "outsourcing",
    icon: Users,
    title: "Dış Kaynak Desteği",
    titleEn: "Outsourcing Services",
    description: `• Yerinde ve Uzaktan BT Destek Hizmetleri
- Uzman Personel Temini
- Yönetilen Hizmetler (Managed Services)
- Proje Bazlı Kaynak Desteği
- 7/24 Operasyon ve Destek Hizmetleri`,
    descriptionEn: `• On-site & Remote Support
- IT Consulting & Resource Provision
- Infrastructure & Support Services
- Project-Based Technical Resource Allocation
- 24×7 Operational Support & Service Management`,
  },
]

function ServiceCard({
  service,
  index,
  onClick,
  isSelected,
}: {
  service: (typeof services)[0]
  index: number
  onClick: () => void
  isSelected: boolean
}) {
  const shouldReduceMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)
  const Icon = service.icon
  const { language } = useLanguage()
  const displayTitle = language === "en" ? service.titleEn : service.title
  const displayDescription = language === "en" ? service.descriptionEn : service.description

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + "..."
  }

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ opacity: isSelected ? 0 : 1 }}
    >
      <div className="relative rounded-2xl p-6 sm:p-8 border bg-neutral-900/50 border-neutral-800/50 h-full flex flex-col min-h-[280px]">
        <GlowingEffect
          spread={40}
          glow={isHovered}
          disabled={!isHovered}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
          variant="green"
        />
        <div className="relative z-10 flex flex-col flex-1 pb-12">
          <motion.div
            layoutId={`header-${service.id}`}
            className="flex flex-col"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground transition-colors flex-1">
                {displayTitle}
              </h3>
            </div>
          </motion.div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-white transition-colors flex-1">
            {truncateText(displayDescription)}
          </p>
        </div>

        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20">
          <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center group-hover:bg-primary transition-colors">
            <Plus className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ExpandedCard({
  service,
  onClose,
}: {
  service: (typeof services)[0]
  onClose: () => void
}) {
  const Icon = service.icon
  const { language } = useLanguage()
  const displayTitle = language === "en" ? service.titleEn : service.title
  const displayDescription = language === "en" ? service.descriptionEn : service.description

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = `${scrollbarWidth}px`
    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Expanded Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="relative z-10 w-full max-w-4xl"
      >
        <div className="relative rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
          <GlowingEffect
            spread={60}
            glow={true}
            disabled={false}
            proximity={100}
            inactiveZone={0.01}
            borderWidth={2}
            variant="green"
          />

          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.1 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-30 w-10 h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-neutral-400" />
          </motion.button>

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            {/* Header */}
            <motion.div
              layoutId={`header-${service.id}`}
              className="flex flex-col mb-6"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <div className="flex-1 pt-1 pr-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {displayTitle}
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* Full Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="text-base text-muted-foreground leading-relaxed whitespace-pre-line"
            >
              {displayDescription}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ServicesDetailed() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)
  const { t } = useLanguage()

  return (
    <section id="hizmetler" className="bg-background overflow-x-clip py-16 sm:py-20">
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
          <span className="text-gradient-lime">{t("services.title")}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center"
        >
          {t("services.subtitle")}
        </motion.p>
      </LampHeader>

      <LayoutGroup>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onClick={() => setSelectedService(service)}
                  isSelected={selectedService?.id === service.id}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Expanded Card */}
        <AnimatePresence mode="wait">
          {selectedService && (
            <ExpandedCard
              key={selectedService.id}
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  )
}