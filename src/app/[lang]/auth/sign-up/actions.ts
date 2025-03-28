'use server'

export async function signUpAction(data: FormData) {
  console.log(Object.fromEntries(data))
}
