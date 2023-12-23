import { useCallback, useMemo } from 'react'
import { useRootStore } from '../RootStore.jsx'
import { WordsActionTypes } from '../types.jsx'

export const useGroups = () => {
  const { state, dispatch } = useRootStore()

  const words = useMemo<string[]>(() => state.words, [state])

  const createWord = useCallback(
    (word: string) => {
      dispatch({
        type: WordsActionTypes.CREATE_WORD,
        payload: word,
      })
    },
    [dispatch],
  )

  return {
    words,
    createGroup: createWord,
  }
}
