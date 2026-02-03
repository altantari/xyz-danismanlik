"use client"

import { useState, useEffect } from "react"
import { motion, useReducedMotion, AnimatePresence, LayoutGroup } from "framer-motion"
import {
  Server,
  Database,
  Brain,
  BarChart3,
  Shield,
  Lock,
  Layers,
  MapPin,
  Zap,
  Cloud,
  Settings,
  Plus,
  X,
  Activity,
  Map,
  Route,
  FileText,
  HardDrive,
  Network,
  AlertTriangle,
  Building2,
  Thermometer,
  Cable,
  MonitorCheck,
} from "lucide-react"
import { LampHeader } from "./ui/lamp"
import { GlowingEffect } from "./ui/glowing-effect"

const professionalServices = [
  {
    id: "erp",
    icon: Server,
    title: "Stratejik ERP Çözümleri Geliştirme",
    description: `Kurumsal kaynak planlamayı sadece bir kayıt sistemi değil, operasyonel hız kazandıran bir "iş zekası motoru" olarak konumlandırıyoruz. Uçtan Uca Entegrasyonu önemseyerek Saha Operasyonları, Finans, Satın Alma, Depo, Üretim ve İK süreçlerinin tam uyumunu sağlıyoruz.

Müşteri gereksinimleri doğrultusunda çözümümüz de On-Prem, Mobil veya Cloud 'da yönetebilme imkanı sunuyoruz`,
  },
  {
    id: "field-ops",
    icon: MapPin,
    title: "Operasyon ve Saha Yönetimi",
    description: `Saha operasyonlarını kağıt formlardan ve manuel veri girişinden kurtarıp; anlık, izlenebilir ve doğrulanabilir bir dijital sürece dönüştürüyoruz. Amacımız, merkezdeki karar vericiler ile sahadaki uygulayıcılar arasında tek bir veri doğrusu oluşturmaktır.

İş emirlerinin planlanması, saha ekibine atanması ve mobil üzerinden (harita destekli) takibi. Kaynakların (personel/ekipman) vardiya ve görev bazlı görsel çizelgelenmesi. Kritik varlıkların koruyucu (preventive) ve düzeltici (corrective) bakım süreçleri. Sahadaki araçların yakıt, servis ve konum takibi.Sensörlerden gelen verilerin (sıcaklık, basınç, titreşim) doğrudan ERP'ye akışı.

Saha personelinin görev dağılımını, rota optimizasyonunu ve iş tamamlama süreçlerini ERP ile tam entegre yönetiyoruz. Operatörlerin yapacağı işlerin adım adım mobil cihazlarına düşmesi ve checklist'lerin doldurulmasını sağlıyoruz. Tamamlanan işlerin fotoğraf, video veya dijital imza ile ERP sistemine anlık aktarımını sağlıyoruz. Görevlerin nerede ve ne kadar sürede yapıldığının GPS üzerinden yönetiyoruz.

Sahadaki her bir ekipman, yedek parça ve sarf malzemenin yaşam döngüsünü ERP üzerinden takip ediyoruz. QR kod veya RFID taraması ile depodan sahaya çıkan parçanın hangi makineye takıldığının anlık kaydı. Saha ekiplerinin araç stoklarını (Van Stock) mobil uygulama üzerinden yönetmesi ve otomatik ikmal talepleri. Tek bir barkod taraması ile ekipmanın bakım geçmişine ve teknik dokümanlarına sahada erişim.`,
  },
  {
    id: "predictive-maintenance",
    icon: Activity,
    title: "Tahminleyici Bakım, Kestirimci Bakım İş Emirleri, Arıza Erken Uyarı Sistemi",
    description: `Tahminleyici Bakım, Kestirimci Bakım İş Emirleri, Arıza Erken Uyarı Sistemi`,
  },
  {
    id: "asset-visualization",
    icon: Map,
    title: "Varlık Envanterinin Harita Üzerinde Görselleştirilmesi",
    description: `Sadece "neyin" ve "ne zaman" yapıldığını değil, "nerede" olduğunu ve "çevresel koşulların" etkisini de yönetiyoruz. Harita altlığı, tüm IT/OT ve ERP verilerinin üzerine bindiği ana görsel düzlemdir.

Tüm varlıklar (Assets), ERP'deki teknik özellikleriyle birlikte harita üzerinde birer katman olarak sunulur; arızalı veya bakım zamanı gelmiş cihazların harita üzerinde farklı renklerle (Isı Haritası - Heatmap) gösterilmesi, şebeke kapsama alanı dışındaki uzak sahalarda, personelin cihazına yüklü çevrimdışı altlıklarla çalışabilmesi sunulur.`,
  },
  {
    id: "field-team-tracking",
    icon: Route,
    title: "Dinamik Saha Ekibi İzleme ve Rota Optimizasyonu",
    description: `Saha ekiplerinin ERP iş emirleri, coğrafi verilerle harmanlanarak en verimli şekilde yönetilir. Personel ve araç lokasyonlarının anlık takibi. Bir arıza bildirimi (Ticket) oluştuğunda, ERP sisteminin coğrafi olarak en yakın ve yetkin ekibi parametrelere bağlı olarak otomatik olarak ataması. Rota Planlama; Trafik durumu, yol kısıtlamaları ve iş önceliğine göre optimize edilmiş sürüş rotalarıyla yakıt ve zaman tasarrufu.

Olaya Müdahale Hızı Artırılması, Görsel Raporlamanın sağlabilmesi ve Denetim ve Şeffaflık noktalarında destekleyici faktör olarak harita katmanlarını kullanıyoruz.

BI Ürünümüzle Executive Dashboard sunuyoruz.`,
  },
  {
    id: "custom-software",
    icon: Zap,
    title: "Özel Yazılım Geliştirme Çözümleri",
    description: `Standart paketlerin yetmediği durumlarda, işinize tam uyum sağlayan, yüksek performanslı ve güvenli yazılım mimarileri dikkate alarak inşa ediyoruz.

İş süreçlerinize %100 uyumlu, terzi dikimi dijital çözümler. Teknik borç (Technical Debt) bırakmayan, sürdürülebilir kod yapısı. Hızlı prototipleme ve pazara çıkış süresinin (Time-to-Market) kısaltılmasını sağlıyoruz.

Operasyonel Odak: ERP ve Büyük Veri çözümlerimiz, özellikle üretim ve kritik altyapı sektörlerindeki "sıfır kesinti" prensibine göre tasarlanmıştır.

Modülerlik: İster sadece bir ERP modülü, ister tüm veri altyapısının dönüşümü; ihtiyaca göre ölçeklenebilen yapı.`,
  },
  {
    id: "data-solutions",
    icon: Database,
    title: "Veri Çözümleri",
    description: `Yapay zekanın başarısı, verinin kalitesine ve erişilebilirliğine bağlıdır. Biz veriyi sadece depolamıyor, bir "Veri Üretim Hattı" kuruyoruz.

• Modern Data Lakehouse Mimarisi: ERP'den gelen yapılandırılmış veriler ile IoT/OT sensörlerinden gelen yüksek hızlı (streaming) verileri tek bir potada eritiriz.

• ETL/ELT ve Veri Boru Hatları (Pipelines): Verinin kaynaktan (Saha, ERP, Loglar) temizlenerek, zenginleştirilerek ve anonimleştirilerek (KVKK uyumlu) analitik ortama taşınması.

• Veri Yönetişimi (Data Governance): Verinin "sahibi kim?", "nasıl değişti?" (Lineage) ve "kim erişebilir?" sorularının GRC katmanıyla entegre yönetimi.

• Edge Computing Veri Entegrasyonu: Sahada, veriyi merkeze göndermeden önce uç noktada işleyip sadece anlamlı özetleri (Anomali, kritik eşik vb.) ana merkeze taşıyarak bant genişliği tasarrufu sağlama.`,
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "Yapay Zeka (AI) ve Makine Öğrenmesi (ML) Çözümleri",
    description: `Veriden sadece "ne oldu?" sorusunun değil, "ne olacak?" ve "ne yapmalıyım?" sorularının cevabını alıyoruz.

• Kestirimci Bakım (Predictive Maintenance): Saha operasyonları ve OT katmanından gelen titreşim, sıcaklık ve akım verilerini kullanarak ekipman arızalarını henüz gerçekleşmeden (genelde 48-72 saat önce) %90+ doğrulukla tahmin etme.

• Görüntü İşleme (Computer Vision) ile Saha Denetimi: Saha ekiplerinin kask/yelek (İSG) takıp takmadığının veya kritik vanaların/şalterlerin doğru konumda olup olmadığının kameralar aracılığıyla otomatik denetimi.

• Talep ve Tedarik Tahminleme: ERP verilerini kullanarak, gelecekteki yedek parça ihtiyacını veya enerji tüketimini mevsimsel ve konjonktürel verilerle tahmin edip stok maliyetini düşürme.

• Anomali Tespiti (Siber ve Operasyonel): Normal çalışma rutininden sapan her türlü hareketi (Örn: Bir pompanın farklı ses çıkarması veya bir kullanıcının olağandışı saatte veri çekmesi) anında yakalayan denetimsiz öğrenme modelleri.`,
  },
  {
    id: "bi-dashboard",
    icon: BarChart3,
    title: "Dashboard ve İş Zekası (BI) Çözümleri",
    description: `Bu katman, verinin "hikayeleştirildiği" ve karar vericinin eyleme geçmesini sağlayan vitrindir.

• Real-Time Operational Dashboards: Sahadaki anlık durumu, harita altlığıyla entegre şekilde milisaniyelik gecikmeyle izleme. (Örn: "Şu an hangi bölgede verimlilik düşüyor?")

• Self-Service BI: Yöneticilerin yazılımcıya ihtiyaç duymadan, sürükle-bırak yöntemiyle kendi raporlarını (Finansal sağlık, personel performansı vb.) oluşturabilmesi.

• Executive Scorecards (Stratejik Karneler): Kurumun ana hedefleri (KPI) ile gerçekleşen rakamların karşılaştırıldığı, sapmaların otomatik olarak "Kırmızı Alarm" olarak yandığı yönetim panelleri.

• Neden Analizi (Drill-Down) Yeteneği: Dashboard üzerindeki bir grafik hatasına tıklandığında, sorunun hangi sahadaki hangi cihazdan veya hangi ERP kaydından kaynaklandığını bulana kadar derinleşebilme.`,
  },
]

