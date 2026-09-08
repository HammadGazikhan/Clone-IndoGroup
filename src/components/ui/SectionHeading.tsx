interface SectionHeadingProps {
  eyebrow?: string
  title: string
  highlight?: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.24em] ${light ? 'text-gold' : 'text-teal'}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-4xl leading-tight md:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-ink'}`}
      >
        {title}
        {highlight && (
          <>
            {' '}
            <span className={light ? 'text-gold' : 'text-teal'}>
              {highlight}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${light ? 'text-white/75' : 'text-muted'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
