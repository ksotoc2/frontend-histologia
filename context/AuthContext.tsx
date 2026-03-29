'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import api from '@/lib/axios'

// El modelo de usuario refleja exactamente el endpoint GET /auth/me del frontend-auth-specs.txt
export interface User {
  idUsuario: string
  email: string
  nombres: string
  apPaterno: string
  apMaterno: string
  rol: string
  urlFotoPerfil?: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  isLoading: boolean
  login: (token: string, userData?: User) => void
  logout: (silent?: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  
  const router = useRouter()

  // 1. Efecto: Temporizador de Caducidad de Sesión de 15 minutos (900,000 ms)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (token) {
      timeoutId = setTimeout(() => {
        // Expirar la sesión después de 15 minutos silenciando el toast de éxito estándar
        logout(true)
        toast.error('Sesión caducada, inicie sesión nuevamente', { duration: 4000 })
        router.push('/login')
      }, 900000)
    }

    // Cleanup: Clear interval en caso de que unmounted o si el usuario hace logout manual
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [token, router])

  // 2. Recuperación automática de sesión on-mount
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('access_token')

      if (storedToken) {
        setToken(storedToken)
        try {
          // Axios lanzará una excepción automática si el status code es 4xx o 5xx
          const res = await api.get('/auth/me')
          setUser(res.data)
        } catch (error) {
          console.error("Error validando la sesión JWT:", error)
          localStorage.removeItem('access_token')
          setToken(null)
        }
      }
      setIsLoading(false)
    }

    initAuth()
  }, [])

  // Iniciar sesión desde el componente de Login Form
  const login = async (newToken: string, userData?: User) => {
    localStorage.setItem('access_token', newToken)
    setToken(newToken)

    if (userData) {
      setUser(userData)
    } else {
      // Fetch profil if not provided immediately
      try {
        const res = await api.get('/auth/me')
        setUser(res.data)
      } catch (err) {
        console.error("Error al poblar usuario post-login", err)
      }
    }
  }

  // Destruir sesión y limpiar estado
  const logout = (silent: boolean = false) => {
    localStorage.removeItem('access_token')
    setToken(null)
    setUser(null)
    
    // Solo dispara el toast si no fue una caducidad automática
    if (!silent) {
      toast.success('Has cerrado sesión exitosamente', { duration: 3000 })
    }
  }

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth debe ser empleado dentro de un AuthProvider')
  }
  return context
}
