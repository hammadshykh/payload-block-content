import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Bed, Bath, Square, Calendar, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Media } from '@/payload-types'

interface CardGridProps {
  block: any
}

export default function CardGrid({ block }: CardGridProps) {
  const { title, properties } = block

  console.log(properties, 'PROPERTIES')

  if (!properties || properties.length === 0) return null

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties?.map((card: any, index: number) => {
            const image = card?.image as Media

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
                        image?.url ||
                        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
                      }
                      alt={card.image?.alt || card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {card.price && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-bold shadow-lg">
                        {card.price}
                      </Badge>
                    )}

                    {card.propertyType && (
                      <Badge
                        variant="secondary"
                        className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 text-xs font-semibold"
                      >
                        {card.propertyType}
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
                      {card.title}
                    </h3>

                    {card.location && (
                      <div className="flex items-center text-gray-500 mb-4">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        <span className="text-sm font-medium">{card.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    {card.bedrooms && (
                      <div className="flex items-center">
                        <Bed size={16} className="mr-1 text-blue-500" />
                        <span className="font-medium">{card.bedrooms} bed</span>
                      </div>
                    )}
                    {card.bathrooms && (
                      <div className="flex items-center">
                        <Bath size={16} className="mr-1 text-blue-500" />
                        <span className="font-medium">{card.bathrooms} bath</span>
                      </div>
                    )}
                    {card.sqft && (
                      <div className="flex items-center">
                        <Square size={16} className="mr-1 text-blue-500" />
                        <span className="font-medium">{card.sqft.toLocaleString()} sqft</span>
                      </div>
                    )}
                  </div>

                  {card.description && (
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {card.description}
                    </p>
                  )}

                  {card.yearBuilt && (
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <Calendar size={14} className="mr-1" />
                      <span>Built in {card.yearBuilt}</span>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <Link href={`/property/${card.slug || index + 1}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
