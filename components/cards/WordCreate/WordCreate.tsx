import React from 'react'
import { DEFAULT_LETTERS } from '../../../constants/letters.js'
import { Button } from '../../ui-kit/Button/Button.jsx'
import { Card } from '../../ui-kit/Card/Card.jsx'

interface WordCreateCardProps {
  className?: string
  onCreate: (params: { letters: string; word: string }) => void
  onCancel?: () => void
}

export const WordCreateCard = ({
  className,
  onCreate,
  onCancel,
}: WordCreateCardProps) => {
  const [letters, setLetters] = React.useState<string>(DEFAULT_LETTERS)
  const [word, setWord] = React.useState<string>('')

  const isValid = React.useMemo(() => {
    if (!letters || !word) return false

    return (
      letters === letters.replace(/\s/g, '') &&
      word
        .replace(/\s/g, '')
        .split('')
        .every((letter) => letters.includes(letter))
    )
  }, [letters, word])

  const handleCreate = React.useCallback(() => {
    onCreate({ letters, word })
  }, [letters, word, onCreate])

  return (
    <Card className={className} aria-label="Group info">
      <Card.Title title="New word" />
      <Card.Divider />
      <Card.Input label="Letters" value={letters} onChange={setLetters} />
      <Card.Input label="Word or phrase" value={word} onChange={setWord} />
      <Card.Divider />

      <Card.Footer>
        <Button
          disabled={!isValid}
          theme={isValid ? 'green' : 'white'}
          size="md"
          onClick={handleCreate}
        >
          Create
        </Button>

        {!!onCancel && (
          <Button theme="white" size="md" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </Card.Footer>
    </Card>
  )
}
