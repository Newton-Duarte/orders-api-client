import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { i18n } from '@/features/i18n/i18n-config'
import { Providers } from '../providers'

import '../globals.css'

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
  const { lang = 'en-US' } = await params

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
