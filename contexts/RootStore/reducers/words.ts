import { produce } from 'immer'
import { Word } from '../../../types/word'
import { RootStoreState, WordsActionTypes } from '../types'

const createWordReducer: React.Reducer<
  RootStoreState,
  {
    type: WordsActionTypes.CREATE_WORD
    payload: Word
  }
> = (state, { payload }) =>
  produce(state, (draft) => {
    draft.words.push(payload)
  })

const resetWordsReducer: React.Reducer<
  RootStoreState,
  {
    type: WordsActionTypes.RESET_WORDS
  }
> = (state) =>
  produce(state, (draft) => {
    draft.words = []
  })

export type WordsActions =
  | Parameters<typeof createWordReducer>[1]
  | Parameters<typeof resetWordsReducer>[1]

export const isWordsAction = (action: {
  type: string
  payload?: unknown
}): action is WordsActions =>
  Object.values(WordsActionTypes).includes(action.type as WordsActionTypes)

export const wordsReducer: React.Reducer<RootStoreState, WordsActions> = (
  state,
  action,
) => {
  switch (action.type) {
    case WordsActionTypes.CREATE_WORD:
      return createWordReducer(state, action)

    case WordsActionTypes.RESET_WORDS:
      return resetWordsReducer(state, action)
  }
}
