// @ts-check

const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*', './components/**/*'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      minHeight: ({ theme }) => ({ ...theme('spacing') }),
      maxHeight: ({ theme }) => ({ ...theme('spacing') }),
      minWidth: ({ theme }) => ({ ...theme('spacing') }),
      maxWidth: ({ theme }) => ({ ...theme('spacing') }),
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.text-primary': {
          '@apply text-black dark:text-zinc-100': {},
        },
        '.text-secondary': {
          '@apply text-zinc-900 dark:text-zinc-200': {},
        },
        '.text-tertiary': {
          '@apply text-zinc-600 dark:text-zinc-300': {},
        },
        '.text-quaternary': {
          '@apply text-zinc-500 dark:text-zinc-400': {},
        },

        '.bg-primary': {
          '@apply bg-zinc-300 dark:bg-zinc-900': {},
        },
        '.bg-secondary': {
          '@apply bg-white dark:bg-zinc-800': {},
        },
        '.bg-tertiary': {
          '@apply bg-zinc-100 dark:bg-zinc-700': {},
        },
        '.bg-quaternary': {
          '@apply bg-zinc-200 dark:bg-zinc-600': {},
        },
        '.bg-quinary': {
          '@apply bg-zinc-300 dark:bg-zinc-500': {},
        },
      })
    }),
  ],
}
