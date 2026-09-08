import image from '../assets/images'
import type { StatItem, TeamMember, TimelineItem, ValueItem } from '../types'

export const aboutHero = {
  image: image.AboutHeader,
  title: 'Our Story',
  quote:
    'From humble beginnings to industry leadership, INDO Group’s path is one of resilience and achievement.',
}

export const aboutValues: ValueItem[] = [
  {
    title: 'Integrity',
    description:
      'Committed to transparency, upholding trust at every level.',
    icon: image.AboutIcon1,
  },
  {
    title: 'Innovation',
    description:
      'Embracing new technologies to create impactful solutions.',
    icon: image.SolarIcon5,
  },
  {
    title: 'Sustainability',
    description: 'Leading with practices that protect our environment.',
    icon: image.AboutIcon2,
  },
  {
    title: 'Customer-Centric Approach',
    description:
      'We place our clients’ needs first, ensuring satisfaction at every stage.',
    icon: image.AboutIcon3,
  },
]

export const aboutValuesSection = {
  eyebrow: 'Our Values',
  title: 'Values That',
  highlight: 'Define Us',
  description:
    'Our core values are the foundation of every decision and action we take. We prioritize integrity, transparency & the collective well-being of our clients, employees and the communities we serve.',
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Mr. Naeem Ayaz Sundke',
    role: 'Founder and Chairperson, Indo Group & Indo Electricals',
    bio: 'Naeem Sundke started his financial career at a very young age working in a shop repairing radios and TVs. Then worked as an electrical labour. After gaining experience he finally established his own electrical contracting company called Indo Electricals. As years passed by the company grew and expanded and started doing business in different sectors.',
    image: image.IndoFounder,
  },
  {
    name: 'Mr. Iftekar Ayaz Sundke',
    role: 'Proprietor of Indo Manpower, Partner in Indo Construction',
    bio: 'Started his career as a software engineer. Worked in Saudi Arabia for 5 years while his elder brother was setting up a new business. After 5 years he returned to India to join his brother\'s business and took control over Indo Manpower, which progressed to become one of Maharashtra\'s leading manpower suppliers working for MSEDCL.',
    image: image.ManpowerManager,
  },
  {
    name: 'Mr. Saad N. Sundke',
    role: 'Partner and Manager, Indo Construction & Developer',
    bio: 'Leading with a fresh vision, Mr. Saad drives modern projects that blend sustainability with innovation.',
    image: image.ConstructionManager,
  },
  {
    name: 'Miss Azra N. Sundke',
    role: 'Proprietor, Indo Energy Solutions',
    bio: 'Miss Azra, a BE graduate in Electrical Engineering, is passionate about clean energy and oversees solar projects, promoting green solutions for a sustainable future.',
    image: image.SolarCeo,
  },
]

export const timelineItems: TimelineItem[] = [
  {
    year: '1996',
    title: 'Establishment of Indo Electricals',
    description:
      'Started as a small electrical services provider, focusing on quality and customer satisfaction. Over the years, Indo Electricals expanded its offerings and developed a reputation for reliability and excellence in the electrical industry.',
    image: image.Established1,
    href: '/services/electricals',
  },
  {
    year: '1998',
    title: 'Indo Manpower Launch',
    description:
      'Launched to address the staffing needs of the electrical sector in Maharashtra. With a commitment to providing skilled labor, Indo Manpower quickly became a trusted partner for MSEDCL and other industry players.',
    image: image.Established2,
    href: '/services/manpower',
  },
  {
    year: '2014',
    title: 'Expansion into Energy Solutions',
    description:
      'Entered the renewable energy market with the launch of Indo Solar Solutions. Focused on providing sustainable solar installations, the company has contributed to reducing carbon footprints for numerous clients across sectors.',
    image: image.Established3,
    href: '/services/energy-solutions',
  },
  {
    year: '2021',
    title: 'First Project Completion in Construction',
    description:
      'Marked by the successful delivery of INDO HOMES, an 8-floor mixed-use development in Pune. This project showcases our commitment to modern living and sustainable building practices, setting the standard for future developments.',
    image: image.Established4,
    href: '/services/construction',
  },
]

export const impactStats: StatItem[] = [
  {
    value: '2,00,000',
    label: 'Green Energy Promotion',
    description:
      'Through Indo Solar Solutions, we help clients access subsidies and invest in renewable energy.',
    image: image.AboutImpact1,
  },
  {
    value: '1,500',
    label: 'Community Redevelopment',
    description:
      'Focused on transforming old buildings in Pune into modern, sustainable spaces.',
    image: image.AboutImpact2,
  },
  {
    value: '400',
    label: 'Employee Welfare',
    description:
      'Supporting our workforce through timely pay, benefits and celebrations of significant milestones.',
    image: image.AboutImpact3,
  },
]

export const aboutSectors = [
  {
    title: 'Indo Construction & Developers',
    description:
      'Transforming Pune’s Peth areas into modern living spaces with sustainable building practices.',
    image: image.AboutSector1,
    href: '/services/construction',
  },
  {
    title: 'Indo Energy Solutions',
    description:
      'Residential and commercial solar installations promoting clean energy and reduced utility costs.',
    image: image.AboutSector2,
    href: '/services/energy-solutions',
  },
  {
    title: 'Indo Electricals',
    description:
      'Comprehensive electrical services, from transformers to low/high-tension installations.',
    image: image.AboutSector3,
    href: '/services/electricals',
  },
  {
    title: 'Indo Manpower',
    description:
      'Skilled workforce supply for Maharashtra’s electrical sector, with a focus on MSEDCL contracts.',
    image: image.AboutSector4,
    href: '/services/manpower',
  },
]

export const aboutContact = {
  email: 'indocnd@gmail.com',
  phone: '+91 7378-666-783',
  address:
    'Shop No.2, Indo Homes, 367 B, Mahatma Phule Peth, Pune, Maharashtra - 411042',
}
