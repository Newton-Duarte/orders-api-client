import { getDictionary } from '@/features/i18n/get-dictionaries'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <h1>{dict.landing.welcome}</h1>
}
