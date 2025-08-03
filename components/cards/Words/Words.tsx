import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Word } from '../../../types/word'
import { Button } from '../../ui-kit/Button/Button'
import { Card } from '../../ui-kit/Card/Card'
import { WordsCardCreate } from './Create'
import { WordsCardReset } from './Reset'
import { WordsCardWord } from './Word'

interface WordsCardProps {
  className?: string
  words: Word[]
  onCreate: (params: { letters: string; word: string }) => void
  onReset: () => void
}

export const WordsCard = ({
  className,
  words,
  onCreate,
  onReset,
}: WordsCardProps) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0)

  const currentWord = React.useMemo<Word | undefined>(
    () => words[currentIndex],
    [currentIndex, words],
  )

  const canPrev = React.useMemo(() => currentIndex > 0, [currentIndex])

  const canNext = React.useMemo(
    () => currentIndex < words.length - 1,
    [currentIndex, words],
  )

  const handlePrev = React.useCallback(() => {
    setCurrentIndex((prev) => prev - 1)
  }, [])

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) => prev + 1)
  }, [])

  return (
    <Card className={twMerge('flex flex-col', className)}>
      <Card.Block role="presentation">
        <Button
          className={twMerge(
            'flex-none transition-all',
            canPrev ? 'opacity-100' : 'opacity-50',
          )}
          disabled={!canPrev}
          size="md"
          theme="white"
          iconStart={<ChevronLeftIcon />}
          aria-label="Previous word"
          onClick={handlePrev}
        />

        <h2 className="min-w-0 flex-1 truncate text-center text-xl leading-6 font-semibold text-secondary-foreground">
          Word #{currentIndex + 1}
        </h2>

        <Button
          className={twMerge(
            'flex-none transition-all',
            canNext ? 'opacity-100' : 'opacity-50',
          )}
          disabled={!canNext}
          size="md"
          theme="white"
          iconEnd={<ChevronRightIcon />}
          aria-label="Next word"
          onClick={handleNext}
        />
      </Card.Block>

      <Card.Divider />

      <WordsCardWord
        key={currentWord?.id ?? ''}
        letters={currentWord?.letters ?? ''}
        word={currentWord?.word ?? ''}
      />

      <Card.Divider />

      <Card.Block
        className="max-sm:flex-col max-sm:items-stretch sm:justify-center"
        role="presentation"
      >
        <WordsCardCreate onCreate={onCreate} />
        <WordsCardReset onReset={onReset} />
      </Card.Block>
    </Card>
  )
}
