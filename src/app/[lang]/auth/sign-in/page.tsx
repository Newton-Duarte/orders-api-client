import { SignInModule } from '@/features/auth/sign-in'
import { getDictionary } from '@/features/i18n/get-dictionaries'

export default async function SignInPage({ params }: NextLangParams) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <SignInModule dictionary={dict} />
}
