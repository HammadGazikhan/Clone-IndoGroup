import {
  homeCommunity,
  homeHero,
  homeProjects,
  homeStats,
  homeValues,
  homeVerticals,
  homeWhyDescription,
  whyChooseGallery,
  whyChooseItems,
} from '../data/home'
import { siteConfig } from '../data/site'
import { PageShell } from '../components/layout/PageShell'
import { CTABand } from '../components/sections/CTABand'
import { HomeHero } from '../components/sections/HomeHero'
import { ProjectGallery } from '../components/sections/ProjectGallery'
import { StatsRail } from '../components/sections/StatsRail'
import { ValuesBand } from '../components/sections/ValuesBand'
import { VerticalsSection } from '../components/sections/VerticalsSection'
import { WhyChooseSection } from '../components/sections/WhyChooseSection'

export default function HomePage() {
  return (
    <PageShell
      title="Indo Group - Home"
      description={siteConfig.description}
    >
      <HomeHero {...homeHero} />
      <StatsRail stats={homeStats} />
      <VerticalsSection verticals={homeVerticals} />
      <WhyChooseSection
        description={homeWhyDescription}
        items={whyChooseItems}
        gallery={whyChooseGallery}
      />
      <ProjectGallery tabs={homeProjects} />
      <ValuesBand
        eyebrow={homeCommunity.eyebrow}
        title={homeCommunity.title}
        highlight={homeCommunity.highlight}
        description={homeCommunity.description}
        values={homeValues}
      />
      <CTABand />
    </PageShell>
  )
}
