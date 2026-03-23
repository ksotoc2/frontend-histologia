import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { HeaderWrapper } from '@/components/header-wrapper'
import { Footer } from '@/components/footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

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
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <HeaderWrapper />
        <main className="grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
