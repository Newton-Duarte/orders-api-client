import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { getDictionary } from '@/features/i18n/get-dictionaries'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <Header lang={lang} dictionary={dict.header} />
      <main className="h-[calc(100vh-128px)] bg-background">
        <h1>{dict.landing.welcome}</h1>
      </main>
      <Footer dictionary={dict.footer} />
    </>
  )
}
