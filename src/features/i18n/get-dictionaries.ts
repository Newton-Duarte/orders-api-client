import 'server-only'

import { i18n } from './i18n-config'

const dictionaries: Record<string, () => Promise<any>> = {
  'en-US': () =>
    import('./dictionaries/en-US.json').then((module) => module.default),
  'pt-BR': () =>
    import('./dictionaries/pt-BR.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  // Ensure we have a valid locale
  const validLocale = i18n.locales.includes(locale)
    ? locale
    : i18n.defaultLocale

  try {
    return await dictionaries[validLocale]()
  } catch {
    console.error(`Failed to load dictionary for locale: ${validLocale}`)
    // Fallback to default locale if the requested one fails
    return await dictionaries[i18n.defaultLocale]()
  }
}
