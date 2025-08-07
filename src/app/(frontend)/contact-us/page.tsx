import { Metadata } from 'next'
import BlockRenderer from '@/components/blocks/block-renderer'
import { Page } from '@/payload-types'
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'
import { contactUsData } from '@/constants/contact'

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
