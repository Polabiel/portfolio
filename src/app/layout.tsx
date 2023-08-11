import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Gabriel Oliveira',
  description: 'Gabriel Oliveira is a software engineer who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
