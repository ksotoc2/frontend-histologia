'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, LogOut, User as UserIcon, Menu, X } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { LoginModal } from '@/components/login-modal'

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
      { label: 'Cronograma Anual', href: '/informacion-academica#cronograma' },
    ]
  },
  {
    label: 'Estudiantes',
    href: '/estudiantes',
    subItems: [
      { label: 'Avisos y Comunicados', href: '/estudiantes#avisos' },
      { label: 'Grupos', href: '/estudiantes#grupos' },
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
  const [showLogin, setShowLogin] = useState(false)

  const { user, logout } = useAuth()

  return (
    <>
      <nav className={`sticky top-0 z-50 bg-blue-700 text-white shadow-lg navbar-wrapper ${isScrolled ? 'navbar-shrunk' : 'navbar-expanded'}`}>
        {/* Fondo anatómico Histológico vectorizado — INTACTO */}
        <div
          className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3C!-- Matriz de Fibras Conjuntivas Extracelulares Profundas --%3E%3Cpath d='M-10 40 Q20 50 40 30 T80 60 T140 20 T180 80 T210 50' opacity='0.2' stroke-width='0.5' /%3E%3Cpath d='M-20 120 Q30 90 70 140 T150 110 T220 160' opacity='0.2' stroke-width='0.5' /%3E%3Cpath d='M40 -10 Q50 30 20 80 T80 150 T40 210' opacity='0.15' stroke-dasharray='2 2' /%3E%3Cpath d='M160 -20 Q130 40 180 90 T120 170 T170 220' opacity='0.15' stroke-dasharray='1 4' /%3E%3C!-- Célula Poligonal Compleja (Epitelio Plano) 1 --%3E%3Cpath d='M50 50 C65 40, 90 45, 100 65 C105 80, 90 100, 70 105 C50 110, 35 95, 30 75 C25 60, 35 55, 50 50 Z' fill='%23ffffff' fill-opacity='0.03' opacity='0.9' stroke-width='1.5' /%3E%3C!-- Detalles Intra-celulares (Citoplasma) C1 --%3E%3Ccircle cx='70' cy='75' r='8' fill='%23ffffff' opacity='0.8' /%3E%3Ccircle cx='68' cy='73' r='2' fill='%23000' opacity='0.4' /%3E%3Cpath d='M40 60 Q50 70 45 85' opacity='0.3' stroke-width='0.8' /%3E%3Cpath d='M60 55 Q75 60 85 50' opacity='0.3' stroke-width='0.8' /%3E%3C!-- Célula Adyacente 2 --%3E%3Cpath d='M100 65 C120 55, 145 60, 150 85 C155 105, 135 125, 115 120 C95 115, 85 130, 70 105 C90 100, 95 80, 100 65 Z' fill='%23ffffff' fill-opacity='0.02' opacity='0.7' /%3E%3Cellipse cx='120' cy='90' rx='6' ry='4' fill='%23ffffff' opacity='0.8' /%3E%3C!-- Célula Adyacente Superior 3 --%3E%3Cpath d='M50 50 C40 30, 60 10, 85 15 C110 20, 120 55, 100 65 C90 45, 65 40, 50 50 Z' opacity='0.5' /%3E%3Ccircle cx='85' cy='35' r='5' fill='%23ffffff' opacity='0.6' /%3E%3C!-- Célula Adyacente Izquierda 4 --%3E%3Cpath d='M30 75 C10 80, 0 50, 15 30 C30 10, 40 30, 50 50 C35 55, 25 60, 30 75 Z' opacity='0.6' /%3E%3Ccircle cx='25' cy='50' r='4' fill='%23ffffff' opacity='0.7' /%3E%3C!-- Célula Adyacente Inferior 5 --%3E%3Cpath d='M70 105 C60 130, 80 155, 110 160 C140 165, 150 140, 135 125 C135 125, 115 120, 115 120 C95 115, 85 130, 70 105 Z' opacity='0.6' /%3E%3Ccircle cx='105' cy='140' r='7' fill='%23ffffff' opacity='0.7' /%3E%3Ccircle cx='103' cy='139' r='1.5' fill='%23000' opacity='0.5' /%3E%3C!-- Célula Parcial Inferior Izquierda 6 --%3E%3Cpath d='M30 75 C35 95, 50 110, 70 105 C60 130, 40 140, 20 135 C-5 130, 0 100, 10 85 C10 85, 30 75, 30 75 Z' opacity='0.5' /%3E%3Ccircle cx='35' cy='115' r='4.5' fill='%23ffffff' opacity='0.6' /%3E%3C!-- Glóbulos Rojos / Vesículas Flotantes en capilares --%3E%3Ccircle cx='160' cy='40' r='8' opacity='0.4' stroke-width='1.5' /%3E%3Ccircle cx='160' cy='40' r='3' opacity='0.2' fill='%23ffffff' /%3E%3Ccircle cx='180' cy='55' r='7' opacity='0.3' stroke-width='1.5' /%3E%3Ccircle cx='15' cy='170' r='9' opacity='0.3' stroke-width='1.5' /%3E%3Ccircle cx='15' cy='170' r='4' opacity='0.2' fill='%23ffffff' /%3E%3Ccircle cx='175' cy='185' r='6' opacity='0.4' /%3E%3C!-- Red Capilar Sinuosa (Vasos Sanguíneos Microscópicos) --%3E%3Cpath d='M140 -10 C145 20, 160 30, 180 40 C200 50, 190 70, 210 90' opacity='0.35' stroke-width='2' stroke-dasharray='10 5' /%3E%3Cpath d='M-10 150 C20 160, 30 180, 50 210' opacity='0.3' stroke-width='2' stroke-dasharray='8 6' /%3E%3C!-- Fibrillas Finas (Reticulina) --%3E%3Cpath d='M80 70 Q90 80 85 95' opacity='0.4' stroke-width='0.5' /%3E%3Cpath d='M105 130 Q120 140 130 130' opacity='0.4' stroke-width='0.5' /%3E%3Cpath d='M40 100 Q30 110 45 125' opacity='0.4' stroke-width='0.5' /%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />

        {/* ═══════════════════════════════════════════════
          CONTENIDO INTERNO REESTRUCTURADO
      ═══════════════════════════════════════════════ */}
        <div className="relative z-10 flex justify-between items-center w-full px-6 py-2">

          {/* ═══════════ EXTREMO IZQUIERDO: Solo Logo ═══════════ */}
          <Link href="/" className="shrink-0 relative w-12 h-12">
            <Image src="/logo-histologia.png" alt="Logo Cátedra Histología" fill priority className="object-contain" />
          </Link>

          {/* ═══════════ EXTREMO DERECHO: Enlaces + Botón (Desktop) ═══════════ */}
          <div className="hidden md:flex items-center gap-6">

            {/* Enlaces de navegación */}
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center text-white text-sm font-medium hover:text-gray-200 transition-colors whitespace-nowrap py-2"
                >
                  {item.label}
                  {item.subItems && (
                    <ChevronDown className="w-4 h-4 ml-1 opacity-70 transition-transform duration-300 group-hover:rotate-180 group-hover:opacity-100" />
                  )}
                </Link>

                {/* Dropdown submenu */}
                {item.subItems && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white text-slate-800 rounded-lg shadow-2xl border border-slate-100 overflow-hidden flex flex-col py-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="px-4 py-2.5 text-sm font-medium hover:bg-slate-50 hover:text-[#001f3f] transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Acceso de sesión (sutil — uso interno) */}
            {!user ? (
              <button
                onClick={() => setShowLogin(true)}
                className="text-white/60 text-sm font-medium hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                Acceder
              </button>
            ) : (
              <div className="relative group">
                <button
                  title="Perfil de Usuario"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#001f3f] hover:bg-[#00152e] border-2 border-white/50 transition-colors shadow-sm overflow-hidden"
                >
                  {user.urlFotoPerfil ? (
                    <img src={user.urlFotoPerfil} alt="Perfil" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-sm font-bold uppercase tracking-widest text-white">{user.nombres.charAt(0)}{user.apPaterno?.charAt(0)}</span>
                  )}
                </button>

                {/* Dropdown flotante del perfil (Hover) */}
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
                      className="px-4 py-2.5 text-sm font-medium hover:bg-slate-100 text-[#001f3f] transition-colors flex items-center gap-2 text-left w-full"
                    >
                      <LogOut className="w-4 h-4" /> Cerrar Sesión
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ═══════════ HAMBURGUESA (Mobile) ═══════════ */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-white"
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ═══════════════════════════════════════════════
          MOBILE ACCORDION MENU
      ═══════════════════════════════════════════════ */}
        <div className={`md:hidden relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col list-none m-0 px-6 pb-6 border-t border-white/20 pt-4 overflow-y-auto">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-white/10 last:border-0">
                <div className="flex justify-between items-center w-full">
                  <Link
                    href={item.href}
                    className="block py-4 text-base font-semibold text-white hover:text-gray-200 grow transition-colors"
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
                      className="p-4 cursor-pointer text-white"
                      onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openSubmenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Sub-Accordion Mobile */}
                {item.subItems && (
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-white/10 rounded-lg ${openSubmenu === item.label ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                    <ul className="flex flex-col px-4 py-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block py-3 text-sm font-medium text-white hover:text-gray-200 border-b border-white/5 last:border-0 transition-colors"
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

            {/* Acceso de sesión en móvil (sutil) */}
            <li className="mt-4 pt-4 border-t border-white/10">
              {!user ? (
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setShowLogin(true)
                  }}
                  className="block py-3 text-sm text-white/50 hover:text-white transition-colors w-full text-left cursor-pointer"
                >
                  Acceder
                </button>
              ) : (
                <button
                  onClick={() => {
                    logout()
                    setIsOpen(false)
                  }}
                  className="flex items-center justify-center gap-2 py-3 text-white/80 font-bold hover:text-white w-full text-left transition-colors"
                >
                  <LogOut className="w-5 h-5" /> Cerrar Sesión
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Modal de Login (se renderiza fuera del nav para evitar z-index issues) */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  )
}
