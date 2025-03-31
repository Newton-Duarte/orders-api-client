import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { AUTH_TOKEN_KEY } from '@/features/auth/constants'
import { i18n } from '@/features/i18n/i18n-config'

export async function GET(request: NextRequest) {
  const redirectUrl = request.nextUrl.clone()
  const searchParams = request.nextUrl.searchParams
  const currentLocale = searchParams.get('locale') ?? i18n.defaultLocale
  redirectUrl.pathname = `${currentLocale}/auth/sign-in`
  redirectUrl.search = ''

  console.log('SIGN OUT!')

  const nextjsCookies = await cookies()
  nextjsCookies.delete(AUTH_TOKEN_KEY)

  return NextResponse.redirect(redirectUrl)
}
