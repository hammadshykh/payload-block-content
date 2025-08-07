'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react'
import { Media } from '@/payload-types'
import Image from 'next/image'

interface PropertyGalleryProps {
  images: Media[]
  title: string
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setIsLightboxOpen(true)
  }

  return (
    <>
      <div className="relative h-[60vh] bg-gray-900">
        {/* Main Image */}
        <div className="relative h-full">
          <Image
            src={
              images[currentImage]?.url ||
              'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
            }
            alt={images[currentImage]?.alt || title}
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Expand Button */}
          <button
            onClick={() => openLightbox(currentImage)}
            className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-black/70 transition-all duration-300 flex items-center gap-2"
          >
            <Expand size={16} />
            View All Photos ({images.length})
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm">
            {currentImage + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentImage
                    ? 'border-white scale-110'
                    : 'border-transparent hover:border-white/50'
                }`}
              >
                <img
                  src={
                    image?.url ||
                    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
                  }
                  alt={image?.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X size={32} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={images[currentImage]?.url || ''}
              alt={images[currentImage]?.alt || title}
              className="max-w-full max-h-full object-contain"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">
              {currentImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
