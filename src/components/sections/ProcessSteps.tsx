import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ProcessSteps({
  eyebrow,
  title,
  highlight,
  description,
  steps,
}: {
  eyebrow: string
  title: string
  highlight: string
  description: string
  steps: { step: string; title: string; description: string }[]
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
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.06}>
              <div className="rounded-2xl border border-black/5 bg-white p-6">
                <span className="font-display text-3xl text-gold">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
