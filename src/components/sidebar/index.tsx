'use client'

import { Menu } from 'lucide-react'
import { DynamicIcon } from 'lucide-react/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { getDictionary } from '@/features/i18n/get-dictionaries'

import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export function Sidebar({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['sidebar']
}) {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()
  const pathnameWithoutLocale = pathname.replace(/^\/(en-US|pt-BR)/, '') || '/'

  const navLinks = [
    {
      href: '/',
      label: dictionary.sidebar.dashboard,
      icon: 'layout-dashboard' as const,
    },
    {
      href: '/users',
      label: dictionary.sidebar.users,
      icon: 'users' as const,
    },
    {
      href: '/products',
      label: dictionary.sidebar.products,
      icon: 'package' as const,
    },
    {
      href: '/customers',
      label: dictionary.sidebar.customers,
      icon: 'store' as const,
    },
    {
      href: '/orders',
      label: dictionary.sidebar.orders,
      icon: 'shopping-cart' as const,
    },
  ]

  useEffect(() => {
    setIsOpen(false)

    return () => setIsOpen(false)
  }, [pathname])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="size-4" />
          <span className="sr-only">{dictionary.sidebar['toggle-menu']}</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        aria-describedby=""
        className="w-[240px] sm:w-[300px]"
      >
        <SheetHeader className="border-b">
          <SheetTitle>{dictionary['app-name']}</SheetTitle>
          <SheetDescription className="sr-only">
            {dictionary.sidebar['menu-navigation']}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-4">
          {navLinks.map((link) => {
            const isLinkActive = pathnameWithoutLocale === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded p-3 text-sm transition-all hover:bg-primary-foreground hover:text-primary ${isLinkActive ? 'bg-primary-foreground font-bold text-primary' : ''}`}
              >
                <DynamicIcon
                  name={link.icon}
                  className={`size-4 ${isLinkActive ? 'text-primary' : ''}`}
                />
                {link.label}
              </Link>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}
