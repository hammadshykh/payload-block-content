import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MapPin, Bed, Bath, Square, Calendar, Share2, Heart, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import PropertyGallery from '@/components/property/property-gallery'
import ContactAgent from '@/components/property/contact-agent'
import SimilarProperties from '@/components/property/similar-properties'
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'
import { Agent, Media, Property } from '@/payload-types'

const getPropertyBySlug = async ({
  params,
}: {
  params: { slug: string }
}): Promise<Property | null> => {
  const { slug } = await params
  const payload = await getPayload({ config: payloadConfig })
  try {
    const { docs } = await payload.find({
      collection: 'properties',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    })

    if (!docs.length) return null

    const property = docs[0]
    const featuredImage = property.featuredImage as Media

    return {
      agent: property.agent as Property['agent'],
      createdAt: property.createdAt,
      parking: property.parking,
      updatedAt: property.updatedAt,
      id: property.id,
      title: property.title,
      slug: property.slug,
      price: property.price,
      location: property.location,
      description: property.description,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      sqft: property.sqft,
      propertyType: property.propertyType,
      yearBuilt: property.yearBuilt,
      // status: property.status,
      features: property.features || [],
      featuredImage: {
        url: featuredImage?.url,
        alt: property.title,
        createdAt: property.createdAt,
        id: property.id,
        updatedAt: property.updatedAt,
      },
      gallery: (property.gallery || []).map((item: any) => ({
        image: {
          url: item.image?.url || '/placeholder.jpg',
          alt: item.alt || property.title,
          createdAt: item.createdAt || new Date().toISOString(),
          updatedAt: item.createdAt || new Date().toISOString(),
          id: item.id,
        },
        alt: item.alt || property.title,
      })),
      relatedProperties: property.relatedProperties,
    }
  } catch (error) {
    console.error('Error fetching property:', error)
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const property = await getPropertyBySlug({ params: { slug } })

  if (!property) {
    return {
      title: 'Property Not Found',
    }
  }
  const featuredImage = property.featuredImage as Media

  return {
    title: `${property.title} - ${property.price} | RealEstate`,
    description: property.description,
    openGraph: {
      images: [featuredImage?.url || ''],
    },
  }
}

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const property = await getPropertyBySlug({ params: { slug } })

  if (!property) {
    notFound()
  }

  // Calculate mortgage estimate
  const safePrice = property.price || '$0'
  const numericPrice = parseInt(safePrice.replace(/[$,]/g, '')) || 0
  const monthlyPayment = Math.round((numericPrice * 0.8 * 0.065) / 12)

  if (!property) {
    return null
  }

  const agent = property.agent as Agent
  const agentImage = agent.image as Media

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Properties
            </Link>
          </Button>
        </div>
      </div>

      {/* Property Gallery */}
      <PropertyGallery
        images={
          property.gallery
            ? [
                property.featuredImage as Media,
                ...property.gallery
                  .map((g) => g?.image)
                  .filter((img): img is Media => img !== undefined),
              ]
            : [property.featuredImage as Media]
        }
        title={property.title}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Header */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-primary-green text-white px-4 py-2">
                        {property.propertyType}
                      </Badge>
                      {/* <Badge variant="outline" className="px-3 py-1">
                        {property.status === 'for_sale' && 'For Sale'}
                        {property.status === 'for_rent' && 'For Rent'}
                        {property.status === 'sold' && 'Sold'}
                      </Badge> */}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2 text-primary-green-light" />
                      <span className="text-lg">{property.location}</span>
                    </div>
                    <div className="text-4xl font-bold text-primary-green">{property.price}</div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-red-50 hover:text-red-500"
                    >
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-blue-50 hover:text-blue-500"
                    >
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Property Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bed className="w-8 h-8 text-primary-green mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="w-8 h-8 text-primary-green mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Square className="w-8 h-8 text-primary-green mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      {property.sqft.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-8 h-8 text-primary-green mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.yearBuilt}</div>
                    <div className="text-sm text-gray-600">Year Built</div>
                  </div>
                </div>

                <Separator className="my-8" />

                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{property.description}</p>
                </div>

                {property?.features?.length !== 0 && (
                  <>
                    <Separator className="my-8" />
                    {/* Features */}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {property?.features?.map(({ feature }, index) => (
                          <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
            <div>
              <SimilarProperties
                relatedProperties={
                  property.relatedProperties?.filter(
                    (item): item is Property => typeof item === 'object' && item !== null,
                  ) ?? []
                }
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Agent - You'll need to implement this based on your agent data */}
            <ContactAgent
              agent={{
                name: (property.agent as Agent).name,
                phone: (property.agent as Agent).phone,
                email: (property.agent as Agent).email,
                image: {
                  url: agentImage?.url || '/user-image.avif',
                  alt: (property.agent as Agent).name,
                },
              }}
            />
            {/* Mortgage Calculator */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Mortgage Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Home Price
                    </label>
                    <input
                      type="text"
                      defaultValue={property.price}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Down Payment (20%)
                    </label>
                    <input
                      type="text"
                      defaultValue={`$${(numericPrice * 0.2).toLocaleString()}`}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interest Rate
                    </label>
                    <input
                      type="text"
                      defaultValue="6.5%"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Est. Monthly Payment</span>
                      <span className="text-xl font-bold text-primary-green">
                        ${monthlyPayment.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary-green-light">Get Pre-Approved</Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <Button className="w-full bg-green-800 hover:bg-green-700 text-white">
                    Schedule Tour
                  </Button>
                  <Button variant="outline" className="w-full">
                    Request Info
                  </Button>
                  <Button variant="outline" className="w-full">
                    Save Property
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

