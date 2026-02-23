"use client"

import { useLanguage } from "@/lib/language-context"

interface LogoProps {
  size?: "sm" | "md"
  showSubtitle?: boolean
}

export function Logo({ size = "md", showSubtitle = true }: LogoProps) {
  const { language } = useLanguage()

  const subtitle = language === "tr" ? "Yazılım & Danışmanlık" : "Software & Consulting"

  const isMd = size === "md"

  return (
    <div className="flex items-center gap-2">
      {/* Icon Mark */}
      <div
        className={`relative flex items-center justify-center ${
          isMd ? "w-8 h-8 sm:w-9 sm:h-9" : "w-6 h-6"
        }`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Hexagonal tech shape */}
          <path
            d="M18 2L32 10V26L18 34L4 26V10L18 2Z"
            fill="none"
            stroke="oklch(0.92 0.16 125)"
            strokeWidth="1.5"
            opacity="0.4"
          />
          {/* Inner accent lines */}
          <path
            d="M18 6L28 12V24L18 30L8 24V12L18 6Z"
            fill="oklch(0.92 0.16 125)"
            opacity="0.1"
          />
          {/* B letter stylized */}
          <text
            x="18"
            y="22"
            textAnchor="middle"
            fill="oklch(0.92 0.16 125)"
            fontSize="16"
            fontWeight="700"
            fontFamily="var(--font-sans)"
          >
            B
          </text>
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <div className={`flex items-baseline gap-0.5 leading-none ${isMd ? "text-lg sm:text-xl" : "text-sm"}`}>
          <span
            className="font-bold tracking-tight"
            style={{ color: "oklch(0.92 0.16 125)" }}
          >
            BBM
          </span>
          <span className="font-light text-foreground tracking-tight">
            Tech
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`text-muted-foreground tracking-widest uppercase ${
              isMd ? "text-[7px] sm:text-[8px]" : "text-[6px]"
            }`}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  )
}
