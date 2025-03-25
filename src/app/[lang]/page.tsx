import { Counter } from '@/features/counter/counter'
import { getDictionary } from '@/features/i18n/get-dictionaries'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div>
      <h1>{dict.landing.welcome}</h1>
      <Counter dictionary={dict.counter} />
    </div>
  )
}
