import { Link } from 'react-router-dom'
import './Footer.css'

const footerLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Especialistas', href: '/#especialistas' },
  { label: 'Galeria', href: '/#galeria' },
  { label: 'Contacto', href: '/#contacto' },
]

const socialLinks = [
  {
    label: 'Instagram',
    handle: '@aurorastudio',
    href: 'https://www.instagram.com/aurorastudio',
  },
  {
    label: 'TikTok',
    handle: '@aurorastudio',
    href: 'https://www.tiktok.com/@aurorastudio',
  },
  {
    label: 'Facebook',
    handle: 'Aurora Studio',
    href: 'https://www.facebook.com/aurorastudio',
  },
]

function Footer() {
  return (
    <footer className="salon-footer">
      <div className="salon-footer-shell">
        <div className="salon-footer-main">
          <div className="salon-footer-brand">
            <Link
              to="/#inicio"
              className="salon-footer-logo"
              aria-label="Aurora Studio, inicio"
            >
              <span>EA</span>
              <strong>Estetica Aurora</strong>
            </Link>
            <p>
              Belleza consciente para piel, cejas, cabello y maquillaje con
              criterio estetico, calma y acabados naturales.
            </p>
          </div>

          <nav className="salon-footer-nav" aria-label="Navegacion del footer">
            <span>Explorar</span>
            {footerLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="salon-footer-social">
            <span>Redes sociales</span>
            <div className="salon-footer-social-list">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  <strong>{link.label}</strong>
                  <small>{link.handle}</small>
                </a>
              ))}
            </div>
          </div>

          <address className="salon-footer-address">
            <span>Visitanos</span>
            <p>Blvd. Kino 315, local 4</p>
            <p>Col. Pitic, Hermosillo, Sonora</p>
            <p>Lun - Sab / 9:00 am - 7:00 pm</p>
          </address>
        </div>

        <div className="salon-footer-bottom">
          <p>© 2026 Estetica Aurora. Todos los derechos reservados.</p>
          <Link to="/reservar">Agendar cita</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
