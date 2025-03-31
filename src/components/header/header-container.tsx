'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getDictionary } from '@/features/i18n/get-dictionaries'

import { LanguageSwitcher } from '../language-switcher'
import { ThemeSwitcher } from '../theme-switcher'
import { UserProfileMenu } from '../user-profile-menu'

type HeaderContainerProps = {
  lang: string
  dictionary: Awaited<ReturnType<typeof getDictionary>>['header']
  user: User
}

export default function HeaderContainer({
  lang,
  dictionary,
  user,
}: HeaderContainerProps) {
  const [isScrolled, setIsScrolled] = useState(false)

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
          <UserProfileMenu user={user} dictionary={dictionary} />
        </div>
      </div>
    </header>
  )
}
