import image from '../assets/images'
import type {
  ProjectTab,
  ServiceVertical,
  StatItem,
  ValueItem,
} from '../types'

export const homeHero = {
  eyebrow: 'About Indo Group',
  title: 'Welcome to',
  highlight: 'Indo Group',
  description:
    'Indo Group is a dynamic consortium specializing in Electrical Services, Skilled Manpower Supply, Energy Solutions & Construction. With a mission to drive innovation, sustainability & community development, we provide cutting-edge solutions tailored to your needs.',
  primaryCta: { label: 'Get in touch', href: '/contact' },
  secondaryCta: { label: 'Explore our work', href: '#work' },
  images: [
    image.HomeHeader1,
    image.HomeHeader2,
    image.HomeHeader3,
    image.HomeHeader4,
    image.HomeHeader5,
    image.HomeHeader6,
  ],
}

export const homeStats: StatItem[] = [
  {
    value: '46,477',
    label: 'sq ft Constructed',
    description:
      'Successfully completed construction projects, transforming communities with sustainable infrastructure.',
    image: image.HomeAchievment4,
  },
  {
    value: '2,00,000',
    label: 'MSEDCL Meters installed',
    description:
      'Over 200 transformers installed and more than 500 KMs of LT and HT cables laid and installed.',
    image: image.HomeAchievment1,
  },
  {
    value: '1,000',
    label: 'KW Installed',
    description:
      'Solar solutions installed, reducing energy costs and carbon footprints for residential, commercial & industrial clients.',
    image: image.HomeAchievment2,
  },
  {
    value: '400',
    label: 'Manpower Deployed Every Year',
    description:
      'ITI graduates and engineers deployed across Maharashtra to support the electrical sector’s workforce needs.',
    image: image.HomeAchievment3,
  },
]

export const homeVerticals: ServiceVertical[] = [
  {
    id: 'construction',
    title: 'Indo Construction & Developers',
    description:
      'Modernizing Pune’s Peth areas with eco-friendly construction projects designed for sustainable living.',
    href: '/services/construction',
    icon: image.BuildingsHome,
    images: [
      image.HomeConstruction1,
      image.HomeConstruction2,
      image.HomeConstruction3,
      image.HomeConstruction4,
    ],
  },
  {
    id: 'electricals',
    title: 'Indo Electricals',
    description:
      'From transformer installations to electrical consulting, Indo Electricals delivers reliable solutions for industrial, commercial and residential clients.',
    href: '/services/electricals',
    icon: image.Electricals,
    images: [
      image.HomeElectrical1,
      image.HomeElectrical2,
      image.HomeElectrical3,
      image.HomeElectrical4,
    ],
  },
  {
    id: 'manpower',
    title: 'Indo Manpower',
    description:
      'Contributing highly skilled ITI graduates and engineers to meet the evolving demands of the electrical sector in Maharashtra.',
    href: '/services/manpower',
    icon: image.UserThree,
    images: [
      image.HomeManpower1,
      image.HomeManpower2,
      image.HomeManpower3,
      image.HomeManpower4,
    ],
  },
  {
    id: 'energy',
    title: 'Indo Energy Solutions',
    description:
      'Transforming the energy landscape with innovative solar installations that reduce costs and promote environmental sustainability.',
    href: '/services/energy-solutions',
    icon: image.Solar,
    images: [
      image.HomeSolar1,
      image.HomeSolar2,
      image.HomeSolar3,
      image.HomeSolar4,
    ],
  },
]

export const whyChooseItems = [
  {
    number: '01',
    title: 'Decades of industry experience',
    image: image.vector1,
  },
  {
    number: '02',
    title: 'Cutting-edge technology & solutions',
    image: image.vector2,
  },
  {
    number: '03',
    title: 'Strong focus on sustainability',
    image: image.vector3,
  },
  {
    number: '04',
    title: 'Commitment to community development',
    image: image.vector4,
  },
]

export const whyChooseGallery = [
  image.GalleryImage4,
  image.GalleryImage2,
  image.GalleryImage3,
  image.GalleryImage1,
  image.GalleryImage5,
  image.GalleryImage6,
  image.GalleryImage7,
]

