import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'
import { Page } from '@/payload-types'

// ✅ On create or update
export const revalidatePage: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context?.disableRevalidate) {
    // Handle published page
    if (doc._status === 'published') {
      const path = doc.slug === 'home' ? '/' : `/${doc.slug}`
      payload.logger.info(`Revalidating page at path: ${path}`)
      revalidatePath(path)
      revalidateTag('pages-sitemap') // optional
    }

    // If page was unpublished
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = previousDoc.slug === 'home' ? '/' : `/${previousDoc.slug}`
      payload.logger.info(`Revalidating old page at path: ${oldPath}`)
      revalidatePath(oldPath)
      revalidateTag('pages-sitemap')
    }
  }

  return doc
}

// ❌ On delete
export const revalidateDeletePage: CollectionAfterDeleteHook<Page> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context?.disableRevalidate) {
    const path = doc?.slug === 'home' ? '/' : `/${doc?.slug}`
    payload.logger.info(`Revalidating deleted page path: ${path}`)
    revalidatePath(path)
    revalidateTag('pages-sitemap')
  }

  return doc
}
