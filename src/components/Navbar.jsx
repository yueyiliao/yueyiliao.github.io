export default function Navbar({ links, menuOpen, onNavigate, onToggleMenu }) {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <button className="brand" type="button" onClick={() => onNavigate('/')}>
          UE.
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={onToggleMenu}
        >
          <span className="menu-toggle-bar"></span>
          <span className="menu-toggle-bar"></span>
          <span className="menu-toggle-bar"></span>
          <span className="sr-only">Toggle navigation</span>
        </button>

        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'is-open' : ''}`}
        >
          {links.map((link) => {
            const isActive = link.isActive

            return (
              <a
                key={link.path}
                className={`nav-link ${isActive ? 'is-active' : ''}`}
                href={link.path}
                aria-current={isActive ? 'location' : undefined}
                onClick={(event) => {
                  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
                  event.preventDefault()
                  onNavigate(link.path)
                }}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
