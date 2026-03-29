import React from 'react'
import { ScrollReveal } from '@/components/scroll-reveal'

export const metadata = {
  title: 'Información Académica - Histología',
}

const SHADOW_CARD = 'shadow-[0_25px_60px_rgba(0,0,0,0.08),0_8px_20px_rgba(0,0,0,0.04)]'

const evaluaciones = [
  { label: 'Primer Examen Parcial Teórico', value: '20%' },
  { label: 'Segundo Examen Parcial Teórico', value: '20%' },
  { label: 'Tercer Examen Parcial Teórico', value: '20%' },
  { label: 'Examen Final (Toda la Materia)', value: '20%' },
  { label: 'Evaluación Práctica (Laminario/Microscopía)', value: '20%' },
]

const bibliografias = [
  { label: 'Ross Histología: Texto y Atlas Analítico', value: 'W. Pawlina (8va Ed.)' },
  { label: 'Junqueira Histología Básica', value: 'A. Mescher (15va Ed.)' },
  { label: 'Gartner Texto Atlas de Histología', value: 'L. Gartner (4ta Ed.)' },
  { label: 'Stevens & Lowe Histología Humana', value: 'J. Lowe (5ta Ed.)' },
  { label: 'Di Fiore Atlas de Histología Normal', value: 'V. Eroschenko (13va Ed.)' },
]

const cronograma = [
  { label: 'Inicio de Clases Magistrales (Teóricas)', value: '05 de Febrero, 2024' },
  { label: 'Primer Examen Parcial', value: '15 de Mayo, 2024' },
  { label: 'Segundo Examen Parcial', value: '14 de Agosto, 2024' },
  { label: 'Tercer Examen Parcial', value: '23 de Octubre, 2024' },
  { label: 'Exámenes Finales Ordinarios', value: 'Noviembre, 2024' },
  { label: 'Receso Académico de Invierno', value: 'Julio, 2024' },
]

export default function InformacionAcademicaPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
      {/* TÍTULO PRINCIPAL */}
      <ScrollReveal direction="down" duration={0.7}>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-red-600 text-center mb-16 uppercase tracking-widest drop-shadow-sm">
          Información Académica
        </h1>
      </ScrollReveal>

      <div className="w-full max-w-5xl space-y-24">
        
        {/* ═══════════════════════════════════════════
            SECCIÓN: PLAN DE ESTUDIOS
        ═══════════════════════════════════════════ */}
        <section id="plan-estudios" className="flex flex-col items-center scroll-mt-32">
          <ScrollReveal>
            <div className={`bg-gray-50 w-full rounded-3xl ${SHADOW_CARD} p-10 md:p-14 border border-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)]`}>
              <h2 className="text-2xl font-bold text-blue-700 uppercase mb-10 text-center tracking-wide">
                Plan de Estudios
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                <ScrollReveal delay={0.1} direction="left">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-200 pb-3 mb-5 uppercase tracking-wide">
                      I. Histología General
                    </h3>
                    <ul className="list-none space-y-3 text-gray-600 font-medium md:text-base">
                      <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span> Biología Celular y Técnicas Histológicas</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span> Tejido Epitelial y Glandular</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span> Tejido Conectivo y Adiposo</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span> Tejido Cartilaginoso y Óseo</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span> Tejido Sanguíneo y Hematopoyesis</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span> Tejido Muscular y Nervioso</li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3} direction="right">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-200 pb-3 mb-5 uppercase tracking-wide">
                      II. Histología Especial 
                    </h3>
                    <ul className="list-none space-y-3 text-gray-600 font-medium md:text-base">
                      <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span> Aparato Cardiovascular e Inmunitario</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span> Aparato Digestivo y Glándulas Anexas</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span> Aparato Respiratorio y Urinario</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span> Sistema Endocrino (Glándulas Principales)</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span> Aparato Reproductor Femenino</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span> Aparato Reproductor Masculino</li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ═══════════════════════════════════════════
            SECCIÓN: SISTEMA DE EVALUACIÓN Y BIBLIOGRAFÍA
        ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Sistema de Evaluación */}
          <section id="sistema-evaluacion" className="flex flex-col items-center scroll-mt-32">
            <ScrollReveal delay={0.1} direction="left" className="flex flex-col items-center w-full">
              <h2 className="text-xl md:text-2xl font-bold text-red-600 uppercase mb-8 tracking-wide">
                Sistema de Evaluación
              </h2>
              <div className={`bg-gray-50 w-full rounded-3xl ${SHADOW_CARD} p-8 md:p-10 border border-gray-100 grow transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)]`}>
                <div className="flex flex-col">
                  {evaluaciones.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b border-gray-200/80 last:border-0 last:pb-0 gap-4">
                      <span className="text-gray-500 font-medium text-sm lg:text-base">{item.label}</span>
                      <span className="text-gray-800 font-bold whitespace-nowrap">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Bibliografía */}
          <section id="bibliografia" className="flex flex-col items-center scroll-mt-32">
            <ScrollReveal delay={0.3} direction="right" className="flex flex-col items-center w-full">
              <h2 className="text-xl md:text-2xl font-bold text-red-600 uppercase mb-8 tracking-wide">
                Bibliografía
              </h2>
              <div className={`bg-gray-50 w-full rounded-3xl ${SHADOW_CARD} p-8 md:p-10 border border-gray-100 grow transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)]`}>
                <div className="flex flex-col">
                  {bibliografias.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b border-gray-200/80 last:border-0 last:pb-0 gap-4">
                      <span className="text-gray-500 font-medium text-sm lg:text-base leading-snug">{item.label}</span>
                      <span className="text-gray-800 font-bold text-right text-xs lg:text-sm leading-tight max-w-[130px] shrink-0">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

        </div>

        {/* ═══════════════════════════════════════════
            SECCIÓN: CRONOGRAMA ANUAL
        ═══════════════════════════════════════════ */}
        <section id="cronograma-anual" className="flex flex-col items-center scroll-mt-32">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-red-600 uppercase mb-8 tracking-wide text-center">
              Cronograma Anual
            </h2>
            <div className={`bg-gray-50 w-full max-w-3xl mx-auto rounded-3xl ${SHADOW_CARD} p-10 md:p-14 border border-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12),0_10px_25px_rgba(0,0,0,0.06)]`}>
              <div className="flex flex-col">
                {cronograma.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-5 border-b border-gray-200/80 last:border-0 last:pb-0 gap-3">
                    <span className="text-gray-500 font-medium text-sm lg:text-base">{item.label}</span>
                    <span className="text-gray-800 font-bold text-sm bg-white px-4 py-2.5 border border-gray-100 rounded-lg shadow-sm w-fit">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </main>
  )
}
