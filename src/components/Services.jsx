import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCog, HiChip, HiLightningBolt, HiSearch, HiTruck } from 'react-icons/hi'
import { HiWrenchScrewdriver } from 'react-icons/hi2'

const services = [
  {
    icon: HiCog,
    title: 'Bombas Inyectoras',
    description: 'Reparación y calibración de bombas inyectoras mecánicas y electrónicas de alta complejidad para todo tipo de motorización diésel.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80',
  },
  {
    icon: HiChip,
    title: 'Inyectores Common Rail',
    description: 'Diagnóstico, reparación y codificación de inyectores common rail con equipo de última generación y banco de pruebas CRS-200.',
    image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80',
  },
  {
    icon: HiLightningBolt,
    title: 'Turbo Alimentadores',
    description: 'Reconstrucción completa de turbo cargadores: balanceo dinámico, reemplazo de cartuchos y pruebas de presión.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80',
  },
  {
    icon: HiSearch,
    title: 'Diagnóstico de Precisión',
    description: 'Inspección microscópica de componentes, análisis de causa raíz y documentación técnica detallada por unidad.',
    image: '/gallery-1.jpg',
  },
  {
    icon: HiTruck,
    title: 'Soporte para Flotas',
    description: 'Programas de mantenimiento preventivo y correctivo para flotas corporativas e industriales con tiempos de respuesta garantizados.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
  },
  {
    icon: HiWrenchScrewdriver,
    title: 'Venta de Repuestos',
    description: 'Repuestos originales y alternos de alta calidad para sistemas de inyección diésel, bombas, inyectores y turbos.',
    image: '/gallery-6.jpg',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="relative py-24 lg:py-32 overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      <div className="absolute inset-0 bg-navy-950" />
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-accent/30 to-transparent" />

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
              Nuestros Servicios
            </span>
            <div className="h-px w-12 bg-blue-accent" />
          </div>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Soluciones Diésel <span className="text-blue-accent">Integrales</span>
          </h2>
          <p className="text-steel-400 text-lg max-w-2xl mx-auto">
            Ofrecemos un servicio completo para sistemas de inyección diésel, desde el
            diagnóstico hasta la reparación y prueba final.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-navy-800/50 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-accent/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-blue-accent/90 flex items-center justify-center">
                  <service.icon className="text-white text-2xl" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-white mb-3 group-hover:text-blue-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-steel-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
