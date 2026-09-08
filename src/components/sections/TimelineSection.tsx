import { Link } from 'react-router-dom'
import type { TimelineItem } from '../../types'
import { ImageFrame } from '../media/ImageLayouts'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function TimelineSection({ items }: { items: TimelineItem[] }) {
  return (
    <section className="bg-paper-2 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Journey"
            title="Our Journey of"
            highlight="Growth & Impact"
            description="From humble beginnings to industry leadership, INDO Group’s path is one of resilience and achievement."
            className="mb-16"
          />
        </Reveal>

        <div className="relative space-y-16 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-teal/30 md:before:left-8">
          {items.map((item, index) => {
            const imageFirst = index % 2 === 1

            return (
              <Reveal key={item.year} delay={index * 0.08}>
                <div className="relative pl-12 md:pl-20">
                  <span className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal text-xs font-bold text-white md:left-4">
                    •
                  </span>
                  <div
                    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                      imageFirst ? '' : ''
                    }`}
                  >
                    <div className={imageFirst ? 'lg:order-2' : ''}>
                      <p className="font-display text-4xl text-teal md:text-5xl">
                        {item.year}
                      </p>
                      <h3 className="mt-3 font-display text-2xl text-ink md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                        {item.description}
                      </p>
                      {item.href && (
                        <Link
                          to={item.href}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal"
                        >
                          Learn more <span aria-hidden>→</span>
                        </Link>
                      )}
                    </div>
                    <div
                      className={`group overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 ${
                        imageFirst ? 'lg:order-1' : ''
                      }`}
                    >
                      <ImageFrame
                        src={item.image}
                        alt={item.title}
                        aspect="aspect-[16/10] lg:aspect-[4/3]"
                        position="center-top"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
