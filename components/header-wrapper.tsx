'use client'

import { useState, useEffect } from 'react'
import { Navbar } from './navbar'

export function HeaderWrapper() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Si el desplazamiento vertical es mayor a 20px, activamos el estado encogido
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Añadir listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Llamada inicial para fijar el estado si la página ya cargó estando scrolleada
    handleScroll()

    // Limpiar listener al desmontar
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <Navbar isScrolled={isScrolled} />
}
