import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import CatFeedingCalculatorPage from './pages/projects/CatFeedingCalculatorPage.jsx'
import WebServesPage from './pages/projects/WebServesPage.jsx'
import MobileIdentityPage from './pages/projects/MobileIdentityPage.jsx'
import './App.css'

const routes = {
  '/': 'home',
  '/about': 'home',
  '/projects': 'home',
  '/projects/webserves': 'project-webserves',
  '/projects/mobile-identity': 'project-mobile-identity',
  '/contact': 'home',
  '/project-cfc': 'project-cfc',
  '/Project_CFC': 'project-cfc',
  '/project_cfc': 'project-cfc',
}

const navLinks = [
  { path: '/#about-me', label: 'About me' },
  { path: '/#work', label: 'Work' },
  { path: '/#contact', label: 'Contact' },
]

const pageTitles = {
  home: 'About me — Yueyi Liao | Project Management Portfolio',
  'project-cfc': 'Cat Feeding Calculator — Yueyi Liao | Cat Feeding Calculator',
  'project-webserves': 'Yueyi Liao | WebServes Website Update',
  'project-mobile-identity': 'Yueyi Liao | NYU Mobile Identity Rollout',
}

function getPageFromPath(pathname) {
  return routes[pathname] ?? 'home'
}

function getSectionFromLocation(location) {
  const [pathname, hash] = location.split('#')
  return hash || ({ '/projects': 'work', '/contact': 'contact' }[pathname]) || 'about-me'
}

function scrollToSection(location) {
  const section = document.getElementById(getSectionFromLocation(location))
  if (section) section.scrollIntoView({ behavior: 'instant', block: 'start' })
  else window.scrollTo({ top: 0, behavior: 'instant' })
}

function App() {
  const [location, setLocation] = useState(() => window.location.pathname + window.location.hash)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about-me')
  const page = getPageFromPath(location.split('#')[0])

  useEffect(() => {
    document.title = pageTitles[page]
    const frame = window.requestAnimationFrame(() => scrollToSection(location))
    return () => window.cancelAnimationFrame(frame)
  }, [page, location])

  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(window.location.pathname + window.location.hash)
      setMenuOpen(false)
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
    }
  }, [])

  useEffect(() => {
    if (page !== 'home') return
    const updateActiveSection = () => {
      const headerHeight = document.querySelector('.site-header').offsetHeight
      const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      const current = atPageEnd ? 'contact' : ['contact', 'work', 'about-me'].find((id) =>
        document.getElementById(id).getBoundingClientRect().top <= headerHeight + 100
      )
      setActiveSection(current || 'about-me')
    }
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [page])

  function navigate(path) {
    window.history.pushState({}, '', path)
    setLocation(path)
    setMenuOpen(false)
    if (path === location) {
      window.requestAnimationFrame(() => scrollToSection(path))
    }
  }

  return (
    <div className="site-shell">
      <Navbar
        links={navLinks.map((link) => ({
          ...link,
          isActive:
            (page === 'home' && link.path === `/#${activeSection}`) ||
            (page.startsWith('project-') && link.path === '/#work'),
        }))}
        menuOpen={menuOpen}
        onNavigate={navigate}
        onToggleMenu={() => setMenuOpen((isOpen) => !isOpen)}
      />
      <main>
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'project-cfc' && <CatFeedingCalculatorPage onNavigate={navigate} />}
        {page === 'project-webserves' && <WebServesPage onNavigate={navigate} />}
        {page === 'project-mobile-identity' && <MobileIdentityPage onNavigate={navigate} />}
      </main>
    </div>
  )
}

export default App
