import { connection } from 'next/server'
import { Suspense } from 'react'

async function ForceDynamic({ children }) {
  await connection()
  return children
}

export default function Layout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Suspense>
          <ForceDynamic>{children}</ForceDynamic>
        </Suspense>
      </body>
    </html>
  )
}
