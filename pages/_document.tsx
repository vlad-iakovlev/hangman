import { Head, Html, Main, NextScript } from 'next/document.js'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#d4d4d8"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#18181b"
        />
        <meta name="description" content="Hangman game with your words" />
        <link rel="mask-icon" href="/icons/mask-icon.svg" color="#16a34a" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
      </Head>
      <body className="text-primary bg-primary touch-pan-y select-none overscroll-none [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
