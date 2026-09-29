import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function ProjectCollection({ onNavigate, featuredTitle = 'Featured Work', variant = 'home' }) {
  const [openProjectId, setOpenProjectId] = useState(null)
  const isWork = variant === 'work'
  const featured = projects.filter((project) => project.featured)
  const additional = projects.filter((project) => !project.featured)

  function renderProject(project, index, compact = false) {
    return (
      <ProjectCard
        key={project.id}
        project={project}
        onNavigate={onNavigate}
        compact={compact}
        variant={variant}
        number={index + 1}
        expanded={openProjectId === project.id}
        onToggle={() => setOpenProjectId((current) => current === project.id ? null : project.id)}
      />
    )
  }

  return (
    <div className={`container work-collection${isWork ? ' snapshot-collection' : ''}`}>
      <section aria-labelledby="featured-work-heading">
        <h2 id="featured-work-heading">{featuredTitle}</h2>
        <div className={isWork ? 'snapshot-featured-grid' : 'project-grid'}>
          {featured.map((project, index) => renderProject(project, index))}
        </div>
      </section>
      <section className="additional-work" aria-labelledby="additional-work-heading">
        <h2 id="additional-work-heading">Additional Work</h2>
        <div className={isWork ? 'snapshot-additional-grid' : 'project-grid'}>
          {additional.map((project, index) => renderProject(project, index + featured.length, true))}
        </div>
      </section>
    </div>
  )
}
