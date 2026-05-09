import { useMemo, useState } from 'react'
import './Contact.css'

const studioPhone = '526621234567'
const studioLocation = {
  label: 'Aurora Studio',
  area: 'Col. Pitic, Hermosillo, Sonora',
  address: 'Blvd. Kino 315, local 4',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=29.0729%2C-110.9559',
  embedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-110.9730%2C29.0610%2C-110.9390%2C29.0840&layer=mapnik&marker=29.0729%2C-110.9559',
}

const contactDetails = [
  { label: 'Horario', value: 'Lun - Sab / 9:00 am - 7:00 pm' },
  { label: 'Telefono', value: '+52 662 123 4567' },
  { label: 'Zona', value: studioLocation.area },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const messageLength = formData.message.trim().length
  const isReady = useMemo(
    () =>
      formData.name.trim() &&
      formData.phone.trim().length >= 8 &&
      messageLength >= 8,
    [formData.name, formData.phone, messageLength],
  )

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
    setStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!isReady) {
      setStatus('Completa los tres campos para preparar tu mensaje.')
      return
    }

    const text = [
      'Hola Aurora Studio, quiero agendar una cita.',
      `Nombre: ${formData.name.trim()}`,
      `Celular: ${formData.phone.trim()}`,
      `Mensaje: ${formData.message.trim()}`,
    ].join('\n')

    window.open(
      `https://wa.me/${studioPhone}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setStatus('Mensaje listo. Se abrira WhatsApp para enviarlo.')
  }

  return (
    <section id="contacto" className="salon-contact">
      <div className="salon-contact-shell">
        <div className="salon-contact-heading">
          <div>
            <p>Contacto</p>
            <h2>Reserva sin vueltas, llegamos al punto.</h2>
          </div>
          <span>
            Escribenos que servicio tienes en mente, tu disponibilidad y si hay
            algo importante sobre tu piel, cejas o cabello.
          </span>
        </div>

        <div className="salon-contact-layout">
          <form className="salon-contact-form" onSubmit={handleSubmit}>
            <div className="salon-contact-form-top">
              <p>Nueva cita</p>
              <h3>Cuentalo simple, lo aterrizamos contigo.</h3>
            </div>

            <label className="salon-contact-field">
              <span>Nombre</span>
              <input
                name="name"
                type="text"
                value={formData.name}
                autoComplete="name"
                placeholder="Tu nombre"
                required
                onChange={handleChange}
              />
            </label>

            <label className="salon-contact-field">
              <span>Celular</span>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                autoComplete="tel"
                inputMode="tel"
                placeholder="+52 662 000 0000"
                required
                onChange={handleChange}
              />
            </label>

            <label className="salon-contact-field">
              <span>Mensaje</span>
              <textarea
                name="message"
                value={formData.message}
                placeholder="Quiero una limpieza facial esta semana..."
                rows="6"
                required
                onChange={handleChange}
              />
            </label>

            <div className="salon-contact-actions">
              <p>{messageLength}/240 caracteres utiles</p>
              <button type="submit" disabled={!isReady}>
                Enviar por WhatsApp
              </button>
            </div>

            <span className="salon-contact-status" role="status">
              {status}
            </span>
          </form>

          <aside className="salon-contact-map" aria-label="Ubicacion del estudio">
            <div className="salon-contact-map-frame">
              <iframe
                title="Mapa de Aurora Studio en Hermosillo"
                src={studioLocation.embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="salon-contact-map-card">
              <span>Ubicacion</span>
              <h3>{studioLocation.label}</h3>
              <p>{studioLocation.address}</p>
              <p>{studioLocation.area}</p>

              <dl className="salon-contact-details">
                {contactDetails.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="salon-contact-map-actions">
                <a href={studioLocation.mapUrl} target="_blank" rel="noreferrer">
                  Abrir mapa
                </a>
                <a className="salon-contact-call-action" href={`tel:+${studioPhone}`}>
                  Llamar
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Contact
