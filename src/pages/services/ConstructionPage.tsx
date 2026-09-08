import {
  constructionAmenities,
  constructionContact,
  constructionGallery,
  constructionHero,
  constructionQuality,
  constructionServices,
  constructionVision,
} from '../../data/services/construction'
import { OverlayFeatureGrid } from '../../components/media/ImageLayouts'
import { PageShell } from '../../components/layout/PageShell'
import { CapabilityGrid } from '../../components/sections/CapabilityGrid'
import { ContactBlock } from '../../components/sections/ContactBlock'
import { ImageGallerySection } from '../../components/sections/ImageGallerySection'
import { ServiceHero } from '../../components/sections/ServiceHero'
import { ServiceListSection } from '../../components/sections/ServiceListSection'
import { Container } from '../../components/ui/Container'
import { Reveal } from '../../components/ui/Reveal'
import { SectionHeading } from '../../components/ui/SectionHeading'

export default function ConstructionPage() {
  return (
    <PageShell title="Indo Group Services - Construction and Developers">
      <ServiceHero {...constructionHero} />
      <ServiceListSection
        eyebrow="Our Focus Area"
        title="Specialized in Residential &"
        highlight="Commercial Projects"
        description="We focus on residential, commercial, and redevelopment projects that contribute to modern living and urban growth."
        services={constructionServices}
      />
      <ImageGallerySection
        eyebrow="Key Projects"
        title="Our Projects in"
        highlight="Pune’s Heart"
        description={constructionGallery.description}
        images={constructionGallery.images}
        highlightItem={constructionGallery.highlight}
      />

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Amenities & Features"
              title="Exceptional Facilities for"
              highlight="Urban Living"
              description="We are dedicated to providing amenities that improve residents’ quality of life."
              className="mb-12"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <OverlayFeatureGrid items={constructionAmenities} />
          </Reveal>
        </Container>
      </section>

      <CapabilityGrid
        eyebrow="Quality and Craftsmanship"
        title="Built to Last with"
        highlight="Precision & Quality"
        description="Indo Construction and Developers believes in delivering uncompromised quality."
        items={constructionQuality}
      />

      <section className="bg-paper-2 py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Vision for Pune’s Future"
              title="A Vision for Inclusive &"
              highlight="Modern Living"
              description="At Indo Construction and Developers, we envision Pune as a city where modernity and tradition coexist."
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {constructionVision.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="flex gap-4 border-t border-black/10 pt-8">
                  <img src={item.icon} alt="" className="h-8 w-8 shrink-0" />
                  <div>
                    <h3 className="font-display text-xl text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactBlock {...constructionContact} />
    </PageShell>
  )
}
