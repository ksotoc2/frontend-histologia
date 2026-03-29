'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function HeroCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play logic
  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  // Fallback state if no images found
  if (images.length === 0) {
    return (
      <div className="w-full flex flex-col items-center gap-6">
        <div className="w-full h-[300px] md:h-[400px] bg-slate-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300">
          <p className="text-slate-500 font-medium text-lg text-center px-4">
            CARRUSEL DE IMAGENES <br />
            <span className="text-sm font-normal">(Directorio /public/images/carousel/ vacío)</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {/* Dynamic Image Container */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] bg-slate-100 rounded-3xl overflow-hidden shadow-sm group">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Carousel Image ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
        {/* Navigation Overlays (visible on hover for desktop, always on for mobile if desired, but here we requested buttons below) */}
      </div>

      {/* Controls: Arrows and Dots */}
      <div className="flex items-center gap-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors text-slate-600"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-slate-800 scale-110' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Ir a la imagen ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors text-slate-600"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
