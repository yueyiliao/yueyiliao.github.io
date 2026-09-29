import SnapshotVisual from './SnapshotVisual.jsx'
import './ProjectSnapshot.css'

export default function ProjectSnapshot({ project, expanded = false, onToggle, compact = false, number }) {
  const snapshot = project.snapshot
  const panelId = `snapshot-${project.id}`

  return (
    <article className={`snapshot-card${compact ? ' snapshot-card-compact' : ''}${expanded ? ' is-expanded' : ''}`}>
      <button
        className="snapshot-toggle"
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        aria-label={`${expanded ? 'Show front of' : 'Show snapshot for'} ${snapshot.title}`}
        onClick={onToggle}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && expanded) {
            event.preventDefault()
            onToggle()
          }
        }}
      >
        <span className="snapshot-cue" aria-hidden="true">
          {!expanded && snapshot.frontCue ? snapshot.frontCue : (
            <>
              {expanded ? 'Back to project' : 'Flip for snapshot'}
              <span className="snapshot-cue-icon">{expanded ? '↶' : '↗'}</span>
            </>
          )}
        </span>
      </button>

      <div className="snapshot-faces">
        <div className="snapshot-front" aria-hidden={expanded} inert={expanded}>
          <div className="snapshot-copy">
            <p className="snapshot-type">{snapshot.showNumber !== false && <span aria-hidden="true">{String(number).padStart(2, '0')}</span>}{snapshot.type}</p>
            <h3>{snapshot.title}</h3>
            {snapshot.subtitle && <p className="snapshot-subtitle">{snapshot.subtitle}</p>}
            <p className="snapshot-positioning">{snapshot.positioning}</p>
            {snapshot.conceptLabel && <p className="snapshot-concept">{snapshot.conceptLabel}</p>}
            <p className="snapshot-hook">{snapshot.hook}</p>
          </div>
          <SnapshotVisual visual={snapshot.visual} />
        </div>

        <div className="snapshot-back" id={panelId} aria-hidden={!expanded} inert={!expanded} role="region" aria-label={`${snapshot.title} snapshot`}>
          <p className="snapshot-type">Project snapshot</p>
          <h3>{snapshot.title}</h3>
          {snapshot.summary && <p className="snapshot-summary">{snapshot.summary}</p>}
          {snapshot.evidenceHeading && <p className="snapshot-evidence-heading">{snapshot.evidenceHeading}</p>}
          <ul className="snapshot-evidence">
            {snapshot.evidence.map((item) => (
              <li key={typeof item === 'string' ? item : item.emphasis}>
                {typeof item === 'string' ? item : <>{item.prefix}<strong>{item.emphasis}</strong>{item.suffix}</>}
              </li>
            ))}
          </ul>
          {snapshot.takeaway && <p className="snapshot-takeaway">{snapshot.takeaway}</p>}
          {snapshot.context && <p className="snapshot-context">{snapshot.context}</p>}
          {snapshot.label && <p className="snapshot-label">{snapshot.label}</p>}
        </div>
      </div>
    </article>
  )
}
