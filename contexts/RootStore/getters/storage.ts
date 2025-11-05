import { BrowserStorageState, RootStoreState } from '../types'

export const getBrowserStorageState = (
  state: RootStoreState,
): BrowserStorageState => ({
  words: state.words,
})
