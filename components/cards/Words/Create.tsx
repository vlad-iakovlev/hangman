import React from 'react'
import { Button } from '../../ui-kit/Button/Button.jsx'
import { Dialog } from '../../ui-kit/Dialog/Dialog.jsx'
import { WordCreateCard } from '../WordCreate/WordCreate.jsx'

interface WordsCardCreateProps {
  onCreate: (params: { letters: string; word: string }) => void
}

export const WordsCardCreate = ({ onCreate }: WordsCardCreateProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleClick = React.useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleCreate = React.useCallback(
    (params: { letters: string; word: string }) => {
      onCreate(params)
      setIsOpen(false)
    },
    [onCreate],
  )

  const handleClose = React.useCallback(() => {
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
