import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Target, Eye, BookOpen, ChevronRight } from 'lucide-react'

export const metadata = {
  title: 'La Cátedra - Histología',
}

export default function CatedraPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">

      {/* ═══════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════ */}
      <div className="pt-16 pb-12 text-center px-4">
        <ScrollReveal direction="down" duration={0.7}>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[#001f3f] uppercase tracking-widest">
            La Cátedra — Histología
          </h1>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#4da3ff] rounded-full" />
          <p className="mt-5 text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Nuestra Misión, Visión, Historia y el liderazgo que impulsa la formación de futuros profesionales de la salud.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-20">

        {/* ═══════════════════════════════════════════
            MISIÓN Y VISIÓN — Dos columnas con iconos
        ═══════════════════════════════════════════ */}
        <section id="mision-vision" className="scroll-mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Misión */}
            <ScrollReveal delay={0.1} direction="left">
              <div className="group bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10 h-full
                              transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-14 h-14 rounded-xl bg-[#001f3f]/8 flex items-center justify-center mb-6
                                transition-all duration-500 group-hover:bg-[#001f3f] group-hover:shadow-lg group-hover:shadow-[#001f3f]/25">
                  <Target className="w-7 h-7 text-[#001f3f] transition-colors duration-500 group-hover:text-white" strokeWidth={1.6} />
                </div>
                <h2 className="text-2xl font-extrabold text-[#001f3f] uppercase mb-4 tracking-wide">Misión</h2>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  Formar profesionales competentes en el estudio microscópico y funcional de los tejidos humanos,
                  con un enfoque científico riguroso, ético y humanista, contribuyendo a la excelencia del servicio
                  de salud de la comunidad boliviana. Promovemos la investigación y la innovación pedagógica para
                  garantizar una formación integral y de vanguardia.
                </p>
              </div>
            </ScrollReveal>

            {/* Visión */}
            <ScrollReveal delay={0.25} direction="right">
              <div className="group bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10 h-full
                              transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-14 h-14 rounded-xl bg-[#001f3f]/8 flex items-center justify-center mb-6
                                transition-all duration-500 group-hover:bg-[#001f3f] group-hover:shadow-lg group-hover:shadow-[#001f3f]/25">
                  <Eye className="w-7 h-7 text-[#001f3f] transition-colors duration-500 group-hover:text-white" strokeWidth={1.6} />
                </div>
                <h2 className="text-2xl font-extrabold text-[#001f3f] uppercase mb-4 tracking-wide">Visión</h2>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  Ser reconocidos como una cátedra de referencia en la enseñanza de la Histología a nivel nacional
                  e internacional, liderando la integración de tecnologías digitales en la microscopía educativa y
                  produciendo investigación científica de alto impacto que contribuya al avance del conocimiento
                  médico y al bienestar de la sociedad.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HISTORIA — Layout editorial asimétrico
        ═══════════════════════════════════════════ */}
        <section id="historia" className="scroll-mt-32">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#001f3f] uppercase tracking-widest">Historia</h2>
              <div className="mt-3 mx-auto w-16 h-1 bg-[#4da3ff] rounded-full" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row
                            transition-all duration-500 hover:shadow-2xl">

              {/* Imagen */}
              <div className="w-full md:w-5/12 relative min-h-[300px] md:min-h-[450px]">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop"
                  alt="Microscopía Histológica"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#001f3f]/10 md:bg-gradient-to-l" />
              </div>

              {/* Contenido */}
              <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-[#001f3f]" strokeWidth={1.6} />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#001f3f]/60">Desde la fundación</span>
                </div>
                <p className="text-slate-600 leading-loose text-sm md:text-base mb-6">
                  La Cátedra de Histología fue fundada junto con la Facultad de Medicina de la Universidad Mayor de San Andrés,
                  marcando el inicio de una tradición de excelencia académica en el estudio de los tejidos humanos.
                  A lo largo de las décadas, la cátedra ha formado a miles de profesionales de la salud bajo los más
                  rigurosos estándares científicos y éticos.
                </p>
                <p className="text-slate-500 leading-loose text-sm md:text-base">
                  Con la incorporación de tecnología digital y microscopía de última generación, la cátedra se ha
                  posicionado como referente en la enseñanza histológica moderna, combinando la tradición académica
                  con las herramientas más avanzadas del siglo XXI.
                </p>
              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* ═══════════════════════════════════════════
            JEFATURA — Card destacada
        ═══════════════════════════════════════════ */}
        <section id="jefatura" className="scroll-mt-32">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#001f3f] uppercase tracking-widest">Jefatura de Cátedra</h2>
              <div className="mt-3 mx-auto w-16 h-1 bg-[#4da3ff] rounded-full" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row
                            transition-all duration-500 hover:shadow-2xl">

              {/* Foto */}
              <div className="w-full md:w-5/12 relative min-h-[350px] md:min-h-[450px]">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=1000&auto=format&fit=crop"
                  alt="Jefe de Cátedra"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Info */}
              <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <ScrollReveal delay={0.2} direction="right">
                  <div className="space-y-3 mb-8">
                    {[
                      { label: 'Nombre', value: 'Dr. Carlos Mendoza Ruiz' },
                      { label: 'Cargo', value: 'Jefe de Cátedra' },
                      { label: 'Contacto', value: 'jefatura@histologia.umsa.edu.bo' },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="text-[#001f3f] font-bold text-base md:text-lg">{item.label}:</span>
                        <span className="text-slate-600 font-medium md:text-lg">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.35} direction="right">
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    Con más de 20 años de dedicación a la enseñanza y la investigación en Histología, el Dr. Mendoza
                    lidera la cátedra con una visión que combina la rigurosidad científica con la innovación pedagógica.
                    Su gestión ha modernizado los laboratorios, implementado herramientas de microscopía digital y
                    fortalecido los lazos con instituciones de investigación internacionales.
                  </p>
                </ScrollReveal>
              </div>

            </div>
          </ScrollReveal>
        </section>

      </div>
    </main>
  )
}
