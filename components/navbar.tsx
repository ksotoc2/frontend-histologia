'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image';

export function Navbar({ isScrolled = false }: { isScrolled?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'La Catedra', href: '/la-catedra' },
    { label: 'Información Academica', href: '/informacion-academica' },
    { label: 'Estudiantes', href: '/estudiantes' },
    { label: 'Recursos Didacticos', href: '/recursos-didacticos' },
  ]

  return (
    <nav className={`sticky top-0 z-50 bg-blue-700 text-white shadow-lg overflow-hidden navbar-wrapper ${isScrolled ? 'navbar-shrunk' : 'navbar-expanded'}`}>
      {/* Fondo hiper-detallado de Tejido Epitelial y Conectivo (Histología Macroscópica) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3C!-- Matriz de Fibras Conjuntivas Extracelulares Profundas --%3E%3Cpath d='M-10 40 Q20 50 40 30 T80 60 T140 20 T180 80 T210 50' opacity='0.2' stroke-width='0.5' /%3E%3Cpath d='M-20 120 Q30 90 70 140 T150 110 T220 160' opacity='0.2' stroke-width='0.5' /%3E%3Cpath d='M40 -10 Q50 30 20 80 T80 150 T40 210' opacity='0.15' stroke-dasharray='2 2' /%3E%3Cpath d='M160 -20 Q130 40 180 90 T120 170 T170 220' opacity='0.15' stroke-dasharray='1 4' /%3E%3C!-- Célula Poligonal Compleja (Epitelio Plano) 1 --%3E%3Cpath d='M50 50 C65 40, 90 45, 100 65 C105 80, 90 100, 70 105 C50 110, 35 95, 30 75 C25 60, 35 55, 50 50 Z' fill='%23ffffff' fill-opacity='0.03' opacity='0.9' stroke-width='1.5' /%3E%3C!-- Detalles Intra-celulares (Citoplasma) C1 --%3E%3Ccircle cx='70' cy='75' r='8' fill='%23ffffff' opacity='0.8' /%3E%3Ccircle cx='68' cy='73' r='2' fill='%23000' opacity='0.4' /%3E%3Cpath d='M40 60 Q50 70 45 85' opacity='0.3' stroke-width='0.8' /%3E%3Cpath d='M60 55 Q75 60 85 50' opacity='0.3' stroke-width='0.8' /%3E%3C!-- Célula Adyacente 2 --%3E%3Cpath d='M100 65 C120 55, 145 60, 150 85 C155 105, 135 125, 115 120 C95 115, 85 130, 70 105 C90 100, 95 80, 100 65 Z' fill='%23ffffff' fill-opacity='0.02' opacity='0.7' /%3E%3Cellipse cx='120' cy='90' rx='6' ry='4' fill='%23ffffff' opacity='0.8' /%3E%3C!-- Célula Adyacente Superior 3 --%3E%3Cpath d='M50 50 C40 30, 60 10, 85 15 C110 20, 120 55, 100 65 C90 45, 65 40, 50 50 Z' opacity='0.5' /%3E%3Ccircle cx='85' cy='35' r='5' fill='%23ffffff' opacity='0.6' /%3E%3C!-- Célula Adyacente Izquierda 4 --%3E%3Cpath d='M30 75 C10 80, 0 50, 15 30 C30 10, 40 30, 50 50 C35 55, 25 60, 30 75 Z' opacity='0.6' /%3E%3Ccircle cx='25' cy='50' r='4' fill='%23ffffff' opacity='0.7' /%3E%3C!-- Célula Adyacente Inferior 5 --%3E%3Cpath d='M70 105 C60 130, 80 155, 110 160 C140 165, 150 140, 135 125 C135 125, 115 120, 115 120 C95 115, 85 130, 70 105 Z' opacity='0.6' /%3E%3Ccircle cx='105' cy='140' r='7' fill='%23ffffff' opacity='0.7' /%3E%3Ccircle cx='103' cy='139' r='1.5' fill='%23000' opacity='0.5' /%3E%3C!-- Célula Parcial Inferior Izquierda 6 --%3E%3Cpath d='M30 75 C35 95, 50 110, 70 105 C60 130, 40 140, 20 135 C-5 130, 0 100, 10 85 C10 85, 30 75, 30 75 Z' opacity='0.5' /%3E%3Ccircle cx='35' cy='115' r='4.5' fill='%23ffffff' opacity='0.6' /%3E%3C!-- Glóbulos Rojos / Vesículas Flotantes en capilares --%3E%3Ccircle cx='160' cy='40' r='8' opacity='0.4' stroke-width='1.5' /%3E%3Ccircle cx='160' cy='40' r='3' opacity='0.2' fill='%23ffffff' /%3E%3Ccircle cx='180' cy='55' r='7' opacity='0.3' stroke-width='1.5' /%3E%3Ccircle cx='15' cy='170' r='9' opacity='0.3' stroke-width='1.5' /%3E%3Ccircle cx='15' cy='170' r='4' opacity='0.2' fill='%23ffffff' /%3E%3Ccircle cx='175' cy='185' r='6' opacity='0.4' /%3E%3C!-- Red Capilar Sinuosa (Vasos Sanguíneos Microscópicos) --%3E%3Cpath d='M140 -10 C145 20, 160 30, 180 40 C200 50, 190 70, 210 90' opacity='0.35' stroke-width='2' stroke-dasharray='10 5' /%3E%3Cpath d='M-10 150 C20 160, 30 180, 50 210' opacity='0.3' stroke-width='2' stroke-dasharray='8 6' /%3E%3C!-- Fibrillas Finas (Reticulina) --%3E%3Cpath d='M80 70 Q90 80 85 95' opacity='0.4' stroke-width='0.5' /%3E%3Cpath d='M105 130 Q120 140 130 130' opacity='0.4' stroke-width='0.5' /%3E%3Cpath d='M40 100 Q30 110 45 125' opacity='0.4' stroke-width='0.5' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      <div className="relative z-10 px-4 md:px-8 lg:px-12 nav-inner-padding">
        {/* Desktop layout: Estructura de 3 columnas (Flex) */}
        <div className="hidden md:flex w-full justify-between items-center gap-6 transition-all duration-300">
          {/* Column 1: Logo Histologia */}
          <div className="flex items-center justify-center shrink-0 relative nav-logo-primary">
            <Image
              src="/logo-histologia.png"
              alt="Logo Cátedra Histología"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Column 2: Titulo y Navegacion */}
          <div className="flex flex-col nav-center-column grow transition-all duration-300">
            {/* Title section - alineado a la izquierda */}
            <div className="text-left nav-title-container">
              <h1 className="text-3xl font-bold leading-tight">
                CATEDRA DE HISTOLOGA
              </h1>
              <hr className="border-t-2 border-white my-2 w-full" />
              <p className="text-sm font-semibold">
                DEPARTAMENTO DE CIENCIAS MORFOLOGICAS
              </p>
            </div>

            {/* Navigation menu - alineado a la derecha */}
            <div className="flex justify-end">
              <ul className="flex gap-6 list-none m-0 p-0 flex-wrap justify-end">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-semibold hover:opacity-80 transition-opacity duration-200 whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Logo UMSA */}
          <div className="flex items-center justify-center shrink-0 relative nav-logo-secondary">
            <Image
              src="/logo-umsa.png"
              alt="Logo UMSA"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex items-center justify-between gap-3 w-full transition-all duration-300">
          {/* Mobile Logo */}
          <div className="flex items-center justify-center shrink-0 relative nav-logo-primary">
            <Image
              src="/logo-histologia.png"
              alt="Logo Cátedra Histología"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Mobile Title Section - centered */}
          <div className="grow text-center nav-title-container transition-all duration-300">
            <h1 className="text-base font-bold leading-tight">
              CATEDRA DE HISTOLOGA
            </h1>
            <hr className="border-t-2 border-white my-1" />
            <p className="text-[10px] sm:text-xs font-semibold">
              DEPARTAMENTO DE CIENCIAS MORFOLOGICAS
            </p>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 ml-2 p-1 shrink-0"
            aria-label="Menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
          <ul className="flex flex-col gap-3 list-none m-0 p-4 border-t border-blue-500 mt-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
