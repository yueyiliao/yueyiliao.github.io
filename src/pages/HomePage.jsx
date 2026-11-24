import ProfilePortrait from '../components/ProfilePortrait.jsx'
import SiteLink from '../components/SiteLink.jsx'
import nyuLogo from '../assets/nyu-logo.png'
import profileImg from '../assets/profile.png'
import ucrLogo from '../assets/ucr-logo.avif'
import { projects, webServesTitle } from '../data/projects.js'
import { resumePath } from '../data/resume.js'
import ContactPage from './ContactPage.jsx'
import SkillsSection from './SkillsSection.jsx'
import './HomePage.css'

const academicProjects = [
  {
    id: 'mobile-identity',
    title: 'NYU Tap and Go (Mobile Credential) Rollout',
    competency: 'Change Management & Implementation Planning',
    icon: <path d="M12 22s7-3 7-10V5l-7-3-7 3v7c0 7 7 10 7 10ZM9 12l2 2 4-4" />,
    description: 'Led risk identification and mitigation planning for a complex IT implementation project involving organizational change, interdepartmental coordination, and technical dependencies.',
  },
  {
    id: 'second-hand-marketplace',
    icon: <path d="m12 2 10 5-10 5L2 7l10-5ZM2 12l10 5 10-5M2 17l10 5 10-5" />,
  },
  {
    id: 'google-hackathon',
    competency: 'SME Engagement & Team Communication',
    icon: <path d="M21 14a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9ZM7 8h10M7 11h7" />,
    description: 'Proactively consulted marketing SMEs to identify gaps in our understanding and obtain the information needed to support the team’s strategy development.',
  },
]

function ProjectLink({ project, title, onNavigate }) {
  const hasCaseStudy = project.caseStudyStatus === 'available' && project.path

  return (
    <SiteLink
      className="home-text-link"
      href={hasCaseStudy ? project.path : `/projects#project-${project.id}`}
      onNavigate={onNavigate}
      aria-label={`View ${hasCaseStudy ? 'case study' : 'project snapshot'} for ${title}`}
    >
      {hasCaseStudy ? 'View Case Study' : 'View Snapshot'} <span aria-hidden="true">↗</span>
    </SiteLink>
  )
}

function AcademicProjectCard({ id, title: titleOverride, competency, icon, description, onNavigate }) {
  const project = projects.find((project) => project.id === id)
  const title = titleOverride ?? project.title

  return (
    <article className="home-academic-card">
      <h5 className="home-competency">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
        {competency ?? project.snapshot.positioning}
      </h5>
      <p className="home-academic-project-name">{title}</p>
      {project.topic && <p className="home-academic-project-topic">{project.topic}</p>}
      <p>{description ?? project.summary}</p>
      <ProjectLink project={project} title={title} onNavigate={onNavigate} />
    </article>
  )
}

