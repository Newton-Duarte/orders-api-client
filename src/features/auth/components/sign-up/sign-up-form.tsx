import { LogIn } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getDictionary } from '@/features/i18n/get-dictionaries'

type SignUpFormProps = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['auth']
}

export function SignUpForm({ dictionary }: SignUpFormProps) {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="full-name">{dictionary.auth.common['full-name']}</Label>
        <Input
          id="full-name"
          placeholder={dictionary.auth.common['full-name-placeholder']}
          className="h-10"
        />
      </div>
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
          autoComplete="new-password"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirm-password">
          {dictionary.auth.common['confirm-password']}
        </Label>
        <Input
          id="confirm-password"
          type="password"
          placeholder={dictionary.auth.common['password-placeholder']}
          className="h-10"
          autoComplete="new-password"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Button className="w-full" size="lg">
          <LogIn />
          {dictionary.auth.common['sign-up']}
        </Button>
        <div className="flex items-center justify-center gap-1 text-sm">
          <p className="text-muted-foreground">
            {dictionary.auth['sign-up']['sign-in-cta']}
          </p>
          <Link href="/sign-in" className="text-primary hover:underline">
            {dictionary.auth.common['sign-in']}
          </Link>
        </div>
      </div>
    </form>
  )
}
