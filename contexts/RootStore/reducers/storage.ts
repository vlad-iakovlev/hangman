import {
  BrowserStorageState,
  RootStoreState,
  StorageActionType,
} from '../types.jsx'

const setStateFromBrowserStorageReducer: React.Reducer<
  RootStoreState,
  {
    type: StorageActionType.SET_STATE_FROM_BROWSER_STORAGE
    payload: string
  }
> = (state, { payload }) => {
  const storedState = JSON.parse(payload) as BrowserStorageState

  return {
    words: storedState.words,
  }
}

export type StorageAction = React.ReducerAction<
  typeof setStateFromBrowserStorageReducer
>

export const isStorageAction = (action: {
  type: string
  payload?: unknown
}): action is StorageAction => {
  return Object.values(StorageActionType).includes(
    action.type as StorageActionType,
  )
}

export const storageReducer: React.Reducer<RootStoreState, StorageAction> = (
  state,
  action,
) => {
  switch (action.type) {
    case StorageActionType.SET_STATE_FROM_BROWSER_STORAGE:
      return setStateFromBrowserStorageReducer(state, action)
  }
}
