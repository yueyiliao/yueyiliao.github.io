const coreCompetencies = [
  'Requirements & Scope Definition',
  'Stakeholder Coordination',
  'Project Planning',
  'Risk & Dependency Management',
  'Process Improvement',
  'Cross-Functional Coordination',
]

const tools = ['Excel/Google Sheets', 'Asana', 'Monday.com', 'Jira']

export default function AboutPage() {
  return (
    <section className="home-skills" aria-label="Skills and tools">
      <div className="container home-skills-grid">
        <div className="skill-group">
          <h2>Core Competencies</h2>
          <ul className="pill-list" aria-label="Core competencies">
            {coreCompetencies.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-group">
          <h2>Tools &amp; Platforms</h2>
          <ul className="pill-list tools-list" aria-label="Tools and platforms">
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
