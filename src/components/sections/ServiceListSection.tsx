import type { ServiceItem } from '../../types'
import { ImageFrame } from '../media/ImageLayouts'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ServiceListSection({
  eyebrow,
  title,
  highlight,
  description,
  services,
}: {
  eyebrow: string
  title: string
  highlight: string
  description: string
  services: ServiceItem[]
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            description={description}
            className="mb-14 md:mb-16"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-md">
                <div className="overflow-hidden">
                  <ImageFrame
                    src={service.image}
                    alt={service.title}
                    aspect="aspect-[16/10]"
                    position={index % 2 === 0 ? 'center-top' : 'center'}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="font-display text-lg text-teal">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
