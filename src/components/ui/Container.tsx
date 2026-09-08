interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer'
  id?: string
}

export function Container({
  children,
  className = '',
  as: Tag = 'div',
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={`mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10 ${className}`}>
      {children}
    </Tag>
  )
}
