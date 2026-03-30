'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// ═══════════════════════════════════════════════
// CONFIGURACIÓN
// ═══════════════════════════════════════════════

const fallbackImages = [
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1920&auto=format&fit=crop',
]

const phrases = [
  { line1: 'CÁTEDRA DE', line2: 'HISTOLOGÍA' },
  { line1: 'DEPARTAMENTO DE', line2: 'CIENCIAS MORFOLÓGICAS' },
]

const TYPING_SPEED = 55
const BACKSPACE_SPEED = 30
const PAUSE_AFTER_TYPING = 3500
const PAUSE_AFTER_DELETING = 400
const SLIDE_INTERVAL = 8000 // 8s por slide — sincronizado con la duración de animaciones

// ═══════════════════════════════════════════════
// HOOK: useTypewriter
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
  // Clave única por ciclo de slide para forzar reinicio de la animación CSS
  const [animKey, setAnimKey] = useState(0)
  const { displayLine1, displayLine2 } = useTypewriter(phrases)

  // Autoplay
  useEffect(() => {
    if (slides.length <= 1) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setAnimKey((k) => k + 1) // Reinicia la animación al cambiar slide
    }, SLIDE_INTERVAL)
    return () => clearInterval(interval)
  }, [slides.length])

  const showCursorOnLine1 = displayLine2.length === 0 && displayLine1.length > 0
  const showCursorOnLine2 = displayLine2.length > 0

  return (
    <div className="relative w-full h-[60vh] min-h-[450px] overflow-hidden">

      {/* ═══════ SLIDES ═══════
          Cada slide tiene:
          1. Crossfade de 1.5s vía transition-opacity duration-[1500ms]
          2. Contenedor interior con inset-[-15%] para dar ~30% de margen de movimiento
          3. Animación Ken Burns (zoom o pan) solo en el slide activo, reiniciada por key
      */}
      {slides.map((src, index) => {
        const isActive = index === currentSlide
        const motionClass = index % 2 === 0 ? 'hero-zoom-motion' : 'hero-pan-motion'

        return (
          <div
            key={src}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-1500 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            {/* Contenedor de imagen con bleed extra para movimiento sin bordes */}
            <div
              key={isActive ? `motion-${animKey}` : `idle-${index}`}
              className={`absolute inset-[-15%] ${isActive ? motionClass : 'hero-idle'}`}
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
          </div>
        )
      })}

      {/* ═══════ OVERLAY (estático, z-20) ═══════ */}
      <div className="absolute inset-0 z-20 bg-black/60" />

      {/* ═══════ TEXTO (estático, z-30) ═══════ */}
      <div className="absolute inset-0 z-30 flex items-center">
        <div className="px-8 md:px-16 lg:px-20 max-w-3xl">

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight min-h-[1.2em]">
            {displayLine1}
            {showCursorOnLine1 && (
              <span className="inline-block w-[3px] h-[0.85em] bg-white ml-1 align-middle animate-pulse" />
            )}
          </h2>

          <h2 className="text-3xl md:text-5xl font-bold text-[#4da3ff] leading-tight min-h-[1.2em] mt-1">
            {displayLine2}
            {showCursorOnLine2 && (
              <span className="inline-block w-[3px] h-[0.85em] bg-[#4da3ff] ml-1 align-middle animate-pulse" />
            )}
          </h2>

          <p className="mt-6 text-white/75 text-sm md:text-base font-medium leading-relaxed max-w-lg">
            Formando profesionales en el estudio microscópico de los tejidos humanos desde la Facultad de Medicina — Universidad Mayor de San Andrés.
          </p>

          <div className="mt-6 w-14 h-1 bg-[#001f3f] rounded-full" />
        </div>
      </div>

      {/* ═══════ DOTS (estático, z-40) ═══════ */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 flex gap-2.5">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`rounded-full transition-all duration-500 ${idx === currentSlide
              ? 'w-8 h-2.5 bg-[#001f3f]'
              : 'w-2.5 h-2.5 bg-white/50'
              }`}
          />
        ))}
      </div>

      {/* ═══════ CSS KEYFRAMES ═══════ */}
      <style jsx global>{`
        /* ─── ZOOM: escala progresiva evidente ─── */
        @keyframes heroZoomMotion {
          0%   { transform: scale(1.0); }
          40%  { transform: scale(1.18); }
          70%  { transform: scale(1.12); }
          100% { transform: scale(1.2); }
        }

        /* ─── PAN: desplazamiento lateral + zoom ─── */
        @keyframes heroPanMotion {
          0%   { transform: scale(1.1) translate(-3%, -1%); }
          35%  { transform: scale(1.15) translate(2%, 1%); }
          70%  { transform: scale(1.12) translate(0%, -1%); }
          100% { transform: scale(1.18) translate(3%, 0%); }
        }

        .hero-zoom-motion {
          animation: heroZoomMotion 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: transform;
        }

        .hero-pan-motion {
          animation: heroPanMotion 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: transform;
        }

        .hero-idle {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  )
}
