import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  to?: string
  variant?: ButtonVariant
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-teal-bright)] text-white hover:brightness-110',
  secondary:
    'border border-[var(--color-teal)] text-[var(--color-teal)] hover:bg-[var(--color-teal)] hover:text-white',
  ghost:
    'text-[var(--color-gold)] hover:text-white border border-transparent hover:border-[var(--color-gold)]/40',
}

export function Button({
  children,
  href,
  to,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = `group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${variants[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
