import assert from 'assert'
import React from 'react'
import { useStorage } from './hooks/useStorage/useStorage.js'
import {
  StorageAction,
  isStorageAction,
  storageReducer,
} from './reducers/storage.js'
import { WordsActions, isWordsAction, wordsReducer } from './reducers/words.js'
import { RootStoreState } from './types.jsx'
import { getEmptyState } from './utils.js'

type Action = StorageAction | WordsActions

interface ContextValue {
  state: RootStoreState
  dispatch: React.Dispatch<Action>
}

const reducer: React.Reducer<RootStoreState, Action> = (state, action) => {
  if (isStorageAction(action)) return storageReducer(state, action)
  if (isWordsAction(action)) return wordsReducer(state, action)
  return state
}

export const RootStoreContext = React.createContext<ContextValue | undefined>(
  undefined,
)
RootStoreContext.displayName = 'RootStoreContext'

interface ProviderProps {
  children: React.ReactNode
}

export const RootStoreProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, getEmptyState())

  useStorage(state, dispatch)

  return (
    <RootStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </RootStoreContext.Provider>
  )
}

export const useRootStore = () => {
  const context = React.useContext(RootStoreContext)
  assert(context, 'useRootStore must be used within a RootStoreProvider')
  return context
}
