import { SignUpModule } from '@/features/auth/sign-up'
import { getDictionary } from '@/features/i18n/get-dictionaries'

export default async function SignUpPage({ params }: NextLangParams) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <SignUpModule dictionary={dict} />
}
