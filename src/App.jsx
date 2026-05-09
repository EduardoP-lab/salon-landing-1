import './App.css'
import './normalize.css'
import Especialistas from './Components/Especialistas'
import Gallery from './Components/Gallery'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Services from './Components/Services'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Especialistas />
        <Gallery />
      </main>
    </>
  )
}

export default App
