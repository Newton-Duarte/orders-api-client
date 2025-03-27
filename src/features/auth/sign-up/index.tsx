import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getDictionary } from '@/features/i18n/get-dictionaries'

import { SignUpForm } from '../components/sign-up/sign-up-form'

type SignUpModulePropsProps = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['auth']
}

export async function SignUpModule({ dictionary }: SignUpModulePropsProps) {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-4 sm:p-0">
      <Card className="min-w-full sm:min-w-md">
        <CardHeader className="p-4 text-center sm:p-6">
          <CardTitle className="text-2xl">
            {dictionary.auth['sign-up'].title}
          </CardTitle>
          <CardDescription>
            {dictionary.auth['sign-up'].subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <SignUpForm dictionary={dictionary} />
        </CardContent>
      </Card>
    </main>
  )
}
