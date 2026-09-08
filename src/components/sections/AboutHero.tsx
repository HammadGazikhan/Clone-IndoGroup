import { Container } from '../ui/Container'
import { ImageFrame } from '../media/ImageLayouts'

interface AboutHeroProps {
  image: string
  title: string
  quote: string
}

export function AboutHero({ image, title, quote }: AboutHeroProps) {
  return (
    <section className="relative flex min-h-[65vh] items-end overflow-hidden pt-24 md:min-h-[70vh]">
      <ImageFrame
        src={image}
        alt="Indo Group about"
        className="absolute inset-0 h-full w-full"
        position="center-top"
        loading="eager"
        hover={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      <Container className="relative pb-14 pt-28 md:pb-16 md:pt-36">
        <div className="max-w-2xl border-l-2 border-gold pl-6 md:pl-8">
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-gold">
            About Indo Group
          </p>
          <h1 className="font-display text-5xl text-white md:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80">{quote}</p>
        </div>
      </Container>
    </section>
  )
}
