import { useCallback, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Modify } from '../../../types/utility'
import { CardItem, CardItemProps } from './CardItem'

export type CardInputProps = Modify<
  CardItemProps,
  {
    value: string
    onChange: (value: string) => void
    onClick?: never
  }
>

export const CardInput = ({
  className,
  labelClassName,
  valueClassName,
  value,
  onChange,
  ...rest
}: CardInputProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleClick = useCallback(() => {
    setIsEditing(true)
    setInputValue(value)
  }, [value])

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
        if (event.target instanceof HTMLInputElement) event.target.blur()
        break

      case 'Escape':
        setIsEditing(false)
        break
    }
  }, [])

  const handleBlur = useCallback(
    (event: React.FocusEvent) => {
      void (async () => {
        const currentTarget = event.currentTarget
        await new Promise(requestAnimationFrame)
        if (currentTarget.contains(document.activeElement)) return

        const formattedValue = inputValue.trim().replace(/\s+/g, ' ')
        if (formattedValue && formattedValue !== value) onChange(formattedValue)
        setIsEditing(false)
      })()
    },
    [inputValue, value, onChange],
  )

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
    },
    [],
  )

  const handleInputFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      event.currentTarget.select()
    },
    [],
  )

  return (
    <CardItem
      className={twMerge(isEditing && 'pointer-events-auto', className)}
      labelClassName={twMerge('flex-none', labelClassName)}
      valueClassName={twMerge(
        'flex-auto min-w-0 text-right font-medium truncate',
        valueClassName,
      )}
      value={
        isEditing ? (
          <input
            className="w-full bg-transparent text-right focus:outline-hidden"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        ) : (
          value
        )
      }
      aria-expanded={isEditing ? 'true' : 'false'}
      onClick={isEditing ? undefined : handleClick}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      {...rest}
    />
  )
}
