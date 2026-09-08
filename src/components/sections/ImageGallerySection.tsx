import { ProjectMosaic } from '../media/ImageLayouts'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ImageGallerySection({
  eyebrow,
  title,
  highlight,
  description,
  images,
  highlightItem,
}: {
  eyebrow: string
  title: string
  highlight: string
  description: string
  images: string[]
  highlightItem?: { title: string; description: string }
}) {
  const mosaicImages = images.map((src, i) => ({
    src,
    alt: `Project photo ${i + 1}`,
  }))

  return (
    <section className="bg-paper-2 py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-end lg:gap-14">
          <Reveal>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              highlight={highlight}
              description={description}
            />
          </Reveal>
          {highlightItem && (
            <Reveal delay={0.08}>
              <div className="rounded-2xl border-l-4 border-teal bg-white p-6 shadow-sm">
                <h3 className="font-display text-xl text-teal md:text-2xl">
                  {highlightItem.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {highlightItem.description}
                </p>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.12} className="mt-12">
          <ProjectMosaic images={mosaicImages.slice(0, 8)} />
        </Reveal>
      </Container>
    </section>
  )
}

export function LogoMarquee({
  heading,
  logos,
}: {
  heading: string
  logos: string[]
}) {
  return (
    <section className="border-y border-black/5 bg-white py-14">
      <Container>
        <p className="mb-8 max-w-md text-sm font-semibold text-ink">{heading}</p>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-10 md:justify-start md:gap-x-12">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-14 w-[calc(50%-1rem)] items-center justify-center opacity-75 transition hover:opacity-100 sm:w-auto"
            >
              <img src={logo} alt="Partner logo" className="max-h-12 max-w-[120px] object-contain" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
