import { BookOpen } from 'lucide-react'

function Resumen() {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="h-8 w-8 text-slate-700" />
        <h2 className="text-2xl font-semibold text-slate-900">Resumen del caso Equifax 2017</h2>
      </div>
      <p className="text-slate-600 leading-relaxed mb-4">
        En 2017, Equifax sufrió un mega-hackeo que expuso datos personales de gran magnitud.
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
        <li>Qué pasó: acceso no autorizado a los sistemas de Equifax a través de una vulnerabilidad en Apache Struts.</li>
        <li>Cuándo: el incidente se desarrolló entre mayo y julio de 2017.</li>
        <li>Quiénes: atacantes externos, presuntamente vinculados a militares chinos, y Equifax como víctima.</li>
        <li>Impacto: filtración de datos personales de aproximadamente 147 millones de personas, incluyendo nombres, números de seguridad social y fechas de nacimiento.</li>
      </ul>
      <p className="text-slate-600 leading-relaxed">
        El caso evidencia fallas graves en gestión de parches, control de accesos y protección de datos sensibles en una empresa con alcance global.
      </p>
    </section>
  )
}

export default Resumen;
