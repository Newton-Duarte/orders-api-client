import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { isAuthenticated } from '@/features/auth/auth'
import { getDictionary } from '@/features/i18n/get-dictionaries'

export default async function AppLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  if (!(await isAuthenticated())) {
    redirect('/auth/sign-in')
  }

  return (
    <>
      <Header lang={lang} />
      <main className="container mx-auto h-[calc(100vh-164px)]">
        {children}
      </main>
      <Footer dictionary={dict.footer} />
    </>
  )
}
