import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'

const links = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Instalaciones', href: '#instalaciones' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Contacto', href: '#contacto' },
]

const socials = [
  { icon: FaWhatsapp, href: 'https://wa.me/50760701905', label: 'WhatsApp' },
  { icon: FaInstagram, href: 'https://www.instagram.com/RojasBarberaDiesel', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/company/rojas-barbera-diesel', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="Rojas Barbera Diesel" className="h-14 w-auto" />
              <span className="font-['Lora'] italic font-bold text-blue-accent text-2xl leading-none tracking-tight">
                Rojas Barbera{' '}
                <span className="text-white">Diesel</span>
              </span>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed mb-6">
              Especialistas en sistemas de inyección diésel de alta complejidad.
              Más de 60 años de experiencia, 3 generaciones dedicadas al oficio.
              22+ años en Panamá.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-steel-400 hover:text-white hover:border-blue-accent/40 transition-all"
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-[var(--font-heading)] text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Navegación
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-steel-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[var(--font-heading)] text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Contacto
            </h3>
            <div className="space-y-3 text-sm text-steel-400">
              <p>Av. José Agustín Arango</p>
              <p>Panamá, Provincia de Panamá</p>
              <p>
                <a href="tel:+50760701905" className="hover:text-white transition-colors">
                  6070-1905
                </a>
              </p>
              <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-steel-400 text-xs">
            &copy; {new Date().getFullYear()} Rojas Barbera Diesel. Todos los derechos reservados.
          </p>
          <p className="text-steel-400 text-xs">
            Desarrollado por{' '}
            <a
              href="https://axiomsais.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-accent hover:text-blue-light transition-colors"
            >
              Axiom Software & AI Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
