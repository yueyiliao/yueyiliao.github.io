import ProjectCollection from '../components/ProjectCollection.jsx'

const credentials = [
  { title: 'Digital Project Coordinator', context: 'WebServes' },
  { title: 'M.S. Project Management', context: 'New York University' },
  { title: 'CAPM®', context: 'Project Management Institute' },
  { title: 'Student Ambassador', context: 'NYU SPS Project Management Student Network' },
]

export default function HomePage({ onNavigate }) {
  return (
    <>
      <section className="about-hero home-hero">
        <div className="container">
          <div className="hero-copy">
            <h1>Yueyi (UE) Liao</h1>
            <p className="home-descriptor">Project Management · Digital Implementation · Process &amp; Requirements</p>
            <p className="home-statement">
              I turn ambiguous project inputs into structured, executable plans by clarifying requirements, scope, dependencies, ownership, and success criteria.
            </p>
          </div>
          <dl className="credibility-list" aria-label="Experience and credentials">
            {credentials.map((credential) => (
              <div key={credential.title}>
                <dt>{credential.title}</dt>
                <dd>{credential.context}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <div className="content-section">
        <ProjectCollection onNavigate={onNavigate} featuredTitle="Selected Work" variant="work" />
      </div>
    </>
  )
}
