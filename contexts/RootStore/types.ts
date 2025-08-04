import { Word } from '../../types/word'

export type RootStoreState = {
  words: Word[]
}

export type BrowserStorageState = {
  words: Word[]
}

export enum StorageActionType {
  SET_STATE_FROM_BROWSER_STORAGE = 'SET_STATE_FROM_BROWSER_STORAGE',
}

export enum WordsActionTypes {
  CREATE_WORD = 'CREATE_WORD',
  RESET_WORDS = 'RESET_WORDS',
}
