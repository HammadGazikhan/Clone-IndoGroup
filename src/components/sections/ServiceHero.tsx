import image from '../../assets/images'
import {
  ServiceImageCluster,
  ServiceImagePair,
  ServiceImageScatter,
} from '../media/ImageLayouts'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

interface ServiceHeroProps {
  eyebrow: string
  title: string
  highlight: string
  description: string
  images: string[]
  layout?: 'cluster' | 'pair' | 'scatter'
}

export function ServiceHero({
  eyebrow,
  title,
  highlight,
  description,
  images,
  layout = 'cluster',
}: ServiceHeroProps) {
  const renderImages = () => {
    if (layout === 'scatter') {
      return <ServiceImageScatter images={images} />
    }
    if (layout === 'pair' || images.length < 3) {
      return (
        <ServiceImagePair
          primary={images[0]}
          secondary={images[1] ?? images[0]}
        />
      )
    }
    return (
      <ServiceImageCluster
        left={images[0]}
        center={images[1]}
        right={images[2]}
      />
    )
  }

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] bg-cover bg-center opacity-[0.18] lg:block"
        style={{ backgroundImage: `url(${image.BgFeatured})` }}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full bg-gradient-to-l from-mint/40 via-transparent to-transparent lg:w-[65%]" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-teal">
              {eyebrow}
            </p>
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl lg:text-[3.75rem]">
              {title}{' '}
              <span className="text-teal">{highlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
            <div className="mt-8">
              <Button to="/contact">Get in touch</Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="min-w-0">
            {renderImages()}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
