import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'
const StyleProvider = dynamic<{children: ReactNode}>(() => import('design-system/StyleProvider'))


export default function App({ Component, pageProps }: AppProps) {
  return (
  <StyleProvider>
    <Component {...pageProps} />
  </StyleProvider>
  )
}