const consultingServices = [
  {
    id: "info-security",
    icon: Lock,
    title: "Bilgi Güvenliği",
    description: `Bilgi Güvenliği : Ağ Güvenliği, Bulut (Cloud) Güvenliği,Uygulama Güvenliği, Güvenlik Yönetimi, Olay Yönetimi, Problem Yönetimi`,
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Kritik Altyapılar için Entegre Siber Güvenlik",
    description: `Amacımız; güvenliği operasyonlara ek bir yük haline getirmeden, ölçülebilir ve doğrulanabilir hale getirmektir.

IT, Cloud ve OT/ICS ortamlarında görünürlük, tespit, müdahale ve doğrulama fonksiyonlarını tek bir entegre güvenlik mimarisi altında sunuyoruz.

Yaklaşımımız; riskleri erken aşamade görünür kılmak, olaylara hızlı ve kontrollü müdahale etmek ve operasyonel dayanıklılığı sürdürülebilir şekilde artırmak üzerine kuruludur.

Aşağıdaki güvenlik yetkinliklerimiz ile uçtan uca koruma sağlarız.

SIEM / SOAR / UEBA, EDR (Endpoint Detection & Response), NDR (Network Detection & Response), ITDR (Identity Threat Detection & Response), Deception Technologies, Attack Surface Management, Automated Security Validation, OT / ICS Security

Prensiplerimiz:
• Operasyonel süreklilik ve siber güvenlik birlikte değerlendirilir
• Görünürlük ve korelasyon tek merkezden sağlanır
• Önleme ve doğrulama mekanizmaları sürekli işletilir
• Mevcut altyapılarla uyumlu entegrasyon esas alınır

İhtiyaca göre modüler mimari ile farklı güvenlik katmanları devreye alınır.

Temel Siber Güvenlik Kabiliyetlerimiz :

SIEM / SOAR / UEBA, Merkezi log yönetimi ve olay korelasyonu, Otomasyon ile hızlı ve tutarlı müdahale, Davranış analizi ve anomali tespiti EDR

Uç nokta bazlı tehdit tespiti ve önleme, Davranışsal analiz ve hızlı izolasyon, Düşük gürültü, yüksek doğruluk, NDR

Ağ trafiği analizi ve varlık profilleme, Şifreli trafik analizi, Tehdit avcılığı ve senaryo bazlı tespit

ITDR / Kimlik Güvenliği

Kimlik ve erişim yaşam döngüsü görünürlüğü, Active Directory risk ve zafiyet analizi, Yetki yükseltme ve yanal hareket tespiti Deception

Aldatma tabanlı erken saldırı tespiti, Saldırgan davranışının izlenmesi, Yüksek sinyal kalitesi, düşük yanlış alarm

İç ve dış saldırı yüzeyinin yönetimi, Güvenlik kontrollerinin sürekli doğrulanması, Risklerin ölçülebilir hale getirilmesi, OT / ICS Güvenliği

OT/ICS ortamlarında güvenlik, üretim süreçlerini etkilemeden ve endüstriyel protokollere duyarlı şekilde ele alınır. Pasif izleme ve kesintisiz operasyon prensibi temel alınır.`,
  },
  {
    id: "itsm",
    icon: Settings,
    title: "BT Hizmet Yönetimi (ITSM)",
    description: `BT Hizmet Yönetimi (ITSM)
• Service Desk & Incident Management
• Problem & Change Management
• SLA (Hizmet Seviyesi Taahhüdü)`,
  },
  {
    id: "infrastructure",
    icon: HardDrive,
    title: "Altyapı Yönetimi",
    description: `Altyapı Yönetimi
• Hibrit Bulut Stratejisi: Kritik verilerin (OT/ICS) yerinde (On-Premise) tutulması, Bulut stratejisinin kurum/şirket politikalarına uygun ölçeklenmesi.
• Sanallaştırma ve Konteyner Yönetimi: Uygulamaların Docker/Kubernetes mimarisiyle, sunucudan bağımsız, yedekli ve hızlı yayılması.
• Yedekleme ve Felaket Kurtarma (Backup & DR): Verilerin sadece yedeklenmesi değil, felaket anında (deprem, fidye yazılımı vb.) ne kadar sürede geri dönebileceğinin (RTO/RPO) otomatize edilmesi.`,
  },
  {
    id: "itam-cmdb",
    icon: FileText,
    title: "Varlık ve Konfigürasyon Yönetimi (ITAM & CMDB)",
    description: `Varlık ve Konfigürasyon Yönetimi (ITAM & CMDB)

Hangi cihazın nerede olduğunu, kimin kullandığını ve diğer hangi sistemlerle bağlı olduğunu bilmektir.
• Dijital Envanter (CMDB)
• Yaşam Döngüsü Takibi`,
  },
  {
    id: "noc",
    icon: Network,
    title: "Ağ ve Performans İzleme (NOC - Network Operations Center)",
    description: `Ağ ve Performans İzleme (NOC - Network Operations Center)

7/24 Sistemlerin nabzının takip edilmesi sağlanır.
• Görünürlük
• Bandwidth Yönetimi`,
  },
  {
    id: "business-continuity",
    icon: Lock,
    title: "İş Sürekliliği",
    description: `İş Sürekliliği

Stratejimiz; ISO 22301 standartlarını temel alarak, teknik kurtarma (DR) ile yönetsel sürekliliği (BC) birleştirmektir`,
  },
  {
    id: "bia",
    icon: BarChart3,
    title: "İş Etki Analizi (BIA) ve Kritiklik Seviyeleri",
    description: `İş Etki Analizi (BIA) ve Kritiklik Seviyeleri

Her sistemin duruş maliyeti aynı değildir. Önce sistemleri iş önceliğine göre sınıflandırıyoruz.
• Maksimum Tolere Edilebilir Kesinti Süresi (MTPD)
• Bağımlılık Haritalama`,
  },
  {
    id: "disaster-recovery",
    icon: AlertTriangle,
    title: "Felaket Kurtarma (Disaster Recovery - DR) Mimarisi",
    description: `Felaket Kurtarma (Disaster Recovery - DR) Mimarisi
• Coğrafi Yedeklilik (Geo-Redundancy)
• RPO (Veri Kaybı Hedefi) & RTO (Geri Dönüş Süresi Hedefi)
• Immutable Backups (Değiştirilemez Yedekler)`,
  },
  {
    id: "alt-operations",
    icon: Settings,
    title: "Operasyonel ve Sahada Süreklilik (Alternative Operations)",
    description: `Operasyonel ve Sahada Süreklilik (Alternative Operations)

Teknoloji tamamen erişilemez olduğunda işin sahada nasıl devam edeceğinin planıdır.
• Manuel Mod Prosedürleri
• Acil Durum İletişim Planı`,
  },
  {
    id: "crisis-management",
    icon: AlertTriangle,
    title: "Kriz Yönetimi ve Playbooklar",
    description: `Kriz Yönetimi ve Playbooklar

Karar vericilerin panik anında hata yapmasını engelleyen standart operasyon prosedürleridir.
• Aktivasyon Eşikleri
• Kriz İletişimi`,
  },
  {
    id: "datacenter",
    icon: Cloud,
    title: "Kritik Altyapı Veri Merkezi (Data Center) Tasarım ve Kurulumu",
    description: `Kritik Altyapı Veri Merkezi (Data Center) Tasarım ve Kurulumu

Tasarım felsefemiz, TIA-942 ve Uptime Institute Tier III/IV standartlarını temel alarak; sıfır tek nokta hatası (No Single Point of Failure) ve yüksek enerji verimliliği (PUE) üzerine kuruludur.`,
  },
  {
    id: "physical-security",
    icon: Building2,
    title: "Fiziksel ve Mimari Güvenlik (Structural Layer)",
    description: `Fiziksel ve Mimari Güvenlik (Structural Layer)

Veri merkezinin konumu ve yapısal özellikleri, siber güvenlik kadar kritiktir.
• Sismik İzolasyon
• Yangın Algılama ve Söndürme
• Fiziksel Erişim Kontrolü`,
  },
  {
    id: "mep",
    icon: Thermometer,
    title: "Enerji ve İklimlendirme Altyapısı (Mechanical & Electrical)",
    description: `Enerji ve İklimlendirme Altyapısı (Mechanical & Electrical)
• Kesintisiz Enerji (UPS & Jeneratör)
• Hassas Kontrollü İklimlendirme
• Güç Dağıtım Birimleri (PDU)`,
  },
  {
    id: "connectivity",
    icon: Cable,
    title: "Ağ Bağlantısı ve Yapısal Kablolama (Connectivity Layer)",
    description: `Ağ Bağlantısı ve Yapısal Kablolama (Connectivity Layer)
• Birden fazla telekom operatöründen gelen yedekli fiber optik hatlar (F/O Meet-me Room).
• Kabinetler arası 40G/100G hızlarını destekleyen, hatasız etiketlenmiş ve yapılandırılmış Cat6A/Fiber optik sonlandırmalar.
• Dış dünya ile iç ağın güvenli ve yedekli şekilde buluştuğu özel ayrıştırılmış alanlar.`,
  },
  {
    id: "dcim",
    icon: MonitorCheck,
    title: "Veri Merkezi Altyapı Yönetimi (DCIM)",
    description: `Veri Merkezi Altyapı Yönetimi (DCIM)
• Nem, sıcaklık, su baskını ve kapı sensörlerinin harita altlığı ve GRC katmanıyla entegrasyonu.
• Boş kabinet alanı (U-space), enerji ve soğutma limitlerinin ERP ve BT Yönetimi panellerinden takip edilmesi.`,
  },
  {
    id: "blockchain",
    icon: Layers,
    title: "Blockchain Çözümleri : Güven ve Şeffaflık Mimarlığı",
    description: `XYZ-Tech olarak, merkeziyetsiz teknolojileri işletmenizin veri güvenliği ve izlenebilirlik ihtiyaçlarının merkezine yerleştiriyoruz. Verinin değiştirilemezliğini ve süreçlerin şeffaflığını garanti altına alan blockchain çözümlerimizle; tedarik zinciri takibinden smart kontratlara (zeki sözleşmeler), dijital kimlik yönetiminden güvenli veri paylaşım ekosistemlerine kadar uçtan uca güvenli yapılar inşa ediyoruz.

Standart platformlara bağımlı kalmadan, iş süreçlerinize ve yönetişim ihtiyaçlarınıza göre tasarlanan anahtar teslim özel blockchain ve mutabakat (custom consensus) altyapıları ile, karmaşık operasyonel ağlarınızda "Single Source of Truth" prensibini kriptografik olarak güvence altına alıyor; kurumlar arası iş birliğini sürdürülebilir bir dijital güven protokolüne dönüştürüyoruz.`,
  },
]

