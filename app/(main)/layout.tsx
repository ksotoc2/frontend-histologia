import { HeaderWrapper } from '@/components/header-wrapper'
import { Footer } from '@/components/footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeaderWrapper />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </>
  )
}
