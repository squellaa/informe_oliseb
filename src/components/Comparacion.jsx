import { Table } from 'lucide-react'

function Comparacion() {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-slate-200 overflow-x-auto transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Table className="h-8 w-8 text-slate-700" />
        <h2 className="text-2xl font-semibold text-slate-900">Comparación de marcos normativos</h2>
      </div>
      <table className="min-w-full text-left text-slate-700 border-collapse">
        <thead>
          <tr>
            <th className="border-b border-slate-200 py-3 pr-4">Marco</th>
            <th className="border-b border-slate-200 py-3 pr-4">Alcance</th>
            <th className="border-b border-slate-200 py-3 pr-4">Sanción</th>
            <th className="border-b border-slate-200 py-3 pr-4">Jurisdicción</th>
            <th className="border-b border-slate-200 py-3">Aplicabilidad</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          <tr>
            <td className="py-3 pr-4">Ley 21.459</td>
            <td className="py-3 pr-4">Chile</td>
            <td className="py-3 pr-4">Penal y administrativa</td>
            <td className="py-3 pr-4">Nacional</td>
            <td className="py-3">Analiza el acceso ilícito y los delitos informáticos en sistemas y redes.</td>
          </tr>
          <tr>
            <td className="py-3 pr-4">GDPR</td>
            <td className="py-3 pr-4">Europa</td>
            <td className="py-3 pr-4">Multas y obligaciones de notificación</td>
            <td className="py-3 pr-4">Unión Europea</td>
            <td className="py-3">Se aplica a datos de ciudadanos europeos procesados por Equifax y exige protección transfronteriza.</td>
          </tr>
          <tr>
            <td className="py-3 pr-4">ISO 27001</td>
            <td className="py-3 pr-4">Internacional</td>
            <td className="py-3 pr-4">No sancionatoria directa</td>
            <td className="py-3 pr-4">Global</td>
            <td className="py-3">Permite analizar la gestión de riesgos y controles de seguridad en Equifax.</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Comparacion;