export const homeProjects: ProjectTab[] = [
  {
    id: 'construction',
    label: 'Construction',
    description:
      'Revitalizing Pune’s historic Peth areas with modern, sustainable buildings including INDO HOMES and PATEL ACORN.',
    images: [
      { src: image.HmClConstruction, alt: 'Indo Homes construction project' },
      { src: image.HmClConstruction1, alt: 'Construction site in Pune' },
      { src: image.HmClConstruction2, alt: 'Building development progress' },
      { src: image.HmClConstruction3, alt: 'Residential construction project' },
      { src: image.HmClConstruction4, alt: 'Commercial construction work' },
      { src: image.HmClConstruction5, alt: 'Urban redevelopment project' },
      { src: image.HmClConstruction6, alt: 'Construction infrastructure' },
      { src: image.HmClConstruction7, alt: 'Modern building construction' },
      { src: image.HmClConstruction8, alt: 'Construction project exterior' },
      { src: image.HmClConstruction9, alt: 'Building site in Pune' },
      { src: image.HmClConstruction10, alt: 'Construction development' },
      { src: image.HmClConstruction11, alt: 'Completed construction work' },
    ],
  },
  {
    id: 'solar',
    label: 'Solar Installations',
    description:
      'Residential and commercial solar systems across Pune, reducing energy costs and supporting Maharashtra’s renewable energy goals.',
    images: [
      { src: image.solar1, alt: 'Solar panel installation' },
      { src: image.solar2, alt: 'Rooftop solar system' },
      { src: image.solar3, alt: 'Commercial solar project' },
      { src: image.solar4, alt: 'Solar energy installation' },
      { src: image.solar5, alt: 'On-grid solar system' },
      { src: image.solar6, alt: 'Solar panel array' },
      { src: image.solar7, alt: 'Residential solar setup' },
      { src: image.solar8, alt: 'Solar installation team' },
      { src: image.solar9, alt: 'Solar project completion' },
      { src: image.solar10, alt: 'Solar energy solution' },
      { src: image.solar11, alt: 'Solar panel mounting' },
      { src: image.solar12, alt: 'Completed solar installation' },
    ],
  },
  {
    id: 'electrical',
    label: 'Electrical Installations',
    description:
      'Transformer installations, HT/LT cable laying, and MSEDCL meter projects delivering reliable power infrastructure across Maharashtra.',
    images: [
      { src: image.Electrical2, alt: 'Electrical installation work' },
      { src: image.Electrical3, alt: 'Transformer installation' },
      { src: image.Electrical4, alt: 'HT cable laying project' },
      { src: image.Electrical5, alt: 'Electrical infrastructure' },
      { src: image.Electrical6, alt: 'Power distribution work' },
      { src: image.Electrical7, alt: 'Electrical project site' },
      { src: image.Electrical8, alt: 'Street lighting installation' },
      { src: image.Electrical9, alt: 'Feeder pillar installation' },
      { src: image.Electrical10, alt: 'Electrical wiring project' },
      { src: image.Electrical11, alt: 'MSEDCL meter installation' },
      { src: image.Electrical16, alt: 'Electrical team at work' },
    ],
  },
]

export const homeValues: ValueItem[] = [
  {
    title: 'Integrity',
    description:
      'Committed to transparency, upholding trust at every level.',
    icon: image.Integrity,
  },
  {
    title: 'Innovation',
    description:
      'Embracing new technologies to create impactful solutions.',
    icon: image.Innovation,
  },
  {
    title: 'Sustainability',
    description: 'Leading with practices that protect our environment.',
    icon: image.Sustainability,
  },
  {
    title: 'Customer-Centric Approach',
    description:
      'We place our clients’ needs first, ensuring satisfaction at every stage.',
    icon: image.Customer_Centric,
  },
]

export const homeWhyDescription =
  'At Indo Group, we go beyond providing services; we create impactful solutions. Our team of experts works closely with clients to ensure efficiency, safety and sustainability in every project. With over two decades of experience, we are dedicated to driving positive change through community development, modern infrastructure, and green energy initiatives.'

export const homeCommunity = {
  eyebrow: 'Community Impact',
  title: 'Empowering Communities,',
  highlight: 'Building Futures',
  description:
    'At Indo Group, we believe that businesses should play a pivotal role in building better futures. Through our construction projects, solar energy installations & electrical services, we are creating opportunities for community growth and development.',
}
