import './Services.css'

const services = [
  {
    name: 'Limpieza facial profunda',
    tag: 'Piel luminosa',
    duration: '75 min',
    price: 'Desde $950',
    description:
      'Diagnostico breve, vapor, extraccion cuidadosa, mascarilla calmante e hidratacion final para piel mas limpia y descansada.',
  },
  {
    name: 'Diseno de ceja',
    tag: 'Arquitectura',
    duration: '35 min',
    price: 'Desde $420',
    description:
      'Mapeo segun tu rostro, depilacion precisa y acabado natural para ordenar la mirada sin endurecer tus facciones.',
  },
  {
    name: 'Laminado de cejas',
    tag: 'Efecto pulido',
    duration: '50 min',
    price: 'Desde $690',
    description:
      'Peinado semipermanente para cejas rebeldes o poco definidas, con nutricion y styling de acabado suave.',
  },
  {
    name: 'Lash lifting',
    tag: 'Pestana natural',
    duration: '60 min',
    price: 'Desde $780',
    description:
      'Eleva y curva tus pestanas naturales sin extensiones, ideal para una rutina de maquillaje mas ligera.',
  },
  {
    name: 'Corte + styling',
    tag: 'Cabello',
    duration: '70 min',
    price: 'Desde $620',
    description:
      'Corte con asesoria de forma, secado y movimiento final para que el cabello caiga bien tambien al dia siguiente.',
  },
  {
    name: 'Ritual capilar reparador',
    tag: 'Tratamiento',
    duration: '60 min',
    price: 'Desde $850',
    description:
      'Tratamiento nutritivo para cabello seco, procesado o con frizz, con masaje capilar y sellado ligero.',
  },
  {
    name: 'Maquillaje social natural',
    tag: 'Evento',
    duration: '70 min',
    price: 'Desde $1,100',
    description:
      'Piel fresca, mirada definida y acabado fotografiable para brunch, cena, graduacion o evento de dia.',
  },
]

function Services() {
  const [featuredService, ...regularServices] = services

  return (
    <section id="servicios" className="salon-services">
      <div className="salon-services-shell">
        <div className="salon-services-heading">
          <div>
            <p>Servicios destacados</p>
            <h2>Una agenda para verte fresca, pulida y natural.</h2>
          </div>
          <span>
            Seleccionamos rituales que resuelven piel, cejas, pestanas y cabello
            sin convertir tu cita en una produccion pesada.
          </span>
        </div>

        <div className="salon-services-layout">
          <article className="salon-service-feature">
            <span className="salon-service-tag">{featuredService.tag}</span>
            <h3>{featuredService.name}</h3>
            <p>{featuredService.description}</p>
            <div className="salon-service-meta">
              <span>{featuredService.duration}</span>
              <strong>{featuredService.price}</strong>
            </div>
          </article>

          <div className="salon-services-grid">
            {regularServices.map((service) => (
              <article key={service.name} className="salon-service-card">
                <div>
                  <span className="salon-service-tag">{service.tag}</span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="salon-service-meta">
                  <span>{service.duration}</span>
                  <strong>{service.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="salon-services-footer">
          <p>
            Cada cita incluye una mini asesoria para elegir intensidad, acabado
            y cuidados posteriores.
          </p>
          <a className="salon-mobile-call" href="tel:+526621234567">
            Agendar por telefono
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
