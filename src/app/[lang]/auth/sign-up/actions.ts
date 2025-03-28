'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { signUp } from '@/http/sign-up'

interface SignUpActionResponse {
  success: boolean
  message: string | null
  errors: {
    name?: string[] | undefined
    email?: string[] | undefined
    password?: string[] | undefined
    confirmPassword?: string[] | undefined
  } | null
}

const signUpSchema = z
  .object({
    name: z.string().min(2, 'Please provide a valid name'),
    email: z.string().email('Please provide a valid email'),
    password: z.string().min(6, 'Please provide a valid password'),
    confirmPassword: z.string().min(6, 'Password does not match'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password does not match',
    path: ['confirmPassword'],
  })

export async function signUpAction(
  data: FormData
): Promise<SignUpActionResponse> {
  const result = signUpSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: 'Error', errors }
  }

  const { name, email, password } = result.data

  await new Promise((resolve) => setTimeout(resolve, 2000))

  try {
    const response = await signUp({
      name,
      email,
      password,
    })

    return { success: true, message: 'Success', errors: null }
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
}
