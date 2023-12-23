import React from 'react'
import { v4 as uuid } from 'uuid'
import { useRootStore } from '../RootStore.jsx'
import { WordsActionTypes } from '../types.jsx'

export const useWords = () => {
  const { state, dispatch } = useRootStore()

  const words = React.useMemo(() => state.words, [state])

  const createWord = React.useCallback(
    ({ letters, word }: { letters: string; word: string }) => {
      const wordId = uuid()

      dispatch({
        type: WordsActionTypes.CREATE_WORD,
        payload: { wordId, letters, word },
      })

      return wordId
    },
    [dispatch],
  )

  return {
    words,
    createWord,
  }
}
