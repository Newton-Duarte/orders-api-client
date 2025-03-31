interface SignInWithEmailAndPasswordRequest {
  email: string
  password: string
}

interface SignInWithEmailAndPasswordResponse {
  token: string
  expires_in: number
}

export async function signInWithEmailAndPassword({
  email,
  password,
}: SignInWithEmailAndPasswordRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const result = { token: 'Sign In -> Sucesso' }

  // const result = await api
  //   .post('auth/sign-in', {
  //     json: {
  //       email,
  //       password,
  //     },
  //   })
  //   .json<SignInWithEmailAndPasswordResponse>()

  return result
}
