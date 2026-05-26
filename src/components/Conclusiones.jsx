import { CheckCircle2 } from 'lucide-react'

function Conclusiones() {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle2 className="h-8 w-8 text-slate-700" />
        <h2 className="text-2xl font-semibold text-slate-900">Conclusiones</h2>
      </div>
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>El caso Equifax evidencia que una vulnerabilidad sin parchear y controles deficientes de acceso pueden generar una brecha global con impacto en millones de registros.</p>
        <p>Las Leyes 21.459 y 19.628 ofrecen un marco chileno sólido para analizar responsabilidades penales, civiles y administrativas.</p>
        <p>GDPR e ISO 27001 complementan el análisis con criterios internacionales de protección de datos y gestión de riesgos.</p>
        <p>La evidencia muestra que la gobernanza técnica y documental debe ser parte de cualquier estrategia de seguridad de la información.</p>
      </div>
    </section>
  )
}

export default Conclusiones;
