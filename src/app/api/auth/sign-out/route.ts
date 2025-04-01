import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { AUTH_TOKEN_KEY } from '@/features/auth/constants'

export async function GET(request: NextRequest) {
  const redirectUrl = request.nextUrl.clone()
  redirectUrl.pathname = '/auth/sign-in'

  const nextjsCookies = await cookies()
  nextjsCookies.delete(AUTH_TOKEN_KEY)

  return NextResponse.redirect(redirectUrl)
}
