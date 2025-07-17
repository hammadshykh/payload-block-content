import React from 'react'
import BannerCard from './BannerCard'
import { Banner } from '@/payload-types'

interface BannerProps {
  data: Banner[]
}

function Banners({ data }: BannerProps) {
  return (
    <div>
      <BannerCard banners={data} />
    </div>
  )
}

export default Banners
