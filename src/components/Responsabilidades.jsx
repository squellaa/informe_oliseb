import { Users } from 'lucide-react'

function Responsabilidades() {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Users className="h-8 w-8 text-slate-700" />
        <h2 className="text-2xl font-semibold text-slate-900">Responsabilidades</h2>
      </div>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Equifax (empresa)</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Civil: responsabilidad por daños a titulares de datos según Ley 19.628.</li>
            <li>Administrativa: responsabilidad por falta de medidas de seguridad adecuadas según Ley 21.459.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Atacantes externos</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Penal: responsabilidad por delitos informáticos según Art. 2 y Art. 3 de la Ley 21.459.</li>
            <li>Civil: responsabilidad por los daños causados a los titulares afectados.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Gerentes técnicos</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Administrativa: responsabilidad por negligencia en controles y parches conforme a Ley 21.459.</li>
            <li>Civil: responsabilidad por la gestión deficiente de datos personales según Ley 19.628.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Responsabilidades;
