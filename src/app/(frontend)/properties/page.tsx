// app/properties/page.tsx
import React from 'react'
import { Metadata } from 'next'
import PropertiesClient from './Properties'
import { getAllProperties } from '@/lib/action/properties'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Our Properties | Luxury Real Estate Listings',
    description:
      'Browse our exclusive collection of luxury properties and find your dream home today.',
    openGraph: {
      title: 'Our Properties | Luxury Real Estate Listings',
      description:
        'Browse our exclusive collection of luxury properties and find your dream home today.',
      images: [
        {
          url: '/images/properties-og.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: '/properties',
    },
  }
}

const PropertiesPage = async () => {
  const properties = await getAllProperties()

  return (
    <div className="py-12">
      <PropertiesClient properties={properties} />
    </div>
  )
}

export default PropertiesPage
