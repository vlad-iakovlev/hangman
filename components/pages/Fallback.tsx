import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { useCallback } from 'react'
import { Card } from '../ui-kit/Card/Card'

export const Fallback = () => {
  const handleRestart = useCallback(() => {
    window.location.href = '/'
  }, [])

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-primary-background">
      <Card className="min-w-72">
        <Card.Title title="Oops!" />
        <Card.Divider />
        <Card.Item
          label="Restart Hangman"
          prefix={<ArrowPathIcon className="h-6 w-6" />}
          onClick={handleRestart}
        />
      </Card>
    </div>
  )
}
