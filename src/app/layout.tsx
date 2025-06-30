import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import SEO from '../components/SEO'
import ClientProviders from './ClientProviders'
import CookieConsent from '../components/CookieConsent'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Auto Detailing Pro',
  description: 'Profesjonalny auto detailing w Twoim mieście',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SEO />
        <ClientProviders>{children}</ClientProviders>
        <CookieConsent />
      </body>
    </html>
  )
}
