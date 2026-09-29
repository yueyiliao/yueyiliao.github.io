import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
import { Section } from '../../components/CaseStudyParts.jsx'
import './WebServesPage.css'
import './MobileIdentityPage.css'

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'scope', label: 'Scope' },
  { id: 'dependencies', label: 'System Dependencies' },
  { id: 'readiness', label: 'Risk & Readiness' },
  { id: 'ownership', label: 'My Ownership' },
  { id: 'current-state', label: 'Current State' },
]

const locations = [
  ['SPS Midtown', 'Building Access'],
  ['Bobst Library', 'Printing + Library Services'],
  ['Downstein Dining Hall', 'Meal Plan'],
]

const inScope = [
  '3 pilot locations', 'NFC-capable iOS / Android', 'One active device per user',
  'Access / printing / library / dining', 'Credential lifecycle',
  'Security / privacy', 'Training / guidance', 'Pilot testing',
]

const outOfScope = [
  'Global NYU rollout', 'Wearables', 'Visitors / alumni',
  'Multiple active devices', 'Account-system redesign', 'Long-term operations',
]

const dependencies = [
  { title: 'Identity', detail: 'Student status · credentials · authorization', side: 'left', row: 1 },
  { title: 'Hardware', detail: 'Readers · NFC compatibility', side: 'left', row: 2 },
  { title: 'Campus Services', detail: 'Access · printing · library · dining', side: 'left', row: 3 },
  { title: 'Platforms', detail: 'iOS / Android · wallet requirements', side: 'right', row: 1 },
  { title: 'Governance', detail: 'Security · privacy · compliance', side: 'right', row: 2 },
  { title: 'Readiness', detail: 'Training · support · department participation', side: 'right', row: 3 },
]

const risks = [
  { category: 'Security', example: 'Lost device', mitigation: 'Suspend / revoke credential' },
  { category: 'Adoption', example: 'Incompatible device', mitigation: 'Keep physical-card fallback' },
  { category: 'Timeline', example: 'Cross-team delay', mitigation: 'Early ownership + contingency' },
  { category: 'Technology', example: 'Reader compatibility gap', mitigation: 'Validate hardware before pilot', illustrative: true },
  { category: 'Compliance', example: 'Unclear privacy requirements', mitigation: 'Review data-handling requirements', illustrative: true },
  { category: 'Scope', example: 'Requests beyond the pilot', mitigation: 'Review changes against scope', illustrative: true },
]

const ownership = [
  'Business Value', 'Scope Definition', 'Assumptions',
  'Deliverables', 'Risk Planning', 'Dependency Mapping',
]

const established = [
  'Scope baseline', 'Business value / goals', 'Assumptions',
  'High-level requirements', 'Risk / mitigation plan', 'Dependency mapping',
]

const inProgress = [
  'WBS', 'Network diagram', 'Stakeholder register',
  'Project management plan', 'Future RTM / testing artifacts',
]

const competencies = [
  'Scope Definition', 'Systems Thinking', 'Dependency Mapping',
  'Risk Planning', 'Implementation Readiness',
]

