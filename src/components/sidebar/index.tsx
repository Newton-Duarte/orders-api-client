'use client'

import { Menu } from 'lucide-react'
import { DynamicIcon } from 'lucide-react/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()
  const pathnameWithoutLocale = pathname.replace(/^\/(en-US|pt-BR)/, '') || '/'

  const navLinks = [
    {
      href: '/',
      label: dictionary.sidebar.home,
      icon: 'home' as const,
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

  return (
    <Sheet>
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
              <div key={link.href} className="flex items-center gap-4">
                <DynamicIcon
                  name={link.icon}
                  className={`size-4 ${isLinkActive ? 'text-primary' : ''}`}
                />
                <Link
                  href={link.href}
                  className={`text-sm transition-all hover:text-primary hover:underline ${isLinkActive ? 'font-bold text-primary' : ''}`}
                >
                  {link.label}
                </Link>
              </div>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}
