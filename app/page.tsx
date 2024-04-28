'use client'

import { WordCreateCard } from '../components/cards/WordCreate/WordCreate.jsx'
import { WordsCard } from '../components/cards/Words/Words.jsx'
import { Page } from '../components/layout/Page.jsx'
import { Container } from '../components/ui-kit/Container/Container.jsx'
import { useWords } from '../contexts/RootStore/hooks/useWords.js'

export default function HomePage() {
  const { words, createWord, resetWords } = useWords()

  return (
    <Page>
      <Container className="flex min-h-screen items-center justify-center py-4 sm:py-6 md:py-8">
        {words.length ? (
          <WordsCard
            className="min-w-0 flex-1 self-stretch"
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
    </Page>
  )
}
