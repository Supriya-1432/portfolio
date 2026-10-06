import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'onDark'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: Variant
  className?: string
  download?: boolean
} & Omit<ComponentProps<'button'>, 'children'>

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-light shadow-[0_10px_24px_rgba(108,76,246,0.28)]',
  secondary:
    'bg-white text-text border border-border hover:border-primary/30 hover:text-primary',
  onDark:
    'bg-transparent text-white border border-white/25 hover:border-white/50 hover:bg-white/5',
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  download,
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold transition duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant]} ${className}`

  if (href) {
    const external =
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.endsWith('.pdf')

    if (external || download) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          download={download || undefined}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
