import { ScrollReveal } from '@/components/scroll-reveal'
import { Mail } from 'lucide-react'

const docentes = [
  { id: 1, name: 'Dr. Roberto Arce', specialty: 'Jefe de Cátedra', bio: 'Especialista con 20 años de experiencia en histología clínica y docencia universitaria.' },
  { id: 2, name: 'Dra. María López', specialty: 'Docente Titular', bio: 'Investigadora en Histología del Sistema Nervioso Central y periférico.' },
  { id: 3, name: 'Dr. Carlos Fernández', specialty: 'Docente Titular', bio: 'Autor de artículos académicos en Anatomía Microscópica y Embriología.' },
  { id: 4, name: 'Dra. Lucía Méndez', specialty: 'Docente Asistente', bio: 'Apasionada por la enseñanza y el laboratorio de tejidos conectivos.' },
  { id: 5, name: 'Dr. Simón Pérez', specialty: 'Docente Asistente', bio: 'Coordinador de guías de práctica y recursos visuales de microscopía.' },
  { id: 6, name: 'Dra. Ana Jiménez', specialty: 'Investigadora', bio: 'Enfocada en el estudio celular del tejido conectivo y muscular.' },
  { id: 7, name: 'Dr. Juan Quispe', specialty: 'Docente Titular', bio: 'Especialista en Histología del aparato digestivo y glándulas anexas.' },
  { id: 8, name: 'Dra. Patricia Soliz', specialty: 'Docente Asistente', bio: 'Coordinadora de prácticas de laboratorio y auxiliaturas de cátedra.' },
]

export const metadata = {
  title: 'Plantel Docente - Histología',
}

export default function PlantelDocentePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">

      {/* ═══════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════ */}
      <div className="pt-16 pb-12 text-center px-4">
        <ScrollReveal direction="down" duration={0.7}>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[#001f3f] uppercase tracking-widest">
            Plantel Docente
          </h1>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#4da3ff] rounded-full" />
          <p className="mt-5 text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Conoce a los profesionales de la salud encargados de dictar la cátedra y guiarte
            en el descubrimiento microscópico funcional de los tejidos humanos.
          </p>
        </ScrollReveal>
      </div>

      {/* ═══════════════════════════════════════════
          GRID DE DOCENTES
      ═══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {docentes.map((docente, index) => {
            const initials = docente.name
              .split(' ')
              .filter((_, i) => i === 0 || i === docente.name.split(' ').length - 1)
              .map((w) => w.charAt(0))
              .join('')

            return (
              <ScrollReveal key={docente.id} delay={index * 0.08} direction="up">
                <div className="group bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden h-full
                                transition-all duration-500 ease-out
                                hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

                  {/* Banner superior */}
                  <div className="h-28 bg-gradient-to-br from-[#001f3f] to-[#003366] relative flex justify-center">
                    {/* Avatar */}
                    <div className="absolute -bottom-8 w-16 h-16 rounded-full bg-white shadow-lg border-4 border-white
                                    flex items-center justify-center
                                    transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                      <span className="text-[#001f3f] font-extrabold text-lg select-none">{initials}</span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="pt-12 pb-7 px-6 text-center flex flex-col items-center">
                    {/* Nombre */}
                    <h3 className="text-base font-bold text-[#001f3f] mb-1 group-hover:text-[#003366] transition-colors">
                      {docente.name}
                    </h3>

                    {/* Especialidad */}
                    <span className="inline-block px-3 py-0.5 bg-[#001f3f]/8 text-[#001f3f] text-[10px] font-bold rounded-full uppercase tracking-wider mb-4">
                      {docente.specialty}
                    </span>

                    {/* Bio */}
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-5">
                      {docente.bio}
                    </p>

                    {/* CTA sutil */}
                    <div className="pt-4 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-[#001f3f]/60 text-xs font-semibold
                                    group-hover:text-[#001f3f] transition-colors duration-300">
                      <Mail className="w-3.5 h-3.5" />
                      <span>Contactar</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </main>
  )
}
