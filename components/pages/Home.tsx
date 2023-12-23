import { useWords } from '../../contexts/RootStore/hooks/useWords.js'
import { WordCreateCard } from '../cards/WordCreate/WordCreate.jsx'
import { WordsCard } from '../cards/Words/Words.jsx'
import { NextHead } from '../next/Head.js'
import { Container } from '../ui-kit/Container/Container.jsx'

export const Home = () => {
  const { words, createWord, resetWords } = useWords()

  return (
    <>
      <NextHead>
        <title>Hangman</title>
      </NextHead>

      <Container className="flex min-h-screen items-center justify-center py-4 sm:py-6 md:py-8">
        {words.length ? (
          <WordsCard
            className="min-w-0 flex-1"
            words={words}
            onCreate={createWord}
            onReset={resetWords}
          />
        ) : (
          <WordCreateCard
            className="min-w-0 max-w-lg flex-1"
            onCreate={createWord}
          />
        )}
      </Container>
    </>
  )
}
