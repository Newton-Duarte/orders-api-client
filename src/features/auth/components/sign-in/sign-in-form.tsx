'use client'

import { Loader2, LogIn } from 'lucide-react'
import Link from 'next/link'
import { useActionState } from 'react'

import { signInAction } from '@/app/[lang]/auth/sign-in/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getDictionary } from '@/features/i18n/get-dictionaries'

type SignInFormProps = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['auth']
}

export function SignInForm({ dictionary }: SignInFormProps) {
  // eslint-disable-next-line unicorn/no-null
  const [state, formAction, isPending] = useActionState(signInAction, null)

  return (
    <form action={formAction} className="space-y-4">
      <h1 className="text-center text-sm font-bold text-primary">{state}</h1>
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
          autoComplete="current-password"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Button className="w-full" size="lg" disabled={isPending}>
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              <LogIn />
              {dictionary.auth.common['sign-in']}
            </>
          )}
        </Button>
        <div className="flex items-center justify-center gap-1 text-sm">
          <p className="text-muted-foreground">
            {dictionary.auth['sign-in']['sign-up-cta']}
          </p>
          <Link href="/auth/sign-up" className="text-primary hover:underline">
            {dictionary.auth.common['sign-up']}
          </Link>
        </div>
      </div>
    </form>
  )
}
