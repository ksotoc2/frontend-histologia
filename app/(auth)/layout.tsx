export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="grow flex flex-col min-h-screen">
      {children}
    </main>
  )
}
