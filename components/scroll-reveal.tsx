'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  /** Delay en segundos antes de iniciar la animación (útil para cascadas) */
  delay?: number
  /** Dirección de entrada: 'up' | 'down' | 'left' | 'right' */
  direction?: 'up' | 'down' | 'left' | 'right'
  /** Duración de la animación en segundos */
  duration?: number
  /** Distancia en px del desplazamiento inicial */
  distance?: number
  /** Clases CSS adicionales para el wrapper */
  className?: string
  /** Si es true, la animación solo se ejecuta una vez */
  once?: boolean
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  distance = 40,
  className = '',
  once = false,
}: ScrollRevealProps) {
  // Calcula el offset inicial según la dirección
  const offsets = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offsets[direction].x,
        y: offsets[direction].y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier premium
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
