import { AlertTriangle } from 'lucide-react'

function Delitos() {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="h-8 w-8 text-slate-700" />
        <h2 className="text-2xl font-semibold text-slate-900">Delitos según Ley 21.459</h2>
      </div>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Art. 2 - Acceso ilícito</h3>
          <p>“Se considerará acceso ilícito la entrada a sistemas, redes o datos sin autorización del titular o del administrado.”</p>
          <p className="mt-2">Mapeo: los atacantes ingresaron sin autorización a los servidores web de Equifax mediante una vulnerabilidad en Apache Struts.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Art. 3 - Interceptación ilícita</h3>
          <p>“Se considera interceptación ilícita la captura, obtención o escucha de comunicaciones o datos mientras se transmiten por redes o sistemas de información, sin consentimiento del titular.”</p>
          <p className="mt-2">Mapeo: la obtención de datos internos en tránsito dentro de la red de Equifax evidencia una interceptación ilegítima.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Art. 4 - Ataque a la integridad de los datos</h3>
          <p>“Se considera ataque a la integridad de los datos cualquier acción destinada a alterar, destruir, extraer o manipular información sin autorización, comprometiendo su integridad y confidencialidad.”</p>
          <p className="mt-2">Mapeo: la extracción masiva de 147 millones de registros constituye un ataque a la integridad y confidencialidad de los datos.</p>
        </div>
      </div>
    </section>
  )
}

export default Delitos;
