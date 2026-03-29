import { FileText, Download } from 'lucide-react'

export default function GuiasPracticaPage() {
  const guias = [
    { title: "Guía de Laboratorio 1: Microscopía", format: "PDF", size: "2.4 MB" },
    { title: "Guía de Laboratorio 2: Tejido Epitelial", format: "PDF", size: "3.1 MB" },
    { title: "Guía de Laboratorio 3: Tejido Conectivo", format: "PDF", size: "1.8 MB" },
    { title: "Guía de Laboratorio 4: Tejido Muscular y Nervioso", format: "PDF", size: "4.5 MB" },
    { title: "Manual Clínico de Cortes Histológicos", format: "PDF", size: "12.0 MB" },
  ]

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-blue-950">Guías de Práctica</h1>
          <p className="text-lg text-slate-600">
            Descarga los recursos oficiales estructurados por el departamento para acompañar tus rotaciones de laboratorio.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <ul className="divide-y divide-slate-100">
            {guias.map((guia, i) => (
              <li key={i} className="group hover:bg-blue-50/50 transition-colors duration-200">
                <a href="#" className="flex items-center justify-between px-6 py-5 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center shrink-0">
                      <FileText strokeWidth={2} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                        {guia.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-0.5">
                        Documento {guia.format} • {guia.size}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-100 transition-colors shrink-0">
                    <Download strokeWidth={2.5} className="w-5 h-5" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
