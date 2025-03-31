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

  // TODO: Need to fix a bug where when the user tries to log in after a log out
  // the token is being undefined (I think is something related to the AppLayout)
  // Could be next cache too
  console.log('auth token', token)

  if (!token) {
    redirect('/auth/sign-in')
  }

  try {
    const response = await getUserProfile()

    return response
  } catch {}

  redirect('/api/auth/sign-out')
}
