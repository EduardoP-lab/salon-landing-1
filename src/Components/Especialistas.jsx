import './Especialistas.css'

const specialists = [
  {
    initials: 'VM',
    name: 'Valeria Montes',
    role: 'Cosmetologa facial',
    focus: 'Piel sensible, limpieza profunda y glow natural',
    experience: '8 años',
    detail:
      'Trabaja con diagnostico visual, extracciones cuidadosas y protocolos calmantes para mejorar textura sin irritar la piel.',
  },
  {
    initials: 'RA',
    name: 'Renata Ayala',
    role: 'Brow & lash artist',
    focus: 'Diseno de ceja, laminado y lash lifting',
    experience: '6 años',
    detail:
      'Especialista en proporciones suaves: define la mirada respetando el crecimiento natural y la expresion de cada rostro.',
  },
  {
    initials: 'CR',
    name: 'Camila Rios',
    role: 'Hair stylist',
    focus: 'Corte, styling y tratamientos reparadores',
    experience: '9 años',
    detail:
      'Crea cortes faciles de peinar y acabados con movimiento, pensados para que el cabello se vea bien fuera del salon.',
  },
  {
    initials: 'SB',
    name: 'Sofia Beltran',
    role: 'Makeup artist',
    focus: 'Maquillaje social fresco y fotografiable',
    experience: '7 años',
    detail:
      'Construye piel luminosa y miradas definidas con tecnica ligera, ideal para eventos de dia, cenas y graduaciones.',
  },
]

const trustItems = [
  { value: '4', label: 'especialistas senior' },
  { value: '30+', label: 'protocolos activos' },
  { value: '1:1', label: 'asesoria por cita' },
]

function Especialistas() {
  return (
    <section id="especialistas" className="salon-specialists">
      <div className="salon-specialists-shell">
        <div className="salon-specialists-heading">
          <div>
            <p>Especialistas</p>
            <h2>Manos expertas, criterio estetico y trato cercano.</h2>
          </div>
          <span>
            Cada servicio se asigna segun tecnica, tipo de piel, estilo de vida
            y el acabado que quieres mantener en tu rutina.
          </span>
        </div>

        <div className="salon-specialists-board">
          <div className="salon-specialists-roster">
            {specialists.map((specialist, index) => (
              <article key={specialist.name} className="salon-specialist-row">
                <span className="salon-specialist-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="salon-specialist-id">
                  <span className="salon-specialist-avatar" aria-hidden="true">
                    {specialist.initials}
                  </span>
                  <div>
                    <h3>{specialist.name}</h3>
                    <p>{specialist.role}</p>
                  </div>
                </div>

                <div className="salon-specialist-focus">
                  <span>Foco</span>
                  <strong>{specialist.focus}</strong>
                </div>

                <p className="salon-specialist-detail">{specialist.detail}</p>

                <div className="salon-specialist-years">
                  <span>Exp.</span>
                  <strong>{specialist.experience}</strong>
                </div>
              </article>
            ))}
          </div>

          <aside className="salon-specialists-panel" aria-label="Metodo del estudio">
            <p>Metodo Aurora</p>
            <h3>Primero entendemos tu punto de partida.</h3>
            <span>
              Antes de tocar piel, ceja o cabello revisamos sensibilidad,
              mantenimiento realista y objetivo visual. La idea es que salgas
              mejor, no distinta.
            </span>

            <dl className="salon-specialists-trust">
              {trustItems.map((item) => (
                <div key={item.label}>
                  <dt>{item.value}</dt>
                  <dd>{item.label}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="salon-specialists-footer">
          <p>
            Si no sabes con quien reservar, te recomendamos especialista segun
            servicio y disponibilidad.
          </p>
          <a href="tel:+526621234567">Pedir recomendacion</a>
        </div>
      </div>
    </section>
  )
}

export default Especialistas
