import { officeLocations } from '../../data/contact'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ContactInfoSection() {
  return (
    <section className="bg-paper-2 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our offices"
            title="Visit Us"
            highlight="In Pune"
            description="Two Pune offices — Indo Homes and Landmark Building. Walk in or schedule a visit."
            className="mb-12"
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {officeLocations.map((office, index) => (
            <Reveal key={office.name} delay={index * 0.08}>
              <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
                <iframe
                  title={office.name}
                  src={office.mapUrl}
                  className="h-72 w-full border-0 md:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="border-t border-black/5 p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                    Office {index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-ink">{office.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {office.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:gap-3"
                  >
                    Get directions <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
