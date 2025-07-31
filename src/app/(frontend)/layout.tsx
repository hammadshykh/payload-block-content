import localFont from 'next/font/local'
import './globals.css'

import { RefreshRouteOnSave } from '@/lib/RefreshRouteOnSave'
import { Header } from '@/globals/Header/Component'
import { Footer } from '@/globals/Footer/Component'

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

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={satoshi.className}>
      <body className={` antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <RefreshRouteOnSave />
      </body>
    </html>
  )
}
