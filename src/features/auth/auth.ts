import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getUserProfile } from '@/http/get-user-profile'

import { AUTH_TOKEN_KEY } from './constants'

export async function isAuthenticated() {
  const nextjsCookies = await cookies()
  return !!nextjsCookies.get(AUTH_TOKEN_KEY)?.value
}

export async function auth() {
  const nextjsCookies = await cookies()
  const token = nextjsCookies.get(AUTH_TOKEN_KEY)?.value

  if (!token) {
    redirect('/auth/sign-in')
  }

  try {
    const response = await getUserProfile()
    return response
  } catch {}

  redirect('/api/auth/sign-out')
}
