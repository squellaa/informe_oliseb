import './App.css'
import { Shield, BookOpen, Sparkles, Layers, ClipboardCheck } from 'lucide-react'
import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-slate-950 text-white shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 py-10 lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-3xl bg-white/10 p-3 ring-1 ring-white/10 shadow-lg">
              <Shield size={40} className="text-cyan-300" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Análisis legal</p>
              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Caso Equifax 2017</h1>
              <p className="mt-3 max-w-2xl text-slate-300 leading-relaxed">Un informe visual de la brecha de datos, el marco normativo vigente y las responsabilidades analizadas a partir de los archivos Markdown existentes.</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)] px-8 py-10 sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-slate-900/10 to-transparent" />
            <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900 text-white shadow-xl">
                <BookOpen className="h-9 w-9" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Basado en docs_oliseb/01-08</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Informe de seguridad y privacidad</h2>
                <p className="mt-4 max-w-3xl text-slate-600 leading-7">Cada sección de esta aplicación refleja los hallazgos del análisis en un dashboard de ciberseguridad legal: hechos del incidente, normas aplicables, delitos tipificados, comparación regulatoria y responsabilidades.</p>
              </div>
            </div>
          </section>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Impacto</span>
                <Sparkles className="h-5 w-5 text-cyan-500" />
              </div>
              <p className="mt-6 text-4xl font-semibold text-slate-900">147M</p>
              <p className="mt-3 text-slate-600">Registros personales expuestos en la brecha.</p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Normas</span>
                <Layers className="h-5 w-5 text-emerald-500" />
              </div>
              <p className="mt-6 text-4xl font-semibold text-slate-900">4</p>
              <p className="mt-3 text-slate-600">Marcos normativos clave analizados en este informe.</p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Derechos</span>
                <ClipboardCheck className="h-5 w-5 text-amber-500" />
              </div>
              <p className="mt-6 text-4xl font-semibold text-slate-900">3</p>
              <p className="mt-3 text-slate-600">Derechos ARCO destacados en el análisis de Ley 19.628.</p>
            </article>
          </div>

          <div className="mt-12 space-y-8">
            <Resumen />
            <Marco />
            <Delitos />
            <Comparacion />
            <Responsabilidades />
            <Datos />
            <Conclusiones />
            <Prompts />
          </div>
        </div>
      </main>

      <footer className="bg-slate-950 text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm">Estudiante: Sebastian Ignacio Olivares Squella</span>
          <span className="text-sm">Docente: Rubén Schnettler L. — INACAP Valparaíso</span>
        </div>
      </footer>
    </div>
  )
}

export default App