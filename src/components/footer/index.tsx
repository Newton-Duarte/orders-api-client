import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

import { getDictionary } from '@/features/i18n/get-dictionaries'

export function Footer({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['footer']
}) {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {`${new Date().getFullYear()} ${dictionary.copyright}`}
        </p>
        <ul className="flex gap-2">
          <li>
            <Link href="https://github.com/newton-duarte" target="_blank">
              <Github className="size-4" />
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/newton-duarte" target="_blank">
              <Linkedin className="size-4" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
