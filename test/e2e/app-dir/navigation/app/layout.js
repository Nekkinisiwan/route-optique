import { connection } from 'next/server'
import { Suspense } from 'react'

async function ForceDynamic() {
  await connection()
}

export default function Layout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Suspense>
          <ForceDynamic />
          {children}
        </Suspense>
      </body>
    </html>
  )
}
