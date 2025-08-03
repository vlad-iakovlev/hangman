import { useIsTabVisible } from '../../../../hooks/useIsTabVisible'

export const useCanLoadState = () => {
  const isTabVisible = useIsTabVisible()

  return isTabVisible
}
