import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { SiteShell } from '@/components/layout/SiteShell'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pudipeddi Supriya | Full Stack Developer',
  description:
    'Premium portfolio for Pudipeddi Supriya — Full Stack Developer specializing in scalable web apps, real-time systems, and industrial dashboards.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
