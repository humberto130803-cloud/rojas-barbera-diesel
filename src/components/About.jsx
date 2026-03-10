import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiShieldCheck, HiCog, HiLightningBolt } from 'react-icons/hi'

const pillars = [
  {
    icon: HiShieldCheck,
    title: 'Confiabilidad',
    text: 'Operaciones donde la falla no es una opción. Somos socios técnicos, no un taller genérico.',
  },
  {
    icon: HiCog,
    title: 'Precisión',
    text: 'Procedimientos formales, análisis de causa raíz y documentación clara por unidad.',
  },
  {
    icon: HiLightningBolt,
    title: 'Continuidad',
    text: 'Minimizamos tiempos de inactividad para mantener la continuidad de su negocio.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="nosotros" className="relative py-24 lg:py-32 overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/gallery-2.jpg"
                alt="Recepción Rojas Barbera Diesel"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-4 bg-blue-accent rounded-xl p-6 shadow-2xl shadow-blue-accent/20">
              <p className="font-[var(--font-heading)] text-4xl font-bold text-white">22+</p>
              <p className="text-white/80 text-sm">Años de<br />Experiencia</p>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-blue-accent/40 rounded-tl-2xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-blue-accent" />
              <span className="text-blue-accent font-semibold tracking-[0.2em] uppercase text-sm">
                Acerca de Nosotros
              </span>
            </div>

            <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Tres Generaciones de{' '}
              <span className="text-blue-accent">Excelencia Técnica</span>
            </h2>

            <p className="text-steel-400 text-lg leading-relaxed mb-6">
              Con más de 22 años de experiencia continua en Panamá y tres generaciones
              dedicadas al oficio, convertimos complejidad técnica en operaciones
              confiables y sostenibles para equipos industriales y flotas corporativas.
            </p>

            <p className="text-steel-400 leading-relaxed mb-10">
              Nos enfocamos en procedimientos técnicos formales, análisis de causa raíz
              y documentación clara por unidad, entregando soluciones que se integran
              con los procesos de mantenimiento y operaciones de nuestros clientes.
            </p>

            <div className="space-y-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-accent/10 border border-blue-accent/20 flex items-center justify-center">
                    <pillar.icon className="text-blue-accent text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{pillar.title}</h3>
                    <p className="text-steel-400 text-sm leading-relaxed">{pillar.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
