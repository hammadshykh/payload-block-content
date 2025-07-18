import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Bed, Bath, Square } from 'lucide-react'
import Link from 'next/link'

interface SimilarPropertiesProps {
  currentPropertyId: string
}

interface SimilarProperty {
  id: string
  title: string
  price: string
  location: string
  bedrooms: number
  bathrooms: number
  sqft: number
  propertyType: string
  image: string
}

// Mock similar properties data
const getSimilarProperties = (currentId: string): SimilarProperty[] => {
  const allProperties: SimilarProperty[] = [
    {
      id: '1',
      title: 'Modern Downtown Apartment',
      price: '$850,000',
      location: 'Manhattan, NY',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      propertyType: 'Apartment',
      image:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '2',
      title: 'Suburban Family Home',
      price: '$650,000',
      location: 'Brooklyn, NY',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2400,
      propertyType: 'House',
      image:
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '3',
      title: 'Luxury Penthouse',
      price: '$2,500,000',
      location: 'Upper East Side, NY',
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2800,
      propertyType: 'Penthouse',
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '4',
      title: 'Cozy Studio Loft',
      price: '$450,000',
      location: 'SoHo, NY',
      bedrooms: 1,
      bathrooms: 1,
      sqft: 800,
      propertyType: 'Loft',
      image:
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ]

  return allProperties.filter((property) => property.id !== currentId).slice(0, 3)
}

export default function SimilarProperties({ currentPropertyId }: SimilarPropertiesProps) {
  const similarProperties = getSimilarProperties(currentPropertyId)

  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Similar Properties</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {similarProperties.map((property) => (
          <Card
            key={property.id}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
          >
            <CardHeader className="p-0 relative">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
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
                <Link href={`/property/${property.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
