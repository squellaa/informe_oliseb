function Resumen() {
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Resumen del caso Equifax 2017</h2>
      <p className="text-slate-600 leading-relaxed mb-4">
        En 2017, Equifax sufrió un mega-hackeo que expuso datos personales de gran magnitud.
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
        <li>Qué pasó: acceso no autorizado a los sistemas de Equifax a través de una vulnerabilidad en Apache Struts.</li>
        <li>Cuándo: el incidente se desarrolló entre mayo y julio de 2017.</li>
        <li>Quiénes: atacantes externos, presuntamente vinculados a militares chinos, como agentes del ataque; la empresa Equifax como víctima y responsable de la protección de los datos.</li>
        <li>Impacto: filtración de datos personales de aproximadamente 147 millones de personas, incluyendo nombres, números de seguridad social y fechas de nacimiento.</li>
      </ul>
      <p className="text-slate-600 leading-relaxed">
        El caso evidencia fallas graves en gestión de parches, control de accesos y protección de datos sensibles en una empresa que maneja información financiera y crediticia de alcance global.
      </p>
    </section>
  )
}

export default Resumen;
