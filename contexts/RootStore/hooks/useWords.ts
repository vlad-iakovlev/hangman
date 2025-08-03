import React from 'react'
import { v4 as uuid } from 'uuid'
import { useRootStore } from '../RootStore'
import { WordsActionTypes } from '../types'

export const useWords = () => {
  const { state, dispatch } = useRootStore()

  const words = React.useMemo(() => state.words, [state])

  const createWord = React.useCallback(
    ({ letters, word }: { letters: string; word: string }) => {
      const id = uuid()

      dispatch({
        type: WordsActionTypes.CREATE_WORD,
        payload: { id, letters, word },
      })

      return id
    },
    [dispatch],
  )

  const resetWords = React.useCallback(() => {
    dispatch({
      type: WordsActionTypes.RESET_WORDS,
    })
  }, [dispatch])

  return {
    words,
    createWord,
    resetWords,
  }
}
