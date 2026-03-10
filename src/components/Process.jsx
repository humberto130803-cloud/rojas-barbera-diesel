import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiSearch, HiDocumentReport, HiCheckCircle } from 'react-icons/hi'
import { HiWrenchScrewdriver } from 'react-icons/hi2'

const steps = [
  {
    icon: HiSearch,
    number: '01',
    title: 'Recepción y Diagnóstico',
    description: 'Recibimos su equipo, documentamos el estado inicial y realizamos un diagnóstico completo con nuestros equipos especializados.',
  },
  {
    icon: HiDocumentReport,
    number: '02',
    title: 'Análisis y Cotización',
    description: 'Inspección microscópica, identificación de causa raíz y presentación de cotización detallada con tiempos estimados.',
  },
  {
    icon: HiWrenchScrewdriver,
    number: '03',
    title: 'Reparación Especializada',
    description: 'Ejecutamos la reparación siguiendo protocolos estrictos, con repuestos de calidad y documentación de cada paso.',
  },
  {
    icon: HiCheckCircle,
    number: '04',
    title: 'Prueba y Entrega',
    description: 'Prueba en banco de ensayo, verificación de parámetros operativos y entrega con informe técnico completo.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="proceso" className="relative py-24 lg:py-32 overflow-hidden isolate bg-white" style={{ WebkitTransform: 'translateZ(0)' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-accent" />
            <span className="text-blue-accent font-semibold tracking-[0.2em] uppercase text-sm">
              Nuestro Proceso
            </span>
            <div className="h-px w-12 bg-blue-accent" />
          </div>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Cómo <span className="text-blue-accent">Trabajamos</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Un proceso estructurado y transparente que garantiza resultados
            confiables en cada reparación.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-[-calc(50%-40px)] w-full h-px bg-gradient-to-r from-blue-accent/30 to-blue-accent/5" />
              )}

              <div className="text-center">
                {/* Number + Icon */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-blue-accent/10 border border-blue-accent/20 flex items-center justify-center">
                    <step.icon className="text-blue-accent text-3xl" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-accent text-white text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-[var(--font-heading)] text-xl font-bold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
