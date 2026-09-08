import image from '../../assets/images'
import type { CapabilityItem, ServiceItem } from '../../types'

export const solarHero = {
  eyebrow: 'Empowering Sustainable Energy',
  title: 'Indo',
  highlight: 'Solar Solutions',
  description:
    'Indo Solar Solutions is committed to transforming the energy landscape with sustainable, cost-effective solar systems for residential, commercial, and industrial clients.',
  images: [image.SolarHeader1, image.SolarHeader2],
  layout: 'pair' as const,
}

export const solarServices: ServiceItem[] = [
  {
    title: 'On-Grid Systems',
    description:
      'Solar systems that connect to the local power grid, allowing for efficient power distribution and potential cost savings on electricity bills.',
    image: image.SolarServices1,
  },
  {
    title: 'Off-Grid Systems',
    description:
      'Independent solar solutions that provide continuous energy without relying on grid connectivity, ideal for remote areas.',
    image: image.SolarServices2,
  },
  {
    title: 'Hybrid Systems',
    description:
      'Combination systems that offer the benefits of both on-grid and off-grid, ensuring energy availability and flexibility.',
    image: image.SolarServices3,
  },
  {
    title: 'Solar Consultation',
    description:
      'Personalized energy consultations that analyze your current usage and recommend the most efficient solar setup for your needs.',
    image: image.SolarServices4,
  },
  {
    title: 'Solar Battery Storage Solutions',
    description:
      'We offer solar battery storage systems to ensure continuous power even when the sun isn’t shining.',
    image: image.SolarServices5,
  },
  {
    title: 'Installation and Maintenance',
    description:
      'Complete solar system installations followed by maintenance services to ensure long-term performance and efficiency.',
    image: image.SolarServices6,
  },
]

export const solarIncentives = [
  {
    title: 'Subsidy Application Assistance',
    description:
      'We guide clients through the subsidy process, from application to approval, ensuring they receive full financial benefits.',
    image: image.SolarAmenities1,
  },
  {
    title: 'Renewable Energy Rebates',
    description:
      'Our team helps you leverage rebates and incentives, making it more affordable to adopt sustainable energy solutions.',
    image: image.SolarAmenities2,
  },
  {
    title: 'Government Liaison Services',
    description:
      'With extensive experience working with local authorities, we ensure all regulatory requirements are met.',
    image: image.SolarAmenities3,
  },
  {
    title: 'Tax Benefits Consultation',
    description:
      'We assist clients in understanding and leveraging tax benefits related to solar installations.',
    image: image.SolarAmenities4,
  },
]

export const solarProcess = [
  {
    step: '01',
    title: 'Initial Consultation',
    description:
      'Reach out to us to begin your solar journey. We assess your needs and current energy usage.',
  },
  {
    step: '02',
    title: 'Energy Usage Analysis',
    description:
      'Based on your energy bills, we provide a detailed report, recommending the most suitable system.',
  },
  {
    step: '03',
    title: 'Site Visit',
    description:
      'Our experts conduct a thorough site inspection to ensure optimal system placement and feasibility.',
  },
  {
    step: '04',
    title: 'Agreement & Contract',
    description:
      'We discuss terms and finalize an agreement, ensuring all expectations are clearly defined.',
  },
  {
    step: '05',
    title: 'Material Delivery & Installation',
    description:
      'Our team arranges for material delivery and initiates the installation, typically completed within 10-15 days.',
  },
  {
    step: '06',
    title: 'Liaison with MSEDCL',
    description:
      'We handle all regulatory requirements and meter installations with MSEDCL, ensuring your system is officially sanctioned.',
  },
]

export const solarQuality = [
  {
    title: 'High-Quality Materials',
    description:
      'Certified components for long-lasting durability and peak efficiency.',
    icon: image.SolarIcon3,
  },
  {
    title: 'Expert Installation Teams',
    description:
      'Skilled professionals ensure each installation meets top standards.',
    icon: image.SolarIcon2,
  },
  {
    title: 'Advanced Monitoring Solutions',
    description:
      'Real-time monitoring for quick response to performance issues.',
    icon: image.SolarIcon4,
  },
  {
    title: 'Ongoing Maintenance Support',
    description:
      'Regular maintenance keeps systems performing at their best.',
    icon: image.SolarIcon1,
  },
]

export const solarCapabilities: CapabilityItem[] = [
  {
    title: 'Customized Solutions',
    description:
      'Every project is unique, and we offer personalized services to meet each client’s specific needs.',
    icon: image.CompassTool,
  },
  {
    title: 'Cost Savings',
    description:
      'With government subsidies and reduced electricity bills, switching to solar is a smart investment.',
    icon: image.Coins,
  },
  {
    title: 'Environmental Impact',
    description:
      'Our installations support a greener planet, reducing carbon emissions and promoting renewable energy.',
    icon: image.SolarIcon5,
  },
  {
    title: 'Reliable Partnership',
    description:
      'We prioritize long-term relationships with clients, ensuring support from consultation to ongoing maintenance.',
    icon: image.SolarIcon6,
  },
  {
    title: 'End-to-End Service',
    description:
      'From consultation to maintenance, we manage every stage, making the transition to solar seamless.',
    icon: image.ShieldCheck,
  },
  {
    title: 'Cutting-Edge Technology',
    description:
      'We utilize the latest solar tech for optimal efficiency and high-performing systems.',
    icon: image.SolarIcon7,
  },
]

export const solarGallery = {
  title: 'Our Work in Action',
  description:
    'Indo Solar Solutions has completed several successful projects, each one contributing to a cleaner, greener future.',
  highlight: {
    title: 'Residential Solar Installation in Pune',
    description:
      'Installed a 20 kW on-grid system for a residential complex, achieving significant monthly savings on electricity bills.',
  },
  images: [
    image.solar1,
    image.solar2,
    image.solar3,
    image.solar4,
    image.solar5,
    image.solar6,
    image.solar7,
    image.solar8,
    image.solar9,
    image.solar10,
    image.solar11,
    image.solar12,
  ],
}

export const solarContact = {
  eyebrow: 'Contact Indo Solar Solutions',
  title: 'Start Your Solar Journey',
  highlight: 'Today',
  description:
    'Whether you’re interested in solar for your home, business, or industrial site, our team is ready to help.',
  email: 'indoelectricalsnanapeth@gmail.com',
  phone: '+91 9822054197',
  phone2: '+91 8668700280',
  contactPerson: 'Mr. Naeem A. Sundke / Miss Azra N. Sundke',
  address:
    'Office No. 103+104, Landmark Building, 490/491 Nana Peth, Pune, Maharashtra - 411002.',
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.6320494134204!2d73.8676440225177!3d18.516963898594653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0431c671d53%3A0xf1b13f8f30fbe65!2sLandmark%20Building%2C%20Jawaharlal%20Nehru%20Rd%2C%20New%20Nana%20Peth%2C%20Ganesh%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1733137069339!5m2!1sen!2sin',
}
