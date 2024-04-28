import { ArrowPathIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Card } from '../ui-kit/Card/Card.jsx'

export const Fallback = () => {
  const handleRestart = React.useCallback(() => {
    window.location.href = '/'
  }, [])

  return (
    <div className="bg-primary fixed inset-0 z-[100] flex items-center justify-center">
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
