import {
  manpowerCarousel,
  manpowerContact,
  manpowerHero,
  manpowerProcess,
  manpowerSafety,
  manpowerServices,
  manpowerSupport,
  manpowerWhyUs,
} from '../../data/services/manpower'
import { FeatureCardGrid } from '../../components/media/ImageLayouts'
import { PageShell } from '../../components/layout/PageShell'
import { CapabilityGrid } from '../../components/sections/CapabilityGrid'
import { ContactBlock } from '../../components/sections/ContactBlock'
import { CTABand } from '../../components/sections/CTABand'
import { PhotoCarousel } from '../../components/sections/PhotoCarousel'
import { ProcessSteps } from '../../components/sections/ProcessSteps'
import { ServiceHero } from '../../components/sections/ServiceHero'
import { ServiceListSection } from '../../components/sections/ServiceListSection'
import { Container } from '../../components/ui/Container'
import { Reveal } from '../../components/ui/Reveal'
import { SectionHeading } from '../../components/ui/SectionHeading'

export default function ManpowerPage() {
  return (
    <PageShell title="Indo Group Services - Manpower">
      <ServiceHero {...manpowerHero} />
      <PhotoCarousel slides={manpowerCarousel} />
      <ServiceListSection
        eyebrow="Our Workforce"
        title="Professionals Trained for"
        highlight="Excellence"
        description="Our workforce includes a diverse range of skilled employees, from ITI graduates to experienced engineers."
        services={manpowerServices}
      />

      <section className="bg-paper-2 py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Indo Manpower"
              title="Experience & Quality You Can"
              highlight="Count On"
              description="With over 20 years of experience, Indo Manpower is a trusted partner for MSEDCL and other industry leaders."
              className="mb-12"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <FeatureCardGrid items={manpowerWhyUs} />
          </Reveal>
        </Container>
      </section>

      <ProcessSteps
        eyebrow="Our Selection & Training Process"
        title="Ensuring Excellence Through"
        highlight="Rigorous Standards"
        description="Indo Manpower’s selection process goes beyond qualifications."
        steps={manpowerProcess}
      />

      <section className="bg-ink py-20 text-white md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Employee Support & Satisfaction"
              title="Supporting Our Workforce,"
              highlight="Building Trust"
              light
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {manpowerSupport.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <img src={item.icon} alt="" className="h-8 w-8" />
                  <div>
                    <h3 className="font-semibold text-gold">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CapabilityGrid
        eyebrow="Commitment to Safety & Compliance"
        title="Safety-First"
        highlight="Approach"
        description="Safety is paramount at Indo Manpower."
        items={manpowerSafety}
      />

      <CTABand
        title="Need skilled workforce for your project?"
        description="Connect with Indo Manpower for staffing solutions tailored to Maharashtra’s electrical sector."
        ctaLabel="Request workforce inquiry"
        ctaHref="/contact?service=manpower"
      />
      <ContactBlock {...manpowerContact} />
    </PageShell>
  )
}
