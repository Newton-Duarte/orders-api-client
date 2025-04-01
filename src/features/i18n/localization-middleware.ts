import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { type NextRequest, NextResponse } from 'next/server'

import { i18n } from './i18n-config'
import { pathnameHasLocale } from './i18n-utils'

function getLocaleFromAcceptLanguage(request: NextRequest) {
  const headers = {
    'accept-language': request.headers.get('accept-language') ?? '',
  }
  const languages = new Negotiator({ headers }).languages()
  return match(languages, i18n.locales, i18n.defaultLocale)
}

function getLocaleFromCookies(request: NextRequest): string | undefined {
  const locale = request.cookies.get('NEXT_LOCALE')?.value
  return locale && i18n.locales.includes(locale) ? locale : undefined
}

export function localizationMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to
  // ignore files in `public` manually.
  if (
    pathnameHasLocale(pathname) ||
    [
      '/manifest.json',
      '/favicon.ico',
      // Your other files in `public`.
    ].includes(pathname)
  ) {
    return
  }

  // First try to get locale from cookies
  let locale = getLocaleFromCookies(request)

  // If no valid locale in cookies, fall back to accept-language header
  if (!locale) {
    locale = getLocaleFromAcceptLanguage(request)
  }

  request.nextUrl.pathname = `/${locale}${pathname}`

  // Create the response with the redirect
  const response = NextResponse.redirect(request.nextUrl)

  // Set the NEXT_LOCALE cookie if it wasn't already set
  if (!request.cookies.has('NEXT_LOCALE')) {
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      sameSite: 'strict',
      maxAge: 31_536_000, // 1 year
    })
  }

  return response
}
