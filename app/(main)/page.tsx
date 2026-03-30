import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { HeroCarousel } from '@/components/hero-carousel'
import { ScrollReveal } from '@/components/scroll-reveal'
import {
  BellRing,
  Calendar,
  Microscope,
  Clock,
  Users,
  BookOpen,
  ChevronRight,
  Landmark,
} from 'lucide-react'

// ═══════════════════════════════════════════════
// DATOS
// ═══════════════════════════════════════════════

const accesosRapidos = [
  {
    icon: BellRing,
    title: 'Avisos Importantes',
    text: 'Consulte las fechas reprogramadas para el primer parcial y el inicio de rotaciones para el Grupo A.',
    tags: ['Histología I', 'Parciales'],
    href: '/estudiantes#avisos',
  },
  {
    icon: Calendar,
    title: 'Cronograma Anual',
    text: 'Descargue el calendario académico 2024 con fechas claves: Parciales, Finales y períodos de auxiliatura.',
    tags: ['Calendario', 'UMSA'],
    href: '/informacion-academica#cronograma-anual',
  },
  {
    icon: Microscope,
    title: 'Atlas Histológico',
    text: 'Acceda a la galería de cortes microscópicos de alta resolución. Tejido Epitelial, Conectivo, Muscular y Nervioso.',
    tags: ['Microscopía', 'Digital'],
    href: '/recursos-didacticos/atlas-histologico',
  },
]

const novedades = [
  {
    id: 1,
    date: '28 Mar',
    title: 'Entrega de Guías de Práctica',
    text: 'Entrega revisada de Guías de Práctica 3 resueltas correspondientes al Grupo B.',
    tag: 'Prácticas',
  },
  {
    id: 2,
    date: '25 Mar',
    title: 'Publicación de Notas',
    text: 'Se han liberado las calificaciones oficiales del Segundo Parcial Teórico en el sistema.',
    tag: 'Evaluación',
  },
  {
    id: 3,
    date: '20 Mar',
    title: 'Admitidos para Auxiliatura',
    text: 'Lista oficial de admitidos para las funciones de Auxiliatura de Cátedra de este semestre.',
    tag: 'Auxiliatura',
  },
]

const conoceCatedra = [
  {
    icon: Landmark,
    title: 'Jefatura de Cátedra',
    text: 'Bienvenida y visión de la gestión académica actual a cargo de la Jefatura del Departamento.',
    href: '/la-catedra#jefatura',
  },
  {
    icon: Users,
    title: 'Plantel Docente',
    text: 'Conoce a los profesionales de la salud encargados de guiarte en el descubrimiento microscópico.',
    href: '/la-catedra/plantel-docente',
  },
  {
    icon: BookOpen,
    title: 'Historia de la Cátedra',
    text: 'Hitos fundamentales y evolución del estudio de la Histología en la Facultad de Medicina.',
    href: '/la-catedra#historia',
  },
]

// ═══════════════════════════════════════════════
// PÁGINA
// ═══════════════════════════════════════════════

export default function Home() {
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
    console.error('No se pudo leer el directorio del carrusel:', error)
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50 flex flex-col items-center">

      {/* ═══════════════════════════════════════════
          1. HERO CAROUSEL — INTACTO
      ═══════════════════════════════════════════ */}
      <section className="w-full">
        <HeroCarousel images={carouselImages} />
      </section>

      {/* ═══════════════════════════════════════════
          2. ACCESOS RÁPIDOS
      ═══════════════════════════════════════════ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#001f3f] uppercase tracking-widest">
              Accesos Rápidos
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 bg-[#4da3ff] rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accesosRapidos.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 0.15} direction="up">
              <Link
                href={card.href}
                className="group relative bg-white rounded-2xl p-7 flex flex-row gap-5 items-start h-full
                           border border-slate-100
                           shadow-lg hover:shadow-2xl
                           transition-all duration-500 ease-out
                           hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* Icono */}
                <div className="shrink-0 w-14 h-14 rounded-xl bg-[#001f3f]/8 flex items-center justify-center transition-all duration-500 group-hover:bg-[#001f3f] group-hover:shadow-lg group-hover:shadow-[#001f3f]/25">
                  <card.icon className="w-6 h-6 text-[#001f3f] transition-colors duration-500 group-hover:text-white" strokeWidth={1.8} />
                </div>

                {/* Contenido */}
                <div className="flex flex-col gap-2 min-w-0">
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#001f3f] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {card.text}
                  </p>
                  <div className="flex gap-1.5 flex-wrap mt-1">
                    {card.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 bg-[#001f3f]/5 text-[#001f3f] text-[11px] font-bold rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Flecha sutil */}
                <ChevronRight className="absolute top-1/2 right-5 -translate-y-1/2 w-5 h-5 text-slate-200 transition-all duration-300 group-hover:text-[#001f3f] group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. ÚLTIMAS NOVEDADES
      ═══════════════════════════════════════════ */}
      <section className="w-full bg-slate-100/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#001f3f] uppercase tracking-widest">
                Últimas Novedades
              </h2>
              <div className="mt-3 mx-auto w-16 h-1 bg-[#4da3ff] rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {novedades.map((novedad, index) => (
              <ScrollReveal key={novedad.id} delay={index * 0.15} direction="up">
                <div className="group bg-white border border-slate-200/80 rounded-2xl p-7 flex flex-col h-full
                                shadow-lg
                                transition-all duration-500 ease-out
                                hover:-translate-y-2 hover:shadow-2xl">

                  {/* Badge fecha */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#001f3f]/8 text-[#001f3f]">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold">{novedad.date}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {novedad.tag}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#001f3f] transition-colors duration-300">
                    {novedad.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-slate-500 text-sm leading-relaxed grow">
                    {novedad.text}
                  </p>

                  {/* CTA */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <span className="text-[#001f3f] text-sm font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                      Leer más <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. CONOCE LA CÁTEDRA
      ═══════════════════════════════════════════ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#001f3f] uppercase tracking-widest">
              Conoce La Cátedra
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 bg-[#4da3ff] rounded-full" />
            <p className="mt-4 text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Descubre nuestra misión, historia y el equipo docente que forma a los futuros profesionales de la salud.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conoceCatedra.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.15} direction="up">
              <Link
                href={item.href}
                className="group relative bg-white rounded-2xl p-8 flex flex-col items-center text-center h-full
                           border border-slate-100
                           shadow-lg hover:shadow-2xl
                           transition-all duration-500 ease-out
                           hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* Icono circular */}
                <div className="w-16 h-16 rounded-full bg-[#001f3f]/8 flex items-center justify-center mb-5
                                transition-all duration-500
                                group-hover:bg-[#001f3f] group-hover:shadow-lg group-hover:shadow-[#001f3f]/25 group-hover:scale-110">
                  <item.icon className="w-7 h-7 text-[#001f3f] transition-colors duration-500 group-hover:text-white" strokeWidth={1.6} />
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#001f3f] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Descripción */}
                <p className="text-slate-500 text-sm leading-relaxed grow">
                  {item.text}
                </p>

                {/* Enlace */}
                <div className="mt-5 pt-4 border-t border-slate-100 w-full">
                  <span className="text-[#001f3f] text-sm font-semibold flex items-center justify-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                    Descubrir <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  )
}
