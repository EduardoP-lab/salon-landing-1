import './App.css'
import './normalize.css'
import Contact from './Components/Contact'
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
        <Contact />
      </main>
    </>
  )
}

export default App
