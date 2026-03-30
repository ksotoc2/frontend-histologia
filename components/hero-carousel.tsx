'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// ═══════════════════════════════════════════════
// CONFIGURACIÓN
// ═══════════════════════════════════════════════

const fallbackImages = [
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1920&auto=format&fit=crop',
]

// Cada frase tiene dos líneas que se escriben secuencialmente
const phrases = [
  { line1: 'CÁTEDRA DE', line2: 'HISTOLOGÍA' },
  { line1: 'DEPARTAMENTO DE', line2: 'CIENCIAS MORFOLÓGICAS' },
]

// Velocidades (ms)
const TYPING_SPEED = 55
const BACKSPACE_SPEED = 30
const PAUSE_AFTER_TYPING = 3500
const PAUSE_AFTER_DELETING = 400
const SLIDE_INTERVAL = 6000

// ═══════════════════════════════════════════════
// HOOK: useTypewriter (con soporte de dos líneas)
// ═══════════════════════════════════════════════

type Phase = 'typing-line1' | 'typing-line2' | 'pausing' | 'deleting-line2' | 'deleting-line1' | 'waiting'

function useTypewriter(words: { line1: string; line2: string }[]) {
  const [displayLine1, setDisplayLine1] = useState('')
  const [displayLine2, setDisplayLine2] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing-line1')
  const charRef = useRef(0)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    switch (phase) {
      case 'typing-line1':
        if (charRef.current < current.line1.length) {
          timeout = setTimeout(() => {
            charRef.current += 1
            setDisplayLine1(current.line1.slice(0, charRef.current))
          }, TYPING_SPEED)
        } else {
          charRef.current = 0
          setPhase('typing-line2')
        }
        break

      case 'typing-line2':
        if (charRef.current < current.line2.length) {
          timeout = setTimeout(() => {
            charRef.current += 1
            setDisplayLine2(current.line2.slice(0, charRef.current))
          }, TYPING_SPEED)
        } else {
          setPhase('pausing')
        }
        break

      case 'pausing':
        timeout = setTimeout(() => {
          charRef.current = current.line2.length
          setPhase('deleting-line2')
        }, PAUSE_AFTER_TYPING)
        break

      case 'deleting-line2':
        if (charRef.current > 0) {
          timeout = setTimeout(() => {
            charRef.current -= 1
            setDisplayLine2(current.line2.slice(0, charRef.current))
          }, BACKSPACE_SPEED)
        } else {
          charRef.current = current.line1.length
          setPhase('deleting-line1')
        }
        break

      case 'deleting-line1':
        if (charRef.current > 0) {
          timeout = setTimeout(() => {
            charRef.current -= 1
            setDisplayLine1(current.line1.slice(0, charRef.current))
          }, BACKSPACE_SPEED)
        } else {
          setPhase('waiting')
        }
        break

      case 'waiting':
        timeout = setTimeout(() => {
          charRef.current = 0
          setWordIndex((prev) => (prev + 1) % words.length)
          setPhase('typing-line1')
        }, PAUSE_AFTER_DELETING)
        break
    }

    return () => clearTimeout(timeout)
  }, [displayLine1, displayLine2, phase, wordIndex, words])

  return { displayLine1, displayLine2 }
}

// ═══════════════════════════════════════════════
// COMPONENTE PRINCIPAL
// ═══════════════════════════════════════════════

export function HeroCarousel({ images }: { images: string[] }) {
  const slides = images.length > 0 ? images : fallbackImages
  const [currentSlide, setCurrentSlide] = useState(0)
  const { displayLine1, displayLine2 } = useTypewriter(phrases)

  const goTo = useCallback((index: number) => setCurrentSlide(index), [])
  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [slides.length])
  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  // Auto-rotación
  useEffect(() => {
    if (slides.length <= 1) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, SLIDE_INTERVAL)
    return () => clearInterval(interval)
  }, [slides.length])

  // Cursor visible solo cuando la máquina de escribir está activa en alguna línea
  const showCursorOnLine1 = displayLine2.length === 0 && displayLine1.length > 0
  const showCursorOnLine2 = displayLine2.length > 0

  return (
    <div className="relative w-full h-[60vh] min-h-[450px] overflow-hidden">

      {/* ═══════ SLIDES ═══════ */}
      {slides.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={src}
            alt={`Diapositiva ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* ═══════ OVERLAY ═══════ */}
      <div className="absolute inset-0 z-20 bg-black/60" />

      {/* ═══════ TEXTO (izquierda, centrado vertical) ═══════ */}
      <div className="absolute inset-0 z-30 flex items-center">
        <div className="px-8 md:px-16 lg:px-20 max-w-3xl">

          {/* Línea 1 */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight min-h-[1.2em]">
            {displayLine1}
            {showCursorOnLine1 && (
              <span className="inline-block w-[3px] h-[0.85em] bg-white ml-1 align-middle animate-pulse" />
            )}
          </h2>

          {/* Línea 2 */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight min-h-[1.2em] mt-1">
            {displayLine2}
            {showCursorOnLine2 && (
              <span className="inline-block w-[3px] h-[0.85em] bg-white ml-1 align-middle animate-pulse" />
            )}
          </h2>

          {/* Descripción estática */}
          <p className="mt-6 text-white/75 text-sm md:text-base font-medium leading-relaxed max-w-lg">
            Formando profesionales en el estudio microscópico de los tejidos humanos desde la Facultad de Medicina — Universidad Mayor de San Andrés.
          </p>

          {/* Línea decorativa */}
          <div className="mt-6 w-14 h-1 bg-[#001f3f] rounded-full" />
        </div>
      </div>

      {/* ═══════ FLECHAS ═══════ */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#001f3f] hover:border-[#001f3f] transition-all duration-300"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#001f3f] hover:border-[#001f3f] transition-all duration-300"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ═══════ DOTS ═══════ */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 flex gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? 'w-8 h-2.5 bg-[#001f3f]'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir a la diapositiva ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
