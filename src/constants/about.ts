import { Page } from '@/payload-types'

export const aboutUsData: Page = {
  id: 2,
  title: 'About Us',
  slug: 'about',
  blocks: [
    {
      blockType: 'hero-slider',
      slides: [
        {
          title: 'About RealEstate',
          subtitle: 'Your trusted partner in real estate for over 20 years',
          buttonText: 'Learn More',
          buttonLink: '#story',
        },
      ],
    },
    {
      blockType: 'service-list',
      title: 'Our Story',
      services: [
        {
          title: 'Founded in 2004',
          description:
            'Started as a small family business with a vision to help people find their perfect homes.',
          icon: 'home',
        },
        {
          title: 'Over 5,000 Properties Sold',
          description:
            'Successfully helped thousands of families find their dream homes and investment properties.',
          icon: 'key',
        },
        {
          title: 'Expert Team',
          description:
            'Our team of certified real estate professionals brings decades of combined experience.',
          icon: 'users',
        },
        {
          title: 'Community Focused',
          description:
            'We believe in giving back to the communities we serve through various local initiatives.',
          icon: 'home',
        },
      ],
    },
    {
      blockType: 'testimonials',
      title: 'Meet Our Leadership',
      testimonials: [
        {
          name: 'John Smith',
          title: 'CEO & Founder',
          content:
            'With over 25 years in real estate, I founded RealEstate to provide exceptional service and help people achieve their property dreams.',
        },
        {
          name: 'Lisa Davis',
          title: 'Head of Sales',
          content:
            'Leading our sales team with 15 years of experience, I ensure every client receives personalized attention and expert guidance.',
        },
        {
          name: 'David Wilson',
          title: 'Investment Specialist',
          content:
            'Specializing in investment properties for 12 years, I help clients build wealth through strategic real estate investments.',
        },
      ],
    },
    {
      blockType: 'cta-block',
      title: 'Ready to Work with Us?',
      description:
        'Experience the difference of working with a dedicated, experienced real estate team.',
      buttonText: 'Get Started Today',
      buttonLink: '/contact-us',
    },
  ],
  meta: {
    title: 'About Us - RealEstate',
    description: 'Learn about our mission, values, and dedicated team.',
  },
  updatedAt: '2024-01-01T00:00:00Z',
  createdAt: '2024-01-01T00:00:00Z',
}
