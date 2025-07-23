// lib/payload/api/page-actions.ts
import { Page } from '@/payload-types'
import payloadConfig from '@/payload.config'
import { getPayload } from 'payload'

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const payload = await getPayload({ config: payloadConfig })
    const { docs } = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 2,
    })
    return docs[0] || null
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}
