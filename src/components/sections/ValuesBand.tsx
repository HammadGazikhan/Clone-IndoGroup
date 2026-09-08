import type { ValueItem } from '../../types'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

interface ValuesBandProps {
  eyebrow: string
  title: string
  highlight: string
  description: string
  values: ValueItem[]
}

export function ValuesBand({
  eyebrow,
  title,
  highlight,
  description,
  values,
}: ValuesBandProps) {
  return (
    <section className="bg-ink py-20 text-white md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            description={description}
            light
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08}>
              <div className="border-t border-gold/30 pt-8">
                {value.icon && (
                  <img src={value.icon} alt="" className="mb-4 h-10 w-10" />
                )}
                <h3 className="font-display text-2xl text-gold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
