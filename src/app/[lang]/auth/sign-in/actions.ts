'use server'

import { HTTPError } from 'ky'
import { cookies } from 'next/headers'
import { z } from 'zod'

import { AUTH_TOKEN_KEY } from '@/features/auth/constants'
import { signInWithEmailAndPassword } from '@/http/sign-in-with-email-and-password'

interface SignInActionResponse {
  success: boolean
  message: string | null
  errors: {
    email?: string[] | undefined
    password?: string[] | undefined
  } | null
}

const signInSchema = z.object({
  email: z.string().email({ message: 'Please provide a valid email' }),
  password: z.string().min(6, 'Please provide your password'),
})

export async function signInAction(
  data: FormData
): Promise<SignInActionResponse> {
  const result = signInSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: 'Error', errors }
  }

  const { email, password } = result.data

  try {
    const { token } = await signInWithEmailAndPassword({
      email,
      password,
    })

    const nextjsCookies = await cookies()
    nextjsCookies.set(AUTH_TOKEN_KEY, token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
  } catch (error) {
    if (error instanceof HTTPError) {
      const { message } = await error.response.json()
      return { success: false, message, errors: null }
    }

    console.error(error)

    return {
      success: false,
      message: 'Unexpected error, try again.',
      errors: null,
    }
  }

  return { success: true, message: 'Success', errors: null }
}
