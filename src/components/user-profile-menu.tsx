/* eslint-disable @next/next/no-html-link-for-pages */
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'

import { getDictionary } from '@/features/i18n/get-dictionaries'
import { getInitials } from '@/utils/get-initials'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

type UserProfileMenuProps = {
  user: User
  dictionary: Awaited<ReturnType<typeof getDictionary>>['user-profile']
}

export function UserProfileMenu({ user, dictionary }: UserProfileMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Avatar>
          <AvatarImage
            src="https://github.com/newton-duarte.png"
            alt="Newton Duarte"
          />
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {dictionary['user-profile-menu']['title']}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/user-profile">
            <User className="size-4" />
            <p>{dictionary['user-profile-menu'].profile}</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="/api/auth/sign-out">
            <LogOut className="size-4 text-destructive dark:text-red-400" />
            <p className="text-destructive dark:text-red-400">
              {dictionary['user-profile-menu']['sign-out']}
            </p>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
