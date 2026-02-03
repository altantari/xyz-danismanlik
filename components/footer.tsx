import Link from "next/link"
import { Zap } from "lucide-react"

const footerLinks = {
  Hizmetler: [
    { label: "ERP Çözümleri", href: "#hizmetler" },
    { label: "Yapay Zeka", href: "#hizmetler" },
    { label: "Siber Güvenlik", href: "#hizmetler" },
    { label: "Veri Çözümleri", href: "#hizmetler" },
  ],
  Şirket: [
    { label: "Neler Yapıyoruz", href: "#neler-yapiyoruz" },
    { label: "Hizmetler", href: "#hizmetler" },
    { label: "İletişim", href: "#iletisim" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-8">
          {/* Link columns */}
          <div className="grid grid-cols-2 gap-12 sm:gap-16 lg:gap-24 order-first">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3 sm:mb-4">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Logo and motto - centered on mobile, far right on desktop */}
          <div className="text-center sm:text-right order-last sm:order-last">
            <Link href="/" className="flex items-center gap-3 mb-2 justify-center sm:justify-end">
              <Zap className="w-8 h-8 text-primary" />
              <span className="font-heading text-xl font-bold text-foreground" style={{ letterSpacing: "-0.05em" }}>
                XYZ Tech
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} XYZ Tech. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
