import { useState } from 'react'
import type { ProjectTab } from '../../types'
import { ProjectMosaic } from '../media/ImageLayouts'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ProjectGallery({ tabs }: { tabs: ProjectTab[] }) {
  const [active, setActive] = useState(tabs[0]?.id ?? '')

  const current = tabs.find((tab) => tab.id === active) ?? tabs[0]

  return (
    <section id="work" className="bg-ink py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-end lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Recent Projects"
              title="Our Recent"
              highlight="Success Stories"
              description="A glimpse at our latest work and accomplishments across construction, solar, and electrical installations."
              light
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    active === tab.id
                      ? 'bg-gold text-ink'
                      : 'border border-white/20 text-white/70 hover:border-gold hover:text-gold'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-10">
          <p className="max-w-3xl text-base leading-relaxed text-white/70">
            {current.description}
          </p>
        </Reveal>

        <Reveal delay={0.18} className="mt-10">
          <ProjectMosaic images={current.images} />
        </Reveal>
      </Container>
    </section>
  )
}
