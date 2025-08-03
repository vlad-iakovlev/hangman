import { BrowserStorageState, RootStoreState } from '../types'

export const getBrowserStorageState = (
  state: RootStoreState,
): BrowserStorageState => {
  return {
    words: state.words,
  }
}
