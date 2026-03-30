'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import {
  GraduationCap,
  ClipboardCheck,
  BookOpen,
  CalendarDays,
  FlaskConical,
  Microscope,
  BookMarked,
} from 'lucide-react'

// ═══════════════════════════════════════════════
// DATOS
// ═══════════════════════════════════════════════

const sidebarLinks = [
  { id: 'plan-estudios', label: 'Plan de Estudios', icon: GraduationCap },
  { id: 'evaluacion', label: 'Evaluación', icon: ClipboardCheck },
  { id: 'bibliografia', label: 'Bibliografía', icon: BookOpen },
  { id: 'cronograma', label: 'Cronograma', icon: CalendarDays },
]

const planGeneral = [
  { title: 'Biología Celular y Técnicas Histológicas', desc: 'Fundamentos celulares y métodos de preparación tisular.' },
  { title: 'Tejido Epitelial y Glandular', desc: 'Clasificación, funciones secretoras y de revestimiento.' },
  { title: 'Tejido Conectivo y Adiposo', desc: 'Componentes fibrilares, células y matriz extracelular.' },
  { title: 'Tejido Cartilaginoso y Óseo', desc: 'Soporte estructural, osificación y remodelación.' },
  { title: 'Tejido Sanguíneo y Hematopoyesis', desc: 'Elementos formes, coagulación y formación celular.' },
  { title: 'Tejido Muscular y Nervioso', desc: 'Contracción, sinapsis y conducción nerviosa.' },
]

const planEspecial = [
  { title: 'Aparato Cardiovascular e Inmunitario', desc: 'Histología del corazón, vasos y órganos linfoides.' },
  { title: 'Aparato Digestivo y Glándulas Anexas', desc: 'Tubo digestivo, hígado, páncreas y vesícula biliar.' },
  { title: 'Aparato Respiratorio y Urinario', desc: 'Vías aéreas, alvéolos, riñón y tracto urinario.' },
  { title: 'Sistema Endocrino', desc: 'Hipófisis, tiroides, suprarrenales y glándulas principales.' },
  { title: 'Aparato Reproductor Femenino', desc: 'Ovario, útero, ciclo menstrual y glándula mamaria.' },
  { title: 'Aparato Reproductor Masculino', desc: 'Testículo, espermatogénesis y glándulas accesorias.' },
]

const evaluaciones = [
  { label: 'Primer Examen Parcial Teórico', pct: 20 },
  { label: 'Segundo Examen Parcial Teórico', pct: 20 },
  { label: 'Tercer Examen Parcial Teórico', pct: 20 },
  { label: 'Examen Final (Toda la Materia)', pct: 20 },
  { label: 'Evaluación Práctica (Laminario)', pct: 20 },
]

const bibliografias = [
  { title: 'Ross Histología: Texto y Atlas', author: 'W. Pawlina', edition: '8va Ed.' },
  { title: 'Junqueira Histología Básica', author: 'A. Mescher', edition: '15va Ed.' },
  { title: 'Gartner Texto Atlas de Histología', author: 'L. Gartner', edition: '4ta Ed.' },
  { title: 'Stevens & Lowe Histología Humana', author: 'J. Lowe', edition: '5ta Ed.' },
  { title: 'Di Fiore Atlas de Histología Normal', author: 'V. Eroschenko', edition: '13va Ed.' },
]

const cronograma = [
  { date: '05 Feb', label: 'Inicio de Clases Magistrales (Teóricas)', year: '2024' },
  { date: '15 May', label: 'Primer Examen Parcial', year: '2024' },
  { date: 'Jul', label: 'Receso Académico de Invierno', year: '2024' },
  { date: '14 Ago', label: 'Segundo Examen Parcial', year: '2024' },
  { date: '23 Oct', label: 'Tercer Examen Parcial', year: '2024' },
  { date: 'Nov', label: 'Exámenes Finales Ordinarios', year: '2024' },
]

// ═══════════════════════════════════════════════
// PÁGINA
// ═══════════════════════════════════════════════

