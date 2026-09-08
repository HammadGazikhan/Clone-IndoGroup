import type { TeamMember } from '../../types'
import { ImageFrame } from '../media/ImageLayouts'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function LeadershipSection({ members }: { members: TeamMember[] }) {
  const [founder, ...rest] = members

  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Know About Us"
            title="Our Visionary"
            highlight="Leadership"
            description="The strength of INDO Group lies in the vision and dedication of our leaders."
            className="mb-16"
          />
        </Reveal>

        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[420px_1fr] lg:items-start lg:gap-14">
            <div className="group overflow-hidden rounded-3xl bg-paper-2">
              <ImageFrame
                src={founder.image}
                alt={founder.name}
                aspect="aspect-[3/4] md:aspect-[4/5]"
                position="center-top"
              />
            </div>
            <div className="lg:pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                Founder
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl lg:text-5xl">
                {founder.name}
              </h3>
              <p className="mt-3 text-sm font-medium text-muted">{founder.role}</p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
                {founder.bio}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {rest.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <div className="group shrink-0">
                  <ImageFrame
                    src={member.image}
                    alt={member.name}
                    aspect="aspect-[4/5]"
                    position="center-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h4 className="font-display text-xl text-ink">{member.name}</h4>
                  <p className="mt-2 min-h-[2.5rem] text-xs font-semibold uppercase tracking-wider text-teal">
                    {member.role}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {member.bio}
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
