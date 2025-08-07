'use client'
import { PropertyFilters } from '@/components/property/PropertyFilters'
import { PropertiesHeader } from '@/components/property/PropertyHeade'
import { useState, useMemo } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Media, Property } from '@/payload-types'
import { Badge } from '@/components/ui/badge'
import { Bath, Bed, Calendar, Heart, MapPin, Square } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
// Mock data for properties

export const PropertiesClient = ({ properties }: { properties: Property[] }) => {
  const [filters, setFilters] = useState({
    search: '',
    type: 'all',
    priceRange: 'all',
    location: 'all',
  })
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('newest')

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    const filtered = properties?.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        property.location.toLowerCase().includes(filters.search.toLowerCase())
      const matchesType = filters.type === 'all' || property.propertyType === filters.type
      const matchesLocation =
        filters.location === 'all' ||
        property.location.toLowerCase().includes(filters.location.replace('-', ' '))

      // Simple price range filtering (you'd implement proper logic here)
      let matchesPrice = true
      if (filters.priceRange !== 'all') {
        const price = parseInt(property.price.replace(/[$,]/g, ''))
        if (filters.priceRange === '0-500000') matchesPrice = price <= 500000
        else if (filters.priceRange === '500000-1000000')
          matchesPrice = price > 500000 && price <= 1000000
        else if (filters.priceRange === '1000000-2000000')
          matchesPrice = price > 1000000 && price <= 2000000
        else if (filters.priceRange === '2000000+') matchesPrice = price > 2000000
      }

      return matchesSearch && matchesType && matchesLocation && matchesPrice
    })

    // Sort properties
    if (sortBy === 'price-low') {
      filtered.sort(
        (a, b) => parseInt(a.price.replace(/[$,]/g, '')) - parseInt(b.price.replace(/[$,]/g, '')),
      )
    } else if (sortBy === 'price-high') {
      filtered.sort(
        (a, b) => parseInt(b.price.replace(/[$,]/g, '')) - parseInt(a.price.replace(/[$,]/g, '')),
      )
    } else if (sortBy === 'size') {
      filtered.sort(
        (a, b) =>
          parseInt(b.sqft.toString().replace(/[,]/g, '')) -
          parseInt(a.sqft.toString().replace(/[,]/g, '')),
      )
    }

    return filtered
  }, [filters, sortBy])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  }

  const hoverVariants = {
    hover: {
      y: -10,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PropertiesHeader
          totalResults={filteredProperties.length}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onSortChange={setSortBy}
        />

        <PropertyFilters
          onSearchChange={(search) => setFilters((prev) => ({ ...prev, search }))}
          onTypeChange={(type) => setFilters((prev) => ({ ...prev, type }))}
          onPriceRangeChange={(priceRange) => setFilters((prev) => ({ ...prev, priceRange }))}
          onLocationChange={(location) => setFilters((prev) => ({ ...prev, location }))}
        />

        <div
          className={`grid gap-6 ${
            viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
          }`}
        >
          {filteredProperties.map((card, index) => {
            const propertyImage = card?.featuredImage as Media
            return (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants as any}
                whileHover="hover"
                custom={index}
                className="h-full"
              >
                <Card className="group h-full flex flex-col p-0 border-0 shadow-lg overflow-hidden  relative bg-white">
                  <motion.div variants={hoverVariants as any}>
                    <CardHeader className="p-0 relative">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          fill
                          src={propertyImage?.url || ''}
                          alt={propertyImage?.url || card.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {card.price && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <Badge className="absolute top-4 left-4 bg-primary-green-light  text-black px-4 py-2 text-sm font-bold shadow-lg">
                              {card.price}
                            </Badge>
                          </motion.div>
                        )}

                        {card.propertyType && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <Badge
                              variant="secondary"
                              className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 text-xs font-semibold"
                            >
                              {card.propertyType}
                            </Badge>
                          </motion.div>
                        )}

                        <motion.button
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 0, scale: 1 }}
                          whileHover={{ opacity: 1, scale: 1.1 }}
                          className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center transition-all duration-300"
                        >
                          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                        </motion.button>
                      </div>
                    </CardHeader>

                    <CardContent className="px-6 pt-4 pb-20">
                      {' '}
                      {/* Extra padding for fixed button */}
                      <div className="mb-3">
                        <motion.h3
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-green transition-colors line-clamp-2"
                        >
                          {card.title}
                        </motion.h3>

                        {card.location && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="flex items-center text-gray-500 mb-4"
                          >
                            <MapPin size={16} className="mr-2 text-primary-green-light" />
                            <span className="text-sm font-medium">{card.location}</span>
                          </motion.div>
                        )}
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-between mb-4 text-sm text-gray-600"
                      >
                        {card.bedrooms && (
                          <div className="flex items-center">
                            <Bed size={16} className="mr-1 text-primary-green" />
                            <span className="font-medium">{card.bedrooms} bed</span>
                          </div>
                        )}
                        {card.bathrooms && (
                          <div className="flex items-center">
                            <Bath size={16} className="mr-1 text-primary-green" />
                            <span className="font-medium">{card.bathrooms} bath</span>
                          </div>
                        )}
                        {card.sqft && (
                          <div className="flex items-center">
                            <Square size={16} className="mr-1 text-primary-green" />
                            <span className="font-medium">{card.sqft.toLocaleString()} sqft</span>
                          </div>
                        )}
                      </motion.div>
                      {card.description && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.25 }}
                          className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4"
                        >
                          {card.description}
                        </motion.p>
                      )}
                      {card.yearBuilt && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center text-xs text-gray-500 mb-4"
                        >
                          <Calendar size={14} className="mr-1" />
                          <span>Built in {card.yearBuilt}</span>
                        </motion.div>
                      )}
                    </CardContent>
                  </motion.div>

                  {/* Fixed bottom button */}
                  <CardFooter className="p-6 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/90 to-transparent">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="w-full"
                    >
                      <Button
                        className="w-full bg-primary-green hover:opacity-85 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        asChild
                      >
                        <Link href={`/property/${card.slug || index + 1}`}>View Details</Link>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-luxe-gray text-lg">No properties found matching your criteria.</p>
            <p className="text-sm text-luxe-gray mt-2">
              Try adjusting your filters to see more results.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

export default PropertiesClient
