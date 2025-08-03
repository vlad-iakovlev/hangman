import Link from 'next/link'
import { Modify } from '../../../types/utility'

export type CardLinkProps = Modify<
  React.ComponentProps<typeof Link>,
  {
    href: string
    prefix?: React.ReactNode
    suffix?: React.ReactNode
    label?: React.ReactNode
    value?: React.ReactNode
    children?: never
    as?: never
  }
>

export const CardLink = ({
  href,
  prefix,
  suffix,
  label,
  value,
  ...rest
}: CardLinkProps) => (
  <Link
    className="bg-secondary-background hover:bg-tertiary-background active:bg-tertiary-background flex min-h-12 w-full items-center gap-3 px-4 py-2 text-left transition-colors sm:px-6"
    href={{ pathname: href, query: { animation: 'forward' } }}
    as={href}
    role="listitem"
    {...rest}
  >
    {!!prefix && <div className="flex-none">{prefix}</div>}
    <div className="flex-auto truncate">
      {label}
      {!!value && (
        <span className="hidden" aria-label=":" aria-hidden="false" />
      )}
    </div>
    {!!value && <div className="flex-none">{value}</div>}
    {!!suffix && <div className="flex-none">{suffix}</div>}
  </Link>
)
