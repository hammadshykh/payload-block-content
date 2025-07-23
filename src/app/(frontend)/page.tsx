import BlockRenderer from '@/components/blocks/block-renderer'
import { Page } from '@/payload-types'
import payloadConfig from '@/payload.config'
import { getPayload } from 'payload'
import NotFound from './not-found'

export default async function HomePage() {
  // In development, you might want to use mock data

  try {
    const payload = await getPayload({ config: payloadConfig })
    const { docs } = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'home' } },
      limit: 1,
    })

    if (!docs || docs.length === 0) {
      return <NotFound />
    }

    const homePage = docs[0] as Page

    console.log(homePage, 'HOME PAGE DATA')

    return <BlockRenderer blocks={homePage.blocks || []} />
  } catch (error) {
    console.error('Error fetching home page:', error)
    return <NotFound />
  }
}
