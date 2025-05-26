import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FuryTech — Premium Software Solutions',
  description: 'FuryTech delivers bold, high-performance software solutions for the future. Igniting innovation through smart, scalable technology.',
  generator: 'Built by FuryTech',
  icons: {
    icon: '/furytech-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
