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
    <>
      <Card>
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
      <div className="mt-4 text-center text-sm text-muted-foreground">
        <p>{dictionary.auth['sign-in']['demo-credentials'].title}</p>
        <p>{dictionary.auth['sign-in']['demo-credentials'].email}</p>
        <p>{dictionary.auth['sign-in']['demo-credentials'].password}</p>
      </div>
    </>
  )
}
