import { cookies } from 'next/headers'

import { AUTH_TOKEN_KEY } from './constants'

export async function isAuthenticated() {
  const nextjsCookies = await cookies()
  return !!nextjsCookies.get(AUTH_TOKEN_KEY)?.value
}
