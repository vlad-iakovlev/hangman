import { StorageAction } from '../../reducers/storage'
import { RootStoreState } from '../../types'
import { useCleanupOldLocalStorageVersions } from './useCleanupOldLocalStorageVersions'
import { useLoadStateFromLocalStorage } from './useLoadStateFromLocalStorage'
import { useSaveStateToLocalStorage } from './useSaveStateToLocalStorage'

export const useStorage = (
  state: RootStoreState,
  dispatch: React.Dispatch<StorageAction>,
) => {
  const isStateLoaded = useLoadStateFromLocalStorage(state, dispatch)
  useSaveStateToLocalStorage(state, dispatch, isStateLoaded)

  useCleanupOldLocalStorageVersions()
}
