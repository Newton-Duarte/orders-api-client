import { useParams, useRouter } from 'next/navigation'

import { i18n } from '@/features/i18n/i18n-config'

export function useLocaleUtils() {
  const { lang } = useParams()
  const router = useRouter()

  const currentLocaleOrDefault = lang || i18n.defaultLocale

  const navigateWithLocale = (path: string) => {
    const parsePath = `/${currentLocaleOrDefault}/${path}`
    router.push(parsePath)
  }

  return {
    currentLocaleOrDefault,
    navigateWithLocale,
  }
}
