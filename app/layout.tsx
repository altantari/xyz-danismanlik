import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "@fontsource-variable/zalando-sans-expanded"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "BBM Tech - BT Danışmanlık ve Yazılım Çözümleri",
  description:
    "Kurumsal BT danışmanlık, yazılım geliştirme, siber güvenlik ve yapay zeka çözümleri. Dijital dönüşümde güvenilir çözüm ortağınız.",
  generator: "v0.app",
  keywords: [
    "BT danışmanlık",
    "yazılım geliştirme",
    "siber güvenlik",
    "yapay zeka",
    "ERP çözümleri",
    "dijital dönüşüm",
    "İstanbul",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#141414",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`dark ${geist.variable}`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
