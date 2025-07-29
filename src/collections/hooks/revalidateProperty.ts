import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'
import { Property } from '@/payload-types'

// ✅ Revalidate on add/update
export const revalidateProperty: CollectionAfterChangeHook<Property> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context?.disableRevalidate) {
    // 🔁 Revalidate property detail page
    if (doc._status === 'published') {
      const path = `/property/${doc.slug}`
      payload.logger.info(`Revalidating property at path: ${path}`)
      revalidatePath(path)
      revalidateTag('properties-sitemap') // optional tag
    }

    // If unpublished, revalidate previous slug
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/property/${previousDoc.slug}`
      payload.logger.info(`Revalidating old property at path: ${oldPath}`)
      revalidatePath(oldPath)
      revalidateTag('properties-sitemap')
    }

    // Optionally revalidate homepage if you show property cards there
    revalidatePath('/')
  }

  return doc
}

// ❌ Revalidate on delete
export const revalidateDeleteProperty: CollectionAfterDeleteHook<Property> = async ({
  doc,
  req: { payload, context },
}) => {
  if (!context?.disableRevalidate) {
    const path = `/property/${doc.slug}`
    payload.logger.info(`Revalidating deleted property path: ${path}`)
    revalidatePath(path)
    revalidatePath('/') // revalidate homepage if needed
    revalidateTag('properties-sitemap')
  }

  return doc
}
