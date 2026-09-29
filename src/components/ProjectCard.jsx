import ProjectSnapshot from './ProjectSnapshot.jsx'

export default function ProjectCard({ project, onNavigate, compact = false, variant = 'home', expanded, onToggle, number }) {
  if (variant === 'work') {
    return <ProjectSnapshot project={project} compact={compact} expanded={expanded} onToggle={onToggle} number={number} />
  }

  return (
    <article className={`project-card${compact ? ' project-card-compact' : ''}${!project.image ? ' project-card-text' : ''}`}>
      <div className="project-card-content">
        <p className="project-context">{project.contextLabels.join(' · ')}</p>
        <div className="project-card-heading">
          <h3>{project.title}</h3>
          {project.image && compact && (
            <img className="project-thumbnail" src={project.image} alt={project.imageAlt} />
          )}
        </div>
        <p className="project-category">{project.tags.join(' · ')}</p>
        {project.summary && <p>{project.summary}</p>}
        {project.caseStudyStatus === 'available' && project.path ? (
          <button type="button" onClick={() => onNavigate(project.path)}>
            Open project
          </button>
        ) : (
          <p className="project-status">CASE STUDY IN DEVELOPMENT</p>
        )}
      </div>
      {project.image && !compact && (
        <div className="project-visual">
          <img src={project.image} alt={project.imageAlt} />
        </div>
      )}
    </article>
  )
}
