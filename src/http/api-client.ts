import { CookiesFn, getCookie } from 'cookies-next'
import ky from 'ky'

import { AUTH_TOKEN_KEY } from '@/features/auth/constants'

export const api = ky.create({
  prefixUrl: 'http://localhost:8080',
  hooks: {
    beforeRequest: [
      async (request) => {
        let cookieStore: CookiesFn | undefined

        if (typeof globalThis === 'undefined') {
          const { cookies: serverCookies } = await import('next/headers')
          cookieStore = serverCookies
        }

        const token = await getCookie(AUTH_TOKEN_KEY, { cookies: cookieStore })

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
  },
})
