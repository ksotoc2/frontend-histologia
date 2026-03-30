import { ScrollReveal } from '@/components/scroll-reveal'
import {
  BellRing,
  Clock,
  MapPin,
  Users,
  Megaphone,
  FileText,
  AlertTriangle,
  GraduationCap,
} from 'lucide-react'

// ═══════════════════════════════════════════════
// DATOS
// ═══════════════════════════════════════════════

const avisos = [
  {
    id: 1,
    category: 'Parciales',
    date: '28 Mar 2026',
    title: 'Reprogramación del Primer Parcial Teórico',
    text: 'Se comunica a los estudiantes de Histología I que el primer examen parcial teórico ha sido reprogramado para el día Lunes 1 de Abril. El horario y las aulas se mantienen sin cambios.',
    priority: 'urgent' as const,
    icon: AlertTriangle,
  },
  {
    id: 2,
    category: 'Prácticas',
    date: '25 Mar 2026',
    title: 'Entrega de Guías de Práctica — Grupo B',
    text: 'Se recuerda a los estudiantes del Grupo B que la fecha límite para la entrega de las Guías de Práctica 3 resueltas es el Viernes 29 de Marzo. No se aceptarán entregas tardías.',
    priority: 'info' as const,
    icon: FileText,
  },
  {
    id: 3,
    category: 'Auxiliatura',
    date: '20 Mar 2026',
    title: 'Lista de Admitidos para Auxiliatura de Cátedra',
    text: 'Se publica la lista oficial de estudiantes admitidos para las funciones de Auxiliatura de Cátedra correspondientes al presente semestre académico. Verificar en secretaría.',
    priority: 'success' as const,
    icon: Megaphone,
  },
  {
    id: 4,
    category: 'General',
    date: '15 Mar 2026',
    title: 'Inicio de Actividades Prácticas de Laboratorio',
    text: 'Se informa que las actividades prácticas de laboratorio para todos los grupos inician la primera semana de Abril. Revisar horarios y aulas asignadas en la sección de Grupos.',
    priority: 'info' as const,
    icon: BellRing,
  },
]

const grupos = [
  {
    name: 'Grupo A',
    type: 'Teoría',
    schedule: 'Lunes y Miércoles — 08:00 a 10:00',
    location: 'Aula Magna - Piso 5',
    docente: 'Dr. Roberto Arce',
    auxiliar: 'Aux. Daniela Quispe',
  },
  {
    name: 'Grupo B',
    type: 'Teoría',
    schedule: 'Martes y Jueves — 08:00 a 10:00',
    location: 'Aula 301 - Piso 5',
    docente: 'Dra. María López',
    auxiliar: 'Aux. Fernando Mamani',
  },
  {
    name: 'Grupo C',
    type: 'Laboratorio',
    schedule: 'Lunes — 10:00 a 12:30',
    location: 'Lab. Histología - Piso 5',
    docente: 'Dr. Carlos Fernández',
    auxiliar: 'Aux. Patricia Soliz',
  },
  {
    name: 'Grupo D',
    type: 'Laboratorio',
    schedule: 'Martes — 10:00 a 12:30',
    location: 'Lab. Histología - Piso 5',
    docente: 'Dra. Lucía Méndez',
    auxiliar: 'Aux. Álvaro Choque',
  },
  {
    name: 'Grupo E',
    type: 'Laboratorio',
    schedule: 'Miércoles — 14:00 a 16:30',
    location: 'Lab. Microscopía - Piso 5',
    docente: 'Dr. Simón Pérez',
    auxiliar: 'Aux. Andrea Flores',
  },
  {
    name: 'Grupo F',
    type: 'Teoría',
    schedule: 'Viernes — 08:00 a 10:00',
    location: 'Anfiteatro - Piso 5',
    docente: 'Dra. Ana Jiménez',
    auxiliar: 'Aux. Marco Condori',
  },
]

const priorityStyles = {
  urgent: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
  info: { bg: 'bg-[#001f3f]/5', text: 'text-[#001f3f]', dot: 'bg-[#4da3ff]' },
  success: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
}

// ═══════════════════════════════════════════════
// PÁGINA
// ═══════════════════════════════════════════════

