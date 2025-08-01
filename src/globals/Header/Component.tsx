import React from 'react'

import HeaderClient from '@/components/layout/header'
import type { Header } from '@/payload-types'
import { getGlobal } from '@/utilities/getGlobals'

export async function Header() {
  const headerData = await getGlobal('header', 1)
  return <HeaderClient header={headerData as Header} />
}
