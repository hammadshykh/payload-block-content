import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayload({ config: payloadConfig })

    const { docs } = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'home' } },
      limit: 1,
    })

    if (!docs || docs.length === 0) {
      return NextResponse.json({ error: 'Home page not found' }, { status: 404 })
    }

    const homePage = docs[0]

    // Find the hero-slider block only
    const heroSliderBlock = homePage.blocks?.find((block: any) => block.blockType === 'hero-slider')

    if (!heroSliderBlock) {
      return NextResponse.json({ error: 'Hero slider not found' }, { status: 404 })
    }

    return NextResponse.json(heroSliderBlock)
  } catch (error) {
    console.error('Error fetching hero slider:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
