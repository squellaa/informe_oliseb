function Marco() {
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Marco normativo aplicable</h2>
      <ol className="list-decimal list-inside text-slate-600 space-y-2 mb-6">
        <li>Ley 21.459 (Chile) - Regulación de delitos informáticos y seguridad de la información.</li>
        <li>Ley 19.628 (Chile) - Protección de la vida privada y tratamiento de datos personales.</li>
        <li>GDPR (Europa) - Reglamento general de protección de datos de la Unión Europea.</li>
        <li>SOX (EE.UU.) - Ley Sarbanes-Oxley, exigencias de control interno para empresas públicas.</li>
      </ol>
      <div className="space-y-3 text-slate-600 leading-relaxed">
        <p>La Ley 21.459 se aplica porque Equifax sufrió un acceso no autorizado a sus sistemas, un hecho típico de delitos informáticos.</p>
        <p>La Ley 19.628 es relevante debido a la filtración de datos personales sensibles, lo que activa los principios de protección de la información.</p>
        <p>El GDPR se aplica porque Equifax procesó datos de ciudadanos europeos y debe cumplir con las obligaciones de notificación y protección transfronteriza.</p>
        <p>El fallo en parches de seguridad y controles técnicos vincula este caso con estándares internacionales de ciberseguridad, reforzando la relevancia de GDPR y SOX en gobierno corporativo.</p>
      </div>
    </section>
  )
}

export default Marco;
