import '../globals.css'

import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { i18n } from '@/features/i18n/i18n-config'

import { Providers } from '../providers'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang = i18n.defaultLocale } = await params

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
