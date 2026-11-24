import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import CatFeedingCalculatorPage from './pages/projects/CatFeedingCalculatorPage.jsx'
import MobileIdentityPage from './pages/projects/MobileIdentityPage.jsx'
import MarketplacePage from './pages/projects/MarketplacePage.jsx'
import { webServesSnapshotPath } from './data/projects.js'
import './App.css'

const routes = {
  '/': 'home',
  '/about': 'home',
  '/projects': 'work',
  '/projects/mobile-identity': 'project-mobile-identity',
  '/projects/second-hand-marketplace': 'project-second-hand-marketplace',
  '/contact': 'home',
  '/project-cfc': 'project-cfc',
  '/Project_CFC': 'project-cfc',
  '/project_cfc': 'project-cfc',
}

const navLinks = [
  { path: '/#about-me', label: 'About' },
  { path: '/projects', label: 'Work' },
  { path: '/#contact', label: 'Contact' },
]

const pageTitles = {
  home: 'About me — Yueyi Liao | Project Management Portfolio',
  work: 'Work — Yueyi Liao | Project Management Portfolio',
  'project-cfc': 'Cat Feeding Calculator — Yueyi Liao | Cat Feeding Calculator',
  'project-mobile-identity': 'NYU Tap and Go (Mobile Credential) Rollout — Yueyi Liao',
  'project-second-hand-marketplace': 'Second-Hand Marketplace Rollout — Yueyi Liao',
}

function resolveLocation(location) {
  const [pathname] = location.split('#')
  return pathname.replace(/\/$/, '') === '/projects/webserves' ? webServesSnapshotPath : location
}

function getPageFromLocation(location) {
  if (location === '/#work') return 'work'
  const [pathname] = location.split('#')
  return routes[pathname] ?? 'home'
}

function getSectionFromLocation(location) {
  const [pathname, hash] = location.split('#')
  if (pathname === '/projects' || location === '/#work') return hash
  return hash || (pathname === '/contact' ? 'contact' : 'about-me')
}

function scrollToSection(location) {
  const section = document.getElementById(getSectionFromLocation(location))
  if (section) section.scrollIntoView({ behavior: 'instant', block: 'start' })
  else window.scrollTo({ top: 0, behavior: 'instant' })
}

function App() {
  const [location, setLocation] = useState(() => window.location.pathname + window.location.hash)
  const [activeSection, setActiveSection] = useState('about-me')
  const resolvedLocation = resolveLocation(location)
  const page = getPageFromLocation(resolvedLocation)
  const snapshotId = page === 'work' && resolvedLocation.split('#')[1]?.match(/^project-(.+)$/)?.[1]

  useEffect(() => {
    if (resolvedLocation !== location) window.history.replaceState(window.history.state, '', resolvedLocation)
    document.title = pageTitles[page]
    const frame = window.requestAnimationFrame(() => scrollToSection(resolvedLocation))
    return () => window.cancelAnimationFrame(frame)
  }, [page, location, resolvedLocation])

  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(window.location.pathname + window.location.hash)
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
      const nearContact = document.getElementById('contact').getBoundingClientRect().top <= headerHeight + 100
      setActiveSection(atPageEnd || nearContact ? 'contact' : 'about-me')
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
    const destination = resolveLocation(path)
    window.history.pushState({}, '', destination)
    setLocation(destination)
    if (destination === location) {
      window.requestAnimationFrame(() => scrollToSection(destination))
    }
  }

  return (
    <div className="site-shell">
      <Navbar
        links={navLinks.map((link) => ({
          ...link,
          isActive:
            (page === 'home' && link.path === `/#${activeSection}`) ||
            ((page === 'work' || page.startsWith('project-')) && link.path === '/projects'),
        }))}
        onNavigate={navigate}
      />
      <main>
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'work' && <ProjectsPage snapshotId={snapshotId} onNavigate={navigate} />}
        {page === 'project-cfc' && <CatFeedingCalculatorPage onNavigate={navigate} />}
        {page === 'project-mobile-identity' && <MobileIdentityPage onNavigate={navigate} />}
        {page === 'project-second-hand-marketplace' && <MarketplacePage onNavigate={navigate} />}
      </main>
    </div>
  )
}

export default App