export default function MobileIdentityPage({ onNavigate }) {
  return (
    <CaseStudyLayout topId="mobile-identity-top" navItems={navItems} onNavigate={onNavigate} className="pm-case mi-case" backToWork>
      <section id="overview" className="mi-overview">
        <div>
          <p className="eyebrow">01 / Overview</p>
          <p className="mi-context">ACADEMIC · NYU SPS · IT IMPLEMENTATION PLANNING</p>
          <h1>NYU Mobile Identity Rollout</h1>
          <p className="pm-intro">Planning a controlled mobile-credential pilot across systems, hardware, security, and campus services.</p>
          <dl className="mi-metadata">
            <div><dt>Timeline</dt><dd>Sep 2026 – Present</dd></div>
            <div><dt>Proposed Pilot</dt><dd>Summer 2027</dd></div>
            <div><dt>Status</dt><dd>Planning / Design Stage</dd></div>
            <div><dt>Focus</dt><dd>Scope · Dependencies · Risk · Readiness</dd></div>
          </dl>
          <div className="mi-locations" aria-label="Proposed pilot locations and services">
            {locations.map(([name, service]) => (
              <div key={name}>
                <h2>{name}</h2>
                <p>{service}</p>
              </div>
            ))}
          </div>
          <p className="mi-disclaimer">Academic planning project — not a production NYU deployment.</p>
        </div>
      </section>

      <Section id="scope" eyebrow="02 / Scope" title="From enterprise idea to controlled pilot">
        <div className="mi-boundary">
          <div className="mi-in">
            <h3><span>IN</span> The pilot boundary</h3>
            <ul>{inScope.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="mi-out">
            <h3><span>OUT</span> Beyond this pilot</h3>
            <ul>{outOfScope.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
        <p className="mi-takeaway">The project became manageable by defining what the pilot would not attempt to solve.</p>
        <div className="mi-lifecycle" aria-label="Credential lifecycle">
          <span className="eyebrow">Lifecycle</span>
          <ol>
            {['Provision', 'Activate', 'Use', 'Replace / Recover', 'Revoke'].map((step, index) => (
              <li key={step}>{index > 0 && <span aria-hidden="true">→</span>}{step}</li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="dependencies" eyebrow="03 / System Dependencies" title="A mobile credential only works if the ecosystem is ready">
        <figure className="mi-ecosystem">
          <div className="mi-dependency-map">
            <svg className="mi-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M28 16 H50 V50 M28 50 H72 M28 84 H50 V50 M72 16 H50 M72 84 H50" />
            </svg>
            <div className="mi-hub"><span className="eyebrow">Proposed system</span><h3>Mobile Credential Pilot</h3></div>
            {dependencies.map(node => (
              <div key={node.title} className={`mi-node mi-node-${node.side}`} style={{ '--node-row': node.row }}>
                <h3>{node.title}</h3>
                <p>{node.detail}</p>
              </div>
            ))}
          </div>
          <figcaption className="mi-takeaway">This is a systems-integration problem, not simply a mobile-app feature.</figcaption>
        </figure>
      </Section>

      <Section id="readiness" eyebrow="04 / Risk & Readiness" title="Plan the response before the pilot">
        <p className="mi-section-note">10 identified risks across six categories.</p>
        <div className="mi-risks">
          {risks.map(risk => (
            <article key={risk.category} className="mi-risk">
              <h3>{risk.category}</h3>
              {risk.illustrative && <span className="mi-example-label">Illustrative planning example</span>}
              <p>{risk.example}</p>
              <p className="mi-mitigation"><span aria-hidden="true">→</span>{risk.mitigation}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="ownership" eyebrow="05 / My Ownership" title="What I owned">
        <ul className="mi-ownership">
          {ownership.map((item, index) => <li key={item}><span aria-hidden="true">0{index + 1}</span>{item}</li>)}
        </ul>
        <p className="mi-takeaway">Within the team project, I drove a substantial portion of the project-definition baseline and risk/dependency planning.</p>
        <p className="mi-team-note"><strong>Team-owned:</strong> overall concept, final proposal, technical solution, full requirements set, future testing, and pilot deliverables.</p>
      </Section>

      <Section id="current-state" eyebrow="06 / Current State" title="A planning baseline, with delivery planning in progress">
        <p className="pm-status">PLANNING / DESIGN STAGE</p>
        <div className="mi-state">
          <div><h3>Established</h3><ul>{established.map(item => <li key={item}>{item}</li>)}</ul></div>
          <div><h3>In Progress</h3><ul>{inProgress.map(item => <li key={item}>{item}</li>)}</ul></div>
        </div>
        <aside className="mi-target">
          <span className="eyebrow">TARGET — NOT RESULT</span>
          <p>Proposed target: <strong>80%</strong> of pilot participants rate the experience above <strong>4.0 / 5.0</strong>.</p>
        </aside>
        <p className="mi-section-note">There are currently no measured implementation results or production deployment.</p>
        <ul className="mi-competencies" aria-label="Project competencies">
          {competencies.map(item => <li key={item}>{item}</li>)}
        </ul>
      </Section>
    </CaseStudyLayout>
  )
}
