// app/page.tsx
import { Suspense } from 'react'
import BlockRenderer from '@/components/blocks/block-renderer'
import NotFound from './not-found'
import { CardGridSkeleton } from '@/components/skeletons/card-grid-skeleton'
export const experimental_ppr = true

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

  console.log(homePage)

  return (
    <div>
      <BlockRenderer blocks={homePage.blocks || []} />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ✅ Now fetch inside this component, not directly in page.tsx */}

      <Suspense fallback={<LoadingHomePage />}>
        <HomePageContent />
      </Suspense>
    </>
  )
}
