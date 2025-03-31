import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { isAuthenticated } from '@/features/auth/auth'
import { getDictionary } from '@/features/i18n/get-dictionaries'

export default async function AuthLayout({
  params,
  children,
}: Readonly<{ params: Promise<{ lang: string }>; children: ReactNode }>) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  if (await isAuthenticated()) {
    redirect('/')
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 sm:p-0">
      <div className="min-w-full sm:min-w-md">
        {children}
        <div className="mt-4 flex justify-center gap-4">
          <LanguageSwitcher currentLocale={lang} dictionary={dict} />
          <ThemeSwitcher dictionary={dict} />
        </div>
      </div>
    </div>
  )
}
