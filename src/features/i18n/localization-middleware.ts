import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { type NextRequest, NextResponse } from 'next/server'

import { i18n, pathnameHasLocale } from './i18n-config'

function getLocale(request: NextRequest) {
  const headers = {
    'accept-language': request.headers.get('accept-language') ?? '',
  }
  const languages = new Negotiator({ headers }).languages()
  return match(languages, i18n.locales, i18n.defaultLocale)
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

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}
