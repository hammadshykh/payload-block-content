import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Bed, Bath, Square, Calendar, Heart } from 'lucide-react'
import Link from 'next/link'
import { Media, Property } from '@/payload-types'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'

interface SimilarPropertiesProps {
  relatedProperties: Property[]
}

export default async function SimilarProperties({ relatedProperties }: SimilarPropertiesProps) {
  if (relatedProperties.length === 0) {
    return null // Don't render if no similar properties found
  }

  console.log(relatedProperties, 'RELATED PROPERTIES')

  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold !text-gray-900 mb-4">Similar Properties</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {relatedProperties?.map((property, index) => {
          const propertyImage = property.featuredImage as Media

          return (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 p-0 border-0 shadow-lg overflow-hidden bg-white"
            >
              <CardHeader className="p-0 relative">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    fill
                    src={
                      propertyImage?.url ||
                      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
                    }
                    alt={propertyImage?.alt || property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {property.price && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-bold shadow-lg">
                      {property.price}
                    </Badge>
                  )}

                  {property.propertyType && (
                    <Badge
                      variant="secondary"
                      className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 text-xs font-semibold"
                    >
                      {property.propertyType}
                    </Badge>
                  )}

                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                </div>
              </CardHeader>

              <CardContent className="px-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {property.title}
                  </h3>

                  {property.location && (
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin size={16} className="mr-2 text-blue-500" />
                      <span className="text-sm font-medium">{property.location}</span>
                    </div>
                  )}
                </div>

                {/* Property Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  {property.bedrooms && (
                    <div className="flex items-center">
                      <Bed size={16} className="mr-1 text-blue-500" />
                      <span className="font-medium">{property.bedrooms} bed</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center">
                      <Bath size={16} className="mr-1 text-blue-500" />
                      <span className="font-medium">{property.bathrooms} bath</span>
                    </div>
                  )}
                  {property.sqft && (
                    <div className="flex items-center">
                      <Square size={16} className="mr-1 text-blue-500" />
                      <span className="font-medium">{property.sqft.toLocaleString()} sqft</span>
                    </div>
                  )}
                </div>

                {property.description && (
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {property.description}
                  </p>
                )}

                {property.yearBuilt && (
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <Calendar size={14} className="mr-1" />
                    <span>Built in {property.yearBuilt}</span>
                  </div>
                )}
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href={`/property/${property.slug || index + 1}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
