import { useEffect, useState } from 'react'
import ProjectCollection from '../components/ProjectCollection.jsx'

export default function ProjectsPage({ onNavigate }) {
  const [isTitleCompact, setIsTitleCompact] = useState(false)

  useEffect(() => {
    const updateTitleState = () => {
      setIsTitleCompact(window.scrollY > 24)
    }

    updateTitleState()
    window.addEventListener('scroll', updateTitleState, { passive: true })
    return () => window.removeEventListener('scroll', updateTitleState)
  }, [])

  return (
    <>
      <section className={`projects-title ${isTitleCompact ? 'is-compact' : ''}`}>
        <div className="container">
          <h1>Work</h1>
        </div>
      </section>

      <div className="content-section">
        <ProjectCollection onNavigate={onNavigate} variant="work" />
      </div>
    </>
  )
}
