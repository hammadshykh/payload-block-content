'use client'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Banner, Media } from '@/payload-types'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

interface BannerCardProps {
  banners: Banner[]
}

function BannerCard({ banners }: BannerCardProps) {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-10">
        <CarouselContent>
          {banners.map((banner) => {
            const image = banner.backgroundImage as Media
            return (
              <CarouselItem key={banner.id}>
                <div className="p-4">
                  <Card>
                    <CardContent className="aspect-square flex flex-col justify-center p-6  items-start gap-4 w-full">
                      {image?.url && (
                        <div className="w-full">
                          <AspectRatio ratio={16 / 9}>
                            <Image
                              src={image.url ?? ''}
                              alt="Photo by Drew Beamer"
                              fill
                              className="h-60 w-full rounded-md object-contain"
                            />
                          </AspectRatio>
                        </div>
                      )}
                      {banner.cta && (
                        <a
                          href={banner.cta.url}
                          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                          {banner.cta.text}
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default BannerCard
