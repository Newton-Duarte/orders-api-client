'use client'

import { Loader2, LogIn, UserPlus } from 'lucide-react'
import Link from 'next/link'
import { useActionState } from 'react'

import { signUpAction } from '@/app/[lang]/auth/sign-up/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getDictionary } from '@/features/i18n/get-dictionaries'

type SignUpFormProps = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['auth']
}

export function SignUpForm({ dictionary }: SignUpFormProps) {
  // eslint-disable-next-line unicorn/no-null
  const [state, formAction, isPending] = useActionState(signUpAction, null)

  return (
    <form action={formAction} className="space-y-4">
      <h1 className="text-center text-sm font-bold text-primary">{state}</h1>
      <div className="space-y-2">
        <Label htmlFor="full-name">{dictionary.auth.common['full-name']}</Label>
        <Input
          id="full-name"
          name="full-name"
          placeholder={dictionary.auth.common['full-name-placeholder']}
          className="h-10"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{dictionary.auth.common.email}</Label>
        <Input
          id="email"
          type="email"
          name="email"
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
          name="password"
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
          name="confirm-password"
          placeholder={dictionary.auth.common['password-placeholder']}
          className="h-10"
          autoComplete="new-password"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Button className="w-full" size="lg" disabled={isPending}>
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              <UserPlus />
              {dictionary.auth.common['sign-up']}
            </>
          )}
        </Button>
        <div className="flex items-center justify-center gap-1 text-sm">
          <p className="text-muted-foreground">
            {dictionary.auth['sign-up']['sign-in-cta']}
          </p>
          <Link href="/auth/sign-in" className="text-primary hover:underline">
            {dictionary.auth.common['sign-in']}
          </Link>
        </div>
      </div>
    </form>
  )
}
