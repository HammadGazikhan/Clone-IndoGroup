import image from '../../assets/images'
import { ImageFrame } from '../media/ImageLayouts'
import { Container } from '../ui/Container'

export function ContactHero() {
  return (
    <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-24 md:min-h-[55vh]">
      <ImageFrame
        src={image.ContactHeader}
        alt="Contact Indo Group"
        className="absolute inset-0 h-full w-full"
        position="center-top"
        loading="eager"
        hover={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent" />
      <Container className="relative pb-12 pt-28 md:pb-16 md:pt-32">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-gold">
            Contact Indo Group
          </p>
          <h1 className="font-display text-5xl text-white md:text-6xl">
            Let&apos;s Start a{' '}
            <span className="text-gold">Conversation</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Whether you have questions about our services, want to discuss a
            project, or need staffing support — our team is ready to help.
          </p>
        </div>
      </Container>
    </section>
  )
}
