import {
  electricalCapabilities,
  electricalContact,
  electricalGallery,
  electricalHero,
  electricalServices,
  partnerLogos,
} from '../../data/services/electricals'
import { PageShell } from '../../components/layout/PageShell'
import { CapabilityGrid } from '../../components/sections/CapabilityGrid'
import { ContactBlock } from '../../components/sections/ContactBlock'
import {
  ImageGallerySection,
  LogoMarquee,
} from '../../components/sections/ImageGallerySection'
import { ServiceHero } from '../../components/sections/ServiceHero'
import { ServiceListSection } from '../../components/sections/ServiceListSection'

export default function ElectricalsPage() {
  return (
    <PageShell title="Indo Group Services - Electricals">
      <ServiceHero {...electricalHero} />
      <LogoMarquee
        heading="Proud to collaborate with some of the most reputable names in the industry."
        logos={partnerLogos}
      />
      <ServiceListSection
        eyebrow="Our Services"
        title="Comprehensive Electrical Services"
        highlight="for Your Needs"
        description="Our team of skilled professionals offers a full range of electrical solutions, ensuring that each project meets the highest standards of safety, efficiency and functionality."
        services={electricalServices}
      />
      <ImageGallerySection
        eyebrow="Project Portfolio"
        title="Our Work in"
        highlight="Action"
        description={electricalGallery.description}
        images={electricalGallery.images}
        highlightItem={electricalGallery.highlight}
      />
      <CapabilityGrid
        eyebrow="Unique Capabilities"
        title="What Sets Us"
        highlight="Apart"
        description="At Indo Electricals, we’re known for our quality, commitment to safety, and customer-centric approach."
        items={electricalCapabilities}
      />
      <ContactBlock {...electricalContact} />
    </PageShell>
  )
}
