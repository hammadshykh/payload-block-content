import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import HeaderClient from '@/components/layout/header'
import type { Header } from '@/payload-types'

export async function Header() {
  const headerData = await getCachedGlobal('header', 1)()
  return <HeaderClient header={headerData as Header} />
}
