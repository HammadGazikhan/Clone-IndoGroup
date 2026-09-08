import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

interface CTABandProps {
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export function CTABand({
  title = 'Ready to start a project?',
  description = 'Connect with our team to discuss your electrical, solar, construction, or manpower requirements.',
  ctaLabel = 'Get in touch',
  ctaHref = '/contact',
}: CTABandProps) {
  return (
    <section className="bg-mint py-20 md:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-white px-8 py-12 shadow-sm md:flex-row md:items-center md:px-12">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl text-ink md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-muted">{description}</p>
            </div>
            <Button to={ctaHref}>{ctaLabel}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
