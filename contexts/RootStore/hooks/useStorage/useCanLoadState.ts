import { useIsTabVisible } from '../../../../hooks/useIsTabVisible.js'

export const useCanLoadState = () => {
  const isTabVisible = useIsTabVisible()

  return isTabVisible
}
