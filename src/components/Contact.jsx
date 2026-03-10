import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiLocationMarker, HiPhone, HiClock, HiArrowRight } from 'react-icons/hi'
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'

const contactInfo = [
  {
    icon: HiLocationMarker,
    title: 'Ubicación',
    lines: ['Local Barbera Diesel', 'Av. José Agustín Arango', 'Panamá, Provincia de Panamá'],
  },
  {
    icon: HiPhone,
    title: 'Teléfono',
    lines: ['6070-1905'],
  },
  {
    icon: HiClock,
    title: 'Horario',
    lines: ['Lunes a Viernes', '8:00 AM - 5:00 PM'],
  },
]

const socials = [
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/50760701905', color: 'hover:bg-green-600 hover:text-white' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/RojasBarberaDiesel', color: 'hover:bg-pink-600 hover:text-white' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/rojas-barbera-diesel', color: 'hover:bg-blue-700 hover:text-white' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden isolate bg-slate-50" style={{ WebkitTransform: 'translateZ(0)' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-blue-accent" />
              <span className="text-blue-accent font-semibold tracking-[0.2em] uppercase text-sm">
                Contáctenos
              </span>
            </div>

            <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              ¿Necesita Soporte{' '}
              <span className="text-blue-accent">Técnico Diésel?</span>
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Estamos listos para atender su consulta. Solicite una cotización o
              agende una visita a nuestras instalaciones para conocer cómo podemos
              ser su socio técnico confiable.
            </p>

            <a
              href="https://wa.me/50760701905"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-green-600/20 mb-12"
            >
              <FaWhatsapp className="text-2xl" />
              Escribir por WhatsApp
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Social links */}
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 transition-all ${social.color}`}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-white border border-slate-200 rounded-xl p-6 flex gap-5 shadow-sm"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-accent/10 border border-blue-accent/20 flex items-center justify-center">
                  <info.icon className="text-blue-accent text-2xl" />
                </div>
                <div>
                  <h3 className="text-slate-800 font-semibold mb-2">{info.title}</h3>
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-slate-500 text-sm">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map embed */}
            <div className="rounded-xl overflow-hidden border border-slate-200 h-[200px] shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7!2d-79.49!3d9.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMzYuMCJOIDc5wrAyOScyNC4wIlc!5e0!3m2!1ses!2spa!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Rojas Barbera Diesel"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
