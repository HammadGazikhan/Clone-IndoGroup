import { ImageFrame } from '../media/ImageLayouts'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

interface WhyChooseProps {
  description: string
  items: { number: string; title: string; image: string }[]
  gallery: string[]
}

export function WhyChooseSection({
  description,
  items,
  gallery,
}: WhyChooseProps) {
  const [hero, ...rest] = gallery

  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Why Choose"
              highlight="Indo Group"
              description={description}
            />
            <ol className="mt-12 space-y-0">
              {items.map((item) => (
                <li
                  key={item.number}
                  className="grid grid-cols-[3rem_1fr] gap-x-5 gap-y-1 border-t border-black/10 py-6 first:border-t-0 first:pt-0"
                >
                  <span className="font-display text-2xl text-gold md:text-3xl">
                    {item.number}
                  </span>
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <img src={item.image} alt="" className="h-7 w-7" />
                      <p className="text-base font-semibold text-ink md:text-lg">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              <div className="group col-span-12 overflow-hidden rounded-2xl md:col-span-8 md:row-span-2">
                <ImageFrame
                  src={hero}
                  alt="Indo Group project highlight"
                  aspect="aspect-[16/10] md:aspect-auto md:min-h-[320px]"
                  position="center-top"
                />
              </div>
              {rest.slice(0, 4).map((src, i) => (
                <div
                  key={src}
                  className={`group overflow-hidden rounded-2xl ${
                    i === 0
                      ? 'col-span-6 md:col-span-4'
                      : i === 1
                        ? 'col-span-6 md:col-span-4 md:row-start-1'
                        : i === 2
                          ? 'col-span-6 md:col-span-4 md:col-start-9'
                          : 'col-span-6 md:col-span-4 md:col-start-9 md:row-start-2'
                  }`}
                >
                  <ImageFrame
                    src={src}
                    alt="Indo Group gallery"
                    aspect="aspect-square md:aspect-[4/3]"
                    position={i % 2 === 0 ? 'center-top' : 'center'}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