export default function InformacionAcademicaPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">

      {/* Header */}
      <div className="pt-16 pb-10 text-center px-4">
        <ScrollReveal direction="down" duration={0.7}>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[#001f3f] uppercase tracking-widest">
            Información Académica
          </h1>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#4da3ff] rounded-full" />
          <p className="mt-5 text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Plan de estudios, sistema de evaluación, bibliografía recomendada y cronograma anual.
          </p>
        </ScrollReveal>
      </div>

      {/* ═══════════════════════════════════════════
          LAYOUT: Sidebar + Contenido
      ═══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Mobile: Nav horizontal */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-6 scrollbar-hide">
          {sidebarLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-[#001f3f] hover:bg-[#001f3f] hover:text-white transition-all duration-300"
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-10">

          {/* Sidebar sticky — solo desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <nav className="sticky top-24 space-y-2">
              {sidebarLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600
                             hover:bg-[#001f3f] hover:text-white hover:shadow-lg hover:shadow-[#001f3f]/20
                             transition-all duration-300"
                >
                  <link.icon className="w-5 h-5 text-[#001f3f] group-hover:text-white transition-colors" />
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Contenido principal */}
          <div className="flex-1 min-w-0 space-y-20">

            {/* ═══════════════════════════════════════
                1. PLAN DE ESTUDIOS
            ═══════════════════════════════════════ */}
            <section id="plan-estudios" className="scroll-mt-28">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#001f3f]/8 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-[#001f3f]" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#001f3f] uppercase tracking-wider">Plan de Estudios</h2>
                </div>
              </ScrollReveal>

              {/* Histología General */}
              <div className="mb-10">
                <ScrollReveal delay={0.05}>
                  <h3 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-[#001f3f]/60" />
                    I. Histología General
                  </h3>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {planGeneral.map((item, i) => (
                    <ScrollReveal key={item.title} delay={i * 0.06} direction="up">
                      <div className="group bg-white rounded-xl shadow-md border border-slate-100 p-5
                                      transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#001f3f] transition-colors mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Histología Especial */}
              <div>
                <ScrollReveal delay={0.05}>
                  <h3 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                    <Microscope className="w-5 h-5 text-[#001f3f]/60" />
                    II. Histología Especial
                  </h3>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {planEspecial.map((item, i) => (
                    <ScrollReveal key={item.title} delay={i * 0.06} direction="up">
                      <div className="group bg-white rounded-xl shadow-md border border-slate-100 p-5
                                      transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#001f3f] transition-colors mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════════════
                2. SISTEMA DE EVALUACIÓN
            ═══════════════════════════════════════ */}
            <section id="evaluacion" className="scroll-mt-28">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#001f3f]/8 flex items-center justify-center">
                    <ClipboardCheck className="w-5 h-5 text-[#001f3f]" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#001f3f] uppercase tracking-wider">Sistema de Evaluación</h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {evaluaciones.map((item, i) => (
                  <ScrollReveal key={item.label} delay={i * 0.08} direction="up">
                    <div className="group bg-white rounded-2xl shadow-md border border-slate-100 p-6 text-center
                                    transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      {/* Porcentaje grande */}
                      <div className="text-4xl font-extrabold text-[#001f3f] mb-3 group-hover:scale-110 transition-transform duration-500">
                        {item.pct}%
                      </div>
                      <p className="text-sm text-slate-600 font-medium leading-snug">{item.label}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Barra visual total */}
              <ScrollReveal delay={0.3}>
                <div className="mt-6 bg-white rounded-xl shadow-md border border-slate-100 p-5 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-600">Total</span>
                  <div className="flex-1 mx-4 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-[#001f3f] to-[#4da3ff] rounded-full w-full" />
                  </div>
                  <span className="text-lg font-extrabold text-[#001f3f]">100%</span>
                </div>
              </ScrollReveal>
            </section>

            {/* ═══════════════════════════════════════
                3. BIBLIOGRAFÍA
            ═══════════════════════════════════════ */}
            <section id="bibliografia" className="scroll-mt-28">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#001f3f]/8 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-[#001f3f]" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#001f3f] uppercase tracking-wider">Bibliografía</h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {bibliografias.map((libro, i) => (
                  <ScrollReveal key={libro.title} delay={i * 0.08} direction="up">
                    <div className="group bg-white rounded-2xl shadow-md border border-slate-100 p-6 flex items-start gap-4 h-full
                                    transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      {/* Icono libro */}
                      <div className="shrink-0 w-12 h-12 rounded-full bg-[#001f3f]/8 flex items-center justify-center
                                      transition-all duration-500 group-hover:bg-[#001f3f] group-hover:shadow-lg group-hover:shadow-[#001f3f]/20">
                        <BookMarked className="w-5 h-5 text-[#001f3f] group-hover:text-white transition-colors duration-500" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-slate-900 leading-snug mb-1 group-hover:text-[#001f3f] transition-colors">
                          {libro.title}
                        </h3>
                        <p className="text-xs text-slate-500">{libro.author}</p>
                        <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-[#001f3f] bg-[#001f3f]/8 px-2 py-0.5 rounded">
                          {libro.edition}
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* ═══════════════════════════════════════
                4. CRONOGRAMA ANUAL — Timeline
            ═══════════════════════════════════════ */}
            <section id="cronograma" className="scroll-mt-28">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#001f3f]/8 flex items-center justify-center">
                    <CalendarDays className="w-5 h-5 text-[#001f3f]" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#001f3f] uppercase tracking-wider">Cronograma Anual</h2>
                </div>
              </ScrollReveal>

              {/* Timeline vertical */}
              <div className="relative ml-4 md:ml-6">
                {/* Línea central */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#001f3f]/15 rounded-full" />

                <div className="space-y-8">
                  {cronograma.map((item, i) => (
                    <ScrollReveal key={item.label} delay={i * 0.1} direction="left">
                      <div className="relative flex items-start gap-6 group">
                        {/* Nodo */}
                        <div className="relative z-10 shrink-0 w-7 h-7 rounded-full bg-[#001f3f] border-4 border-white shadow-lg
                                        transition-all duration-300 group-hover:scale-125 group-hover:shadow-[#001f3f]/40" />

                        {/* Card */}
                        <div className="bg-white rounded-xl shadow-md border border-slate-100 p-5 flex-1 -mt-1
                                        transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                          <div className="flex items-center justify-between gap-4 mb-1">
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#001f3f] transition-colors">
                              {item.label}
                            </h4>
                            <span className="shrink-0 text-xs font-bold text-white bg-[#001f3f] px-3 py-1 rounded-full">
                              {item.date}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 font-medium">Gestión {item.year}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}
