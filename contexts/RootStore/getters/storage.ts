import { BrowserStorageState, RootStoreState } from '../types.jsx'

export const getBrowserStorageState = (
  state: RootStoreState,
): BrowserStorageState => {
  return {
    words: state.words,
  }
}
