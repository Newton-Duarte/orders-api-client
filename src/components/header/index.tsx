'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type NavbarProps = {
  lang: string
  dictionary: {}
}

export function Header({ lang }: NavbarProps) {
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
      </div>
    </header>
  )
}
