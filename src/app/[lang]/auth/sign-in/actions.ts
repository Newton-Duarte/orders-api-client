'use server'

import { signInWithEmailAndPassword } from '@/http/sign-in-with-email-and-password'

export async function signInAction(previousState: unknown, data: FormData) {
  const { email, password } = Object.fromEntries(data)

  const response = await signInWithEmailAndPassword({
    email: String(email),
    password: String(password),
  })

  return response
}
