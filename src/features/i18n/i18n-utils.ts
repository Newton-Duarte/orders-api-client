import { i18n } from './i18n-config'

export const languageNames: Record<string, string> = {
  'en-US': 'English',
  'pt-BR': 'Português',
}

export const pathnameHasLocale = (pathname: string): boolean =>
  i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

export const extractLocaleFromPathname = (pathname: string): string =>
  pathnameHasLocale(pathname) ? pathname?.split?.('/')?.[1] : i18n.defaultLocale

export const getLocaleFromCookie = (cookies: string): string => {
  const match = cookies.match(/NEXT_LOCALE=([^;]+)/)
  return match ? match[1] : i18n.defaultLocale
}
