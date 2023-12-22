import { NextHead } from '../components/next/Head.js'

export default function IndexPage() {
  return (
    <>
      <NextHead>
        <title>Hangman</title>
      </NextHead>

      <div className="flex min-h-screen flex-col items-center justify-between pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pt-[env(safe-area-inset-top)]" />
    </>
  )
}
