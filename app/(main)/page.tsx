import fs from 'fs'
import path from 'path'
import { HeroCarousel } from '@/components/hero-carousel'
import { ScrollReveal } from '@/components/scroll-reveal'
import { BellRing, Calendar, Microscope, ArrowDownToLine, ChevronRight } from 'lucide-react'

const SHADOW_CARD = 'shadow-[0_25px_60px_rgba(0,0,0,0.08),0_8px_20px_rgba(0,0,0,0.04)]'

// Mock Data
const Novedades = [
  {
    id: 1,
    time: "Ayer",
    timeTag: "16",
    title: "Entrega de Guías de Práctica",
    text: "Entrega revisada de Guías de Práctica 3 resueltas correspondientes al Grupo B.",
    downloads: "2.5M Downloads"
  },
  {
    id: 2,
    time: "Hace 3 días",
    timeTag: "14",
    title: "Publicación de Notas",
    text: "Se han liberado las calificaciones oficiales del Segundo Parcial Teórico en el sistema.",
    downloads: "2.5M Downloads"
  },
  {
    id: 3,
    time: "Hace 1 semana",
    timeTag: "13",
    title: "Admitidos para Auxiliatura",
    text: "Lista oficial de admitidos para las funciones de Auxiliatura de Cátedra de este semestre.",
    downloads: "2.5M Downloads"
  }
]

const accesosRapidos = [
  {
    icon: BellRing,
    title: "Avisos Importantes",
    text: "Consulte las fechas reprogramadas para el primer parcial de la materia y el inicio de rotaciones para el Grupo A.",
    tags: ["Histología I", "Parciales"],
    button: "Ingresar",
  },
  {
    icon: Calendar,
    title: "Cronograma Anual",
    text: "Descargue el calendario académico 2024 con fechas claves: Parciales (Mayo/Sept/Oct), Finales (Nov) y períodos de auxiliatura.",
    tags: ["Calendario", "UMSA"],
    button: "Consultar",
  },
  {
    icon: Microscope,
    title: "Atlas Histológico",
    text: "Acceda a la galería de cortes microscópicos de alta resolución. Micrografías de Tejido Epitelial, Conectivo, Muscular y Nervioso.",
    tags: ["Microscopía", "Digital"],
    button: "Explorar",
  },
]

export default function Home() {
  // Lógica Server-Side para leer las imágenes dinámicamente del directorio local
  let carouselImages: string[] = []
  try {
    const imagesDirectory = path.join(process.cwd(), 'public', 'images', 'carousel')
    if (fs.existsSync(imagesDirectory)) {
      const fileNames = fs.readdirSync(imagesDirectory)
      carouselImages = fileNames
        .filter((file) => /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(file))
        .map((name) => `/images/carousel/${name}`)
    }
  } catch (error) {
    console.error("No se pudo leer el directorio del carrusel:", error)
  }

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center pb-20">

      {/* ═══════════════════════════════════════════
          1. HERO CAROUSEL
      ═══════════════════════════════════════════ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
        <ScrollReveal direction="down" duration={0.8}>
          <HeroCarousel images={carouselImages} />
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════
          2. ACCESOS RÁPIDOS (Cascada progresiva)
      ═══════════════════════════════════════════ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-red-600 text-center mb-10 uppercase tracking-wider">
            Accesos Rápidos
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accesosRapidos.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 0.15} direction="up">
              <div className={`bg-white rounded-2xl ${SHADOW_CARD} p-8 relative flex flex-col h-full border border-slate-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)]`}>
                <card.icon className="absolute top-6 right-6 w-8 h-8 text-red-500" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-slate-900 mb-4 pr-12">{card.title}</h3>
                <p className="text-slate-600 text-sm mb-6 grow leading-relaxed">
                  {card.text}
                </p>
                <div className="flex gap-2 mb-8 flex-wrap">
                  {card.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">{tag}</span>
                  ))}
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg w-fit transition-colors">
                  {card.button}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. SECCIÓN INFERIOR (Split Layout)
      ═══════════════════════════════════════════ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 lg:divide-x-2 lg:divide-red-500">

          {/* Lado Izquierdo: Últimas Novedades */}
          <div className="lg:pr-16 flex flex-col">
            <ScrollReveal direction="left">
              <h2 className="text-xl font-bold text-red-600 text-center mb-10 uppercase tracking-widest">
                Últimas Novedades
              </h2>
            </ScrollReveal>

            <div className="flex flex-col gap-6">
              {Novedades.map((novedad, index) => (
                <ScrollReveal key={novedad.id} delay={index * 0.12} direction="left">
                  <div className="relative flex items-start group">
                    {/* Timeline Node */}
                    <div className="absolute left-[-24px] md:left-[-32px] top-6 w-12 md:w-16 h-12 md:h-16 bg-slate-100 rounded-full flex items-center justify-center -translate-x-1/2 shadow-inner border border-slate-200 z-10 transition-transform group-hover:scale-110">
                      <span className="text-xs font-bold text-slate-500">{novedad.timeTag}</span>
                    </div>

                    {/* Card Content */}
                    <div className={`ml-10 md:ml-12 bg-white p-6 rounded-xl ${SHADOW_CARD} border border-slate-100 w-full relative transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)]`}>
                      <div className="absolute left-[-6px] top-10 w-3 h-3 bg-white border-l border-t border-slate-100 transform -rotate-45"></div>

                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1 flex items-center gap-2">
                        {novedad.time} <span className="text-slate-300">|</span> <span className="text-blue-700">{novedad.title}</span>
                      </h4>
                      <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                        {novedad.text}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-slate-400 text-xs">
                        <ArrowDownToLine className="w-3.5 h-3.5" />
                        <span>{novedad.downloads}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Lado Derecho: Conoce la Cátedra */}
          <div className="lg:pl-16 flex flex-col">
            <ScrollReveal direction="right">
              <h2 className="text-xl font-bold text-red-600 text-center mb-10 uppercase tracking-widest">
                Conoce La Cátedra
              </h2>
            </ScrollReveal>

            <div className="flex flex-col gap-8">

              {/* Tarjeta Jefatura */}
              <ScrollReveal delay={0.1} direction="right">
                <div className={`bg-white border-2 border-blue-600 rounded-xl p-8 relative flex flex-col ${SHADOW_CARD} transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)]`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-slate-900 tracking-wide">JEFATURA DE CÁTEDRA</h3>
                    <button className="text-slate-400 hover:text-slate-600 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Bienvenida y visión de la gestión académica actual a cargo de la Jefatura del Departamento de Ciencias Morfológicas.
                  </p>
                  <div className="flex justify-end mt-auto">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                      Ver Más <ChevronRight className="w-4 h-4 -mr-1" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Tarjeta Historia */}
              <ScrollReveal delay={0.25} direction="right">
                <div className={`bg-white border-2 border-blue-600 rounded-xl p-8 relative flex flex-col ${SHADOW_CARD} transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)]`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-slate-900 tracking-wide">HISTORIA DE LA CÁTEDRA</h3>
                    <button className="text-slate-400 hover:text-slate-600 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Línea de tiempo con los hitos fundamentales y evolución del estudio de la Histología en la Facultad de Medicina desde su fundación.
                  </p>
                  <div className="flex justify-end mt-auto">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                      Ver Más <ChevronRight className="w-4 h-4 -mr-1" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
