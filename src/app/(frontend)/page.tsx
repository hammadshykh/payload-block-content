import { Suspense } from 'react'
import BlockRenderer from '@/components/blocks/block-renderer'
import NotFound from './not-found'
import { CardGridSkeleton } from '@/components/skeletons/card-grid-skeleton'
import HeroSlider from '@/components/blocks/hero-slider'

export const experimental_ppr = true

// ✅ Fetch static CMS data at build time
async function getStaticContent() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/static-home-blocks`)

  const data = await res.json()
  return data
}

function LoadingHomePage() {
  return (
    <div>
      <CardGridSkeleton />
    </div>
  )
}

async function HomePageContent() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/home`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return <NotFound />
  }

  const homePage = await res.json()

  return (
    <div>
      <BlockRenderer blocks={homePage.blocks || []} />
    </div>
  )
}

export default async function HomePage() {
  const staticData = await getStaticContent()

  if (!staticData) return <NotFound />

  console.log(staticData, 'SILDER BLOCK')
  return (
    <>
      {/* ✅ Static blocks (e.g., hero slider) from CMS, rendered at build time */}
      <HeroSlider block={staticData || []} />

      {/* ✅ Dynamic content (hydrated on the server at request time) */}
      <Suspense fallback={<LoadingHomePage />}>
        <HomePageContent />
      </Suspense>
    </>
  )
}
