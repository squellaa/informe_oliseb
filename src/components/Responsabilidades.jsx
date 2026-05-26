function Responsabilidades() {
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Responsabilidades</h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <div>
          <h3 className="font-semibold text-slate-800">Equifax (empresa)</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Civil: responsabilidad por daños derivados de la exposición de datos personales, según Ley 19.628.</li>
            <li>Administrativa: responsabilidad por no aplicar medidas de seguridad adecuadas, en línea con Ley 21.459.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Atacantes externos</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Penal: responsabilidad por cometer delitos informáticos tipificados en Ley 21.459.</li>
            <li>Civil: responsabilidad por los perjuicios causados a las víctimas por la filtración de información sensible.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Gerentes técnicos</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Administrativa: responsabilidad por la falta de gestión de parches y controles, conforme a Ley 21.459 y Ley 19.628.</li>
            <li>Civil: responsabilidad por negligencia en el manejo de datos personales y cumplimiento de obligaciones técnicas.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Responsabilidades;
