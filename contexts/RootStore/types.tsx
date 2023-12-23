export interface RootStoreState {
  words: {
    id: string
    letters: string
    word: string
  }[]
}

export interface BrowserStorageState {
  words: {
    id: string
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
