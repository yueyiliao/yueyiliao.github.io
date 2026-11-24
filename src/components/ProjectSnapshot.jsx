import ExpandableProjectSnapshot from './ExpandableProjectSnapshot.jsx'
import SiteLink from './SiteLink.jsx'
import './ProjectSnapshot.css'

export default function ProjectSnapshot({ project, expanded = false, onToggle, number, onNavigate }) {
  const snapshot = project.snapshot
  const hasSnapshot = Boolean(snapshot.disclosure || snapshot.evidence)
  const hasCaseStudy = project.caseStudyStatus === 'available' && project.path
  const panelId = `snapshot-${project.id}`

  return (
    <article id={`project-${project.id}`} className="snapshot-card">
      <div className="snapshot-copy">
        <p className="snapshot-type"><span aria-hidden="true">{String(number).padStart(2, '0')}</span>{snapshot.type}</p>
        <h3>{snapshot.title}</h3>
        {snapshot.subtitle && <p className="snapshot-subtitle">{snapshot.subtitle}</p>}
        {project.topic && <p className="snapshot-subtitle">{project.topic}</p>}
        <p className="snapshot-positioning">{snapshot.positioning}</p>
        <p className="snapshot-description">{snapshot.hook ?? project.summary}</p>
      </div>

      <div className="snapshot-card-actions">
        {hasSnapshot && (
          <button className="snapshot-cta" type="button" aria-expanded={expanded} aria-controls={panelId} onClick={onToggle}>
            {expanded ? 'Collapse Snapshot' : 'View Project Snapshot'}
            <svg className="snapshot-cta-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={expanded ? 'm4 10 4-4 4 4' : 'm4 6 4 4 4-4'} />
            </svg>
          </button>
        )}
        {hasCaseStudy && (
          <SiteLink className="snapshot-cta" href={project.path} onNavigate={onNavigate} aria-label={`View case study for ${snapshot.title}`}>
            View Case Study
            <svg className="snapshot-cta-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 11.5l7-7m-6 0h6v6" />
            </svg>
          </SiteLink>
        )}
      </div>

      {hasSnapshot && <ExpandableProjectSnapshot id={panelId} snapshot={snapshot} expanded={expanded} />}
    </article>
  )
}
