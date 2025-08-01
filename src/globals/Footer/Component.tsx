import FooterClient from '@/components/layout/footer'
import type { Footer } from '@/payload-types'
import { getGlobal } from '@/utilities/getGlobals'
import React from 'react'

export async function Footer() {
  const footerData = await getGlobal('footer', 1)
  return <FooterClient footerData={footerData as Footer} />
}
