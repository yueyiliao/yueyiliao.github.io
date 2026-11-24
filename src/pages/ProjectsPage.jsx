import ProjectCollection from '../components/ProjectCollection.jsx'
import ContactPage from './ContactPage.jsx'

export default function ProjectsPage({ snapshotId, onNavigate }) {
  return (
    <>
      <section className="projects-title">
        <div className="container">
          <h1>Work</h1>
        </div>
      </section>

      <div className="content-section">
        <ProjectCollection
          key={snapshotId || 'work'}
          initialProjectId={snapshotId}
          onNavigate={onNavigate}
          featuredTitle="Selected Work"
          variant="work"
        />
      </div>
      <ContactPage />
    </>
  )
}
