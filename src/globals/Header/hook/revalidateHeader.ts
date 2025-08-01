import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag, revalidatePath } from 'next/cache'

export const revalidateHeader: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating header`)

    revalidateTag('global_header')
    // Strategy 1: Revalidate all possible paths that use header
    const pathsToRevalidate = [
      '/',
      '/about',
      '/services',
      '/contact',
      '/property', // Base property path
    ]

    pathsToRevalidate.forEach((path) => {
      revalidatePath(path)
    })
  }

  return doc
}
