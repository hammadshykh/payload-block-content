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

// Updated PropertyCard type to ensure all required fields are present
interface PropertyCard {
  id: string
  title: string
  price: string
  location: string
  description: string
  bedrooms: number
  bathrooms: number
  sqft: number
  propertyType: string
  yearBuilt: number
  parking: number
  features: string[]
  gallery: Array<{ url: string; alt: string }>
  agent: {
    name: string
    phone: string
    email: string
    image?: { url: string; alt: string }
  }
  neighborhood?: {
    walkScore: number
    transitScore: number
    bikeScore: number
    schools?: Array<{ name: string; rating: number; distance: string }>
    amenities?: Array<{ name: string; distance: string; type: string }>
  }
}

// Mock property data with proper typing
const getPropertyById = async (id: string): Promise<PropertyCard | null> => {
  const properties: Record<string, PropertyCard> = {
    '1': {
      id: '1',
      title: 'Modern Downtown Apartment',
      price: '$850,000',
      location: 'Manhattan, NY',
      description: 'Stunning 2-bedroom apartment...',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      propertyType: 'Apartment',
      yearBuilt: 2020,
      parking: 1,
      features: ['Hardwood Floors', 'Stainless Steel Appliances'],
      gallery: [
        { url: 'https://example.com/image1.jpg', alt: 'Living Room' },
        { url: 'https://example.com/image2.jpg', alt: 'Kitchen' },
      ],
      agent: {
        name: 'Sarah Johnson',
        phone: '+1 (555) 123-4567',
        email: 'sarah@realestate.com',
        image: {
          url: 'https://example.com/agent1.jpg',
          alt: 'Sarah Johnson',
        },
      },
      neighborhood: {
        walkScore: 95,
        transitScore: 88,
        bikeScore: 72,
        schools: [{ name: 'Manhattan Elementary', rating: 9, distance: '0.3 miles' }],
        amenities: [{ name: 'Central Park', distance: '0.2 miles', type: 'Park' }],
      },
    },
    // Other properties...
  }

  return properties[id] || null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }> // Changed from Promise<{ id: string }> to just { id: string }
}): Promise<Metadata> {
  const { id } = await params
  const property = await getPropertyById(id)

  if (!property) {
    return {
      title: 'Property Not Found',
    }
  }

  return {
    title: `${property.title} - ${property.price} | RealEstate`,
    description: property.description,
  }
}

export default async function PropertyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = await getPropertyById(id)

  if (!property) {
    notFound()
  }

  // Safe property access with fallbacks
  const safePrice = property.price || '$0'
  const numericPrice = parseInt(safePrice.replace(/[$,]/g, '')) || 0
  const monthlyPayment = Math.round((numericPrice * 0.8 * 0.065) / 12)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Properties
            </Link>
          </Button>
        </div>
      </div>

      {/* Property Gallery */}
      <PropertyGallery images={property.gallery} title={property.title} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Header */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2">
                        {property.propertyType}
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1">
                        For Sale
                      </Badge>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                      <span className="text-lg">{property.location}</span>
                    </div>
                    <div className="text-4xl font-bold text-blue-600">{property.price}</div>
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
                    <Bed className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Square className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      {property.sqft.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-2" />
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
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Property Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Neighborhood Info */}
            {property.neighborhood && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Neighborhood</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Walk Score */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {property.neighborhood.walkScore}
                      </div>
                      <div className="text-sm text-gray-600">Walk Score</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {property.neighborhood.transitScore}
                      </div>
                      <div className="text-sm text-gray-600">Transit Score</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">
                        {property.neighborhood.bikeScore}
                      </div>
                      <div className="text-sm text-gray-600">Bike Score</div>
                    </div>
                  </div>

                  {/* Schools */}
                  {property.neighborhood.schools && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Nearby Schools</h3>
                      <div className="space-y-2">
                        {property.neighborhood.schools.map((school, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <div className="font-medium">{school.name}</div>
                              <div className="text-sm text-gray-600">{school.distance}</div>
                            </div>
                            <Badge className="bg-yellow-100 text-yellow-800">
                              {school.rating}/10
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Amenities */}
                  {property.neighborhood.amenities && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Nearby Amenities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {property.neighborhood.amenities.map((amenity, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <div className="font-medium">{amenity.name}</div>
                              <div className="text-sm text-gray-600">{amenity.type}</div>
                            </div>
                            <div className="text-sm text-blue-600 font-medium">
                              {amenity.distance}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Agent */}
            <ContactAgent agent={property.agent} />

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
                      <span className="text-xl font-bold text-blue-600">
                        ${monthlyPayment.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Pre-Approved
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
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

        {/* Similar Properties */}
        <div className="mt-16">
          <SimilarProperties currentPropertyId={property.id} />
        </div>
      </div>
    </div>
  )
}
