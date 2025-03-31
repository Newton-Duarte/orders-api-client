import { auth } from '@/features/auth/auth'
import { getDictionary } from '@/features/i18n/get-dictionaries'

import HeaderContainer from './header-container'

type HeaderProps = {
  lang: string
}

export async function Header({ lang }: HeaderProps) {
  const dict = await getDictionary(lang)

  const user = await auth()

  return <HeaderContainer lang={lang} dictionary={dict} user={user} />
}
