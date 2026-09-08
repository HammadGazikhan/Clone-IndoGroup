import {
  solarCapabilities,
  solarContact,
  solarGallery,
  solarHero,
  solarIncentives,
  solarProcess,
  solarQuality,
  solarServices,
} from '../../data/services/energy-solutions'
import { InfoCardRow } from '../../components/media/ImageLayouts'
import { PageShell } from '../../components/layout/PageShell'
import { CapabilityGrid } from '../../components/sections/CapabilityGrid'
import { ContactBlock } from '../../components/sections/ContactBlock'
import { ImageGallerySection } from '../../components/sections/ImageGallerySection'
import { ProcessSteps } from '../../components/sections/ProcessSteps'
import { ServiceHero } from '../../components/sections/ServiceHero'
import { ServiceListSection } from '../../components/sections/ServiceListSection'
import { Container } from '../../components/ui/Container'
import { Reveal } from '../../components/ui/Reveal'
import { SectionHeading } from '../../components/ui/SectionHeading'

export default function EnergySolutionsPage() {
  return (
    <PageShell title="Indo Group Services - Solar Solutions">
      <ServiceHero {...solarHero} />
      <ServiceListSection
        eyebrow="Our Solar Services"
        title="Comprehensive Solar Solutions for"
        highlight="Every Need"
        description="Our solar services are designed to fit the specific needs of homes, businesses, and large-scale industries."
        services={solarServices}
      />

      <section className="bg-mint py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Government Incentives and Subsidies"
              title="Supporting Clean Energy with"
              highlight="Government Incentives"
              description="Indo Solar Solutions assists clients in accessing government subsidies and incentives available for solar installations."
              className="mb-12"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <InfoCardRow items={solarIncentives} />
          </Reveal>
        </Container>
      </section>

      <ProcessSteps
        eyebrow="Our Process"
        title="Step-by-Step Solar"
        highlight="Installation Process"
        description="From consultation to installation, our team provides a seamless and transparent process."
        steps={solarProcess}
      />

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Commitment to Quality"
              title="Delivering Quality &"
              highlight="Reliability"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {solarQuality.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="flex gap-4 rounded-2xl border border-black/5 bg-white p-6">
                  <img src={item.icon} alt="" className="h-8 w-8 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CapabilityGrid
        eyebrow="Why Choose Indo Solar Solutions"
        title="The Benefits of"
        highlight="Working with Us"
        description="We believe in honesty, transparency, and quality."
        items={solarCapabilities}
        dark
      />
      <ImageGallerySection
        eyebrow="Key Projects and Success Stories"
        title="Our Work in"
        highlight="Action"
        description={solarGallery.description}
        images={solarGallery.images}
        highlightItem={solarGallery.highlight}
      />
      <ContactBlock {...solarContact} />
    </PageShell>
  )
}
