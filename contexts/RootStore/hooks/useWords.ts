import { useCallback, useMemo } from 'react'
import { useRootStore } from '../RootStore.jsx'
import { WordsActionTypes } from '../types.jsx'

export const useGroups = () => {
  const { state, dispatch } = useRootStore()

  const words = useMemo(() => state.words, [state])

  const createWord = useCallback(
    ({ letters, word }: { letters: string; word: string }) => {
      dispatch({
        type: WordsActionTypes.CREATE_WORD,
        payload: { letters, word },
      })
    },
    [dispatch],
  )

  return {
    words,
    createWord,
  }
}
