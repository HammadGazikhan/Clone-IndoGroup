import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

interface ContactBlockProps {
  eyebrow: string
  title: string
  highlight: string
  description: string
  email?: string
  phone?: string
  phone2?: string
  contactPerson?: string
  address: string
  mapUrl?: string
}

export function ContactBlock({
  eyebrow,
  title,
  highlight,
  description,
  email,
  phone,
  phone2,
  contactPerson,
  address,
  mapUrl,
}: ContactBlockProps) {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-teal">
                {eyebrow}
              </p>
              <h2 className="font-display text-4xl text-ink md:text-5xl">
                {title} <span className="text-teal">{highlight}</span>
              </h2>
              <p className="mt-4 text-muted">{description}</p>
              <div className="mt-8 space-y-4 text-sm">
                {email && (
                  <p>
                    <span className="font-semibold text-ink">Email:</span>{' '}
                    <a href={`mailto:${email}`} className="text-teal hover:underline">
                      {email}
                    </a>
                  </p>
                )}
                {phone && (
                  <p>
                    <span className="font-semibold text-ink">Phone:</span>{' '}
                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-teal">
                      {phone}
                    </a>
                    {contactPerson && ` — ${contactPerson}`}
                  </p>
                )}
                {phone2 && (
                  <p>
                    <span className="font-semibold text-ink">Phone:</span>{' '}
                    <a href={`tel:${phone2.replace(/\s/g, '')}`} className="text-teal">
                      {phone2}
                    </a>
                  </p>
                )}
                <p>
                  <span className="font-semibold text-ink">Office:</span> {address}
                </p>
              </div>
              <div className="mt-8">
                <Button to="/contact">Send a message</Button>
              </div>
            </div>
            {mapUrl && (
              <div className="overflow-hidden rounded-3xl">
                <iframe
                  title="Office location map"
                  src={mapUrl}
                  className="h-80 w-full border-0 lg:h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
