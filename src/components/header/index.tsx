'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getDictionary } from '@/features/i18n/get-dictionaries'

import { LanguageSwitcher } from '../language-switcher'
import { ThemeSwitcher } from '../theme-switcher'

type NavbarProps = {
  lang: string
  dictionary: Awaited<ReturnType<typeof getDictionary>>['header']
  user: User
}

export function Header({ lang, user, dictionary }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-background/80 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href={`/${lang}`}
          className="text-xl font-bold tracking-tight transition-colors hover:text-primary"
        >
          Orders Client
        </Link>
        <div className="flex gap-4">
          <LanguageSwitcher currentLocale={lang} dictionary={dictionary} />
          <ThemeSwitcher dictionary={dictionary} />
        </div>
      </div>
    </header>
  )
}
