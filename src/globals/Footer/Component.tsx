import FooterClient from '@/components/layout/footer'
import type { Footer } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()
  return <FooterClient footerData={footerData as Footer} />
}
