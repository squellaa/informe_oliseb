import { Database } from 'lucide-react'

function Datos() {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Database className="h-8 w-8 text-slate-700" />
        <h2 className="text-2xl font-semibold text-slate-900">Datos filtrados y derechos ARCO</h2>
      </div>
      <div className="space-y-5 text-slate-600 leading-relaxed">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Tipos de datos filtrados</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Nombres: dato personal identificable.</li>
            <li>Números de Seguridad Social: dato sensible y altamente confidencial.</li>
            <li>Direcciones: dato personal vinculado a la localización e identidad de titulares.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Derechos ARCO afectados</h3>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li><strong>Acceso:</strong> Art. 9 establece que "el titular de datos personales tiene derecho a acceder a la información relativa al tratamiento de sus datos". En Equifax, los afectados no conocieron el alcance de la brecha.</li>
            <li><strong>Cancelación:</strong> Art. 10 señala que el titular puede solicitar la cancelación de datos inexactos o indebidos. La brecha muestra que datos sensibles permanecieron en sistemas inseguros.</li>
            <li><strong>Oposición:</strong> Art. 11 indica que el titular puede oponerse al tratamiento de sus datos personales cuando exista infracción de la ley. La filtración revela riesgos de usos no consentidos.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Datos;
