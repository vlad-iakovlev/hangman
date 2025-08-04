'use client'

import { RootStoreProvider } from '../../contexts/RootStore/RootStore'
import { ErrorBoundary } from '../misc/ErrorBoundary'
import { Fallback } from '../pages/Fallback'

type ClientRootProps = {
  children: React.ReactNode
}

export const ClientRoot = ({ children }: ClientRootProps) => (
  <ErrorBoundary fallback={<Fallback />}>
    <RootStoreProvider>{children}</RootStoreProvider>
  </ErrorBoundary>
)
