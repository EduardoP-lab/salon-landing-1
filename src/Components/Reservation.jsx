import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './Reservation.css'

const studioPhone = '526621234567'

const services = [
  'Limpieza facial profunda',
  'Diseno de ceja',
  'Laminado de cejas',
  'Lash lifting',
  'Corte + styling',
  'Ritual capilar reparador',
  'Maquillaje social natural',
]

const timeSlots = [
  '09:00 am',
  '10:30 am',
  '12:00 pm',
  '01:30 pm',
  '04:00 pm',
  '05:30 pm',
  '07:00 pm',
]

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  })
  const [status, setStatus] = useState('')

  const today = new Date().toISOString().split('T')[0]
  const isReady = useMemo(
    () =>
      formData.name.trim() &&
      formData.phone.trim().length >= 8 &&
      formData.service &&
      formData.date &&
      formData.time,
    [formData],
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
      setStatus('Completa los campos principales para preparar tu reserva.')
      return
    }

    const text = [
      'Hola Aurora Studio, quiero reservar una cita.',
      `Nombre: ${formData.name.trim()}`,
      `Celular: ${formData.phone.trim()}`,
      `Servicio: ${formData.service}`,
      `Fecha: ${formData.date}`,
      `Hora ideal: ${formData.time}`,
      `Notas: ${formData.notes.trim() || 'Sin notas adicionales'}`,
    ].join('\n')

    window.open(
      `https://wa.me/${studioPhone}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setStatus('Solicitud lista. Confirma el envio en WhatsApp.')
  }

  return (
    <section className="salon-reservation">
      <div className="salon-reservation-shell">
        <div className="salon-reservation-heading">
          <h1>Agenda tu cita con calma, salimos con plan.</h1>
          <p>Reserva</p>
          <span>
            Elige servicio, fecha tentativa y hora ideal. Te confirmamos
            disponibilidad por WhatsApp antes de cerrar la cita.
          </span>
        </div>

        <div className="salon-reservation-layout">
          <form className="salon-reservation-form" onSubmit={handleSubmit}>
            <div className="salon-reservation-form-grid">
              <label className="salon-reservation-field">
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

              <label className="salon-reservation-field">
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

              <label className="salon-reservation-field">
                <span>Servicio</span>
                <select
                  name="service"
                  value={formData.service}
                  required
                  onChange={handleChange}
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label className="salon-reservation-field">
                <span>Fecha</span>
                <input
                  name="date"
                  type="date"
                  value={formData.date}
                  min={today}
                  required
                  onChange={handleChange}
                />
              </label>

              <label className="salon-reservation-field">
                <span>Hora ideal</span>
                <select
                  name="time"
                  value={formData.time}
                  required
                  onChange={handleChange}
                >
                  <option value="">Elige horario</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </label>

              <label className="salon-reservation-field is-wide">
                <span>Notas</span>
                <textarea
                  name="notes"
                  value={formData.notes}
                  rows="6"
                  placeholder="Cuidados, alergias, evento, estilo o dudas..."
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="salon-reservation-actions">
              <Link to="/#servicios">Ver servicios</Link>
              <button type="submit" disabled={!isReady}>
                Solicitar reserva
              </button>
            </div>

            <span className="salon-reservation-status" role="status">
              {status}
            </span>
          </form>

          <aside className="salon-reservation-panel">
            <p>Como funciona</p>
            <h2>Tu cita queda prearmada en menos de un minuto.</h2>
            <ul>
              <li>
                <span>01</span>
                <strong>Mandas tu solicitud con servicio, fecha y hora.</strong>
              </li>
              <li>
                <span>02</span>
                <strong>Revisamos agenda y duracion del servicio.</strong>
              </li>
              <li>
                <span>03</span>
                <strong>Confirmamos por WhatsApp y te damos indicaciones.</strong>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Reservation
