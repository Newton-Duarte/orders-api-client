interface GetProfileResponse {
  id: number
  name: string
  email: string
}

export async function getUserProfile(): Promise<GetProfileResponse> {
  const result = { id: 1, name: 'Newton Duarte', email: 'newton@email.com' }
  // const result = await api.get('user-profile').json<GetProfileResponse>()

  return result
}
