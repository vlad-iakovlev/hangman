import React from 'react'
import { Button } from '../../ui-kit/Button/Button.jsx'
import { Card } from '../../ui-kit/Card/Card.jsx'

interface WordsCardWordProps {
  letters: string
  word: string
}

export const WordsCardWord = ({ letters, word }: WordsCardWordProps) => {
  const [lettersMap, setLettersMap] = React.useState(
    new Map<string, boolean>(
      letters.split('').map<[string, boolean]>((letter) => [letter, false]),
    ),
  )

  const handleLetterClick = React.useCallback((letter: string) => {
    setLettersMap((prev) => {
      const next = new Map(prev)
      next.set(letter, !next.get(letter))
      return next
    })
  }, [])

  return (
    <>
      <Card.Block className="flex-wrap justify-center" role="presentation">
        {[...lettersMap.entries()].map(([letter, isOpen]) => (
          <Button
            key={letter}
            className="px-0"
            size="md"
            theme={isOpen ? (word.includes(letter) ? 'green' : 'red') : 'white'}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </Button>
        ))}
      </Card.Block>

      <Card.Divider />

      <Card.Block
        className="flex-1 flex-wrap items-center justify-center gap-8"
        role="presentation"
      >
        {word.split(/\s/g).map((part, partIndex) => (
          <div className="flex min-w-0 gap-2" key={partIndex}>
            {part.split('').map((letter, letterIndex) => (
              <div
                className="border-b-4 border-b-green-700 pb-1"
                key={letterIndex}
              >
                <Button className="flex px-0" theme="white" size="md" disabled>
                  {lettersMap.get(letter) ? letter : ''}
                </Button>
              </div>
            ))}
          </div>
        ))}
      </Card.Block>
    </>
  )
}
