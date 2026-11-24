import CaseStudyLayout from './CaseStudyLayout.jsx'
import './AcademicCaseStudy.css'

function LineIcon({ path }) {
  return (
    <svg className="academic-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  )
}

function ArtifactCard({ title, description, fileType, icon, href, openInNewTab = true }) {
  return (
    <a className="academic-artifact-link" href={href} target={openInNewTab ? '_blank' : undefined} rel={openInNewTab ? 'noopener noreferrer' : undefined}>
      <LineIcon path={icon} />
      <span className="academic-artifact-content">
        <span className="academic-artifact-title">{title}</span>
        <span className="academic-artifact-description">{description}</span>
        <span className="academic-artifact-type">{fileType}</span>
        {openInNewTab && <span className="sr-only"> (opens in a new tab)</span>}
      </span>
      <span className="academic-artifact-arrow" aria-hidden="true">↗</span>
    </a>
  )
}

export default function AcademicCaseStudy({ study, onNavigate }) {
  const prefix = study.headingPrefix ?? 'academic'
  const ids = { challenge: 'challenge', contribution: 'contribution', approach: 'approach', outcome: 'outcome', ...study.sectionIds }
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: ids.contribution, label: 'My Contribution' },
    { id: ids.approach, label: 'My Approach' },
    { id: ids.outcome, label: 'Planning Outcome' },
    { id: 'artifacts', label: 'Supporting Artifacts' },
  ]

  return (
    <CaseStudyLayout topId={study.topId} navItems={navItems} onNavigate={onNavigate} className="pm-case academic-case" backToWork>
      <section className="academic-hero" aria-labelledby={`${prefix}-title`}>
        <div className="academic-content">
          <p className="eyebrow">Academic Project · NYU SPS</p>
          <h1 id={`${prefix}-title`}>{study.title}</h1>
          <p className="academic-competency">{study.competency}</p>
          <p className="academic-timeline">{study.timeline}</p>
          <p className="academic-disclaimer">{study.disclaimer}</p>

          <dl className="academic-metrics" aria-label={study.metricLabel ?? 'Planning scope and analysis'} aria-describedby={study.metricNote ? `${prefix}-metrics-note` : undefined}>
            {study.metrics.map(({ value, label }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          {study.metricNote && <p id={`${prefix}-metrics-note`} className="academic-metric-note">{study.metricNote}</p>}
        </div>
      </section>

      <section id="overview" aria-labelledby={`${prefix}-overview-heading`}>
        <div className="academic-content">
          <h2 id={`${prefix}-overview-heading`}>Project Overview</h2>
          <p>{study.overview}</p>

          <div id={ids.challenge} className="academic-challenge">
            <h2>The Challenge</h2>
            <p>{study.challenge}</p>
          </div>
        </div>
      </section>

      <section id={ids.contribution} className="academic-contribution" aria-labelledby={`${prefix}-contribution-heading`}>
        <div className="academic-content">
          <h2 id={`${prefix}-contribution-heading`}>My Contribution</h2>
          <p>{study.contribution}</p>
        </div>
      </section>

      <section id={ids.approach} aria-labelledby={`${prefix}-approach-heading`}>
        <div className="academic-content">
          <h2 id={`${prefix}-approach-heading`}>My Approach</h2>
          <ul className="academic-approach-list" role="list">
            {study.approach.map(({ id, title, description, icon }) => (
              <li key={title} id={id}>
                <LineIcon path={icon} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id={ids.outcome} aria-labelledby={`${prefix}-outcome-heading`}>
        <div className="academic-content">
          <h2 id={`${prefix}-outcome-heading`}>Planning Outcome</h2>
          <p>{study.outcome}</p>
        </div>
      </section>

      <section id="artifacts" aria-labelledby={`${prefix}-artifacts-heading`}>
        <div className="academic-content">
          <h2 id={`${prefix}-artifacts-heading`}>Supporting Artifacts</h2>
          <p>{study.artifactsIntro}</p>
          <ul className="academic-artifact-list" role="list">
            {study.artifacts.map((artifact) => (
              <li key={artifact.href}>
                <ArtifactCard {...artifact} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </CaseStudyLayout>
  )
}
