import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhatWeDo } from "@/components/what-we-do"
import { ServicesDetailed } from "@/components/services-detailed"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative z-0 min-h-screen bg-background overflow-x-hidden">
      <div
        className="absolute top-0 right-0 w-[1500px] h-[1500px] -z-10 bg-primary pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse 50% 50% at 100% 0%, rgb(0 0 0 / 0.75), transparent)",
        }}
      >
        <div className="absolute inset-0 bg-cover bg-top-right" style={{ backgroundImage: "url('/grade.png')" }} />
      </div>

      <Navbar />
      <Hero />
      <WhatWeDo />
      <ServicesDetailed />
      <Contact />
      <Footer />
    </main>
  )
}
