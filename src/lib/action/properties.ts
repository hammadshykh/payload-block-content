// app/api/properties/getAllProperties.ts
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'
import { Property } from '@/payload-types'

export const getAllProperties = async (): Promise<Property[]> => {
  const payload = await getPayload({ config: payloadConfig })

  try {
    const { docs } = await payload.find({
      collection: 'properties',
      limit: 100, // Adjust based on your needs
      sort: '-createdAt', // Newest first
    })

    return docs || []
  } catch (error) {
    console.error('Error fetching properties:', error)
    return []
  }
}
