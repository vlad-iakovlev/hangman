'use client'

import { RootStoreProvider } from '../../contexts/RootStore/RootStore.jsx'
import { ErrorBoundary } from '../misc/ErrorBoundary.jsx'
import { Fallback } from '../pages/Fallback.jsx'

interface ClientRootProps {
  children: React.ReactNode
}

export const ClientRoot = ({ children }: ClientRootProps) => {
  return (
    <ErrorBoundary fallback={<Fallback />}>
      <RootStoreProvider>{children}</RootStoreProvider>
    </ErrorBoundary>
  )
}
