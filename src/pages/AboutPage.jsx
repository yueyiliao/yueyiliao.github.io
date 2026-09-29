import { useEffect, useState } from 'react'
import profileImg from '../assets/profile.png'
import ProfilePortrait from '../components/ProfilePortrait.jsx'

export default function AboutPage() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  const coreCompetencies = [
    'Requirements',
    'Scope Definition',
    'Stakeholder Coordination',
    'Risk & Dependencies',
    'Process Improvement',
    'Implementation Planning',
  ]

  const tools = ['Jira', 'Asana', 'Excel', 'SQL/Database']

  const credentials = [
    { title: 'Digital Project Coordinator', context: 'WebServes' },
    { title: 'M.S. Project Management', context: 'NYU, expected Jan 2028' },
    { title: 'B.A. Psychology', context: 'UC Riverside' },
    { title: 'CAPM®', context: 'PMI' },
    { title: 'Student Ambassador', context: 'NYU SPS Project Management Student Network' },
  ]

  useEffect(() => {
    const updateBackToTopVisibility = () => {
      setShowBackToTop(document.documentElement.scrollHeight > window.innerHeight + 8)
    }

    updateBackToTopVisibility()
    window.addEventListener('resize', updateBackToTopVisibility)
    return () => window.removeEventListener('resize', updateBackToTopVisibility)
  }, [])

  return (
    <>
      <section className="about-hero">
        <div className="container about-layout">
          <aside className="profile-card" aria-label="Profile summary">
            <ProfilePortrait defaultSrc={profileImg} alt="Yueyi Liao" />
            <div>
              <h1>Yueyi (UE) Liao</h1>
              <p>Project Management · Digital Implementation · Process &amp; Requirements</p>
            </div>
          </aside>

          <div className="about-copy">
            <p className="eyebrow">About Me</p>
            <h2>From psychology to project management</h2>
            <div className="text-stack">
              <p>
                My background in psychology at UC Riverside shaped how I think
                about users, communication, behavior, and stakeholder needs.
                That perspective now informs my approach to project management.
              </p>
              <p>
                I’m pursuing an M.S. in Project Management at NYU and building
                hands-on experience as a Digital Project Coordinator at WebServes.
                My work and studies focus on digital project coordination, IT
                implementation planning, requirements, process improvement,
                stakeholder coordination, and cross-functional project delivery.
              </p>
              <p>
                I particularly enjoy making complex or ambiguous projects clearer:
                defining what the team is solving, establishing scope, clarifying
                requirements, identifying ownership and dependencies, surfacing
                risks, and creating an executable structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container skills-section">
          <div className="skill-group">
            <h2>Experience &amp; Credentials</h2>
            <dl className="about-credentials">
              {credentials.map((credential) => (
                <div key={credential.title}>
                  <dt>{credential.title}</dt>
                  <dd>{credential.context}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="skill-group">
            <h2>Core Competencies</h2>
            <ul className="pill-list" aria-label="Core competencies">
              {coreCompetencies.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skill-group">
            <h2>Tools & Platforms</h2>
            <ul className="pill-list tools-list" aria-label="Tools and platforms">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          {showBackToTop && (
            <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to top
            </button>
          )}
        </div>
      </section>
    </>
  )
}
