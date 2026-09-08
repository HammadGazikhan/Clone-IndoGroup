import type { StatItem } from '../../types'
import { ImageFrame } from '../media/ImageLayouts'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

export function StatsRail({ stats }: { stats: StatItem[] }) {
  return (
    <section className="relative z-10 border-y border-black/5 bg-paper py-10 md:py-12">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                {stat.image && (
                  <div className="group shrink-0">
                    <ImageFrame
                      src={stat.image}
                      alt={stat.label}
                      aspect="aspect-[4/3]"
                      position="center-top"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col px-5 py-6 md:px-6">
                  <p className="font-display text-3xl text-teal md:text-[2rem]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink">
                    {stat.label}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
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
