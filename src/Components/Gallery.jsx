import browsImage from '../assets/salon-gallery-brows.png'
import facialImage from '../assets/salon-gallery-facial.png'
import hairImage from '../assets/salon-gallery-hair.png'
import makeupImage from '../assets/salon-gallery-makeup.png'
import './Gallery.css'

const galleryMoments = [
  {
    image: facialImage,
    title: 'Piel espejo',
    service: 'Facial profundo',
    note: 'Textura limpia, luz pareja y acabado sin pesadez.',
    metric: 'Glow',
    position: '48% 42%',
    tone: '#e9a098',
    className: 'is-hero',
  },
  {
    image: browsImage,
    title: 'Cejas pulidas',
    service: 'Diseno + laminado',
    note: 'Marco suave para levantar la mirada sin endurecerla.',
    metric: 'Lineas',
    position: '58% 42%',
    tone: '#d8b36c',
    className: 'is-tall',
  },
  {
    image: hairImage,
    title: 'Cabello vivo',
    service: 'Corte + styling',
    note: 'Movimiento natural, brillo y forma facil de mantener.',
    metric: 'Shape',
    position: '52% 48%',
    tone: '#607164',
    className: 'is-wide',
  },
  {
    image: makeupImage,
    title: 'Makeup fresco',
    service: 'Evento de dia',
    note: 'Piel luminosa y mirada definida para foto y vida real.',
    metric: 'Soft',
    position: '54% 44%',
    tone: '#c46c62',
    className: 'is-compact',
  },
]

const processShots = ['Diagnostico', 'Preparacion', 'Tecnica', 'Sellado']

function Gallery() {
  return (
    <section id="galeria" className="salon-gallery">
      <div className="salon-gallery-ambient" aria-hidden="true" />

      <div className="salon-gallery-shell">
        <div className="salon-gallery-heading">
          <div>
            <p>Galeria</p>
            <h2>Antes de salir, la luz ya sabe que paso algo.</h2>
          </div>
          <span>
            Una mirada editorial al resultado: piel descansada, cejas limpias,
            cabello con forma y maquillaje que respira.
          </span>
        </div>

        <div className="salon-gallery-stage" aria-label="Galeria de resultados">
          <div className="salon-gallery-marquee" aria-hidden="true">
            <span>Aurora lookbook</span>
            <span>Aurora lookbook</span>
            <span>Aurora lookbook</span>
          </div>

          <div className="salon-gallery-grid">
            {galleryMoments.map((item, index) => (
              <article
                key={item.title}
                className={`salon-gallery-card ${item.className}`}
                style={{
                  '--gallery-tone': item.tone,
                  '--gallery-position': item.position,
                }}
              >
                <img src={item.image} alt={`${item.service}: ${item.title}`} />
                <div className="salon-gallery-card-shade" aria-hidden="true" />

                <div className="salon-gallery-card-top">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item.metric}</strong>
                </div>

                <div className="salon-gallery-card-copy">
                  <p>{item.service}</p>
                  <h3>{item.title}</h3>
                  <span>{item.note}</span>
                </div>
              </article>
            ))}
          </div>

          <aside className="salon-gallery-strip" aria-label="Proceso visual">
            <div>
              <p>Ritual visual</p>
              <h3>La foto final empieza en el diagnostico.</h3>
            </div>

            <ol>
              {processShots.map((shot) => (
                <li key={shot}>
                  <span>{shot}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <div className="salon-gallery-footer">
          <p>
            Cada resultado depende de tu punto de partida, pero la intencion es
            constante: verte cuidada, fresca y completamente tu.
          </p>
          <a href="#reservar">Quiero este mood</a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
