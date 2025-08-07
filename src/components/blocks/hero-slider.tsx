'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroSliderProps {
  block: any
}

export default function HeroSlider({ block }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { slides } = block

  console.log(slides, 'SLIDES')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  if (!slides || slides.length === 0) return null

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {slides?.map((slide: any, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: slide.image?.url
                ? `url(${slide.image.url})`
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />

          <div className="relative h-full flex items-center justify-center px-6">
            <div className="text-center text-white max-w-5xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-fade-in">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="text-xl md:text-3xl mb-12 text-gray-200 font-light leading-relaxed animate-fade-in-delay">
                  {slide.subtitle}
                </p>
              )}
              {slide.buttonText && slide.buttonLink && (
                <Button
                  size="lg"
                  className=" bg-[#ccf081] text-black  hover:to-[#9dd12d]  px-12 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-fade-in-delay-2"
                  asChild
                >
                  <a href={slide.buttonLink}>{slide.buttonText}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}

      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
            {slides.map((_: any, index: any) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
