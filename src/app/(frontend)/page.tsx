import BlockRenderer from '@/components/blocks/block-renderer'
import { Page } from '@/payload-types'

// Mock data for demonstration - replace with actual Payload CMS data
const mockHomeData: Page = {
  id: '1',
  title: 'Home',
  slug: 'home',
  blocks: [
    {
      blockType: 'hero-slider',
      slides: [
        {
          title: 'Find Your Dream Home',
          subtitle: 'Discover the perfect property that matches your lifestyle and budget',
          buttonText: 'Browse Properties',
          buttonLink: '/properties',
        },
        {
          title: 'Expert Real Estate Services',
          subtitle: 'Professional guidance every step of the way',
          buttonText: 'Get Started',
          buttonLink: '/contact-us',
        },
      ],
    },
    {
      blockType: 'card-grid',
      title: 'Featured Properties',
      cards: [
        {
          id: '1',
          title: 'Modern Downtown Apartment',
          price: '$850,000',
          location: 'Manhattan, NY',
          description:
            'Stunning 2-bedroom apartment with city views, modern amenities, and prime location.',
          bedrooms: 2,
          bathrooms: 2,
          sqft: 1200,
          propertyType: 'Apartment',
          yearBuilt: 2020,
        },
        {
          id: '2',
          title: 'Suburban Family Home',
          price: '$650,000',
          location: 'Brooklyn, NY',
          description: 'Spacious 4-bedroom home with garden, perfect for families.',
          bedrooms: 4,
          bathrooms: 3,
          sqft: 2400,
          propertyType: 'House',
          yearBuilt: 2015,
        },
        {
          id: '3',
          title: 'Luxury Penthouse',
          price: '$2,500,000',
          location: 'Upper East Side, NY',
          description: 'Exclusive penthouse with panoramic city views and luxury finishes.',
          bedrooms: 3,
          bathrooms: 3,
          sqft: 2800,
          propertyType: 'Penthouse',
          yearBuilt: 2022,
        },
      ],
    },
    {
      blockType: 'service-list',
      title: 'Our Services',
      services: [
        {
          title: 'Property Sales',
          description:
            'Expert assistance in buying and selling residential and commercial properties.',
          icon: 'home',
        },
        {
          title: 'Property Search',
          description: 'Comprehensive property search service tailored to your specific needs.',
          icon: 'search',
        },
        {
          title: 'Investment Consulting',
          description: 'Professional guidance for real estate investment opportunities.',
          icon: 'dollar',
        },
        {
          title: 'Property Management',
          description: 'Full-service property management for landlords and investors.',
          icon: 'key',
        },
        {
          title: 'Market Analysis',
          description: 'Detailed market analysis and property valuation services.',
          icon: 'file',
        },
        {
          title: 'Client Support',
          description: 'Dedicated support team to assist you throughout your real estate journey.',
          icon: 'users',
        },
      ],
    },
    {
      blockType: 'testimonials',
      title: 'What Our Clients Say',
      testimonials: [
        {
          name: 'Sarah Johnson',
          title: 'First-time Homebuyer',
          content:
            'The team made my first home purchase so easy and stress-free. They guided me through every step and helped me find the perfect home within my budget.',
        },
        {
          name: 'Michael Chen',
          title: 'Property Investor',
          content:
            'Their investment consulting services helped me build a profitable real estate portfolio. The market insights and property analysis were invaluable.',
        },
        {
          name: 'Emily Rodriguez',
          title: 'Home Seller',
          content:
            'They sold my house in just two weeks! The marketing strategy was excellent, and the negotiation skills saved me thousands.',
        },
      ],
    },
    {
      blockType: 'cta-block',
      title: 'Ready to Find Your Dream Home?',
      description:
        "Get started today with our expert real estate services. We're here to help you every step of the way.",
      buttonText: 'Contact Us Now',
      buttonLink: '/contact-us',
    },
  ],
  meta: {
    title: 'RealEstate - Your Dream Home Awaits',
    description: 'Find your perfect home with our comprehensive real estate services.',
  },
  updatedAt: '2024-01-01T00:00:00Z',
  createdAt: '2024-01-01T00:00:00Z',
}

export default function HomePage() {
  return <BlockRenderer blocks={mockHomeData.blocks} />
}
