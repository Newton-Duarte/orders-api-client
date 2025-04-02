import { ListHeader } from '@/components/common/list-header'
import { getDictionary } from '@/features/i18n/get-dictionaries'

export default async function HomePage({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div>
      <ListHeader
        title={dict.dashboard.title}
        description={dict.dashboard.description}
      />
    </div>
  )
}
