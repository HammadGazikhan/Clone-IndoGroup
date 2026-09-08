import { Link } from 'react-router-dom'
import type { StatItem } from '../../types'
import { ImageFrame } from '../media/ImageLayouts'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ImpactSection({ stats }: { stats: StatItem[] }) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Social Responsibility"
            title="Committed to"
            highlight="Positive Impact"
            description="At Indo Group, we view business as a platform for positive change."
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
                {stat.image && (
                  <ImageFrame
                    src={stat.image}
                    alt={stat.label}
                    aspect="aspect-[16/10]"
                    position="center-top"
                  />
                )}
                <div className="p-6 md:p-8">
                  <p className="font-display text-3xl text-teal">{stat.value}</p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{stat.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {stat.description}
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

export function SectorsList({
  sectors,
}: {
  sectors: {
    title: string
    description: string
    image: string
    href: string
  }[]
}) {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Industry Expertise"
            title="Pioneers Across"
            highlight="Key Sectors"
            className="mb-12"
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {sectors.map((sector, index) => (
            <Reveal key={sector.title} delay={index * 0.06}>
              <Link
                to={sector.href}
                className="group grid grid-cols-[112px_1fr_auto] items-center gap-5 overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:shadow-md md:grid-cols-[140px_1fr_auto] md:p-5"
              >
                <div className="overflow-hidden rounded-xl">
                  <ImageFrame
                    src={sector.image}
                    alt={sector.title}
                    aspect="aspect-square"
                    position="center"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl text-ink transition group-hover:text-teal md:text-2xl">
                    {sector.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">
                    {sector.description}
                  </p>
                </div>
                <span className="pr-2 text-teal transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
