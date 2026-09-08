import { Helmet } from 'react-helmet-async'
import { Footer } from './Footer'
import { Header } from './Header'

interface PageShellProps {
  title: string
  description?: string
  children: React.ReactNode
  darkHeader?: boolean
}

export function PageShell({
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}