export const metadata = {
  title: 'Estudiantes — Histología',
}

export default function EstudiantesPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">

      {/* ═══════════════════════════════════════════
          HERO HEADER — Tono sutil, consistente con el sitio
      ═══════════════════════════════════════════ */}
      <div className="bg-[#001f3f]/3 border-b border-slate-100 py-16 md:py-20">
        <div className="text-center px-4">
          <ScrollReveal direction="down" duration={0.7}>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-[#001f3f] uppercase tracking-widest">
              Área de Estudiantes
            </h1>
            <div className="mt-4 mx-auto w-16 h-1 bg-[#4da3ff] rounded-full" />
            <p className="mt-5 text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Avisos oficiales, comunicados de cátedra y la organización actualizada de grupos para la gestión académica.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════════════════════════════════════════
            SECCIÓN 1: AVISOS Y COMUNICADOS
        ═══════════════════════════════════════════ */}
        <section className="py-16" id="avisos">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-11 h-11 rounded-xl bg-[#001f3f]/8 flex items-center justify-center">
                <BellRing className="w-5 h-5 text-[#001f3f]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#001f3f] uppercase tracking-wider">
                Avisos y Comunicados
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-12">
            {avisos.map((aviso, index) => {
              const style = priorityStyles[aviso.priority]
              return (
                <ScrollReveal key={aviso.id} delay={index * 0.1} direction="up">
                  <div className="group bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-7 h-full
                                  flex flex-col gap-4
                                  transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                    {/* Fila superior: Icono + badges */}
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <div className={`w-12 h-12 rounded-xl ${style.bg} flex items-center justify-center
                                         transition-all duration-500 group-hover:scale-110`}>
                          <aviso.icon className={`w-5 h-5 ${style.text}`} strokeWidth={1.8} />
                        </div>
                        <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ${style.dot} ring-2 ring-white`} />
                      </div>
                      <div className="flex items-center gap-2 flex-wrap pt-1">
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${style.bg} ${style.text}`}>
                          {aviso.category}
                        </span>
                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {aviso.date}
                        </span>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#001f3f] transition-colors">
                        {aviso.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {aviso.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </section>

        {/* Separador decorativo */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-slate-200" />
          <div className="w-2 h-2 rounded-full bg-[#001f3f]/20" />
          <div className="w-2 h-2 rounded-full bg-[#001f3f]/40" />
          <div className="w-2 h-2 rounded-full bg-[#001f3f]/20" />
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* ═══════════════════════════════════════════
            SECCIÓN 2: GRUPOS
        ═══════════════════════════════════════════ */}
        <section className="py-16" id="grupos">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-[#001f3f]/8 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#001f3f]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#001f3f] uppercase tracking-wider">
                Grupos
              </h2>
            </div>
            <p className="text-slate-500 text-sm mb-10 ml-14">
              Organización de grupos para las clases teóricas y sesiones de laboratorio de la cátedra.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grupos.map((grupo, index) => (
              <ScrollReveal key={grupo.name} delay={index * 0.08} direction="up">
                <div className="group bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden h-full
                                transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.01]">

                  {/* Header */}
                  <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#001f3f]">{grupo.name}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${grupo.type === 'Laboratorio'
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-[#001f3f]/8 text-[#001f3f]'
                      }`}>
                      {grupo.type}
                    </span>
                  </div>

                  {/* Detalles */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-[#001f3f]/5 flex items-center justify-center mt-0.5">
                        <Clock className="w-4 h-4 text-[#001f3f]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Horario</p>
                        <p className="text-sm font-semibold text-slate-800">{grupo.schedule}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-[#001f3f]/5 flex items-center justify-center mt-0.5">
                        <MapPin className="w-4 h-4 text-[#001f3f]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Aula / Lab</p>
                        <p className="text-sm font-semibold text-slate-800">{grupo.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-[#001f3f]/5 flex items-center justify-center mt-0.5">
                        <GraduationCap className="w-4 h-4 text-[#001f3f]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Docente</p>
                        <p className="text-sm font-semibold text-slate-800">{grupo.docente}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{grupo.auxiliar}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
