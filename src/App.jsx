import './App.css'
import './normalize.css'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fff7f3] pt-28" id="inicio">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c46c62]">
            Salon landing
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold text-[#261b1a]">
            Tu estetica empieza con una primera impresion impecable.
          </h1>
        </section>
      </main>
    </>
  )
}

export default App
