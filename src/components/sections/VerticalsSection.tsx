import { Link } from 'react-router-dom'
import type { ServiceVertical } from '../../types'
import {
  BentoGallery,
  ImageFilmstrip,
  SplitImageStack,
} from '../media/ImageLayouts'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

function VerticalImages({
  vertical,
  index,
}: {
  vertical: ServiceVertical
  index: number
}) {
  const imgs = vertical.images
  const title = vertical.title

  switch (index % 4) {
    case 0:
      return (
        <SplitImageStack
          main={imgs[0]}
          top={imgs[1] ?? imgs[0]}
          bottom={imgs[2] ?? imgs[1] ?? imgs[0]}
          title={title}
        />
      )
    case 1:
      return <BentoGallery images={imgs} altPrefix={title} />
    case 2:
      return <ImageFilmstrip images={imgs} altPrefix={title} />
    default:
      return (
        <div className="grid gap-3 md:grid-cols-2">
          <div className="group overflow-hidden rounded-2xl md:row-span-2">
            <img
              src={imgs[0]}
              alt={title}
              className="aspect-[4/3] h-full w-full object-cover object-[center_20%] transition duration-700 hover:scale-[1.03] md:aspect-auto md:min-h-[360px]"
              loading="lazy"
            />
          </div>
          <div className="group overflow-hidden rounded-2xl">
            <img
              src={imgs[1] ?? imgs[0]}
              alt={title}
              className="aspect-[16/10] w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
          <div className="group overflow-hidden rounded-2xl">
            <img
              src={imgs[2] ?? imgs[0]}
              alt={title}
              className="aspect-[16/10] w-full object-cover object-[center_30%] transition duration-700 hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>
      )
  }
}

export function VerticalsSection({
  verticals,
}: {
  verticals: ServiceVertical[]
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Divisions"
          title="Four Sectors,"
          highlight="One Vision"
          description="From electrical infrastructure to solar energy and construction, Indo Group delivers integrated solutions across Maharashtra."
          className="mb-16 md:mb-20"
        />
        <div className="space-y-20 md:space-y-28">
          {verticals.map((vertical, index) => (
            <Reveal key={vertical.id}>
              <article className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <VerticalImages vertical={vertical} index={index} />
                </div>
                <div
                  className={`flex flex-col justify-center lg:py-6 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-mint">
                    <img src={vertical.icon} alt="" className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
                    {vertical.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                    {vertical.description}
                  </p>
                  <Link
                    to={vertical.href}
                    className="mt-8 inline-flex w-fit items-center gap-2 border-b border-teal pb-1 text-sm font-semibold text-teal transition hover:gap-3"
                  >
                    Explore division <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
