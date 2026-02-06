import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adel Basli - Team Lead Data Science & AI",
  description:
    "Personal resume and portfolio of Adel Basli, a highly motivated data science leader with over 11 years of experience in leveraging machine learning and AI to drive business value.",
  icons: {
    icon: "/images/ab_logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#005671",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
