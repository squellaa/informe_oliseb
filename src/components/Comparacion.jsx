function Comparacion() {
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8 overflow-x-auto">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Comparación de marcos normativos</h2>
      <table className="min-w-full border-collapse text-left text-slate-700">
        <thead>
          <tr>
            <th className="border-b border-slate-200 pb-3 pr-4">Marco</th>
            <th className="border-b border-slate-200 pb-3 pr-4">Alcance geográfico</th>
            <th className="border-b border-slate-200 pb-3 pr-4">Tipo de sanciones</th>
            <th className="border-b border-slate-200 pb-3 pr-4">Sujeto regulado</th>
            <th className="border-b border-slate-200 pb-3">Relevancia para Equifax</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          <tr>
            <td className="py-3 pr-4">Ley 21.459</td>
            <td className="py-3 pr-4">Chile</td>
            <td className="py-3 pr-4">Penal y administrativa</td>
            <td className="py-3 pr-4">Prestadores de servicios de TI y responsables de sistemas</td>
            <td className="py-3">Relevante para analizar el abuso de acceso y los delitos informáticos en un contexto chileno.</td>
          </tr>
          <tr>
            <td className="py-3 pr-4">GDPR</td>
            <td className="py-3 pr-4">Europa</td>
            <td className="py-3 pr-4">Multas económicas altas y obligaciones de notificación</td>
            <td className="py-3 pr-4">Organizaciones que procesan datos personales de ciudadanos europeos</td>
            <td className="py-3">Relevante porque Equifax procesó datos de ciudadanos europeos y debe cumplir con la protección transfronteriza.</td>
          </tr>
          <tr>
            <td className="py-3 pr-4">ISO 27001</td>
            <td className="py-3 pr-4">Internacional</td>
            <td className="py-3 pr-4">No sancionatoria directa, pero vinculada a certificación y confianza</td>
            <td className="py-3 pr-4">Organizaciones que implementan sistemas de gestión de seguridad de la información</td>
            <td className="py-3">Relevante para evaluar la gestión de riesgos, parches y controles técnicos fallidos en Equifax.</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Comparacion;
