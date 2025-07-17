import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const getBanners = async () => {
  try {
    const payload = await getPayload({ config: configPromise })

    const data = await payload.find({
      collection: 'banner',
    })

    if (!data || !data.docs || data.docs.length === 0) {
      throw new Error('No banners found.')
    }

    return data
  } catch (err) {
    // Log the error to the console for debugging
    console.log(err)
    // Return a custom error object or message
  }
}
