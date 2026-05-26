function Prompts() {
  return (
    <section className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Bitácora de instrucciones</h2>
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>El análisis se basó en instrucciones específicas sobre el caso Mega-hackeo a Equifax de 2017 y las leyes chilenas 21.459 y 19.628.</p>
        <p>Se pidió explícitamente el uso de Tailwind CSS y Lucide Icons para los componentes visuales de la aplicación.</p>
        <p>El contenido se estructuró en componentes React independientes para cada sección del informe.</p>
        <p>Reflexión: el agente trabajó integrado en VS Code, leyendo archivos locales y generando el contenido directamente en el proyecto.</p>
      </div>
    </section>
  )
}

export default Prompts;
