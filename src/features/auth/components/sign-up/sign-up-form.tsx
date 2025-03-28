'use client'

import { AlertTriangle, Loader2, LogIn, UserPlus } from 'lucide-react'
import Link from 'next/link'

import { signUpAction } from '@/app/[lang]/auth/sign-up/actions'
import { FieldError } from '@/components/common/form/field-error'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getDictionary } from '@/features/i18n/get-dictionaries'
import { useCustomFormState } from '@/hooks/use-custom-form-state'

type SignUpFormProps = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['auth']
}

export function SignUpForm({ dictionary }: SignUpFormProps) {
  const [{ success, message, errors }, handleSubmit, isPending] =
    useCustomFormState(signUpAction)

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!success && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Sign in failed!</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}
      <div className="space-y-2">
        <Label htmlFor="name">{dictionary.auth.common['full-name']}</Label>
        <Input
          id="name"
          name="name"
          placeholder={dictionary.auth.common['full-name-placeholder']}
          className="h-10"
        />
        {errors?.name && <FieldError>{errors.name[0]}</FieldError>}
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
        {errors?.email && <FieldError>{errors.email[0]}</FieldError>}
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
        {errors?.password && <FieldError>{errors.password[0]}</FieldError>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">
          {dictionary.auth.common['confirm-password']}
        </Label>
        <Input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder={dictionary.auth.common['password-placeholder']}
          className="h-10"
          autoComplete="new-password"
        />
        {errors?.confirmPassword && (
          <FieldError>{errors.confirmPassword[0]}</FieldError>
        )}
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
