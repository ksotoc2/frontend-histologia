'use client'

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative bg-blue-950 text-white text-xs md:text-sm shadow-lg overflow-hidden">
      {/* Fondo con patrón geométrico (Chakana / Cruz Andina) */}
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='20 20 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='2'%3E%3Cpath d='M40 20 L60 20 L60 30 L70 30 L70 40 L80 40 L80 60 L70 60 L70 70 L60 70 L60 80 L40 80 L40 70 L30 70 L30 60 L20 60 L20 40 L30 40 L30 30 L40 30 Z' /%3E%3Ccircle cx='50' cy='50' r='14' /%3E%3Cline x1='50' y1='20' x2='50' y2='36' /%3E%3Cline x1='50' y1='80' x2='50' y2='64' /%3E%3Cline x1='20' y1='50' x2='36' y2='50' /%3E%3Cline x1='80' y1='50' x2='64' y2='50' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />
      <div className="relative z-10 px-4 md:px-12 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-[70px_1fr_1fr] gap-6 md:gap-8 items-center">
          {/* Column 1 - UMSA Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-14 h-24 md:w-16 md:h-28 shrink-0">
              <Image
                src="/logo-umsa-bn.png"
                alt="Logo UMSA Blanco y Negro"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Column 2 - DTIC Info */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-xs">DTIC - UNIVERSIDAD MAYOR DE SAN ANDRÉS, 2017 - 2026</span>
            </div>
            <p className="text-xs">Teléfono: (591 - 2) 2612298. E-mail: informate@umsa.bo</p>
            <p className="text-xs">Av. Villazón Nº 1995, Plaza del Bicentenario - Zona Central.</p>
            <p className="text-xs">Ciudad de La Paz. Estado Plurinacional de Bolivia</p>
          </div>

          {/* Column 3 - Faculty Info */}
          <div className="space-y-1.5 md:text-right">
            <p className="text-xs font-semibold">Facultad de Medicina, Enfermería, Nutrición y Tecnología Médica</p>
            <p className="text-xs">Teléfono: (591 - 2) 261-2371</p>
            <p className="text-xs">E-mail: carrera.medicina@umsa.edu.bo</p>
            <p className="text-xs">Av. Saavedra No. 2246 - Miraflores</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

