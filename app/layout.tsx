import { Metadata, Viewport } from 'next'
import { ClientRoot } from '../components/layout/ClientRoot.jsx'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Hangman',
  description: 'Hangman game with your words',
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/icons/favicon.svg',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/icons/favicon.png',
    },
    {
      rel: 'mask-icon',
      color: '#16a34a',
      url: '/icons/mask-icon.svg',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/icons/apple-touch-icon.png',
    },
  ],
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#d4d4d8' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' },
  ],
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="text-primary bg-primary touch-pan-y select-none overscroll-none [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none]">
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  )
}
