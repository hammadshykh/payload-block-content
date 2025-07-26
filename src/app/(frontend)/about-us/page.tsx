import { Metadata } from 'next'
import BlockRenderer from '@/components/blocks/block-renderer'
import { Page } from '@/payload-types'
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'
import { aboutUsData } from '@/constants/about'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'about' } },
    limit: 1,
  })

  const aboutPage = docs[0] as Page

  return {
    title: aboutPage?.meta?.title || 'About Us - RealEstate',
    description:
      aboutPage?.meta?.description ||
      'Learn about our mission, values, and the dedicated team behind RealEstate.',
  }
}

export default async function AboutUsPage() {
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'about' } },
    limit: 1,
  })

  if (!docs || docs.length === 0) {
    return <BlockRenderer blocks={aboutUsData.blocks} />
  }

  const aboutPage = docs[0] as Page

  return <BlockRenderer blocks={aboutPage.blocks} />
}

export const revalidate = 600
