import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navItems = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Especialistas', href: '/#especialistas' },
  { label: 'Galeria', href: '/#galeria' },
  { label: 'Contacto', href: '/#contacto' },
]

function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeHref =
    location.pathname === '/' ? `/${location.hash || '#inicio'}` : location.pathname

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('scrollBlock', isOpen)

    return () => document.body.classList.remove('scrollBlock')
  }, [isOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`salon-navbar fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8 ${
        isScrolled ? 'is-scrolled' : ''
      }`}
    >
      <nav
        className="salon-nav-shell mx-auto flex max-w-7xl items-center justify-between rounded-[1.75rem] px-4 py-3 text-sm text-[#261b1a] sm:px-5 lg:px-6"
        aria-label="Navegacion principal"
      >
        <Link
          to="/#inicio"
          onClick={handleNavClick}
          className="group flex min-w-0 items-center gap-3"
          aria-label="Estetica Aurora, inicio"
        >
          <span className="salon-brand-mark relative grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-[0.78rem] font-semibold text-white">
            EA
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate text-base font-semibold tracking-[0.04em] text-[#261b1a]">
              Estetica Aurora
            </span>
            <span className="mt-1 block truncate text-xs font-medium text-[#8a7168]">
              Belleza consciente
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={handleNavClick}
              className={`salon-nav-link rounded-full px-4 py-3 font-medium ${
                location.pathname === '/' && activeHref === item.href
                  ? 'is-active'
                  : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/reservar"
            onClick={handleNavClick}
            className="salon-cta rounded-full bg-[#c46c62] px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#b85e55]"
          >
            Reservar cita
          </Link>
        </div>

        <button
          type="button"
          className={`salon-menu-button relative z-10 grid h-11 w-11 place-items-center rounded-2xl border border-[#ddc9c2] bg-white/70 text-[#261b1a] shadow-sm transition hover:border-[#c46c62] lg:hidden ${
            isOpen ? 'is-open' : ''
          }`}
          aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="flex flex-col items-center gap-1">
            <span className="salon-menu-line" />
            <span className="salon-menu-line" />
            <span className="salon-menu-line" />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`salon-mobile-panel mx-auto mt-3 max-w-7xl rounded-[1.6rem] border border-[#e6d4cd] bg-[#fffaf8]/95 p-3 shadow-2xl shadow-[#56394a]/10 backdrop-blur-2xl lg:hidden ${
          isOpen ? 'is-open' : 'is-closed'
        }`}
      >
        <div className="grid gap-1">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={handleNavClick}
              className={`salon-mobile-link flex items-center justify-between rounded-2xl px-4 py-4 text-base font-semibold text-[#725f59] ${
                location.pathname === '/' && activeHref === item.href
                  ? 'is-active'
                  : ''
              }`}
              style={{ '--item-index': index }}
            >
              <span>{item.label}</span>
              <span aria-hidden="true" className="text-[#c46c62]">
                +
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3 border-t border-[#eadbd6] pt-3">
          <a
            href="tel:+526621234567"
            className="min-h-12 flex justify-center items-center rounded-2xl border border-[#ddc9c2] px-3 text-sm font-semibold text-[#56394a]"
          >
            Llamar
          </a>
          <Link
            to="/reservar"
            onClick={handleNavClick}
            className="salon-cta min-h-12 flex justify-center items-center rounded-2xl bg-[#c46c62] px-3 text-sm font-semibold text-black"
          >
            Reservar
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
