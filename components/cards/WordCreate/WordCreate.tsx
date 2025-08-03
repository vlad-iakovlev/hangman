import React from 'react'
import { DEFAULT_LETTERS } from '../../../constants/letters'
import { Button } from '../../ui-kit/Button/Button'
import { Card } from '../../ui-kit/Card/Card'

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

  const handleCreate = React.useCallback(() => {
    if (
      letters !== letters.replace(/\s/g, '') ||
      !word ||
      word
        .replace(/\s/g, '')
        .split('')
        .some((letter) => !letters.includes(letter))
    ) {
      return
    }

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
        <Button theme="green" size="md" onClick={handleCreate}>
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
