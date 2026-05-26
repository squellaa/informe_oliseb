function Delitos() {
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Delitos según Ley 21.459</h2>
      <div className="space-y-5 text-slate-600 leading-relaxed">
        <div>
          <h3 className="font-semibold text-slate-800">Art. 2 - Acceso ilícito</h3>
          <p>“Se considerará acceso ilícito la entrada a sistemas, redes o datos sin autorización del titular o del administrado.”</p>
          <p className="mt-2">Mapeo: los atacantes explotaron una vulnerabilidad de Apache Struts para acceder sin autorización a los servidores web y bases de datos de Equifax.</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Art. 3 - Interceptación ilícita</h3>
          <p>“Se considera interceptación ilícita la captura, obtención o escucha de comunicaciones o datos mientras se transmiten por redes o sistemas de información, sin consentimiento del titular.”</p>
          <p className="mt-2">Mapeo: los atacantes habrían capturado o interceptado datos internos en movimiento dentro de la red de Equifax, obteniendo información sensible sin autorización.</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Art. 4 - Ataque a la integridad de los datos</h3>
          <p>“Se considera ataque a la integridad de los datos cualquier acción destinada a alterar, destruir, extraer o manipular información sin autorización, comprometiendo su integridad y confidencialidad.”</p>
          <p className="mt-2">Mapeo: la extracción masiva de información personal de 147 millones de personas constituye un ataque a la integridad y confidencialidad de los datos manejados por Equifax.</p>
        </div>
      </div>
    </section>
  )
}

export default Delitos;
