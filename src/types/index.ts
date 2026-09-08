export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface CTA {
  label: string
  href: string
}

export interface SectionHeading {
  eyebrow?: string
  title: string
  highlight?: string
  description?: string
}

export interface StatItem {
  value: string
  label: string
  description: string
  image?: string
}

export interface ValueItem {
  title: string
  description: string
  icon?: string
}

export interface ServiceVertical {
  id: string
  title: string
  description: string
  href: string
  icon: string
  images: string[]
}

export interface ProjectTab {
  id: string
  label: string
  description: string
  images: { src: string; alt: string }[]
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

export interface TimelineItem {
  year: string
  title: string
  description: string
  image: string
  href?: string
}

export interface ServiceItem {
  title: string
  description: string
  image: string
}

export interface ContactInfo {
  email?: string
  phone?: string
  phone2?: string
  contactPerson?: string
  address: string
  mapUrl?: string
}

export interface OfficeLocation {
  name: string
  address: string
  mapUrl: string
}

export interface CarouselSlide {
  src: string
  title: string
  description: string
}

export interface CapabilityItem {
  title: string
  description: string
  icon: string
}
