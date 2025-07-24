import { Metadata } from 'next'
import BlockRenderer from '@/components/blocks/block-renderer'
import { Page } from '@/payload-types'
import NotFound from '../not-found'
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'

const contactUsData: Page = {
  id: 4,
  title: 'Contact Us',
  slug: 'contact-us',
  blocks: [
    {
      blockType: 'hero-slider',
      slides: [
        {
          title: 'Get in Touch',
          subtitle: "Ready to start your real estate journey? We're here to help.",
          buttonText: 'Contact Us Now',
          buttonLink: '#contact',
        },
      ],
    },
    {
      blockType: 'contact-form',
      title: 'Contact Our Team',
      description:
        'Have questions about buying, selling, or investing in real estate? Our expert team is here to help.',
    },
    {
      blockType: 'service-list',
      title: 'Why Choose Us?',
      services: [
        {
          title: '24/7 Support',
          description:
            'Our dedicated team is available around the clock to assist with your real estate needs.',
          icon: 'users',
        },
        {
          title: 'Local Expertise',
          description:
            'Deep knowledge of local markets and neighborhoods to help you make informed decisions.',
          icon: 'home',
        },
        {
          title: 'Proven Track Record',
          description:
            'Over 20 years of successful real estate transactions and satisfied clients.',
          icon: 'key',
        },
        {
          title: 'Personalized Service',
          description: 'Tailored solutions that match your specific needs, budget, and timeline.',
          icon: 'file',
        },
      ],
    },
  ],
  meta: {
    title: 'Contact Us - RealEstate',
    description: 'Contact our expert real estate team for all your property needs.',
  },
  updatedAt: '2024-01-01T00:00:00Z',
  createdAt: '2024-01-01T00:00:00Z',
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'contact-us' } },
    limit: 1,
  })

  const contactPage = docs[0] as Page

  return {
    title: contactPage?.meta?.title || 'Contact Us - RealEstate',
    description:
      contactPage?.meta?.description ||
      "Get in touch with our expert real estate team. We're here to help with all your property needs.",
  }
}

export default async function ContactUsPage() {
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'contact-us' } },
    limit: 1,
  })

  if (!docs || docs.length === 0) {
    return <BlockRenderer blocks={contactUsData.blocks} />
  }

  const contactPage = docs[0] as Page

  return <BlockRenderer blocks={contactPage.blocks} />
}
