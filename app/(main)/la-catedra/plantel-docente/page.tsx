import { ScrollReveal } from '@/components/scroll-reveal'

const SHADOW_CARD = 'shadow-[0_25px_60px_rgba(0,0,0,0.08),0_8px_20px_rgba(0,0,0,0.04)]'

const docentes = [
  { id: 1, name: "Dr. Roberto Arce", specialty: "Jefe de Cátedra", bio: "Especialista con 20 años de experiencia." },
  { id: 2, name: "Dra. Maria López", specialty: "Docente Titular", bio: "Investigadora en Histología del Sistema Nervioso." },
  { id: 3, name: "Dr. Carlos Fernández", specialty: "Docente Titular", bio: "Autor de prestigiosos artículos académicos en Anatomía Microscópica." },
  { id: 4, name: "Dra. Lucía Méndez", specialty: "Docente Asistente", bio: "Apasionada por la enseñanza y laboratorio de tejidos." },
  { id: 5, name: "Dr. Simón Pérez", specialty: "Docente Asistente", bio: "Coordinador de las guías de práctica y recursos visuales." },
  { id: 6, name: "Dra. Ana Jiménez", specialty: "Investigadora", bio: "Enfocada en el estudio celular del tejido conectivo." },
]

export const metadata = {
  title: 'Plantel Docente - Histología',
}

export default function PlantelDocentePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <ScrollReveal direction="down" duration={0.7}>
          <header className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-[#001f3f] uppercase tracking-widest drop-shadow-sm">Plantel Docente</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Conoce a los profesionales de la salud encargados de dictar la cátedra y guiarte en el descubrimiento microscópico funcional.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {docentes.map((docente, index) => (
            <ScrollReveal key={docente.id} delay={index * 0.12} direction="up">
              <section 
                className={`group bg-white rounded-2xl ${SHADOW_CARD} border border-slate-100 overflow-hidden transition-all duration-500 transform hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)]`}
              >
                <div className="h-32 bg-blue-100 flex justify-center items-end pb-4 transition-colors group-hover:bg-blue-600">
                  {/* Profile Avatar Placeholder */}
                  <div className="w-20 h-20 bg-white rounded-full translate-y-1/2 shadow-lg flex items-center justify-center border-4 border-white text-blue-600 font-bold text-2xl group-hover:text-blue-900">
                    {docente.name.charAt(0)}{docente.name.split(' ')[1]?.charAt(0)}
                  </div>
                </div>
                <div className="pt-14 pb-8 px-6 text-center space-y-2">
                  <h3 className="text-xl font-bold text-slate-800">{docente.name}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    {docente.specialty}
                  </span>
                  <p className="text-sm text-slate-500 pt-4 leading-relaxed line-clamp-3">
                    {docente.bio}
                  </p>
                </div>
              </section>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
