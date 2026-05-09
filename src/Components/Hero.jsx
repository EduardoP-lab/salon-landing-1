import { Link } from 'react-router-dom'
import heroImage from '../assets/salon-hero-boutique-v2.png'
import './Hero.css'

const quickDetails = [
  { label: 'Especialidad', value: 'Piel, cejas y cabello' },
  { label: 'Ambiente', value: 'Privado y tranquilo' },
  { label: 'Agenda', value: 'Citas por telefono' },
]

function Hero() {
  return (
    <section
      id="inicio"
      className="salon-hero"
      style={{ '--hero-image': `url(${heroImage})` }}
    >
      <div className="salon-hero-bg" aria-hidden="true" />
      <div className="salon-hero-overlay" aria-hidden="true" />

      <div className="salon-hero-layout">
        <div className="salon-hero-topline" aria-label="Datos del estudio">
          <span>Hermosillo</span>
          <span>Estudio boutique</span>
        </div>

        <div className="salon-hero-main">
          <p className="salon-hero-kicker">Belleza consciente</p>
          <h1 className="salon-hero-title">Aurora Studio</h1>
          <p className="salon-hero-copy">
            Tratamientos de belleza para verte luminosa, descansada y natural
            sin salir de tu estilo.
          </p>

          <div className="salon-hero-actions">
            <Link to="/reservar" className="salon-hero-primary">
              Reservar cita
            </Link>
            <a href="#servicios" className="salon-hero-secondary">
              Explorar servicios
            </a>
          </div>
        </div>

        <dl id="reservar" className="salon-hero-details">
          {quickDetails.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
