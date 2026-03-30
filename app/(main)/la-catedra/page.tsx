import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'

const SHADOW_CARD = 'shadow-[0_25px_60px_rgba(0,0,0,0.08),0_8px_20px_rgba(0,0,0,0.04)]'

export const metadata = {
  title: 'La Cátedra - Histología',
}

export default function CatedraPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
      {/* TÍTULO PRINCIPAL */}
      <ScrollReveal direction="down" duration={0.7}>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-[#001f3f] text-center mb-16 uppercase tracking-widest drop-shadow-sm">
          La Cátedra - Histología
        </h1>
      </ScrollReveal>

      <div className="w-full max-w-5xl space-y-24">
        
        {/* ═══════════════════════════════════════════
            SECCIÓN: MISIÓN Y VISIÓN
        ═══════════════════════════════════════════ */}
        <section id="mision-vision" className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 scroll-mt-32">
          
          {/* Misión */}
          <ScrollReveal delay={0.1} direction="left">
            <div className="flex flex-col items-center h-full">
              <h2 className="text-2xl font-bold text-[#001f3f] uppercase mb-8 tracking-wide">Misión</h2>
              <div className={`bg-white w-full rounded-3xl ${SHADOW_CARD} p-10 md:p-12 border border-slate-100 relative grow transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)]`}>
                <p className="text-slate-500 font-medium leading-loose text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate beatae assumenda perspiciatis voluptatibus nostrum ratione deleniti et alias officiis, magni eum molestias debitis facilis. Voluptates nihil rerum qui! Repudiandae, vel?
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Visión */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="flex flex-col items-center h-full">
              <h2 className="text-2xl font-bold text-[#001f3f] uppercase mb-8 tracking-wide">Visión</h2>
              <div className={`bg-white w-full rounded-3xl ${SHADOW_CARD} p-10 md:p-12 border border-slate-100 relative grow transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)]`}>
                <p className="text-slate-500 font-medium leading-loose text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate beatae assumenda perspiciatis voluptatibus nostrum ratione deleniti et alias officiis, magni eum molestias debitis facilis. Voluptates nihil rerum qui! Repudiandae, vel?
                </p>
              </div>
            </div>
          </ScrollReveal>

        </section>

        {/* ═══════════════════════════════════════════
            SECCIÓN: HISTORIA
        ═══════════════════════════════════════════ */}
        <section id="historia" className="flex flex-col items-center scroll-mt-32">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-[#001f3f] uppercase mb-8 tracking-wide text-center">Historia</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.15} className="w-full">
            <div className={`bg-white w-full rounded-3xl ${SHADOW_CARD} overflow-hidden border border-slate-100 flex flex-col md:flex-row transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)]`}>
              
              {/* Imagen Izquierda */}
              <div className="w-full md:w-5/12 relative min-h-[300px] md:min-h-full bg-slate-900 border-r border-slate-100">
                <Image 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" 
                  alt="Micrografía Histológica" 
                  fill
                  className="object-cover object-center opacity-90 saturate-150"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              
              {/* Contenido Derecha */}
              <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 flex items-center">
                <p className="text-slate-500 font-medium leading-loose text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate beatae assumenda perspiciatis voluptatibus nostrum ratione deleniti et alias officiis, magni eum molestias debitis facilis. Voluptates nihil rerum qui! Repudiandae, vel?<br/><br/>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate beatae assumenda perspiciatis voluptatibus nostrum ratione deleniti et alias officiis, magni eum molestias debitis facilis. Voluptates nihil rerum qui! Repudiandae, vel?
                </p>
              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* ═══════════════════════════════════════════
            SECCIÓN: JEFATURA
        ═══════════════════════════════════════════ */}
        <section id="jefatura" className="flex flex-col items-center scroll-mt-32">
          
          <ScrollReveal className="w-full">
            <div className={`bg-white w-full rounded-3xl ${SHADOW_CARD} overflow-hidden border border-slate-100 flex flex-col md:flex-row transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)] mt-6`}>
              
              {/* Imagen Izquierda */}
              <div className="w-full md:w-5/12 relative min-h-[350px] md:min-h-[450px] bg-slate-200 border-r border-slate-100">
                <Image 
                  src="https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=1000&auto=format&fit=crop" 
                  alt="Jefe de Cátedra" 
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              
              {/* Contenido Derecha */}
              <div className="w-full md:w-7/12 p-8 md:p-10 lg:p-14 flex flex-col justify-center">
                
                <ScrollReveal delay={0.2} direction="right">
                  <div className="space-y-4 mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <span className="text-blue-700 font-bold text-lg md:text-xl">Nombre:</span>
                      <span className="text-slate-600 font-medium md:text-lg">Dr. Carlos Mendoza Ruiz</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <span className="text-blue-700 font-bold text-lg md:text-xl">Cargo:</span>
                      <span className="text-slate-600 font-medium md:text-lg">Jefe de Cátedra</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <span className="text-blue-700 font-bold text-lg md:text-xl">Contacto:</span>
                      <span className="text-slate-600 font-medium md:text-lg">jefatura@histologia.umsa.edu.bo</span>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.35} direction="right">
                  <p className="text-slate-500 font-medium leading-loose text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate beatae assumenda perspiciatis voluptatibus nostrum ratione deleniti et alias officiis, magni eum molestias debitis facilis. Voluptates nihil rerum qui! Repudiandae, vel?<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate beatae assumenda perspiciatis voluptatibus nostrum ratione deleniti et alias officiis, magni eum molestias debitis facilis. Voluptates nihil rerum qui! Repudiandae, vel?
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
