import image from '../../assets/images'
import type { CapabilityItem, ServiceItem } from '../../types'

export const electricalHero = {
  eyebrow: 'Your Trusted Partner in Electrical Solutions',
  title: 'Indo',
  highlight: 'Electricals',
  description:
    'Since 1996, Indo Electricals has been dedicated to delivering quality-driven, reliable electrical services to industrial, commercial & residential clients. With over two decades of experience, we ensure efficiency, safety & customer satisfaction in every project we undertake.',
  images: [image.ElHeader1, image.ElHeader3, image.ElHeader2],
}

export const partnerLogos = [
  image.ElLogoOne,
  image.ElLogoTwo,
  image.ElLogoThree,
  image.ElLogoFour,
  image.ElLogoFive,
  image.ElLogoSix,
]

export const electricalServices: ServiceItem[] = [
  {
    title: 'Transformer Installations',
    description:
      'We handle all aspects of transformer installations, from setup to maintenance, ensuring reliable power distribution for any building or industry.',
    image: image.ElServices1,
  },
  {
    title: 'Feeder Pillar Installations',
    description:
      'We design and install feeder pillars, supporting safe and efficient electrical distribution across various infrastructures.',
    image: image.ElServices2,
  },
  {
    title: 'Overhead & Underground Cables',
    description:
      'Experts in LT and HT cable installations, our team ensures safety and precision for both overhead and underground projects.',
    image: image.ElServices3,
  },
  {
    title: 'Internal & External Wiring',
    description:
      'Providing customized wiring solutions for commercial and residential properties, balancing aesthetics with functionality.',
    image: image.ElServices4,
  },
  {
    title: 'Meter Sanctioning and Installation',
    description:
      'Experienced in liaising with MSEDCL, we streamline the process of electric meter sanctioning and installation for seamless service integration.',
    image: image.ElServices5,
  },
  {
    title: 'Street Lighting Installations',
    description:
      'Specializing in street lamp installations, we enhance visibility and safety in public spaces across urban environments.',
    image: image.ElServices6,
  },
]

export const electricalGallery = {
  title: 'Our Work in Action',
  description:
    'Indo Electricals has successfully completed a variety of projects that showcase our expertise and dedication to quality.',
  highlight: {
    title: 'High-Tension Cable Installation for MSEDCL',
    description:
      'Successfully completed HT cable installations for MSEDCL, enhancing grid reliability and power access for thousands of users.',
  },
  images: [
    image.MPcarousal1,
    image.MPcarousal2,
    image.MPcarousal3,
    image.Electrical6,
    image.Electrical7,
    image.Electrical8,
    image.Electrical9,
    image.Electrical10,
    image.Electrical11,
    image.Electrical2,
    image.Electrical3,
    image.Electrical4,
    image.Electrical16,
  ],
}

export const electricalCapabilities: CapabilityItem[] = [
  {
    title: 'Industry Expertise',
    description:
      'Our team’s knowledge spans multiple domains, from residential wiring to large-scale industrial installations.',
    icon: image.Star,
  },
  {
    title: 'Safety-First Approach',
    description:
      'We adhere to stringent safety protocols, ensuring each installation is reliable, durable and compliant with industry regulations.',
    icon: image.Hat,
  },
  {
    title: 'End-to-End Solutions',
    description:
      'Offering everything from feasibility studies and load analysis to final installation and compliance.',
    icon: image.Tv,
  },
  {
    title: 'Certified Professionals',
    description:
      'Our team consists of qualified technicians with industry certifications and specialized training.',
    icon: image.UserThreeElectrical,
  },
  {
    title: 'Proven Track Record',
    description:
      'Our strong client relationships highlight our commitment to providing reliable, top-quality service.',
    icon: image.Chartline,
  },
  {
    title: 'Advanced Equipment',
    description:
      'We use cutting-edge tools and techniques, ensuring efficiency and precision in every project.',
    icon: image.Wrench,
  },
]

export const electricalContact = {
  eyebrow: 'Contact Indo Electricals',
  title: 'Power Up Your',
  highlight: 'Next Project',
  description:
    'Whether you’re looking for reliable electrical installations or consulting services, our team is here to help.',
  email: 'indoelectricalsnanapeth@gmail.com',
  phone: '+91 9822054197',
  contactPerson: 'Mr. Naeem A. Sundke',
  address:
    'Office No. 103+104, Landmark Building, 490/491 Nana Peth, Pune, Maharashtra - 411002.',
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.6320494134204!2d73.8676440225177!3d18.516963898594653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0431c671d53%3A0xf1b13f8f30fbe65!2sLandmark%20Building%2C%20Jawaharlal%20Nehru%20Rd%2C%20New%20Nana%20Peth%2C%20Ganesh%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1733137069339!5m2!1sen!2sin',
}
