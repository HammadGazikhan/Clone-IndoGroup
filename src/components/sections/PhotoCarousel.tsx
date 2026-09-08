import { useState } from 'react'
import type { CarouselSlide } from '../../types'
import { ImageFrame } from '../media/ImageLayouts'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function PhotoCarousel({ slides }: { slides: CarouselSlide[] }) {
  const [index, setIndex] = useState(0)
  const current = slides[index]

  return (
    <section className="bg-ink py-20 text-white md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Workforce in Action"
            title="Training &"
            highlight="Deployment"
            description="A look at Indo Manpower’s onboarding, training, and recognition programs."
            light
            className="mb-12"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10">
            <div className="group overflow-hidden rounded-3xl">
              <ImageFrame
                src={current.src}
                alt={current.title}
                aspect="aspect-[16/10] lg:aspect-[16/9]"
                position="center-top"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">
                  {String(index + 1).padStart(2, '0')} /{' '}
                  {String(slides.length).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-display text-2xl text-gold md:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
                  {current.description}
                </p>
              </div>
              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
                  }
                  className="rounded-full border border-white/25 px-5 py-2.5 text-sm transition hover:border-gold hover:text-gold"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
                  className="rounded-full border border-white/25 px-5 py-2.5 text-sm transition hover:border-gold hover:text-gold"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`group relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition md:h-20 md:w-28 ${
                i === index ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={slide.src}
                alt=""
                className="h-full w-full object-cover object-[center_20%]"
              />
            </button>
          ))}
        </div>
      </Container>
    </section>
  )
}
