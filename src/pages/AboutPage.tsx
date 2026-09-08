import {
  aboutContact,
  aboutHero,
  aboutSectors,
  aboutValues,
  aboutValuesSection,
  impactStats,
  teamMembers,
  timelineItems,
} from '../data/about'
import { PageShell } from '../components/layout/PageShell'
import { AboutHero } from '../components/sections/AboutHero'
import { ContactBlock } from '../components/sections/ContactBlock'
import { ImpactSection, SectorsList } from '../components/sections/ImpactSection'
import { LeadershipSection } from '../components/sections/LeadershipSection'
import { TimelineSection } from '../components/sections/TimelineSection'
import { ValuesSplit } from '../components/sections/ValuesSplit'

export default function AboutPage() {
  return (
    <PageShell title="Indo Group - About us">
      <AboutHero {...aboutHero} />
      <ValuesSplit section={aboutValuesSection} values={aboutValues} />
      <LeadershipSection members={teamMembers} />
      <TimelineSection items={timelineItems} />
      <ImpactSection stats={impactStats} />
      <SectorsList sectors={aboutSectors} />
      <ContactBlock
        eyebrow="Get in Touch"
        title="We’d Love to Hear"
        highlight="from You"
        description="Whether you have questions about our services, want to discuss a potential project or need assistance, our team at INDO Group is here to help."
        email={aboutContact.email}
        phone={aboutContact.phone}
        address={aboutContact.address}
      />
    </PageShell>
  )
}
