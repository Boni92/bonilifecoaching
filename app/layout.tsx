import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import "../styles/gradient.css"
import GradientBackground from "./components/GradientBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Boni Life Coaching",
  description: "Interactive command palette with custom options",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <GradientBackground />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}