export default function HomePage({ onNavigate }) {
  const independentProject = projects.find(({ id }) => id === 'cat-feeding-calculator')

  return (
    <div className="portfolio-page">
      <section id="about-me" className="home-hero" aria-labelledby="home-name">
        <div className="container">
          <div className="home-introduction">
            <div>
              <p className="home-availability">Seeking Summer 2027 Internships</p>
              <h1 id="home-name">Yueyi (UE) Liao</h1>
              <p className="home-descriptor">Project Management · Digital Implementation</p>
              <p className="home-biography">
                I’m pursuing an <strong>M.S. in Project Management at New York University</strong> and building hands-on experience as a <strong>Digital Project Coordinator at WebServes</strong>. My work and studies focus on digital projects and IT implementation, with an emphasis on process improvement, stakeholder coordination, and project execution.
              </p>
              <div className="button-row home-actions">
                <a className="primary-button" href={resumePath} download>
                  Download Resume <span aria-hidden="true">↓</span>
                </a>
                <SiteLink className="secondary-button" href="/projects" onNavigate={onNavigate}>
                  Explore My Work <span aria-hidden="true">↗</span>
                </SiteLink>
              </div>
            </div>
            <div className="home-profile">
              <ProfilePortrait defaultSrc={profileImg} alt="Portrait of Yueyi Liao" />
              <div className="home-certification">
                <p><strong>CAPM® Certified</strong></p>
                <p>Project Management Institute (PMI)</p>
                <p><time dateTime="2026-05">May 2026</time></p>
              </div>
            </div>
          </div>
          <dl className="home-highlights" aria-label="Professional highlights">
            <div>
              <dt>Current Internship</dt>
              <dd><strong>Digital Project Coordinator</strong></dd>
              <dd>WebServes</dd>
            </div>
            <div>
              <dt>Student Leadership</dt>
              <dd><strong>Secretary · Executive Board</strong></dd>
              <dd>NYU SPS Project Management Student Network</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="container home-section home-experience" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Work Experience</h2>
        <div>
          <div className="home-entry-heading">
            <div>
              <p className="home-organization">WebServes</p>
              <h3>Digital Project Coordinator</h3>
            </div>
            <p className="home-date"><time dateTime="2026-08">August 2026</time> – Present</p>
          </div>
          <p className="home-note">9-Month Internship · Remote · Nonprofit Organization</p>
          <p className="home-entry-description">Coordinate requirements and project execution across two concurrent digital projects, working closely with six team members and the project sponsor to align priorities, clarify ownership, track progress, and address delivery risks.</p>

          <article className="home-featured-project">
            <p className="home-organization">Featured Project</p>
            <h4>{webServesTitle}</h4>
            <p className="home-project-focus">Business Strategy · Digital Delivery · Process Improvement</p>
            <dl className="home-project-brief">
              <div>
                <dt>Project Purpose</dt>
                <dd>Reposition the organizational website as a more effective client acquisition channel by improving service clarity, simplifying the visitor journey, and reducing friction between initial engagement and service inquiries.</dd>
              </div>
              <div>
                <dt>My Role</dt>
                <dd>Own the coordination of the website update, from requirements definition and stakeholder alignment to implementation tracking, usability testing, and launch readiness.</dd>
              </div>
            </dl>
          </article>

          <div className="home-metrics">
            <div>
              <p className="home-metric-context">WebServes Experience</p>
              <dl className="home-metric-list">
                <div>
                  <dt>Digital projects</dt>
                  <dd>2</dd>
                </div>
                <div>
                  <dt>
                    Direct stakeholders
                    <small className="home-note block">6 team members + 1 sponsor</small>
                  </dt>
                  <dd>7</dd>
                </div>
              </dl>
            </div>
            <div>
              <p className="home-metric-context">{webServesTitle}</p>
              <dl className="home-metric-list">
                <div>
                  <dt>Target inquiry conversion lift</dt>
                  <dd>+20%</dd>
                </div>
              </dl>
              <p className="home-note">In progress · Conversion target to be evaluated after launch</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container home-section" aria-labelledby="leadership-heading">
        <h2 id="leadership-heading">Leadership &amp; Involvement</h2>
        <div>
          <h3 className="home-leadership-organization">NYU SPS Project Management Student Network (PMSN)</h3>
          <ol className="home-leadership-roles">
            <li>
              <div className="home-entry-heading">
                <h4>Secretary <span>· Executive Board</span></h4>
                <p className="home-date"><time dateTime="2026-11">November 2026</time> – Present</p>
              </div>
              <p>Support executive board operations through internal communication, meeting coordination, event planning, and stakeholder engagement. Help organize professional networking opportunities for the NYU project management community.</p>
            </li>
            <li>
              <div className="home-entry-heading">
                <h4>Student Ambassador</h4>
                <p className="home-date"><time dateTime="2026-09">September 2026</time> – <time dateTime="2026-11">November 2026</time></p>
              </div>
              <p>Supported student engagement, event coordination, and communication between students and the Executive Board.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="container home-section" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <div>
          <article className="home-education">
            <div className="home-entry-heading home-education-heading">
              <div className="home-university">
                <img className="home-university-logo" src={nyuLogo} width="48" height="48" alt="" />
                <div>
                  <p className="home-organization">New York University</p>
                  <h3>Master of Science in Project Management</h3>
                </div>
              </div>
              <p className="home-date"><time dateTime="2026-09">September 2026</time> – <time dateTime="2028-01">January 2028</time> <strong>(Expected)</strong></p>
            </div>
            <section className="home-academic-projects" aria-labelledby="academic-projects-heading">
              <h4 id="academic-projects-heading">Selected Academic Projects</h4>
              {academicProjects.map((project) => (
                <AcademicProjectCard key={project.id} {...project} onNavigate={onNavigate} />
              ))}
            </section>
          </article>
          <article className="home-education">
            <div className="home-entry-heading home-education-heading">
              <div className="home-university">
                <img className="home-university-logo" src={ucrLogo} width="48" height="48" alt="" />
                <div>
                  <p className="home-organization">University of California, Riverside</p>
                  <h3>Bachelor of Arts in Psychology</h3>
                </div>
              </div>
              <p className="home-date"><time dateTime="2022-09">September 2022</time> – <time dateTime="2026-06">June 2026</time></p>
            </div>
            <p className="home-entry-description">My psychology background informs how I approach user needs, stakeholder communication, and decision-making in project environments.</p>
          </article>
        </div>
      </section>

      <section className="container home-section" aria-labelledby="independent-projects-heading">
        <h2 id="independent-projects-heading">Independent Projects</h2>
        <article className="home-project-row">
          <div>
            <h3>{independentProject.title}</h3>
            <p className="home-project-focus">{independentProject.snapshot.positioning}</p>
            <p>An independent product initiative that helps cat owners make more informed feeding decisions by estimating feeding amounts, searching food calorie data, and identifying high-risk weight-loss scenarios.</p>
          </div>
          <ProjectLink project={independentProject} title={independentProject.title} onNavigate={onNavigate} />
        </article>
      </section>

      <SkillsSection />
      <ContactPage />
    </div>
  )
}
