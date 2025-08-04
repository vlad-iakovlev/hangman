import { useCallback, useState } from 'react'
import { Button } from '../../ui-kit/Button/Button'
import { ConfirmDialog } from '../../ui-kit/ConfirmDialog/ConfirmDialog'

type WordsCardResetProps = {
  onReset: () => void
}

export const WordsCardReset = ({ onReset }: WordsCardResetProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <>
      <Button theme="red" size="md" onClick={handleClick}>
        Reset game
      </Button>

      <ConfirmDialog
        isOpen={isOpen}
        title="Reset game"
        description="Are you sure you want to reset the game? This will remove all the words you have added. This action cannot be undone."
        action="Reset"
        onConfirm={onReset}
        onCancel={handleClose}
      />
    </>
  )
}
