'use client'

import { useState } from 'react'

import { getDictionary } from '../i18n/get-dictionaries'

export function Counter({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['counter']
}) {
  const [count, setCount] = useState(0)

  return (
    <div>
      This component is rendered on client:
      <button onClick={() => setCount((previous) => previous - 1)}>
        {dictionary.decrement}
      </button>
      {count}
      <button onClick={() => setCount((previous) => previous + 1)}>
        {dictionary.increment}
      </button>
    </div>
  )
}
