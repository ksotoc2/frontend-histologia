'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, LogOut, User as UserIcon } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

// Define the precise nested navigational structure
const navItems = [
  { label: 'Inicio', href: '/' },
  { 
    label: 'La Cátedra', 
    href: '/la-catedra',
    subItems: [
      { label: 'Misión y Visión', href: '/la-catedra#mision-vision' },
      { label: 'Historia', href: '/la-catedra#historia' },
      { label: 'Jefatura', href: '/la-catedra#jefatura' },
      { label: 'Plantel Docente', href: '/la-catedra/plantel-docente' },
    ]
  },
  { 
    label: 'Información Académica', 
    href: '/informacion-academica',
    subItems: [
      { label: 'Plan de Estudios', href: '/informacion-academica#plan-estudios' },
      { label: 'Sistema de Evaluación', href: '/informacion-academica#sistema-evaluacion' },
      { label: 'Bibliografía', href: '/informacion-academica#bibliografia' },
      { label: 'Cronograma Anual', href: '/informacion-academica#cronograma-anual' },
    ]
  },
  { 
    label: 'Estudiantes', 
    href: '/estudiantes',
    subItems: [
      { label: 'Avisos y Comunicados', href: '/estudiantes/avisos' },
      { label: 'Grupos y Rotaciones', href: '/estudiantes/grupos-rotaciones' },
    ]
  },
  { 
    label: 'Recursos Didácticos', 
    href: '/recursos-didacticos',
    subItems: [
      { label: 'Atlas Histológico', href: '/recursos-didacticos/atlas-histologico' },
      { label: 'Guías de Práctica', href: '/recursos-didacticos/guias-practica' },
    ]
  },
]

