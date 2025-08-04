import { useCallback } from 'react'
import { twMerge } from 'tailwind-merge'
import { Modify } from '../../../types/utility'
import { CardBlock, CardBlockProps } from './CardBlock'

export type CardItemProps = Modify<
  CardBlockProps,
  {
    prefixClassName?: string
    suffixClassName?: string
    labelClassName?: string
    valueClassName?: string
    disabled?: boolean
    prefix?: React.ReactNode
    suffix?: React.ReactNode
    label?: React.ReactNode
    value?: React.ReactNode
    children?: never
  }
>

export const CardItem = ({
  className,
  prefixClassName,
  suffixClassName,
  labelClassName,
  valueClassName,
  disabled,
  prefix,
  suffix,
  label,
  value,
  onClick,
  onKeyDown,
  ...rest
}: CardItemProps) => {
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
    <CardBlock
      className={twMerge(
        !!onClick &&
          'cursor-pointer hover:bg-tertiary-background active:bg-tertiary-background',
        disabled && 'pointer-events-none',
        className,
      )}
      aria-disabled={!onClick || disabled ? 'true' : 'false'}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {!!prefix && (
        <div className={twMerge('flex-none', prefixClassName)}>{prefix}</div>
      )}
      <div className={twMerge('flex-auto truncate', labelClassName)}>
        {label}
        {!!value && (
          <span className="hidden" aria-label=":" aria-hidden="false" />
        )}
      </div>
      {!!value && (
        <div className={twMerge('flex-none', valueClassName)}>{value}</div>
      )}
      {!!suffix && (
        <div className={twMerge('flex-none', suffixClassName)}>{suffix}</div>
      )}
    </CardBlock>
  )
}
