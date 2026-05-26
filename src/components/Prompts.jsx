import { MessageSquare } from 'lucide-react'

function Prompts() {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="h-8 w-8 text-slate-700" />
        <h2 className="text-2xl font-semibold text-slate-900">Bitácora de prompts</h2>
      </div>
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>Se solicitó generar contenido de cada archivo Markdown en `docs_oliseb` y componentes React en `src/components/` usando Tailwind CSS y Lucide Icons para un dashboard profesional.</p>
        <p>Se corrigió y alineó el contenido con la rúbrica: normas justificadas con hechos, artículos legales citados con numeración, tabla comparativa con ejes, responsabilidades con normas citadas y derechos ARCO con cita textual de Ley 19.628.</p>
        <p>La aplicación ahora refleja fielmente el contenido de los archivos `.md` y la bitácora registra el prompt maestro usado para la generación.</p>
      </div>
    </section>
  )
}

export default Prompts;
