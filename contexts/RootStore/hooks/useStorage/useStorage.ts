import { StorageAction } from '../../reducers/storage.js'
import { RootStoreState } from '../../types.jsx'
import { useCleanupOldLocalStorageVersions } from './useCleanupOldLocalStorageVersions.js'
import { useLoadStateFromLocalStorage } from './useLoadStateFromLocalStorage.js'
import { useSaveStateToLocalStorage } from './useSaveStateToLocalStorage.js'

export const useStorage = (
  state: RootStoreState,
  dispatch: React.Dispatch<StorageAction>,
) => {
  const isStateLoaded = useLoadStateFromLocalStorage(state, dispatch)
  useSaveStateToLocalStorage(state, dispatch, isStateLoaded)

  useCleanupOldLocalStorageVersions()
}
