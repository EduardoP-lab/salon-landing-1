import './App.css'
import './normalize.css'
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
      </main>
    </>
  )
}

export default App
