import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiBeaker, HiClipboardCheck, HiClock, HiDocumentText, HiUserGroup } from 'react-icons/hi'

const reasons = [
  {
    icon: HiAcademicCap,
    title: '3 Generaciones',
    text: 'Conocimiento transmitido y perfeccionado a lo largo de tres generaciones de maestros técnicos diésel.',
  },
  {
    icon: HiBeaker,
    title: 'Laboratorio Especializado',
    text: 'Microscopio de inspección, banco de pruebas CRS-200 y equipos de diagnóstico de última generación.',
  },
  {
    icon: HiClipboardCheck,
    title: 'Procedimientos Formales',
    text: 'Cada reparación sigue protocolos estrictos con documentación completa y trazabilidad.',
  },
  {
    icon: HiClock,
    title: 'Mínimo Tiempo Muerto',
    text: 'Reducimos tiempos de inactividad para mantener sus operaciones funcionando sin interrupciones.',
  },
  {
    icon: HiDocumentText,
    title: 'Análisis de Causa Raíz',
    text: 'No improvisamos. Identificamos la causa real del problema para evitar recurrencias.',
  },
  {
    icon: HiUserGroup,
    title: 'Socios Técnicos',
    text: 'No somos un taller genérico. Somos socios estratégicos para operaciones críticas.',
  },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/95" />
      </div>

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
              ¿Por Qué Elegirnos?
            </span>
            <div className="h-px w-12 bg-blue-accent" />
          </div>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white mb-4">
            La Diferencia <span className="text-blue-accent">Rojas Barbera</span>
          </h2>
          <p className="text-steel-400 text-lg max-w-2xl mx-auto">
            Donde otros ven complejidad, nosotros vemos una operación que necesita
            un socio técnico confiable.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-navy-800/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-blue-accent/30 hover:bg-navy-800/50 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-accent/20 to-blue-accent/5 border border-blue-accent/20 flex items-center justify-center mb-6 group-hover:border-blue-accent/40 transition-colors">
                <reason.icon className="text-blue-accent text-2xl" />
              </div>
              <h3 className="font-[var(--font-heading)] text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-steel-400 text-sm leading-relaxed">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
