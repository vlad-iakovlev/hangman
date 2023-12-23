export interface RootStoreState {
  words: {
    letters: string
    word: string
  }[]
}

export interface BrowserStorageState {
  words: {
    letters: string
    word: string
  }[]
}

export enum StorageActionType {
  SET_STATE_FROM_BROWSER_STORAGE = 'SET_STATE_FROM_BROWSER_STORAGE',
  RESET_STATE = 'RESET_STATE',
}

export enum WordsActionTypes {
  CREATE_WORD = 'CREATE_WORD',
}
