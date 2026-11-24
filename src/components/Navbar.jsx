import { resumePath } from '../data/resume.js'
import SiteLink from './SiteLink.jsx'

export default function Navbar({ links, onNavigate }) {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <SiteLink className="brand" href="/" onNavigate={onNavigate} aria-label="UE. Home">
          UE.
        </SiteLink>
        <div className="nav-links">
          {links.map(({ path, label, isActive }) => (
            <SiteLink
              key={path}
              className={`nav-link${isActive ? ' is-active' : ''}`}
              href={path}
              aria-current={isActive ? 'location' : undefined}
              onNavigate={onNavigate}
            >
              {label}
            </SiteLink>
          ))}
          <a className="nav-resume" href={resumePath} download>
            Resume <span aria-hidden="true">↓</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
