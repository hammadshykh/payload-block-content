import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag, revalidatePath } from 'next/cache'

export const revalidateFooter: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating footer`)

    revalidateTag('global_footer')
    revalidateTag('layout') // Common tag for all pages
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
