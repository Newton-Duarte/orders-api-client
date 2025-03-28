import { ReactNode } from 'react'

export default async function AuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 sm:p-0">
      <div className="min-w-full sm:min-w-md">{children}</div>
    </div>
  )
}
