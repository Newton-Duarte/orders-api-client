import { LogIn } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getDictionary } from '@/features/i18n/get-dictionaries'

type SignInFormProps = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['auth']
}

export function SignInForm({ dictionary }: SignInFormProps) {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">{dictionary.auth.common.email}</Label>
        <Input
          id="email"
          type="email"
          placeholder={dictionary.auth.common['email-placeholder']}
          className="h-10"
          autoComplete="email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">{dictionary.auth.common.password}</Label>
        <Input
          id="password"
          type="password"
          placeholder={dictionary.auth.common['password-placeholder']}
          className="h-10"
          autoComplete="current-password"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Button className="w-full" size="lg">
          <LogIn />
          {dictionary.auth.common['sign-in']}
        </Button>
        <div className="flex items-center justify-center gap-1 text-sm">
          <p className="text-muted-foreground">
            {dictionary.auth['sign-in']['sign-up-cta']}
          </p>
          <Link href="/sign-up" className="text-primary hover:underline">
            {dictionary.auth.common['sign-up']}
          </Link>
        </div>
      </div>
    </form>
  )
}
