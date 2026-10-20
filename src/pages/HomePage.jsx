import ProjectCollection from '../components/ProjectCollection.jsx'
import profileImg from '../assets/profile.png'
import ProfilePortrait from '../components/ProfilePortrait.jsx'
import AboutPage from './AboutPage.jsx'
import ContactPage from './ContactPage.jsx'

const credentials = [
  { title: 'Digital Project Coordinator', context: 'WebServes' },
  { title: 'M.S. Project Management', context: 'New York University' },
  { title: 'CAPM®', context: 'Project Management Institute' },
  { title: 'Student Ambassador', context: 'NYU SPS Project Management Student Network' },
]

export default function HomePage({ onNavigate }) {
  return (
    <div className="portfolio-page">
      <section id="about-me" className="about-hero home-hero">
        <div className="container">
          <div className="home-introduction">
            <div className="hero-copy">
              <h1>Yueyi (UE) Liao</h1>
              <p className="home-descriptor">Project Management · Digital Implementation · Process &amp; Requirements</p>
              <p className="home-statement">
                I turn ambiguous project inputs into structured, executable plans by clarifying requirements, scope, dependencies, ownership, and success criteria.
              </p>
              <div className="home-biography text-stack">
                <p>
                  My background in psychology at UC Riverside shaped how I think about users, communication, behavior, and stakeholder needs. That perspective now informs my approach to project management.
                </p>
                <p>
                  I’m pursuing an M.S. in Project Management at NYU and building hands-on experience as a Digital Project Coordinator at WebServes. My work and studies focus on digital project coordination, IT implementation planning, requirements, process improvement, stakeholder coordination, and cross-functional project delivery.
                </p>
              </div>
            </div>
            <ProfilePortrait defaultSrc={profileImg} alt="Yueyi Liao" />
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
      <AboutPage />
      <div id="work" className="content-section">
        <ProjectCollection onNavigate={onNavigate} featuredTitle="Selected Work" variant="work" />
      </div>
      <ContactPage />
    </div>
  )
}
