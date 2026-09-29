import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import CatFeedingCalculatorPage from './pages/projects/CatFeedingCalculatorPage.jsx'
import WebServesPage from './pages/projects/WebServesPage.jsx'
import MobileIdentityPage from './pages/projects/MobileIdentityPage.jsx'
import './App.css'

const routes = {
  '/': 'home',
  '/about': 'about',
  '/projects': 'projects',
  '/projects/webserves': 'project-webserves',
  '/projects/mobile-identity': 'project-mobile-identity',
  '/contact': 'contact',
  '/project-cfc': 'project-cfc',
  '/Project_CFC': 'project-cfc',
  '/project_cfc': 'project-cfc',
}

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Work' },
  { path: '/contact', label: 'Contact' },
]

const pageTitles = {
  home: 'Home — Yueyi Liao | Project Management Portfolio',
  about: 'About — Yueyi Liao | About',
  projects: 'Work — Yueyi Liao | Selected Work',
  contact: 'Contact — Yueyi Liao | Contact',
  'project-cfc': 'Cat Feeding Calculator — Yueyi Liao | Cat Feeding Calculator',
  'project-webserves': 'Yueyi Liao | WebServes Website Update',
  'project-mobile-identity': 'Yueyi Liao | NYU Mobile Identity Rollout',
}

function getPageFromPath(pathname) {
  return routes[pathname] ?? 'about'
}

function App() {
  const [page, setPage] = useState(() => getPageFromPath(window.location.pathname))
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.title = pageTitles[page]
  }, [page])

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromPath(window.location.pathname))
      setMenuOpen(false)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(path) {
    window.history.pushState({}, '', path)
    setPage(getPageFromPath(path))
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <Navbar
        links={navLinks.map((link) => ({
          ...link,
          isActive:
            routes[link.path] === page ||
            (page.startsWith('project-') && link.path === '/projects'),
        }))}
        menuOpen={menuOpen}
        onNavigate={navigate}
        onToggleMenu={() => setMenuOpen((isOpen) => !isOpen)}
      />
      <main>
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'about' && <AboutPage />}
        {page === 'projects' && <ProjectsPage onNavigate={navigate} />}
        {page === 'contact' && <ContactPage />}
        {page === 'project-cfc' && <CatFeedingCalculatorPage onNavigate={navigate} />}
        {page === 'project-webserves' && <WebServesPage onNavigate={navigate} />}
        {page === 'project-mobile-identity' && <MobileIdentityPage onNavigate={navigate} />}
      </main>
    </div>
  )
}

export default App
