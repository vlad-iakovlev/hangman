import { useCallback, useMemo } from 'react'
import { v4 as uuid } from 'uuid'
import { useRootStore } from '../RootStore'
import { WordsActionTypes } from '../types'

export const useWords = () => {
  const { state, dispatch } = useRootStore()

  const words = useMemo(() => state.words, [state])

  const createWord = useCallback(
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

  const resetWords = useCallback(() => {
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
