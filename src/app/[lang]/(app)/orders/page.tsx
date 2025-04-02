import { Plus } from 'lucide-react'

import { ListHeader } from '@/components/common/list-header'
import { Button } from '@/components/ui/button'
import { getDictionary } from '@/features/i18n/get-dictionaries'

export default async function OrdersPage({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="flex items-center justify-between">
      <ListHeader
        title={dict.orders.title}
        description={dict.orders.description}
      />
      <Button>
        <Plus className="size-4" />
        {dict.orders['add-order']}
      </Button>
    </div>
  )
}
