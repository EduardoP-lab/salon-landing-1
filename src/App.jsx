import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import './normalize.css'
import Contact from './Components/Contact'
import Especialistas from './Components/Especialistas'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Reservation from './Components/Reservation'
import Services from './Components/Services'

function ScrollToRoute() {
  const { hash, pathname } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    root.scrollTop = 0
    document.body.scrollTop = 0

    window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior
    })
  }, [hash, pathname])

  return null
}

function LandingPage() {
  return (
    <main>
      <Hero />
      <Services />
      <Especialistas />
      <Gallery />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <>
      <ScrollToRoute />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/reservar"
          element={
            <main>
              <Reservation />
            </main>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
