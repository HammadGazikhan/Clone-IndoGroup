import { Link } from 'react-router-dom'
import image from '../assets/images'
import { PageShell } from '../components/layout/PageShell'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'

export default function NotFoundPage() {
  return (
    <PageShell title="Indo Group - Page Not Found">
      <section className="flex min-h-[70vh] items-center py-24">
        <Container className="text-center">
          <img
            src={image.Logo}
            alt="Indo Group"
            className="mx-auto mb-8 h-16 w-auto"
          />
          <p className="font-display text-7xl text-teal">404</p>
          <h1 className="mt-4 font-display text-3xl text-ink">
            Oops! Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8">
            <Button to="/">Go Back Home</Button>
          </div>
          <p className="mt-6 text-sm">
            <Link to="/contact" className="text-teal hover:underline">
              Contact us
            </Link>{' '}
            if you need help finding something.
          </p>
        </Container>
      </section>
    </PageShell>
  )
}
