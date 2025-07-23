import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Bed, Bath, Square } from 'lucide-react'
import Link from 'next/link'
import { Media, Property } from '@/payload-types'

interface SimilarPropertiesProps {
  relatedProperties: Property[]
}

export default async function SimilarProperties({ relatedProperties }: SimilarPropertiesProps) {
  if (relatedProperties.length === 0) {
    return null // Don't render if no similar properties found
  }

  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Similar Properties</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedProperties?.map((property) => {
          const propertyImage = property.featuredImage as Media

          return (
            <Card
              key={property.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <CardHeader className="p-0 relative">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={propertyImage?.url || ''}
                    alt={propertyImage?.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1">
                    {property.price}
                  </Badge>

                  <Badge
                    variant="secondary"
                    className="absolute top-4 right-4 bg-white/90 text-gray-800 px-2 py-1 text-xs"
                  >
                    {property.propertyType}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {property.title}
                </h3>

                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin size={14} className="mr-1 text-blue-500" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed size={14} className="mr-1 text-blue-500" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath size={14} className="mr-1 text-blue-500" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Square size={14} className="mr-1 text-blue-500" />
                    <span>{property.sqft.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href={`/properties/${property.slug}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
