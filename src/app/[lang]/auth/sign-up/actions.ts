'use server'

import { signUp } from '@/http/sign-up'

export async function signUpAction(previousState: unknown, data: FormData) {
  const { name, email, password } = Object.fromEntries(data)

  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await signUp({
    name: String(name),
    email: String(email),
    password: String(password),
  })

  return response
}
