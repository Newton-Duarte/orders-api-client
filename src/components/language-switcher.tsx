'use client'

import { setCookie } from 'cookies-next'
import { Globe } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

import { getDictionary } from '@/features/i18n/get-dictionaries'
import { i18n } from '@/features/i18n/i18n-config'
import { languageNames } from '@/features/i18n/i18n-utils'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

type LanguageSwitcherProps = {
  currentLocale: string
  dictionary: Awaited<ReturnType<typeof getDictionary>>['language-switcher']
}

export function LanguageSwitcher({
  currentLocale,
  dictionary,
}: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleChangeLanguage = (locale: string) => {
    setCookie('NEXT_LOCALE', locale, {
      path: '/',
      sameSite: 'strict',
      maxAge: 31_536_000,
    })

    const pathWithoutLocale = pathname.replace(/^\/(en-US|pt-BR)/, '') || '/'
    router.push(`/${locale}${pathWithoutLocale}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Globe className="size-4" />
          {languageNames[currentLocale]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {dictionary['language-switcher']['language-label']}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {i18n.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleChangeLanguage(locale)}
            className={currentLocale === locale ? 'bg-muted' : ''}
          >
            {languageNames[locale] || locale}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
