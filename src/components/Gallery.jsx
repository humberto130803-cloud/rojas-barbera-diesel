import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiX } from 'react-icons/hi'

const images = [
  { src: '/gallery-2.jpg', caption: 'Sala de recepción', span: 'md:col-span-2 md:row-span-2' },
  { src: '/gallery-3.jpg', caption: 'Área de espera', span: '' },
  { src: '/gallery-1.jpg', caption: 'Microscopio de inspección', span: '' },
  { src: '/gallery-6.jpg', caption: 'Exhibición de repuestos', span: '' },
  { src: '/gallery-7.jpg', caption: 'Taller de precisión', span: '' },
  { src: '/gallery-8.jpg', caption: 'Área de trabajo', span: 'md:col-span-2' },
  { src: '/gallery-9.jpg', caption: 'Estaciones de trabajo', span: '' },
  { src: '/gallery-4.jpg', caption: 'Recepción y oficinas', span: '' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="instalaciones" className="relative py-24 lg:py-32 overflow-hidden isolate bg-slate-50" style={{ WebkitTransform: 'translateZ(0)' }}>
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
              Nuestras Instalaciones
            </span>
            <div className="h-px w-12 bg-blue-accent" />
          </div>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Un Laboratorio de <span className="text-blue-accent">Clase Mundial</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Instalaciones diseñadas para ofrecer el más alto estándar de servicio
            en reparación de sistemas diésel.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer shadow-md ${img.span}`}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full min-h-[200px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <HiX size={32} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.caption}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  )
}
