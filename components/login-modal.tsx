'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import api from '@/lib/axios'
import { isAxiosError } from 'axios'
import { toast } from 'react-hot-toast'
import { Loader2, ArrowRight, Eye, EyeOff, X } from 'lucide-react'
import Image from 'next/image'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const { login } = useAuth()

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await api.post('/auth/login', { email, password })
      login(res.data.access_token, res.data.usuario)
      toast.success(`¡Bienvenido ${res.data.usuario.nombres}!`)
      onClose()
      router.push('/')
    } catch (err) {
      console.error(err)
      if (isAxiosError(err)) {
        if (err.response?.status === 401) {
          setError('Correo electrónico o contraseña incorrectos')
        } else if (err.response) {
          setError('Ocurrió un error en el servidor.')
        } else {
          setError('No se pudo conectar con el servidor')
        }
      } else {
        setError('Error inesperado de red.')
      }
      setLoading(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-[880px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300">

        {/* ═══════════════════════════════════════
            COLUMNA IZQUIERDA — Imagen
        ═══════════════════════════════════════ */}
        <div className="hidden md:flex md:w-[45%] relative">
          {/* Imagen de microscopía */}
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
            alt="Microscopía"
            fill
            className="object-cover"
            sizes="400px"
          />
          {/* Degradado inferior */}
          <div className="absolute inset-0 bg-linear-to-t from-[#001f3f] via-[#001f3f]/40 to-transparent" />

          {/* Logo UMSA + texto sobre el degradado */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-3">
            <div className="w-10 h-10 relative shrink-0">
              <Image
                src="/logo-umsa.png"
                alt="UMSA"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">UMSA</p>
              <p className="text-white/70 text-xs leading-tight">Facultad de Medicina</p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            COLUMNA DERECHA — Formulario
        ═══════════════════════════════════════ */}
        <div className="w-full md:w-[55%] p-8 md:p-10 relative">

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Encabezado */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 relative shrink-0">
              <Image
                src="/logo-histologia.png"
                alt="Logo Cátedra"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Iniciar sesión</h2>
          </div>
          <p className="text-slate-500 text-sm mb-8 ml-[52px]">
            Accede al panel de administración de la Cátedra de Histología
          </p>

          {/* Error */}
          {error && (
            <div className="mb-5 p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg font-medium">
              {error}
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Campo correo */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Correo electrónico</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 bg-amber-50/60 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 placeholder:uppercase placeholder:text-xs placeholder:tracking-wider focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001f3f] focus:border-transparent transition-all text-sm font-medium"
                placeholder="correo electronico"
              />
            </div>

            {/* Campo contraseña */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-3 pr-12 bg-amber-50/60 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#001f3f] focus:border-transparent transition-all text-sm font-medium"
                  placeholder="••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Botón submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#001f3f] hover:bg-[#00152e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#001f3f] disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-[0.98] shadow-md"
            >
              {loading ? (
                <>Cargando... <Loader2 className="w-5 h-5 animate-spin" /></>
              ) : (
                <><ArrowRight className="w-5 h-5" /> Iniciar sesión</>
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}
