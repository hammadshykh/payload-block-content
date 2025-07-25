import { Metadata } from 'next'
import BlockRenderer from '@/components/blocks/block-renderer'
import { servicesData } from '@/constants/services'

export const metadata: Metadata = {
  title: 'Our Services - RealEstate',
  description:
    'Comprehensive real estate services including property sales, rentals, management, and investment consulting.',
}

export default function ServicesPage() {
  return <BlockRenderer blocks={servicesData.blocks} />
}
