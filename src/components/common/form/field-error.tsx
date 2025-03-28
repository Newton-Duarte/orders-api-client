import { PropsWithChildren } from 'react'

export function FieldError({ children }: PropsWithChildren) {
  return (
    <p className="text-xs font-medium text-red-500 dark:text-red-400">
      {children}
    </p>
  )
}
