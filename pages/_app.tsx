import type { AppProps } from 'next/app.js'
import { ErrorBoundary } from '../components/misc/ErrorBoundary.jsx'
import { NextHead } from '../components/next/Head.js'
import { Fallback } from '../components/pages/Fallback.jsx'
import { RootStoreProvider } from '../contexts/RootStore/RootStore.jsx'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<Fallback />}>
      <NextHead>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </NextHead>

      <RootStoreProvider>
        <Component {...pageProps} />
      </RootStoreProvider>
    </ErrorBoundary>
  )
}
