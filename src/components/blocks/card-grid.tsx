'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Bed, Bath, Square, Calendar, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Media, Property } from '@/payload-types'
import { motion } from 'framer-motion'

interface CardGridProps {
  block: {
    title?: string
    properties: Property[]
  }
}

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
    y: 0,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export default function CardGrid({ block }: CardGridProps) {
  const { title, properties } = block

  if (!properties) return null

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-green-light to-primary-green mx-auto rounded-full"></div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((card, index) => {
            const image = card?.featuredImage as Media

            console.log(card, 'C')

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
                          src={image?.url || ''}
                          alt={image?.alt || card.title}
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
      </div>
    </section>
  )
}
