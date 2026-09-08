import { PageShell } from '../components/layout/PageShell'
import { ContactFormSection } from '../components/sections/ContactFormSection'
import { ContactHero } from '../components/sections/ContactHero'
import { ContactInfoSection } from '../components/sections/ContactInfoSection'

export default function ContactPage() {
  return (
    <PageShell title="Indo Group - Contact us">
      <ContactHero />
      <ContactFormSection />
      <ContactInfoSection />
    </PageShell>
  )
}
