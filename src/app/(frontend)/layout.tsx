import localFont from 'next/font/local'
import './globals.css'

import { RefreshRouteOnSave } from '@/lib/RefreshRouteOnSave'
import { Header } from '@/globals/Header/Component'
import { Footer } from '@/globals/Footer/Component'
import { Metadata } from 'next'

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
})

export const metadata: Metadata = {
  title: {
    default: 'Prime Properties | Luxury Real Estate & Dream Homes',
    template: '%s | Prime Properties',
  },
  description:
    'Discover your dream home with Prime Properties. Browse luxury real estate listings, find investment properties, and get expert advice from our professional agents.',
  keywords: [
    'real estate',
    'property listings',
    'luxury homes',
    'house for sale',
    'real estate agency',
    'property investment',
    'home buyers',
    'real estate agents',
  ],
  icons: {
    icon: { url: '/favicon-for-real-estate.png' },
  },
  openGraph: {
    title: 'Prime Properties | Luxury Real Estate & Dream Homes',
    description:
      'Discover your dream home with Prime Properties. Browse our exclusive listings of luxury properties and find your perfect home today.',
    url: 'https://your-real-estate-site.com',
    siteName: 'Prime Properties',
    images: [
      {
        url: 'https://your-real-estate-site.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Properties | Luxury Real Estate & Dream Homes',
    description:
      'Discover your dream home with Prime Properties. Browse our exclusive listings of luxury properties and find your perfect home today.',
    images: ['https://your-real-estate-site.com/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={satoshi.className}>
      <body className={`antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <RefreshRouteOnSave />
      </body>
    </html>
  )
}
