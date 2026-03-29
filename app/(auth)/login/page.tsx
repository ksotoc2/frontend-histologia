'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import api from '@/lib/axios'
import { isAxiosError } from 'axios'
import { toast } from 'react-hot-toast'
import { Mail, Lock, Loader2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const router = useRouter()
  const { login, user } = useAuth()

  // Efecto Secundario: Ejecutar la redirección de forma asíncrona una vez montado el componente
  useEffect(() => {
    if (user) {
      router.replace('/')
    }
  }, [user, router])

  // Si ya existe un usuario logueado, retornamos una pantalla de carga para evitar un destello (FOUC) del formulario
  if (user) {
    return (
      <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-4" />
        <p className="text-slate-500 font-medium">Redirigiendo a tu cuenta...</p>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await api.post('/auth/login', { email, password })

      // Con Axios, si pasa a esta línea, la respuesta es 2xx OK
      // Integrar token al contexto global extraído de "res.data"
      login(res.data.access_token, res.data.usuario)
      
      toast.success(`¡Bienvenido ${res.data.usuario.nombres}!`)
      
      // Redirigir al inicio o panel seguro
      router.push('/')
      
    } catch (err) {
      console.error(err)
      
      if (isAxiosError(err)) {
        if (err.response?.status === 401) {
          setError('Correo electrónico o contraseña incorrectos')
        } else if (err.response) {
          setError('Ocurrió un error en el servidor al intentar iniciar sesión.')
        } else {
          setError('No se pudo conectar con el servidor')
        }
      } else {
        setError('Error inesperado de red o cliente.')
      }
      
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center px-4 bg-slate-50">
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
        
        <div className="p-8 md:p-12">
          <div className="flex justify-center mb-8">
            {/* Logo o Iconografía limpia */}
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center border-2 border-blue-100 shadow-inner">
               <Image src="/logo-histologia.png" alt="Histologia Logo" width={56} height={56} className="object-contain opacity-90" />
            </div>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Iniciar Sesión</h1>
            <p className="text-slate-500 text-sm mt-3 font-medium">Ingresa tus credenciales oficiales de la plataforma</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl font-medium animate-in fade-in slide-in-from-top-2">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Correo Electrónico</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all sm:text-sm font-medium"
                  placeholder="juan.perez@histologia.edu"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Contraseña</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all sm:text-sm font-medium"
                  placeholder="MiPasswordSeguro123"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
            >
              {loading ? (
                <>Cargando... <Loader2 className="w-5 h-5 animate-spin ml-2" /></>
              ) : (
                <>Ingresar <ArrowRight className="w-5 h-5 ml-1 opacity-80" strokeWidth={2.5} /></>
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center">
             <Link href="/" className="text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors">
               ← Volver al Inicio
             </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