export function Navbar({ isScrolled = false }: { isScrolled?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  
  const { user, logout } = useAuth()

  return (
    // [CORRECCIÓN]: Se quitó la clase 'overflow-hidden' de este contenedor <nav> que recortaba los Dropdowns.
    // [CORRECCIÓN]: Se mantiene 'sticky top-0 z-50' para que el header tenga jerarquía sobre el layout entero.
    <nav className={`sticky top-0 z-50 bg-blue-700 text-white shadow-lg navbar-wrapper ${isScrolled ? 'navbar-shrunk' : 'navbar-expanded'}`}>
      {/* Fondo anatómico Histológico vectorizado */}
      <div
        className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3C!-- Matriz de Fibras Conjuntivas Extracelulares Profundas --%3E%3Cpath d='M-10 40 Q20 50 40 30 T80 60 T140 20 T180 80 T210 50' opacity='0.2' stroke-width='0.5' /%3E%3Cpath d='M-20 120 Q30 90 70 140 T150 110 T220 160' opacity='0.2' stroke-width='0.5' /%3E%3Cpath d='M40 -10 Q50 30 20 80 T80 150 T40 210' opacity='0.15' stroke-dasharray='2 2' /%3E%3Cpath d='M160 -20 Q130 40 180 90 T120 170 T170 220' opacity='0.15' stroke-dasharray='1 4' /%3E%3C!-- Célula Poligonal Compleja (Epitelio Plano) 1 --%3E%3Cpath d='M50 50 C65 40, 90 45, 100 65 C105 80, 90 100, 70 105 C50 110, 35 95, 30 75 C25 60, 35 55, 50 50 Z' fill='%23ffffff' fill-opacity='0.03' opacity='0.9' stroke-width='1.5' /%3E%3C!-- Detalles Intra-celulares (Citoplasma) C1 --%3E%3Ccircle cx='70' cy='75' r='8' fill='%23ffffff' opacity='0.8' /%3E%3Ccircle cx='68' cy='73' r='2' fill='%23000' opacity='0.4' /%3E%3Cpath d='M40 60 Q50 70 45 85' opacity='0.3' stroke-width='0.8' /%3E%3Cpath d='M60 55 Q75 60 85 50' opacity='0.3' stroke-width='0.8' /%3E%3C!-- Célula Adyacente 2 --%3E%3Cpath d='M100 65 C120 55, 145 60, 150 85 C155 105, 135 125, 115 120 C95 115, 85 130, 70 105 C90 100, 95 80, 100 65 Z' fill='%23ffffff' fill-opacity='0.02' opacity='0.7' /%3E%3Cellipse cx='120' cy='90' rx='6' ry='4' fill='%23ffffff' opacity='0.8' /%3E%3C!-- Célula Adyacente Superior 3 --%3E%3Cpath d='M50 50 C40 30, 60 10, 85 15 C110 20, 120 55, 100 65 C90 45, 65 40, 50 50 Z' opacity='0.5' /%3E%3Ccircle cx='85' cy='35' r='5' fill='%23ffffff' opacity='0.6' /%3E%3C!-- Célula Adyacente Izquierda 4 --%3E%3Cpath d='M30 75 C10 80, 0 50, 15 30 C30 10, 40 30, 50 50 C35 55, 25 60, 30 75 Z' opacity='0.6' /%3E%3Ccircle cx='25' cy='50' r='4' fill='%23ffffff' opacity='0.7' /%3E%3C!-- Célula Adyacente Inferior 5 --%3E%3Cpath d='M70 105 C60 130, 80 155, 110 160 C140 165, 150 140, 135 125 C135 125, 115 120, 115 120 C95 115, 85 130, 70 105 Z' opacity='0.6' /%3E%3Ccircle cx='105' cy='140' r='7' fill='%23ffffff' opacity='0.7' /%3E%3Ccircle cx='103' cy='139' r='1.5' fill='%23000' opacity='0.5' /%3E%3C!-- Célula Parcial Inferior Izquierda 6 --%3E%3Cpath d='M30 75 C35 95, 50 110, 70 105 C60 130, 40 140, 20 135 C-5 130, 0 100, 10 85 C10 85, 30 75, 30 75 Z' opacity='0.5' /%3E%3Ccircle cx='35' cy='115' r='4.5' fill='%23ffffff' opacity='0.6' /%3E%3C!-- Glóbulos Rojos / Vesículas Flotantes en capilares --%3E%3Ccircle cx='160' cy='40' r='8' opacity='0.4' stroke-width='1.5' /%3E%3Ccircle cx='160' cy='40' r='3' opacity='0.2' fill='%23ffffff' /%3E%3Ccircle cx='180' cy='55' r='7' opacity='0.3' stroke-width='1.5' /%3E%3Ccircle cx='15' cy='170' r='9' opacity='0.3' stroke-width='1.5' /%3E%3Ccircle cx='15' cy='170' r='4' opacity='0.2' fill='%23ffffff' /%3E%3Ccircle cx='175' cy='185' r='6' opacity='0.4' /%3E%3C!-- Red Capilar Sinuosa (Vasos Sanguíneos Microscópicos) --%3E%3Cpath d='M140 -10 C145 20, 160 30, 180 40 C200 50, 190 70, 210 90' opacity='0.35' stroke-width='2' stroke-dasharray='10 5' /%3E%3Cpath d='M-10 150 C20 160, 30 180, 50 210' opacity='0.3' stroke-width='2' stroke-dasharray='8 6' /%3E%3C!-- Fibrillas Finas (Reticulina) --%3E%3Cpath d='M80 70 Q90 80 85 95' opacity='0.4' stroke-width='0.5' /%3E%3Cpath d='M105 130 Q120 140 130 130' opacity='0.4' stroke-width='0.5' /%3E%3Cpath d='M40 100 Q30 110 45 125' opacity='0.4' stroke-width='0.5' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      <div className="relative z-10 px-4 md:px-8 lg:px-12 nav-inner-padding">
        
        {/* =========================================
            DESKTOP LAYOUT
        =========================================== */}
        <div className="hidden lg:flex w-full justify-between items-center gap-6 transition-all duration-300">
          
          {/* Logo Primario (Histología) */}
          <div className="flex items-center justify-center shrink-0 relative nav-logo-primary">
            <Image src="/logo-histologia.png" alt="Logo Cátedra Histología" fill priority className="object-contain" />
          </div>

          {/* Título & Navbar Interactiva Central */}
          <div className="flex flex-col nav-center-column grow transition-all duration-300 z-50">
            {/* Título Departamental (Colapsable al hacer scroll) */}
            <div className="text-left nav-title-container">
              <h1 className="text-3xl font-bold leading-tight">CÁTEDRA DE HISTOLOGÍA</h1>
              <hr className="border-t-2 border-white/80 my-2 w-full" />
              <p className="text-sm font-semibold tracking-wide text-white/90">DEPARTAMENTO DE CIENCIAS MORFOLÓGICAS</p>
            </div>

            {/* Fila de Menú Horizontal con Dropdowns Hover */}
            <div className="flex justify-end items-center gap-6">
              <ul className="flex gap-1 xl:gap-4 list-none m-0 p-0 flex-wrap justify-end items-center">
                {navItems.map((item) => (
                  // [CORRECCIÓN]: Se conserva 'relative' en el contenedor <li> (padre) para darle contexto apilado al dropdown (hijo)
                  <li key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className="flex items-center py-4 px-2 xl:px-3 text-sm font-medium hover:text-white/80 transition-colors whitespace-nowrap"
                    >
                      {item.label}
                      {item.subItems && (
                        <ChevronDown className="w-4 h-4 ml-1 opacity-70 transition-transform duration-300 group-hover:rotate-180 group-hover:opacity-100" />
                      )}
                    </Link>

                    {/* Submenu Dropdown Bridge & Popup */}
                    {/* [CORRECCIÓN]: Usa 'absolute' anclado al bottom ('top-full') y tiene 'z-50' para flotar impecablemente */}
                    {item.subItems && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
                        <div className="bg-white text-slate-800 rounded-lg shadow-2xl border border-slate-100 overflow-hidden flex flex-col py-2 mt-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="px-4 py-2.5 text-sm font-medium hover:bg-slate-50 hover:text-blue-700 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Lógica Dinámica de Sesión (Desktop) */}
              {!user ? (
                <Link 
                  href="/login"
                  title="Iniciar Sesión"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm ml-2"
                >
                  <UserIcon className="w-5 h-5 opacity-90" />
                </Link>
              ) : (
                <div className="relative group ml-2">
                  <button
                    title="Perfil de Usuario"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-900 border-2 border-white/50 transition-colors shadow-sm overflow-hidden"
                  >
                    {user.urlFotoPerfil ? (
                      <img src={user.urlFotoPerfil} alt="Perfil" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-sm font-bold uppercase tracking-widest">{user.nombres.charAt(0)}{user.apPaterno?.charAt(0)}</span>
                    )}
                  </button>
                  
                  {/* Dropdown flotante (Hover) del Perfil */}
                  <div className="absolute top-full right-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white text-slate-800 rounded-lg shadow-xl border border-slate-100 overflow-hidden flex flex-col py-1">
                      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                        <p className="text-sm font-bold text-slate-900 truncate">{user.nombres} {user.apPaterno}</p>
                        <p className="text-xs text-slate-500 truncate">{user.email}</p>
                      </div>
                      <Link href="/perfil" className="px-4 py-2.5 text-sm font-medium hover:bg-blue-50 transition-colors flex items-center gap-2 text-slate-700">
                        <UserIcon className="w-4 h-4" /> Mi Perfil
                      </Link>
                      <button 
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                        className="px-4 py-2.5 text-sm font-medium hover:bg-red-50 text-red-600 transition-colors flex items-center gap-2 text-left w-full"
                      >
                        <LogOut className="w-4 h-4" /> Cerrar Sesión
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Logo Secundario (UMSA) - Oculto al scrollear */}
          <div className="flex items-center justify-center shrink-0 relative nav-logo-secondary">
            <Image src="/logo-umsa.png" alt="Logo UMSA" fill priority className="object-contain" />
          </div>
        </div>

        {/* =========================================
            MOBILE LAYOUT
        =========================================== */}
        <div className="lg:hidden flex items-center justify-between gap-3 w-full transition-all duration-300">
          {/* Logo Móvil Principal */}
          <div className="flex items-center justify-center shrink-0 relative nav-logo-primary">
            <Image src="/logo-histologia.png" alt="Logo Cátedra Histología" fill priority className="object-contain" />
          </div>

          {/* Título Móvil Centrado */}
          <div className="grow text-center nav-title-container transition-all duration-300 pr-2">
            <h1 className="text-base font-bold leading-tight">CÁTEDRA DE HISTOLOGÍA</h1>
            <hr className="border-t border-white/60 my-1 mx-auto w-3/4" />
            <p className="text-[10px] sm:text-xs font-semibold text-white/90">CIENCIAS MORFOLÓGICAS</p>
          </div>

          {/* Acciones Móviles: Perfil & Hamburguesa */}
          <div className="flex items-center gap-3 shrink-0">
            {!user ? (
              <Link href="/login" title="Iniciar Sesión" className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <UserIcon className="w-4 h-4" />
              </Link>
            ) : (
              <Link href="/perfil" title="Mi Perfil" className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-800 border border-white/50 hover:bg-blue-900 transition-colors overflow-hidden">
                {user.urlFotoPerfil ? (
                  <img src={user.urlFotoPerfil} alt="Perfil" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs font-bold uppercase">{user.nombres.charAt(0)}</span>
                )}
              </Link>
            )}

            <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.25 p-2 shrink-0 z-50 relative" aria-label="Menu">
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-1.75' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-1.75' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* =========================================
            MOBILE ACCORDION MENU
        =========================================== */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-250 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col list-none m-0 p-4 border-t border-white/20 mt-4 h-[calc(100vh-100px)] overflow-y-auto">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-white/10 last:border-0 relative">
                <div className="flex justify-between items-center w-full">
                  <Link
                    href={item.href}
                    className="block py-4 text-base font-semibold hover:text-blue-200 grow"
                    onClick={(e) => {
                      if (item.subItems) {
                        e.preventDefault()
                        setOpenSubmenu(openSubmenu === item.label ? null : item.label)
                      } else {
                        setIsOpen(false)
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <button 
                      className="p-4 mr-0 cursor-pointer"
                      onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openSubmenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Sub-Acoordion Mobile */}
                {item.subItems && (
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-black/10 rounded-lg ${openSubmenu === item.label ? 'max-h-125 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                    <ul className="flex flex-col px-4 py-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block py-3 text-sm font-medium text-white hover:text-blue-200 border-b border-white/5 last:border-0"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}

            {/* Acción rápida inferior en móvil para Cerrar Sesión */}
            {user && (
              <li className="mt-4 pt-4 border-t border-white/10">
                <button 
                  onClick={() => {
                    logout()
                    setIsOpen(false)
                  }} 
                  className="flex items-center py-3 text-red-400 font-bold hover:text-red-300 w-full text-left transition-colors"
                >
                  <LogOut className="w-5 h-5 mr-3"/> Cerrar Sesión
                </button>
              </li>
            )}
          </ul>
        </div>

      </div>
    </nav>
  )
}
