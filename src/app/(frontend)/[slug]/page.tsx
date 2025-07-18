import { notFound } from 'next/navigation'
import BlockRenderer from '@/components/blocks/block-renderer'
import { Page } from '@/payload-types'

// This would be replaced with actual Payload CMS data fetching
async function getPageBySlug(slug: string): Promise<Page | null> {
  // Mock data for demonstration
  const pages = {
    home: {
      id: '1',
      title: 'Home',
      slug: 'home',
      blocks: [],
      meta: {
        title: 'Home - RealEstate',
        description: 'Find your perfect home with our comprehensive real estate services.',
      },
      updatedAt: '2024-01-01T00:00:00Z',
      createdAt: '2024-01-01T00:00:00Z',
    },
  }

  return pages[slug as keyof typeof pages] || null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description,
    keywords: page.meta?.keywords,
  }
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  if (!page) {
    notFound()
  }

  return <BlockRenderer blocks={page.blocks} />
}