function ServiceCard({
  service,
  index,
  onClick,
  isSelected,
}: {
  service: (typeof professionalServices)[0] | (typeof consultingServices)[0]
  index: number
  onClick: () => void
  isSelected: boolean
}) {
  const shouldReduceMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)
  const Icon = service.icon

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
                {service.title}
              </h3>
            </div>
          </motion.div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-white transition-colors flex-1">
            {truncateText(service.description)}
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
  service: (typeof professionalServices)[0] | (typeof consultingServices)[0]
  onClose: () => void
}) {
  const Icon = service.icon

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
                    {service.title}
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
              {service.description}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ServicesDetailed() {
  const [selectedService, setSelectedService] = useState<
    (typeof professionalServices)[0] | (typeof consultingServices)[0] | null
  >(null)

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
          <span className="text-gradient-lime">Hizmetlerimiz</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center"
        >
          Operasyonel mükemmellik ve dijital dönüşüm için uçtan uca çözümler
        </motion.p>
      </LampHeader>

      <LayoutGroup>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profesyonel Hizmetler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-muted-foreground/60 mb-12 text-center">
              Profesyonel Hizmetler
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {professionalServices.map((service, index) => (
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

          {/* Danışmanlık Hizmetleri */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-muted-foreground/60 mb-12 text-center">
              Danışmanlık Hizmetleri
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {consultingServices.map((service, index) => (
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
