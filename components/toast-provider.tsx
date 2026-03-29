'use client'

import { Toaster } from 'react-hot-toast'

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      containerStyle={{
        top: '80px',
        zIndex: 99999,
      }}
      toastOptions={{
        // Define la duración de la notificación en 2 segundos
        duration: 2000,
        style: {
          background: '#333',
          color: '#fff',
        },
        success: {
          style: {
            background: 'white',
            color: '#16a34a',
            border: '1px solid #bbf7d0',
          },
        },
        error: {
          style: {
            background: 'white',
            color: '#dc2626',
            border: '1px solid #fecaca',
          },
        },
      }}
    />
  )
}
