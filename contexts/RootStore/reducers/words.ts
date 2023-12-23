import { produce } from 'immer'
import { RootStoreState, WordsActionTypes } from '../types.jsx'

const createWordReducer: React.Reducer<
  RootStoreState,
  {
    type: WordsActionTypes.CREATE_WORD
    payload: {
      wordId: string
      letters: string
      word: string
    }
  }
> = (state, { payload: { wordId, letters, word } }) => {
  return produce(state, (draft) => {
    draft.words.push({
      id: wordId,
      letters,
      word,
    })
  })
}

export type WordsActions = React.ReducerAction<typeof createWordReducer>

export const isWordsAction = (action: {
  type: string
  payload?: unknown
}): action is WordsActions => {
  return Object.values(WordsActionTypes).includes(
    action.type as WordsActionTypes,
  )
}

export const wordsReducer: React.Reducer<RootStoreState, WordsActions> = (
  state,
  action,
) => {
  switch (action.type) {
    case WordsActionTypes.CREATE_WORD:
      return createWordReducer(state, action)
  }
}
