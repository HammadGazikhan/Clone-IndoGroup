import { motion } from 'framer-motion'
import { HeroImagePair } from '../media/ImageLayouts'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

interface HomeHeroProps {
  eyebrow: string
  title: string
  highlight: string
  description: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  images: string[]
}

export function HomeHero({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  images,
}: HomeHeroProps) {
  const bg = images[0]
  const primary = images[1] ?? images[0]
  const secondary = images[2] ?? images[1]

  return (
    <section className="relative overflow-hidden bg-[#141414] pt-24 text-white md:pt-28">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#141414]/95 to-[#0a3038]/90" />

      <Container className="relative">
        <div className="grid items-center gap-10 py-12 md:gap-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-16 lg:py-20">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#EEE8A9]"
            >
              {eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {title}{' '}
              <span className="text-[#EEE8A9]">{highlight}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:mt-6 md:text-lg"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 md:mt-10"
            >
              <Button to={primaryCta.href}>{primaryCta.label}</Button>
              <Button to={secondaryCta.href} variant="ghost">
                {secondaryCta.label}
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none lg:pb-6"
          >
            <HeroImagePair
              primary={primary}
              secondary={secondary}
              primaryAlt="Indo Group operations"
              secondaryAlt="Indo Group project site"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
