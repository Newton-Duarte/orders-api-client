'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { getDictionary } from '@/features/i18n/get-dictionaries'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

type ThemeSwitcherProps = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['counter']
}

export function ThemeSwitcher({ dictionary }: ThemeSwitcherProps) {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
          <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">
            {dictionary['theme-switcher']['toggle-theme']}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {dictionary['theme-switcher']['theme-label']}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={theme === 'light' ? 'bg-muted' : ''}
        >
          {dictionary['theme-switcher']['light']}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={theme === 'dark' ? 'bg-muted' : ''}
        >
          {dictionary['theme-switcher']['dark']}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={theme === 'system' ? 'bg-muted' : ''}
        >
          {dictionary['theme-switcher']['system']}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
