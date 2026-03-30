import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/context/AuthContext'
import { ToastProvider } from '@/components/toast-provider'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Catedra de Histologa',
  description: 'Departamento de Ciencias Morfologicas - Universidad Mayor de San Andrés',
  icons: {
    icon: [
      {
        url: '/logo-histologia.png',
        type: 'image/png',
      }
    ],
    apple: '/logo-histologia.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} antialiased flex flex-col min-h-screen`}>
        <AuthProvider>
          <ToastProvider />
          {children}
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
