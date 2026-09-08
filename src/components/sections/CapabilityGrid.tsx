import type { CapabilityItem } from '../../types'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function CapabilityGrid({
  eyebrow,
  title,
  highlight,
  description,
  items,
  dark = false,
}: {
  eyebrow: string
  title: string
  highlight: string
  description: string
  items: CapabilityItem[]
  dark?: boolean
}) {
  return (
    <section className={`py-20 md:py-28 ${dark ? 'bg-ink text-white' : ''}`}>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            description={description}
            light={dark}
            className="mb-12"
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div
                className={`rounded-2xl border p-6 ${
                  dark
                    ? 'border-white/10 bg-white/5'
                    : 'border-black/5 bg-white'
                }`}
              >
                <img src={item.icon} alt="" className="mb-4 h-8 w-8" />
                <h3
                  className={`text-lg font-semibold ${dark ? 'text-gold' : 'text-ink'}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${dark ? 'text-white/70' : 'text-muted'}`}
                >
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
