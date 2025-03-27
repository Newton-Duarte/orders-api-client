import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getDictionary } from '@/features/i18n/get-dictionaries'

import { SignInForm } from '../components/sign-in/sign-in-form'

type SignInModulePropsProps = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['auth']
}

export async function SignInModule({ dictionary }: SignInModulePropsProps) {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-4 sm:p-0">
      <Card className="min-w-full sm:min-w-md">
        <CardHeader className="p-4 text-center sm:p-6">
          <CardTitle className="text-2xl">
            {dictionary.auth['sign-in'].title}
          </CardTitle>
          <CardDescription>
            {dictionary.auth['sign-in'].subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <SignInForm dictionary={dictionary} />
        </CardContent>
      </Card>
    </main>
  )
}
