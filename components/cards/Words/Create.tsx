import { useCallback, useState } from 'react'
import { Button } from '../../ui-kit/Button/Button'
import { Dialog } from '../../ui-kit/Dialog/Dialog'
import { WordCreateCard } from '../WordCreate/WordCreate'

type WordsCardCreateProps = {
  onCreate: (params: { letters: string; word: string }) => void
}

export const WordsCardCreate = ({ onCreate }: WordsCardCreateProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleCreate = useCallback(
    (params: { letters: string; word: string }) => {
      onCreate(params)
      setIsOpen(false)
    },
    [onCreate],
  )

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <>
      <Button theme="green" size="md" onClick={handleClick}>
        Add word
      </Button>

      <Dialog isOpen={isOpen} onClose={handleClose}>
        <WordCreateCard onCreate={handleCreate} />
      </Dialog>
    </>
  )
}
