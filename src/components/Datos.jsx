function Datos() {
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Datos filtrados y derechos ARCO</h2>
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <div>
          <h3 className="font-semibold text-slate-800">Tipos de datos filtrados</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Nombres: datos personales identificables expuestos en la brecha.</li>
            <li>Números de Seguridad Social: datos sensibles altamente confidenciales.</li>
            <li>Direcciones: información de contacto vinculada a los registros personales.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Impacto en derechos ARCO</h3>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li><strong>Acceso:</strong> el Art. 9 establece que "el titular de datos personales tiene derecho a acceder a la información relativa al tratamiento de sus datos". Muchas personas no supieron qué información se filtró ni si sus datos estaban comprometidos.</li>
            <li><strong>Cancelación:</strong> el Art. 10 reconoce el derecho a solicitar la cancelación de datos inexactos, incompletos o no autorizados. La brecha muestra que datos almacenados de forma insegura debieron ser cancelados o protegidos con mayor rigor.</li>
            <li><strong>Oposición:</strong> el Art. 11 indica que "el titular podrá oponerse al tratamiento de sus datos personales" cuando exista infracción de la ley o usos no autorizados. La filtración masiva revela el riesgo de tratamientos contrarios a la voluntad del titular.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Datos;
