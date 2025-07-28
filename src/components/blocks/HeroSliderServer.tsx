// components/blocks/hero-slider-server.tsx
import NotFound from '@/app/(frontend)/not-found'
import HeroSlider from './hero-slider'

export default async function HeroSliderServer() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/static-home-blocks`)
  if (!res.ok) return <NotFound />

  const data = await res.json()
  return <HeroSlider block={data || []} />
}
