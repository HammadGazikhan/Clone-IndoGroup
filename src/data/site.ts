import type { NavItem } from '../types'

export const siteConfig = {
  name: 'Indo Group',
  tagline: 'Vision is Forever',
  description:
    'Indo Group is a diversified business group specializing in Electrical, Manpower, Solar, and Construction solutions.',
  email: 'indocnd@gmail.com',
  phones: ['+91 9822-054-197', '+91 7378-666-783', '+91 8668-700-280'],
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  {
    label: 'Services',
    href: '#',
    children: [
      {
        label: 'Indo Construction & Developers',
        href: '/services/construction',
      },
      { label: 'Indo Electricals', href: '/services/electricals' },
      { label: 'Indo Manpower', href: '/services/manpower' },
      {
        label: 'Indo Energy Solutions',
        href: '/services/energy-solutions',
      },
    ],
  },
]

export const serviceOptions = [
  'Indo Construction & Developers',
  'Indo Electricals',
  'Indo Manpower',
  'Indo Energy Solutions',
]

export const emailJsConfig = {
  serviceId: 'service_tu8sm7r',
  templateId: 'template_b356srk',
  publicKey: '00YW7Hgvtt24SVS05',
}
