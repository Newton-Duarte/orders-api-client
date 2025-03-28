interface SignUpRequest {
  name: string
  email: string
  password: string
}

interface SignUpResponse {
  token: string
  expires_in: number
}

export async function signUp({ name, email, password }: SignUpRequest) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const result = { token: 'qweqwe213213123aczxcaseq3414' }

  // const result = await api
  //   .post('auth/sign-up', {
  //     json: {
  //       name,
  //       email,
  //       password,
  //     },
  //   })
  //   .json<SignUpResponse>()

  return result
}
