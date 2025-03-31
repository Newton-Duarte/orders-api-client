import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { auth } from '@/features/auth/auth'
import { getDictionary } from '@/features/i18n/get-dictionaries'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const user = await auth()

  return (
    <>
      <Header lang={lang} dictionary={dict} user={user} />
      <main className="container mx-auto h-[calc(100vh-164px)] bg-background">
        <h1>{dict.landing.welcome}</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </main>
      <Footer dictionary={dict.footer} />
    </>
  )
}
