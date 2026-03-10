import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Instalaciones', href: '#instalaciones' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3 group">
            <img src="/logo.jpg" alt="Rojas Barbera Diesel" className="h-14 w-auto" />
            <span className={`hidden sm:inline font-['Lora'] italic font-bold text-blue-accent text-2xl leading-none tracking-tight`}>
              Rojas Barbera{' '}
              <span className={scrolled ? 'text-slate-800' : 'text-white'}>Diesel</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  scrolled
                    ? 'text-slate-500 hover:text-slate-900'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/50760701905"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-accent hover:bg-blue-light text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-accent/25"
            >
              Cotizar Ahora
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 ${scrolled ? 'text-slate-800' : 'text-white'}`}
            aria-label="Menu"
          >
            {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-slate-200"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-slate-600 hover:text-slate-900 transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/50760701905"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-accent text-white px-5 py-3 rounded-lg font-semibold mt-4"
              >
                Cotizar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
