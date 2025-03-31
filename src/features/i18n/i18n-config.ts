export const i18n = {
  defaultLocale: 'en-US',
  locales: ['en-US', 'pt-BR'],
}

export const languageNames: Record<string, string> = {
  'en-US': 'English',
  'pt-BR': 'Português',
}

export const pathnameHasLocale = (pathname: string) =>
  i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

export type Locale = (typeof i18n)['locales'][number]
