import image from '../../assets/images'
import type { CapabilityItem, CarouselSlide, ServiceItem } from '../../types'

export const manpowerHero = {
  eyebrow: 'Skilled Manpower for Power Sector',
  title: 'Indo',
  highlight: 'Manpower',
  description:
    'Indo Manpower is a trusted provider of skilled professionals, dedicated to supporting Maharashtra’s electrical sector with reliable staffing solutions.',
  images: [
    image.MPHeader1,
    image.MPHeader3,
    image.MPHeader2,
    image.MPHeader4,
    image.MPHeader5,
    image.MPHeader6,
  ],
  layout: 'scatter' as const,
}

export const manpowerCarousel: CarouselSlide[] = [
  {
    src: image.MPcarousal1,
    title: 'Kit Distribution',
    description: 'Distribution of onboarding kits to selected manpower.',
  },
  {
    src: image.MPcarousal2,
    title: 'Group Briefing',
    description: 'Group briefing and orientation session for new recruits.',
  },
  {
    src: image.MPcarousal3,
    title: 'Certificates & Appreciation',
    description: 'Certificates handed to successful candidates.',
  },
  {
    src: image.MPcarousal4,
    title: 'Kit Distribution',
    description: 'Distribution of onboarding kits to selected manpower.',
  },
  {
    src: image.MPcarousal5,
    title: 'Group Briefing',
    description: 'Group briefing and orientation session for new recruits.',
  },
  {
    src: image.MPcarousal6,
    title: 'Certificates & Appreciation',
    description: 'Certificates handed to successful candidates.',
  },
  {
    src: image.MPcarousal7,
    title: 'Training Session',
    description: 'Hands-on training for electrical sector professionals.',
  },
  {
    src: image.MPcarousal8,
    title: 'Team Orientation',
    description: 'Orientation for new workforce deployments.',
  },
  {
    src: image.MPcarousal9,
    title: 'Recognition Event',
    description: 'Celebrating outstanding performance and milestones.',
  },
  {
    src: image.MPcarousal10,
    title: 'Workforce Deployment',
    description: 'Preparing teams for MSEDCL project assignments.',
  },
]

export const manpowerServices: ServiceItem[] = [
  {
    title: 'ITI Graduates',
    description:
      'Qualified professionals trained in electrical work and safety protocols, ready for hands-on tasks.',
    image: image.MPService1,
  },
  {
    title: 'Diploma Holders',
    description:
      'Experienced technicians with specialized knowledge in electrical systems and installations.',
    image: image.MPService2,
  },
  {
    title: 'Engineers',
    description:
      'Licensed engineers with expertise in electrical design and project management.',
    image: image.MPService3,
  },
  {
    title: 'Unskilled Labour',
    description:
      'General support workers trained in basic tasks, essential for site operations and support roles.',
    image: image.MPService4,
  },
  {
    title: 'Site Supervisors',
    description:
      'Experienced supervisors who oversee daily operations, ensuring project timelines & quality standards are met.',
    image: image.MPService5,
  },
  {
    title: 'Electricians',
    description:
      'Certified electricians skilled in installation, maintenance, and repair, providing essential support.',
    image: image.MPService6,
  },
]

export const manpowerWhyUs = [
  {
    title: 'Experienced Partner',
    description:
      'Decades-long partnership with MSEDCL highlights our reliability and expertise.',
    image: image.MPAmenities1,
  },
  {
    title: 'Skilled Workforce',
    description:
      'Each member is selected for their technical skills and commitment to quality.',
    image: image.MPAmenities2,
  },
  {
    title: 'Consistent Quality Assurance',
    description:
      'Our rigorous selection and training ensure consistent performance across all roles.',
    image: image.MPAmenities3,
  },
  {
    title: 'Client-Centric Approach',
    description:
      'We tailor our services to match the specific staffing needs of each client.',
    image: image.MPAmenities4,
  },
]

export const manpowerProcess = [
  {
    step: '01',
    title: 'Initial Screening',
    description:
      'Candidates undergo a rigorous initial screening to assess their basic qualifications and experience.',
  },
  {
    step: '02',
    title: 'Technical Skill Assessment',
    description:
      'Each candidate’s technical skills are tested to confirm their competence in required tasks.',
  },
  {
    step: '03',
    title: 'Onboarding Training',
    description:
      'Selected candidates receive targeted training focused on safety and job-specific skills.',
  },
  {
    step: '04',
    title: 'Ongoing Performance Monitoring',
    description:
      'We continuously monitor performance, offering additional training as needed to ensure optimal service.',
  },
]

export const manpowerSupport = [
  {
    title: 'Timely Salary Payments',
    description:
      'Guaranteed on-time payments to support our workforce and maintain morale.',
    icon: image.ClockUser,
  },
  {
    title: 'Employee Recognition Programs',
    description:
      'Regular recognition of outstanding work to motivate & retain top talent.',
    icon: image.UserCheck,
  },
  {
    title: 'Performance Bonuses',
    description:
      'Bonuses awarded based on performance and contribution to projects.',
    icon: image.Speedometer,
  },
  {
    title: 'Support in Times of Need',
    description:
      'We provide assistance to employees in emergencies or significant life events.',
    icon: image.Users,
  },
]

export const manpowerSafety: CapabilityItem[] = [
  {
    title: 'Comprehensive Safety Training',
    description:
      'All staff receive safety training focused on electrical hazards and workplace safety.',
    icon: image.TrafficCone,
  },
  {
    title: 'Compliance with Standards',
    description:
      'We adhere to MSEDCL and government safety regulations, ensuring reliable & safe operations.',
    icon: image.SealCheck,
  },
  {
    title: 'Personal Protective Equipment (PPE)',
    description:
      'Employees are provided with necessary protective gear to mitigate on-site risks.',
    icon: image.Hat,
  },
  {
    title: 'Emergency Response',
    description:
      'Employees are trained in emergency protocols, equipping them to handle unexpected situations effectively & safely.',
    icon: image.Lifebuoy,
  },
  {
    title: 'Regular Safety Audits',
    description:
      'Ongoing safety audits ensure compliance and proactively address potential hazards.',
    icon: image.ShieldCheck,
  },
  {
    title: 'Health & Safety Workshops',
    description:
      'We conduct workshops focused on health and safety best practices, keeping our workforce informed.',
    icon: image.HeartHalf,
  },
]

export const manpowerContact = {
  eyebrow: 'Contact Indo Manpower',
  title: 'Find the Right Talent for',
  highlight: 'Your Project',
  description:
    'Whether you need skilled engineers or unskilled support staff, Indo Manpower can connect you with the professionals you need to succeed.',
  email: 'indo_mps@yahoo.com',
  phone: '+91 9970392823',
  contactPerson: 'Mr. Iftekar A. Sundke',
  address:
    'Office No. 103+104, Landmark Building, 490/491 Nana Peth, Pune, Maharashtra - 411002.',
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.6320494134204!2d73.8676440225177!3d18.516963898594653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0431c671d53%3A0xf1b13f8f30fbe65!2sLandmark%20Building%2C%20Jawaharlal%20Nehru%20Rd%2C%20New%20Nana%20Peth%2C%20Ganesh%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1733137069339!5m2!1sen!2sin',
}
