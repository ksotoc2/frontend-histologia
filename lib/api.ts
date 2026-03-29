// lib/api.ts

// Usamos el puerto 3000 por defecto o el entorno productivo
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

/**
 * Wrapper sobre fetch() nativo que inyecta el token Bearer JWT
 * desde localStorage de manera automática en cada llamada.
 */
export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  let token = null
  
  // Aseguramos que solo intente acceder a localStorage en el lado del cliente (Navegador)
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('access_token')
  }
  
  // Utilizar la API nativa de Headers para manejo seguro de tipos en TypeScript
  const headers = new Headers(options.headers || {})
  
  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  // Interceptar e inyectar el Token Bearer
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  })

  return response
}
