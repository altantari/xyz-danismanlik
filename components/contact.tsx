"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import { LampHeader } from "./ui/lamp"

export function Contact() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="iletisim" className="bg-card/50 relative overflow-hidden py-16 sm:py-20">
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
          <span className="text-gradient-lime">Harekete Geçelim</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed text-center"
        >
          Çözümlerimizden hangisi şu an kurumunuzun en öncelikli darboğazını çözebilir?
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-sm sm:text-base text-muted-foreground/70 max-w-2xl mx-auto mt-2 text-center"
        >
          İsterseniz bir Yol Haritası Çalıştayı planlayabiliriz.
        </motion.p>
      </LampHeader>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Bize Ulaşın</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dijital dönüşüm, yazılım geliştirme veya IT danışmanlık ihtiyaçlarınız için ekibimiz size yardımcı olmaya
                hazır.
              </p>
            </div>

            <div className="space-y-5">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">E-posta</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">info@xyz-tech.com.tr</p>
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">Telefon</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">+90 (212) 555 00 00</p>
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">Adres</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    YTÜ Yıldız Teknopark - Davutpaşa Kampüsü
                    <br />
                    Yıldız Teknik Üniversitesi, 34220 Esenler/İstanbul
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-[400px]"
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden h-full hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_-5px_oklch(0.92_0.16_125/0.2)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.0876543210987!2d28.8891234!3d41.0198765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf0b0001%3A0x9c9b9b9b9b9b9b9b!2sY%C4%B1ld%C4%B1z%20Teknopark%20Davutpa%C5%9Fa!5e0!3m2!1str!2str!4v1706000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ofis Konumu - Yıldız Teknik Üniversitesi, Davutpaşa, İstanbul"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
