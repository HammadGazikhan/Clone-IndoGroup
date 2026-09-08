import type { ValueItem } from '../../types'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ValuesSplit({
  section,
  values,
}: {
  section: {
    eyebrow: string
    title: string
    highlight: string
    description: string
  }
  values: ValueItem[]
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow={section.eyebrow}
              title={section.title}
              highlight={section.highlight}
              description={section.description}
            />
          </Reveal>
          <div className="space-y-8">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <div className="flex gap-5 border-t border-black/10 pt-8 first:border-t-0 first:pt-0">
                  {value.icon && (
                    <img src={value.icon} alt="" className="mt-1 h-8 w-8 shrink-0" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
