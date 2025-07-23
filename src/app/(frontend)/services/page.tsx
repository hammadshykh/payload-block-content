import { Metadata } from 'next'
import BlockRenderer from '@/components/blocks/block-renderer'
import { Page } from '@/payload-types'

export const metadata: Metadata = {
  title: 'Our Services - RealEstate',
  description:
    'Comprehensive real estate services including property sales, rentals, management, and investment consulting.',
}

const servicesData: any = {
  id: 3,
  title: 'Our Services',
  slug: 'services',
  blocks: [
    {
      blockType: 'hero-slider',
      slides: [
        {
          title: 'Comprehensive Real Estate Services',
          subtitle: 'From buying and selling to property management and investment consulting',
          buttonText: 'View All Services',
          buttonLink: '#services',
        },
      ],
    },
    {
      blockType: 'service-list',
      title: 'What We Offer',
      services: [
        {
          title: 'Residential Sales',
          description:
            'Expert assistance in buying and selling homes, condos, and townhouses with personalized service.',
          icon: 'home',
        },
        {
          title: 'Commercial Real Estate',
          description:
            'Specialized services for office buildings, retail spaces, and industrial properties.',
          icon: 'search',
        },
        {
          title: 'Property Rentals',
          description:
            'Comprehensive rental services for both landlords and tenants with full market coverage.',
          icon: 'key',
        },
        {
          title: 'Investment Consulting',
          description:
            'Strategic guidance for real estate investments with market analysis and portfolio management.',
          icon: 'dollar',
        },
        {
          title: 'Property Management',
          description:
            'Full-service property management including maintenance, tenant relations, and financial reporting.',
          icon: 'file',
        },
        {
          title: 'Market Analysis',
          description:
            'Professional property valuations and market research to inform your real estate decisions.',
          icon: 'users',
        },
      ],
    },
    {
      blockType: 'property-grid',
      title: 'Service Packages',
      cards: [
        {
          title: 'First-Time Buyer Package',
          price: 'Free Consultation',
          location: 'All Areas',
          description:
            'Complete guidance for first-time buyers including financing assistance and home inspection coordination.',
          id: '1',
        },
        {
          title: 'Investor Package',
          price: 'Custom Pricing',
          location: 'Portfolio Management',
          description:
            'Comprehensive investment services including property sourcing, analysis, and ongoing management.',
          id: '2',
        },
        {
          title: 'Luxury Home Service',
          price: 'Premium Service',
          location: 'Luxury Markets',
          description:
            'Specialized service for high-end properties with exclusive marketing and white-glove treatment.',
          id: '2',
        },
      ],
    },
    {
      blockType: 'testimonials',
      title: 'Service Excellence',
      testimonials: [
        {
          name: 'Robert Taylor',
          title: 'Commercial Client',
          content:
            'Their commercial real estate expertise helped us find the perfect office space for our growing business.',
        },
        {
          name: 'Maria Garcia',
          title: 'Property Investor',
          content:
            'The investment consulting service has been invaluable in building my real estate portfolio.',
        },
        {
          name: 'James Miller',
          title: 'Property Owner',
          content:
            'Their property management service takes all the stress out of being a landlord.',
        },
      ],
    },
    {
      blockType: 'cta-block',
      title: 'Need Our Services?',
      description:
        'Contact us today to discuss your real estate needs and discover how we can help.',
      buttonText: 'Get a Free Consultation',
      buttonLink: '/contact-us',
    },
  ],
  meta: {
    title: 'Our Services - RealEstate',
    description: 'Comprehensive real estate services for all your property needs.',
  },
  updatedAt: '2024-01-01T00:00:00Z',
  createdAt: '2024-01-01T00:00:00Z',
}

export default function ServicesPage() {
  return <BlockRenderer blocks={servicesData.blocks} />
}
