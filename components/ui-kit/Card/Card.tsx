import { useCallback } from 'react'
import { twMerge } from 'tailwind-merge'
import { CardBlock } from './CardBlock'
import { CardDivider } from './CardDivider'
import { CardFooter } from './CardFooter'
import { CardInput } from './CardInput'
import { CardItem } from './CardItem'
import { CardLink } from './CardLink'
import { CardTitle } from './CardTitle'

export type CardProps = React.ComponentProps<'div'>

export const Card = ({
  className,
  children,
  onClick,
  onKeyDown,
  ...rest
}: CardProps) => {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (onClick && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault()
        event.currentTarget.click()
      }

      onKeyDown?.(event)
    },
    [onClick, onKeyDown],
  )

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={twMerge(
        'rounded-md bg-secondary-background py-2 text-left shadow-lg ring-1 ring-black/5 transition-shadow dark:ring-0',
        !!onClick && 'cursor-pointer hover:shadow-2xl active:shadow-2xl',
        className,
      )}
      role={onClick ? 'button' : 'list'}
      tabIndex={onClick ? 0 : -1}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children}
    </div>
  )
}

export * from './CardBlock'
Card.Block = CardBlock

Card.Divider = CardDivider

export type * from './CardFooter'
Card.Footer = CardFooter

export type * from './CardInput'
Card.Input = CardInput

export type * from './CardItem'
Card.Item = CardItem

export type * from './CardLink'
Card.Link = CardLink

export type * from './CardTitle'
Card.Title = CardTitle
